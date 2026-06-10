import '../styles/MainContent.css'

export function MainContent() {
    return (
        <main>
            <PromocoesSection />
        </main>
    )
}

const PromocoesSection = () => (
    <section>
        <h1>Promoções</h1>
        <section className='card-gallery'>
            <Article className="w-4 h-1" img="../img/001.png">
                <h1>Kit 1 - Senhor dos Anéis - Miniaturas para RPG</h1>
                <div>
                    <a href="#" class="btn">Adicionar ao Carrinho</a>
                    <a href="#" class="btn"><i class="fa-solid fa-heart"></i></a>
                 </div>
            </Article>

            {/* <Article
                className="w-2 h-1"
                img="../img/2846378.jpg"
                title="Título do artigo 2"
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum quos deleniti corrupti ex dolore nulla rem labore dolores, modi aut earum aperiam id soluta accusamus? Natus deserunt porro odio.</p>
            </Article> */}
        </section>
    </section>
)

const Article = ({className, img, title,children})=> (
   <article className={className}>
      {img && <img src={img} alt={title}/>}
      {title && <h1>{title}</h1>}
      {children} 
   </article>
//    children representa tudo o que for inserido dentro do componente
)