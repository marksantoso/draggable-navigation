export default async function Page( props: { params: Promise<{ page: string }> }) {
  const { page } = await props.params;

  return (
    <main className="flex flex-col gap-[32px] items-center justify-center flex-1 h-full">
      <h1>{page}</h1>
    </main>
  );
}

 