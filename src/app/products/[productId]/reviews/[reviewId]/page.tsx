"use client";
import { notFound } from "next/navigation";

function getRandInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // if (getRandInt(2) === 1) {
  //   throw new Error("Random error");
  // }
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
