export interface IPost {
  id: number;
  subject: string;
  message: string;
}

export class Post implements IPost {
  id: number;
  subject: string;
  message: string;

  constructor(model: IPost) {
    this.id = model.id;
    this.subject = model.subject;
    this.message = model.message;
  }
}