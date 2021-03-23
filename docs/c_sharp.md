---
id: .NET 
title: .NET client
sidebar_label: .NET
---

Use jaqpot API from .NET app

## Install the nuget package

Information can be found at the url:

```
https://www.nuget.org/packages/JaqpotNet/
```

## Initialize the jaqpot client

```
using JaqpotNet;
using JaqpotNet.Models;



public class JaqpotIntegration
{
    private Jaqpot _jaqpot;

    private string token = "token";

    public void JaqpotIntegration()
    {
        _jaqpot = new JaqpotFactory().Create("https://api.jaqpot.org");
    }
    
}

```


## Create predictions fom your models


The bellow code is an example about how the predict function could be used. Input data should apply to a models features. 
These should be found at the user interface and the models documentation

```
public Prediction TestPredict()
{
    List<Dictionary<string, Object>> values = new List<Dictionary<string, Object>>();
    Dictionary<string, Object> dict = new Dictionary<string, object>();
    dict.Add("LFG", 0.1);
    dict.Add("NEQ", 0.1);
    dict.Add("GAP", 0.12);
    dict.Add("EQP", 0.32);
    values.Add(dict);

    Dictionary<string, Object> dict2 = new Dictionary<string, object>();
    dict2.Add("LFG", 0.19);
    dict2.Add("NEQ", 0.31);
    dict2.Add("GAP", 0.02);
    dict2.Add("EQP", 0.08);
    values.Add(dict2);

    Prediction prediction = this._jaqpot.Predict("UDxquEZohrW7jYLxdt9H", values, token).Result;
    return prediction;
}

```


<!-- ## Retreive token if not available

```
public String getToken(){
    Future<Auth> authF = client.Login("usename", "password");
    Auth auth = authF.get();
    String token = auth.getAuthToken();
    return token;
}
``` -->


## Available functions

### Get a model
```
Model m = this._jaqpot.GetModelById("model_id", token).Result;
```


### Get models features

```
Model m = this._jaqpot.GetModelById("feat_id", token).Result;
```

### Get users models paginated

```
ModelsFound mf = this._jaqpot.GetUsersModels(0, 10, token).Result;
```

### Get an organizations models paginated

```
 ModelsFound mf =  this._jaqpot.GetOrgsModels("xYjQ2s4ou4Lk63x4",0, 10, token).Result;
```


### Get a dataset

```
JaqpotDataset m = this._jaqpot.GetDatasetById("A9sALGKPLVoBfRrDbRfTsw", token).Result;
```