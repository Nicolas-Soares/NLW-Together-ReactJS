import illustrationSvg from "../assets/images/illustration.svg";
import logoSvg from "../assets/images/logo.svg";
import googleIconSvg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

import { useHistory } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push("/rooms/new");
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconSvg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
