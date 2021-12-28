import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    } as User;

    const newUser = new User();
    Object.assign(newUser, user);
    this.users.push(newUser);
    return newUser;
  }

  findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(user => user.email === email);
    return user;

  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find(user => user.id === receivedUser.id);
    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  list(): User[] {
    const user = this.users;
    return user;
  }
}

export { UsersRepository };
