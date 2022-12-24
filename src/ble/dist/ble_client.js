(()=>{var ke=Object.create;var ne=Object.defineProperty;var Ce=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var Se=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var H=(a,e)=>()=>(a&&(e=a(a=0)),e);var Ue=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports),fe=(a,e)=>{for(var t in e)ne(a,t,{get:e[t],enumerable:!0})},qe=(a,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Oe(e))!Te.call(a,n)&&n!==t&&ne(a,n,{get:()=>e[n],enumerable:!(i=Ce(e,n))||i.enumerable});return a};var Ve=(a,e,t)=>(t=a!=null?ke(Se(a)):{},qe(e||!a||!a.__esModule?ne(t,"default",{value:a,enumerable:!0}):t,a));var ze,He,ge,ot,lt,V,$,Ge,Qe,Je,I,pe,ct,G,Q=H(()=>{ze=a=>{let e=new Map;e.set("web",{name:"web"});let t=a.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},i=(r,s)=>{t.platforms.set(r,s)},n=r=>{t.platforms.has(r)&&(t.currentPlatform=t.platforms.get(r))};return t.addPlatform=i,t.setPlatform=n,t},He=a=>a.CapacitorPlatforms=ze(a),ge=He(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ot=ge.addPlatform,lt=ge.setPlatform;(function(a){a.Unimplemented="UNIMPLEMENTED",a.Unavailable="UNAVAILABLE"})(V||(V={}));$=class extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}},Ge=a=>{var e,t;return a?.androidBridge?"android":!((t=(e=a?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},Qe=a=>{var e,t,i,n,r;let s=a.CapacitorCustomPlatform||null,o=a.Capacitor||{},l=o.Plugins=o.Plugins||{},c=a.CapacitorPlatforms,u=()=>s!==null?s.name:Ge(a),f=((e=c?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||u,d=()=>f()!=="web",h=((t=c?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||d,b=g=>{let p=S.get(g);return!!(p?.platforms.has(f())||L(g))},D=((i=c?.currentPlatform)===null||i===void 0?void 0:i.isPluginAvailable)||b,N=g=>{var p;return(p=o.PluginHeaders)===null||p===void 0?void 0:p.find(T=>T.name===g)},L=((n=c?.currentPlatform)===null||n===void 0?void 0:n.getPluginHeader)||N,O=g=>a.console.error(g),F=(g,p,T)=>Promise.reject(`${T} does not have an implementation of "${p}".`),S=new Map,Ee=(g,p={})=>{let T=S.get(g);if(T)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),T.proxy;let _=f(),U=L(g),P,Ie=async()=>(!P&&_ in p?P=typeof p[_]=="function"?P=await p[_]():P=p[_]:s!==null&&!P&&"web"in p&&(P=typeof p.web=="function"?P=await p.web():P=p.web),P),Fe=(m,y)=>{var A,E;if(U){let B=U?.methods.find(x=>y===x.name);if(B)return B.rtype==="promise"?x=>o.nativePromise(g,y.toString(),x):(x,j)=>o.nativeCallback(g,y.toString(),x,j);if(m)return(A=m[y])===null||A===void 0?void 0:A.bind(m)}else{if(m)return(E=m[y])===null||E===void 0?void 0:E.bind(m);throw new $(`"${g}" plugin is not implemented on ${_}`,V.Unimplemented)}},te=m=>{let y,A=(...E)=>{let B=Ie().then(x=>{let j=Fe(x,m);if(j){let z=j(...E);return y=z?.remove,z}else throw new $(`"${g}.${m}()" is not implemented on ${_}`,V.Unimplemented)});return m==="addListener"&&(B.remove=async()=>y()),B};return A.toString=()=>`${m.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:m,writable:!1,configurable:!1}),A},ue=te("addListener"),de=te("removeListener"),_e=(m,y)=>{let A=ue({eventName:m},y),E=async()=>{let x=await A;de({eventName:m,callbackId:x},y)},B=new Promise(x=>A.then(()=>x({remove:E})));return B.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await E()},B},ie=new Proxy({},{get(m,y){switch(y){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return U?_e:ue;case"removeListener":return de;default:return te(y)}}});return l[g]=ie,S.set(g,{name:g,proxy:ie,platforms:new Set([...Object.keys(p),...U?[_]:[]])}),ie},Be=((r=c?.currentPlatform)===null||r===void 0?void 0:r.registerPlugin)||Ee;return o.convertFileSrc||(o.convertFileSrc=g=>g),o.getPlatform=f,o.handleError=O,o.isNativePlatform=h,o.isPluginAvailable=D,o.pluginMethodNoop=F,o.registerPlugin=Be,o.Exception=$,o.DEBUG=!!o.DEBUG,o.isLoggingEnabled=!!o.isLoggingEnabled,o.platform=o.getPlatform(),o.isNative=o.isNativePlatform(),o},Je=a=>a.Capacitor=Qe(a),I=Je(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),pe=I.registerPlugin,ct=I.Plugins,G=class{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);let n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);let r=async()=>this.removeListener(e,t),s=Promise.resolve({remove:r});return Object.defineProperty(s,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()}}),s}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){let i=this.listeners[e];i&&i.forEach(n=>n(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new I.Exception(e,V.Unimplemented)}unavailable(e="not available"){return new I.Exception(e,V.Unavailable)}async removeListener(e,t){let i=this.listeners[e];if(!i)return;let n=i.indexOf(t);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){!e||(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}});function Xe(a){return new DataView(Uint8Array.from(a).buffer)}function Ye(a){return Array.from(new Uint8Array(a.buffer))}function Ke(a){return`0000${a.toString(16).padStart(4,"0")}-0000-1000-8000-00805f9b34fb`}function M(a){let e=a.trim().split(" ").filter(t=>t!=="").map(t=>parseInt(t,16));return Xe(e)}function J(a){return Ye(a).map(e=>{let t=e.toString(16);return t.length==1&&(t="0"+t),t}).join(" ")}function we(a){if(typeof a=="string")return a;if(typeof a=="number")return Ke(a);throw new Error("Invalid UUID")}function ae(a){let e={};if(!!a)return a.forEach((t,i)=>{e[i.toString()]=t}),e}var X=H(()=>{});async function me(a,e,t){let i;return Promise.race([a,new Promise((n,r)=>{i=setTimeout(()=>r(t),e)})]).finally(()=>clearTimeout(i))}var be=H(()=>{});var ye={};fe(ye,{BluetoothLeWeb:()=>oe});var oe,De=H(()=>{Q();X();be();oe=class extends G{constructor(){super(...arguments),this.deviceMap=new Map,this.discoveredDevices=new Map,this.scan=null,this.DEFAULT_CONNECTION_TIMEOUT=1e4,this.onAdvertisementReceivedCallback=this.onAdvertisementReceived.bind(this),this.onDisconnectedCallback=this.onDisconnected.bind(this),this.onCharacteristicValueChangedCallback=this.onCharacteristicValueChanged.bind(this)}async initialize(){if(typeof navigator>"u"||!navigator.bluetooth)throw this.unavailable("Web Bluetooth API not available in this browser.");if(!await navigator.bluetooth.getAvailability())throw this.unavailable("No Bluetooth radio available.")}async isEnabled(){return{value:!0}}async enable(){throw this.unavailable("enable is not available on web.")}async disable(){throw this.unavailable("disable is not available on web.")}async startEnabledNotifications(){}async stopEnabledNotifications(){}async isLocationEnabled(){throw this.unavailable("isLocationEnabled is not available on web.")}async openLocationSettings(){throw this.unavailable("openLocationSettings is not available on web.")}async openBluetoothSettings(){throw this.unavailable("openBluetoothSettings is not available on web.")}async openAppSettings(){throw this.unavailable("openAppSettings is not available on web.")}async setDisplayStrings(){}async requestDevice(e){let t=this.getFilters(e),i=await navigator.bluetooth.requestDevice({filters:t.length?t:void 0,optionalServices:e?.optionalServices,acceptAllDevices:t.length===0});return this.deviceMap.set(i.id,i),this.getBleDevice(i)}async requestLEScan(e){this.requestBleDeviceOptions=e;let t=this.getFilters(e);await this.stopLEScan(),this.discoveredDevices=new Map,navigator.bluetooth.removeEventListener("advertisementreceived",this.onAdvertisementReceivedCallback),navigator.bluetooth.addEventListener("advertisementreceived",this.onAdvertisementReceivedCallback),this.scan=await navigator.bluetooth.requestLEScan({filters:t.length?t:void 0,acceptAllAdvertisements:t.length===0,keepRepeatedDevices:e?.allowDuplicates})}onAdvertisementReceived(e){var t,i;let n=e.device.id;if(this.deviceMap.set(n,e.device),!this.discoveredDevices.has(n)||((t=this.requestBleDeviceOptions)===null||t===void 0?void 0:t.allowDuplicates)){this.discoveredDevices.set(n,!0);let s=this.getBleDevice(e.device),o={device:s,localName:s.name,rssi:e.rssi,txPower:e.txPower,manufacturerData:ae(e.manufacturerData),serviceData:ae(e.serviceData),uuids:(i=e.uuids)===null||i===void 0?void 0:i.map(we)};this.notifyListeners("onScanResult",o)}}async stopLEScan(){var e;!((e=this.scan)===null||e===void 0)&&e.active&&this.scan.stop(),this.scan=null}async getDevices(e){return{devices:(await navigator.bluetooth.getDevices()).map(n=>(this.deviceMap.set(n.id,n),this.getBleDevice(n)))}}async getConnectedDevices(e){return{devices:(await navigator.bluetooth.getDevices()).filter(n=>{var r;return(r=n.gatt)===null||r===void 0?void 0:r.connected}).map(n=>(this.deviceMap.set(n.id,n),this.getBleDevice(n)))}}async connect(e){var t,i;let n=this.getDeviceFromMap(e.deviceId);n.removeEventListener("gattserverdisconnected",this.onDisconnectedCallback),n.addEventListener("gattserverdisconnected",this.onDisconnectedCallback);let r=Symbol();if(n.gatt===void 0)throw new Error("No gatt server available.");try{let s=(t=e.timeout)!==null&&t!==void 0?t:this.DEFAULT_CONNECTION_TIMEOUT;await me(n.gatt.connect(),s,r)}catch(s){throw await((i=n.gatt)===null||i===void 0?void 0:i.disconnect()),s===r?new Error("Connection timeout"):s}}onDisconnected(e){let i=`disconnected|${e.target.id}`;this.notifyListeners(i,null)}async createBond(e){throw this.unavailable("createBond is not available on web.")}async isBonded(e){throw this.unavailable("isBonded is not available on web.")}async disconnect(e){var t;(t=this.getDeviceFromMap(e.deviceId).gatt)===null||t===void 0||t.disconnect()}async getServices(e){var t,i;let n=(i=await((t=this.getDeviceFromMap(e.deviceId).gatt)===null||t===void 0?void 0:t.getPrimaryServices()))!==null&&i!==void 0?i:[],r=[];for(let s of n){let o=await s.getCharacteristics(),l=[];for(let c of o)l.push({uuid:c.uuid,properties:this.getProperties(c),descriptors:await this.getDescriptors(c)});r.push({uuid:s.uuid,characteristics:l})}return{services:r}}async getDescriptors(e){try{return(await e.getDescriptors()).map(i=>({uuid:i.uuid}))}catch{return[]}}getProperties(e){return{broadcast:e.properties.broadcast,read:e.properties.read,writeWithoutResponse:e.properties.writeWithoutResponse,write:e.properties.write,notify:e.properties.notify,indicate:e.properties.indicate,authenticatedSignedWrites:e.properties.authenticatedSignedWrites,reliableWrite:e.properties.reliableWrite,writableAuxiliaries:e.properties.writableAuxiliaries}}async getCharacteristic(e){var t;let i=await((t=this.getDeviceFromMap(e.deviceId).gatt)===null||t===void 0?void 0:t.getPrimaryService(e?.service));return i?.getCharacteristic(e?.characteristic)}async getDescriptor(e){let t=await this.getCharacteristic(e);return t?.getDescriptor(e?.descriptor)}async readRssi(e){throw this.unavailable("readRssi is not available on web.")}async read(e){let t=await this.getCharacteristic(e);return{value:await t?.readValue()}}async write(e){let t=await this.getCharacteristic(e),i;typeof e.value=="string"?i=M(e.value):i=e.value,await t?.writeValueWithResponse(i)}async writeWithoutResponse(e){let t=await this.getCharacteristic(e),i;typeof e.value=="string"?i=M(e.value):i=e.value,await t?.writeValueWithoutResponse(i)}async readDescriptor(e){let t=await this.getDescriptor(e);return{value:await t?.readValue()}}async writeDescriptor(e){let t=await this.getDescriptor(e),i;typeof e.value=="string"?i=M(e.value):i=e.value,await t?.writeValue(i)}async startNotifications(e){let t=await this.getCharacteristic(e);t?.removeEventListener("characteristicvaluechanged",this.onCharacteristicValueChangedCallback),t?.addEventListener("characteristicvaluechanged",this.onCharacteristicValueChangedCallback),await t?.startNotifications()}onCharacteristicValueChanged(e){var t,i;let n=e.target,r=`notification|${(t=n.service)===null||t===void 0?void 0:t.device.id}|${(i=n.service)===null||i===void 0?void 0:i.uuid}|${n.uuid}`;this.notifyListeners(r,{value:n.value})}async stopNotifications(e){let t=await this.getCharacteristic(e);await t?.stopNotifications()}getFilters(e){var t;let i=[];for(let n of(t=e?.services)!==null&&t!==void 0?t:[])i.push({services:[n],name:e?.name,namePrefix:e?.namePrefix});return(e?.name||e?.namePrefix)&&i.length===0&&i.push({name:e.name,namePrefix:e.namePrefix}),i}getDeviceFromMap(e){let t=this.deviceMap.get(e);if(t===void 0)throw new Error('Device not found. Call "requestDevice", "requestLEScan" or "getDevices" first.');return t}getBleDevice(e){var t;return{deviceId:e.id,name:(t=e.name)!==null&&t!==void 0?t:void 0}}}});var Ae=Ue((mt,K)=>{"use strict";function xe(a){var e=new le,t=a|0;function i(l,c,u){return(t|0)!==0?(t=(t|0)-1,new Promise(function(f){f(l.apply(c,u))}).then(r,s)):new Promise(function(f){e.push(new tt(f,l,c,u))}).then(n)}function n(l){try{return Promise.resolve(l.fn.apply(l.self,l.args)).then(r,s)}catch(c){s(c)}}function r(l){return o(),l}function s(l){throw o(),l}function o(){var l=e.shift();l?l.resolve(l):t=(t|0)+1}return i}function Ze(a,e){let t=xe(a|0);return function(){for(var i=new Array(arguments.length),n=0;n<arguments.length;n++)i[n]=arguments[n];return t(e,this,i)}}function et(a){let e=xe(a|0);return function(t){if(typeof t!="function")throw new TypeError("Expected throat fn to be a function but got "+typeof t);for(var i=new Array(arguments.length-1),n=1;n<arguments.length;n++)i[n-1]=arguments[n];return e(t,this,i)}}K.exports=function(e,t){if(typeof e=="function"){var i=t;t=e,e=i}if(typeof e!="number")throw new TypeError("Expected throat size to be a number but got "+typeof e);if(t!==void 0&&typeof t!="function")throw new TypeError("Expected throat fn to be a function but got "+typeof t);return typeof t=="function"?Ze(e|0,t):et(e|0)};K.exports.default=K.exports;function tt(a,e,t,i){this.resolve=a,this.fn=e,this.self=t||null,this.args=i}var Y=64;function le(){this._s1=[],this._s2=[],this._shiftBlock=this._pushBlock=new Array(Y),this._pushIndex=0,this._shiftIndex=0}le.prototype.push=function(a){this._pushIndex===Y&&(this._pushIndex=0,this._s1[this._s1.length]=this._pushBlock=new Array(Y)),this._pushBlock[this._pushIndex++]=a};le.prototype.shift=function(){if(this._shiftIndex===Y){this._shiftIndex=0;var a=this._s2;if(a.length===0){var e=this._s1;if(e.length===0)return;this._s1=a,a=this._s2=e.reverse()}this._shiftBlock=a.pop()}if(!(this._pushBlock===this._shiftBlock&&this._pushIndex===this._shiftIndex)){var t=this._shiftBlock[this._shiftIndex];return this._shiftBlock[this._shiftIndex++]=null,t}}});var ee={};fe(ee,{BLEClient:()=>C});var q=class{constructor(){this.recursivelyAssign=(e,t)=>{for(let i in t)typeof t[i]=="object"?typeof e[i]=="object"?this.recursivelyAssign(e[i],t[i]):e[i]=this.recursivelyAssign({},t[i]):e[i]=t[i];return e}}static autoscale(e,t=0,i=1,n=!1,r,s,o){if(e?.length===0)return e;let l=s||Math.max(...e),c=r||Math.min(...e),u=1/i,f=1;if(n){let d=Math.max(Math.abs(c),Math.abs(l));return d!==0&&(f=u/d),e.map(h=>(o&&(h<c&&(h=c),h>l&&(h=l)),h*f+(u*(t+1)*2-1-u)))}else return l===c?l!==0?f=u/l:c!==0&&(f=u/Math.abs(c)):f=u/(l-c),e.map(d=>(o&&(d<c&&(d=c),d>l&&(d=l)),2*((d-c)*f-1/(2*i))+(u*(t+1)*2-1-u)))}static genTimestamps(e,t){let i=Date.now(),n=[i-e*1e3/t,i];return q.upsample(n,e)}static absmax(e){return Math.max(Math.abs(Math.min(...e)),Math.max(...e))}static downsample(e,t,i=1){if(e.length>t){let n=new Array(t),r=e.length/t,s=e.length-1,o=0,l=0;for(let c=r;c<e.length;c+=r){let u=Math.round(c);u>s&&(u=s);for(let f=o;f<u;f++)n[l]+=e[f];n[l]/=(u-o)*i,l++,o=u}return n}else return e}static upsample(e,t,i=1){var n=function(d,h,b){return(d+(h-d)*b)*i},r=new Array(t),s=(e.length-1)/(t-1);r[0]=e[0];for(var o=1;o<t-1;o++){var l=o*s,c=Math.floor(l),u=Math.ceil(l),f=l-c;r[o]=n(e[c],e[u],f)}return r[t-1]=e[e.length-1],r}static interpolate(e,t,i=1){return e.length>t?q.downsample(e,t,i):e.length<t?q.upsample(e,t,i):e}static HSLToRGB(e,t,i,n=255){t/=100,i/=100;let r=(1-Math.abs(2*i-1))*t,s=r*(1-Math.abs(e/60%2-1)),o=i-r/2,l=0,c=0,u=0;return 0<=e&&e<60?(l=r,c=s,u=0):60<=e&&e<120?(l=s,c=r,u=0):120<=e&&e<180?(l=0,c=r,u=s):180<=e&&e<240?(l=0,c=s,u=r):240<=e&&e<300?(l=s,c=0,u=r):300<=e&&e<360&&(l=r,c=0,u=s),l=(l+o)*n,c=(c+o)*n,u=(u+o)*n,[l,c,u]}static circularBuffer(e,t){if(t.length<e.length){let i=e.slice(t.length),n=e.length;e.splice(0,n,...i,...t)}else if(t.length>e.length){let i=e.length;e.splice(0,i,t.slice(i-t.length))}else e.splice(0,e.length,...t);return e}static reformatData(e,t){if(Array.isArray(e)){if(Array.isArray(e[0])){let i={};if(e.forEach((n,r)=>{i[r]=n}),e=i,isNaN(e[0][0]))return}else if(t){if(e={[t]:e},isNaN(e[t][0]))return}else if(e={0:e},isNaN(e[0][0]))return}else if(typeof e=="object"){for(let i in e)if(typeof e[i]=="number"?e[i]=[e[i]]:e[i]?.values&&typeof e[i].values=="number"&&(e[i].values=[e[i].values]),isNaN(e[i][0]))return}else if(typeof e=="string"){let i;if(e.includes(`\r
`)){let n=e.split(`\r
`);e={},n.forEach((r,s)=>{r.includes("	")?i=r.split("	"):r.includes(",")?i=r.split(","):r.includes("|")&&(i=r.split("|")),Array.isArray(i)&&i.forEach((o,l)=>{if(o.includes(":")){let[c,u]=o.split(":"),f=parseFloat(u);if(f)e[c]=[f];else return}else{let c=parseFloat(o);if(c)e[l]=[c];else return}})})}else e.includes("	")?i=e.split("	"):e.includes(",")?i=e.split(","):e.includes("|")&&(i=e.split("|"));e={},Array.isArray(i)&&i.forEach((n,r)=>{if(n.includes(":")){let[s,o]=n.split(":"),l=parseFloat(o);if(l)e[s]=[l];else return}else{let s=parseFloat(n);if(s)e[r]=[s];else return}})}else typeof e=="number"&&(t?e={[t]:[e]}:e={0:[e]});return e}static padTime(e,t,i,n){let r=(e[0]-t)/i/n;return[...new Array(n-e.length).map((o,l)=>t+r*(l+1)),...e]}static interpolateForTime(e,t,i){return q.interpolate(e,Math.ceil(i*t))}isTypedArray(e){return ArrayBuffer.isView(e)&&Object.prototype.toString.call(e)!=="[object DataView]"}spliceTypedArray(e,t,i){let n=e.subarray(0,t),r;i&&(r=e.subarray(i+1));let s;return(n.length>0||r?.length>0)&&(s=new e.constructor(n.length+r.length)),n.length>0&&s.set(n),r&&r.length>0&&s.set(r,n.length),s}},R=q;R.bufferValues=(e,t,i,n)=>{if(!Array.isArray(i)&&typeof i=="object"&&(i=Object.keys(i)),!n){let s=Object.keys(e);i?n=new Float32Array(s.length*i.length):typeof e[s[0]][t]=="object"?(i=Object.keys(e[s[0]][t]),n=new Float32Array(s.length*i.length)):n=new Float32Array(s.length)}let r=0;for(let s in e)if(e[s][t])if(i)for(let o=0;o<i.length;o++)n[r]=e[s][t][i[o]],r++;else n[r]=e[s][t],r++;return n};var Me=/^([<>])?(([1-9]\d*)?([xcbB?hHiIfdsp]))*$/,Ne=/([1-9]\d*)?([xcbB?hHiIfdsp])/g,re=(a,e,t)=>String.fromCharCode(...new Uint8Array(a.buffer,a.byteOffset+e,t)),se=(a,e,t,i)=>new Uint8Array(a.buffer,a.byteOffset+e,t).set(i.split("").map(n=>n.charCodeAt(0))),Re=(a,e,t)=>re(a,e+1,Math.min(a.getUint8(e),t-1)),We=(a,e,t,i)=>{a.setUint8(e,i.length),se(a,e+1,t-1,i)},$e=a=>({x:e=>[1,e,0],c:e=>[e,1,t=>({u:i=>re(i,t,1),p:(i,n)=>se(i,t,1,n)})],"?":e=>[e,1,t=>({u:i=>Boolean(i.getUint8(t)),p:(i,n)=>i.setUint8(t,n)})],b:e=>[e,1,t=>({u:i=>i.getInt8(t),p:(i,n)=>i.setInt8(t,n)})],B:e=>[e,1,t=>({u:i=>i.getUint8(t),p:(i,n)=>i.setUint8(t,n)})],h:e=>[e,2,t=>({u:i=>i.getInt16(t,a),p:(i,n)=>i.setInt16(t,n,a)})],H:e=>[e,2,t=>({u:i=>i.getUint16(t,a),p:(i,n)=>i.setUint16(t,n,a)})],i:e=>[e,4,t=>({u:i=>i.getInt32(t,a),p:(i,n)=>i.setInt32(t,n,a)})],I:e=>[e,4,t=>({u:i=>i.getUint32(t,a),p:(i,n)=>i.setUint32(t,n,a)})],f:e=>[e,4,t=>({u:i=>i.getFloat32(t,a),p:(i,n)=>i.setFloat32(t,n,a)})],d:e=>[e,8,t=>({u:i=>i.getFloat64(t,a),p:(i,n)=>i.setFloat64(t,n,a)})],s:e=>[1,e,t=>({u:i=>re(i,t,e),p:(i,n)=>se(i,t,e,n.slice(0,e))})],p:e=>[1,e,t=>({u:i=>Re(i,t,e),p:(i,n)=>We(i,t,e,n.slice(0,e-1))})]}),he=new RangeError("Structure larger than remaining buffer"),je=new RangeError("Not enough values for structure"),k=class extends R{static toDataView(e){if(!(e instanceof DataView))if(typeof e=="string"&&parseInt(e)&&(e=parseInt(e)),typeof e=="string"){let t=new TextEncoder,i={};for(let r in k.codes)for(;e.indexOf(r)>-1;){let s=e.indexOf(r);e=e.replace(r,""),i[s]=r}let n=Array.from(t.encode(e));for(let r in i)n.splice(parseInt(r),0,k.codes[i[r]]);e=new DataView(new Uint8Array(n).buffer)}else if(typeof e=="number"){let t=e;e<256?(e=new DataView(new ArrayBuffer(1)),e.setUint8(0,t)):e<65536?(e=new DataView(new ArrayBuffer(2)),e.setInt16(0,t)):(e=new DataView(new ArrayBuffer(4)),e.setUint32(0,t))}else e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer?e=new DataView(e):Array.isArray(e)?e=new DataView(Uint8Array.from(e).buffer):typeof e=="object"&&(e=new TextEncoder().encode(JSON.stringify(e)));return e}static searchBuffer(e,t,i){for(var n=t,r=e,s=k.boyerMoore(n),o=s.byteLength,l=[],c=s(r);c!==-1&&(l.push(c),!(i&&l.length>=i));c=s(r,c+o));return l}static bytesToInt16(e,t){let i=(255&e)<<8|255&t;return(i&32768)>0?i|=4294901760:i&=65535,i}static bytesToUInt16(e,t){return e*256+t}static Uint16ToBytes(e){return[e&255,e>>8&255]}static bytesToInt24(e,t,i){let n=(255&e)<<16|(255&t)<<8|255&i;return(n&8388608)>0?n|=4278190080:n&=16777215,n}static bytesToUInt24(e,t,i){return e*65536+t*256+i}static Uint24ToBytes(e){return[e&255,e>>8&255,e>>16&255]}static bytesToInt32(e,t,i,n){let r=(255&e)<<24|(255&t)<<16|(255&i)<<8|255&n;return(r&2147483648)>0?r|=0:r&=4294967295,r}static bytesToUInt32(e,t,i,n){return e*16777216+t*65536+i*256+n}static Uint32ToBytes(e){return[e&255,e>>8&255,e>>16&255,e>>24&255]}static get2sCompliment(e,t){return e>4294967296?null:e<<32-t>>32-t}static getSignedInt(...e){let t=0;function i(n){for(var r=0,s=!0;n--;)if(s){let o=e[t++];r+=o&127,o&128&&(r-=128),s=!1}else r*=256,r+=e[t++];return r}return i(e.length)}static asUint8Array(e){if(e instanceof Uint8Array)return e;if(typeof e=="string"){for(var t=new Uint8Array(e.length),i=0;i<e.length;i++){var n=e.charCodeAt(i);if(n>127)throw new TypeError("Only ASCII patterns are supported");t[i]=n}return t}else return new Uint8Array(e)}static boyerMoore(e){var t=k.asUint8Array(e),i=t.length;if(i===0)throw new TypeError("patternBuffer must be at least 1 byte long");for(var n=256,r=new Int32Array(n),s=0;s<n;s++)r[s]=-1;for(var o=0;o<i;o++)r[t[o]]=o;var l=(c,u,f)=>{var d=k.asUint8Array(c);u===void 0&&(u=0),f===void 0&&(f=d.length);for(var h=t,b=r,D=f-h.length,N=h.length-1,L,O=u;O<=D;O+=L){L=0;for(var F=N;F>=0;F--){var S=d[O+F];if(h[F]!==S){L=Math.max(1,F-b[S]);break}}if(L===0)return O}return-1};return l.byteLength=t.byteLength,l}static struct(e){let t=[],i=0,n=Me.exec(e);if(!n)throw new RangeError("Invalid format string");let r=$e(n[1]==="<"),s=(d,h)=>r[h](d?parseInt(d,10):1);for(;n=Ne.exec(e);)((d,h,b)=>{for(let D=0;D<d;++D,i+=h)b&&t.push(b(i))})(...s(...n.slice(1)));let o=(d,h)=>{if(d.byteLength<(h|0)+i)throw he;let b=new DataView(d,h|0);return t.map(D=>D.u(b))},l=(d,h,...b)=>{if(b.length<t.length)throw je;if(d.byteLength<h+i)throw he;let D=new DataView(d,h);new Uint8Array(d,h,i).fill(0),t.forEach((N,L)=>N.p(D,b[L]))},c=(...d)=>{let h=new ArrayBuffer(i);return l(h,0,...d),h},u=d=>o(d,0);function*f(d){for(let h=0;h+i<=d.byteLength;h+=i)yield o(d,h)}return Object.freeze({unpack:u,pack:c,unpack_from:o,pack_into:l,iter_unpack:f,format:e,size:i})}},W=k;W.codes={"\\n":10,"\\r":13,"\\t":9,"\\s":32,"\\b":8,"\\f":12,"\\":92};var ve;(function(a){a[a.SCAN_MODE_LOW_POWER=0]="SCAN_MODE_LOW_POWER",a[a.SCAN_MODE_BALANCED=1]="SCAN_MODE_BALANCED",a[a.SCAN_MODE_LOW_LATENCY=2]="SCAN_MODE_LOW_LATENCY"})(ve||(ve={}));Q();X();Q();var v=pe("BluetoothLe",{web:()=>Promise.resolve().then(()=>(De(),ye)).then(a=>new a.BluetoothLeWeb)});var Le=Ve(Ae());function Z(a){return a?(0,Le.default)(1):e=>e()}function w(a){if(typeof a!="string")throw new Error(`Invalid UUID type ${typeof a}. Expected string.`);if(a=a.toLowerCase(),!(a.search(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/)>=0))throw new Error(`Invalid UUID format ${a}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`);return a}var ce=class{constructor(){this.scanListener=null,this.eventListeners=new Map,this.queue=Z(!0)}enableQueue(){this.queue=Z(!0)}disableQueue(){this.queue=Z(!1)}async initialize(e){await this.queue(async()=>{await v.initialize(e)})}async getEnabled(){return this.isEnabled()}async isEnabled(){return await this.queue(async()=>(await v.isEnabled()).value)}async enable(){await this.queue(async()=>{await v.enable()})}async disable(){await this.queue(async()=>{await v.disable()})}async startEnabledNotifications(e){await this.queue(async()=>{var t;let i="onEnabledChanged";await((t=this.eventListeners.get(i))===null||t===void 0?void 0:t.remove());let n=await v.addListener(i,r=>{e(r.value)});this.eventListeners.set(i,n),await v.startEnabledNotifications()})}async stopEnabledNotifications(){await this.queue(async()=>{var e;let t="onEnabledChanged";await((e=this.eventListeners.get(t))===null||e===void 0?void 0:e.remove()),this.eventListeners.delete(t),await v.stopEnabledNotifications()})}async isLocationEnabled(){return await this.queue(async()=>(await v.isLocationEnabled()).value)}async openLocationSettings(){await this.queue(async()=>{await v.openLocationSettings()})}async openBluetoothSettings(){await this.queue(async()=>{await v.openBluetoothSettings()})}async openAppSettings(){await this.queue(async()=>{await v.openAppSettings()})}async setDisplayStrings(e){await this.queue(async()=>{await v.setDisplayStrings(e)})}async requestDevice(e){return await this.queue(async()=>await v.requestDevice(e))}async requestLEScan(e,t){await this.queue(async()=>{var i;await((i=this.scanListener)===null||i===void 0?void 0:i.remove()),this.scanListener=await v.addListener("onScanResult",n=>{let r=Object.assign(Object.assign({},n),{manufacturerData:this.convertObject(n.manufacturerData),serviceData:this.convertObject(n.serviceData),rawAdvertisement:n.rawAdvertisement?this.convertValue(n.rawAdvertisement):void 0});t(r)}),await v.requestLEScan(e)})}async stopLEScan(){await this.queue(async()=>{var e;await((e=this.scanListener)===null||e===void 0?void 0:e.remove()),this.scanListener=null,await v.stopLEScan()})}async getDevices(e){return this.queue(async()=>(await v.getDevices({deviceIds:e})).devices)}async getConnectedDevices(e){return this.queue(async()=>(await v.getConnectedDevices({services:e})).devices)}async connect(e,t,i){await this.queue(async()=>{var n;if(t){let r=`disconnected|${e}`;await((n=this.eventListeners.get(r))===null||n===void 0?void 0:n.remove());let s=await v.addListener(r,()=>{t(e)});this.eventListeners.set(r,s)}await v.connect(Object.assign({deviceId:e},i))})}async createBond(e){await this.queue(async()=>{await v.createBond({deviceId:e})})}async isBonded(e){return await this.queue(async()=>(await v.isBonded({deviceId:e})).value)}async disconnect(e){await this.queue(async()=>{await v.disconnect({deviceId:e})})}async getServices(e){return await this.queue(async()=>(await v.getServices({deviceId:e})).services)}async readRssi(e){return await this.queue(async()=>{let i=await v.readRssi({deviceId:e});return parseFloat(i.value)})}async read(e,t,i,n){return t=w(t),i=w(i),await this.queue(async()=>{let s=await v.read(Object.assign({deviceId:e,service:t,characteristic:i},n));return this.convertValue(s.value)})}async write(e,t,i,n,r){return t=w(t),i=w(i),this.queue(async()=>{if(!n?.buffer)throw new Error("Invalid data.");let s=n;I.getPlatform()!=="web"&&(s=J(n)),await v.write(Object.assign({deviceId:e,service:t,characteristic:i,value:s},r))})}async writeWithoutResponse(e,t,i,n,r){t=w(t),i=w(i),await this.queue(async()=>{if(!n?.buffer)throw new Error("Invalid data.");let s=n;I.getPlatform()!=="web"&&(s=J(n)),await v.writeWithoutResponse(Object.assign({deviceId:e,service:t,characteristic:i,value:s},r))})}async readDescriptor(e,t,i,n,r){return t=w(t),i=w(i),n=w(n),await this.queue(async()=>{let o=await v.readDescriptor(Object.assign({deviceId:e,service:t,characteristic:i,descriptor:n},r));return this.convertValue(o.value)})}async writeDescriptor(e,t,i,n,r,s){return t=w(t),i=w(i),n=w(n),this.queue(async()=>{if(!r?.buffer)throw new Error("Invalid data.");let o=r;I.getPlatform()!=="web"&&(o=J(r)),await v.writeDescriptor(Object.assign({deviceId:e,service:t,characteristic:i,descriptor:n,value:o},s))})}async startNotifications(e,t,i,n){t=w(t),i=w(i),await this.queue(async()=>{var r;let s=`notification|${e}|${t}|${i}`;await((r=this.eventListeners.get(s))===null||r===void 0?void 0:r.remove());let o=await v.addListener(s,l=>{n(this.convertValue(l?.value))});this.eventListeners.set(s,o),await v.startNotifications({deviceId:e,service:t,characteristic:i})})}async stopNotifications(e,t,i){t=w(t),i=w(i),await this.queue(async()=>{var n;let r=`notification|${e}|${t}|${i}`;await((n=this.eventListeners.get(r))===null||n===void 0?void 0:n.remove()),this.eventListeners.delete(r),await v.stopNotifications({deviceId:e,service:t,characteristic:i})})}convertValue(e){return typeof e=="string"?M(e):e===void 0?new DataView(new ArrayBuffer(0)):e}convertObject(e){if(e===void 0)return;let t={};for(let i of Object.keys(e))t[i]=this.convertValue(e[i]);return t}},Pe=new ce;X();var C=class extends W{constructor(t,i){super();this.client=Pe;this.devices={};this.location=!1;this.initialized=!1;this.setupDevice=(t,i)=>new Promise(async(n,r)=>{this.devices[t.deviceId]={device:t,deviceId:t.deviceId,...i},this.client.connect(t.deviceId,s=>{this.devices[t.deviceId]?.ondisconnect&&this.devices[t.deviceId].ondisconnect(s)},i?.connectOptions).then(async()=>{let s=await this.getServices(t.deviceId);for(let o in i?.services){let l=s.find(c=>{if(c.uuid===o)return!0});if(l)for(let c in i.services[o]){if(!l.characteristics.find(f=>{if(f.uuid===c)return!0}))continue;let u=i.services[o][c];u.write&&await this.write(t,o,c,u.write,u.writeCallback,u.writeOptions),u.read&&await this.read(t,o,c,u.readCallback,u.readOptions),u.notify&&u.notifyCallback&&(await this.subscribe(t,o,c,u.notifyCallback),u.notifying=!0)}}}).catch(r),n(this.devices[t.deviceId])});this.triangulate=(t,i=1500,n=60)=>new Promise((r,s)=>{if("Accelerometer"in globalThis){if(typeof globalThis.Accelerometer=="function"){let o=new globalThis.Accelerometer({frequency:n}),l=performance.now(),c=l,u={samples:[],vector:{}},f=()=>{if(c-l<i)this.readRssi(t).then(d=>{let h=o.x,b=o.y,D=o.z;c=performance.now(),u.samples.push({x:h,y:b,z:D,rssi:d,timestamp:c})});else{let d={x:0,y:0,z:0,rssiAvg:0};u.samples.forEach(h=>{}),o.removeEventListener("reading",f)}};o.addEventListener("reading",f)}}else s(new Error("No Accelerometer API detected"))});i&&(this.location=i),t&&this.setup(t)}setup(t,i=this.location){let n=[];if(t)for(let s in t.services)n.push(s);let r={};return i||(r.androidNeverForLocation=!1),new Promise(async(s,o)=>{if(this.initialized||(await this.client.initialize(r),this.initialized=!0),t?.deviceId)s(await this.reconnect(t.deviceId));else if(t){let l={filters:[{services:n}]};this.isMobile()||(l.optionalServices=n),t?.namePrefix&&(l.filters[0].namePrefix=t.namePrefix),t?.name&&(l.filters[0].name=t.name),this.client.requestDevice(l).then(c=>{s(this.setupDevice(c,t))}).catch(o)}else this.client.requestDevice().then(l=>{s(this.setupDevice(l,t))}).catch(o)})}initialize(t){return new Promise((i,n)=>{this.client.initialize(t).then(()=>{i(!0)}).catch(n)})}requestDevice(t,i){return new Promise((n,r)=>{this.client.requestDevice(t).then(s=>{this.devices[s.deviceId]={device:s,deviceId:s.deviceId,...i},n(s)}).catch(r)})}getServices(t){return this.client.getServices(t)}connect(t,i){return new Promise((n,r)=>{this.client.connect(t.deviceId,s=>{i?.ondisconnect&&i.ondisconnect(s)},i?.connectOptions).then(s=>{n(t)}).catch(r)})}reconnect(t,i){return new Promise((n,r)=>{let s=this.isAndroid(),o=this.isMobile();console.log(t);let l=i;this.devices[t]&&(l=Object.assign(Object.assign({},this.devices[t]),l)),l?.deviceId&&delete l.deviceId,!o&&!navigator.bluetooth?.getDevices&&this.setup(l).then(c=>{n(c)}),s&&this.client.getDevices([t]).then(c=>{this.setupDevice(c[0],l).then(u=>{n(u)})}).catch(r)})}disconnect(t){if(typeof t=="object"&&t?.deviceId&&(t=t.deviceId),typeof t=="string"){let i=this.devices[t];return i.beforedisconnect&&i.beforedisconnect(this,i),delete this.devices[t],this.client.disconnect(t)}}write(t,i,n,r,s,o){return typeof t=="object"&&(t=t.deviceId),s?this.client.write(t,i,n,C.toDataView(r)).then(s):this.client.writeWithoutResponse(t,i,n,C.toDataView(r),o)}read(t,i,n,r,s){return typeof t=="object"&&(t=t.deviceId),r?this.client.read(t,i,n,s).then(r):this.client.read(t,i,n,s)}subscribe(t,i,n,r){return typeof t=="object"&&(t=t.deviceId),this.client.startNotifications(t,i,n,r)}unsubscribe(t,i,n){return typeof t=="object"&&(t=t.deviceId),this.client.stopNotifications(t,i,n)}scan(t,i){return this.client.requestLEScan(t,i)}stopScanning(){return this.client.stopLEScan()}readDescriptor(t,i,n,r,s){return this.client.readDescriptor(t.deviceId,i,n,r,s)}writeDescriptor(t,i,n,r,s,o){return this.client.writeDescriptor(t.deviceId,i,n,r,C.toDataView(s),o)}readRssi(t){return this.client.readRssi(t.deviceId)}isMobile(){let t=!1;return function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}isAndroid(){return navigator.userAgent.toLowerCase().indexOf("android")>-1}async distance(t,i,n,r,s){let o=await this.readRssi(t);if(o==0)return;let l=o/i;return l<1?Math.pow(l,10):n*Math.pow(l,r)+s}async distanceFromPhone(t,i,n){let r,s,o;return n&&(n==="nexus5"?(r=.42093,s=6.9476,o=.54992):n==="motoX"?(r=.9401940951,s=6.170094565,o=0):n==="iphone5"&&(r=.89976,s=7.7095,o=.111)),await this.distance(t,i,r,s,o)}};["BLEClient"].forEach(a=>{ee[a]&&(globalThis[a]=ee[a])});})();
/*! Capacitor: https://capacitorjs.com/ - MIT License */
