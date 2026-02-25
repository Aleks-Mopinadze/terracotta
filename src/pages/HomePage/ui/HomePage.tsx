import styles from './HomePage.module.css'
import {Button} from "@/shared/ui/button";


export const HomePage = () => {

    return <section className={styles.main}>
        <div className="container">
            <div className={styles.wrapper}>

                <div className={styles.title}>
                    <span className={styles.titleOne}>
                        Inspired by Earth
                    </span>
                    <span className={styles.titleTwo}>
                        Crafted by Hand
                    </span>
                </div>

                <div className={styles.mainText}>
                    Discover the art of clay in every form. Explore our curated collection of handcrafted pottery,
                    sculptures, and tableware, each piece reflecting the beauty of nature and the skill of our artisans.
                </div>

                <div className={styles.mainAction}>
                    <Button as={'Link'} to={'/'}>Shop now</Button>
                </div>
            </div>
        </div>
    </section>
}


