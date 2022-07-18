window.onload = function(){
    getGalleryEntries()
}
function getGalleryEntries(){
    fetch('https://zegamakolore-app.herokuapp.com/api/trabajos-recientes-academias/?populate=*')
      .then(response => response.json())
      .then(data =>
      data.data.forEach(writeGalleryEntries))
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