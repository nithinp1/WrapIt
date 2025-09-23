import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const artisans = [
  {
    id: 'artisan-1',
    name: 'Elena Garcia',
  avatar: { imageUrl: '/assets/P1.png', description: 'Elena Garcia', imageHint: 'Elena Garcia' },
    story: 'Elena has been crafting with passion for over 20 years. Her work is inspired by nature and the changing seasons, bringing a touch of the outdoors into every piece.',
    showcaseImage: findImage('artisan-1-showcase'),
  },
  {
    id: 'artisan-2',
    name: 'Marcus Holloway',
  avatar: { imageUrl: '/assets/P2.png', description: 'Marcus Holloway', imageHint: 'Marcus Holloway' },
    story: 'A third-generation woodworker, Marcus combines traditional techniques with modern design. Each item is a testament to his family\'s legacy of quality and craftsmanship.',
    showcaseImage: findImage('artisan-2-showcase'),
  },
  {
    id: 'artisan-3',
    name: 'Sarah Chen',
  avatar: { imageUrl: '/assets/P3.png', description: 'Sarah Chen', imageHint: 'Sarah Chen' },
    story: 'Sarah finds joy in the delicate art of pottery. Her studio, filled with light and inspiration, is where she brings her beautiful and functional ceramic creations to life.',
    showcaseImage: findImage('artisan-3-showcase'),
  },
];

export const categories = [
  { id: 'cat-1', name: 'Featured Gifts' },
  { id: 'cat-2', name: 'Birthday Gifts' },
  { id: 'cat-3', name: 'Wedding Specials' },
  { id: 'cat-4', name: 'Handcrafted' },
];

export const products = [
  {
    id: 'prod-1',
    title: 'Handcrafted Wooden Toy Car',
    description: 'A classic toy, lovingly handcrafted from sustainable maple wood. Perfect for imaginative play.',
    price: 35.00,
    images: [findImage('product-1-1'), findImage('product-1-2')],
    artisanId: 'artisan-2',
    categoryId: 'cat-4',
    reviews: [
      { id: 'rev-1', author: 'Jane D.', rating: 5, comment: 'Beautiful craftsmanship. My son loves it!' },
      { id: 'rev-2', author: 'Mark T.', rating: 5, comment: 'Solid wood, smooth finish. A timeless toy.' },
    ],
    customizationOptions: {
      themes: ['Classic Red', 'Ocean Blue', 'Forest Green'],
    },
  },
  {
    id: 'prod-2',
    title: 'Engraved Leather Journal',
    description: 'A beautiful, genuine leather journal that can be personalized with a name or message.',
    price: 55.00,
    images: [findImage('product-2-1')],
    artisanId: 'artisan-1',
    categoryId: 'cat-1',
    reviews: [
      { id: 'rev-3', author: 'Emily R.', rating: 5, comment: 'The leather is so soft and the engraving is perfect.' },
    ],
    customizationOptions: {
      themes: ['Vintage Brown', 'Midnight Black'],
    },
  },
  {
    id: 'prod-3',
    title: 'Hand-Painted Ceramic Mug',
    description: 'Start your day with a unique, hand-painted mug. Each one is a small piece of art.',
    price: 28.00,
    images: [findImage('product-3-1')],
    artisanId: 'artisan-3',
    categoryId: 'cat-4',
    reviews: [
      { id: 'rev-4', author: 'Chris P.', rating: 4, comment: 'Lovely design, but a bit smaller than I expected.' },
      { id: 'rev-5', author: 'Anna K.', rating: 5, comment: 'I bought this as a gift and they adored it. So unique!' },
    ],
    customizationOptions: {
      themes: ['Floral Pattern', 'Geometric Lines', 'Abstract Splash'],
    },
  },
  {
    id: 'prod-4',
    title: 'Scented Soy Candle',
    description: 'Relax and unwind with our eco-friendly soy candles, available in a variety of calming scents.',
    price: 22.00,
    images: [findImage('product-4-1')],
    artisanId: 'artisan-1',
    categoryId: 'cat-3',
    reviews: [
      { id: 'rev-6', author: 'Liam G.', rating: 5, comment: 'The lavender scent is incredible. Fills the whole room.' },
    ],
    customizationOptions: {
      themes: ['Lavender & Sage', 'Vanilla Bean', 'Sandalwood & Musk'],
    },
  },
  {
    id: 'prod-5',
    title: 'Silver Heart Necklace',
    description: 'A delicate and elegant silver necklace, featuring a minimalist heart pendant. A perfect gift for a loved one.',
    price: 75.00,
    images: [findImage('product-5-1')],
    artisanId: 'artisan-1',
    categoryId: 'cat-3',
    reviews: [
      { id: 'rev-7', author: 'Olivia W.', rating: 5, comment: 'So pretty and delicate. I wear it every day.' },
    ],
    customizationOptions: {
      themes: ['Silver', 'Gold Plated', 'Rose Gold Plated'],
    },
  },
  {
    id: 'prod-6',
    title: 'Gourmet Chocolate Box',
    description: 'An assortment of artisanal chocolates, handcrafted with the finest ingredients for a decadent treat.',
    price: 45.00,
    images: [findImage('product-6-1')],
    artisanId: 'artisan-2',
    categoryId: 'cat-1',
    reviews: [
        { id: 'rev-8', author: 'Ben S.', rating: 5, comment: 'Best chocolates I have ever had. The flavors are amazing.' },
        { id: 'rev-9', author: 'Sophia L.', rating: 5, comment: 'A luxurious gift. Beautifully packaged and delicious.' },
    ],
    customizationOptions: {
        themes: ['Dark Chocolate Mix', 'Milk & White', 'Caramel Filled'],
    },
  },
  {
    id: 'prod-7',
    title: 'Hand-Woven Wall Hanging',
    description: 'Add a touch of bohemian chic to your home with this beautiful hand-woven wall hanging, made with natural fibers.',
    price: 65.00,
    images: [findImage('product-7-1')],
    artisanId: 'artisan-1',
    categoryId: 'cat-4',
    reviews: [],
    customizationOptions: {
        themes: ['Natural Tones', 'Ocean Blues', 'Sunset Hues'],
    },
  },
  {
    id: 'prod-8',
    title: 'Carved Wooden Bowl',
    description: 'A stunning and functional piece, this bowl is hand-carved from a single piece of olive wood, perfect for salads or as a decorative item.',
    price: 85.00,
    images: [findImage('product-8-1')],
    artisanId: 'artisan-2',
    categoryId: 'cat-4',
    reviews: [],
    customizationOptions: {
        themes: ['Natural Finish', 'Dark Stain'],
    },
  },
  {
    id: 'prod-9',
    title: 'Pottery Bud Vase Set',
    description: 'A set of three small, elegant bud vases, each with a unique shape and glaze. Perfect for single stems or small bouquets.',
    price: 48.00,
    images: [findImage('product-9-1')],
    artisanId: 'artisan-3',
    categoryId: 'cat-4',
    reviews: [],
    customizationOptions: {
        themes: ['Earthy Tones', 'Pastel Collection', 'Monochrome'],
    },
  }
];

export type Product = (typeof products)[0];
export type Artisan = (typeof artisans)[0];
export type Category = (typeof categories)[0];
export type Review = (typeof products)[0]['reviews'][0];
