import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    href={"/"}>
                    Home
                </Link>
            </div>
        </nav>
    )
}
