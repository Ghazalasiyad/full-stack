// const title=document.getElementById("title")
// const add=document.getElementById("add")
// const remove=document.getElementById("remove")


// add.addEventListener("click",()=>{
// title.classList.add("title")

//  title.style.display="block"



// })

// remove.addEventListener("click",()=>{
//     title.classList.remove("title")
    
//     title.style.display="none"
//     })

// const heading=document.createElement("h1")
// heading.innerHTML="Arslan wins"
// heading.style.color="white"
// heading.style.backgroundColor="black"
// heading.style.textAlign="center"



// heading.addEventListener("mouseover",()=>{
//         heading.innerHTML="Ansar ali lose"
       
        
//         })


//         heading.addEventListener("mouseleave",()=>{
//             heading.innerHTML="Arslan wins"
            
            
//             })
//             document.body.appendChild(heading);



            // array

            // const students =["Ghazala", "Ayzal","jiya","riya"]

            // students.forEach((student)=>{
            // const heading=document.createElement("h3");
            // heading.innerHTML=student;
            // heading.style.color="red"
            // document.body.appendChild(heading);

            // })

            

            // const days =["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday",]

            // days.forEach((day)=>{
            // const heading=document.createElement("h3");
            // heading.innerHTML=day;
            
            // document.body.appendChild(heading);

            // })





            // const table =["2","4", "6","8","10","12","14","16","18","20"]

            // table.forEach((num)=>{
            // const heading=document.createElement("h3");
            // heading.innerHTML=num;
            
            // document.body.appendChild(heading);

            // })
            // function replaceImage() {
            //     const mainImage = document.getElementById("mainImage");
            //     const newImage = document.createElement("img");
    
                
            //     newImage.src = "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw658f5cfc/images/Damask-2nd-scroll.jpg";
            //     newImage.alt = "New Image";
    
                
            //     mainImage.parentNode.replaceChild(newImage, mainImage);
            // }
    
            
            // document.getElementById("replaceImageButton").addEventListener("click", function () {
            //     replaceImage();
            // });


            // function swapImages() {
            //     const mainImage = document.getElementById("mainImage");
            //     const hoverImage = document.getElementById("hoverImage");
    
            //     mainImage.style.display = "none";
            //     hoverImage.style.display = "inline";
            // }
    
            
            // const imageContainer = document.getElementById("imageContainer");
            // imageContainer.addEventListener("mouseover", swapImages);
    
           
            // function revertImage() {
            //     const mainImage = document.getElementById("mainImage");
            //     const hoverImage = document.getElementById("hoverImage");
    
            //     mainImage.style.display = "inline";
            //     hoverImage.style.display = "none";
            // }
    
            
            // imageContainer.addEventListener("mouseout", revertImage);






            // function turnOn(bulb) {
            //     bulb.src = "https://images.freeimages.com/images/large-previews/07c/light-bulb-2-1427493.jpg?fmt=webp&w=350"; // Change the image source to a lit bulb on hover.
            // }
            
            // function turnOff(bulb) {
            //     bulb.src = "https://www.collinsdictionary.com/images/full/lightbulb_111547856_1000.jpg"; 
            // }





            // api function

//             const add = async()=>{
//               const data=await fetch('https://fakestoreapi.com/products')
//               .then(res=>res.json())
//               .then(json=>{
//                 return json;
//               })
//              data.forEach((item)=>{
// const title=document.createElement("h1")
// const image=document.createElement("img");
// title.innerHTML=item.title;
// image.src=item.image;
// image.classList.add("img")
// document.body.appendChild(title);
// document.body.appendChild(image);


//              })
            
//             }
    //    promise    
function MyDisplayer(some){
document.getElementById("demo").innerHTML=some;


}

let mypromise = new promise(function (myresolve,myreject){
let x = 0;
if (x == 0){
    myresolve("ok");
}else{
    myreject("erroe");
}



})
mypromise.then(
    function(value) {MyDisplayer(value);},
    function(error) {MyDisplayer(error);},
    )



            