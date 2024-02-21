"use strict";(self.webpackChunkeuclia_docs=self.webpackChunkeuclia_docs||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"spam",title:"Spam Detector (Spam vs Ham)",sidebar_label:"Spam Detector (Spam vs Ham)",keywords:["jaqpot","deploy machine learning models","API","models","integrate models","deploy sklearn models and pipelines","deploy sklearn models","text classification","spam detector"]},s=void 0,i={unversionedId:"spam",id:"spam",title:"Spam Detector (Spam vs Ham)",description:"Jaqpot provides support on text processing pipelines, including predictions on text data.",source:"@site/docs/spam_use_case.md",sourceDirName:".",slug:"/spam",permalink:"/docs/spam",draft:!1,tags:[],version:"current",frontMatter:{id:"spam",title:"Spam Detector (Spam vs Ham)",sidebar_label:"Spam Detector (Spam vs Ham)",keywords:["jaqpot","deploy machine learning models","API","models","integrate models","deploy sklearn models and pipelines","deploy sklearn models","text classification","spam detector"]},sidebar:"someSidebar",previous:{title:"R",permalink:"/docs/Rsdk"},next:{title:"Projects using Jaqpot",permalink:"/docs/projects"}},p={},l=[{value:"Use Case&#39;s Description",id:"use-cases-description",level:2},{value:"Read the Corpus",id:"read-the-corpus",level:2},{value:"Train the Model",id:"train-the-model",level:2},{value:"Upload on Jaqpot",id:"upload-on-jaqpot",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jaqpot provides support on text processing pipelines, including predictions on text data."),(0,r.kt)("h2",{id:"use-cases-description"},"Use Case's Description"),(0,r.kt)("p",null,"In this use case we created a spam detector using Python and served the model through the Jaqpot platform. The dataset contained a collection of more than 5 thousand SMS phone messages and is pubilcaly available from the ",(0,r.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection"},"UCI datasets"),"."),(0,r.kt)("h2",{id:"read-the-corpus"},"Read the Corpus"),(0,r.kt)("p",null,"First step was to read the SMSs and the label(either 'spam' or 'ham') and pass them into a pandas DataFrame:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"messages = pd.read_csv('smsspamcollection/SMSSpamCollection', sep='\\t', names=[\"label\", \"message\"])\nmessages.head()\n")),(0,r.kt)("p",null,"Then, we started preprocessing the data. In this section, we created the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bag-of-words_model"},"bag-of-words"),". As a first step, we created a function that split a message into its individual words and returned a list. We also removed very common words, (stopwords) and the punctuation. To do this we took advantage of the NLTK library. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import string\nfrom nltk.corpus import stopwords\n\ndef text_process(message):\n    """\n    Takes in a string of text, then performs the following:\n    1. Remove all punctuation\n    2. Remove all stopwords\n    3. Returns a list of the cleaned text\n    """\n    # Check characters to see if they are in punctuation\n    nopunc = [char for char in message if char not in string.punctuation]\n\n    # Join the characters again to form the string.\n    nopunc = \'\'.join(nopunc)\n    \n    # Now just remove any stopwords\n    return [word for word in nopunc.split() if word.lower() not in stopwords.words(\'english\')]\n')),(0,r.kt)("p",null,"Next step of the preprocess was the vectorization of the messages (lemmas) following the next steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Count how many times does a word occur in each message (Known as term frequency)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Weigh the counts, so that frequent tokens get lower weight (inverse document frequency)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Normalize the vectors to unit length, to abstract from the original text length (L2 norm)"))),(0,r.kt)("p",null,"In order to do that, we used the SciKit Learn's ",(0,r.kt)("strong",{parentName:"p"},"CountVectorizer")," for the first step. This model converts a collection of text documents to a matrix. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.feature_extraction.text import CountVectorizer\n\nbow_transformer = CountVectorizer(analyzer=text_process).fit(messages['message'])\n")),(0,r.kt)("p",null,"After the counting, the term weighting and normalization of steps 2 and 3 was done with TF-IDF, using scikit-learn's TfidfTransformer. TF-IDF stands for term frequency-inverse document frequency, and the tf-idf weight is a weight often used in information retrieval and text mining. This weight is a statistical measure used to evaluate how important a word is to a document in a collection or corpus. The importance increases proportionally to the number of times a word appears in the document but is offset by the frequency of the word in the corpus. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.feature_extraction.text import TfidfTransformer\n\ntfidf_transformer = TfidfTransformer().fit(messages_bow)\n")),(0,r.kt)("h2",{id:"train-the-model"},"Train the Model"),(0,r.kt)("p",null,"Before training the model we used the train-test split method to split the dataset into a training and a testing one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(messages['message'], messages['label'], test_size=0.2)\n")),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"http://www.inf.ed.ac.uk/teaching/courses/inf2b/learnnotes/inf2b-learn-note07-2up.pdf"},"variety of reasons"),", the Naive Bayes classifier algorithm is a good choice.  Finally, we used SciKit Learn's pipeline capabilities to store a pipeline of workflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.naive_bayes import MultinomialNB\nfrom sklearn.pipeline import Pipeline\n\npipeline = Pipeline([\n    ('bow', CountVectorizer(analyzer=text_process)),  # strings to token integer counts\n    ('tfidf', TfidfTransformer()),  # integer counts to weighted TF-IDF scores\n    ('classifier', MultinomialNB()),  # train on TF-IDF vectors w/ Naive Bayes classifier\n])\n\npipeline.fit(X_train, y_train)\n")),(0,r.kt)("h2",{id:"upload-on-jaqpot"},"Upload on Jaqpot"),(0,r.kt)("p",null,"To upload the model on Jaqpot we imported the package and instantiated the Jaqpot Python SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from jaqpotpy import Jaqpot\n\njaqpot = Jaqpot()\n")),(0,r.kt)("p",null,"Then we ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/python#set-your-credientials"},"set our credentials")," and we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_sklearn")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"jaqpot.deploy_sklearn(pipeline, X_train, y_train, 'Spam Detector', 'This pipeline gets a message and predicts whether it is a spam message or not.')\n")))}m.isMDXComponent=!0}}]);