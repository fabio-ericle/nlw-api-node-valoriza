import { getCustomRepository } from 'typeorm';
import { ComplimentsRespositories } from '../repositories/ComplimetsRepositories';

export class ListUserReceiverComplimentsService {
  async execute(user_id: string) {
    const complimentsRespositories = getCustomRepository(ComplimentsRespositories);

    const compliments = await complimentsRespositories.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}