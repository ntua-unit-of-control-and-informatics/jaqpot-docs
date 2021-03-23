---
id: JAVA 
title: JAVA client
sidebar_label: JAVA
---

## Integrate with Jaqpot API through Java applications

Use jaqpot API from JAVA 



## Install the maven artifact

```
<dependency>
  <groupId>xyz.euclia</groupId>
  <artifactId>jaqpotj</artifactId>
  <version>0.0.2</version>
</dependency>
```

## Initialize the jaqpot client

```
import com.fasterxml.jackson.databind.ObjectMapper;
import xyz.euclia.jaqpotj.JaqpotFactory;
import xyz.euclia.jaqpotj.exception.JaqpotException;
import xyz.euclia.jaqpotj.models.*;
import xyz.euclia.jaqpotj.serializer.Serializer;


ObjectMapper objectMapper = new ObjectMapper();

client = new JaqpotFactory().create("https://api.jaqpot.org/jaqpot",
    new JaqpotSerializer(objectMapper));
```


## Create predictions for your models


The bellow code is an example about how the predict function could be used. Input data should apply to a models features. 
These should be found at the user interface and the models documentation

```
public Prediction predict(){
    List<Map<String, Object>> datas = new ArrayList<>();
    Map<String, Object> data = new HashMap<>();
    data.put("weight", 20);
    data.put("size", 10);
    data.put("sim.start", 0);
    data.put("sim.end", 8);
    data.put("sim.step", 0.1);

    List<Integer> ec = new ArrayList<>();
    ec.add(10);
    ec.add(15);
    ec.add(0);
    data.put("exposure.concentration", ec);

    List<Integer> et = new ArrayList<>();
    et.add(0);
    et.add(1);
    et.add(2);
    data.put("exposure.time", et);

    datas.add(data);
    Future<Prediction>  dataset = client.Predict("BLO6obkeJCXwLQypfNoR", datas, token);
    Prediction p = dataset.get();
    return p;
}
```


## Retreive token if not available

```
public String getToken(){
    Future<Auth> authF = client.Login("usename", "password");
    Auth auth = authF.get();
    String token = auth.getAuthToken();
    return token;
}
```


## Available functions

### Get a model
```
Future<Model> model = client.GetModelById("model_id", token);
```


### Get models features

```
Future<Feature> feature = client.GetFeatureById("feature_id", token);
```

### Get users models paginated

```
Future<Models> model = client.GetUsersModels(0, 10, token);
```

### Get an organizations models paginated

```
Future<Models> model = client.GetOrgsModels("org_id", 0, 10, token);
```


### Get a dataset

```
Future<Dataset> dataset = client.GetDatasetById("dataset_id", token);
```