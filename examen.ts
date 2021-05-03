class Bono{

    public sueldo:number = parseFloat((<HTMLInputElement>document.getElementById("sueldo")).value);
    public edad:number = parseFloat((<HTMLInputElement>document.getElementById("edad")).value);
    public sexo:number = parseFloat((<HTMLInputElement>document.getElementById("sexo")).value);
    public nacionalidad:number = parseFloat((<HTMLInputElement>document.getElementById("nacionalidad")).value);
    public php:boolean = (<HTMLInputElement>document.getElementById("php")).checked;
    public asp:boolean = (<HTMLInputElement>document.getElementById("asp")).checked;
    public vb:boolean = (<HTMLInputElement>document.getElementById("vb")).checked;
    public java:boolean = (<HTMLInputElement>document.getElementById("java")).checked;
    public oracle:boolean = (<HTMLInputElement>document.getElementById("oracle")).checked;
    public db:boolean = (<HTMLInputElement>document.getElementById("db")).checked;
    public deUnoACinco:number = parseFloat((<HTMLInputElement>document.getElementById("unoCinco")).value);
    public deSeisADies:number = parseFloat((<HTMLInputElement>document.getElementById("seisDies")).value);
    public masDEDies:number = parseFloat((<HTMLInputElement>document.getElementById("masDeDies")).value);

    public antiguedad1 = this.deUnoACinco;
    public antiguedad2 = this.deSeisADies;
    public antiguedad3 = this.masDEDies;
    /*horas de los cursos */
    public calcularSueldo():number{
        return this.sueldo * 0.15
    }

    public calcularsexo():number {
        let sueldoInicial = this.calcularSueldo();
        if(this.sexo == 1){
            sueldoInicial = sueldoInicial + (this.sueldo * 0.03);
            
        }
        sueldoInicial = this.calcularedad(sueldoInicial);
        return sueldoInicial;
    }

    public calcularedad(sueldoInicial):number{
        if(this.edad >= 45){
            sueldoInicial = sueldoInicial + (this.sueldo * 0.02);
        }
        sueldoInicial = this.calcularNacionalidad(sueldoInicial);
        return sueldoInicial;
    }

    public calcularNacionalidad(sueldoInicial):number{
        if(this.nacionalidad == 1){
            sueldoInicial = sueldoInicial - (this.sueldo * 0.05);
        }
        sueldoInicial = this.calcularAntiguedad(sueldoInicial)
        return sueldoInicial;
    }

    public calcularAntiguedad(sueldoInicial):number{
        if(this.deUnoACinco ){
            sueldoInicial = sueldoInicial + (this.sueldo * 0.05);
        }else if(this.deSeisADies){
            sueldoInicial = sueldoInicial + (this.sueldo * 0.10);
        }else if(this.masDEDies ){
            sueldoInicial = sueldoInicial + (this.sueldo * 0.15);
        }
        sueldoInicial = this.cursos(sueldoInicial);
        return sueldoInicial;
         
    }

    public cursos(sueldoInicial){
        if(this.php){
            sueldoInicial = sueldoInicial + (3*20);
        }
        if(this.asp){
            sueldoInicial = sueldoInicial + (3*40);
        }
        if(this.vb){
            sueldoInicial = sueldoInicial + (3*55);
        }
        if(this.java){
            sueldoInicial = sueldoInicial + (3*35);
        }
        if(this.oracle){
            sueldoInicial = sueldoInicial + (3*60);
        }
        if(this.db){
            sueldoInicial = sueldoInicial + (3*15);
        }

        return sueldoInicial;

    }

    public insertaResultado(){
        let sueldoFinal = this.calcularsexo().toFixed(2)      ;
        (<HTMLInputElement>document.getElementById("bono")).value = sueldoFinal.toString();
        
    }
      
}
function calcular(){
    let objeto = new Bono();
    objeto.insertaResultado();
}
function nuevo(){
    (<HTMLInputElement>document.getElementById("php")).checked = false;
    (<HTMLInputElement>document.getElementById("asp")).checked = false;
    (<HTMLInputElement>document.getElementById("vb")).checked = false;
    (<HTMLInputElement>document.getElementById("java")).checked = false;
    (<HTMLInputElement>document.getElementById("oracle")).checked = false;
    (<HTMLInputElement>document.getElementById("db")).checked = false;

    (<HTMLInputElement>document.getElementById("sueldo")).value = "";
    (<HTMLInputElement>document.getElementById("edad")).value = "";
    (<HTMLInputElement>document.getElementById("sexo")).value = "";
    (<HTMLInputElement>document.getElementById("nacionalidad")).value = "";

    (<HTMLInputElement>document.getElementById("unoCinco")).checked = false;
    (<HTMLInputElement>document.getElementById("seisDies")).checked = false;
    (<HTMLInputElement>document.getElementById("masDeDies")).checked = false;

    (<HTMLInputElement>document.getElementById("bono")).value = "";
}

function salir(){
window.close(); /**Metodo para cerrar la ventana  */
}