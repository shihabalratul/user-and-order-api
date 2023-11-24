export interface Name {
    firstname: string;
    lastname: string;
}

export interface Address {
    street: string;
    city: string;
    country: string;
}

export interface Order {
    productName: string;
    price: number;
    quantity: number;
}

export interface User {
    userId: number;
    username: string;
    password: string;
    fullname: Name;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: Array<string>;
    address: Address;
    orders: Array<Order>;
}
