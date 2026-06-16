import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const EMAIL_TO = 'svetahusainova1@gmail.com';
const FORM_INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  comment: '',
};

const makeCartText = (cartItems) => {
  if (!cartItems.length) return 'Корзина пуста';
  return cartItems
    .map((item) => `${item.title} — ${item.price}, количество: ${item.quantity}`)
    .join('\n');
};

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async (_, { getState, rejectWithValue }) => {
    const { form, requestTitle, cartItems } = getState().order;

    const payload = {
      _subject: `Новая заявка: ${requestTitle}`,
      _template: 'table',
      _captcha: 'false',
      'Источник заявки': requestTitle,
      'Имя': form.name,
      'Телефон': form.phone,
      'Email клиента': form.email || 'Не указан',
      'Комментарий': form.comment || 'Без комментария',
      'Корзина': makeCartText(cartItems),
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_TO}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) {
        return rejectWithValue(
          data.message || 'Сервис отправки временно недоступен. Попробуйте позже.'
        );
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        'Не удалось отправить заявку. Проверьте интернет или настройки сервиса отправки.'
      );
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isModalOpen: false,
    modalType: 'order',
    requestTitle: 'Заявка с сайта',
    form: FORM_INITIAL_STATE,
    cartItems: [],
    status: 'idle',
    error: null,
    successMessage: '',
  },
  reducers: {
    openModal: (state, action) => {
      const payload = action.payload || {};
      state.isModalOpen = true;
      state.modalType = payload.type || 'order';
      state.requestTitle = payload.title || 'Заявка с сайта';
      state.status = 'idle';
      state.error = null;
      state.successMessage = '';
      state.form = {
        ...FORM_INITIAL_STATE,
        ...(payload.form || {}),
      };
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.status = 'idle';
      state.error = null;
      state.successMessage = '';
    },
    updateFormField: (state, action) => {
      const { name, value } = action.payload;
      state.form[name] = value;
      state.error = null;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existed = state.cartItems.find((item) => item.id === product.id);
      if (existed) {
        existed.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    decreaseCartItem: (state, action) => {
      const item = state.cartItems.find((product) => product.id === action.payload);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.cartItems = state.cartItems.filter((product) => product.id !== action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((product) => product.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    markOrderSent: (state) => {
      state.status = 'succeeded';
      state.form = FORM_INITIAL_STATE;
      state.successMessage = 'Заявка отправлена. Проверьте почту получателя и подтвердите FormSubmit, если это первая заявка.';
      state.error = null;
    },
    resetOrderForm: (state) => {
      state.form = FORM_INITIAL_STATE;
      state.status = 'idle';
      state.error = null;
      state.successMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.successMessage = '';
      })
      .addCase(sendOrder.fulfilled, (state) => {
        state.status = 'succeeded';
        state.form = FORM_INITIAL_STATE;
        state.successMessage = 'Заявка отправлена. Мы скоро свяжемся с вами.';
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Не удалось отправить заявку.';
      });
  },
});

export const {
  openModal,
  closeModal,
  updateFormField,
  resetOrderForm,
  addToCart,
  decreaseCartItem,
  removeFromCart,
  clearCart,
  markOrderSent,
} = orderSlice.actions;
export { EMAIL_TO };
export default orderSlice.reducer;
