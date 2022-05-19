var W=Object.defineProperty,Z=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var H=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,T=(t,e)=>{for(var n in e||(e={}))q.call(e,n)&&H(t,n,e[n]);if(k)for(var n of k(e))G.call(e,n)&&H(t,n,e[n]);return t},R=(t,e)=>Z(t,z(e));import{h as J,createElement as j,render as Q}from"https://unpkg.com/preact@latest?module";import X from"https://unpkg.com/htm?module";import{useEffect as M,useReducer as Y,useState as K}from"https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/ui-shell.min.js";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/select.min.js";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/textarea.min.js";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/slider.min.js";import"https://1.www.s81c.com/common/carbon/web-components/tag/latest/button.min.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ee();const p=X.bind(J);var te=()=>p`
		<bx-header aria-label="Tweenn">
			<bx-header-name href="javascript:void 0" prefix="Tweenn">
				Learning Text 2 Speech
			</bx-header-name>
		</bx-header>
	`,ne=({label:t="",placeholder:e="",value:n="",values:r=[],cssClass:i="",setValue:o=a=>{console.log("Select component default set action executed, please provide me an action",a)}})=>p`
		<div class="bx--form-item">
			<bx-select label-text="${t}"
				class="${i}"
				placeholder="${e}"
				onBlur="${d=>{o(d.target.value)}}"
			>
				${r.map(d=>{if(d.type==="option")return p`
							<bx-select-item value="${d.value}" selected="${d.value===n}">
								${d.label}
							</bx-select-item>
						`})}
			</bx-select>
		</div>

	`;let ie=1,L=2,B=3,O=4,m=".",D=[];function F(t={},e){let n=se(),r=t;n._subscribe(m,e);let i={_path:[],_getHoC(s,c,l,u){let h=s.displayName||s.name||"",S=x=>{let V=c.length-1,_=c.length?c.reduce((g,P,A)=>A===V?g[P](l,u):g[P],a):a(l,u);return j(s,R(T({},x),{store:_}))};return S.displayName=`withStore(${h})`,S},get(s,c){return c==="prototype"?{}:(this._path.push(c),new Proxy(s,i))},apply(s,c,l){let u=s(),h=l[0],S=l[1],x=this._path.slice();if(this._path=[],u===B)return this._getHoC(l[0],x,l[1],l[2]);if(!x.length){let A=C();return u===L&&w(m,S),u===O?A(h):[r,A]}let V=x.join(m),_=C(V),g=E(V),P=h!==void 0&&!$(x);return u===O?_(h):(P&&(g=h,r=v(r,x,g)),u===L&&(M(()=>{P&&_(g)},[]),w(m+V,S)),[g,_])}},o=s=>new Proxy(()=>s,i),a=o(L),d=o(ie),y=o(B),b=o(O);function w(s,c){let l=Y(()=>[])[1];M(()=>(n._subscribe(s,l),n._subscribe(m,c),()=>{n._unsubscribe(s,l),n._unsubscribe(m,c)}),[s])}function C(s=""){let c=Array.isArray(s)?s:s.split(m);return l=>{let u=r,h=l;typeof l=="function"&&(h=l(E(s))),r=s?v(r,c,h):h,n._notify(m+s,{prevStore:u,store:r})}}function E(s,c=(l,u)=>l==null?void 0:l[u]){return s?(Array.isArray(s)?s:s.split(m)).reduce(c,r):r}function v(s,[c,...l],u){let h=Array.isArray(s)?[...s]:T({},s);return h[c]=l.length?v(s[c],l,u):u,h}function $(s){return E(s,(c,l,u,h)=>u===h.length-1?l in(c||{}):c==null?void 0:c[l])}return D.reduce((s,c)=>{let l=c(s,n);return typeof l=="object"?T(T({},s),l):s},{useStore:a,getStore:d,withStore:y,setStore:b})}F.ext=t=>typeof t=="function"&&D.push(t);function se(){let t={};return{_subscribe(e,n){typeof n=="function"&&(t[e]||(t[e]=new Set),t[e].add(n))},_notify(e,n){Object.keys(t).forEach(r=>{(e.startsWith(r)||r.startsWith(e))&&t[r].forEach(i=>i(n))})},_unsubscribe(e,n){typeof n=="function"&&(t[e].delete(n),t[e].size===0&&delete t[e])}}}const oe={voice:{list:[],selected:""},text:"Learning Text to Speech",pitch:1,rate:1,volume:1},{useStore:f}=F(oe);var re=()=>{const[t,e]=f.voice.list(),[n,r]=f.voice.selected(),i=()=>{const o=window.speechSynthesis.getVoices();o.length>0&&(e(o),r(0))};return M(()=>{i(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=i)},[]),p`
		<${ne}
			label="Voice"
			setValue=${r}
			value="${n}"
			values=${t.map((o,a)=>({type:"option",label:`[${o.lang.toLowerCase()}] ${o.voiceURI}`,value:a}))}
		/>
	`};let N;var le=({name:t="",value:e="",label:n="",placeholder:r="",cssClass:i="",setValue:o=a=>{console.log(a)}})=>p`
		<div class="bx--form-item">
			<bx-textarea
				class="${i}"
				placeholder="${r}"
				value=${e}
				name="${t}"
				onInput="${d=>{window.clearTimeout(N),N=window.setTimeout(()=>{o(d.target.value)},500)}}"
			>
				<span slot="label-text">${n}</span>
			</bx-textarea>
		</div>
	`,ce=()=>{const[t,e]=f.text();return p`
		<${le}
			cssClass="${"full-width"}"
			value="${t}"
			setValue="${e}"
		/>
	`},I=({name:t="",value:e="",label:n="",min:r=0,max:i=100,step:o=1,cssClass:a="",withInput:d=!1,setValue:y=b=>{console.log("Slider component default set action executed, please provide me an action",b)}})=>{const b=w=>{y(w.target.value)};return p`
		<div class="bx--form-item">
			<bx-slider
				class="${a}"
				name="${t}"
				label-text="${n}"
				max="${i}"
				min="${r}"
				step="${o}"
				value="${e}"
				onblur=${b}
			>
				${d&&p`
					<bx-slider-input
						aria-label="${e}"
						type="number"
						onblur=${b}
					></bx-slider-input>
				`}
			</bx-slider>
		</div>

	`},ae=()=>{const[t,e]=f.pitch(),[n,r]=f.rate(),[i,o]=f.volume();return p`
		<${I}
			label="Pitch"
			setValue="${e}"
			value="${t}"
			min="${0}"
			max="${2}"
			step="${.1}"
			withInput="${!0}"
			cssClass="${"full-width"}"
		/>
		<${I}
			label="Rate"
			setValue="${r}"
			value="${n}"
			min="${0}"
			max="${10}"
			step="${.25}"
			withInput="${!0}"
			cssClass="${"full-width"}"
		/>
		<${I}
			label="Volume"
			setValue="${o}"
			value="${i}"
			min="${0}"
			max="${1}"
			step="${.1}"
			withInput="${!0}"
			cssClass="${"full-width"}"
		/>
	`},U=({href:t="",text:e="",cssClass:n="",onClick:r=i=>{console.log("Button component default click action executed, please provide me an action",i)}})=>p`
		<bx-btn
			href="${t}"
			onclick="${r}"
			class="${n}"
			dangerouslySetInnerHTML="${{__html:e}}"
		>
		</bx-btn>
	`,ue=`
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" slot="icon">
		<path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"/>
		<rect fill="none" width="32" height="32"/>
	</svg>
`,de=`
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" slot="icon">
		<path d="M12,6H10A2,2,0,0,0,8,8V24a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z"/>
		<path d="M22,6H20a2,2,0,0,0-2,2V24a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z"/>
		<rect fill="none" width="32" height="32"/>
	</svg>
`,he=`
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" slot="icon">
		<path d="M24,6H8A2,2,0,0,0,6,8V24a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z"/>
		<rect fill="none" width="32" height="32"/>
	</svg>
`,fe=()=>{const[t,e]=K(!1),[n]=f.voice.list(),[r]=f.voice.selected(),[i]=f.text(),[o]=f.pitch(),[a]=f.rate(),[d]=f.volume(),y=()=>{window.speechSynthesis.speaking?b():C(),e(!t)},b=()=>{speechSynthesis.paused?speechSynthesis.resume():speechSynthesis.pause()},w=()=>{window.speechSynthesis.cancel()},C=()=>{console.table(n[r]),console.table({text:i,pitch:o,rate:a,volume:d});const v=new window.SpeechSynthesisUtterance(i);v.voice=n[r],v.pitch=o,v.rate=a,v.volume=d,["end","error","pause"].forEach($=>{v.addEventListener($,function(){console.log("Utterance event:",$),e(!1)})}),["start","resume"].forEach($=>{v.addEventListener($,function(){console.log("Utterance event:",$),e(!0)})}),window.speechSynthesis.speak(v)};return p`
		<${U}
			icon="${!0}"
			text="${(()=>t?de:ue)()}"
			onClick="${y}"
		/>
		<${U}
			cssClass="${"ml-2"}"
			icon="${!0}"
			text="${he}"
			onClick="${w}"
		/>
	`},pe=()=>{const t=`
		bx--col-md-4 bx--offset-md-2
		bx--col-lg-6 bx--offset-lg-3
		bx--col-xlg-6 bx--offset-xlg-3
		bx--col-max-6 bx--offset-max-3
	`;return p`
		<div class="App">
			<header>
				<${te} />
			</header>
			<main>
				<div class="bx--grid">
					<div class="bx--row">
						<div class="bx--col ${t}">
							<h3>
								Learning Text 2 Speech
							</h3>
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${t}">
							<${ce} />
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${t}">
							<${ae} />
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${t}">
							<${re} />
						</div>
					</div>

					<div class="bx--row pt-2">
						<div class="bx--col ${t}">
							<${fe} />
						</div>
					</div>
				</div>
			</main>
		</div>
	`};const ve=async()=>{Q(j(pe),document.body)};ve();
