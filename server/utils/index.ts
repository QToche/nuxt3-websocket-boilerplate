import { Server, type ServerOptions, type Socket} from 'socket.io';
import moment from 'moment';
import type { H3Event } from 'h3';
import { User } from '../types';
import { userJoin, getRoomUsers } from './users';

const options: Partial<ServerOptions> = {
    path: '/api/socket.io',
    serveClient: false
}

export const io = new Server(options);
const botName = "roomAdmin";

export function initSocket(event: H3Event) {
    // @ts-ignore
    io.attach(event.node.res.socket?.server);

    io.on('connection', (socket: Socket) => {
        socket.on('joinRoom', (payload: User) => {
            const user = userJoin({ ...payload, id: socket.id });

            if (user.room) {
                socket.join(user.room);
                
                // socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the room`));
                io.to(user.room).emit('roomUsers', {
                    room: user.room,
                    users: getRoomUsers(user.room)
                })
            }
        })
    })
}

export const formatMessage = (username: string, text: string) => {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }

}