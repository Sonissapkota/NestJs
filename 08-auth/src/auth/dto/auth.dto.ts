import { IsNotEmpty } from "class-validator";
export class AuthDto{
    @IsNotEmpty({message: "Username cannot be empty"})
    username: string

    @IsNotEmpty({message: "email Field cannot be empty"})
    email: string;

    @IsNotEmpty({message: "Password cannot be empty"})
    password: string;
}


