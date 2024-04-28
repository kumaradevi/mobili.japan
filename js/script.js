
const search_btn = document.querySelector(".search-btn");
const job_title = document.querySelector(".job-title");
const com_name = document.querySelector(".company-name");
const job_des = document.querySelector(".job-des");


search_btn.addEventListener("click", function () {
    getJob();
});

function getJob() {
    const search_txt = document.getElementById("search-text").value.trim();
    fetch(`https://zobjobs.com/api/jobs/${search_txt}`)
        .then(response => response.json())
        .then(data => {
        console.log(data)
    })
}