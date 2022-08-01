let slider_number = document.querySelector(".slider-number span");
let images_array = document.querySelectorAll(".slider img");
let images_number = images_array.length;
let previous = document.querySelector(".prev");
let next = document.querySelector(".next");
let indicator_array = document.querySelectorAll(".indicator li");

previous.onclick = function() {
    let the_Number = Number.parseInt(slider_number.innerHTML);
    if (the_Number == 1) {
        the_Number = images_number;
        slider_number.innerHTML = the_Number;
        indicator_array.forEach((ele)=>{
            if (ele.classList.contains("liactive")) {
                ele.classList.remove("liactive");
            }
        });
        indicator_array[the_Number-1].classList.toggle("liactive");
        images_array.forEach((ele) => {
            if (ele.classList.contains("imgactive")) {
                ele.classList.remove("imgactive");
            }
        });
        images_array[the_Number-1].classList.toggle("imgactive");
    }else {
        the_Number--;
        slider_number.innerHTML = the_Number;
        indicator_array.forEach((ele)=>{
            if (ele.classList.contains("liactive")) {
                ele.classList.remove("liactive");
            }
        });
        indicator_array[the_Number-1].classList.toggle("liactive");
        images_array.forEach((ele) => {
            if (ele.classList.contains("imgactive")) {
                ele.classList.remove("imgactive");
            }
        });
        images_array[the_Number-1].classList.toggle("imgactive");
    }
}

next.onclick = function() {
    let the_Number = Number.parseInt(slider_number.innerHTML);
    if (the_Number == images_number) {
        the_Number = 1;
        slider_number.innerHTML = the_Number;
        indicator_array.forEach((ele)=>{
            if (ele.classList.contains("liactive")) {
                ele.classList.remove("liactive");
            }
        });
        indicator_array[the_Number-1].classList.toggle("liactive");
        images_array.forEach((ele) => {
            if (ele.classList.contains("imgactive")) {
                ele.classList.remove("imgactive");
            }
        });
        images_array[the_Number-1].classList.toggle("imgactive");
    }else {
        the_Number++;
        slider_number.innerHTML = the_Number;
        indicator_array.forEach((ele)=>{
            if (ele.classList.contains("liactive")) {
                ele.classList.remove("liactive");
            }
        });
        indicator_array[the_Number-1].classList.toggle("liactive");
        images_array.forEach((ele) => {
            if (ele.classList.contains("imgactive")) {
                ele.classList.remove("imgactive");
            }
        });
        images_array[the_Number-1].classList.toggle("imgactive");
    }
}

indicator_array.forEach((ele) => {
    ele.onclick = function() {
        let the_Number = Number.parseInt(ele.innerHTML);
        slider_number.innerHTML = the_Number;
        indicator_array.forEach((ele)=>{
            if (ele.classList.contains("liactive")) {
                ele.classList.remove("liactive");
            }
        });
        indicator_array[the_Number-1].classList.toggle("liactive");
        images_array.forEach((ele) => {
            if (ele.classList.contains("imgactive")) {
                ele.classList.remove("imgactive");
            }
        });
        images_array[the_Number-1].classList.toggle("imgactive");
    }
});












