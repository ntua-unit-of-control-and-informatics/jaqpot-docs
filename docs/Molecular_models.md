---
id: Molecular_models
title: Molecular
sidebar_label: Molecular_models
---

## Main Import

`import jaqpotpy.models`

## Creating Molecular models with integration for libraries like sklearn, pytorch, pytorch-geometric

### MolecularSKLearn
#### CLASS: MolecularSKLearn(dataset,doa,model,eval=None,preprocess=None)

Class for creating and training a model provided by sklearn model (SVM,Random Forest, ...).
sklearn: https://scikit-learn.org/stable/

#### Parameters

* `dataset(MolecularDataset)`: Dataset for the training procedure. Must be created from jaqpotpy. Example: SmilesDataset (See more on Molecular_dataset docs).

* `doa(DOA)`: Domain of applicability function. Check doa docs for more.

* `model(Any)`:Sklearn model for training.

* `eval(Evaluator,optional)`: Evaluator for the model. See evaluator docs for more.

* `preprocess(Preprocesses, optional)`: Preprocessing function. See more on preprocesses docs.

##### Defining arguments before training an SKlearn molecular model

```python
from jaqpotpy.datasets import SmilesDataset
from jaqpotpy.doa.doa import Leverage
from jaqpotpy.models.evaluator import Evaluator
from jaqpotpy.descriptors.molecular import MACCSKeysFingerprint
from sklearn.metrics import accuracy_score, roc_auc_score

# Declare the Featurizer and the Evaluator's metrics
featurizer = TopologicalFingerprint()
val = Evaluator()
val.register_scoring_function('ACC', accuracy_score)
val.register_scoring_function('AUC', roc_auc_score)
# Create test dataset
train_dataset = SmilesDataset(smiles = [train_smiles], y = [train_y], featurizer = featurizer, task='classification')
jaq_train.create()
# Create validation dataset
validation_dataset = SmilesDataset(smiles = [validation_smiles], y = [validation_y], featurizer = featurizer, task='classification')
validation_dataset.create()
#Update the Evaluator's dataset
val.dataset = jaq_val
```

Now you can create an sklearn model with the above inputs and perform various actions.

```python
from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier()
model = MolecularSKLearn(train_dataset,doa=Leverage(), model=knn, eval=val)
# Fit the model 
trained = model.fit()
# Make a prediction on a smile
trained('Cc1cc(NS(=O)(=O)c2ccc(N)cc2)no1')
trained.prediction
```
