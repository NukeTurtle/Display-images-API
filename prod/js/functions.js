const app=document.querySelector("gallery"),apiKey="Vi2su_15UigI-fG4W1JdJQDoqCKmXnVfK22AX5KZEKo",request=new XMLHttpRequest;request.open("GET","https://api.unsplash.com/photos/?client_id="+apiKey,!0),request.onload=function(){JSON.parse(this.response).forEach(e=>{const t=document.createElement("div");t.setAttribute("class","card");const s=document.createElement("img");s.setAttribute("class","image"),s.alt="Image from Unsplash",s.src=e.urls.small;const n=document.createElement("div");n.setAttribute("class","user");const a=document.createElement("img");a.setAttribute("class","profile"),a.alt="User profile image",a.src=e.user.profile_image.small;const l=document.createElement("a"),r=document.createElement("h3");l.appendChild(r),l.href=e.user.links.html,l.setAttribute("target","_blank"),r.textContent="©"+e.user.first_name,gallery.appendChild(t),t.appendChild(s),t.appendChild(n),n.appendChild(a),n.appendChild(l)})},request.send();