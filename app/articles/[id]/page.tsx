export default function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <div className="p-4">Detail Artikel ID: {params.id}</div>;
}
