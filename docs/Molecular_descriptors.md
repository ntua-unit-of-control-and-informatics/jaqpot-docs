---
id: Molecular_descriptors
title: Molecular
sidebar_label: Molecular_descriptors
keywords:
  - fingerprints
  - descriptors
  - featurizer
  - featurize
---

## Main Import

`import jaqpotpy.descriptors.molecular`

## Main Reference

Code and descriptors are based on open-source DeepChem Library:
**https://github.com/deepchem/deepchem**

### MACCSKeysFingerprint
#### CLASS: MACCSKeysFingerprint()

Class for computing chemical fingerprints for molecules using MACCS (Molecular ACCess System). For each molecule it generates a total of 167 different fingerprints. For a list of molecules in SMILES format use `.featurize(list)` to obtain the fingerprints.  
** [1] https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py**  
** [2] Durant, Joseph L.,   et al. "Reoptimization of MDL keys for use in drug discovery."
Journal of chemical information and computer sciences 42.6 (2002): 1273-1280.**
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

This class computes a list of chemical descriptors like molecular weight, number of valence electrons, maximum and minimum partial charge, etc using RDKit library. For each molecule it calculates a total of 208 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. RDkit package must be installed.   
** [1] https://www.rdkit.org/**

#### Parameters

* `use_fragment(bool,optional)` : If fragment binary descriptors are included.
* `ipc_avg(bool,optional)` : If IPC descriptor calculates with rdkit avg=True option.

##### Example
```python
from jaqpotpy.descriptors.molecular import RDKitDescriptors

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = RDKitDescriptors()
features = featurizer.featurize(smiles)
```

### PubChemFingerprint
#### CLASS: PubChemFingerprint()

Class for computing structural keys for molecules using PubChem. For each molecule it calculates a total of 881 different fingerprints. It is mainly used for similarity searching. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. PubChemPy use REST API to get the fingerprint, so you need the internet access.    
** [1] https://web.cse.ohio-state.edu/~zhang.10631/bak/drugreposition/list_fingerprints.pdf**

###### Example
```python
from jaqpotpy.descriptors.molecular import PubChemFingerprint

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = PubChemFingerprint()
features = featurizer.featurize(smiles)
```

### MordredDescriptors
#### CLASS: MordredDescriptors(ignore_3D = True)

Class for computing chemical descriptors for molecules using Mordred Descriptors. For each molecule it calculates a total of 1613 features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. This class requires Mordred to be installed.  
** [1] http://mordred-descriptor.github.io/documentation/master/descriptors.html** 

#### Parameters

* `ignore_3D(bool,optional)` : If 3D information is used for descriptor calculation.

##### Example

```python
from jaqpotpy.descriptors.molecular import MordredDescriptors

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
featurizer = MordredDescriptors()
features = featurizer.featurize(smiles)
```

### TopologicalFingerprint
#### CLASS: TopologicalFingerprint(radius=2,size=2048,chiral=False,bonds=True,features=False,sparse=False,smiles=False)

Class for computing Extended Connectivity Circular Fingerprints. Those fingerprints compute a bag-of-words style representation of a molecule by breaking it into local neighborhoods and hashing into a bit vector of the specified size. It is used specifically for structure-activity modelling molecular Circular (Morgan) fingerprints. For each molecule it calculates a total of 2048 different fingerprints. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. Rdkit is required to be installed.  
** [1] https://pubmed.ncbi.nlm.nih.gov/20426451/**

#### Parameters

* `radius(int,optional)`: Specify fingerprint radius.
* `size(int,optional)`: Length of features.
* `chiral(bool,optional)`: If chirality is used for fingerprint generation.
* `bonds(bool,optional)`: If bonds are used for fingerprint generation.
* `features(bool,optional)`: If feature information is used instead of atom information.
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

Class for converting a SMILES string to an image tensor. The default size of for the image is 80 x 80. Two image modes are currently supported - std & engd. std is the gray scale specification, with atomic numbers as pixel values for atom positions and a constant value of 2 for bond positions. engd is a 4-channel specification, which uses atom properties like hybridization, valency, charges in addition to atomic number. Bond type is also used for the bonds. The coordinates of all atoms are computed, and lines are drawn between atoms to indicate bonds. For the respective channels, the atom and bond positions are set to the property values as mentioned in the paper below.  
** [1] https://dl.acm.org/doi/10.1145/3219819.3219838**

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

Class for converting a SMILES string into a sequence. Use `.featurize` to convert. SMILES strings smaller than a specified max length (max_len) are padded using the PAD token while those larger than the max length are not considered. Based on the paper, there is also the option to add extra padding (pad_len) on both sides of the string after length normalization. Using a character to index (char_to_idx) mapping, the SMILES characters are turned into indices and the resulting sequence of indices serves as the input for an embedding layer.  
** [1] https://dl.acm.org/doi/10.1145/3219819.3219838**

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

Class for encoding any arbitrary string or molecule as a one-hot array. This featurizer encodes the characters within any given string as a one-hot array. It also works with RDKit molecules: it can convert RDKit molecules to SMILES strings and then one-hot encode the characters in said strings. Use `.featurize` to convert.

#### Parameters

* `charset(list,optional)` : List of string where each string is length 1 and unique. Default is ZINC Charset.
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

Class for featurizing molecules for graph convolution. It calculates node(atom) features, adjacency matrix and edge(bond) features. Default feature representations are based on **https://arxiv.org/abs/1603.00856** paper. Node features are 30 and edge features are 11. Use `.featurize` method to obtain the features.  
** [1] Kearnes, Steven, et al. "Molecular graph convolutions: moving beyond fingerprints." Journal of computer-aided molecular design 30.8 (2016):595-608**

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
** [1] Chen, Barzilay, Jaakkola "Path-Augmented Graph Transformer Network" 10.26434/chemrxiv.8214422.**

#### Parameters

* `max_length`: Maximum distance up to which shortest paths must be considered. Paths shorter than max_length will be padded and longer will betruncated, default to 5.

##### Example

```python
from jaqpotpy.descriptors.molecular import PagtnMolGraphFeaturizer

smiles = ['c1cc(O)ccc1', 'O=Cc1ccc(O)c(OC)c1']
pagtn_featurizer = PagtnMolGraphFeaturizer()
pagtn = pagtn_featurizer.featurize(smiles)

pagtn[0].node_features
pagtn[0].edge_features
pagtn[0].edge_index
```

### TorchMolGraphConvFeaturizer
#### CLASS: TorchMolGraphConvFeaturizer(use_edges=False, use_chirality=False, use_partial_charge=False)

Class for featurizing molecules for graph convolution based on pytorch-geometric. It calculates node(atom) features, adjacency matrix and edge(bond) features. Default feature representations are based on **https://arxiv.org/abs/1603.00856**. Node features are 30 and edge features are 11. Use `.featurize` method to obtain the features. Also the features are of type->torch.Tensor type. Requires numpy version <1.21 to be installed.. Doesn't work with newer versions.

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
** [1] Xiong Z, Wang D, Liu X, Zhong F, Wan X, Li X, Li Z, Luo X, Chen K, Jiang H, Zheng M. Pushing the Boundaries of Molecular Representation for Drug Discovery with the Graph Attention Mechanism. J Med Chem. 2020 Aug 27;63(16):8749-8760. doi: 10.1021/acs.jmedchem.9b00959. Epub 2019 Aug 27. PMID: 31408336.**
 
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

Class to calculate Coulomb matrices for molecules. For N atoms the coulomb matrix is N x N based on the method from the paper **https://proceedings.neurips.cc/paper_files/paper/2012/hash/115f89503138416a242f40fb7d7f338e-Abstract.html**. This class requires RDKit to be installed Use `.featurize` method to calculate the matrix.  
** [1] Montavon, Grégoire, et al. "Learning invariant representations of molecules for atomization energy prediction." Advances in neural information processing systems. 2012.**

#### Parameters

* `max_atoms(int)`: Maximum number of atoms to featurize (Dimensions of the Matrix).
* `remove_hydrogens(bool,optional)`: If hydrogens are removed before processing them.
* `randomize(bool,optional)`: If matrix are randomized.
* `upper_tri(bool,optional)`: If only upper triangle of Coulomb matrix is generated.
* `n_samples(bool,optional)`: Number of samples to draw if randomize=True.
* `seed`: Generate random seed for deterministic results.

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
** [1] Montavon, Grégoire, et al. "Learning invariant representations of molecules for atomization energy prediction." Advances in neural information processing systems. 2012.**


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