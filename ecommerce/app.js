const wrapper=document.querySelector(".sliderwrapper");
const menuitems = document.querySelectorAll(".menuitem");
const product=[
    {
        id:1,
        title:"Dynamic Fit",
        price: 112,
        colors:[
            {
                code:"blue",
                img:"./img/dynamicfitblue.png",
            },
            {
                code:"purple",
                img:"./img/dynamicfitpurple.png",
            },
        ],
    },
    {
        id:2,
        title:"JORDAN",
        price: 132,
        colors:[
            {
                code: "red",
                img:"./img/airjordanred.png",
            },
            {
                code:  "yellow",
                img:"./img/airjordanyellow.png",
            },
            // {
            //     code: "darkred",
            //     img:"./img/airjordanred1.png",
            // },
        ],
    },
    {
        id:3,
        title:"AIR FORCE",
        price: 100,
        colors:[
            {
                code: "white",
                img: "./img/airforcewhite.png",
            },
            {
                code:  "brown",
                img:"./img/airforcebrown.png",
            },
        ],
    },
    {
        id:4,
        title:"JUMPMAN",
        price: 120,
        colors:[
            {
                code: "wheat",
                img: "./img/jumpmanwhite.png",
            },
            {
                code:  "black",
                img:"./img/jumpmanblack.png",
            },
        ],
    },
    {
        id:5,
        title:"AIR MAX",
        price: 112,
        colors:[
            {
                code: "red",
                img: "./img/airmaxred.png",
            },
            {
                code:  "pink",
                img:"./img/airmaxwhitepink.png",
            },
        ],
    },
]
    
let choosenproduct = product[0]
const currentproductimg=document.querySelector(".productimg");
const currentproducttitle=document.querySelector(".producttitle");
const currentproductprice=document.querySelector(".productprice");
const currentproductcolor=document.querySelectorAll(".color");
const currentproductsize=document.querySelectorAll(".size");


menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        //change the choosen product
        choosenproduct = product[index]

        //change text of current product
        currentproducttitle.textContent=choosenproduct.title;
        currentproductprice.textContent= "$"+choosenproduct.price;
        currentproductimg.src= choosenproduct.colors[0].img;

        currentproductcolor.forEach((color,index) => {
            color.style.backgroundColor=choosenproduct.colors[index].code;
        });
});
});
currentproductcolor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colors[index].img
    });
});
currentproductsize.forEach((size,index)=>{
    size.addEventListener("click",()=>
    {
        currentproductsize.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
       size.style.backgroundColor="black"
       size.style.color="white"

    });
});
const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productbutton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display= "none"
});
