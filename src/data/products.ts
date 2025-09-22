import headphonesImg from '../assets/headphones.jpg';
import smartwatchImg from '../assets/smartwatch.jpg';
import tshirtImg from '../assets/tshirt.jpg';
import leatherBagImg from '../assets/leather-bag.jpg';
import deskLampImg from '../assets/desk-lamp.jpg';
import bluetoothSpeakerImg from '../assets/bluetooth-speaker.jpg';
import denimJacketImg from '../assets/denim-jacket.jpg';
import waterBottleImg from '../assets/water-bottle.jpg';
import diffuserImg from '../assets/diffuser.jpg';
import chargingPadImg from '../assets/charging-pad.jpg';
import woolSweaterImg from '../assets/wool-sweater.jpg';
import plantPotsImg from '../assets/plant-pots.jpg';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'electronics' | 'clothing' | 'accessories' | 'home';
  image: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.",
    price: 299.99,
    category: "electronics",
    image: headphonesImg,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Track your health goals effortlessly.",
    price: 249.99,
    category: "electronics",
    image: smartwatchImg,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors. Perfect for casual wear.",
    price: 29.99,
    category: "clothing",
    image: tshirtImg,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag crafted from premium materials. Ideal for work or casual outings.",
    price: 89.99,
    category: "accessories",
    image: leatherBagImg,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for home office or study.",
    price: 79.99,
    category: "home",
    image: deskLampImg,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 6,
    name: "Bluetooth Portable Speaker",
    description: "Compact wireless speaker with powerful sound and long battery life. Great for outdoor activities.",
    price: 159.99,
    category: "electronics",
    image: bluetoothSpeakerImg,
    rating: 4.3,
    inStock: false,
  },
  {
    id: 7,
    name: "Denim Jacket",
    description: "Classic denim jacket made from high-quality cotton denim. A timeless piece for any wardrobe.",
    price: 79.99,
    category: "clothing",
    image: denimJacketImg,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24hrs or hot for 12hrs.",
    price: 34.99,
    category: "accessories",
    image: waterBottleImg,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 9,
    name: "Aromatherapy Diffuser",
    description: "Ultrasonic essential oil diffuser with LED lighting and timer settings. Create a relaxing atmosphere at home.",
    price: 49.99,
    category: "home",
    image: diffuserImg,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design fits any workspace.",
    price: 39.99,
    category: "electronics",
    image: chargingPadImg,
    rating: 4.2,
    inStock: true,
  },
  {
    id: 11,
    name: "Merino Wool Sweater",
    description: "Luxurious merino wool sweater that's soft, warm, and naturally odor-resistant. Perfect for cooler weather.",
    price: 129.99,
    category: "clothing",
    image: woolSweaterImg,
    rating: 4.9,
    inStock: true,
  },
  {
    id: 12,
    name: "Ceramic Plant Pot Set",
    description: "Set of 3 modern ceramic plant pots with drainage holes. Add style to your indoor garden.",
    price: 59.99,
    category: "home",
    image: plantPotsImg,
    rating: 4.3,
    inStock: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'home', name: 'Home' },
];

export const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', name: 'Under $50', min: 0, max: 50 },
  { id: '50to100', name: '$50 - $100', min: 50, max: 100 },
  { id: '100to200', name: '$100 - $200', min: 100, max: 200 },
  { id: 'over200', name: 'Over $200', min: 200, max: Infinity },
];