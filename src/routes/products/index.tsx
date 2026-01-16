import {createFileRoute, Link} from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const ids = ['1', '2', '3','4']


  return <div>
    {ids.map(id => <div key={id}>
      <Link to={`/products/$productId`} params={ {productId: id} }>product - {id}</Link>
    </div>)}
  </div>
}
