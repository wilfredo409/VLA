<template>
    <div class="container">
        <div class="mb-3">
            <select class="form-select form-select-lg">
                <option v-for="micursito in MiCursos" :key="micursito.CodigoCurso" :value="micursito.CodigoCurso">{{ micursito.NombreCurso }} - {{ micursito.NombreProfesor }}</option>
            </select>
                <div
                    class="table-responsive"
                >
                    <table
                        class="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Codigo Curso</th>
                                <th scope="col">Nombre Curso</th>
                                <th scope="col">Nombre Profesor</th>
                            </tr>
                        </thead>
                        <tbody v-for="micursito in MiCursos" :key="micursito.CodigoCurso">
                            <tr class="" >
                                <td scope="row">{{ micursito.CodigoCurso }}</td>
                                <td >{{ micursito.NombreCurso }}</td>
                                <td >{{ micursito.NombreProfesor }}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                
                
            
        </div>
        
    </div>
</template>

<script lang="ts">
import { Curso } from '@/Curso';

export default{
    data(){
    
    let miPrimerCurso = new Curso("123", "FrontEnd", "Adolfo Vargas");
    let miPrimerCurso1 = new Curso("456", "SQL", "Edwin Ceron");
    let miPrimerCurso2 = new Curso("789", "Python", "Mateo Ceron");
    let miPrimerCurso3 = new Curso("101", "Azure", "Angie Obando");
    
    let MiCursos: Curso[] = [miPrimerCurso, miPrimerCurso1, miPrimerCurso2, miPrimerCurso3];

    return{
        MiCursos
    };
    }
    }
</script>

<style>
</style>
