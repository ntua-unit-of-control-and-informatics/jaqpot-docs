---
id: Rsdk
title: R client
sidebar_label:  R
keywords:
  - jaqpot
  - deploy machine learning models
  - API
  - models
  - integrate models
  - deploy R models 
  - R
---


## Integrate with Jaqpot API through R applications

The R Jaqpot client has been developed in order to post, pull and use both models and datasets, stored in the Jaqpot API with ease. 

## Installation

**jaqpotr** can be installed directly from *GitHub* using the `install_github` function of the **devtools** package. 

`devtools::install_github("euclia/jaqpotr")` 



### Logging in using Jaqpot credentials

If you have created a Jaqpot account, you can log into Jaqpot using your Jaqpot credentials with `login.cred()` . Once executed, a prompt message pops up asking for your Jaqpot username, followed by a pop-up window in which you should fill in your Jaqpot password.

![Log in using Jaqpot credentials](./assets/jaqpotcred.png)

### Logging in using API key

If you want to log in using an API key, then use `login.api()`. Once executed, a pop-up window appears in which you should fill in your Jaqpot password.  

![Log in using Jaqpot credentials](./assets/jaqpotapi.png)

The API key can be downloaded as a text file from the Jaqpot User Interface. 

![Get key](./assets/getkey.png)

## Usage 

Now all you need to do is call the desired **jaqpotr** function with the appropriate input arguments. 

## Create predictions for your models

### Predict Method

Use the predict method to aqcuire predictions from a specific uploaded model upon which you have executions rights.

```r
# Example 1: Model with jagged array
# Create a dataframe containing the independent features
df =data.frame(sim.end = 10, sim.step = 1, sim.start = 0)
df$dose <-  list(c(10,10))
df$times <- list(c(0.1, 0.5))
# Set the model ID of the uploaded Jaqpot model
modelID <- "lUP5Nqoa6JOTZG4CQnSJ"
# Acquire model predictions
predictions <- jaqpotr::jaqpot.predict( df = df, modelID = modelID)


# Example 2: Model with features that contain white spaces
# Create a dataframe containing the independent features
df = data.frame(`Length ave. (nm) `  = c(10,20), `Purity (%)` =c(10,50),  `Zave (12.5 ug/ml)` = c(0.1,0.2), check.names = FALSE)
# Set the model ID of the uploaded Jaqpot model
modelID <- "xCurrgzi7ZsfAHSIsb2l"
# Acquire model predictions
predictions <- jaqpotr::jaqpot.predict( df = df, modelID = modelID)

```

:::caution
* In the first example, we present a way to insert an instance that contains a feature with more than one values, in our case the 'dose' and 'times' variables. You first create the dataframe with as many rows as the instances to be given to the model, and then for variables that contain more than one value per instance, you have to define them post the creation of the dataframe
* In the second example, we present a way to create a dataframe with feature names that contain white spaces (some models have unorthodox feature names that contain spaces..). In this case, you should set the `check.names` argument of the `data.frame()` function to `FALSE`.
:::


## Available information retrieval functions

### Get your models paginated

Use the ```get.my.models``` function to get your models paginated:
```r
# Retrieve the 10 most resent models you have uploaded on Jaqpot
models <- jaqpotr::get.my.models(min = 1, max = 10)
```


### Get a model with a specific model ID

Use the ```get.model.byID``` function to get a model by its ID.
```r
model <-  jaqpotr::get.model.byID(modelID = "model_id")
```

### Get the independent features of a model with a specific model ID

Use the ```get.model.feats``` function to get the independent features of a model by its ID.
```r
model_feats <-  jaqpotr::get.model.feats(modelID = "model_id")
```


### Get an organization's models paginated

Use the ```get.orgs.models``` function to get an organization's models paginated:

```r
# Retrieve the 10 most resent models wthat belong to an organisation you are member of
models <- jaqpotr::get.orgs.models(orgID = "org_id", min = 1, max = 10)
```


### Get an organization's models with a particular tag paginated

Use the ```get.orgs.models.byTag``` function to get all organization's models with a particular tag, paginated:
```r
# Retrieve the 10 most resent models with a particular tag that belong to an organisation you are member of
models <- jaqpotr::get.orgs.models.byTag(orgID = "org_id", tag = "tag", min = 1, max = 10)
```


### Get your datasets paginated

Use the ```get.my.datasets``` function to get your datasets paginated:
```r
# Retrieve the 10 most resent datasets you have uploaded on Jaqpot
dfs <- jaqpotr::get.my.datasets(min = 1, max = 10)
```



### Get a dataset with a specific model ID

Use the ```get.dataset.byID``` function to get a dataset by its ID.
```r
df <-  jaqpotr::get.dataset.byID(datasetID = "dataset_id_")
```


### Get the features of a dataset with a specific dataset ID

Use the ```get.dataset.feats``` function to get the features of a dataset by its ID.
```r
df_feats <-  jaqpotr::get.dataset.feats(datasetID = "dataset_id_")
```

### Get a feature with a specific model ID

Use the ```get.feature.byID``` function to get a feature by its ID.
```r
df <-  jaqpotr::get.feature.byID(featID = "feat_id_")
```
