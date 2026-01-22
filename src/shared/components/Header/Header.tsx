import styles from './Header.module.css'
import {Link} from "@tanstack/react-router";

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link to={'/'} className={styles.headerLogoLink}>
                        <div className={styles.logo}>
                            <img src="/logo.png" alt="Logo"/>
                        </div>
                    </Link>

                    <nav className={styles.navigation}>
                        <ul className={styles.navItems}>
                            <li className={styles.navItem}>
                                <Link to="/" className={styles.navLink}>Home</Link>
                            </li>
                            <li  className={styles.navItem}>
                                <Link to="/" className={styles.navLink}>Shop</Link>
                            </li>
                            <li  className={styles.navItem}>
                                <Link to="/" className={styles.navLink}>Artists</Link>
                            </li>
                            <li  className={styles.navItem}>
                                <Link to="/" className={styles.navLink}>Contacts</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.actions}>
                        <div className={styles.cart}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H1.33298C1.92087 1 2.21533 1 2.45511 1.10447C2.66651 1.19658 2.84726 1.34488 2.97761 1.53293C3.1252 1.74587 3.17849 2.03021 3.28487 2.59778L5.96345 16.8889L18.8953 16.8889C19.4577 16.8889 19.7397 16.8889 19.9726 16.791C20.1784 16.7046 20.3559 16.5645 20.4877 16.3865C20.6367 16.1851 20.6998 15.9156 20.826 15.3771L20.827 15.3733L22.7741 7.06217L22.7745 7.06043C22.9659 6.24352 23.0619 5.83408 22.9565 5.51291C22.8641 5.23111 22.6696 4.9922 22.4116 4.84013C22.1174 4.66667 21.6922 4.66667 20.8396 4.66667H4.10213M19.6128 23C18.9275 23 18.3719 22.4528 18.3719 21.7778C18.3719 21.1028 18.9275 20.5556 19.6128 20.5556C20.2981 20.5556 20.8536 21.1028 20.8536 21.7778C20.8536 22.4528 20.2981 23 19.6128 23ZM7.20425 23C6.51895 23 5.9634 22.4528 5.9634 21.7778C5.9634 21.1028 6.51895 20.5556 7.20425 20.5556C7.88956 20.5556 8.44511 21.1028 8.44511 21.7778C8.44511 22.4528 7.88956 23 7.20425 23Z" stroke="#FFFAF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={styles.favorites}>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 5.15035C9.94444 -1.02652 1 -0.368629 1 7.52612C1 15.4209 12.5 22 12.5 22C12.5 22 24 15.4209 24 7.52612C24 -0.368629 15.0556 -1.02652 12.5 5.15035Z" stroke="#FFFAF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.burger}>
                        <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.25C0 0.559644 0.559644 0 1.25 0H21.25C21.9404 0 22.5 0.559644 22.5 1.25C22.5 1.94036 21.9404 2.5 21.25 2.5H1.25C0.559645 2.5 0 1.94036 0 1.25ZM0 7.5C0 6.80964 0.559644 6.25 1.25 6.25H21.25C21.9404 6.25 22.5 6.80964 22.5 7.5C22.5 8.19036 21.9404 8.75 21.25 8.75H1.25C0.559645 8.75 0 8.19036 0 7.5ZM0 13.75C0 13.0596 0.559644 12.5 1.25 12.5H21.25C21.9404 12.5 22.5 13.0596 22.5 13.75C22.5 14.4404 21.9404 15 21.25 15H1.25C0.559645 15 0 14.4404 0 13.75Z" fill="#FFFAF5" />
                        </svg>
                    </div>

                </div>

            </div>
        </header>
    )
}

