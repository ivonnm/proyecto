var Bono = /** @class */ (function () {
    function Bono() {
        this.sueldo = parseFloat(document.getElementById("sueldo").value);
        this.edad = parseFloat(document.getElementById("edad").value);
        this.sexo = parseFloat(document.getElementById("sexo").value);
        this.nacionalidad = parseFloat(document.getElementById("nacionalidad").value);
        this.php = document.getElementById("php").checked;
        this.asp = document.getElementById("asp").checked;
        this.vb = document.getElementById("vb").checked;
        this.java = document.getElementById("java").checked;
        this.oracle = document.getElementById("oracle").checked;
        this.db = document.getElementById("db").checked;
        this.deUnoACinco = parseFloat(document.getElementById("unoCinco").value);
        this.deSeisADies = parseFloat(document.getElementById("seisDies").value);
        this.masDEDies = parseFloat(document.getElementById("masDeDies").value);
        this.antiguedad1 = this.deUnoACinco;
        this.antiguedad2 = this.deSeisADies;
        this.antiguedad3 = this.masDEDies;
    }
    /*horas de los cursos */
    Bono.prototype.calcularSueldo = function () {
        return this.sueldo * 0.15;
    };
    Bono.prototype.calcularsexo = function () {
        var sueldoInicial = this.calcularSueldo();
        if (this.sexo == 1) {
            sueldoInicial = sueldoInicial + (this.sueldo * 0.03);
        }
        sueldoInicial = this.calcularedad(sueldoInicial);
        return sueldoInicial;
    };
    Bono.prototype.calcularedad = function (sueldoInicial) {
        if (this.edad >= 45) {
            sueldoInicial = sueldoInicial + (this.sueldo * 0.02);
        }
        sueldoInicial = this.calcularNacionalidad(sueldoInicial);
        return sueldoInicial;
    };
    Bono.prototype.calcularNacionalidad = function (sueldoInicial) {
        if (this.nacionalidad == 1) {
            sueldoInicial = sueldoInicial - (this.sueldo * 0.05);
        }
        sueldoInicial = this.calcularAntiguedad(sueldoInicial);
        return sueldoInicial;
    };
    Bono.prototype.calcularAntiguedad = function (sueldoInicial) {
        if (this.deUnoACinco) {
            sueldoInicial = sueldoInicial + (this.sueldo * 0.05);
        }
        else if (this.deSeisADies) {
            sueldoInicial = sueldoInicial + (this.sueldo * 0.10);
        }
        else if (this.masDEDies) {
            sueldoInicial = sueldoInicial + (this.sueldo * 0.15);
        }
        sueldoInicial = this.cursos(sueldoInicial);
        return sueldoInicial;
    };
    Bono.prototype.cursos = function (sueldoInicial) {
        if (this.php) {
            sueldoInicial = sueldoInicial + (3 * 20);
        }
        if (this.asp) {
            sueldoInicial = sueldoInicial + (3 * 40);
        }
        if (this.vb) {
            sueldoInicial = sueldoInicial + (3 * 55);
        }
        if (this.java) {
            sueldoInicial = sueldoInicial + (3 * 35);
        }
        if (this.oracle) {
            sueldoInicial = sueldoInicial + (3 * 60);
        }
        if (this.db) {
            sueldoInicial = sueldoInicial + (3 * 15);
        }
        return sueldoInicial;
    };
    Bono.prototype.insertaResultado = function () {
        var sueldoFinal = this.calcularsexo().toFixed(2);
        document.getElementById("bono").value = sueldoFinal.toString();
    };
    return Bono;
}());
function calcular() {
    var objeto = new Bono();
    objeto.insertaResultado();
}
function nuevo() {
    document.getElementById("php").checked = false;
    document.getElementById("asp").checked = false;
    document.getElementById("vb").checked = false;
    document.getElementById("java").checked = false;
    document.getElementById("oracle").checked = false;
    document.getElementById("db").checked = false;
    document.getElementById("sueldo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("nacionalidad").value = "";
    document.getElementById("unoCinco").checked = false;
    document.getElementById("seisDies").checked = false;
    document.getElementById("masDeDies").checked = false;
    document.getElementById("bono").value = "";
}
function salir() {
    window.close(); /**Metodo para cerrar la ventana  */
}
