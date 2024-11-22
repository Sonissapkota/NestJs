import { Controller, Get, Redirect } from "@nestjs/common";

@Controller("/users")
export class AccountController{
    @Get("/")
    @Redirect()
    handleUserRequest(){
        const randomNumber = Math.floor(Math.random()*10)
        if(randomNumber < 5){
            return {url: '/users/redirected'};
        }else{
            return {url: '/users/summary'};
        }
    }

    @Get("/redirected")
    usersDetail(): {statusCode: number, message: string}{
        return {
            statusCode: 200,
            message: "Hello there"
        }
    }
    @Get("/summary")
    usersSummary(): {statusCode: number, message: string}{
        return {
            statusCode: 200,
            message: "Hello sonis"
        }
    }
}