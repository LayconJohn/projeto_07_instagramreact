export default function Topo(props) {
    //logic
    const menuItem = [
        {urlLink: "https://www.instagram.com/direct/inbox/", ionIconName: "paper-plane-outline", class:"encaminhar"},
        {urlLink: "https://www.instagram.com/explore/", ionIconName: "compass-outline", class:"compasso"},
        {urlLink: "https://www.instagram.com/", ionIconName: "heart-outline", class:"coracao"},
        {urlLink: "https://www.instagram.com/layconjohn/", ionIconName: "person-outline", class:"pessoa"}
    ]


    // render
    return (          
        <div class="topo branco">
            <a href="https://www.instagram.com/" target="_blank">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="borda-vertical"></div>
                    <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png" alt=""></img>
                </div>
            </a> 

            <div class="busca cinza-busca"><p>Pesquisar</p></div>

            <div class="menu">
                <a href="https://www.instagram.com/" target="_blank">
                    {menuItem.map(menu => <ion-icon name={menu.ionIconName} class={menu.class}></ion-icon>)}
                </a>
            </div>

        </div>
    )
}


