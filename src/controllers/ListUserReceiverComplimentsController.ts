import { Request, Response } from 'express';
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService';

export class ListUserReceiverComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(user_id);

    return res.json(compliments); 
  }
}