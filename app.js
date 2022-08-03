const menu = [
   { id: 1,
    title:"buttermilk pancakes",
    category:"breakfast",
    price:15.99,
    img:"./image/food1.jpg",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eligendi, quod, itaque quaerat possimus officia dignissimos impedit voluptatum eaque veritatis maiores minus. Rem, possimus assumenda."

},
{id: 2,
    title:"Garri and Egusi",
    category:"breakfast",
    price:11,
    img:"./image/food2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
    },

    {id: 3,
        title:"pizza ",
        category:"breakfast",
        price:21,
        img:"./image/food3.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
        },
     
    {id: 4,
    title:"Indomie and egg",
    category:"breakfast",
    price:31,
    img:"./image/food4.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
    },

    {id: 5,
        title:"Meatpie and juice",
        category:"lunch",
        price:15.99,
        img:"./image/food5.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
        },
    
    {id: 6,
    title:"Fried Yam",
    category:"lunch",
    price:45.01,
    img:"./image/food6.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
    },

    {id: 7,
        title:"Jellof Rice",
        category:"lunch",
        price:8.65,
        img:"./image/food7.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
        },

    {id: 8,
    title:"Fried Rice",
    category:"lunch",
    price:57,
    img:"./image/food8.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
    },

    {id: 9,
    title:"moi moi",
    category:"shakes",
    price:5,
    img:"./image/food9.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
    },

    {id: 10,
        title:"chocolate",
        category:"shakes",
        price:50,
        img:"./image/food10.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure distinctio officia facere enim fugit libero qui itaque, doloremque odit"
        }

    

]

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


                           //load items
     window.addEventListener("DOMContentLoaded", function(){
        displayMenuItems(menu);
     });

                      //filter buttons
filterBtns.forEach( function (btn){
    btn.addEventListener("click", function (e){
        const category = e.currentTarget.dataset.id ;
        const menuCategory =menu.filter(function (menuItem){
            if(menuItem.category === category){
                return menuItem ;
            }
        });
    if(category ==="all"){
        displayMenuItems(menu);
    }else{
        displayMenuItems(menuCategory);
    };
    });
});
                        


        function displayMenuItems (menuItems){
            let displayMenu = menuItems.map( function(item){
                return ` <article class="menu-item">
                <img src= ${item.img}> 
                        <div class="item-info">
                            <head>
                             <h4>${item.title}</h4>
                             <h4 class="price">$${item.price}</h4>
                            </head>
                            <p class="item-text">
                              ${item.desc}
                            </p>
                        </div>
            </article>`;
            });
        
                 displayMenu = displayMenu.join("");
                 sectionCenter.innerHTML = displayMenu;
          }
        