import { Controller, Get, Param } from "@nestjs/common";

interface UsersDetails{
    id: number;
    name: string;
}

@Controller("/account")
export class accountController{
    @Get("/users/:id/:name")
    usersAccount(@Param() param: UsersDetails){
        console.log(param.name);
        return "success"
    }
}