export default async function ProductDetails({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.id}`, {
    cache: "no-store"
  });
  const product = await res.json();

  if (product.error) return <p>Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.category} • {product.brand}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <p><span className="font-semibold">Price:</span> ${product.price}</p>
        <p><span className="font-semibold">Rating:</span> ⭐ {product.rating}</p>
        <p><span className="font-semibold">Total Sells:</span> {product.totalSells}</p>
        <p><span className="font-semibold">Created At:</span> {new Date(product.createdAt).toLocaleDateString()}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Description</h2>
      <p className="mb-6">{product.description}</p>

      {product.features?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
