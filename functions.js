const app=document.querySelector("gallery");
const apiKey="Vi2su_15UigI-fG4W1JdJQDoqCKmXnVfK22AX5KZEKo";
const request=new XMLHttpRequest;
request.open("GET","https://api.unsplash.com/photos/?client_id=" + apiKey,!0);
request.onload=function(){JSON.parse(this.response).forEach(e=>{const t=document.createElement("div");
t.setAttribute("class","card");
const n=document.createElement("img");
n.src=e.urls.small;
const s=document.createElement("a"),a=document.createElement("h3");a.textContent="©" + e.user.first_name,s.appendChild(a),s.href=e.links.html,gallery.appendChild(t),t.appendChild(n),document.createElement("br"),t.appendChild(s)})},request.send();