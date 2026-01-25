import {createFileRoute} from '@tanstack/react-router'
import {Button} from "../components/Button";

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    const icon = (<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L4 4L1 1" stroke="#D8CABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)

    return (
        <>

            <div>
                <Button as={"button"} variant={'primary'} icon={icon} disabled>Hello "/"!</Button>
                <Button as={"button"} variant={'secondary'} disabled>Hello "/"!</Button>
                <Button as={"button"} variant={'transparent'}  icon={icon} disabled>Hello "/"!</Button>
            </div>
            <div>
                <Button as={"button"} variant={'primary'} >Hello "/"!</Button>
                <Button as={"button"} variant={'secondary'} >Hello "/"!</Button>
                <Button as={"button"} variant={'transparent'} icon={icon} >Hello "/"!</Button>
            </div>
        </>
    )
}
