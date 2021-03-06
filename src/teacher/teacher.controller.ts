/* eslint-disable prettier/prettier */
import { TeacherService } from './teacher.service';
import { findTeacherResDto } from './dto/teacher.dto';
import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { }
    @Get()
    getTeachers(): findTeacherResDto[] {
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(@Param("teacherId", new ParseUUIDPipe()) teacherId: string): findTeacherResDto {
        return this.teacherService.getTeacherById(teacherId)
    }

}
