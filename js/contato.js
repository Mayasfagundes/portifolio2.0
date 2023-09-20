// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', function () {
    animeScroll();
  });
}


const myObserver = new IntersectionObserver ( (entries) =>{
entries.forEach( (entry) =>{
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  } else {
    entry.target.classList.remove('show')
  }
  
})

})

const elements = document.querySelectorAll('.hidden')

elements.forEach ( (element) => myObserver.observe(element))

