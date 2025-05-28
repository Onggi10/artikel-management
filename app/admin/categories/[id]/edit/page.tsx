export default function EditCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  return <div className="p-4">Edit Kategori ID: {params.id}</div>;
}
