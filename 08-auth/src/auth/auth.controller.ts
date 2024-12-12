import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get("login")
    login(@Body() body:{email: string, password: string}){
        return this.authService.validateUser(body.email, body.password);
    }
}
