"use strict";(self.webpackChunkeuclia_docs=self.webpackChunkeuclia_docs||[]).push([[251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),h=o,c=u["".concat(d,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={id:"golang",title:"Go Client",sidebar_label:"Go"},l=void 0,s={unversionedId:"golang",id:"golang",title:"Go Client",description:"The Go Jaqpot client has been developed in order to pull and use both models and datasets, stored in the Jaqpot API with ease.",source:"@site/docs/golang.md",sourceDirName:".",slug:"/golang",permalink:"/jaqpot-docs/docs/golang",draft:!1,tags:[],version:"current",frontMatter:{id:"golang",title:"Go Client",sidebar_label:"Go"},sidebar:"someSidebar",previous:{title:"Javascript",permalink:"/jaqpot-docs/docs/javascript"},next:{title:"R",permalink:"/jaqpot-docs/docs/Rsdk"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Create a Client instance",id:"create-a-client-instance",level:2},{value:"Predictions",id:"predictions",level:2},{value:"Predict Method",id:"predict-method",level:3},{value:"Models",id:"models",level:2},{value:"GetModel Method",id:"getmodel-method",level:3},{value:"GetMyModels Method",id:"getmymodels-method",level:3},{value:"GetOrgsModels Method",id:"getorgsmodels-method",level:3},{value:"GetOrgsModelsByTag Method",id:"getorgsmodelsbytag-method",level:3},{value:"Datasets",id:"datasets",level:2},{value:"GetDataset Method",id:"getdataset-method",level:3},{value:"Features",id:"features",level:2},{value:"GetFeature Method",id:"getfeature-method",level:3},{value:"Tasks",id:"tasks",level:2},{value:"GetTask Method",id:"gettask-method",level:3},{value:"DOA",id:"doa",level:2},{value:"GetTask Method",id:"gettask-method-1",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Go Jaqpot client has been developed in order to pull and use both models and datasets, stored in the Jaqpot API with ease. "),(0,o.kt)("p",null,"Install the go client through your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"go get github.com/euclia/gojaqpot\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Import the Go client package from GitHub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"import (\n    github.com/gojaqpot\n)\n")),(0,o.kt)("h2",{id:"create-a-client-instance"},"Create a Client instance"),(0,o.kt)("p",null,"Initialize a new Jaqpot client object.\nFind more on finding your authentication token ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-token.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Instanciate the Jaqpot Client \nvar myClient gojaqpot.IJaqpotClient = gojaqpot.InitClient("https://api.jaqpot.org")\n\n// Set your authorization token. \n// You can get it from your Jaqpot Dashboard by clicking "Get Key".\ntoken := "myAuthToken"   \n')),(0,o.kt)("h2",{id:"predictions"},"Predictions"),(0,o.kt)("p",null,"Use the Jaqpot client to make predictions."),(0,o.kt)("h3",{id:"predict-method"},"Predict Method"),(0,o.kt)("p",null,"Use the predict method to make predictions.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the model\'s ID.\nmodelId := "myModelId"\n\n// Construct the input data.\n// In this example we fill two rows of the prediction dataset.\nvals := make(map[string]interface{})\narrVals := make([]map[string]interface{}, 0)\n\nvals["Feature_A"] = 0.2\nvals["Feature_B"] = 0.1\nvals["Feature_C"] = "C1"\narrVals = append(arrVals, vals)\n\nvals = make(map[string]interface{})\nvals["Feature_A"] = 0.9\nvals["Feature_B"] = 0.5\nvals["Feature_C"] = "C2"\narrVals = append(arrVals, vals)\n\n// Make a prediction.\npreds, err := myClient.Predict(modelId, arrVals, token)\n')),(0,o.kt)("h2",{id:"models"},"Models"),(0,o.kt)("p",null,"Use the Jaqpot client to fetch and use your models."),(0,o.kt)("h3",{id:"getmodel-method"},"GetModel Method"),(0,o.kt)("p",null,"Use the GetModel method to get a model by it's ID.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the model\'s ID.\nmodelId := "myModelId"\n\n// Get the model with ID myModelId\nmyModel, err := myClient.GetModel(modelId, token)\n')),(0,o.kt)("h3",{id:"getmymodels-method"},"GetMyModels Method"),(0,o.kt)("p",null,"Use the GetMyModels method to get an array of your models.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Set the upper and lower bounds of your search.\nlower := 0\nupper := 10\n\n// Get your first 10 models.\nmyModel, err := myClient.GetMyModels(lower, upper, token)\n")),(0,o.kt)("h3",{id:"getorgsmodels-method"},"GetOrgsModels Method"),(0,o.kt)("p",null,"Use the GetOrgsModels method to get an array of an organization's models.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the Organization\'s ID.\norgId := "myOrgId"\n\n// Set the upper and lower bounds of your search.\nlower := 0\nupper := 10\n\n// Get your first 10 models.\norgsModels, err := myClient.GetOrgsModels(orgId, lower, upper, token)\n')),(0,o.kt)("h3",{id:"getorgsmodelsbytag-method"},"GetOrgsModelsByTag Method"),(0,o.kt)("p",null,"Use the GetOrgsModelsByTag method to get an array of an organization's models with a particular tag.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the Organization\'s ID.\norgId := "myOrgId"\n\n// Set the tag.\ntag := "myTag"\n\n// Set the upper and lower bounds of your search.\nlower := 0\nupper := 10\n\n// Get your first 10 models.\norgsModels, err := myClient.GetOrgsModelsByTag(orgId, tag, lower, upper, token)\n')),(0,o.kt)("h2",{id:"datasets"},"Datasets"),(0,o.kt)("p",null,"Use the Jaqpot client to fetch and use your datasets."),(0,o.kt)("h3",{id:"getdataset-method"},"GetDataset Method"),(0,o.kt)("p",null,"Use the GetDataset method to get a Jaqpot Dataset by it's ID.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the Dataset\'s ID.\ndatasetId := "myDatasetId"\n\n// Get your dataset with ID "myDatasetId".\nmyDataset, err := myClient.GetDataset(datasetId, token)\n')),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Use the Jaqpot client to fetch and use your features."),(0,o.kt)("h3",{id:"getfeature-method"},"GetFeature Method"),(0,o.kt)("p",null,"Use the GetFeature method to get a Jaqpot Feature by it's ID.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the Feature\'s ID.\nfeatureId := "myFeatureId"\n\n// Get your feature with ID "myFeatureId".\nmyFeature, err := myClient.GetFeature(featureId, token)\n')),(0,o.kt)("h2",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"Use the Jaqpot client to fetch your tasks."),(0,o.kt)("h3",{id:"gettask-method"},"GetTask Method"),(0,o.kt)("p",null,"Use the GetTask method to get a Jaqpot Task by it's ID.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the Feature\'s ID.\ntaskId := "myTaskId"\n\n// Get your task with ID "myTaskId".\nmyTask, err := myClient.GetTask(taskId, token)\n')),(0,o.kt)("h2",{id:"doa"},"DOA"),(0,o.kt)("p",null,"Use the Jaqpot client to fetch a model's DOA."),(0,o.kt)("h3",{id:"gettask-method-1"},"GetTask Method"),(0,o.kt)("p",null,"Use the GetDOA method to get the domain of applicabillity (DOA) of a model, by the model's ID.\nFind more on selecting the appropriate IDs ",(0,o.kt)("a",{parentName:"p",href:"https://link-to-ids.gr"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Set the Model\'s ID.\nmodelId := "myModelId"\n\n// Get your DOA with ID "myModelId".\nmyDOA, err := myClient.GetDOA(modelId, token)\n')))}m.isMDXComponent=!0}}]);