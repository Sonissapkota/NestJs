import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get("login")
    login(@Body() authDto: AuthDto){
        return this.authService.validateUser(authDto);
    }

    @Post("signup")
    signup(@Body() authDto: AuthDto){
        return this.authService.register(authDto);
    }
}
