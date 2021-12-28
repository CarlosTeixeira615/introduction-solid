import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUser = this.usersRepository.findById(user_id)
    if (findUser.id) {

      const user = this.usersRepository.turnAdmin(findUser);
      return user;
    } else {
      throw new Error("Mensagem do erro");
    }
  }
}

export { TurnUserAdminUseCase };
