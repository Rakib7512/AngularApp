export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    photo: string;
    role: string;
    currentHub?: string;
}