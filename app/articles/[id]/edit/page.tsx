export default function EditArticlePage({
  params,
}: {
  params: { id: string };
}) {
  return <div className="p-4">Edit Artikel ID: {params.id}</div>;
}
