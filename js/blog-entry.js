window.onload = function(){
    getBlogEntries()
}

//TODO: rich text. html tiene que identificar /n como salto de linea en texto
function getBlogEntries(){
    const id = window.location.href.split('#')[1]
    console.log(id)

    fetch('https://zegamakolore-app.herokuapp.com/api/entrada-blogs/' + id  + '/?populate=*')
      .then(response => response.json())
      .then(data =>
      writeBlogEntry(data.data))
}

function writeBlogEntry(element){
    console.log(element)
    const blog_div = document.getElementById('blog-entry')
    var entrada_blog = element.attributes
    var id = entrada_blog.id
    var titulo = entrada_blog.titulo
    var texto = entrada_blog.texto
    var autor = entrada_blog.autor
    var fecha = entrada_blog.fecha
    var img_url = entrada_blog.foto.data.attributes.url
    blog_div.innerHTML += 
        `    
        <div class="col-1-1" >
            <article class="post-wrap">
                
                <div class="post">
                    <h1> ${titulo}</h1>
                    <div class="post-meta">
                        <h3>${fecha} · ${autor}</h3>
                    </div>
                    <p style="text-align:justify">${texto}... </p><br>
                </div>
                <div class="post-img">
                    <a href="#0"><img src="${img_url}" alt=""></a>
                </div>
            </article>
        </div>
        
        `
    
}