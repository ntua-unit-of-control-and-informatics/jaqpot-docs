---
id: javascript 
title: Javascript Client
sidebar_label: Javascript Client
---

The Javascript Jaqpot client has been developed in order to pull and use both models and datasets, stored in the Jaqpot API with ease. 

## Installation

Install the Javascript client through your terminal with npm:
```javascript
npm i @euclia/jaqpot-client
```

## Create a Client instance

Initialize a new Jaqpot client object.
Find more on finding your authentication token [here](https://link-to-token.gr).

```javascript
import {IJaqpotClient, JaqpotClientFactory} from '../src/client'

// Instanciate the Jaqpot Client 
const jaqpotClient:IJaqpotClient = new JaqpotClientFactory("https://api.jaqpot.org/jaqpot/services").getClient();

// Set your authorization token. 
// You can get it from your Jaqpot Dashboard by clicking "Get Key".
const token:string = "myAuthToken"   
```

## Models

Import the appropriate structures.
```javascript
import { Prediction, Model, Models } from '../src/models/jaqpot.models'
```

### Predict Method

Use the predict method to make predictions.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the model's ID.
let modelId = "myModelId"

// Construct the input data.
// In this example we fill two rows of the prediction dataset.
let data = {}
let input_data = []

data["Feature_A"] = 0.2
data["Feature_B"] = 0.1
data["Feature_C"] = 0.3
input_data.push(data)

data["Feature_A"] = 0.6
data["Feature_B"] = 0.9
data["Feature_C"] = 0.1
input_data.push(data)

// Make a prediction.
jaqpotClient.predict(modelId, input_data, token).then(
    (resp:Prediction) =>{
        console.log(resp)
        }).catch(err => {
            console.log(err)
        })

    })
```

### getModelById Method

Use the getModelById method to get a model by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the model's ID.
let modelId = "myModelId"

// Get the model with ID myModelId
jaqpotClient.getModelById(modelId, token).then(
    (resp:Model) =>{
        console.log(resp)
        }).catch(err => {
            console.log(err)
        })

    })
```

### getMyModels Method

Use the getMyModels method to get an array of your models.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the upper and lower bounds of your search.
let upper = 0
let upper = 10

// Get your first 10 models.
jaqpotClient.getMyModels(token, lower, upper).then(
    (resp:Models) =>{
        console.log(resp)
        }).catch(err => {
            console.log(err)
        })

    })
```

### getOrgsModels Method

Use the getOrgsModels method to get an array of an organization's models.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the Organization's ID.
let orgId = 'MyOrgId'

// Set the upper and lower bounds of your search.
let upper = 0
let upper = 10

// Get the first 10 models of the organization with ID myOrgId.
jaqpotClient.getOrgsModels(orgId, lower, upper, token).then(
    (resp:Models) =>{
        console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    })
```

## Datasets

Import the appropriate structures.
```javascript
import { Dataset } from '../src/models/jaqpot.models'
```

### getDataset Method

Use the getDataset method to get a Jaqpot Dataset by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the Dataset's ID.
let datasetId = 'myDatasetId'

// Get the Dataset with ID myDatasetId.
jaqpotClient.getDataset(datasetId, token).then(
            (resp:Dataset) =>{
                console.log(resp)
                expect(resp._id).to.equal("myDatasetId")
            }
        ).catch(err=>{console.log(err)})
    })
```

## Features

Import the appropriate structures.
```javascript
import { Feature } from '../src/models/jaqpot.models'
```

### getFeature Method

Use the getFeature method to get a Jaqpot feature by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the features's ID.
let featureId = 'myFeatureId'

// Get the Feature with ID myFeatureId.
jaqpotClient.getFeature(featureId, token).then(
            (resp:Feature) =>{
                console.log(resp)
            }
        ).catch(err=>{console.log(err)})
    })
```

## Tasks

Import the appropriate structures.
```javascript
import { Task } from '../src/models/jaqpot.models'
```

### getTask Method

Use the getTask method to get a Jaqpot task by it's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the task's ID.
let taskId = 'myTaskId'

// Get the Task with ID myTaskId.
jaqpotClient.getTask(taskId, token).then(
            (resp:Task) =>{
                console.log(resp)
            }
        ).catch(err=>{console.log(err)})
    })
```

## DOA

Import the appropriate structures.
```javascript
import { Doa } from '../src/models/jaqpot.models'
```

### getModelsDoa Method

Use the getModelsDoa method to get the domain of applicabillity (DOA) of a model, by the model's ID.
Find more on selecting the appropriate IDs [here](https://link-to-ids.gr).

```javascript
// Set the model's ID.
let modelId = "myModelId"

// Get the DOA of the model with ID myModelId.
jaqpotClient.getTask(modelId, token).then(
            (resp:Doa) =>{
                console.log(resp)
            }
        ).catch(err=>{console.log(err)})
    })
```



