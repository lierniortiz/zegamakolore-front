window.onload = function(){
    getBlogEntries()
    getGalleryEntries()
}


function getBlogEntries(){
    fetch('https://zegamakolore-app.herokuapp.com/api/entrada-blogs/?populate=*')
      .then(response => response.json())
      .then(data =>
      data.data.slice(-4).forEach(writeBlogEntries))
}

function writeBlogEntries(element){
    const blog_div = document.getElementById('blog-entries')
    var entrada_blog = element.attributes
    var titulo = entrada_blog.titulo
    var texto = entrada_blog.texto
    var texto_corto = texto.substring(0,100)
    var autor = entrada_blog.autor
    var fecha = entrada_blog.fecha

    var img_url = entrada_blog.foto.data.attributes.url
    blog_div.innerHTML = 
    `    
    <div class="col-1-2" >
        <article class="post-wrap">
            <div class="post-img">
                <a href="#0"><img style="max-height:350px;" src="${img_url}" alt=""></a>
            </div>
            <div class="post">
                <h2 class="entry-title"><a href="entrada-blog.html#${element.id}">${titulo}</a></h2>
                <div class="post-meta">
                    <a>${fecha}</a> <span class="mid-sep">·</span> <a>${autor}</a>
                </div>
                <p>${texto_corto}... </p>
                <a class="btn read-more" href="entrada-blog.html#${element.id}">Leer más</a>
            </div>
        </article>
    </div>
    `
    + blog_div.innerHTML
    
}

function getGalleryEntries(){
    fetch('https://zegamakolore-app.herokuapp.com/api/trabajos-recientes-academias/?populate=*')
      .then(response => response.json())
      .then(data =>
      data.data.slice(0,6).forEach(writeGalleryEntries))
}

function writeGalleryEntries(element){
    const blog_div = document.getElementById('gallery')
    var imagen = element.attributes
    var titulo = imagen.titulo_obra
    var autor = imagen.autor
    if (autor==null){
        autor=''
    }

    if (titulo==null){
        titulo=''
    }
    var categoria = imagen.categoria
    var img_url = imagen.foto_obra.data.attributes.url
    blog_div.innerHTML = 
    `    
    <div class="col-1-3 mix ${categoria}" style="display: inline-block;>
        <div class="content">
            <div class="recent-work">
                <img src="${img_url}" alt="">                                    
                <div class="overlay">
                    <span>${autor}</span>
                    <h2><a class="img-wrap" data-rel="lightcase:${categoria}" title="${titulo} - ${categoria}" href="${img_url}">${titulo}</a></h2>
                </div>
                
            </div>
        </div>
    </div>
    
    `
    + blog_div.innerHTML
    
}