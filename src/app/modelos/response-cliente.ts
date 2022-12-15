import { Cliente } from "./cliente";

export class ResponseCliente {
    constructor(
        public cliente:Cliente,
        public mensaje:string,
        public error:string
    ){}
}
