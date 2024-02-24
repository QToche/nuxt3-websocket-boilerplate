import { User } from '../types';
export let users: User[] = [];

// Join user to room
export const userJoin = (user: User) => {
    users.push(user);
    console.log(users);
    return user;
}

export const getCurrentUser = (id: string) => {
    return users.find(user => user.id === id);
}

export const userLeave = (id: string) => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.slice(index, 1)[0];
    }
}

export const getRoomUsers = (room: string) => {
    return users.filter(user => user.room === room);
}