---
id: r
title: Deploy your R models 
sidebar_label: R models
keywords:
  - jaqpot
  - deploy machine learning models
  - API
  - models
  - integrate models
  - deploy R models 
  - R
---


## Welcome to jaqpotr documentation

jaqpotr is a library that lets you deploy and share machine learning and statistal models developed in R (https://www.r-project.org/) over the web as ready to use web services. 



## Installation


jaqpotr can be installed directly from *GitHub* using the `install_github` function of the **devtools** package. 

`devtools::install_github("euclia/jaqpotr")` 


## Usage 

Deploying models developed in R on Jaqot is straightforward and fast. All you need to do is  provide the trained model object to the proper **jaqpotr** function as an input argument. Once the function is executed, a prompt message asks you to select a Jaqpot login method. There are two options, logging in using your Jaqpot credentials (press `1` and hit the `Enter` button) or using an API key (press `2` and hit the `Enter` button). 

### Logging in using Jaqpot credentials

If you select the first method, a prompt message asks you to provide your Jaqpot username, followed by a pop-up window in which you should fill in your Jaqpot password.

![Log in using Jaqpot credentials](./assets/jaqpotcred.png)

### Logging in using API key

If you select the second method, a pop-up window appears in which you should fill in your Jaqpot password.  

![Log in using Jaqpot credentials](./assets/jaqpotapi.png)

The API key can be downloaded as a text file from the Jaqpot User Interface. 

![Get key](./assets/getkey.png)

### Final steps of deployment

Once you log in, the only outstanding step is to provide a title and a short description for your model. Be wary of the fact that the model title cannot change, whereas the model description can be accessed and further processed via the Jaqpot User Interface. Upon successful deployment on Jaqpot, your model, which is now effeectively a web service, is given a unique model ID! 


![Final steps](./assets/jaqpotupload.png)

**Your model is then available at https://app.jaqpot.org**


:::warning
For some R models, your data might be uploaded in an encrypted form on Jaqpot. We are currently working on resolving this, so that all data remain on the local system and only the necessary model parameters and metadata arre uploaded on Jaqpot.
:::


### Supported R packages

At the moment Jaqpot can host models developed is specific R libraries. The available jaqpotr functions are:
* `deploy.gbm()`  deploys an object of class "gbm" developed using the `gbm()` function of the **gbm** package
* `deploy.lm()`  deploys an object of class "lm" or "glm" developed using the `lm()` or `glm()` functions of the **base** package
* `deploy.nb ()`  deploys an object of class "naive_bayes" developed using the `naive_bayes()` function of the **naivebayes** package
* `deploy.randomForest()`  deploys an object of class "randomForest.formula" developed using the `randomForest()` function of the **randomForest** package
* `deploy.rpart()`  deploys an object of class "rpart" developed using the `rpart()` function of the **rpart** package
* `deploy.svm ()`  deploys an object of class "svm.formula" developed using the `svm()` function of the **e1071** package
* `deploy.tree ()`  deploys an object of class "tree " developed using the `tree ()` function of the **tree** package
* `deploy.caret()`  deploys objects developed using the **caret** package with one of the following methods:  
  * `"xgbTree"`
  * `"neuralnet"`
  * `"rf"`
   * `"knn"`

If you want to deploy a model that has been developed in a library that is not part of the list, all you need to do is contact us and we will develop the appropriate function as soon as possible!


### Example 1: Deploy a simple linear regression model


```R
library(jaqpotr)
library(mlbench) # contains the BostonHousing dataset
data(BostonHousing)

lm.model <- lm(medv ~ ., data=BostonHousing)
deploy.lm(lm.model)

```

:::caution
The names of the dependent and independent features that will appear on the Jaqpot User Interface of the model will be the same as the ones provided to the model during the training phase and **can't change**. Therefore, carefully name your variables before training the model. In the example above, the input varialbes will be named according to the BostonHousing dataframe column names, and the prediction will be named 'medv'. 
:::

### Example 2: Deploy a naive bayes model

```R
library(naivebayes)
library(jaqpotr)
data(iris)

nb.model <- naive_bayes(Species ~., data = iris)
deploy.nb(nb.model)

```


### Example 3: Include input preprocessing using deploy.caret
`deploy.caret()` offers the chance to incorporate preprocessing pipeliness implemented in caret, through an extra argument, `preprocess.model`, which defaults to NULL. In particular, a series of preprocessing caret functions can be applied to the user input, before it is fed to the trained model object. For achieving this, the only thing you have to do is to provide a list with all the preprocessing models you used. 



```R

library(jaqpotr)
library(caret) # Needed for preprocessing and model training
library(xgboost) #Needed for building the xgb model
library(mlbench)  #Contains the BostonHousing dataset

data(BostonHousing)
X_train <- data.frame(BostonHousing[, -which(names(BostonHousing) == "medv")])
Y_train <- data.frame(medv = (BostonHousing[,  "medv"] )) #slicing omits the variabe name, so use dataframe and retain it

# Preprocessing
# Step 1: Bring all independent values in the [0,1] interval
preprocessParams <- preProcess(X_train, method="range")
X_train <- predict(preprocessParams, X_train)
# Step 2: One hot encoding applied to categorical variables
dmyRDT <- dummyVars(~.,data=X_train)
X_train <- predict(dmyRDT, newdata=X_train)
train_df <- cbind(X_train, Y_train)

## Build the model
trainControl <- trainControl(method="repeatedcv", number=20, repeats=3,verboseIter = FALSE,allowParallel = FALSE, savePredictions=TRUE)
tunegrid <- expand.grid(nrounds = 100,
                        max_depth = 2,
                        eta = 0.20,
                        gamma =0 ,
                        colsample_bytree =0.6 ,
                        min_child_weight =1,
                        subsample =1
)
fitXGB2 <- train(medv ~ ., data = train_df, method="xgbTree", trControl=trainControl ,tuneGrid=tunegrid,importance=TRUE,savePredictions = 'final') 

# Deploy the model on Japot
deploy.caret(trained.model = fitXGB2, preprocess.model = list(preprocessParams,dmyRDT))
```

:::caution
The preprocess models must include only the independent variables, not the dependent!! Additionally, you must provide the preprocess models in the order applied, in a list form.
:::


## About

The jaqpotr library has been developed by the [Unit of Process Control and Informatics](https://www.chemeng.ntua.gr/labs/control_lab/) in the [School of Chemical Engineering](http://www.chemeng.ntua.gr/_en) at the [National Technical University of Athens](https://www.ntua.gr/en/) and is supported by [Euclia](https://www.euclia.xyz).

## Contact

contact@euclia.xyz
