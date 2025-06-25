export default async function Details({ params }: { params: { page: string } }) {
  const { page } = await params;

  return (
    <main className="flex flex-col gap-[32px] items-center flex-1 h-full">
      <h1>{page}</h1>
    </main>
  );
}
