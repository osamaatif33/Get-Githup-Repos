let input = document.querySelector("input");
let GetRepo = document.querySelector(".get-repo");
let show = document.querySelector(".show-data");

GetRepo.onclick = function () {
    getRepos();
};

function getRepos(){
    if(input.value=="")
    {
        show.innerHTML="<span>please enter githup username</span>"
    }
    else{
        fetch(`https://api.github.com/users/${input.value}/repos`)

        .then((res) => res.json())
    
        .then((repos) => {
            //empty show data
            show.innerHTML="";

            //loop on repo
            repos.forEach(repo =>{

                //create main div
                let mainDiv = document.createElement("div");

                //create text node
                let repoName = document.createTextNode(repo.name);

                //append reponame in main div
                mainDiv.appendChild(repoName);
                
                //create anchor tag url
                let url=document.createElement("a");

                //create url textname
                let urlname=document.createTextNode("visit")

                //append url text to anchor tag
                url.appendChild(urlname);

                //add href refrence
                url.href=`https://github.com/${input.value}/${repo.name}`;

                // Set Attribute Blank
                url.setAttribute('target', '_blank');

                //append url to main div
                mainDiv.appendChild(url);

                //create stars span count
                let star=document.createElement("span");

                //create text stars
                let starText=document.createTextNode(`stars ${repo.stargazers_count}`)

                //append start text to star span 
                star.appendChild(starText);

                //append star to main div
                mainDiv.appendChild(star);

                //add class to main div
                mainDiv.className="repo-box";

                //append main div in show data
                show.appendChild(mainDiv);

            })
        })
    }
}