function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('#profile img');
  const alt = document.querySelector('#profile img');

  
    // subdtituir a imagem
    if (html.classList.contains('light')) {
      // se tiver light, adicionar a imagem light
      img.setAttribute('src', './assets/avatar-light.png');
      alt.setAttribute('alt', 'Mayk Brito com camisa e óculos preto')
    } else {
      // se tiver sem light mode, manter a iamgem normal
      img.setAttribute('src','./assets/avatar.png')
      alt.setAttribute('alt', 'Mayk Brito com barba e camisa preta')
  }

}