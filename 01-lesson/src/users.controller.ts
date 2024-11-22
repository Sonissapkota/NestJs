import { Controller, Post, Redirect } from "@nestjs/common";

@Controller('/users')
export class UsersController{
    @Post("/account")
    @Redirect()
    getAccount(){
        return "Hello there"
    }
}