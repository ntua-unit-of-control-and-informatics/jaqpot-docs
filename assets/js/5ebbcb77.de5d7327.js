"use strict";(self.webpackChunkeuclia_docs=self.webpackChunkeuclia_docs||[]).push([[593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,A=function(e,t){if(null==e)return{};var a,n,A={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,A=e.mdxType,o=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=l(a),u=A,g=p["".concat(d,".").concat(u)]||p[u]||c[u]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:A,i[1]=r;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(7462),A=(a(7294),a(3905));const o={id:"Rsdk",title:"R client",sidebar_label:"R",keywords:["jaqpot","deploy machine learning models","API","models","integrate models","deploy R models","R"]},i=void 0,r={unversionedId:"Rsdk",id:"Rsdk",title:"R client",description:"Integrate with Jaqpot API through R applications",source:"@site/docs/Rsdk.md",sourceDirName:".",slug:"/Rsdk",permalink:"/docs/Rsdk",draft:!1,tags:[],version:"current",frontMatter:{id:"Rsdk",title:"R client",sidebar_label:"R",keywords:["jaqpot","deploy machine learning models","API","models","integrate models","deploy R models","R"]},sidebar:"someSidebar",previous:{title:"Go",permalink:"/docs/golang"},next:{title:"Spam Detector (Spam vs Ham)",permalink:"/docs/spam"}},d={},l=[{value:"Integrate with Jaqpot API through R applications",id:"integrate-with-jaqpot-api-through-r-applications",level:2},{value:"Installation",id:"installation",level:2},{value:"Logging in using Jaqpot credentials",id:"logging-in-using-jaqpot-credentials",level:3},{value:"Logging in using API key",id:"logging-in-using-api-key",level:3},{value:"Usage",id:"usage",level:2},{value:"Create predictions for your models",id:"create-predictions-for-your-models",level:2},{value:"Predict Method",id:"predict-method",level:3},{value:"Available information retrieval functions",id:"available-information-retrieval-functions",level:2},{value:"Get your models paginated",id:"get-your-models-paginated",level:3},{value:"Get a model with a specific model ID",id:"get-a-model-with-a-specific-model-id",level:3},{value:"Get the independent features of a model with a specific model ID",id:"get-the-independent-features-of-a-model-with-a-specific-model-id",level:3},{value:"Get an organization&#39;s models paginated",id:"get-an-organizations-models-paginated",level:3},{value:"Get an organization&#39;s models with a particular tag paginated",id:"get-an-organizations-models-with-a-particular-tag-paginated",level:3},{value:"Get your datasets paginated",id:"get-your-datasets-paginated",level:3},{value:"Get a dataset with a specific model ID",id:"get-a-dataset-with-a-specific-model-id",level:3},{value:"Get the features of a dataset with a specific dataset ID",id:"get-the-features-of-a-dataset-with-a-specific-dataset-id",level:3},{value:"Get a feature with a specific model ID",id:"get-a-feature-with-a-specific-model-id",level:3}],s={toc:l},p="wrapper";function c(e){let{components:t,...o}=e;return(0,A.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"integrate-with-jaqpot-api-through-r-applications"},"Integrate with Jaqpot API through R applications"),(0,A.kt)("p",null,"The R Jaqpot client has been developed in order to post, pull and use both models and datasets, stored in the Jaqpot API with ease. "),(0,A.kt)("h2",{id:"installation"},"Installation"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"jaqpotr")," can be installed directly from ",(0,A.kt)("em",{parentName:"p"},"GitHub")," using the ",(0,A.kt)("inlineCode",{parentName:"p"},"install_github")," function of the ",(0,A.kt)("strong",{parentName:"p"},"devtools")," package. "),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},'devtools::install_github("euclia/jaqpotr")')," "),(0,A.kt)("h3",{id:"logging-in-using-jaqpot-credentials"},"Logging in using Jaqpot credentials"),(0,A.kt)("p",null,"If you have created a Jaqpot account, you can log into Jaqpot using your Jaqpot credentials with ",(0,A.kt)("inlineCode",{parentName:"p"},"login.cred()")," . Once executed, a prompt message pops up asking for your Jaqpot username, followed by a pop-up window in which you should fill in your Jaqpot password."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Log in using Jaqpot credentials",src:a(7258).Z,width:"439",height:"234"})),(0,A.kt)("h3",{id:"logging-in-using-api-key"},"Logging in using API key"),(0,A.kt)("p",null,"If you want to log in using an API key, then use ",(0,A.kt)("inlineCode",{parentName:"p"},"login.api()"),". Once executed, a pop-up window appears in which you should fill in your Jaqpot password.  "),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Log in using Jaqpot credentials",src:a(8704).Z,width:"436",height:"188"})),(0,A.kt)("p",null,"The API key can be downloaded as a text file from the Jaqpot User Interface. "),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Get key",src:a(95).Z,width:"633",height:"308"})),(0,A.kt)("h2",{id:"usage"},"Usage"),(0,A.kt)("p",null,"Now all you need to do is call the desired ",(0,A.kt)("strong",{parentName:"p"},"jaqpotr")," function with the appropriate input arguments. "),(0,A.kt)("h2",{id:"create-predictions-for-your-models"},"Create predictions for your models"),(0,A.kt)("h3",{id:"predict-method"},"Predict Method"),(0,A.kt)("p",null,"Use the predict method to aqcuire predictions from a specific uploaded model upon which you have executions rights."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'# Example 1: Model with jagged array\n# Create a dataframe containing the independent features\ndf =data.frame(sim.end = 10, sim.step = 1, sim.start = 0)\ndf$dose <-  list(c(10,10))\ndf$times <- list(c(0.1, 0.5))\n# Set the model ID of the uploaded Jaqpot model\nmodelID <- "lUP5Nqoa6JOTZG4CQnSJ"\n# Acquire model predictions\npredictions <- jaqpotr::jaqpot.predict( df = df, modelID = modelID)\n\n\n# Example 2: Model with features that contain white spaces\n# Create a dataframe containing the independent features\ndf = data.frame(`Length ave. (nm) `  = c(10,20), `Purity (%)` =c(10,50),  `Zave (12.5 ug/ml)` = c(0.1,0.2), check.names = FALSE)\n# Set the model ID of the uploaded Jaqpot model\nmodelID <- "xCurrgzi7ZsfAHSIsb2l"\n# Acquire model predictions\npredictions <- jaqpotr::jaqpot.predict( df = df, modelID = modelID)\n\n')),(0,A.kt)("admonition",{type:"caution"},(0,A.kt)("ul",{parentName:"admonition"},(0,A.kt)("li",{parentName:"ul"},"In the first example, we present a way to insert an instance that contains a feature with more than one values, in our case the 'dose' and 'times' variables. You first create the dataframe with as many rows as the instances to be given to the model, and then for variables that contain more than one value per instance, you have to define them post the creation of the dataframe"),(0,A.kt)("li",{parentName:"ul"},"In the second example, we present a way to create a dataframe with feature names that contain white spaces (some models have unorthodox feature names that contain spaces..). In this case, you should set the ",(0,A.kt)("inlineCode",{parentName:"li"},"check.names")," argument of the ",(0,A.kt)("inlineCode",{parentName:"li"},"data.frame()")," function to ",(0,A.kt)("inlineCode",{parentName:"li"},"FALSE"),"."))),(0,A.kt)("h2",{id:"available-information-retrieval-functions"},"Available information retrieval functions"),(0,A.kt)("h3",{id:"get-your-models-paginated"},"Get your models paginated"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.my.models")," function to get your models paginated:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},"# Retrieve the 10 most resent models you have uploaded on Jaqpot\nmodels <- jaqpotr::get.my.models(min = 1, max = 10)\n")),(0,A.kt)("h3",{id:"get-a-model-with-a-specific-model-id"},"Get a model with a specific model ID"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.model.byID")," function to get a model by its ID."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'model <-  jaqpotr::get.model.byID(modelID = "model_id")\n')),(0,A.kt)("h3",{id:"get-the-independent-features-of-a-model-with-a-specific-model-id"},"Get the independent features of a model with a specific model ID"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.model.feats")," function to get the independent features of a model by its ID."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'model_feats <-  jaqpotr::get.model.feats(modelID = "model_id")\n')),(0,A.kt)("h3",{id:"get-an-organizations-models-paginated"},"Get an organization's models paginated"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.orgs.models")," function to get an organization's models paginated:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'# Retrieve the 10 most resent models wthat belong to an organisation you are member of\nmodels <- jaqpotr::get.orgs.models(orgID = "org_id", min = 1, max = 10)\n')),(0,A.kt)("h3",{id:"get-an-organizations-models-with-a-particular-tag-paginated"},"Get an organization's models with a particular tag paginated"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.orgs.models.byTag")," function to get all organization's models with a particular tag, paginated:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'# Retrieve the 10 most resent models with a particular tag that belong to an organisation you are member of\nmodels <- jaqpotr::get.orgs.models.byTag(orgID = "org_id", tag = "tag", min = 1, max = 10)\n')),(0,A.kt)("h3",{id:"get-your-datasets-paginated"},"Get your datasets paginated"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.my.datasets")," function to get your datasets paginated:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},"# Retrieve the 10 most resent datasets you have uploaded on Jaqpot\ndfs <- jaqpotr::get.my.datasets(min = 1, max = 10)\n")),(0,A.kt)("h3",{id:"get-a-dataset-with-a-specific-model-id"},"Get a dataset with a specific model ID"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.dataset.byID")," function to get a dataset by its ID."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'df <-  jaqpotr::get.dataset.byID(datasetID = "dataset_id_")\n')),(0,A.kt)("h3",{id:"get-the-features-of-a-dataset-with-a-specific-dataset-id"},"Get the features of a dataset with a specific dataset ID"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.dataset.feats")," function to get the features of a dataset by its ID."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'df_feats <-  jaqpotr::get.dataset.feats(datasetID = "dataset_id_")\n')),(0,A.kt)("h3",{id:"get-a-feature-with-a-specific-model-id"},"Get a feature with a specific model ID"),(0,A.kt)("p",null,"Use the ",(0,A.kt)("inlineCode",{parentName:"p"},"get.feature.byID")," function to get a feature by its ID."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-r"},'df <-  jaqpotr::get.feature.byID(featID = "feat_id_")\n')))}c.isMDXComponent=!0},95:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getkey-b24fa31a9fc7c197d966c5f7808c4ad2.png"},8704:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},7258:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);