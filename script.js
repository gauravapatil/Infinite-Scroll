let api_key="HDp8xPDsjjsheWE4HVg98N7isveeHOr79yiKx3w6mjE"
let url=`https://api.unsplash.com/photos/random/?client_id=${api_key}&count=30`;


let div=document.getElementById("img");
async function fetchImg(){
    let response= await fetch(url);
    let data=await response.json();
    console.log(data);
   

    data.forEach(photo => {
        let img=document.createElement("img");
        img.src=photo.urls.regular;
        img.style.height="400px";
        img.style.width="400px";
        div.appendChild(img);
    });

}
fetchImg();
window.addEventListener("scroll",function(){
    if(window.scrollY+window.innerHeight>=document.body.offsetHeight){
        fetchImg();
    }
})