$( document ).ready( async ()=> {
    try {        
        // declare varaibles and const
        const gitApiUrlBase = 'https://api.github.com';
        const reposUrl = `${gitApiUrlBase}/repos/lowLevelCode/divelement-web-services-ht/commits`        

        // first do a fetch
        const response = await fetch(reposUrl);
        const data = await response.json();

        // destructurate data
        console.log("data",data);        
        const trElements = data.map(element => {            
            const { sha, author:{avatar_url},  commit:{author, message} } = element;
            // i commpress html with -> https://www.textfixeres.com/html/comprimir-html.php
             return `<tr> <td style="width: 10%;"> <div class="media"> <a href="./user-profile.html?id=juasjuasjuas" class="pull-left"> <img src="${avatar_url}" class="media-photo"> </a> </div> </td> <td style="width: 50%;"> <div class="media"> <div class="media-body"> <a href="#"> <h4 class="title"> ${message} </h4> </a> <a href="#"> <p class="summary"> ${author.name} </p> </a> </div> </div> </td> <td> ${author.date} </td> <td> ${sha.slice(0,8)} </td> </tr>`
        });   
                
        $("#content-table-body").html(trElements);

    } catch (error) {
        console.error("we have a error", error);
    }
    
});