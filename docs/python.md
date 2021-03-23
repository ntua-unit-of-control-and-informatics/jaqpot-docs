---
id: python 
title: Python Client
sidebar_label: Python
---

## Integrate with Jaqpot API through Python applications

The Python Jaqpot client has been developed in order to post, pull and use both models and datasets, stored in the Jaqpot API with ease. 

## Installation

Install the python client through pypi:

```python
pip install jaqpotpy 
```

## Create a Client instance

Initialize a new Jaqpot client object.
Find more on finding your authentication token [here](https:#link-to-token.gr).

```python
from jaqpotpy import Jaqpot

# Instanciate the Jaqpot Client 
jaqpot = Jaqpot()
```

### Set your credientials.

Using API key (for users with Google account):
```python 
# Set your authorization token. 
# You can get it from your Jaqpot Dashboard by clicking 'Get Key'.

token = 'myAuthToken'
jaqpot.set_api_key(token)  
```

Using credentials (for users that have registered):
```python 

username = 'username'
pwd = 'password'

jaqpot.login(username, pwd)  
```

## Create predictions for your models

### Predict Method

Use the predict method to make predictions.
Find more on selecting the appropriate IDs [here](https:#link-to-ids.gr).

```python
import pandas as pd

# Set the model's ID.
modelId = 'myModelId'

# Construct the input data.
# In this example we fill two rows of the prediction dataset.

d = {'Feature_A': [0.2, 0.6], 'Feature_B': [0.1, 0.9], 'Feature_C':[0.3, 0.1]}
df = pd.DataFrame(data=d)

# Make a prediction.
predictions = jaqpot.predict(df, modelId)
```

## Available functions

### Get your models paginated

Use the ```get_my_models``` method to get your models paginated:
```python
jaqpot.get_my_models(minimum=1,maximum=10)
```


### Get a model

Use the ```get_model_by_id``` method to get a model by it's ID.
Find more on selecting the appropriate IDs [here](https:#link-to-ids.gr).
```python
model = jaqpot.get_model_by_id("model_id")
```


### Get an organization's models paginated

Use the ```get_orgs_models``` method to get an organization's models paginated:

```python
jaqpot.get_orgs_models("org_id", 0, 10)
```


### Get models with a particular tag paginated

Use the ```get_models_by_tag``` method to get your models with a particular tag paginated:
```python
jaqpot.get_models_by_tag("my_tag", 0, 10);
```


### Get an organization's models with a particular tag paginated

Use the ```get_models_by_tag_and_org``` method to get an organization's models with a particular tag paginated:
```python
jaqpot.get_models_by_tag("org_id", "my_tag", 0, 10)
```


### Get a dataset

Use the ```get_dataset``` method to get a Jaqpot dataset by its' ID:
```python
jaqpot.get_dataset("datset_id")
```


### Upload a Dataset

Use the ```upload_dataset``` method to post Jaqpot dataset:
```python
import pandas as pd

# Construct the input data.
d = {'Feature_A': [0.2, 0.6], 'Feature_B': [0.1, 0.9], 'Feature_C':[0.3, 0.1]}
df = pd.DataFrame(data=d)

jaqpot.upload_dataset(df, 'model_id', 'My Title', 'This is a description')
```