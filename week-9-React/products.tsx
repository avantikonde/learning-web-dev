const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
];

function ProductList() {
  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
  );

  return <ul>{listItems}</ul>;
}   
