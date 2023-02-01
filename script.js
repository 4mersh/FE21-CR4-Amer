let data = JSON.parse(movies);

function Add() {
    document.getElementById("movie").innerHTML = "";

    for (let val of data) {
        document.getElementById("movie").innerHTML += `<div>
    <a href="#"><img src="${val.img}" class="img-thumbnail h-50 w-100" alt="..."></a>
    <h3 class="text-light mt-3 text-center">${val.title}</h3> <hr class="text-light">
    <h5 class="text-light mt-2">${val.name}</h5>
    <p class="text-light mt-2">${val.discription}</p>
    <a  class="btn btn-danger like">Like <samp class="bts">${val.like}</samp></a>

</div>`;
    }
    addLike();
}


function addLike() {
    let btns = document.getElementsByClassName("like");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            data[i].like++;

            document.getElementsByClassName("bts")[i].innerHTML = data[i].like;


        })
    }
}

Add(data);


function sort() {
    data.sort((a, b) => {
        return b.like - a.like;
    });
}
document.getElementById("sort").addEventListener("click", sort);
document.getElementById("sort").addEventListener("click", function() {
    sort();
    Add(data);
})