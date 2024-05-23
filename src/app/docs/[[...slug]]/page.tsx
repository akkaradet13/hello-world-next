export default function DocsPage({ params }: { params: { slug: string[] }}) {
  if(params.slug?.length === 2) {
    return (
      <div>
        <h1>Docs Page {params.slug[0]}/{params.slug[1]}</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>Docs Page</h1>
    </div>
  );
}