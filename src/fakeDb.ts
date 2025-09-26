export type Role = 'Admin' | 'Manager' | 'Lab Staff' | 'Bệnh nhân';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
    avatar?: string;
}

export const fakeUsers: User[] = [
    {
        id: '1',
        name: 'Nguyễn Văn Admin',
        email: 'admin@example.com',
        password: '123456',
        role: 'Admin',
    },
    {
        id: '2',
        name: 'Trần Thị Manager',
        email: 'manager@example.com',
        password: '123456',
        role: 'Manager',
    },
    {
        id: '3',
        name: 'Lab Staff A',
        email: 'lab@example.com',
        password: '123456',
        role: 'Lab Staff',
    },
    {
        id: '4',
        name: 'Bệnh nhân B',
        email: 'patient@example.com',
        password: '123456',
        role: 'Bệnh nhân',
    },
];
