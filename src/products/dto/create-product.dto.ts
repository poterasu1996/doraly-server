export class CreateProductDto {
    readonly id: string;
    readonly name: string;
    readonly code: number;
    readonly weight: number;
    readonly price: number;
    readonly color: string;
    readonly isDeleted: boolean
}