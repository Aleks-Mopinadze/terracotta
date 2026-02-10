import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(orders)/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(orders)/orders"!</div>
}
