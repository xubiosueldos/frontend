export interface Concepto {  
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    DeletedAt?: string;
    nombre: string;
    codigo: string;
    descripcion: string;
    activo: number;
    tipo: string;
    cuentacontable: number;
    cuenta?: Cuenta;
    esimprimible: Boolean;
}

export interface Cuenta {  
    ID: any;
    nombre: string;
    codigo?: string;
    descripcion?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    DeletedAt?: string;
    activo?: Number
}

