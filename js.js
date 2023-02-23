// ***************************************** parent class ************************************************ //
function Pessoa(nome, sobrenome) {
    this.Nome = nome || "unknown";
    this.Sobrenome = sobrenome || "unknown";
}

Pessoa.prototype.getNomeCompleto = function () {
    return this.Nome + " " + this.Sobrenome;
}
// ******************************************************************************************************* //


// ********************************** inheriting parent classes ****************************************** //
function Estudante(nome, sobrenome, escola, nota){
    Pessoa.call(this, nome, sobrenome);

    this.Escola = escola || "unknown";
    this.Nota = nota || 0;
}

function Professor(nome, sobrenome, escola, materia){
    Pessoa.call(this, nome, sobrenome);

    this.Escola = escola || "unknown";
    this.Materia = materia || 0;
}

Estudante.prototype = new Pessoa();
Professor.prototype = new Pessoa();
// ******************************************************************************************************* //


var std = new Estudante("Marina","Diamandis", "Escola Futuro", 10);
var std2 = new Estudante("Luis","Tom", "Escola Futuro", 7);
var prof = new Professor("Bruno","Mars", "Escola Futuro", "Matemática");
    
console.log(std.getNomeCompleto()); 
console.log(std2.getNomeCompleto()); 
console.log(prof.getNomeCompleto()); 


console.log(std instanceof Estudante); // true
console.log(std instanceof Pessoa); // true
console.log(std2 instanceof Estudante); // true
console.log(std2 instanceof Pessoa); // true
console.log(prof instanceof Professor); // true
console.log(prof instanceof Pessoa); // true



