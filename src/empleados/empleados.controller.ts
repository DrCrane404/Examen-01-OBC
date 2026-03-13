import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './models/empleado';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
    constructor(private empleadosService: EmpleadosService){
    }

    @Get()
    getAll():Empleado[]{
        return this.empleadosService.getAllEmpleados();
    }

    @Get(':id')
    getOne(@Param('id') id:number):Empleado{
        return this.empleadosService.getEmpleadoById(id);
    }

    @Post()
    create(@Body() nuevoEmpleado: CreateEmpleadoDto):Empleado{
        return this.empleadosService.createEmpleado(nuevoEmpleado);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() empleadoActualizado:CreateEmpleadoDto):Empleado{
        return this.empleadosService.updateEmpleado(id,empleadoActualizado)
    }

    @Delete(':id')
    delete(@Param('id') id:number):void{
        this.empleadosService.deleteEmpleado(id);
    }
}
