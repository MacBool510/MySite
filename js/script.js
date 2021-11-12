
document.querySelector(".certification-btn").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up-certifications');
    elem.classList.remove('d-none');
    document.querySelector(".close_certifications").addEventListener("click", function(){
        let elem = document.querySelector('.pop-up-certifications');
        elem.classList.add('d-none');
    });
})

let customerName = document.querySelector(".customerName");
let customerPhone = document.querySelector(".customerPhone");

document.querySelector(".open_popUp").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up-first');
    elem.classList.remove('d-none');
    document.querySelector(".pop-up_card_selection__button").addEventListener("click", function(){
        elem.classList.add('d-none');

        let elem2 = document.querySelector('.pop-up-second');
        elem2.classList.remove('d-none');

        document.querySelector(".close_second").addEventListener("click", function(){
            let close = document.querySelector('.pop-up-second');
            close.classList.add('d-none');
        });



        document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){

            if(customerName.value !== '' && customerPhone.value !== ''){
                elem2.classList.add('d-none');
                console.log(customerName.value, customerPhone.value);
                let elem3 = document.querySelector('.pop-up-third');
                elem3.classList.remove('d-none');
                
                document.querySelector(".close_third").addEventListener("click", function(){
                    let close = document.querySelector('.pop-up-third');
                    close.classList.add('d-none');
                });

            }

        })
    })

});

document.querySelector(".close_btn").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up');
    elem.classList.add('d-none');
});



let navbar_btn = document.querySelector("#nav-toggler");
navbar_btn.addEventListener("click", function(){
    if(!navbar_btn.classList.contains("collapsed")){
        document.querySelector('.navbar-sizing').style = "background-color: white";
        document.querySelector('.navbar-toggler-icon').style = "background-image: url(images/whiteX.svg) !important";
    }
    else {
        document.querySelector('.navbar-sizing').style = "background-color: transparent"; 
        document.querySelector('.navbar-toggler-icon').style = "background-image: url(images/burger.svg) !important";
    }

})

