export default function UserPage({
  params: { id }
}: {
  params: { id: string }
}) {

  if (!id) return <div>loading...</div>

  return (
    <main>
      <p>user ID {id}</p>
    </main>
  )
}