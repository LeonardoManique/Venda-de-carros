export default function NavBar(imgsrc, contatosrc, iniciosrc) {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
            <img src="${imgsrc}" class="logo-navbar" alt="Brechó">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Procure aqui o produto">
                    <button class="search-btn">Procurar</button>
                </div>
                <a href="#"><i class="uil uil-user-circle"></i></a>
                <a href="#"><i class="uil uil-shopping-bag"></i></i></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="${iniciosrc}" class="link"> Inicio </a></li>
            <li class="link-item"><a href="#" class="link"> Roupas </a></li>
            <li class="link-item"><a href="#" class="link"> Acessórios </a></li>
            <li class="link-item"><a href="${contatosrc}" class="link"> Contato </a></li>
        </ul>
    `;
}

/*
 <div class="nav">
        <img src="./assets/logo.png" class="logo-navbar" alt="Brechó">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Procure aqui o produto">
                <button class="search-btn">Procurar</button>
            </div>
            <a href="#"><i class="uil uil-user-circle"></i></a>
            <a href="#"><i class="uil uil-shopping-bag"></i></i></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="./index.html" class="link"> Inicio </a></li>
        <li class="link-item"><a href="#" class="link"> Roupas </a></li>
        <li class="link-item"><a href="#" class="link"> Acessórios </a></li>
        <li class="link-item"><a href="./components/contato/contatos.html" class="link"> Contato </a></li>
    </ul>

    */
