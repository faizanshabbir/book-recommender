import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Books read recently:</p>
      <Input type="book1" placeholder="Book" />
    </main>
  )
}
