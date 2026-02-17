import{a as p,S as f,i}from"./assets/vendor--6n4cVRZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="54634417-32a9cc2e653c0a3a9a7b25778",g="https://pixabay.com/api/";function y(o){const r=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(g,{params:r}).then(s=>s.data.hits)}const L=new f(".js-gallery a",{captions:!0,captionPosition:"bottom",captionsData:"alt"}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function w(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:h,downloads:m})=>`
        <li class = "img-item">
        <a href = "${n}">
        <img src = "${s}" alt = "${e}" width = 300/>
        </a>
        <div class = "wrapper">
        <h2><span class = "text-weight">Likes</span> ${t}</h2>
        <h2><span class = "text-weight">Views</span> ${a}</h2>
        <h2><span class = "text-weight">Comments</span> ${h}</h2>
        <h2><span class = "text-weight">Downloads</span> ${m}</h2>
        </div>
        </li>
        `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("blur")}function u(){l.classList.add("blur")}const P=document.querySelector(".form");u();P.addEventListener("submit",x);function x(o){o.preventDefault();const r=o.target.elements["search-text"].value;r.trim().length!==0&&(b(),S(),y(r).then(s=>{s.length===0?i.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}):(o.target.reset(),w(s))}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{u()}))}
//# sourceMappingURL=index.js.map
