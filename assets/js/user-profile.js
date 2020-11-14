$( document ).ready( async ()=> {        
    try {
        // fin user id in url
        const userId = getUserIdByURLParams();        
        
    } catch (error) {
        console.error("Error", error.message);
    }
});

function getUserIdByURLParams() {
    let urlString = window.location.href;
    let url = new URL(urlString);
    const userId = url.searchParams.get("id");
    if(!userId) 
        throw new Error("Id param is not defined");
    return userId;
}