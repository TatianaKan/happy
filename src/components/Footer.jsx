import Container from "./Container.jsx";
import style from "./Footer.module.css";
import {ReactComponent as VKIcon} from "../img/vk.svg"
import {ReactComponent as TGIcon} from "../img/tg.svg"
import {ReactComponent as PNIcon} from "../img/pinterest.svg"
import {ReactComponent as SBIcon} from "../img/stumbleupon.svg"

const Footer = () => {
  return <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
          <p> Design: <a href='https://t.me/Mrshamallowww'>Anastasia Ilina</a>  </p>
          <p> Сoder: <a href='https://t.me/Tan_Kan'>Tatsianka</a> </p>
          <p> © HBCard, 2022  </p>
        </div>

        <ul className={style.social}>
          <li className={style.item}>
            <a href="https://vk.com/methed" className={style.link}> <VKIcon /></a>
         
          </li>
          <li className={style.item}>
            <a href="https://t.me/methed_chat_frontend" className={style.link}> <TGIcon /></a>
          </li>
          <li className={style.item}>
            <a href="https://pinterest.com" className={style.link}> <PNIcon /></a>
          </li>
          <li className={style.item}>
            <a href="https://stum.co" className={style.link}> <SBIcon /></a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
}

export default Footer;