
export enum ScreenName {
  ONBOARDING = 'ONBOARDING',
  WELCOME = 'WELCOME',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  
  // Main Tabs
  HOME = 'HOME',
  SCHEDULE = 'SCHEDULE',
  HEALTH = 'HEALTH',
  PROFILE = 'PROFILE',
  
  // Shop & Services
  SHOP_HOME = 'SHOP_HOME',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  CART = 'CART',
  CHECKOUT = 'CHECKOUT',
  ORDER_SUCCESS = 'ORDER_SUCCESS',
  
  // Features
  MAP_SEARCH = 'MAP_SEARCH',
  CLINIC_DETAIL = 'CLINIC_DETAIL',
  BOOK_APPOINTMENT = 'BOOK_APPOINTMENT',
  CHAT_LIST = 'CHAT_LIST',
  EDIT_PROFILE = 'EDIT_PROFILE',
  SETTINGS = 'SETTINGS',
  PET_DIARY = 'PET_DIARY',
  
  // New Screens
  ADD_PET = 'ADD_PET',
  ADD_SCHEDULE = 'ADD_SCHEDULE',
  NOTIFICATIONS = 'NOTIFICATIONS',
  ABOUT_US = 'ABOUT_US'
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  weight: string;
  image: string;
  type: 'dog' | 'cat';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  desc?: string;
}