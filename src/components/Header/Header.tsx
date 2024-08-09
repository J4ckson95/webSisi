import react from "react"
import logo from "../../assets/LogoSisi140x70.png"
import user from "../../assets/usuario.png"
import out from "../../assets/out.png"
import style from "./header.module.css"
const Header: react.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img className={style.logo} src={logo}></img>
                <ul>
                    <li><img src={user}></img>Mi Cuenta</li>
                    <li><img src={out}></img>Salir</li>
                </ul>
            </div>
            <nav className={style.nav}>
                <ul>
                    <li>Inicio</li>
                    <li>Visitas</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header