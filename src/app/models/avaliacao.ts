export class Avaliacao {
    constructor() {
        this.comentario = '';
        this.telefoneAvaliador = '';
    }

    id: number;
    avaliacao: number;
    comentario: string;
    data: any;
    camada: string;
    servicoId: number;
    telefoneAvaliador;
    curtidas: number;
    descurtidas: number;
}
