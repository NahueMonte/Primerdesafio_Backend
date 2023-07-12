class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const existingProduct = this.products.find((product) => product.code === code);

    if (existingProduct) {
      throw new Error('El código de producto ya está en uso.');
    }

    const product = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    return product;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new Error('No se encontró el producto.');
    }

    return product;
  }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Obtener los productos (debe devolver un arreglo vacío)
console.log(productManager.getProducts()); // []

// Agregar un nuevo producto
try {
  const product = productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
  );
  console.log(product); // Producto agregado exitosamente
} catch (error) {
  console.log(error.message);
}

// Obtener los productos nuevamente (debe aparecer el producto recién agregado)
console.log(productManager.getProducts()); 

// Intentar agregar un producto con el mismo código (debe aparecer error)
try {
  productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
  );
  console.log('Producto agregado exitosamente');
} catch (error) {
  console.log(error.message); // El producto ya existe.
}

// Obtener un producto por su ID
try {
  const product = productManager.getProductById(1);
  console.log(product); 
} catch (error) {
  console.log(error.message); // No se encontró el producto.
}