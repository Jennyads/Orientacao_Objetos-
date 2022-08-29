import Empresa from "./Empresa";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";
import Telefone from "./Telefone";

let empresa = new Empresa("ABC LTDA", "EMPRESA LEGAL", "98987777")
let funcionario1 = new Funcionario('Jeniffer', '90883388448')
let funcionario2 = new Funcionario('Julia', '987266366363')
let endereco1 = new Endereco ()
let telefoninho = new Telefone('12','981345678')
let telefoninho2 = new Telefone('12','988123456')

empresa.obterTelefones.forEach(t=>{
    console.log(`ddd: ${t.ddd} numero: ${t.numero}`)
})

// publico tornar um atributo ou metodo publico 
