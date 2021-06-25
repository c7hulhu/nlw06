import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);
    //Verificar Email
    const user = await userRepositories.findOne({
      email
    })
    if (!user) {
      throw new Error("Email/Password incorrect!");
    }
    //Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }
    //Gerar token
    const token = sign(
      {
        email: user.email
      },
      "34e286847ce8b31bd0e51b400a12ef19",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );
    return token;
  }
}

export { AuthenticateUserService };