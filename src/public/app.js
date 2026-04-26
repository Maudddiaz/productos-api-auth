const API_URL = 'http://localhost:3000/api';

// Referencias al DOM
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const btnReload = document.getElementById('btn-reload');

// Event Listeners
productForm.addEventListener('submit', createProduct);
btnReload.addEventListener('click', loadProducts);

// Función para cargar productos (GET)
async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/productos`);
        const products = await response.json();
        
        productList.innerHTML = ''; // Limpiar la lista actual
        
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="product-info">
                    <strong>${product.name}</strong> 
                    <span>(Cant: ${product.cantidad}) - $${product.precio}</span>
                </div>
                <button class="btn-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
            `;
            productList.appendChild(li);
        });
    } catch (error) {
        console.error('Error cargando los productos:', error);
        alert('No se pudo conectar con el servidor.');
    }
}

// Función para crear un producto (POST)
async function createProduct(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;

    try {
        const response = await fetch(`${API_URL}/producto`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, cantidad: parseInt(cantidad), precio: parseFloat(precio) })
        });
        
        if (response.ok) {
            productForm.reset();
            loadProducts(); // Recargar la lista después de añadir
        }
    } catch (error) {
        console.error('Error creando el producto:', error);
    }
}

// Función para eliminar un producto (DELETE)
async function deleteProduct(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) return;
    
    await fetch(`${API_URL}/producto`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    });
    loadProducts();
}

// Cargar lista de productos al iniciar la página
loadProducts();