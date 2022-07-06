import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly itemModel: Model<Product>) {}

    async findAll(): Promise<Product[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Product> {
        return await this.itemModel.findOne({ _id: id }) 
    }

    async create(item: Product): Promise<Product> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async update(id: string, item: Product): Promise<Product> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true })
    }

    async delete(id: string, item: Product): Promise<Product> {
        const deletedItem = {...item, isDeleted: true };
        return await this.itemModel.findByIdAndUpdate(id, deletedItem);
    }
}
