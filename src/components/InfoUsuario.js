
function InfoUsuario({nome,foto}){

    return(
        <div>
            <img src={foto} alt="Imagem"/>
            <p>{nome}</p>
        </div>
    )
}

export default InfoUsuario;