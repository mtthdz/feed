export default function StoryPage({
  params: { id }
}: {
  params: { id: string }
}) {

  if (!id) return <div>loading...</div>

  return (
    <section>
      <p>hello {id}</p>
    </section>
  )
}