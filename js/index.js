
let nameReg=/^[a-z|A-Z]{5,}$/
let phoneReg=/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
let passReg=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
let emailReg=/^[a-z]{6,}(@)(gmail|hotmail)(.com)$/
let ageReg=/^1[7-9]|[2-9][0-9]|1[01][0-9]|120$/
  let pname=document.querySelector('#pname')
  let pphone=document.querySelector('#phone')
  let ppass=document.querySelector('#pass')
  let pemail=document.querySelector('#email')
  let page=document.querySelector('#age')
  let prepass=document.querySelector('#repass')

let pass=document.querySelector('.pass').value
let repass=document.querySelector('.repass').value
let namech=document.querySelector('.name').value
let phone=document.querySelector('.phone').value
let age=document.querySelector('.age').value
let email=document.querySelector('.email').value






function checkName(){
    if(!nameReg.test(namech)){
        // pname.classList.remove("ppname")
        pname.classList.replace("d-none","d-flex")
    }
}


 function checkphone(){
    if(!phoneReg.test(phone)){
   
        pphone.classList.replace("d-none","d-flex")
    }
 }
 function checkpass(){
    if(!passReg.test(pass)){
        ppass.classList.replace("d-none","d-flex")
    }
 }
 function checkemail(){
    if(!emailReg.test(email)){
        pemail.classList.replace("d-none","d-flex")
    }
 }
 function checkage(){
    if(!ageReg.test(age)){
        page.classList.replace("d-none","d-flex")
    }
 }

function checkrepass(){
    if(!passReg.test(repass)){
        prepass.classList.replace("d-none","d-flex")
    }
}


let myli=document.querySelectorAll("li")
myli.forEach(li=>{
    li.addEventListener("click",function(info){
      console.log(info.target.dataset.type)
        apidate(info.target.dataset.type)
    })
})


const apiKey='api_key=eba8b9a7199efdcb0ca1f96879b83c44'
const baseurl='https://api.themoviedb.org/3'
const fulurl=baseurl+'/discover/movie?sort_by=popularity.desc&'+apiKey
let mydiv=document.querySelector('.row2')

let datafin=[]
 function apidate(typeme){
    fetch(`https://api.themoviedb.org/3/movie/${typeme}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
            .then((res)=> res.json())
            .then((res=>{
                // console.log(res.results[0].poster_path);
                // console.log("resresult",res.results);
                // console.log("type",typeme)
                showdata(res.results)
           if(res.results){
            datafin=res.results
           }
         
               
            })).catch((err)=>{
                console.log("Err : ",err);
            })
  

  
}
apidate(typeme="popular")




function showdata(data){
    let catnona=""
    console.log("dodo",data)
    data.map(mov => {
        console.log(mov.title)
       // console.log(mov.poster_path)
    
        catnona+=`
        <div class="col-lg-4 col-md-6 col-sm-12 divimg">
          
            <img class="" src='https://image.tmdb.org/t/p/w500/${mov.poster_path}' alt="lkmkl"/>
            


            <div class="overlay">
             <div class=" content"> 
              
             <h2 class="title">${mov.title}</h2>

             <div class="divcon">
                <p class="py-3 animate__animated animate__bounceInLeft">${mov.overview}</p>
                <h4>${mov.release_date}</h4>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <div class="mt-2">
                    <span class="rounded-circle border border-success p-2">${mov.vote_average}</span>
                </div>

              </div>
             </div> 
             
             
         </div>
            
        </div>
        
        
         
        `
        
    });
    mydiv.innerHTML=catnona
    
}



function searchmov(searchmov){
   
    let soso=[]
   // console.log(typeof soso)
    // console.log(datafin)
     for(let fin of datafin){
       soso.push(fin)
    
     }
    
      console.log("soso",soso)
      let car=""
   
          for (let i = 0; i < soso.length; i++) {
            if(soso[i].title.includes(searchmov))
            car+=`
            <div class="col-lg-4 col-md-6 col-sm-12 divimg">
          
            <img class="" src='https://image.tmdb.org/t/p/w500/${soso[i].poster_path}' alt="lkmkl"/>
            


            <div class="overlay">
             <div class="content"> 
              
                <h2>${soso[i].title}</h2>
                <div class="divcon">
                <p class="py-3">${soso[i].overview}</p>
                <h4>${soso[i].release_date}</h4>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <div class="mt-2">
                <span class="rounded-circle border border-success p-2">${soso[i].vote_average}</span>
                </div>
             </div>   
             </div>
         </div>
            
        </div>
         
        
            `
            
          }
       
    
        mydiv.innerHTML=car
    
    
}

 
$(document).ready(function(){
    $('.sliderbtn span').click(function(){
        $('.sliderbar').toggleClass('active')
        $('.sliderbtn').toggleClass('toggle')

        $('li:nth(0)').show(200,function(){
            $('li:nth(1)').show(200,function(){
                $('li:nth(2)').show(200,function(){
                    $('li:nth(3)').show(200,function(){
                        $('li:nth(4)').show(200,function(){
                            $('li:nth(5)').show(200,function(){
                                $('li:nth(6)').show(200)
                            })
                        })
                    })
                })
            })
        })
        
     
    })


        
})

