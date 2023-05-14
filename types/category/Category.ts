interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
}

interface Subcategory {
    id: number;
    name: string;
}