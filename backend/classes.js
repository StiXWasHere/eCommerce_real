class Product {
    constructor(_id, name, price, description, category, images) {
        this._id = _id,
        this.name = name,
        this.price = price,
        this.description = description,
        this.category = category,
        this.images = [images]
    }
}
class User {
    constructor(_id, email, password) {
        this._id = _id,
        this.email = email,
        this.password = password
    }
}
class orders {
    constructor(_id, user, products, totalPrice) {
        this._id = _id,
        this.user = user,
        this.products = products
        this.totalPrice = totalPrice
    }
}
class orderProducts {
    constructor(productId, quantity) {
        this.productId = productId,
        this.quantity = quantity
    }
}