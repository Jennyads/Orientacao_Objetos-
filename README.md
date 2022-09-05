<h3> Programação Orientada a Objetos </h3>

A programação orientada à objetos é um paradigma no qual os objetos do mundo real são vistos como entidades separadas com seu próprio estado, que é modificado apenas por procedimentos internos, chamados métodos.A criação e organização de objetos acontece a partir de classes, que são definidas pelo desenvolvedor.

<h4> Classes e Objetos </h4>

<h5> Classe </h5>

Uma classe é uma forma de definir (declarar) um tipo especial de dado -tipo que não seja simples como um primitivo. Tem-se como analogia: assim como um engenheiro desenha a planta baixa de um imóvel, a classe é a planta baixa do objeto.

Exemplo: 
```
class Endereco {
    private numero: string 
    private rua: string
    private bairro: string
    private cidade: string
    constructor(numero: string, rua: string, bairro: string, cidade: string) {
    this.numero = numero
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    }
}
```
* Esta classe defini como será um objeto do tipo endereço. Quais dados ele irá possuir e qual o tipo desses dados. 
* Os dados armazenados são chamados de atributos e eles não precisam ser do mesmo tipo. No desenvolvimento com o paradigma de programação orientada à objetos é comum chamar os atributos de campos ou membros de classe.
* Toda classe pode ter comportamentos, algo que ela faz. Isto é definidos por métodos.Métodos são funções definidas na classe, que todos os seus objetos terão. Dentro do corpo de um método, o acesso a campos deve ser via palavra-chave “this”.

```
class Endereco {
    private numero: string 
    private rua: string
    private bairro: string
    private cidade: string
    
    public mostrarEndereco() {
        return `Cidade: ${this.cidade}, bairro: ${this.bairro}, rua: ${this.rua}, número: ${this.numero}`
    }
}
```

<h5> Objeto </h5>

Um objeto é um elemento (instância) de uma classe. Objetos têm os comportamentos de sua classe. O objeto é o componente real dos programas, enquanto a classe especifica como as instâncias são criadas e como se comportam.
Um objeto pode ser uma variável, uma estrutura de dados, uma função ou um método e, como tal, é um valor na memória referenciado por um identificador. Assim, um objeto pode ser uma combinação de variáveis, funções e estruturas de dados.

A partir de uma classe pode-se criar quantos objetos se desejar. Todos irão conter os mesmos atributos e comportamentos definidos na classe.

```
let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let endereco2 = new Endereco(123, 'Av. 9 de Julho', 'Jardim Apolo', 'São José dos Campos')

console.log(endereco.mostrarEndereco())
console.log(endereco2.mostrarEndereco())

```

* As variáveis que armazenam objetos são especiais, são chamadas de referencias. São ponteiros implícitos.

<h4> Referências </h4>

Uma referência se refere a uma instância de uma classe -ou seja um objeto. Ao contrário dos tipos primitivos que mantêm seus valores na memória onde a variável é alocada, as referências não mantêm o valor do objeto ao qual se referem, ela apontam para o endereço do objeto na memória. Os objetos ficam, armazenados, no heap de memória.

* Um heap de memóriaé um local namemóriaonde a memória pode ser alocada em acesso aleatório. Ao contrário da pilha em que a memória é alocada e liberada em uma ordem muito definida, os elementos de dados individuais alocados no heap são normalmente liberados de forma assíncrona entre si.

<h4> Encapsulamento </h4>

Encapsulamento se refere ao agrupamento de dados, junto com os métodos que operam esses dados. Muitas linguagens de programação usam encapsulamento frequentemente na forma de classes. Assim, encapsulamento refere-se à restrição do acesso direto a alguns dos componentes de um objeto, encapsular dados, portanto, significa qualificar a forma de armazenar dados em objetos.

O encapsulamento é um mecanismo de restrição do acesso direto a alguns componentes de um objeto, de forma que outros objetos não possam acessar os valores de todas as variáveis ou métodos de um objeto específico. O encapsulamento pode ser usado para ocultar ou proteger membros e métodos associados a uma classe ou objeto instanciado, do acesso direto de códigos externos.

Para encapsular dados utiliza-se modificadores de acesso, palavras reservadas que modificam a forma de acesso aos dados.

* Os atributos privados deixam de ser visíveis para fora do objeto e portanto, não podem ser modificados diretamente.
* Os demais atributos públicos, que continuam visíveis, são modificáveis diretamente.
* Para a linguagem TypeScript existem três modificadores de acesso, eles são: private, protected e public.A visibilidade padrão dos membros de uma classe é pública, ou seja, modificada pela palavra-chave public. Um membro público pode ser acessado em qualquer lugar. Quando não se declara o modificador o padrão aplicado é public.

```
export default class Empresa {
    private razaoSocial: string 
    nomeFantasia: string
    private cnpj: string
    enreco: Endereco
    public telefones: Telefones[]
    private funcionarios: Funcionario[]
    
    obterRazaoSocial(): string {
        return this.razaoSocial.toLowerCase()
    }
}
```
Assim, encapsular significa acessar com restrição. A forma de fazer isto é através de métodos. O objetivo do encapsulamento é modificar a forma de acesso aos dados.O modificador private bloqueia, completamente, a visibilidade de um membro da classe a qualquer código fora do próprio corpo da classe.

<h5> Método get e set </h5>

Existem várias convenções entre os desenvolvedores que utilizam o paradigma de programação orientada à objetos. Uma delas é o uso de métodos get e set. A convenção está na nomenclatura dos métodos.

* Métodos get/set são usados para acessar propriedades privadas e também outros valores que devam ser calculados.

* Este tipo de implementação permite o acesso aos métodos como se fossem propriedades.

```
export default class Empresa {
    private razaoSocial: string 
    nomeFantasia: string
    private cnpj: string
    enreco: Endereco
    public telefones: Telefones[]
    private funcionarios: Funcionario[]
    
    getRazaoSocial(): string {
        return this.razaoSocial.toLowerCase()
    }
    setRazaoSocial(razaoSocial: string) {
        thus.razaoSocial = razaoSocial 
 
 ```
 * Set: coloca a dado
 * get: pega o dado 
 
 <h3> Polimorfismo e Herança</h3>
 
* O polimorfismo é um recurso das linguagens de programação orientadas à objetos, que permite que uma rotina específica use variáveis de tipos diferentes, com nomes iguais, em momentos diferentes.
 
* Polimorfismo é a capacidade de uma linguagem de programação de apresentar a mesma interface para vários tipos de dados subjacentes diferentes.

* Polimorfismo é a capacidade de diferentes objetos responderem de uma maneira única à mesma mensagem.

Geralmente, o polimorfismo é obtido a partir da aplicação de outro recurso, que vem do paradigma de programação orientada à objetos. Este recurso é chamado de herança.Herança é um mecanismo no qual uma classe adquire a propriedade de outra classe. Com a herança, pode-se reutilizar os campos e métodos de uma classe existente. Consequentemente, a herança facilita a reutilização.

<h4> Abstract </h4>
    
Transforma uma classe em abstrata. Uma classe restrita que não pode ser usada para criar objetos, para acessá-la deve ser herdada por outra classe.Transforma um método em abstrato. Métodos abstratos só podem ser declarados dentro de classes abstratas. Este tipo de método é declarado sem corpo, porque é um abstração! O corpo deve ser fornecido pela subclasse.

