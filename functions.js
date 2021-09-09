const app=document.querySelector("gallery");
const apiKey="Vi2su_15UigI-fG4W1JdJQDoqCKmXnVfK22AX5KZEKo";
const request=new XMLHttpRequest;

/* Parse API via GET command */
request.open("GET","https://api.unsplash.com/photos/?client_id=" + apiKey,!0);

/* Display data from Unsplash API within gallery id */
request.onload=function(){
    JSON.parse(this.response).forEach(e => {
    const card = document.createElement("div");
    card.setAttribute("class","card");
    
    /* Create img element to hold main image */
    const newImage = document.createElement("img");
    newImage.setAttribute("class", "image");
    newImage.alt = "Image from Unsplash";
    newImage.src = e.urls.small;
    
    /* Create div element to hold user profile image and name */
    const userInfo = document.createElement("div");
    userInfo.setAttribute("class", "user");
    
    /* Create img element to hold user profile image */
    const newProfileImage = document.createElement("img");
    newProfileImage.setAttribute("class", "profile");
    newProfileImage.alt = "User profile image";
    newProfileImage.src = e.user.profile_image.small;
    
    /* Create a element to hold user profile url */
    const newLink = document.createElement("a");

    /* Create h3 element to hold user name */
    const userName = document.createElement("h3");

    /* Wrap h3 in a link that points to user profile and assign it's text value */
    newLink.appendChild(userName);
    newLink.href = e.user.links.html;
    newLink.setAttribute("target", "_blank");
    userName.textContent="©" + e.user.first_name;

    /* Wrap card class within gallery id */
    gallery.appendChild(card);
    
    /* Wrap image and user class within card class */
    card.appendChild(newImage);
    card.appendChild(userInfo);

    /* Wrap profile class and a element within user class */
    userInfo.appendChild(newProfileImage);
    userInfo.appendChild(newLink)})
},
request.send();