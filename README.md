PAGINACION "/api/products/" y Vista "/products/"
- NUEVOS query params aceptados en ambas rutas:

1) QUERY (sort)
ej. de implementacion
- sort=priceAsc (filtra de menor a mayor precio)
- sort=priceDesc (filtra de mayor a menor precio)

2) QUERY (query)
Filtra productos por categoría. Acepta categorías existentes y por crear.
Actualmente las categorías son: Escritura, Papeleria, Organizacion, Accesorios, Tecnologia y Herramientas.
ej. de implementacion

query=Escritura (devuelve todos los productos con categoria "Escritura")

----

Ruta de Carrito METODO PUT "/api/carts/:cid/"
Realizadas las validaciones pertinentes. Exige que la insercion de datos por body sea de un array de objetos.
ej de insercion.

[{
"product": "(_id del producto válido/existente en MongoDB)",
"quantity: 5
}]


