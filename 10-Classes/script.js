// classe serve para organizar o codigo em pequenos objetos ou acoes
// ex: scroll suave

class SmoothScroll {
    constructor(links) { /*Primeiro codigo a ser executado de uma classe*/
        this.linkElements = document.querySelectorAll(links); /* seleciono todos os "a"que possuem no codigo atraves do que foi passado na linha 16 */
        this.addClickEvent(); /* coloco pra ficar ativo por padrao */
    }
    handleClick(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior: "smooth",
        })
    }
    addClickEvent() {
        this.linkElements.forEach(link => {
            link.addEventListener("click",this.handleClick);
        });
    }
}

class ActiveSmoothScroll extends SmoothScroll {
    constructor(links, sections) {
        super(links);

        this.sectionElements = document.querySelectorAll(sections);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScroll();
        this.activeNavScroll();
    }
    handleScroll() {
        this.sectionElements.forEach((section, i) => {
            if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
                this.linkElements[i].classList.add("active");
            }
        })
    }
    activeNavScroll() {
        window.addEventListener("scroll", this.handleScroll);
    }
}

const scroll = new SmoothScroll("a[href^='#']", "section");

// console.log(scroll.linkElements);