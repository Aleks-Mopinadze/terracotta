import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: ({params})=> {
    return params.productId
  }
})

function RouteComponent() {

  const id = Route.useLoaderData()

  return <div>Hello "/products/$productId"! {id}</div>
}
