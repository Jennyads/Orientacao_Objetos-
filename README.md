<h5> Repositório criado para apresentar conceitos e códigos desenvolvidos na disciplina de Programação Orientada a Objetos. </h5>

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

* As variáveis que armazenam objetos são especiais, são chamadas de referencias. São ponteiros implícitos.

<h4> Referências </h4>

Uma referência se refere a uma instância de uma classe -ou seja um objeto. Ao contrário dos tipos primitivos que mantêm seus valores na memória onde a variável é alocada, as referências não mantêm o valor do objeto ao qual se referem, ela apontam para o endereço do objeto na memória. Os objetos ficam, armazenados, no heap de memória.

•Para entender: um heap de memóriaé um local namemóriaonde a memória pode ser alocada em acesso aleatório. Ao contrário da pilha em que a memória é alocada e liberada em uma ordem muito definida, os elementos de dados individuais alocados no heap são normalmente liberados de forma assíncrona entre si.
