import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @Put(':id')
    update(@Body() updateProductDto: CreateProductDto, @Param('id') id): Promise<Product> {
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    delete(@Param() updateProductDto: CreateProductDto, @Param('id') id): Promise<Product> {
        return this.productsService.delete(id, updateProductDto);
    }
}
