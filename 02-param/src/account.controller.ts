import { Controller, Get, Headers, Param, Query } from "@nestjs/common";

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

    @Get("/profile")
    usersProfile(@Query() query: Record<string, any>){
        console.log(query)
        return "success"
    }

    @Get("/status")
    usersStatus(@Headers() header: Record<string, any>){
        console.log(header)
        return "success"
    }
}