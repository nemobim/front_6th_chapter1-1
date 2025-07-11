(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=(()=>{let e=null,t=new Map,n=0;function r(){return e||(e=document.createElement(`div`),e.className=`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2 items-center justify-center`,document.body.appendChild(e),e)}function i(e,t){let n={success:{bgColor:`bg-green-600`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`},info:{bgColor:`bg-blue-600`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`},error:{bgColor:`bg-red-600`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`}},r=n[e]||n.info;return`
        <div class="${r.bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm opacity-0 transform translate-x-full transition-all duration-300">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${r.icon}
            </svg>
          </div>
          <p class="text-sm font-medium">${t}</p>
          <button class="toast-close-btn flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `}function a(e,a,s=3e3){let c=r(),l=++n,u=document.createElement(`div`);u.innerHTML=i(e,a);let d=u.firstElementChild;c.appendChild(d),t.set(l,d),requestAnimationFrame(()=>{d.style.opacity=`1`,d.style.transform=`translateX(0)`});let f=d.querySelector(`.toast-close-btn`);return f.addEventListener(`click`,()=>o(l)),s>0&&setTimeout(()=>o(l),s),l}function o(n){let r=t.get(n);r&&(r.style.opacity=`0`,r.style.transform=`translateX(100%)`,setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r),t.delete(n),t.size===0&&e&&(document.body.removeChild(e),e=null)},300))}return{success(e,t){return a(`success`,e,t)},info(e,t){return a(`info`,e,t)},error(e,t){return a(`error`,e,t)}}})(),t=(()=>{let t=`SHOPPING_CART`,n=new Set,r=new Set,i=0;function a(){n.forEach(e=>e())}function o(e){n.add(e)}function s(e){n.delete(e)}function c(e){r.add(e),u(e)}function l(e){r.delete(e)}function u(e){if(i>0){let t=e.querySelector(`span`);t||(t=document.createElement(`span`),t.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,e.appendChild(t)),t.textContent=i}else{let t=e.querySelector(`span`);t&&t.remove()}}function d(){r.forEach(u)}function f(){let e=b();e!==i&&(i=e,d())}function p(){f(),o(f)}function m(n){try{let r=h(),i=r.findIndex(e=>e.productId===n.productId);i===-1?(n.quantity=n.quantity||1,r.push(n)):r[i].quantity=(r[i].quantity||1)+1,localStorage.setItem(t,JSON.stringify(r)),e.success(`장바구니에 추가되었습니다.`),a()}catch{e.error(`장바구니 저장에 실패했습니다.`)}}function h(){try{let e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch{return e.error(`장바구니 불러오기에 실패했습니다.`),[]}}function g(){try{localStorage.removeItem(t),e.success(`장바구니가 모두 삭제되었습니다.`),a()}catch{e.error(`장바구니 초기화에 실패했습니다.`)}}function _(n,r){try{let e=h(),i=e.findIndex(e=>e.productId===n);r===0?e.splice(i,1):e[i].quantity=r,localStorage.setItem(t,JSON.stringify(e)),a()}catch{e.error(`수량 업데이트에 실패했습니다.`)}}function v(n){try{let r=h(),i=r.filter(e=>e.productId!==n);localStorage.setItem(t,JSON.stringify(i)),e.success(`상품이 장바구니에서 삭제되었습니다.`),a()}catch{e.error(`상품 삭제에 실패했습니다.`)}}function y(){let e=h();return e.reduce((e,t)=>e+(t.quantity||1),0)}function b(){let e=h();return e.length}function x(){let e=h();return e.reduce((e,t)=>{let n=t.price||0,r=t.quantity||1;return e+n*r},0)}function S(e){let t=h(),n=t.find(t=>t.productId===e);return n?n.quantity||1:0}return{save:m,load:h,clear:g,updateQuantity:_,removeItem:v,getTotalCount:y,getUniqueItemCount:b,getTotalPrice:x,getItemQuantity:S,addEventListener:o,removeEventListener:s,registerCounter:c,unregisterCounter:l,initCounter:p,getCount:()=>i}})(),n=(()=>{let e=!1,t=null,n=()=>`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity modal-overlay"></div>
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden"
        >
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              장바구니
            </h2>
            <button class="text-gray-400 hover:text-gray-600 p-1 close-btn">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <!-- 빈 장바구니 -->
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;function r(){let e=document.createElement(`div`);return e.innerHTML=n(),e.firstElementChild}function i(){let e=t.querySelector(`.close-btn`);e.addEventListener(`click`,a);let n=t.querySelector(`.modal-overlay`);n.addEventListener(`click`,a);function r(e){e.key===`Escape`&&(a(),document.removeEventListener(`keydown`,r))}document.addEventListener(`keydown`,r)}function a(){!e||!t||(document.body.removeChild(t),t=null,e=!1)}function o(){if(!e||!t)return;let r=t.querySelector(`#cart-content`);r.innerHTML=n()}return{open(){e||(t=r(),document.body.appendChild(t),i(),o(),e=!0)},close:a,update(){o()}}})(),r=e=>e<=0?``:`
    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      ${e}
    </span>
  `,i=()=>`
  <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>
`,a=({isDetail:e=!1})=>{let o=e?`
      <div class="flex items-center space-x-3">
        ${i()}
        <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
      </div>
    `:`
      <h1 class="text-xl font-bold text-gray-900">
        <a href="/" data-link="">쇼핑몰</a>
      </h1>
    `;a.init=()=>{let e=document.getElementById(`cart-icon-btn`);e&&(e.removeEventListener(`click`,s),e.addEventListener(`click`,s),t.registerCounter(e)),t.initCounter()};let s=()=>{n.open()};return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          ${o}
          <div class="flex items-center space-x-2">
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              ${r(t.getUniqueItemCount())}
            </button>
          </div>
        </div>
      </div>
    </header>
  `};var o=a;const s=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `;var c=s;function l({pageComponent:e,isDetailPage:t=!1}){return`
    <div class="min-h-screen bg-gray-50">${o({isDetail:t})} ${e()} ${c()}</div>
  `}const u=`modulepreload`,d=function(e){return`/front_6th_chapter1-1/`+e},f={},p=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=d(t,n),t in f)return;f[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``,o=!!n;if(o)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let s=document.createElement(`link`);if(s.rel=r?`stylesheet`:u,r||(s.as=`script`),s.crossOrigin=``,s.href=t,a&&s.setAttribute(`nonce`,a),document.head.appendChild(s),r)return new Promise((e,n)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[]){if(e.status!==`rejected`)continue;i(e.reason)}return e().catch(i)})};async function m(){try{let{worker:e,workerOptions:t}=await p(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DfkfUdA-.js`);return{worker:e,workerOptions:t}},[]);await e.start(t),console.info(`[MSW] Mock service worker started`)}catch(e){console.warn(`[MSW] Failed to start mock service worker`,e)}}async function h(e){let t=!1;await m(),e()}const g=()=>`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
            </filter>
          </defs>

          <!-- 404 Numbers -->
          <text
            x="160"
            y="85"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="48"
            font-weight="600"
            fill="url(#blueGradient)"
            text-anchor="middle"
          >
            404
          </text>

          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

          <!-- Message -->
          <text
            x="160"
            y="110"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            font-weight="400"
            fill="#5f6368"
            text-anchor="middle"
          >
            페이지를 찾을 수 없습니다
          </text>

          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
        </svg>

        <a
          href="/"
          data-link
          class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >홈으로</a
        >
      </div>
    </main>
  `;async function _(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function v(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function y(){let e=await fetch(`/api/categories`);return await e.json()}const b=(e,t)=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-4">
      <div class="flex flex-col items-center justify-center text-center text-gray-700">
        <!-- 에러 아이콘 -->
        <div class="mb-6">
          <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            ></path>
          </svg>
        </div>

        <!-- 에러 메시지 -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">잠시 문제가 생겼어요</h3>
          <p class="text-gray-600">${e}</p>
        </div>

        <!-- 재시도 버튼 -->
        <button
          id="${t}"
          class="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm"
        >
          다시 시도하기
        </button>
      </div>
    </div>
  `;var x=b;const S=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,`,`),C=`/front_6th_chapter1-1`;var ee=class{constructor(){this.routes=new Map,this.currentPath=`/`,this.currentParams={}}register(e,t){let n=this.removeBasePath(e);return this.routes.set(n,t),this}navigate(e,t=!0){let n=this.removeBasePath(e);if(this.currentPath=n||`/`,t){let e=this.addBasePath(n);history.pushState({},``,e)}let r=this.matchRoute(n);return r?(this.currentParams=r.params,r.handler(r.params)):this.handle404(),this}matchRoute(e){if(this.routes.has(e))return{handler:this.routes.get(e),params:{}};for(let[t,n]of this.routes)if(t.includes(`:`)){let r=this.extractParams(t,e);if(r)return{handler:n,params:r}}return null}extractParams(e,t){let n=e.split(`/`),r=t.split(`/`);if(n.length!==r.length)return null;let i={};for(let e=0;e<n.length;e++)if(n[e].startsWith(`:`))i[n[e].slice(1)]=r[e];else if(n[e]!==r[e])return null;return i}handle404(){let e=this.routes.get(`/404`);e?(this.currentParams={},e()):this.currentPath!==`/404`&&this.navigate(`/404`,!1)}getCurrentPath(){return this.currentPath}getCurrentParams(){return this.currentParams}removeBasePath(e){return e.startsWith(C)?e.slice(21)||`/`:e}addBasePath(e){return e===`/`?C+e:`${C}${e}`}init(){window.addEventListener(`popstate`,()=>{let e=this.removeBasePath(location.pathname);this.navigate(e,!1)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(t&&this.shouldHandleLink(t)){e.preventDefault();let n=t.getAttribute(`href`);this.navigate(n)}});let e=this.removeBasePath(location.pathname);return this.navigate(e,!1),this}shouldHandleLink(e){let t=e.getAttribute(`href`);return!t||t.startsWith(`http`)||t.startsWith(`mailto:`)||t.startsWith(`tel:`)?!1:t.startsWith(`/`)||t.startsWith(`./`)||t.startsWith(`../`)}};const w=new ee,T=e=>w.navigate(e),E=async e=>{let t=document.getElementById(`product-detail`);if(t)try{let n=await v(e),{products:r}=await _({category1:n.category1,category2:n.category2});t.innerHTML=te(n,r),re(n)}catch(n){console.error(`상품 상세 불러오기 실패:`,n),t.innerHTML=x(`상품 정보를 불러올 수 없어요. 😥`,`product-detail-retry`);let r=document.getElementById(`product-detail-retry`);r?.addEventListener(`click`,()=>{E(e)})}};function te(e,t){let{productId:n,title:r,image:i,lprice:a,brand:o,category1:s,category2:c,rating:l,reviewCount:u,stock:d,description:f}=e,p=t.filter(e=>e.productId!==n);return`
    <!-- 브레드크럼 -->
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category1="${s}">${s}</button>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category2="${c}">${c}</button>
      </div>
    </nav>
    <!-- 상품 상세 정보 -->
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src=${i} alt=${r} class="w-full h-full object-cover product-detail-image" />
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1">${o}</p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${r}</h1>
          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            <div class="flex items-center">${ne(l)}</div>
            <span class="ml-2 text-sm text-gray-600">${l} (${u}개 리뷰)</span>
          </div>
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${S(a)}원</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">재고 ${d}개</div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">${f}</div>
        </div>
      </div>
      <!-- 수량 선택 및 액션 -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button
              id="quantity-decrease"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 
             rounded-l-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input
              type="number"
              id="quantity-input"
              value="1"
              min="1"
              max="${d}"
              class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
              focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              id="quantity-increase"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 
             rounded-r-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 액션 버튼 -->
        <button
          id="add-to-cart-btn"
          data-product-id="${n}"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
        hover:bg-blue-700 transition-colors font-medium"
        >
          장바구니 담기
        </button>
      </div>
    </div>
    <!-- 상품 목록으로 이동 -->
    <div class="mb-6">
      <button
        class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
      hover:bg-gray-200 transition-colors go-to-product-list"
      >
        상품 목록으로 돌아가기
      </button>
    </div>
    <!-- 관련 상품 -->
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${p.map(e=>`
                <div
                  class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer"
                  data-product-id="${e.productId}"
                >
                  <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                    <img
                      src="${e.image}"
                      alt=${e.title}
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                  <p class="text-sm font-bold text-blue-600">${S(e.lprice)}원</p>
                </div>
              `).join(``)}
        </div>
      </div>
    </div>
  `}function ne(e=0){let t=Math.floor(e),n=e%1>=.5,r=5-t-(n?1:0),i=``;for(let e=0;e<t;e++)i+=`
      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;n&&(i+=`
      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `);for(let e=0;e<r;e++)i+=`
      <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;return i}function re(n){let r=document.getElementById(`quantity-input`),i=document.getElementById(`quantity-decrease`),a=document.getElementById(`quantity-increase`);i&&a&&r&&(i.addEventListener(`click`,()=>{let e=parseInt(r.value)||1;e>1&&(r.value=e-1)}),a.addEventListener(`click`,()=>{let e=parseInt(r.value)||1,t=parseInt(r.max)||n.stock||999;e<t&&(r.value=e+1)}),r.addEventListener(`input`,()=>{let e=parseInt(r.value)||1,t=parseInt(r.max)||n.stock||999;e<1&&(r.value=1),e>t&&(r.value=t)}));let o=document.getElementById(`add-to-cart-btn`);o&&o.addEventListener(`click`,()=>{let i=parseInt(r?.value)||1,a={productId:n.productId,title:n.title,image:n.image,lprice:n.lprice,brand:n.brand,quantity:i};t.save(a),e.success(`장바구니에 추가되었습니다!`)});let s=document.querySelectorAll(`.related-product-card`);s.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-product-id`);t&&T(`/product/${t}`)})});let c=document.querySelector(`.go-to-product-list`);c&&c.addEventListener(`click`,()=>{T(`/`)}),ie(n)}function ie(e){let t=document.querySelectorAll(`.breadcrumb-link`),{category1:n,category2:r}=e;t.forEach((e,t)=>{e.addEventListener(`click`,e=>{e.preventDefault(),t===0?T(`/?category1=${encodeURIComponent(n)}`):t===1&&T(`/?category1=${encodeURIComponent(n)}&category2=${encodeURIComponent(r)}`)})})}const D=()=>(D.init=async()=>{let e=ae();e&&await E(e)},`
    <main id="product-detail" class="max-w-md mx-auto px-4 py-4">
      <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    </main>
  `);function ae(){let e=window.location.pathname.split(`/`);return e[e.length-1]}const O=e=>`
    <div
      class="flex flex-col items-center justify-center bg-white rounded-lg min-h-[300px] shadow-sm border border-gray-200 p-4 mb-4"
    >
      <!-- 검색 아이콘 -->
      <div class="mb-4">
        <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <!-- 메시지 -->
      <div class="text-center">
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          <span class="text-blue-500">"${e||``}"</span>에 대한 검색 결과가 없습니다
        </h3>
        <p class="text-sm text-gray-500">다른 검색어를 입력해보세요 😥</p>
      </div>
    </div>
  `;function k(){let e=new URLSearchParams(location.search);return{page:Number(e.get(`page`))||1,limit:Number(e.get(`limit`))||20,sort:e.get(`sort`)||`price_asc`,search:e.get(`search`)||``,category1:e.get(`category1`)||``,category2:e.get(`category2`)||``}}const A=({key:e,value:t,resetPage:n=!0})=>{let r=new URLSearchParams(window.location.search);!t||t.trim()===``?r.delete(e):r.set(e,t),n&&r.set(`page`,`1`);let i=`${window.location.pathname}?${r.toString()}`;history.pushState({},``,i)},j=()=>{let e=null;return{get:()=>e,set:t=>{e=t},has:()=>e!==null}},oe=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],se=[{value:`10`,label:`10개`},{value:`20`,label:`20개`},{value:`50`,label:`50개`},{value:`100`,label:`100개`}],M=(e,t)=>e.map(e=>`<option value="${e.value}" ${t===e.value?`selected`:``}>${e.label}</option>`).join(``),N=e=>{if(e.target.id===`search-input`&&e.key===`Enter`){let t=e.target.value.trim();A({key:`search`,value:t}),q(k())}},P=e=>{e.target.id===`sort-select`&&(A({key:`sort`,value:e.target.value}),q(k()))},ce=e=>{e.target.id===`limit-select`&&(A({key:`limit`,value:e.target.value}),q(k()))},F=e=>{let t=e.target;if(!t.matches(`[data-category1]`))return;let n=t.dataset.category1,r=t.dataset.category2;r?(A({key:`category1`,value:n,resetPage:!0}),A({key:`category2`,value:r,resetPage:!0})):(A({key:`category1`,value:n,resetPage:!0}),A({key:`category2`,value:``,resetPage:!0}));let i=k();Y(i),q(i)},I=e=>{let t=e.target;if(!t.matches(`[data-breadcrumb]`))return;let n=t.dataset.breadcrumb;if(n===`reset`)A({key:`category1`,value:``,resetPage:!0}),A({key:`category2`,value:``,resetPage:!0});else if(n===`category1`){let e=t.dataset.category1;A({key:`category1`,value:e,resetPage:!0}),A({key:`category2`,value:``,resetPage:!0})}let r=k();Y(r),q(r)},le=()=>{document.removeEventListener(`change`,L),document.removeEventListener(`keydown`,N),document.removeEventListener(`click`,F),document.removeEventListener(`click`,I),document.addEventListener(`change`,L),document.addEventListener(`keydown`,N),document.addEventListener(`click`,F),document.addEventListener(`click`,I)};function L(e){P(e),ce(e)}const ue=e=>Object.keys(e).map(e=>`
          <button
            data-category1="${e}"
            class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
              bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            ${e}
          </button>
        `).join(``),de=(e,t,n)=>Object.keys(e[t]).map(e=>{let r=n===e,i=`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors`,a=`bg-blue-100 border-blue-300 text-blue-800`,o=`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
          <button
            data-category1="${t}"
            data-category2="${e}"
            class="${i} ${r?a:o}"
          >
            ${e}
          </button>
        `}).join(``),R=e=>{let{categories:t,category1:n,category2:r,isLoading:i,limit:a,sort:o,search:s}=e,c=String(a),l=()=>{let e=[`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`];return n&&e.push(`<span class="text-xs text-gray-500">&gt;</span>`,`<button data-breadcrumb="category1" data-category1="${n}" class="text-xs hover:text-blue-800 hover:underline">${n}</button>`),r&&e.push(`<span class="text-xs text-gray-500">&gt;</span>`,`<span class="text-xs text-gray-600 cursor-default">${r}</span>`),e.join(``)},u=()=>i?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:n?de(t,n,r):ue(t);return`
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value="${s}"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            ${l()}
          </div>
          <div class="space-y-2">
            <div class="flex flex-wrap gap-2">${u()}</div>
          </div>
        </div>

        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              ${M(se,c)}
            </select>
          </div>

          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1
                     focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              ${M(oe,o)}
            </select>
          </div>
        </div>
      </div>
    </div>
  `};var z=R;const B=e=>{let{productId:t,image:n,title:r,lprice:i,brand:a}=e;return`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${t}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${n}"
          alt="${r}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${r}</h3>
          <p class="text-xs text-gray-500 mb-2">${a}</p>
          <p class="text-lg font-bold text-gray-900">${S(i)}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
           hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${t}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `};var V=B;const fe=()=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,pe=(e=4)=>{let t=Array.from({length:e}).map(()=>fe()).join(``);return` <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">${t}</div> `},me=()=>`
    <div class="text-center py-4">
      <div class="inline-flex items-center">
        <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
      </div>
    </div>
  `;function he(){document.removeEventListener(`click`,H),document.addEventListener(`click`,H)}function H(e){let t=e.target.closest(`.product-card`);if(!t||e.target.classList.contains(`add-to-cart-btn`)||e.target.closest(`.add-to-cart-btn`))return;let n=t.getAttribute(`data-product-id`);n&&w.navigate(`/product/${n}`)}function ge(){document.removeEventListener(`click`,U),document.addEventListener(`click`,U)}function U(e){if(e.target.classList.contains(`add-to-cart-btn`)){let n=e.target.getAttribute(`data-product-id`);if(n){let r=e.target.closest(`.product-card`);if(r){let e={productId:n,title:r.querySelector(`h3`)?.textContent||``,image:r.querySelector(`img`)?.src||``,lprice:parseInt(r.querySelector(`.text-lg`)?.textContent?.replace(/[^\d]/g,``)||`0`),brand:r.querySelector(`.text-xs`)?.textContent||``};t.save(e)}}}}let W=1,G=!1,K=!0;function _e(){let e=window.pageYOffset||document.documentElement.scrollTop,t=window.innerHeight,n=document.documentElement.scrollHeight;return e+t>=n-100}function ve(){G||!K||_e()&&ye()}async function ye(){if(G||!K)return;G=!0,W++;let e=document.getElementById(`products-grid`);if(e){let t=document.createElement(`div`);t.innerHTML=me(),e.appendChild(t)}try{let e=document.querySelector(`#search-input`),t=document.querySelector(`#limit-select`),n=document.querySelector(`#sort-select`),r={page:W,limit:parseInt(t?.value)||20,search:e?.value||``,sort:n?.value||`price_asc`},{products:i,pagination:a}=await _(r);if(!i||i.length===0){K=!1;return}let o=document.querySelector(`.text-center.py-4`);o&&o.remove();let s=i.map(e=>V(e)).join(``),c=document.querySelector(`#products-grid .grid`);c&&c.insertAdjacentHTML(`beforeend`,s),W>=a.totalPages&&(K=!1)}catch(e){console.error(`추가 상품 불러오기 실패:`,e),W--}finally{G=!1}}const q=async e=>{let t=document.getElementById(`products-grid`);if(t){W=1,G=!1,K=!0;try{let{products:n,pagination:r}=await _(e);if(!n||n.length===0){t.innerHTML=O(e.search);return}let i=n.map(e=>V(e)).join(``);t.innerHTML=`
      <div>
        <div class="mb-4 text-sm text-gray-600">
          총 <span class="font-medium text-gray-900">${r.total}개</span>의 상품
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6">${i}</div>
      </div>
    `,he(),ge(),window.addEventListener(`scroll`,ve)}catch(n){console.error(`상품 불러오기 실패:`,n),t.innerHTML=x(`상품 정보를 불러올 수 없어요. 😥`,`product-retry-button`);let r=document.getElementById(`product-retry-button`);r?.addEventListener(`click`,()=>{q(e)})}}},J=j(),Y=async(e={})=>{let t=document.getElementById(`product-filter`);if(!t)return;let n={isLoading:!0,categories:{},limit:e.limit||20,sort:e.sort||`price_asc`,search:e.search||``,category1:e.category1||``,category2:e.category2||``};t.innerHTML=z(n);try{let e;J.has()?e=J.get():(e=await y(),J.set(e)),t.innerHTML=z({...n,isLoading:!1,categories:e}),le()}catch(e){console.error(`카테고리 로딩 실패:`,e),t.innerHTML=x(`카테고리를 불러오지 못했습니다. 😥`,`category-retry-button`),document.getElementById(`category-retry-button`)?.addEventListener(`click`,()=>{Y({...n})})}},X=()=>(X.init=async()=>{let e=k();await Y(e),await q(e)},`
    <main class="max-w-md mx-auto px-4 py-4">
      <div id="product-filter"></div>
      <div id="products-grid">${pe()}</div>
    </main>
  `),Z={isDetailPage:!1};function Q(e){let n=document.getElementById(`root`);if(!n)return;let r=l({pageComponent:e,isDetailPage:Z.isDetailPage});n.innerHTML=r,typeof e.init==`function`&&e.init(),typeof o.init==`function`&&o.init(),t.initCounter()}function be(){w.register(`/`,()=>{Z.isDetailPage=!1,Q(X)}).register(`/product/:id`,()=>{Z.isDetailPage=!0,Q(D)}).register(`/404`,()=>{Z.isDetailPage=!1,Q(g)}).init()}function $(){be()}window.addEventListener(`popstate`,()=>{h($)}),h($);export{C as b};