import { carritoModelo } from "./models/carritosModelo.js"
console.log("Cargando clase CartMongoManager")

export class CartMongoManager {

    // get
    static async getCarts() {
        return await carritoModelo.find().lean()

    }

    static async getCartsBy(filtro = {}) {
        return await carritoModelo.findOne(filtro).populate("products.product");
    }

    // CREATE CART post cart vacio
    static async addCart(cart = {}) {
        let nuevoCart = await carritoModelo.create(cart)
        return nuevoCart.toJSON()
    }

    // //post cid y pid
    // static async addProductToCart(cid, pid) {
    //     const carts = await this.getCarts();
    //     const cartIndex = carts.findIndex(cart => cart.id == cid);

    //     if (cartIndex === -1) {
    //         throw new Error(`Carrito con id ${cid} no encontrado.`);
    //     }

    //     const cart = carts[cartIndex];

    //     const productoEnCart = cart.products.find(p => p.product === pid);

    //     if (productoEnCart) {
    //         productoEnCart.quantity += 1;
    //     } else {
    //         cart.products.push({ product: pid, quantity: 1 });
    //     }

    //     carts[cartIndex] = cart;
        

    //     return cart;
    // }
}



