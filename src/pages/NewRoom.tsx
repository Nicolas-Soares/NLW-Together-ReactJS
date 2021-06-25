import illustrationSvg from "../assets/images/illustration.svg";
import logoSvg from "../assets/images/logo.svg";
import "../styles/auth.scss";

import { Link } from "react-router-dom";
import { Button } from "../components/Button";
//import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  //const { user } = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationSvg}
          alt="Ilustação simbólica de perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoSvg} alt="Letmeask logo" />
          <h2>Criar nova sala</h2>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Nome da sala..." />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma nova sala? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
