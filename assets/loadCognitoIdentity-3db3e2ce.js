import{f as re,h as ae,n as de,i as ce,j as le,k as pe,l as ue,m as he,t as me,A as ye,N as xe,p as Ee,o as we,q as ve,u as ge,w as Pe,D as be,x as Se,F as Ce,y as Ie,z as fe,B as Ae,C as Re,E as ke,G as De,H as _e,I as ze,J as $e,K as Fe,L as Ne,M as je,O as He,P as Ue,Q as Oe,R as Te,S as Me,T as qe,V as Ge,W as Le,X as Be,Y as Je,Z as Ve,_ as We,$ as Ke,a0 as Xe,a1 as Ye,a2 as Qe,a3 as Ze,a4 as i,a5 as W,a6 as et,a7 as tt,a8 as d,a9 as K,aa as S,ab as st,ac as nt,ad as ot,ae as it,af as X,ag as Y,ah as Q}from"./broadcast-693787bd.js";import"./index-4d0be3dc.js";const rt=e=>{if(e==null)return;let t;if(typeof e=="number")t=e;else if(typeof e=="string")t=re(e);else throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");if(Number.isNaN(t)||t===1/0||t===-1/0)throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");return new Date(Math.round(t*1e3))};class at{async sign(t,s,n){return t}}const dt=async(e,t,s)=>({operation:ae(t).operation,region:await de(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function ct(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(t,s)=>({signingProperties:{config:t,context:s}})}}function P(e){return{schemeId:"smithy.api#noAuth"}}const lt=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":{t.push(P());break}case"GetId":{t.push(P());break}case"GetOpenIdToken":{t.push(P());break}case"UnlinkIdentity":{t.push(P());break}default:t.push(ct(e))}return t},pt=e=>({...ce(e)}),ut=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"}),Z={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}},ht="@aws-sdk/client-cognito-identity",mt="AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",yt="3.554.0",xt={build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"},Et="./dist-cjs/index.js",wt="./dist-types/index.d.ts",vt="./dist-es/index.js",gt=!1,Pt={"@aws-crypto/sha256-browser":"3.0.0","@aws-crypto/sha256-js":"3.0.0","@aws-sdk/client-sts":"3.554.0","@aws-sdk/core":"3.554.0","@aws-sdk/credential-provider-node":"3.554.0","@aws-sdk/middleware-host-header":"3.535.0","@aws-sdk/middleware-logger":"3.535.0","@aws-sdk/middleware-recursion-detection":"3.535.0","@aws-sdk/middleware-user-agent":"3.540.0","@aws-sdk/region-config-resolver":"3.535.0","@aws-sdk/types":"3.535.0","@aws-sdk/util-endpoints":"3.540.0","@aws-sdk/util-user-agent-browser":"3.535.0","@aws-sdk/util-user-agent-node":"3.535.0","@smithy/config-resolver":"^2.2.0","@smithy/core":"^1.4.2","@smithy/fetch-http-handler":"^2.5.0","@smithy/hash-node":"^2.2.0","@smithy/invalid-dependency":"^2.2.0","@smithy/middleware-content-length":"^2.2.0","@smithy/middleware-endpoint":"^2.5.1","@smithy/middleware-retry":"^2.3.1","@smithy/middleware-serde":"^2.3.0","@smithy/middleware-stack":"^2.2.0","@smithy/node-config-provider":"^2.3.0","@smithy/node-http-handler":"^2.5.0","@smithy/protocol-http":"^3.3.0","@smithy/smithy-client":"^2.5.1","@smithy/types":"^2.12.0","@smithy/url-parser":"^2.2.0","@smithy/util-base64":"^2.3.0","@smithy/util-body-length-browser":"^2.2.0","@smithy/util-body-length-node":"^2.3.0","@smithy/util-defaults-mode-browser":"^2.2.1","@smithy/util-defaults-mode-node":"^2.3.1","@smithy/util-endpoints":"^1.2.0","@smithy/util-middleware":"^2.2.0","@smithy/util-retry":"^2.2.0","@smithy/util-utf8":"^2.3.0",tslib:"^2.6.2"},bt={"@aws-sdk/client-iam":"3.554.0","@smithy/service-client-documentation-generator":"^2.2.0","@tsconfig/node14":"1.0.3","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^14.14.31",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~4.9.5"},St={node:">=14.0.0"},Ct={"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},It=["dist-*/**"],ft={name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},At="Apache-2.0",Rt={"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},kt="https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",Dt={type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-cognito-identity"},_t={name:ht,description:mt,version:yt,scripts:xt,main:Et,types:wt,module:vt,sideEffects:gt,dependencies:Pt,devDependencies:bt,engines:St,typesVersions:Ct,files:It,author:ft,license:At,browser:Rt,"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:kt,repository:Dt},ee="required",l="fn",p="argv",y="ref",U=!0,O="isSet",g="booleanEquals",m="error",v="endpoint",u="tree",I="PartitionResult",T={[ee]:!1,type:"String"},M={[ee]:!0,default:!1,type:"Boolean"},q={[y]:"Endpoint"},te={[l]:g,[p]:[{[y]:"UseFIPS"},!0]},se={[l]:g,[p]:[{[y]:"UseDualStack"},!0]},c={},G={[l]:"getAttr",[p]:[{[y]:I},"supportsFIPS"]},L={[l]:g,[p]:[!0,{[l]:"getAttr",[p]:[{[y]:I},"supportsDualStack"]}]},B=[te],J=[se],V=[{[y]:"Region"}],zt={version:"1.0",parameters:{Region:T,UseDualStack:M,UseFIPS:M,Endpoint:T},rules:[{conditions:[{[l]:O,[p]:[q]}],rules:[{conditions:B,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:m},{conditions:J,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:m},{endpoint:{url:q,properties:c,headers:c},type:v}],type:u},{conditions:[{[l]:O,[p]:V}],rules:[{conditions:[{[l]:"aws.partition",[p]:V,assign:I}],rules:[{conditions:[te,se],rules:[{conditions:[{[l]:g,[p]:[U,G]},L],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:c,headers:c},type:v}],type:u},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:m}],type:u},{conditions:B,rules:[{conditions:[{[l]:g,[p]:[G,U]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:c,headers:c},type:v}],type:u},{error:"FIPS is enabled but this partition does not support FIPS",type:m}],type:u},{conditions:J,rules:[{conditions:[L],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:c,headers:c},type:v}],type:u},{error:"DualStack is enabled but this partition does not support DualStack",type:m}],type:u},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:c,headers:c},type:v}],type:u}],type:u},{error:"Invalid Configuration: Missing Region",type:m}]},$t=zt,Ft=(e,t={})=>le($t,{endpointParams:e,logger:t.logger});pe.aws=ue;const Nt=e=>({apiVersion:"2014-06-30",base64Decoder:(e==null?void 0:e.base64Decoder)??he,base64Encoder:(e==null?void 0:e.base64Encoder)??me,disableHostPrefix:(e==null?void 0:e.disableHostPrefix)??!1,endpointProvider:(e==null?void 0:e.endpointProvider)??Ft,extensions:(e==null?void 0:e.extensions)??[],httpAuthSchemeProvider:(e==null?void 0:e.httpAuthSchemeProvider)??lt,httpAuthSchemes:(e==null?void 0:e.httpAuthSchemes)??[{schemeId:"aws.auth#sigv4",identityProvider:t=>t.getIdentityProvider("aws.auth#sigv4"),signer:new ye},{schemeId:"smithy.api#noAuth",identityProvider:t=>t.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new at}],logger:(e==null?void 0:e.logger)??new xe,serviceId:(e==null?void 0:e.serviceId)??"Cognito Identity",urlParser:(e==null?void 0:e.urlParser)??Ee,utf8Decoder:(e==null?void 0:e.utf8Decoder)??we,utf8Encoder:(e==null?void 0:e.utf8Encoder)??ve}),jt=e=>{const t=De(e),s=()=>t().then(_e),n=Nt(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:(e==null?void 0:e.bodyLengthChecker)??ge,credentialDefaultProvider:(e==null?void 0:e.credentialDefaultProvider)??(o=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:(e==null?void 0:e.defaultUserAgentProvider)??Pe({serviceId:n.serviceId,clientVersion:_t.version}),maxAttempts:(e==null?void 0:e.maxAttempts)??be,region:(e==null?void 0:e.region)??Se("Region is missing"),requestHandler:Ce.create((e==null?void 0:e.requestHandler)??s),retryMode:(e==null?void 0:e.retryMode)??(async()=>(await s()).retryMode||Ie),sha256:(e==null?void 0:e.sha256)??fe.Sha256,streamCollector:(e==null?void 0:e.streamCollector)??Ae,useDualstackEndpoint:(e==null?void 0:e.useDualstackEndpoint)??(()=>Promise.resolve(Re)),useFipsEndpoint:(e==null?void 0:e.useFipsEndpoint)??(()=>Promise.resolve(ke))}},Ht=e=>{const t=e.httpAuthSchemes;let s=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(o){const h=t.findIndex(x=>x.schemeId===o.schemeId);h===-1?t.push(o):t.splice(h,1,o)},httpAuthSchemes(){return t},setHttpAuthSchemeProvider(o){s=o},httpAuthSchemeProvider(){return s},setCredentials(o){n=o},credentials(){return n}}},Ut=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),b=e=>e,Ot=(e,t)=>{const s={...b(He(e)),...b(ze(e)),...b($e(e)),...b(Ht(e))};return t.forEach(n=>n.configure(s)),{...e,...Fe(s),...Ne(s),...je(s),...Ut(s)}};class rs extends Ue{constructor(...[t]){const s=jt(t||{}),n=ut(s),o=Oe(n),h=Te(o),x=Me(h),C=Qe(x),E=qe(C),w=pt(E),H=Ot(w,(t==null?void 0:t.extensions)||[]);super(H),this.config=H,this.middlewareStack.use(Ge(this.config)),this.middlewareStack.use(Le(this.config)),this.middlewareStack.use(Be(this.config)),this.middlewareStack.use(Je(this.config)),this.middlewareStack.use(Ve(this.config)),this.middlewareStack.use(We(this.config)),this.middlewareStack.use(Ke(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use(Xe(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return dt}getIdentityProviderConfigProvider(){return async t=>new Ye({"aws.auth#sigv4":t.credentials})}}class r extends Ze{constructor(t){super(t),Object.setPrototypeOf(this,r.prototype)}}class f extends r{constructor(t){super({name:"InternalErrorException",$fault:"server",...t}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,f.prototype)}}class A extends r{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,A.prototype)}}class R extends r{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,R.prototype)}}class k extends r{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,k.prototype)}}class D extends r{constructor(t){super({name:"ResourceConflictException",$fault:"client",...t}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,D.prototype)}}class _ extends r{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,_.prototype)}}class z extends r{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,z.prototype)}}class $ extends r{constructor(t){super({name:"ExternalServiceException",$fault:"client",...t}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,$.prototype)}}class F extends r{constructor(t){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...t}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,F.prototype)}}class N extends r{constructor(t){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...t}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,N.prototype)}}class j extends r{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,j.prototype)}}const Tt=async(e,t)=>{const s=ie("GetCredentialsForIdentity");let n;return n=JSON.stringify(i(e)),oe(t,s,"/",void 0,n)},Mt=async(e,t)=>{const s=ie("GetId");let n;return n=JSON.stringify(i(e)),oe(t,s,"/",void 0,n)},qt=async(e,t)=>{if(e.statusCode>=300)return ne(e,t);const s=await W(e.body,t);let n={};return n=ss(s),{$metadata:a(e),...n}},Gt=async(e,t)=>{if(e.statusCode>=300)return ne(e,t);const s=await W(e.body,t);let n={};return n=i(s),{$metadata:a(e),...n}},ne=async(e,t)=>{const s={...e,body:await et(e.body,t)},n=tt(e,s.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await Vt(s);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await Kt(s);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await Xt(s);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await Yt(s);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await Qt(s);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await es(s);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await Zt(s);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await Jt(s);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await Wt(s);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await Bt(s);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await Lt(s);default:const o=s.body;return ns({output:e,parsedBody:o,errorCode:n})}},Lt=async(e,t)=>{const s=e.body,n=i(s),o=new j({$metadata:a(e),...n});return d(o,s)},Bt=async(e,t)=>{const s=e.body,n=i(s),o=new N({$metadata:a(e),...n});return d(o,s)},Jt=async(e,t)=>{const s=e.body,n=i(s),o=new $({$metadata:a(e),...n});return d(o,s)},Vt=async(e,t)=>{const s=e.body,n=i(s),o=new f({$metadata:a(e),...n});return d(o,s)},Wt=async(e,t)=>{const s=e.body,n=i(s),o=new F({$metadata:a(e),...n});return d(o,s)},Kt=async(e,t)=>{const s=e.body,n=i(s),o=new A({$metadata:a(e),...n});return d(o,s)},Xt=async(e,t)=>{const s=e.body,n=i(s),o=new R({$metadata:a(e),...n});return d(o,s)},Yt=async(e,t)=>{const s=e.body,n=i(s),o=new k({$metadata:a(e),...n});return d(o,s)},Qt=async(e,t)=>{const s=e.body,n=i(s),o=new D({$metadata:a(e),...n});return d(o,s)},Zt=async(e,t)=>{const s=e.body,n=i(s),o=new z({$metadata:a(e),...n});return d(o,s)},es=async(e,t)=>{const s=e.body,n=i(s),o=new _({$metadata:a(e),...n});return d(o,s)},ts=(e,t)=>K(e,{AccessKeyId:S,Expiration:s=>ot(rt(it(s))),SecretKey:S,SessionToken:S}),ss=(e,t)=>K(e,{Credentials:s=>ts(s),IdentityId:S}),a=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),ns=st(r),oe=async(e,t,s,n,o)=>{const{hostname:h,protocol:x="https",port:C,path:E}=await e.endpoint(),w={protocol:x,hostname:h,port:C,method:"POST",path:E.endsWith("/")?E.slice(0,-1)+s:E+s,headers:t};return n!==void 0&&(w.hostname=n),o!==void 0&&(w.body=o),new nt(w)};function ie(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class as extends X.classBuilder().ep({...Z}).m(function(t,s,n,o){return[Y(n,this.serialize,this.deserialize),Q(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(void 0,void 0).ser(Tt).de(qt).build(){}class ds extends X.classBuilder().ep({...Z}).m(function(t,s,n,o){return[Y(n,this.serialize,this.deserialize),Q(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(void 0,void 0).ser(Mt).de(Gt).build(){}export{rs as CognitoIdentityClient,as as GetCredentialsForIdentityCommand,ds as GetIdCommand};