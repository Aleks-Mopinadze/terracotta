import styles from './Footer.module.css'
import {Link} from "@tanstack/react-router";
import {Facebook, Mail, Phone, Telegram, Vk} from "../Icons";


export const Footer = () => {


    return <footer className={styles.footer}>
        <div className="container">
            <div className={styles.wrapper}>


                <div className={styles.logo}>
                    <img src="/logo.png" alt="Logo"/>
                    <div className={styles.logoText}>
                        Terracotta hand crafted pottery studio 2024 all rights reserved
                    </div>
                </div>

                <nav className={styles.navigation}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <Link to={'/'} className={styles.navLink} >Costumer service</Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link to={'/'} className={styles.navLink} >Terms & conditions</Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link to={'/'} className={styles.navLink} >Contacts</Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.contacts}>
                    <div className={styles.contactsItem}>
                        <div className={styles.contactsIcon}>
                            <Phone/>
                        </div>
                        <div>
                            <a href="tel:+725676877879" className={styles.contactLink}>
                                +72 567 687 7879
                            </a>
                        </div>
                    </div>

                    <div className={styles.contactsItem}>
                        <div className={styles.contactsIcon}>
                            <Mail/>
                        </div>
                        <div>
                            <a href="mailto:teraccotta_studio@gmail.com" className={styles.contactLink}>
                                teraccotta_studio@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.socials}>
                    <div className={styles.socialsItem}>
                        <a href="https://www.instagram.com/terracotta_studio/" target="_blank" rel="noreferrer">
                            <Facebook/>
                        </a>
                    </div>


                    <div className={styles.socialsItem}>
                        <a href="https://www.instagram.com/terracotta_studio/" target="_blank" rel="noreferrer">
                            <Telegram/>
                        </a>
                    </div>


                    <div className={styles.socialsItem}>
                        <a href="https://www.instagram.com/terracotta_studio/" target="_blank" rel="noreferrer">
                            <Vk/>
                        </a>
                    </div>
                </div>

                <div className={styles.footerText}>
                    Terracotta hand crafted pottery studio 2024 all rights reserved
                </div>

            </div>
        </div>
    </footer>
}