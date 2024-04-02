import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function m(r){const e=`https://pixabay.com/api?${new URLSearchParams({key:"43196353-af8080fd641e1fef708fa4d1d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>{console.log(o)})}const u=document.querySelector(".gallery");function p(r){if(r.length<1)c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topCenter"}),n();else{const a=r.map(e=>`<li class="item-box">
                <a class="large-image" href="${e.largeImageURL}">
                <img class="preview" src="${e.webformatURL}" alt="${e.tags}" />
                </a>
                <ul class="stat-list">
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Likes
                </span>
                ${e.likes}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Views
                </span>
                ${e.views}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Comments
                </span>
                ${e.comments}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Downloads
                </span>
                ${e.downloads}</p>
                </li>
                </ul>
                </li>`).join("");u.insertAdjacentHTML("beforeend",a),g.refresh()}n()}const d=document.querySelector(".loader");function h(){d.classList.remove("is-hidden")}function n(){d.classList.add("is-hidden")}const l=document.querySelector(".form"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",r=>{r.preventDefault(),h(),u.innerHTML="";let a=r.target.elements.search.value.trim();a!==""?m(a).then(e=>{p(e.hits),l.reset()}).catch(e=>{console.log(e),n()}):(c.show({message:"Search field is empty",color:"red",position:"topCenter"}),n())});
//# sourceMappingURL=commonHelpers.js.map
