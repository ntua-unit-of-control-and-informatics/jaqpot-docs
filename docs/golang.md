---
id: golang 
title: Go Client
sidebar_label: Go
---

The Go Jaqpot client has been developed in order to pull and use both models and datasets, stored in the Jaqpot API with ease. 

## Usage

Import the Go client package from GitHub:
```go
import (
    github.com/goJaqpot
)
```

## Create a Client instance

Initialize a new Jaqpot client object.
Find more on finding your authentication token [here](https://link-to-token.gr).

```go
// Instanciate the Jaqpot Client 
var myClient gojaqpot.IJaqpotClient = gojaqpot.InitClient("https://api.jaqpot.org")

// Set your authorization token. 
// You can get it from your Jaqpot Dashboard by clicking "Get Key".
token := "myAuthToken"   
```

## Predictions

Use the Jaqpot client to make predictions.

### Predict Method

Use the predict method to make predictions.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).



```go
// Set the model's ID.
modelId := "myModelId"

// Construct the input data.
// In this example we fill two rows of the prediction dataset.
vals := make(map[string]interface{})
arrVals := make([]map[string]interface{}, 0)

vals["Feature_A"] = 0.2
vals["Feature_B"] = 0.1
vals["Feature_C"] = "C1"
arrVals = append(arrVals, vals)

vals = make(map[string]interface{})
vals["Feature_A"] = 0.9
vals["Feature_B"] = 0.5
vals["Feature_C"] = "C2"
arrVals = append(arrVals, vals)

// Make a prediction.
preds, err := myClient.Predict(modelId, arrVals, token)
```
## Models

Use the Jaqpot client to fetch and use your models.

### GetModel Method

Use the GetModel method to get a model by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the model's ID.
modelId := "myModelId"

// Get the model with ID myModelId
myModel, err := myClient.GetModel(modelId, token)
```

### GetMyModels Method

Use the GetMyModels method to get an array of your models.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the upper and lower bounds of your search.
lower := 0
upper := 10

// Get your first 10 models.
myModel, err := myClient.GetMyModels(lower, upper, token)
```

### GetOrgsModels Method

Use the GetOrgsModels method to get an array of an organization's models.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the Organization's ID.
orgId := "myOrgId"

// Set the upper and lower bounds of your search.
lower := 0
upper := 10

// Get your first 10 models.
orgsModels, err := myClient.GetOrgsModels(orgId, lower, upper, token)
```

### GetOrgsModelsByTag Method

Use the GetOrgsModelsByTag method to get an array of an organization's models with a particular tag.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the Organization's ID.
orgId := "myOrgId"

// Set the tag.
tag := "myTag"

// Set the upper and lower bounds of your search.
lower := 0
upper := 10

// Get your first 10 models.
orgsModels, err := myClient.GetOrgsModelsByTag(orgId, tag, lower, upper, token)
```

## Datasets

Use the Jaqpot client to fetch and use your datasets.

### GetDataset Method

Use the GetDataset method to get a Jaqpot Dataset by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the Dataset's ID.
datasetId := "myDatasetId"

// Get your dataset with ID "myDatasetId".
myDataset, err := myClient.GetDataset(datasetId, token)
```

## Features

Use the Jaqpot client to fetch and use your features.

### GetFeature Method

Use the GetFeature method to get a Jaqpot Feature by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the Feature's ID.
featureId := "myFeatureId"

// Get your feature with ID "myFeatureId".
myFeature, err := myClient.GetFeature(featureId, token)
```

## Tasks

Use the Jaqpot client to fetch your tasks.

### GetTask Method

Use the GetTask method to get a Jaqpot Task by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the Feature's ID.
taskId := "myTaskId"

// Get your task with ID "myTaskId".
myTask, err := myClient.GetTask(taskId, token)
```


## DOA

Use the Jaqpot client to fetch a model's DOA.

### GetTask Method

Use the GetDOA method to get the domain of applicabillity (DOA) of a model, by the model's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```go
// Set the Model's ID.
modelId := "myModelId"

// Get your DOA with ID "myModelId".
myDOA, err := myClient.GetDOA(modelId, token)
```
