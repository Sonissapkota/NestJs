import { Body, Controller, Post } from "@nestjs/common";

@Controller("/admin")
export class usersController{

    @Post("/login")
    loginUser(@Body() requestdata: Record<string, any>){
        console.log(requestdata)
        return "Success"
    }
}