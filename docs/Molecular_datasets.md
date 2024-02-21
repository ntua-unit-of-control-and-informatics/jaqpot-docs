---
id: Molecular_datasets
title: Molecular
sidebar_label: Molecular_datasets
keywords:
  - SMILES
  - featurizer
---

## Main Import

`import jaqpotpy.datasets`

## Creating Molecular datasets that can be used for model fitting

### SmilesDataset
#### CLASS: SmilesDataset(x_cols=None,smiles,y,featurizer=None,X=None,task='regression',streaming=False)

Class for creating a molecular dataset. The only necessary inputs for the class is SMILES list,list of endpoints and a featurizer class for fingerprint generation or descriptor calculation to featurize the SMILES(See more on Molecular_descriptors docs). This dataset class can be used to train datasets on sklearn machine learning models.

#### Parameters

* `smiles(Iterable[str])`: List of SMILES strings of the dataset.
* `y(Iterable[Any])`: List of endpoints of the SMILES list provided above. They can be classification or regression endpoints.
* `featurizer(optional)`: Default is None. This needs to take a jaqpot featurizer as explained in Molecular_descriptors docs. It will be needed for the creation of the input features.
* `task(str,optional)`: The modelling task that will be performed. Default value is 'regression'. For classification problems set to 'classification'. 

##### Example

```python
from jaqpotpy.datasets import SmilesDataset
from jaqpotpy.descriptors.molecular import MACCSKeysFingerprint

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
y = [0,1]
featurizer = MACCSKeysFingerprint()
# Initialize dataset
dataset = SmilesDataset(smiles=smiles,y=y,featurizer=featurizer,task='classification')
# Create the dataset (Creates input features based on featurizer)
dataset.create()
```
You can perform various actions with the created dataset as seen below:
```python
# Name the dataset
dataset.dataset_name = 'name'
# Inspect the dataframe of the dataset (Consists of X,y variables)
dataset.df
# Inspect names of the Input features
dataset.X
```

### TorchGraphDataset
#### CLASS: TorchGraphDataset(smiles,y,featurizer=MolGraphConvFeaturizer(),task=str,streaming=False)

Class for creating a molecular graph dataset. The only necessary inputs for the class is SMILES list and a list of endpoints. Featurizer is not needed, cause by default graph representations will be calculated(Adjacency Matrix,Node features matrix). This dataset class can be used to train datasets on Graph Neural Network(GNN) models. 

#### Parameters

* `smiles(Iterable[str])`: List of SMILES strings of the dataset.
* `y(Iterable[Any])`: List of endpoints of the SMILES list provided above. They can be classification or regression endpoints.
* `featurizer(optional)`: By default it uses MolGraphConvFeaturizer. For more details go to Molecular descriptors docs. Other options include PagtnMolGraphFeaturizer, AttentiveFPFeaturizer.
* `task(str)`: The modelling task that will be performed. Takes one of two values: 'regression', 'classification'.

##### Example

```python
from jaqpotpy.datasets import TorchGraphDataset

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
y = [0,1]
# Initialize dataset
graph_dataset = TorchGraphDataset(smiles,y,task='regression')
# Create dataset
graph_dataset.create()
```

You can perform various actions with the created dataset as seen below:
```python
# Name the dataset
dataset.dataset_name = 'name'
# Inspect the input features and endpoints of the dataset 
# Input features include adjacency matrix=edge_index, node_features_matrix=x and number of nodes
dataset.df
```