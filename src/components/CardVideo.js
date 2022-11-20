import InfoUsuario from "./InfoUsuario";

function CardVideos({titulo,video}){
    

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={video}/>
              <h4>{titulo}</h4>
              <InfoUsuario nome="Nome do Usuário" foto="imagem"/>
            </div>
    )
}

export default CardVideos