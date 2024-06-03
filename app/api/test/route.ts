export async function GET() {
const message = "hello from server"
  return Response.json({message })
}