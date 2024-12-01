import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private userRepositary: Repository<User>){}
    displayUser(): String{
        return "Here is the user fetched from the database"
    }

    async createUser(userDto: UserDto){
        const user = this.userRepositary.create({
            username: userDto.username,
            email: userDto.email,
            password: userDto.password
        });

        return await this.userRepositary.save(user);
    }
}