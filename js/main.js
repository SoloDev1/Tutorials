

let show = document.getElementById('show');
let itemList = document.getElementById('list');
let items = document.getElementsByClassName('items');
let demo = document.querySelector('.demo');
    for(let item of items){
        

        item.onclick = function(){
        
            demo.innerHTML = item.textContent;
            itemList.classList.toggle('active')
          
        }
      
    }

    // Or you can also use for loop!

//     for (let i = 0; i < items.length; i++) {
//         items[i].onclick = function(){
//             console.log("working")
//             show.innerHTML = items[i].textContent;
//     }
//  }


show.addEventListener('click', () =>{
   

    itemList.classList.toggle('active')
})

let form = document.querySelector('.range');
let disp = document.getElementById('display');

// addEventListener("mousemove")
form.addEventListener('mousemove', () => {
    disp.innerHTML = form.value;


        document.body.style.background = 'linear-gradient( to right ,rgb('+ disp.textContent +', 54, 54), rgb(13, '+ disp.textContent +', 85))';
        document.body.style.color = 'white';
       
})