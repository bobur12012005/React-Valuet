import { Outlet } from "react-router-dom"
import './layout-css/header.css'
import './layout-css/aside.css'

function Layout() {
    return (
        <>
            <header>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <img src="/icons/search.svg" />
                </div>
                <div className="notification">
                    <button>
                        <img src="/icons/message.svg" />
                    </button>
                    <button>
                        <img src="/icons/notification.svg" />
                    </button>
                </div>
            </header>
            <Outlet />
            <aside>
                <div className="sidebarTop">
                    <img src="/logotype/valuet.svg" />
                    <div></div>
                </div>
                <div className="sidebarMiddle">
                    <div className="menu-option overview">
                        <img src="/icons/overview.svg" />
                        <span>Overview</span>
                    </div>
                    <div className="menu-option wallets">
                        <img src="/icons/wallets.svg" />
                        <span>Wallets</span>
                    </div>
                    <div className="menu-option transactions">
                        <img src="/icons/transactions.svg" />
                        <span>Transactions</span>
                    </div>
                    <div className="menu-option exchange">
                        <img src="/icons/exchange.svg" />
                        <span>Exchange</span>
                    </div>
                </div>
                <div className="sidebarBottom">
                    <div className="sidebarBottomLine"></div>
                    <div className="otherStaff">
                        <div className="fullname">
                            <div></div>
                            <span>Bobur Makhmadkulov</span>
                        </div>
                        <div className="logout">
                            <img src="/icons/logout.svg" />
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Layout