import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto";
import { get } from "http";

const USERS = []

@Controller("/users")
export class usersController{
    @Post()
    addUser(@Body() createUserDto: CreateUserDTO){
        USERS.push(createUserDto);
        return "User added"
    }

    @Get()
    displayUser(){
        return USERS;
    }

    @Get(":id")
    displayUserByID(@Param("id") id: number){
        console.log(USERS.find(user => user.id === id))
        return USERS.find(user => user.id === id)
    }
}