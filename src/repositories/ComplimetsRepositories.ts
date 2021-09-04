import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from '../entities/Compliment';

@EntityRepository(Compliment)
export class ComplimentsRespositories extends Repository<Compliment> {}