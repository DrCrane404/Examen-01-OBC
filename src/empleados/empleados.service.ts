import { Injectable } from '@nestjs/common';
import { Empleado } from './models/empleado';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';

@Injectable()
export class EmpleadosService {
    private empleados: Empleado[]=[];
    private idContador: number=1;

    createEmpleado(nuevoEmpleado:CreateEmpleadoDto):Empleado{
        const empleado: Empleado={
            id:this.idContador,
            nombre:nuevoEmpleado.nombre,
            puesto:nuevoEmpleado.puesto,
            salario:nuevoEmpleado.salario,
            fecha_ingreso:nuevoEmpleado.fecha_ingreso
        }
        this.empleados.push(empleado);
        this.idContador +=1;
        return empleado;
    }

    getAllEmpleados():Empleado[]{
        return this.empleados;
    }

    getEmpleadoById(id:number):Empleado{
        return this.empleados.find((empleado)=>empleado.id==id)!;
    }
    
    updateEmpleado(id:number,empleado:CreateEmpleadoDto):Empleado{
        const empleadoUpdate= this.getEmpleadoById(id);
        if (empleadoUpdate) {
            empleadoUpdate.nombre = empleado.nombre;
            empleadoUpdate.puesto = empleado.puesto;
            empleadoUpdate.salario = empleado.salario; 
        }
        return empleadoUpdate;
    }
    deleteEmpleado(id:number):void{
        this.empleados = this.empleados.filter((empleado)=> empleado.id!=id);
    }
}
