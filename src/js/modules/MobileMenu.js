class MobileMenu{
    constructor(){
      this.menuIcon = document.querySelector('.site-header__menu-icon');
      this.menuContent = document.querySelector('.site-header__content');
      this.header = document.querySelector('.site-header');
      this.events()  
    }

    events() {
        console.log(this.menuIcon);
        this.menuIcon.addEventListener('click', () => this.toggleMenu())
    }

    toggleMenu(){
        this.menuContent.classList.toggle('site-header__content--is-visible');
        this.header.classList.toggle('side-header--mobile');
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }

}

export default MobileMenu;