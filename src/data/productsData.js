import product1 from '../img/product/40c7dbe6-2153-49c7-ad35-56f898594e89.jpg';
import product2 from '../img/product/1ea550e5-27f1-4918-8ac3-12c84e01fb92.jpg';
import product3 from '../img/product/b0a2cca2-bab2-44e0-9ffd-38f35dc82cfc.jpg';
import product4 from '../img/product/ab8d0a25-0be9-4687-82e2-c6f06d476ad8.jpg';
import product5 from '../img/product/2adba627-3c63-423f-b30f-1d0e5406407c.jpg';
import product6 from '../img/product/990955a8-8d0c-4df8-9882-19b505718285.jpg';
import product7 from '../img/product/cd0836a9-cc51-4802-82af-5cb26465d219.jpg';
import product8 from '../img/product/d7b1589d-7aec-4f8e-bd29-71da8969a7f0.jpg';
import stock1 from '../img/stocks/36f832e4-26d2-407a-8321-7aaa60607b80.jpg';
import stock2 from '../img/stocks/97bb4366-6102-46ac-957f-535b9b10703f.jpg';
import stock3 from '../img/stocks/98a48899-93e0-495e-9b13-d3d86fb21dc8.jpg';
import stock4 from '../img/stocks/714e1492-f8bc-49c1-a91b-8c4bf756b426.jpg';

export const products = [
  { id: 'p1', title: 'ТРУБА ПРОФИЛЬНАЯ 40x20', price: 'от 78 500 ₽', description: 'Труба электросварная, применяется в строительстве и каркасных конструкциях.', image: product1, category: 'трубы' },
  { id: 'p2', title: 'АРМАТУРА А500С 12мм', price: 'от 67 300 ₽', description: 'Стержневая арматура периодического профиля для железобетонных конструкций.', image: product2, category: 'арматура' },
  { id: 'p3', title: 'ЛИСТ ГОРЯЧЕКАТАННЫЙ 4мм', price: 'от 82 900 ₽', description: 'Универсальный листовой прокат для металлоконструкций и промышленного применения.', image: product3, category: 'листы' },
  { id: 'p4', title: 'ШВЕЛЛЕР 14П', price: 'от 85 200 ₽', description: 'Фасонный прокат для несущих конструкций, перекрытий и усиления сооружений.', image: product4, category: 'швеллеры' },
  { id: 'p5', title: 'УГОЛОК РАВНОПОЛОЧНЫЙ 50x5', price: 'от 79 800 ₽', description: 'Металлический уголок для монтажных работ и строительных конструкций.', image: product5, category: 'уголки' },
  { id: 'p6', title: 'ЛИСТ ОЦИНКОВАННЫЙ 1мм', price: 'от 112 500 ₽', description: 'Лист с цинковым покрытием для кровельных работ и наружных конструкций.', image: product6, category: 'листы' },
  { id: 'p7', title: 'ТРУБА ВГП ДУ32', price: 'от 98 700 ₽', description: 'Водогазопроводная труба для систем отопления, водоснабжения и газовых магистралей.', image: product7, category: 'трубы' },
  { id: 'p8', title: 'ШВЕЛЛЕР 14П УСИЛЕННЫЙ', price: 'от 85 200 ₽', description: 'Фасонный прокат для несущих конструкций, перекрытий и усиления сооружений.', image: product8, category: 'швеллеры' },
];

export const stocks = [
  { id: 's1', title: 'ЛИСТ НЕРЖАВЕЮЩИЙ 2мм', price: 'от 245 000 ₽', description: 'Лист из нержавеющей стали марки AISI 304 для пищевой промышленности и декора.', image: stock1, category: 'акции' },
  { id: 's2', title: 'ПРОФНАСТИЛ С8', price: 'от 98 500 ₽', description: 'Профилированный лист для кровли, заборов и облицовки стен.', image: stock2, category: 'акции' },
  { id: 's3', title: 'ТРУБА ПРОФИЛЬНАЯ 60x40x2', price: 'от 84 300 ₽', description: 'Прямоугольная труба для строительных конструкций и каркасов.', image: stock3, category: 'акции' },
  { id: 's4', title: 'КАТАНКА 6мм', price: 'от 68 900 ₽', description: 'Стандартная катанка для армирования, сеток и общего применения.', image: stock4, category: 'акции' },
];

export const catalog = [...products, ...stocks];
