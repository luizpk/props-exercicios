import React from "react";
import "./styles.css";
import CardVideos from "./components/CardVideo.js";

export default function App() {
  const nomeVideo = "Título do vídeo";

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
            <CardVideos titulo={nomeVideo} video="https://picsum.photos/400/400?a=1 "/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu sou o footer!</h4>
        </footer>
      </div>
    </div>
  );
}
