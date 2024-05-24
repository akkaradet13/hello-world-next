function getRandInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandInt(2);

  if (random === 1) {
    throw new Error("Random error");
  }
  return (
    <>
    {children}
    <h2>Features products</h2>
    </>
  );
}