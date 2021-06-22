import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({name, email, admin}: IUserRequest) {
    console.log("Nome", name)
    console.log("Email", email)
    console.log("Admin", admin)
    const usersRepository = getCustomRepository(UsersRepositories);
    console.log("Passou");
    if(!email) {
      throw new Error("Email incorrect");
    }
    console.log("Passou");
    const userAlreadyExists = await usersRepository.findOne({
      email
    });
    console.log("Passou");
    if(userAlreadyExists) {
      throw new Error("User already exists");
    }
    console.log("Passou");
    const user = usersRepository.create({
      name,
      email,
      admin
    });
    console.log("Passou");  
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };