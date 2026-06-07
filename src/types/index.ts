export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Store {
  id: string;
  name: string;
  slug: string;
}

export interface Vehicle {
  id: string;
  title: string;
  price: number;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}