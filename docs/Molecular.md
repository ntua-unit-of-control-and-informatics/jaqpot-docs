## Main Import

`import jaqpotpy.descriptors.molecular`

## References

Code and descriptors are based on open-source DeepChem Library:
**https://github.com/deepchem/deepchem**

### MACCSKeysFingerprint
#### CLASS: MACCSKeysFingerprint()

Class for computing chemical descriptors for molecules using MACCS (Molecular ACCess System). For each molecule it calculates a total of 167 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features.
Reference: **https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py**

##### Example:

```python
from jaqpotpy.descriptors.molecular import MACCSKeysFingerprint

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = MACCSKeysFingerprint()
# Create numpy array of features
features = featurizer.featurize(smiles)
# Create dataframe of features
features_df = featurizer.featurize_dataframe(smiles)
```

### RDKitDescriptors
#### CLASS: RDKitDescriptors(use_fragment=True, ipc_avg=True)

Class for computing chemical descriptors for molecules using RDKit library. For each molecule it calculates a total of 208 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. RDkit package must be installed.
Reference: **https://www.rdkit.org/**

#### Parameters

* `use_fragment(bool,optional)` : If fragment binary descriptors are included.
*  `ipc_avg(bool,optional)` : If IPC descriptor calculates with rdkit avg=True option.

##### Example
```python
from jaqpotpy.descriptors.molecular import RDKitDescriptors

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = RDKitDescriptors()
features = featurizer.featurize(smiles)
```

### PubChemFingerprint
#### CLASS: PubChemFingerprint()

Class for computing chemical descriptors for molecules using PubChem. For each molecule it calculates a total of 881 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. RDkit and PubChemPy packages must be installed.
Reference: **https://web.cse.ohio-state.edu/~zhang.10631/bak/drugreposition/list_fingerprints.pdf**

###### Example
```python
from jaqpotpy.descriptors.molecular import PubChemFingerprint

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = PubChemFingerprint()
features = featurizer.features(smiles)
```

### MordredDescriptors
#### CLASS: MordredDescriptors(ignore_3D = True)

Class for computing chemical descriptors for molecules using Mordred Descriptors. For each molecule it calculates a total of 1613 features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. Mordred package must be installed.
Reference: **http://mordred-descriptor.github.io/documentation/master/descriptors.html** 

#### Parameters

* `ignore_3D(bool,optional)` : If 3D information is used.

##### Example

```python
from jaqpotpy.descriptors.molecular import MordredDescriptors

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = MordredDescriptors()
features = featurizer.featurize(smiles)
```

### TopologicalFingerprint
#### CLASS: TopologicalFingerprint(radius=2,size=2048,chiral=False,bonds=True,features=False,sparse=False,smiles=False)

Class for computing molecular Circular (Morgan) fingerprints. For each molecule it calculates a total of 2048 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features.
**https://pubmed.ncbi.nlm.nih.gov/20426451/**

#### Parameters

* `radius(int,optional)`: Specify fingerprint radius.
* `size(int,optional)`: Length of features.
* `chiral(bool,optional)`: If chirality is used for fingerprint generation.
* `bonds(bool,optional)`: If bonds are used for fingerprint generation.
* `features(bool,optional)`: If feature information is used insteam of atom information.
* `sparse(bool,optional)`: Returns dict with sparse fingerprint.
* `smiles(bool,optional)`: Calculates SMILES strings for fragment IDs.

##### Example

```python
from jaqpotpy.descriptors.molecular import TopologicalFingerprint

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = TopologicalFingerprint()
features = featurizer.featurize(smiles)
```

### SmilesToImage
#### CLASS: SmilesToImage(img_size=80, res=0.5, max_len=250, img_spec="std")

Class for converting a SMILES string to an image tensor.
Reference: **https://dl.acm.org/doi/10.1145/3219819.3219838**

#### Parameters

* `img_size(int,optional)`: Size of output tensor.
* `res(float,optional)`: Resolution of each pixel in Angstrom. 
* `max_len(int,optional)`: Maximum length of input SMILES string.
* `img_spec(str,optional)`: Channel organization of the image tensor, ("std","engd").

##### Example

```python
from jaqpotpy.descriptors.molecular import SmilesToImage

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = SmilesToImage()
images = featurizer.featurize(smiles)
```

### SmilesToSeq
#### CLASS: SmilesToSeq(char_to_idx, max_len=250,pad_len)

Class for converting a SMILES string into a sequence. Use `.featurize` to convert.
Reference: **https://dl.acm.org/doi/10.1145/3219819.3219838**

#### Parameters

* `char_to_idx(dict)`: Dictionary containing character to index mapping for unique characters. Must be dict{str: int}.
* `max_len(int,optional)`: Maximum length of the SMILES string.
* `pad_len(int,optional)`: Amount of padding to add on either side of the SMILES seq.

##### Example

```python
from jaqpotpy.descriptors.molecular import SmilesToSeq

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = SmilesToSeq(char_to_idx=....)
sequence = featurizer.featurize(smiles)
```

### OneHotSequence  
#### CLASS: OneHotSequence(charset = ZINC_CHARSET, max_length = 100)

Class for converting a string or a molecule to a one hot array.  Use `.featurize` to convert.

#### Parameters

* `charset(list,optional)` : List of string where each string is length 1 and unique.
* `max_length(int,optional)` : Max length of each string.

##### Example
```python
from jaqpotpy.descriptors.molecular import OneHotSequence

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = OneHotSequence()
one_hot = featurizer.featurize(smiles)
```

### MolGraphConvFeaturizer
#### CLASS : MolGraphConvFeaturizer(use_edges=False, use_chirality=False, use_partial_charge=False)

Class for featurizing molecules for graph convolution. It calculates node(atom) features, adjacency matrix and edge(bond) features. Default feature representations are based on **https://arxiv.org/abs/1603.00856**. Node features are 30 and edge features are 11. Use `.featurize` method to obtain the features.

#### Parameters

* `use_edges(bool,optional)`: If edge features are calculated.
* `use_chirality(bool,optional)`: If chirality is used in features.
* `use_partial_charge(bool,optional)`: If partial charge data are used.

##### Example

```python
from jaqpotpy.descriptors.molecular import MolGraphConvFeaturizer

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
graphconv_featurizer = MolGraphConvFeaturizer(use_edges=True)
graphconv = graphconv_featurizer.featurize(smiles)

# Numpy arrays of features
graphconv[0].node_features 
graphconv[0].edge_features
graphconv[0].edge_index # Adjacency Matrix
```

### PagtnMolGraphFeaturizer
####  CLASS: PagtnMolGraphFeaturizer(max_length=5)

Class for featurizing molecules for graph convolution. It calculates node(atom) features, adjacency matrix and edge(bond) features. Default feature representations are based on PAGTN model **https://arxiv.org/abs/1905.12712**. Node features are 94 and edge features are 42. Use `.featurize` method to obtain the features.

#### Parameters

* `max_length`: Maximum distance up to which shortest paths must be considered. Paths shorter than max_length will be padded and longer will betruncated, default to 5.

##### Example

```python
from jaqpotpy.descriptors.molecular import PagtnMolGraphFeaturizer

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
pagtn_featurizer = PagtnMolGraphFeaturizer()
pagtn = pagtn_featurizer.featurize(smiles)

pagtn[0].node_features.shape
pagtn[0].edge_features.shape
pagtn[0].edge_index.shape
```

### TorchMolGraphConvFeaturizer
#### CLASS: TorchMolGraphConvFeaturizer(use_edges=False, use_chirality=False, use_partial_charge=False)

Class for featurizing molecules for graph convolution based on pytorch-geometric. It calculates node(atom) features, adjacency matrix and edge(bond) features. Default feature representations are based on **https://arxiv.org/abs/1603.00856**. Node features are 30 and edge features are 11. Use `.featurize` method to obtain the features. Also the features are of type->torch.Tensor type. Requires numpy version 1.21 to be installed.`pip install numpy==1.21.1`. Doesn't work with newer versions.

#### Parameters

* `use_edges(bool,optional)`: If edge features are calculated.
* `use_chirality(bool,optional)`: If chirality is used in features.
* `use_partial_charge(bool,optional)`: If partial charge data are used.

##### Example

```python
from jaqpotpy.descriptors.molecular import TorchMolGraphConvFeaturizer

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
torch_featurizer = TorchMolGraphConvFeaturizer(use_edges=True)
torch_features = torch_featurizer.featurize(smiles)

torch_features[0][0][1] # Adjacency Matrix
torch_features[0][1][1] # Node Features
torch_features[0][2][1] # Edge Features
```

### AttentiveFPFeaturizer
#### AttentiveFPFeaturizer(use_loops=False)

Class for featurizing molecules for  Attentive FP GNNs convolution paper **https://pubmed.ncbi.nlm.nih.gov/31408336/** . It calculates node(atom) features, adjacency matrix and edge(bond) features. Node features are 39 and edge features are 10. Use `.featurize` method to obtain the features.

#### Parameters

* `use_loops(bool,optional)`: If self loops are added.

##### Example

```python
from jaqpotpy.descriptors.molecular import AttentiveFPFeaturizer

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
att_featurizer = AttentiveFPFeaturizer()
att_features = att_featurizer.featurize(smiles)

att_features[0].edge_index
att_features[0].node_features
att_features[0].edge_features
```

### CoulombMatrix
#### CLASS: CoulombMatrix(max_atoms, remove_hydrogens=False, randomize=False, upper_tri=False, n_samples=1,seed=None)

Class to calculate Coulomb matrices for molecules. For N atoms the coulomb matrix is N x N based on the method from the paper **https://proceedings.neurips.cc/paper_files/paper/2012/hash/115f89503138416a242f40fb7d7f338e-Abstract.html**. Use `.featurize` method to calculate the matrix.

#### Parameters

* `max_atoms(int)`: Maximum number of atoms to featurize(Dimensions of the Matrix).
* `remove_hydrogens(bool,optional)`: If hydrogens are removed before processing them.
* `randomize(bool,optional)`: If matrix are randomized.
* `upper_tri(bool,optional)`: If only upper triangle of Coulomb matrix is generated.
* `n_samples(bool,optional)`: Number of samples to draw if randomize=True.
* `seed`: Generate random seed.

##### Example

```python
from jaqpotpy.descriptors.molecular import CoulombMatrix

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
cm_featurizer = CoulombMatrix(max_atoms=20)

cm_features = cm_featurizer.featurize(smiles)

# Coulomb Matrix
cm_features[0]
```

### CoulombMatrixEig
#### CLASS: CoulombMatrixEig(max_atoms, remove_hydrogens=False, randomize=False, upper_tri=False, n_samples=1,seed=None)

Class to calculate eigenvalues of Coulomb matrices for molecules. Use `.featurize` method to calculate the matrix.

#### Parameters

* `max_atoms(int)`: Maximum number of atoms to featurize(Dimensions of the Matrix).
* `remove_hydrogens(bool,optional)`: If hydrogens are removed before processing them.
* `randomize(bool,optional)`: If matrix are randomized.
* `upper_tri(bool,optional)`: If only upper triangle of Coulomb matrix is generated.
* `n_samples(bool,optional)`: Number of samples to draw if randomize=True.
* `seed`: Generate random seed.

##### Example

```python
from jaqpotpy.descriptors.molecular import CoulombMatrixEig

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
eig_featurizer = CoulombMatrixEig(max_atoms=20)

eig_features = eig_featurizer.featurize(smiles)

# EigenvaluesCoulomb Matrix
eig_features[0]
```

### MolGanFeaturizer
#### MolGanFeaturizer(max_atom_count=9,kekulize=True,sanitize=False,bond_labels=None,atom_labels=None)

Class to feauturize molecules for de-novo molecular generation based on **https://arxiv.org/abs/1805.11973**. Use `.featurize` method to get the features.

#### Parameters

* `max_atom_count`: Maximum number of atoms for adjacency matrix creation.
* `kekulize`: If molecules are kekulized.
* `bond_labels`: List of bond types for adjacency matrix creation.
* `atom_labels`: List of atom numbers used for generation of node features.

##### Example

```python
from jaqpotpy.descriptors.molecular import MolGanFeaturizer
from rdkit import Chem

smiles = ['c1cc(O)ccc1']
mol_object = Chem.MolFromSmiles('CCC')
molecules = [smiles, mol_object]
gan_featurizer = MolGanFeaturizer()

gan_features = gan_featurizer.featurize(molecules)

gan_features[0].node_features
gan_features[0].adjacency_matrix
```