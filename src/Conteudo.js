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
                <div class="post">
                    <div class="aba-superior branco">
                        <a href="https://www.instagram.com/javascript.js/" target="_blank">
                            <ion-icon name="logo-javascript"></ion-icon>
                            <h4 class="preto">Javascript</h4>
                        </a>
                        <ion-icon name="ellipsis-horizontal" class="opcoes"></ion-icon>

                    </div>
                    <img src="https://preview.redd.it/19fq7c002w021.png?width=960&crop=smart&auto=webp&s=6f07026d1381361b7a1716442cfc86c85d567047" alt=""></img>
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
                            <img src="https://yt3.ggpht.com/ytc/AKedOLT0M-YrxYL2vN1tOOciMugGdaj1Dh4HOHJ1LwLJ8w=s88-c-k-c0x00ffffff-no-rj" alt=""></img>
                            <p class="preto">Curtido por <strong><a href="https://www.instagram.com/teslamotors/" target="_blank">respondeai</a></strong> e <streong>outras 101.523 pessoas</streong></p>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="aba-superior branco">
                        <a href="https://www.instagram.com/apple/">
                            <ion-icon name="logo-apple"></ion-icon>
                            <h4 class="preto">Apple</h4>
                        </a>
                        <ion-icon name="ellipsis-horizontal" class="opcoes"></ion-icon>
                    </div>
                    <img src="https://i1.wp.com/bgr.com/wp-content/uploads/2020/04/iphone-12-pro-jonas-daehnert.jpg?w=1150&ssl=1" alt=""></img>
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
                            <img src="https://th.bing.com/th/id/OIP.k78a_J8yD9tgypoiFkrMzQHaE5?pid=ImgDet&rs=1" alt=""></img>
                            <p class="preto">Curtido por <strong><a href="https://www.instagram.com/respondeai/" target="_blank">teslamotors</a></strong> e <streong>outras 101.523 pessoas</streong></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div class="borda-separadora cinza-fundo"></div>

            <div class="direita">
                <a href="https://www.instagram.com/layconjohn/">
                    <div class="perfil">
                        <img src="https://yt3.ggpht.com/ytc/AKedOLSbZzHrV2Fp6Bc5WmvzbQ6nanXYjdnx9UbqmbpbtbU=s88-c-k-c0x00ffffff-no-rj" alt=""></img>
                        <div class="nome-perfil">
                            <h5 class="preto">layconjohn</h5>
                            <h6 class="cinza-claro">Laycon John</h6>
                        </div>
                    </div>
                </a>

                <div class="borda-horizontal cinza-fundo"></div>

                <div class="sugestoes">
                    <div class="sugestoes-esquerda">

                        <p class="cinza-escuro">Sugestões para você</p>

                        <div class="recomendados">
                            <ion-icon name="logo-amazon"></ion-icon>
                            <a href="https://www.instagram.com/amazon/" target="_blank">
                                <div class="user-recomendado">
                                    <p class="preto">Amazon</p>
                                    <p class="cinza-escuro">segue você</p>
                                </div>
                            </a>


                        </div>

                        <div class="recomendados">
                            <ion-icon name="logo-apple"></ion-icon>
                            <a href="https://www.instagram.com/twitch/" target="_blank">
                                <div class="user-recomendado">
                                    <p class="preto">Twitch</p>
                                    <p class="cinza-escuro">segue você</p>
                                </div>
                            </a>

                        </div>

                        <div class="recomendados">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                            <a href="https://www.instagram.com/whatsapp/" target="_blank">
                                <div class="user-recomendado">
                                    <p class="preto">Whatsapp</p>
                                    <p class="cinza-escuro">segue você</p>
                                </div>
                            </a>

                        </div>

                        <div class="recomendados">
                            <ion-icon name="logo-twitter"></ion-icon>
                            <a href="https://www.instagram.com/twitter/" target="_blank">
                                <div class="user-recomendado">
                                    <p class="preto">Twitter</p>
                                    <p class="cinza-escuro">segue você</p>
                                </div>
                            </a>

                        </div>

                        <div class="recomendados">                        
                            <ion-icon name="logo-xbox"></ion-icon>
                            <a href="https://www.instagram.com/xbox/" target="_blank">
                                <div class="user-recomendado">
                                    <p class="preto">Xbox</p>
                                    <p class="cinza-escuro">segue você</p>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div class="sugestoes-direita">
                        <h6>Ver tudo</h6>
                        <p class="azul">Seguir</p>
                        <p class="azul">Seguir</p>
                        <p class="azul">Seguir</p>
                        <p class="azul">Seguir</p>  
                        <p class="azul">Seguir</p>  
                    </div>
                </div>


                <div class="rodape">
                    <p class="cinza-claro">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma
                    </p>
                    <p class="cinza-claro">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </p>
                </div>
            </div>
        </div>
    )
}

