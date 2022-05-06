export default function BarraInferiorMobile() {
    //logic
    const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

    //render
    return (
        <div class="barra-inferior branco">
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div> 
    )
}