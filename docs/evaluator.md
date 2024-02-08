---
id: evaluator
title: Evaluators
sidebar_label: evaluator
---
## Main Import

`import jaqpotpy.models.evaluator`

### Evaluator
#### CLASS: Evaluator()

This object uses an evaluator to validate models on a validation dataset.

```python
import jaqpotpy.models.evaluator import Evaluator
val = Evaluator()
```

You can register your own metrics from sklearn and also register a SmilesDataset(see more on Molecular_datasets docs).  
sklearn: **https://scikit-learn.org/stable/**

```python
from sklearn.metrics import accuracy_score
# Register a metric - scoring function
val.register_scoring_function('ACC', accuracy_score)
# Register a SmilesDataset 
val.dataset = validation_dataset
```
