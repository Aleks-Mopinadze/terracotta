import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(Cart)/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(Cart)/cart"!</div>
}
