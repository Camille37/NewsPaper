var ce=globalThis;function te(e){return(ce.__Zone_symbol_prefix||"__zone_symbol__")+e}function Et(){let e=ce.performance;function t(L){e&&e.mark&&e.mark(L)}function c(L,s){e&&e.measure&&e.measure(L,s)}t("Zone");class n{static{this.__symbol__=te}static assertZonePatched(){if(ce.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let s=n.current;for(;s.parent;)s=s.parent;return s}static get current(){return b.zone}static get currentTask(){return S}static __load_patch(s,i,o=!1){if(O.hasOwnProperty(s)){let E=ce[te("forceDuplicateZoneCheck")]===!0;if(!o&&E)throw Error("Already loaded patch: "+s)}else if(!ce["__Zone_disable_"+s]){let E="Zone:"+s;t(E),O[s]=i(ce,n,P),c(E,E)}}get parent(){return this._parent}get name(){return this._name}constructor(s,i){this._parent=s,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new f(this,this._parent&&this._parent._zoneDelegate,i)}get(s){let i=this.getZoneWith(s);if(i)return i._properties[s]}getZoneWith(s){let i=this;for(;i;){if(i._properties.hasOwnProperty(s))return i;i=i._parent}return null}fork(s){if(!s)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,s)}wrap(s,i){if(typeof s!="function")throw new Error("Expecting function got: "+s);let o=this._zoneDelegate.intercept(this,s,i),E=this;return function(){return E.runGuarded(o,this,arguments,i)}}run(s,i,o,E){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,s,i,o,E)}finally{b=b.parent}}runGuarded(s,i=null,o,E){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,s,i,o,E)}catch(H){if(this._zoneDelegate.handleError(this,H))throw H}}finally{b=b.parent}}runTask(s,i,o){if(s.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(s.zone||K).name+"; Execution: "+this.name+")");let E=s,{type:H,data:{isPeriodic:ee=!1,isRefreshable:A=!1}={}}=s;if(s.state===W&&(H===G||H===m))return;let he=s.state!=j;he&&E._transitionTo(j,d);let _e=S;S=E,b={parent:b,zone:this};try{H==m&&s.data&&!ee&&!A&&(s.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,E,i,o)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{let Q=s.state;if(Q!==W&&Q!==q)if(H==G||ee||A&&Q===k)he&&E._transitionTo(d,j,k);else{let Te=E._zoneDelegates;this._updateTaskCount(E,-1),he&&E._transitionTo(W,j,W),A&&(E._zoneDelegates=Te)}b=b.parent,S=_e}}scheduleTask(s){if(s.zone&&s.zone!==this){let o=this;for(;o;){if(o===s.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);o=o.parent}}s._transitionTo(k,W);let i=[];s._zoneDelegates=i,s._zone=this;try{s=this._zoneDelegate.scheduleTask(this,s)}catch(o){throw s._transitionTo(q,k,W),this._zoneDelegate.handleError(this,o),o}return s._zoneDelegates===i&&this._updateTaskCount(s,1),s.state==k&&s._transitionTo(d,k),s}scheduleMicroTask(s,i,o,E){return this.scheduleTask(new T(B,s,i,o,E,void 0))}scheduleMacroTask(s,i,o,E,H){return this.scheduleTask(new T(m,s,i,o,E,H))}scheduleEventTask(s,i,o,E,H){return this.scheduleTask(new T(G,s,i,o,E,H))}cancelTask(s){if(s.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(s.zone||K).name+"; Execution: "+this.name+")");if(!(s.state!==d&&s.state!==j)){s._transitionTo($,d,j);try{this._zoneDelegate.cancelTask(this,s)}catch(i){throw s._transitionTo(q,$),this._zoneDelegate.handleError(this,i),i}return this._updateTaskCount(s,-1),s._transitionTo(W,$),s.runCount=-1,s}}_updateTaskCount(s,i){let o=s._zoneDelegates;i==-1&&(s._zoneDelegates=null);for(let E=0;E<o.length;E++)o[E]._updateTaskCount(s.type,i)}}let a={name:"",onHasTask:(L,s,i,o)=>L.hasTask(i,o),onScheduleTask:(L,s,i,o)=>L.scheduleTask(i,o),onInvokeTask:(L,s,i,o,E,H)=>L.invokeTask(i,o,E,H),onCancelTask:(L,s,i,o)=>L.cancelTask(i,o)};class f{get zone(){return this._zone}constructor(s,i,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=s,this._parentDelegate=i,this._forkZS=o&&(o&&o.onFork?o:i._forkZS),this._forkDlgt=o&&(o.onFork?i:i._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:i._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:i._interceptZS),this._interceptDlgt=o&&(o.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:i._invokeZS),this._invokeDlgt=o&&(o.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:i._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:i._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:i._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:i._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let E=o&&o.onHasTask,H=i&&i._hasTaskZS;(E||H)&&(this._hasTaskZS=E?o:a,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone))}fork(s,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,s,i):new n(s,i)}intercept(s,i,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,s,i,o):i}invoke(s,i,o,E,H){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,s,i,o,E,H):i.apply(o,E)}handleError(s,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,s,i):!0}scheduleTask(s,i){let o=i;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,s,i),o||(o=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==B)V(i);else throw new Error("Task is missing scheduleFn.");return o}invokeTask(s,i,o,E){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,s,i,o,E):i.callback.apply(o,E)}cancelTask(s,i){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,s,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");o=i.cancelFn(i)}return o}hasTask(s,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,s,i)}catch(o){this.handleError(s,o)}}_updateTaskCount(s,i){let o=this._taskCounts,E=o[s],H=o[s]=E+i;if(H<0)throw new Error("More tasks executed then were scheduled.");if(E==0||H==0){let ee={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:s};this.hasTask(this._zone,ee)}}}class T{constructor(s,i,o,E,H,ee){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=s,this.source=i,this.data=E,this.scheduleFn=H,this.cancelFn=ee,!o)throw new Error("callback is not defined");this.callback=o;let A=this;s===G&&E&&E.useG?this.invoke=T.invokeTask:this.invoke=function(){return T.invokeTask.call(ce,A,this,arguments)}}static invokeTask(s,i,o){s||(s=this),J++;try{return s.runCount++,s.zone.runTask(s,i,o)}finally{J==1&&Y(),J--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(W,k)}_transitionTo(s,i,o){if(this._state===i||this._state===o)this._state=s,s==W&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${s}', expecting state '${i}'${o?" or '"+o+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let g=te("setTimeout"),y=te("Promise"),N=te("then"),_=[],w=!1,M;function x(L){if(M||ce[y]&&(M=ce[y].resolve(0)),M){let s=M[N];s||(s=M.then),s.call(M,L)}else ce[g](L,0)}function V(L){J===0&&_.length===0&&x(Y),L&&_.push(L)}function Y(){if(!w){for(w=!0;_.length;){let L=_;_=[];for(let s=0;s<L.length;s++){let i=L[s];try{i.zone.runTask(i,null,null)}catch(o){P.onUnhandledError(o)}}}P.microtaskDrainDone(),w=!1}}let K={name:"NO ZONE"},W="notScheduled",k="scheduling",d="scheduled",j="running",$="canceling",q="unknown",B="microTask",m="macroTask",G="eventTask",O={},P={symbol:te,currentZoneFrame:()=>b,onUnhandledError:F,microtaskDrainDone:F,scheduleMicroTask:V,showUncaughtError:()=>!n[te("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:F,patchMethod:()=>F,bindArguments:()=>[],patchThen:()=>F,patchMacroTask:()=>F,patchEventPrototype:()=>F,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>F,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>F,wrapWithCurrentZone:()=>F,filterProperties:()=>[],attachOriginToPatched:()=>F,_redefineProperty:()=>F,patchCallbacks:()=>F,nativeScheduleMicroTask:x},b={parent:null,zone:new n(null,null)},S=null,J=0;function F(){}return c("Zone","Zone"),n}function mt(){let e=globalThis,t=e[te("forceDuplicateZoneCheck")]===!0;if(e.Zone&&(t||typeof e.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return e.Zone??=Et(),e.Zone}var be=Object.getOwnPropertyDescriptor,Ze=Object.defineProperty,xe=Object.getPrototypeOf,pt=Object.create,yt=Array.prototype.slice,$e="addEventListener",He="removeEventListener",Me=te($e),Le=te(He),ae="true",le="false",we=te("");function Be(e,t){return Zone.current.wrap(e,t)}function Ue(e,t,c,n,a){return Zone.current.scheduleMacroTask(e,t,c,n,a)}var Z=te,Se=typeof window<"u",ye=Se?window:void 0,X=Se&&ye||globalThis,kt="removeAttribute";function ze(e,t){for(let c=e.length-1;c>=0;c--)typeof e[c]=="function"&&(e[c]=Be(e[c],t+"_"+c));return e}function vt(e,t){let c=e.constructor.name;for(let n=0;n<t.length;n++){let a=t[n],f=e[a];if(f){let T=be(e,a);if(!rt(T))continue;e[a]=(g=>{let y=function(){return g.apply(this,ze(arguments,c+"."+a))};return fe(y,g),y})(f)}}}function rt(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var ot=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Oe=!("nw"in X)&&typeof X.process<"u"&&X.process.toString()==="[object process]",Ve=!Oe&&!ot&&!!(Se&&ye.HTMLElement),st=typeof X.process<"u"&&X.process.toString()==="[object process]"&&!ot&&!!(Se&&ye.HTMLElement),Ne={},bt=Z("enable_beforeunload"),Ke=function(e){if(e=e||X.event,!e)return;let t=Ne[e.type];t||(t=Ne[e.type]=Z("ON_PROPERTY"+e.type));let c=this||e.target||X,n=c[t],a;if(Ve&&c===ye&&e.type==="error"){let f=e;a=n&&n.call(this,f.message,f.filename,f.lineno,f.colno,f.error),a===!0&&e.preventDefault()}else a=n&&n.apply(this,arguments),e.type==="beforeunload"&&X[bt]&&typeof a=="string"?e.returnValue=a:a!=null&&!a&&e.preventDefault();return a};function Je(e,t,c){let n=be(e,t);if(!n&&c&&be(c,t)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let a=Z("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete n.writable,delete n.value;let f=n.get,T=n.set,g=t.slice(2),y=Ne[g];y||(y=Ne[g]=Z("ON_PROPERTY"+g)),n.set=function(N){let _=this;if(!_&&e===X&&(_=X),!_)return;typeof _[y]=="function"&&_.removeEventListener(g,Ke),T&&T.call(_,null),_[y]=N,typeof N=="function"&&_.addEventListener(g,Ke,!1)},n.get=function(){let N=this;if(!N&&e===X&&(N=X),!N)return null;let _=N[y];if(_)return _;if(f){let w=f.call(this);if(w)return n.set.call(this,w),typeof N[kt]=="function"&&N.removeAttribute(t),w}return null},Ze(e,t,n),e[a]=!0}function it(e,t,c){if(t)for(let n=0;n<t.length;n++)Je(e,"on"+t[n],c);else{let n=[];for(let a in e)a.slice(0,2)=="on"&&n.push(a);for(let a=0;a<n.length;a++)Je(e,n[a],c)}}var oe=Z("originalInstance");function ve(e){let t=X[e];if(!t)return;X[Z(e)]=t,X[e]=function(){let a=ze(arguments,e);switch(a.length){case 0:this[oe]=new t;break;case 1:this[oe]=new t(a[0]);break;case 2:this[oe]=new t(a[0],a[1]);break;case 3:this[oe]=new t(a[0],a[1],a[2]);break;case 4:this[oe]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},fe(X[e],t);let c=new t(function(){}),n;for(n in c)e==="XMLHttpRequest"&&n==="responseBlob"||function(a){typeof c[a]=="function"?X[e].prototype[a]=function(){return this[oe][a].apply(this[oe],arguments)}:Ze(X[e].prototype,a,{set:function(f){typeof f=="function"?(this[oe][a]=Be(f,e+"."+a),fe(this[oe][a],f)):this[oe][a]=f},get:function(){return this[oe][a]}})}(n);for(n in t)n!=="prototype"&&t.hasOwnProperty(n)&&(X[e][n]=t[n])}function ue(e,t,c){let n=e;for(;n&&!n.hasOwnProperty(t);)n=xe(n);!n&&e[t]&&(n=e);let a=Z(t),f=null;if(n&&(!(f=n[a])||!n.hasOwnProperty(a))){f=n[a]=n[t];let T=n&&be(n,t);if(rt(T)){let g=c(f,a,t);n[t]=function(){return g(this,arguments)},fe(n[t],f)}}return f}function wt(e,t,c){let n=null;function a(f){let T=f.data;return T.args[T.cbIdx]=function(){f.invoke.apply(this,arguments)},n.apply(T.target,T.args),f}n=ue(e,t,f=>function(T,g){let y=c(T,g);return y.cbIdx>=0&&typeof g[y.cbIdx]=="function"?Ue(y.name,g[y.cbIdx],y,a):f.apply(T,g)})}function fe(e,t){e[Z("OriginalDelegate")]=t}var Qe=!1,Ae=!1;function Pt(){try{let e=ye.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function Rt(){if(Qe)return Ae;Qe=!0;try{let e=ye.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ae=!0)}catch{}return Ae}function et(e){return typeof e=="function"}function tt(e){return typeof e=="number"}var pe=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{pe=!1}var Nt={useG:!0},ne={},ct={},at=new RegExp("^"+we+"(\\w+)(true|false)$"),lt=Z("propagationStopped");function ut(e,t){let c=(t?t(e):e)+le,n=(t?t(e):e)+ae,a=we+c,f=we+n;ne[e]={},ne[e][le]=a,ne[e][ae]=f}function St(e,t,c,n){let a=n&&n.add||$e,f=n&&n.rm||He,T=n&&n.listeners||"eventListeners",g=n&&n.rmAll||"removeAllListeners",y=Z(a),N="."+a+":",_="prependListener",w="."+_+":",M=function(k,d,j){if(k.isRemoved)return;let $=k.callback;typeof $=="object"&&$.handleEvent&&(k.callback=m=>$.handleEvent(m),k.originalDelegate=$);let q;try{k.invoke(k,d,[j])}catch(m){q=m}let B=k.options;if(B&&typeof B=="object"&&B.once){let m=k.originalDelegate?k.originalDelegate:k.callback;d[f].call(d,j.type,m,B)}return q};function x(k,d,j){if(d=d||e.event,!d)return;let $=k||d.target||e,q=$[ne[d.type][j?ae:le]];if(q){let B=[];if(q.length===1){let m=M(q[0],$,d);m&&B.push(m)}else{let m=q.slice();for(let G=0;G<m.length&&!(d&&d[lt]===!0);G++){let O=M(m[G],$,d);O&&B.push(O)}}if(B.length===1)throw B[0];for(let m=0;m<B.length;m++){let G=B[m];t.nativeScheduleMicroTask(()=>{throw G})}}}let V=function(k){return x(this,k,!1)},Y=function(k){return x(this,k,!0)};function K(k,d){if(!k)return!1;let j=!0;d&&d.useG!==void 0&&(j=d.useG);let $=d&&d.vh,q=!0;d&&d.chkDup!==void 0&&(q=d.chkDup);let B=!1;d&&d.rt!==void 0&&(B=d.rt);let m=k;for(;m&&!m.hasOwnProperty(a);)m=xe(m);if(!m&&k[a]&&(m=k),!m||m[y])return!1;let G=d&&d.eventNameToString,O={},P=m[y]=m[a],b=m[Z(f)]=m[f],S=m[Z(T)]=m[T],J=m[Z(g)]=m[g],F;d&&d.prepend&&(F=m[Z(d.prepend)]=m[d.prepend]);function L(r,u){return!pe&&typeof r=="object"&&r?!!r.capture:!pe||!u?r:typeof r=="boolean"?{capture:r,passive:!0}:r?typeof r=="object"&&r.passive!==!1?{...r,passive:!0}:r:{passive:!0}}let s=function(r){if(!O.isExisting)return P.call(O.target,O.eventName,O.capture?Y:V,O.options)},i=function(r){if(!r.isRemoved){let u=ne[r.eventName],v;u&&(v=u[r.capture?ae:le]);let R=v&&r.target[v];if(R){for(let p=0;p<R.length;p++)if(R[p]===r){R.splice(p,1),r.isRemoved=!0,r.removeAbortListener&&(r.removeAbortListener(),r.removeAbortListener=null),R.length===0&&(r.allRemoved=!0,r.target[v]=null);break}}}if(r.allRemoved)return b.call(r.target,r.eventName,r.capture?Y:V,r.options)},o=function(r){return P.call(O.target,O.eventName,r.invoke,O.options)},E=function(r){return F.call(O.target,O.eventName,r.invoke,O.options)},H=function(r){return b.call(r.target,r.eventName,r.invoke,r.options)},ee=j?s:o,A=j?i:H,he=function(r,u){let v=typeof u;return v==="function"&&r.callback===u||v==="object"&&r.originalDelegate===u},_e=d&&d.diff?d.diff:he,Q=Zone[Z("UNPATCHED_EVENTS")],Te=e[Z("PASSIVE_EVENTS")];function h(r){if(typeof r=="object"&&r!==null){let u={...r};return r.signal&&(u.signal=r.signal),u}return r}let l=function(r,u,v,R,p=!1,C=!1){return function(){let I=this||e,D=arguments[0];d&&d.transferEventName&&(D=d.transferEventName(D));let U=arguments[1];if(!U)return r.apply(this,arguments);if(Oe&&D==="uncaughtException")return r.apply(this,arguments);let z=!1;if(typeof U!="function"){if(!U.handleEvent)return r.apply(this,arguments);z=!0}if($&&!$(r,U,I,arguments))return;let de=pe&&!!Te&&Te.indexOf(D)!==-1,se=h(L(arguments[2],de)),ge=se?.signal;if(ge?.aborted)return;if(Q){for(let ie=0;ie<Q.length;ie++)if(D===Q[ie])return de?r.call(I,D,U,se):r.apply(this,arguments)}let Ie=se?typeof se=="boolean"?!0:se.capture:!1,Fe=se&&typeof se=="object"?se.once:!1,gt=Zone.current,De=ne[D];De||(ut(D,G),De=ne[D]);let We=De[Ie?ae:le],Ee=I[We],qe=!1;if(Ee){if(qe=!0,q){for(let ie=0;ie<Ee.length;ie++)if(_e(Ee[ie],U))return}}else Ee=I[We]=[];let Pe,Xe=I.constructor.name,Ye=ct[Xe];Ye&&(Pe=Ye[D]),Pe||(Pe=Xe+u+(G?G(D):D)),O.options=se,Fe&&(O.options.once=!1),O.target=I,O.capture=Ie,O.eventName=D,O.isExisting=qe;let ke=j?Nt:void 0;ke&&(ke.taskData=O),ge&&(O.options.signal=void 0);let re=gt.scheduleEventTask(Pe,U,ke,v,R);if(ge){O.options.signal=ge;let ie=()=>re.zone.cancelTask(re);r.call(ge,"abort",ie,{once:!0}),re.removeAbortListener=()=>ge.removeEventListener("abort",ie)}if(O.target=null,ke&&(ke.taskData=null),Fe&&(O.options.once=!0),!pe&&typeof re.options=="boolean"||(re.options=se),re.target=I,re.capture=Ie,re.eventName=D,z&&(re.originalDelegate=U),C?Ee.unshift(re):Ee.push(re),p)return I}};return m[a]=l(P,N,ee,A,B),F&&(m[_]=l(F,w,E,A,B,!0)),m[f]=function(){let r=this||e,u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));let v=arguments[2],R=v?typeof v=="boolean"?!0:v.capture:!1,p=arguments[1];if(!p)return b.apply(this,arguments);if($&&!$(b,p,r,arguments))return;let C=ne[u],I;C&&(I=C[R?ae:le]);let D=I&&r[I];if(D)for(let U=0;U<D.length;U++){let z=D[U];if(_e(z,p)){if(D.splice(U,1),z.isRemoved=!0,D.length===0&&(z.allRemoved=!0,r[I]=null,!R&&typeof u=="string")){let de=we+"ON_PROPERTY"+u;r[de]=null}return z.zone.cancelTask(z),B?r:void 0}}return b.apply(this,arguments)},m[T]=function(){let r=this||e,u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));let v=[],R=ft(r,G?G(u):u);for(let p=0;p<R.length;p++){let C=R[p],I=C.originalDelegate?C.originalDelegate:C.callback;v.push(I)}return v},m[g]=function(){let r=this||e,u=arguments[0];if(u){d&&d.transferEventName&&(u=d.transferEventName(u));let v=ne[u];if(v){let R=v[le],p=v[ae],C=r[R],I=r[p];if(C){let D=C.slice();for(let U=0;U<D.length;U++){let z=D[U],de=z.originalDelegate?z.originalDelegate:z.callback;this[f].call(this,u,de,z.options)}}if(I){let D=I.slice();for(let U=0;U<D.length;U++){let z=D[U],de=z.originalDelegate?z.originalDelegate:z.callback;this[f].call(this,u,de,z.options)}}}}else{let v=Object.keys(r);for(let R=0;R<v.length;R++){let p=v[R],C=at.exec(p),I=C&&C[1];I&&I!=="removeListener"&&this[g].call(this,I)}this[g].call(this,"removeListener")}if(B)return this},fe(m[a],P),fe(m[f],b),J&&fe(m[g],J),S&&fe(m[T],S),!0}let W=[];for(let k=0;k<c.length;k++)W[k]=K(c[k],n);return W}function ft(e,t){if(!t){let f=[];for(let T in e){let g=at.exec(T),y=g&&g[1];if(y&&(!t||y===t)){let N=e[T];if(N)for(let _=0;_<N.length;_++)f.push(N[_])}}return f}let c=ne[t];c||(ut(t),c=ne[t]);let n=e[c[le]],a=e[c[ae]];return n?a?n.concat(a):n.slice():a?a.slice():[]}function Ot(e,t){let c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(a,f){a[lt]=!0,n&&n.apply(a,f)})}function Ct(e,t){t.patchMethod(e,"queueMicrotask",c=>function(n,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}var Re=Z("zoneTask");function me(e,t,c,n){let a=null,f=null;t+=n,c+=n;let T={};function g(N){let _=N.data;_.args[0]=function(){return N.invoke.apply(this,arguments)};let w=a.apply(e,_.args);return tt(w)?_.handleId=w:(_.handle=w,_.isRefreshable=et(w.refresh)),N}function y(N){let{handle:_,handleId:w}=N.data;return f.call(e,_??w)}a=ue(e,t,N=>function(_,w){if(et(w[0])){let M={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?w[1]||0:void 0,args:w},x=w[0];w[0]=function(){try{return x.apply(this,arguments)}finally{let{handle:j,handleId:$,isPeriodic:q,isRefreshable:B}=M;!q&&!B&&($?delete T[$]:j&&(j[Re]=null))}};let V=Ue(t,w[0],M,g,y);if(!V)return V;let{handleId:Y,handle:K,isRefreshable:W,isPeriodic:k}=V.data;if(Y)T[Y]=V;else if(K&&(K[Re]=V,W&&!k)){let d=K.refresh;K.refresh=function(){let{zone:j,state:$}=V;return $==="notScheduled"?(V._state="scheduled",j._updateTaskCount(V,1)):$==="running"&&(V._state="scheduling"),d.call(this)}}return K??Y??V}else return N.apply(e,w)}),f=ue(e,c,N=>function(_,w){let M=w[0],x;tt(M)?(x=T[M],delete T[M]):(x=M?.[Re],x?M[Re]=null:x=M),x?.type?x.cancelFn&&x.zone.cancelTask(x):N.apply(e,w)})}function It(e,t){let{isBrowser:c,isMix:n}=t.getGlobalObjects();if(!c&&!n||!e.customElements||!("customElements"in e))return;let a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",a)}function Dt(e,t){if(Zone[t.symbol("patchEventTarget")])return;let{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:a,FALSE_STR:f,ZONE_SYMBOL_PREFIX:T}=t.getGlobalObjects();for(let y=0;y<c.length;y++){let N=c[y],_=N+f,w=N+a,M=T+_,x=T+w;n[N]={},n[N][f]=M,n[N][a]=x}let g=e.EventTarget;if(!(!g||!g.prototype))return t.patchEventTarget(e,t,[g&&g.prototype]),!0}function Mt(e,t){t.patchEventPrototype(e,t)}function ht(e,t,c){if(!c||c.length===0)return t;let n=c.filter(f=>f.target===e);if(!n||n.length===0)return t;let a=n[0].ignoreProperties;return t.filter(f=>a.indexOf(f)===-1)}function nt(e,t,c,n){if(!e)return;let a=ht(e,t,c);it(e,a,n)}function je(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function Lt(e,t){if(Oe&&!st||Zone[e.symbol("patchEvents")])return;let c=t.__Zone_ignore_on_properties,n=[];if(Ve){let a=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let f=Pt()?[{target:a,ignoreProperties:["error"]}]:[];nt(a,je(a),c&&c.concat(f),xe(a))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<n.length;a++){let f=t[n[a]];f&&f.prototype&&nt(f.prototype,je(f.prototype),c)}}function At(e){e.__load_patch("legacy",t=>{let c=t[e.__symbol__("legacyPatch")];c&&c()}),e.__load_patch("timers",t=>{let c="set",n="clear";me(t,c,n,"Timeout"),me(t,c,n,"Interval"),me(t,c,n,"Immediate")}),e.__load_patch("requestAnimationFrame",t=>{me(t,"request","cancel","AnimationFrame"),me(t,"mozRequest","mozCancel","AnimationFrame"),me(t,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(t,c)=>{let n=["alert","prompt","confirm"];for(let a=0;a<n.length;a++){let f=n[a];ue(t,f,(T,g,y)=>function(N,_){return c.current.run(T,t,_,y)})}}),e.__load_patch("EventTarget",(t,c,n)=>{Mt(t,n),Dt(t,n);let a=t.XMLHttpRequestEventTarget;a&&a.prototype&&n.patchEventTarget(t,n,[a.prototype])}),e.__load_patch("MutationObserver",(t,c,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(t,c,n)=>{ve("IntersectionObserver")}),e.__load_patch("FileReader",(t,c,n)=>{ve("FileReader")}),e.__load_patch("on_property",(t,c,n)=>{Lt(n,t)}),e.__load_patch("customElements",(t,c,n)=>{It(t,n)}),e.__load_patch("XHR",(t,c)=>{N(t);let n=Z("xhrTask"),a=Z("xhrSync"),f=Z("xhrListener"),T=Z("xhrScheduled"),g=Z("xhrURL"),y=Z("xhrErrorBeforeScheduled");function N(_){let w=_.XMLHttpRequest;if(!w)return;let M=w.prototype;function x(P){return P[n]}let V=M[Me],Y=M[Le];if(!V){let P=_.XMLHttpRequestEventTarget;if(P){let b=P.prototype;V=b[Me],Y=b[Le]}}let K="readystatechange",W="scheduled";function k(P){let b=P.data,S=b.target;S[T]=!1,S[y]=!1;let J=S[f];V||(V=S[Me],Y=S[Le]),J&&Y.call(S,K,J);let F=S[f]=()=>{if(S.readyState===S.DONE)if(!b.aborted&&S[T]&&P.state===W){let s=S[c.__symbol__("loadfalse")];if(S.status!==0&&s&&s.length>0){let i=P.invoke;P.invoke=function(){let o=S[c.__symbol__("loadfalse")];for(let E=0;E<o.length;E++)o[E]===P&&o.splice(E,1);!b.aborted&&P.state===W&&i.call(P)},s.push(P)}else P.invoke()}else!b.aborted&&S[T]===!1&&(S[y]=!0)};return V.call(S,K,F),S[n]||(S[n]=P),G.apply(S,b.args),S[T]=!0,P}function d(){}function j(P){let b=P.data;return b.aborted=!0,O.apply(b.target,b.args)}let $=ue(M,"open",()=>function(P,b){return P[a]=b[2]==!1,P[g]=b[1],$.apply(P,b)}),q="XMLHttpRequest.send",B=Z("fetchTaskAborting"),m=Z("fetchTaskScheduling"),G=ue(M,"send",()=>function(P,b){if(c.current[m]===!0||P[a])return G.apply(P,b);{let S={target:P,url:P[g],isPeriodic:!1,args:b,aborted:!1},J=Ue(q,d,S,k,j);P&&P[y]===!0&&!S.aborted&&J.state===W&&J.invoke()}}),O=ue(M,"abort",()=>function(P,b){let S=x(P);if(S&&typeof S.type=="string"){if(S.cancelFn==null||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(c.current[B]===!0)return O.apply(P,b)})}}),e.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&vt(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(t,c)=>{function n(a){return function(f){ft(t,a).forEach(g=>{let y=t.PromiseRejectionEvent;if(y){let N=new y(a,{promise:f.promise,reason:f.rejection});g.invoke(N)}})}}t.PromiseRejectionEvent&&(c[Z("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[Z("rejectionHandledHandler")]=n("rejectionhandled"))}),e.__load_patch("queueMicrotask",(t,c,n)=>{Ct(t,n)})}function jt(e){e.__load_patch("ZoneAwarePromise",(t,c,n)=>{let a=Object.getOwnPropertyDescriptor,f=Object.defineProperty;function T(h){if(h&&h.toString===Object.prototype.toString){let l=h.constructor&&h.constructor.name;return(l||"")+": "+JSON.stringify(h)}return h?h.toString():Object.prototype.toString.call(h)}let g=n.symbol,y=[],N=t[g("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,_=g("Promise"),w=g("then"),M="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){let l=h&&h.rejection;l?console.error("Unhandled Promise rejection:",l instanceof Error?l.message:l,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",l,l instanceof Error?l.stack:void 0):console.error(h)}},n.microtaskDrainDone=()=>{for(;y.length;){let h=y.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(l){V(l)}}};let x=g("unhandledPromiseRejectionHandler");function V(h){n.onUnhandledError(h);try{let l=c[x];typeof l=="function"&&l.call(this,h)}catch{}}function Y(h){return h&&h.then}function K(h){return h}function W(h){return A.reject(h)}let k=g("state"),d=g("value"),j=g("finally"),$=g("parentPromiseValue"),q=g("parentPromiseState"),B="Promise.then",m=null,G=!0,O=!1,P=0;function b(h,l){return r=>{try{L(h,l,r)}catch(u){L(h,!1,u)}}}let S=function(){let h=!1;return function(r){return function(){h||(h=!0,r.apply(null,arguments))}}},J="Promise resolved with itself",F=g("currentTaskTrace");function L(h,l,r){let u=S();if(h===r)throw new TypeError(J);if(h[k]===m){let v=null;try{(typeof r=="object"||typeof r=="function")&&(v=r&&r.then)}catch(R){return u(()=>{L(h,!1,R)})(),h}if(l!==O&&r instanceof A&&r.hasOwnProperty(k)&&r.hasOwnProperty(d)&&r[k]!==m)i(r),L(h,r[k],r[d]);else if(l!==O&&typeof v=="function")try{v.call(r,u(b(h,l)),u(b(h,!1)))}catch(R){u(()=>{L(h,!1,R)})()}else{h[k]=l;let R=h[d];if(h[d]=r,h[j]===j&&l===G&&(h[k]=h[q],h[d]=h[$]),l===O&&r instanceof Error){let p=c.currentTask&&c.currentTask.data&&c.currentTask.data[M];p&&f(r,F,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<R.length;)o(h,R[p++],R[p++],R[p++],R[p++]);if(R.length==0&&l==O){h[k]=P;let p=r;try{throw new Error("Uncaught (in promise): "+T(r)+(r&&r.stack?`
`+r.stack:""))}catch(C){p=C}N&&(p.throwOriginal=!0),p.rejection=r,p.promise=h,p.zone=c.current,p.task=c.currentTask,y.push(p),n.scheduleMicroTask()}}}return h}let s=g("rejectionHandledHandler");function i(h){if(h[k]===P){try{let l=c[s];l&&typeof l=="function"&&l.call(this,{rejection:h[d],promise:h})}catch{}h[k]=O;for(let l=0;l<y.length;l++)h===y[l].promise&&y.splice(l,1)}}function o(h,l,r,u,v){i(h);let R=h[k],p=R?typeof u=="function"?u:K:typeof v=="function"?v:W;l.scheduleMicroTask(B,()=>{try{let C=h[d],I=!!r&&j===r[j];I&&(r[$]=C,r[q]=R);let D=l.run(p,void 0,I&&p!==W&&p!==K?[]:[C]);L(r,!0,D)}catch(C){L(r,!1,C)}},r)}let E="function ZoneAwarePromise() { [native code] }",H=function(){},ee=t.AggregateError;class A{static toString(){return E}static resolve(l){return l instanceof A?l:L(new this(null),G,l)}static reject(l){return L(new this(null),O,l)}static withResolvers(){let l={};return l.promise=new A((r,u)=>{l.resolve=r,l.reject=u}),l}static any(l){if(!l||typeof l[Symbol.iterator]!="function")return Promise.reject(new ee([],"All promises were rejected"));let r=[],u=0;try{for(let p of l)u++,r.push(A.resolve(p))}catch{return Promise.reject(new ee([],"All promises were rejected"))}if(u===0)return Promise.reject(new ee([],"All promises were rejected"));let v=!1,R=[];return new A((p,C)=>{for(let I=0;I<r.length;I++)r[I].then(D=>{v||(v=!0,p(D))},D=>{R.push(D),u--,u===0&&(v=!0,C(new ee(R,"All promises were rejected")))})})}static race(l){let r,u,v=new this((C,I)=>{r=C,u=I});function R(C){r(C)}function p(C){u(C)}for(let C of l)Y(C)||(C=this.resolve(C)),C.then(R,p);return v}static all(l){return A.allWithCallback(l)}static allSettled(l){return(this&&this.prototype instanceof A?this:A).allWithCallback(l,{thenCallback:u=>({status:"fulfilled",value:u}),errorCallback:u=>({status:"rejected",reason:u})})}static allWithCallback(l,r){let u,v,R=new this((D,U)=>{u=D,v=U}),p=2,C=0,I=[];for(let D of l){Y(D)||(D=this.resolve(D));let U=C;try{D.then(z=>{I[U]=r?r.thenCallback(z):z,p--,p===0&&u(I)},z=>{r?(I[U]=r.errorCallback(z),p--,p===0&&u(I)):v(z)})}catch(z){v(z)}p++,C++}return p-=2,p===0&&u(I),R}constructor(l){let r=this;if(!(r instanceof A))throw new Error("Must be an instanceof Promise.");r[k]=m,r[d]=[];try{let u=S();l&&l(u(b(r,G)),u(b(r,O)))}catch(u){L(r,!1,u)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(l,r){let u=this.constructor?.[Symbol.species];(!u||typeof u!="function")&&(u=this.constructor||A);let v=new u(H),R=c.current;return this[k]==m?this[d].push(R,v,l,r):o(this,R,v,l,r),v}catch(l){return this.then(null,l)}finally(l){let r=this.constructor?.[Symbol.species];(!r||typeof r!="function")&&(r=A);let u=new r(H);u[j]=j;let v=c.current;return this[k]==m?this[d].push(v,u,l,l):o(this,v,u,l,l),u}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;let he=t[_]=t.Promise;t.Promise=A;let _e=g("thenPatched");function Q(h){let l=h.prototype,r=a(l,"then");if(r&&(r.writable===!1||!r.configurable))return;let u=l.then;l[w]=u,h.prototype.then=function(v,R){return new A((C,I)=>{u.call(this,C,I)}).then(v,R)},h[_e]=!0}n.patchThen=Q;function Te(h){return function(l,r){let u=h.apply(l,r);if(u instanceof A)return u;let v=u.constructor;return v[_e]||Q(v),u}}return he&&(Q(he),ue(t,"fetch",h=>Te(h))),Promise[c.__symbol__("uncaughtPromiseErrors")]=y,A})}function Zt(e){e.__load_patch("toString",t=>{let c=Function.prototype.toString,n=Z("OriginalDelegate"),a=Z("Promise"),f=Z("Error"),T=function(){if(typeof this=="function"){let _=this[n];if(_)return typeof _=="function"?c.call(_):Object.prototype.toString.call(_);if(this===Promise){let w=t[a];if(w)return c.call(w)}if(this===Error){let w=t[f];if(w)return c.call(w)}}return c.call(this)};T[n]=c,Function.prototype.toString=T;let g=Object.prototype.toString,y="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?y:g.call(this)}})}function xt(e,t,c,n,a){let f=Zone.__symbol__(n);if(t[f])return;let T=t[f]=t[n];t[n]=function(g,y,N){return y&&y.prototype&&a.forEach(function(_){let w=`${c}.${n}::`+_,M=y.prototype;try{if(M.hasOwnProperty(_)){let x=e.ObjectGetOwnPropertyDescriptor(M,_);x&&x.value?(x.value=e.wrapWithCurrentZone(x.value,w),e._redefineProperty(y.prototype,_,x)):M[_]&&(M[_]=e.wrapWithCurrentZone(M[_],w))}else M[_]&&(M[_]=e.wrapWithCurrentZone(M[_],w))}catch{}}),T.call(t,g,y,N)},e.attachOriginToPatched(t[n],T)}function $t(e){e.__load_patch("util",(t,c,n)=>{let a=je(t);n.patchOnProperties=it,n.patchMethod=ue,n.bindArguments=ze,n.patchMacroTask=wt;let f=c.__symbol__("BLACK_LISTED_EVENTS"),T=c.__symbol__("UNPATCHED_EVENTS");t[T]&&(t[f]=t[T]),t[f]&&(c[f]=c[T]=t[f]),n.patchEventPrototype=Ot,n.patchEventTarget=St,n.isIEOrEdge=Rt,n.ObjectDefineProperty=Ze,n.ObjectGetOwnPropertyDescriptor=be,n.ObjectCreate=pt,n.ArraySlice=yt,n.patchClass=ve,n.wrapWithCurrentZone=Be,n.filterProperties=ht,n.attachOriginToPatched=fe,n._redefineProperty=Object.defineProperty,n.patchCallbacks=xt,n.getGlobalObjects=()=>({globalSources:ct,zoneSymbolEventNames:ne,eventNames:a,isBrowser:Ve,isMix:st,isNode:Oe,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:we,ADD_EVENT_LISTENER_STR:$e,REMOVE_EVENT_LISTENER_STR:He})})}function Ht(e){jt(e),Zt(e),$t(e)}var dt=mt();Ht(dt);At(dt);var Bt=":";var Ge=class{visitText(t,c){return t.value}visitContainer(t,c){return`[${t.children.map(n=>n.visit(this)).join(", ")}]`}visitIcu(t,c){let n=Object.keys(t.cases).map(a=>`${a} {${t.cases[a].visit(this)}}`);return`{${t.expression}, ${t.type}, ${n.join(", ")}}`}visitTagPlaceholder(t,c){return t.isVoid?`<ph tag name="${t.startName}"/>`:`<ph tag name="${t.startName}">${t.children.map(n=>n.visit(this)).join(", ")}</ph name="${t.closeName}">`}visitPlaceholder(t,c){return t.value?`<ph name="${t.name}">${t.value}</ph>`:`<ph name="${t.name}"/>`}visitIcuPlaceholder(t,c){return`<ph icu name="${t.name}">${t.value.visit(this)}</ph>`}visitBlockPlaceholder(t,c){return`<ph block name="${t.startName}">${t.children.map(n=>n.visit(this)).join(", ")}</ph name="${t.closeName}">`}},Vt=new Ge;var _t;(function(e){e[e.Little=0]="Little",e[e.Big=1]="Big"})(_t||(_t={}));function Ut(e,t){for(let c=1,n=1;c<e.length;c++,n++)if(t[n]==="\\")n++;else if(e[c]===Bt)return c;throw new Error(`Unterminated $localize metadata block in "${t}".`)}var Ce=function(e,...t){if(Ce.translate){let n=Ce.translate(e,t);e=n[0],t=n[1]}let c=Tt(e[0],e.raw[0]);for(let n=1;n<e.length;n++)c+=t[n-1]+Tt(e[n],e.raw[n]);return c},zt=":";function Tt(e,t){return t.charAt(0)===zt?e.substring(Ut(e,t)+1):e}globalThis.$localize=Ce;