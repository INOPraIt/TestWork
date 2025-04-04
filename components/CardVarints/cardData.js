import imageEco from 'url:../../assets/images/imageEco.png';
import imageDefault from 'url:../../assets/images/imageDefault.png';
import imagePremium from 'url:../../assets/images/imagePremium.png';
import iconEco from 'url:../../assets/images/iconExo.svg';
import iconDefault from 'url:../../assets/images/iconDefault.svg';
import iconPremium from 'url:../../assets/images/iconPrem.svg';

export const cardData = [
  {
    id: 1,
    title: 'Эконом',
    description: 'Базовый вариант исполнения книги в качестве уникального подарка.',
    size: '20×20 см',
    price: '3884 ₽',
    image: imageEco,
    hit: false,
    modal: {
      icon: iconEco,
      descriptionOne: `
        Уникальный запоминающийся подарок 
        на всю жизнь. Самый большой формат 
        печати и премиальное исполнение. `,
      descriptionTwo: `
        Странички из плотной матовой фотобумаги приятно 
        перелистывать, а сама книга раскрывается на 180 
        градусов образуя плоскую поверхность на месте корешка.
      `,
      cover: {
        typeCover: 'Твердый переплет',
        material: 'Мелованная бумага с ламинацией, кашированная на переплетный картон',
        print: 'Цифровой офсет',
        binding: 'Проклейка термоклеем по корешку',
      },
      pages: {
        material: 'Мелованная бумага 170гр/м2',
        print: '-'
      }
    }
  },
  {
    id: 2,
    title: 'Стандарт',
    description: 'Самый популярный формат книги сочетает в себе крупный формат и высокое качество.',
    size: '25×25 см',
    price: '5992 ₽',
    image: imageDefault,
    hit: true,
    modal: {
      icon: iconDefault,
      descriptionOne: `
      Уникальный запоминающийся подарок 
      на всю жизнь. Самый большой формат 
      печати и премиальное исполнение. `,
      descriptionTwo: `
      Странички из плотной матовой фотобумаги приятно 
      перелистывать, а сама книга раскрывается на 180 
      градусов образуя плоскую поверхность на месте корешка.
    `,
      cover: {
        typeCover: 'Твердый переплет',
        material: 'Мелованная бумага с ламинацией, кашированная на переплетный картон',
        print: 'Цифровой офсет',
        binding: 'Проклейка термоклеем по корешку',
      },
      pages: {
        material: 'Мелованная бумага 170гр/м2',
        print: '-'
      }
    }
  },
  {
    id: 3,
    title: 'Премиум',
    description: 'Премиальное качество исполнения книги крупного формата.',
    size: '30×30 см',
    price: '8171 ₽',
    image: imagePremium,
    hit: false,
    modal: {
      icon: iconPremium,
      descriptionOne: `
        Уникальный запоминающийся подарок 
        на всю жизнь. Самый большой формат 
        печати и премиальное исполнение. `,
      descriptionTwo: `
        Странички из плотной матовой фотобумаги приятно 
        перелистывать, а сама книга раскрывается на 180 
        градусов образуя плоскую поверхность на месте корешка.
      `,
      cover: {
        typeCover: 'Твердый переплет',
        material: 'Мелованная бумага с ламинацией, кашированная на переплетный картон',
        print: 'Цифровой офсет',
        binding: 'Крепление термолистом',
      },
      pages: {
        material: 'Бумага 170 гр/м2',
        print: 'Фотопечать по процессу RA-4'
      }
    }
  }
];
