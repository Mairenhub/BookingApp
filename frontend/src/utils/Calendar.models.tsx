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

export interface HygienistCardProps {
    hygienist: Hygienist;
}

export interface CustomButtonProps {
    title: string;
    handleClick: () => void;
}

export interface BookingModalProps {
    isOpen: boolean;
    closeModal: () => void;
    hygienist: Hygienist;
}