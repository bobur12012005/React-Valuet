import { Outlet } from "react-router-dom"

function LayoutSign() {
    return (
        <>
            <div class="bg-syle-1"></div>
            <div class="bg-syle-2"></div>
            <Outlet />
        </>
    )
}

export default LayoutSign