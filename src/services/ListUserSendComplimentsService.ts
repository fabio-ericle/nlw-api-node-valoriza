import { getCustomRepository } from 'typeorm';
import { ComplimentsRespositories } from '../repositories/ComplimetsRepositories';

export class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRespositories = getCustomRepository(ComplimentsRespositories);

    const compliments = await complimentsRespositories.find({
      where: {
        userSender: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}