function updateBio(){
    let Name = document.getElementById("name").value;
    let Img = document.getElementById("source").value;
    let Bio = document.getElementById("bio").value;
    document.getElementById("h1").innerHTML=Name;
    document.getElementById("src").src=Img;
    document.getElementById("h2").innerHTML=Bio;
}