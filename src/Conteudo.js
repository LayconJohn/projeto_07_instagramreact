export default function Conteudo() {
    // logic
    const stories = [
        "https://www.bing.com/th?id=OIP.URwsy8Rn-HX8VKXlABsVNgAAAA&w=110&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        "https://uploads.metropoles.com/wp-content/uploads/2020/11/09184609/Terry-Crews-1-600x400.jpg",
        "https://th.bing.com/th/id/OIP.sd-g-FyLSHkAX1v651lwewHaId?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.F_gQb_hCK8jtR39dKzbOqQHaHa?pid=ImgDet&rs=1",
        "https://yt3.ggpht.com/ytc/AKedOLT0M-YrxYL2vN1tOOciMugGdaj1Dh4HOHJ1LwLJ8w=s88-c-k-c0x00ffffff-no-rj",
        "https://th.bing.com/th/id/R.a52478c83264c0816f31526d16ec9a25?rik=0I5All2mCrYM8Q&riu=http%3a%2f%2fmedia3.popsugar-assets.com%2ffiles%2f2015%2f05%2f21%2f798%2fn%2f1922398%2fc4b4fd060a15cb6f_Screen_Shot_2015-05-21_at_11.03.26_AM2Xqwoc.xxxlarge%2fi%2fChris-Pratt-Instagram-Pictures.jpg&ehk=OFUuN5rFGnbOVw8R5mR01bege5MWQfSAWVW5Pz96NHI%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.cC-aIrFVNmZR12NE9WnxZgHaHa?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.k78a_J8yD9tgypoiFkrMzQHaE5?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/R.65c967d6698e7d1cea30ced2b19ae52d?rik=N69WiHPAa%2bOSGg&riu=http%3a%2f%2frevlt.be%2fwp-content%2fuploads%2frihanna-instagram-7.jpg&ehk=%2btDlUnqGzyp4fFRHrHpzhrzGMSkIKUcauqjTYCvB%2bTM%3d&risl=&pid=ImgRaw&r=0"
    ]

    const posts = [
        {imageProfile: "https://www.instagram.com/javascript.js/", titleAcount: "Javascript", imagePost:"https://preview.redd.it/19fq7c002w021.png?width=960&crop=smart&auto=webp&s=6f07026d1381361b7a1716442cfc86c85d567047" ,imageLike:"https://www.instagram.com/teslamotors/", nameLike:"respondeai", numberLike:"outras 101.523 pessoas"},
        {imageProfile: "https://www.instagram.com/apple/", titleAcount: "Apple", imagePost:"https://i1.wp.com/bgr.com/wp-content/uploads/2020/04/iphone-12-pro-jonas-daehnert.jpg?w=1150&ssl=1" ,imageLike:"https://th.bing.com/th/id/OIP.k78a_J8yD9tgypoiFkrMzQHaE5?pid=ImgDet&rs=1", nameLike:"teslamotors", numberLike:"outras 100.993 pessoas"},
        {imageProfile: "https://www.instagram.com/fifa/", titleAcount: "Fifa", imagePost:"https://img.olhardigital.com.br/wp-content/uploads/2021/09/fifa-22-min-695x500.jpg" ,imageLike:"https://i.pinimg.com/564x/49/61/e2/4961e2ff5e732de71fcb39300bf61a0b.jpg", nameLike:"adidas", numberLike:"outras 87.532 pessoas"}
    ];

    const textosRodape = [
        `Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
        Termos • Localizações • Contas mais relevantes • Hashtags • 
        Idioma`,
        ` © 2021 INSTAGRAM DO FACEBOOK`
    ];

    const recomendados = [
        {nameIcon: "logo-amazon", link:"https://www.instagram.com/amazon/", name: "Amazon"},
        {nameIcon: "logo-apple", link:"https://www.instagram.com/twitch/", name: "Twitch"},
        {nameIcon: "logo-whatsapp", link:"https://www.instagram.com/whatsapp/", name: "Whatsapp"},
        {nameIcon: "logo-twitter", link:"https://www.instagram.com/twitter/", name: "Twitter"},
        {nameIcon: "logo-xbox", link:"https://www.instagram.com/xbox/", name: "Xbox"},
        
    ];

    const dadosPerfil = {linkProfile: "https://www.instagram.com/layconjohn/", imageProfile: "https://yt3.ggpht.com/ytc/AKedOLSbZzHrV2Fp6Bc5WmvzbQ6nanXYjdnx9UbqmbpbtbU=s88-c-k-c0x00ffffff-no-rj", nickName:"layconjohn", nameProfile:"Laycon John"}

    // render
    return (
        <div class="conteudo">
            <div class="esquerda">
                <div class="stories branco">
                    {stories.map(storie => <div class="storie"><img src={storie} alt=""></img></div>)}
                    <div class="seta-stories">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>


                <div class="posts">
                    {posts.map(post => 
                    <div class="post">
                        <div class="aba-superior branco">
                            <a href={post.imageProfile} target="_blank">
                                <ion-icon name="logo-javascript"></ion-icon>
                                <h4 class="preto">{post.titleAcount}</h4>
                            </a>
                            <ion-icon name="ellipsis-horizontal" class="opcoes"></ion-icon>

                        </div>
                        <img src={post.imagePost} alt=""></img>
                        <div class="aba-inferior branco">
                            <div class="icones-inferior">
                                <ion-icon name="heart-outline" class="preto"></ion-icon>
                                <ion-icon name="chatbubble-outline" class="preto"></ion-icon>
                                <ion-icon name="paper-plane-outline" class="preto"></ion-icon>
                                <div class="salvar">
                                    <ion-icon name="bookmark-outline"class="preto"></ion-icon>
                                </div>
                                
                            </div>
                            <div class="curtidas">
                                <img src={post.imageLike} alt=""></img>
                                <p class="preto">Curtido por <strong><a href="https://www.instagram.com/teslamotors/" target="_blank">{post.nameLike}</a></strong> e <streong>{post.numberLike}</streong></p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>


            <div class="borda-separadora cinza-fundo"></div>

            <div class="direita">
                <a href={dadosPerfil.linkProfile}>
                    <div class="perfil">
                        <img src={dadosPerfil.imageProfile} alt=""></img>
                        <div class="nome-perfil">
                            <h5 class="preto">{dadosPerfil.nickName}</h5>
                            <h6 class="cinza-claro">{dadosPerfil.nameProfile}</h6>
                        </div>
                    </div>
                </a>

                <div class="borda-horizontal cinza-fundo"></div>

                <div class="sugestoes">
                    <div class="sugestoes-esquerda">

                        <p class="cinza-escuro">Sugestões para você</p>

                        {recomendados.map(recomendado =>
                        <div class="recomendados">
                            <ion-icon name={recomendado.nameIcon}></ion-icon>
                            <a href={recomendado.link} target="_blank">
                                <div class="user-recomendado">
                                    <p class="preto">{recomendado.name}</p>
                                    <p class="cinza-escuro">segue você</p>
                                </div>
                            </a>
                        </div>)};

                    </div>
                    <div class="sugestoes-direita">
                        <h6>Ver tudo</h6>
                        {recomendados.map( recomendaqdo => <p class="azul">Seguir</p>)}
                    </div>
                </div>


                <div class="rodape">
                    {textosRodape.map(rodape => <p class="cinza-claro" >{rodape}</p>)}
                </div>
            </div>
        </div>
    )
}

