import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(): any {
        return {
            code: 200,
            message: '请求用户列表成功',
            data: [],
        };
    }
    addUser(): any {
        return {
            code: 200,
            message: '添加用户成功',
            data: {},
        };
    }
}