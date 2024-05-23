import { Metadata } from "next";

type Props = {
  params: { productId: string }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resole => {
    setTimeout(() => {
      resole(` Page ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product Page ${params.productId}`,
  };
}


export default function ProductPage({
  params
}: {
  params: { productId: string }
}) {
  return (
    <div>
      <h1>Product Page {params.productId}</h1>
    </div>
  );
}