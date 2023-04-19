class Inscrito {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  atualizacaoQueVemDoCanal(mensagem: string): void {
    console.log(`NOME: ${this.name}, NOTIFICAÇÃO: ${mensagem}`);
  }
}

class Canal {
  private inscritos: Inscrito[];

  constructor() {
    this.inscritos = [];
  }

  public addInscrito(novoInscrito: Inscrito): void {
    this.inscritos.push(novoInscrito);
  }

  public removeInscrito(inscrito: Inscrito): void {
    const indice = this.inscritos.indexOf(inscrito);

    if (indice !== -1) {
      this.inscritos.splice(indice, 1);
    }
  }

  public notificarInscritos(mensagem: string): void {
    for (const inscrito of this.inscritos) {
      inscrito.atualizacaoQueVemDoCanal(mensagem);
    }
  }
}

// CANAL
const canal1 = new Canal();

// INSCRITOS
const inscrito1 = new Inscrito("inscrito1");
const inscrito2 = new Inscrito("inscrito2");
const inscrito3 = new Inscrito("inscrito3");
const inscrito4 = new Inscrito("inscrito4");
const inscrito5 = new Inscrito("inscrito5");

// ADICIONA INSCRITOS NO CANAL
canal1.addInscrito(inscrito1);
canal1.addInscrito(inscrito2);
canal1.addInscrito(inscrito3);
canal1.addInscrito(inscrito4);
canal1.addInscrito(inscrito5);

// NOTIFICA TODOS INSCRITOS DO CANAL QUE ESTÃO OBSERVANDO
canal1.notificarInscritos("Novo video sobre Padrões de Projetos.");
