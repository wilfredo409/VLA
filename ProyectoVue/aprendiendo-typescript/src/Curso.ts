export class Curso{
    public CodigoCurso: string;
    public NombreCurso: string;
    public NombreProfesor: string;

    constructor (pCodigoCurso: string, pNombreCurso: string, pNombreProfesor:string){
        this.CodigoCurso = pCodigoCurso;
        this.NombreCurso = pNombreCurso;
        this.NombreProfesor = pNombreProfesor;

    }

}