let link = document.getElementById("link")

if( link.href === "https://www.google.com/"){

    link.href = "https://www.infnet.edu.br/infnet/home/"
} 

link.removeAttribute("target");

let bersek = document.getElementById("bersek_img")

bersek.setAttribute("title", "bersek")

