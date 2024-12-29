import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getUsers(): any {
        return this.userService.getUsers();
    }

    @Get('range')
    getRange(@Query('num') num: string): any {
        const range = Array.from({ length: Number(num) }, (_, i) => String(i + 1));
        return {
            code: 200,
            message: '请求成功',
            data: range
        }
    }

    @Post('')
    addUser(): any {
        return this.userService.addUser();
    }
}
