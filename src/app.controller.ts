import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStudentDto } from './create-student.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return 'this action adds a Student';
  }

  @Get()
  async getHello(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} resource`;
  }
}
