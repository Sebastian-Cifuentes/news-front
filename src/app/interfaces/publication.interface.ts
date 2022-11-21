export interface Publication {
    title: string;
    desc: string;
    tags: string[];
    publicationType: string;
    images: Image[];
    createdAt?: Date;
}

export interface Image {
    title?: string;
    image: string;
}