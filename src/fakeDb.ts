export type Role = 'admin' | 'manager' | 'lab staff' | 'patient';

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
        role: 'admin',
    },
    {
        id: '2',
        name: 'Trần Thị Manager',
        email: 'manager@example.com',
        password: '123456',
        role: 'manager',
    },
    {
        id: '3',
        name: 'Lab Staff A',
        email: 'lab@example.com',
        password: '123456',
        role: 'lab staff',
    },
    {
        id: '4',
        name: 'Bệnh nhân B',
        email: 'patient@example.com',
        password: '123456',
        role: 'patient',
    },
];
// ================== Domain Data ==================

export interface Patient {
    id: string;
    userId: string; // mapping tới fakeUsers có role patient
    age: number;
    gender: 'male' | 'female';
}

export interface Test {
    id: string;
    patientId: string;
    type: string;
    status: 'pending' | 'completed' | 'in-progress';
}

export interface Report {
    id: string;
    testId: string;
    createdAt: string;
    status: 'completed' | 'draft';
}

export const fakePatients: Patient[] = [
    { id: 'p1', userId: '4', age: 28, gender: 'female' }, // mapping tới Bệnh nhân B
];

export const fakeTests: Test[] = [
    { id: 't1', patientId: 'p1', type: 'Blood Test', status: 'completed' },
    { id: 't2', patientId: 'p1', type: 'X-Ray', status: 'pending' },
];

export const fakeReports: Report[] = [
    { id: 'r1', testId: 't1', createdAt: '2025-09-01', status: 'completed' },
    { id: 'r2', testId: 't2', createdAt: '2025-09-05', status: 'draft' },
];