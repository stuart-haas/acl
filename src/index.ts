import 'reflect-metadata';
import { container } from 'tsyringe';
import { PostController } from './components/posts';
import { User } from './models';

const user = new User({ id: 1, name: 'user', roleId: 1 });

const controller = container.resolve(PostController);
controller.create({ req: { user, body: user } });

export {};