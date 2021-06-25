import style from './Landing.module.scss';

export default function Landing () {
    const julleTitle = "Salut! I'm Julle";
    const julleSlogan = "Building digital happiness "
    const emoji = '🧰'
    return (
        <section id={style.julle_landing}>
            <div className={style.centered_title}>
                <h1 className={style.landing_title}>{julleTitle}</h1>
                <h2 className={style.landing_subtitle}>{julleSlogan} <span >{emoji}</span></h2>
                <section className={style.social_links}>

                </section>
            </div>
        </section>
    )
}