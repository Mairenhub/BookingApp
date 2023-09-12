export interface myEvent extends Event {
    title: string;
    start: Date;
    end: Date;
}


export interface Hygienist {
    id: number;
    price: number;
    name: string;
    qualification: string;
    description: string;
}