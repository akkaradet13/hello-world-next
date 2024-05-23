import Link from 'next/link';
export default function ProductsPage() {
  const products = 3;
  return (
    <>
      <Link href="/">Heme</Link>
      <h1><Link href="products/1">Products 1</Link></h1>
      <h1><Link href="products/1" replace>Products 2</Link></h1>
      <h1><Link href={`products/${products}`} >Products {products}</Link></h1>
    </>
  );
}