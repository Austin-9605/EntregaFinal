import { productoModelo } from "./models/productosModelo.js";
console.log("Cargando clase ProductMongoManager")

export class ProductMongoManager {

    //get
    static async getProductsPag(page=1, limit=10) {
        return await productoModelo.paginate(
            {},
            {page, limit, lean:true, sort:{price: 1}}
        )

    }

    static async getProducts(){
        return await productoModelo.find().lean()
        

    }

    // get por id (prueba)
    static async getProductsBy(filtro = {}) {
        return await productoModelo.findOne(filtro)
    }
    //


    //post
    static async addProduct(producto = {}) {
        let nuevoProducto = await productoModelo.create(producto)
        return nuevoProducto.toJSON()


    }

    //update
    static async modifyProduct(id, aModificar = {}) {
        return await productoModelo.findByIdAndUpdate(id, aModificar, { new: true })
    }

    //delete
    static async deleteProduct(id) {
        return await productoModelo.findByIdAndDelete(id)
    }


}



