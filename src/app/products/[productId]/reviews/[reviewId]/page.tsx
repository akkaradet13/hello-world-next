import { notFound } from "next/navigation";

export default function ProductReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if( parseInt(params.productId) > 10 || parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <div>
      <h1>
        Product Review Page {params.productId}/revies {params.reviewId}
      </h1>
    </div>
  );
}
