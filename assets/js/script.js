 // Datas
const productsList = [
    {
        id: 1,
        title:'Cappuccino',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/packed-tee.png',
        subImg:'assets/images/packed-tee.jpg',
        price:'2.05z',
        btn:'Order in bulk'
    },
    {
        id: 2,
        title:'Americano',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/packed-tee.png',
        subImg:'assets/images/packed-tee.jpg',
        price:'6.05z',
        btn:'Order in bulk'
    },
    {
        id: 3,
        title:'Espresso',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/packed-tee.png',
        subImg:'assets/images/packed-tee.jpg',
        price:'9.05z',
        btn:'Order in bulk'
    },
    {
        id: 4,
        title:'Latte',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/packed-tee.png',
        subImg:'assets/images/packed-tee.jpg',
        price:'2.45z',
        btn:'Order in bulk'
    },
    
   
  ];
  const reviewList = [
    {
        id: 1,
        title:'Agan Dalton1',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/01.jpg',
        raiting:'5'
    },
    {
        id: 2,
        title:'Agan Dalton2',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/02.jpg',
        raiting:'5'
    },
    {
        id: 3,
        title:'Agan Dalton3',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/03.jpg',
        raiting:'5'
    },
    {
        id: 4,
        title:'Agan Dalton4',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/04.jpg',
        raiting:'5'
    },
    {
        id: 5,
        title:'Agan Dalton5',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/05.jpg',
        raiting:'5'
    },
    {
        id: 6,
        title:'Agan Dalton6',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        mainImg:'assets/images/06.jpg',
        raiting:'5'
    },

  ]
  const blogList = [
    {
        id:'1',
        title:'Ninja Luxe Cafe Coffee  Machine. Kev’s In Depth ....',
        description:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum distinctio voluptatibus, nulla dolorum illo quod? Quibusdam voluptatem quam aspernatur?     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum distinctio voluptatibus, nulla dolorum illo quod? Quibusdam voluptatem quam aspernatur?     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum distinctio voluptatibus, nulla dolorum illo quod? Quibusdam voluptatem quam aspernatur? ',
        img:'assets/images/blog3.png',
    },
    {
        id:'2',
        title:'Ninja Luxe Cafe Coffee  Machine. Kev’s In Depth ....',
        description:'earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum distinctio voluptatibus, nulla dolorum illo quod? Quibusdam voluptatem quam aspernatur? distinctio voluptatibus, nulla dolorum illo quod? Quibusdam voluptatem quam aspernatur? those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their ',
        img:'assets/images/blog2.png',
    },
    {
        id:'3',
        title:'Ninja Luxe Cafe Coffee  Machine. Kev’s In Depth ....',
        description:'earchers who gathered data     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum distinctio voluptatibus, nulla dolorum illo quod? Quibusdam      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam, vel quasi, dignissimos harum quas recusandae cupiditate unde natus eum distinctio voluptatibus, nulla dolorum illo quod? Quibusdam voluptatem quam aspernatur?voluptatem quam aspernatur?nd that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased theirearchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their earchers who gathered data on over 48,000 people found that those w  ho increased their ',
        img:'assets/images/blog1.png',
    },
  ]
 //1. Changing scroll top size

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 70; 
  
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        }
    });
  });
// 2. Header progressBar functional 
function updateProgressBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercentage + "%";
}

window.onscroll = function() {
    updateProgressBar();
};

// 3. Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".navigation-menu");

    // Toggle menu 
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");

        const isOpen = menu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close menu
    document.querySelectorAll(".navigation-menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", false);
        });
    });
});


// 4. Carousel

const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const cardsPerSlide = 4;
const totalCards = document.querySelectorAll('.review-card').length;
const cardWidth = document.querySelector('.review-card').offsetWidth + 15; // Card width + gap

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
    if (currentIndex < totalCards - cardsPerSlide) {
        currentIndex++;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } 

    updateCarousel();
}

        document.querySelector('.prev').addEventListener('click', ()=>{
            prevSlide()

        })
        document.querySelector('.next').addEventListener('click', ()=>{
            nextSlide()
        })

       
// 5. Popup functional part

   // Select elements
   const popupOverlay = document.querySelector('.popup-overlay');
   const closePopup = document.querySelector('.close-popup');
   const productCards = document.querySelectorAll('.product-card');
   const popupTitle = document.getElementById('title');
   const popupMainImg = document.getElementById('main-img');
   const popupSubImg = document.getElementById('sub-img');
   const popupDescription = document.getElementById('text-content');
   const popupPrice = document.getElementById('price');
   const popupBtn = document.getElementById('btn');

   // Open popup with card details
   productCards.forEach(card => {
       card.addEventListener('click', () => {
        const id = card.getAttribute("data-id");
        console.log('product-card',card)
        productsList.filter(item => item.id == Number(id))
        .map(product=>{
            popupMainImg.src =product.mainImg;
            popupSubImg.src =product.subImg;
            popupTitle.textContent =product.title;
            popupDescription.textContent =product.description;
            popupPrice.textContent =product.price;
            popupBtn.textContent =product.btn
        })
        popupOverlay.style.display = 'flex';
       });

   });

   // Close popup
   closePopup.addEventListener('click', () => {
       popupOverlay.style.display = 'none';
   });

   // Close popup when clicking outside the content
   popupOverlay.addEventListener('click', (e) => {
       if (e.target === popupOverlay) {
           popupOverlay.style.display = 'none';
       }
   });


//  6.  Review popup

    const popupOverlayReview = document.querySelector('.popup-overlay-review');
   const closePopupReview = document.querySelector('.close-popup-review');
   const reviewCards = document.querySelectorAll('.review-card');
   const popupRaitingReview = document.getElementById('raiting-review');
   const popupTitleReview = document.getElementById('title-review');
   const popupMainImgReview = document.getElementById('main-img-review');
   const popupDescriptionReview = document.getElementById('text-content-review');

   reviewCards.forEach(card => {
    card.addEventListener('click', () => {
     const id = card.getAttribute("data-id");
     console.log('review-card',card)


   reviewList.filter(item => item.id == Number(id))
                .map(review=>{
                    popupMainImgReview.src = review.mainImg;
                    popupTitleReview.textContent = review.title;
                    popupDescriptionReview.textContent = review.description;
                    popupRaitingReview.textContent = review.raiting
                })
                popupOverlayReview.style.display = 'flex';

    })

})
     // Close popup
   closePopupReview.addEventListener('click', () => {
    popupOverlayReview.style.display = 'none';
});

// Close popup when clicking outside the content
popupOverlayReview.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlayReview.style.display = 'none';
    }
}); 

// 7. Blog popup functional

const popupOverlayBlog = document.querySelector('.popup-overlay-blog');
const closePopupBlog = document.querySelector('.close-popup-blog');
const blogCard = document.querySelectorAll('.blog-card');
const popupTitleBlog = document.getElementById('title-blog');
const popupMainImgBlog = document.getElementById('main-img-blog');
const popupDescriptionBlog = document.getElementById('text-content-blog');

blogCard.forEach(card => {
 card.addEventListener('click', () => {
  const id = card.getAttribute("data-id");

console.log('df', blogList, id)
    blogList.filter(item => item.id == Number(id))
             .map(blog=>{
                 popupMainImgBlog.src = blog.img;
                 popupTitleBlog.textContent = blog.title;
                 popupDescriptionBlog.textContent = blog.description;
             })
             popupOverlayBlog.style.display = 'flex';

 })

})
  // Close popup
closePopupBlog.addEventListener('click', () => {
 popupOverlayBlog.style.display = 'none';
});

// Close popup when clicking outside the content
popupOverlayBlog.addEventListener('click', (e) => {
 if (e.target === popupOverlayBlog) {
     popupOverlayBlog.style.display = 'none';
 }
}); 
