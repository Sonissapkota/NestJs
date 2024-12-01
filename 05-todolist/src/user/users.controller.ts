import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserDto } from "./dto/user.dto";

@Controller("user")
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get("display")
    getUser(): String{
        return this.userService.displayUser()
    }

    @Post("create")
    createUser(@Body() userDto: UserDto){
        return this.userService.createUser(userDto)
    }
}