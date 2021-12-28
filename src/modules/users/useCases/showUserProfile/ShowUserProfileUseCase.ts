import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)
    if (user.id) {
      console.log(user)
      return user
    } else {
      throw new Error('Usuário não encontrado')
    }

  }
}

export { ShowUserProfileUseCase };
