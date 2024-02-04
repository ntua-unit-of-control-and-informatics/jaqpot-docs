---
id: doa
title: Domain of Applicability
sidebar_label: doa
keywords:
  - fit
  - predict
---

## Main Import

`import jaqpotpy.doa.doa`

Implementing domain of applicability methods for molecules.

### Leverage
#### CLASS Leverage()

Implements DOA method leverage.Initialized upon training data and holds the doa matrix and the threshold 'A' value. Calculates the DOA for a new instance of data or array of data.

##### Example

```python
from jaqpotpy.doa.doa import Leverage
# Create DOA object
doa = Leverage()
```
You can perform various actions once instantiating a Leverage object:

```python
# Use numpy array of features to fit the DOA
# .fit calculates doa_matrix and threshold value
doa.fit(np.array)
# Check doa matrix
doa.doa_matrix
# Check threshold
doa.a
# Predict if unseen features are on doa  (must be numpy array)
doa.predict(np.array)
```

### MeanVar
#### CLASS: MeanVar()

Implements Mean and Variance domain of applicability. Initialized upon training data and holds the doa mean and the variance of the data.Calculates the mean and variance for a new instance of data or array of data and decides if in AD.

```python
from jaqpotpy.doa.doa import MeanVar
# Create DOA object
doa = MeanVar()
```
You can perform same actions once instantiating a MeanVar object:

```python
# Use numpy array of features to fit DOA
# .fit calculates doa_matrix and threshold value
doa.fit(np.array)
# Check doa matrix
doa.doa_matrix
# Check threshold
doa.a
# Predict if unseen features are on doa  (must be numpy array)
doa.predict(np.array)
```

### SmilesLeverage
#### CLASS SmilesLeverage()

Implements DOA method leverage given an array of smiles. Descriptors and data matrix is calculated with rdkit descriptors. Initialized upon training data and holds the doa matrix and the threshold 'A' value.
Calculates the DOA for a new instance of data or array of data.

```python
from jaqpotpy.doa.doa import SmilesLeverage
# Create DOA object
doa = SmilesLeverage()
```

You can perform various actions once instantiating a SmilesLeverage object:

```python
# Use smiles strings to fit the DOA
smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
doa.fit(smiles)
# Check doa matrix
doa.doa_matrix
# Check threshold
doa.a
# Predict if unseen SMILES are on doa (must be Smiles string)
doa.predict(smiles_)
```


