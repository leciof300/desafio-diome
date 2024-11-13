// Classe Heroi para representar o personagem
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Define os ataques possíveis para cada tipo de herói
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        // Recupera o ataque com base no tipo do herói
        const ataque = ataques[this.tipo];
        
        // Verifica se o tipo de ataque existe e exibe a mensagem
        if (ataque) {
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
        } else {
            console.log(`Tipo de ataque desconhecido para ${this.nome}.`);
        }
    }
}

// Função para criar e testar o herói
function criarHeroi(nome, idade, tipo) {
    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();
}

// Exemplo de uso
criarHeroi("Arthur", 30, "guerreiro");   // Saída: O guerreiro Arthur atacou usando espada.
criarHeroi("Merlin", 120, "mago");       // Saída: O mago Merlin atacou usando magia.
criarHeroi("Bruce", 25, "monge");        // Saída: O monge Bruce atacou usando artes marciais.
criarHeroi("Hanzo", 28, "ninja");        // Saída: O ninja Hanzo atacou usando shuriken.
criarHeroi("Steve", 32, "arqueiro");     // Saída: Tipo de ataque desconhecido para Steve.
