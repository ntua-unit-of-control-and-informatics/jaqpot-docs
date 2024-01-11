## jaqpotpy.descriptors.molecular

#### CLASS: MACCSKeysFingerprint()

Class for computing chemical descriptors for molecules using MACCS (Molecular ACCess System). For each molecule it calculates a total of 167 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features.
**https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py**

###### Example:

```python
from jaqpotpy.descriptors.molecular import MACCSKeysFingerprint

smiles = ['c1cc(O)ccc1']
featurizer = MACCSKeysFingerprint()
# Create numpy array of features
features = featurizer.featurize(smiles)
```

#### CLASS: RDKitDescriptors(use_fragment=True, ipc_avg=True)

Class for computing chemical descriptors for molecules using RDKit library. For each molecule it calculates a total of 208 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. RDkit package must be installed.
**https://www.rdkit.org/**

##### Parameters

* `use_fragment(bool,optional)` : If fragment binary descriptors are included.
*  `ipc_avg(bool,optional)` : If IPC descriptor calculates with rdkit avg=True option.

###### Example
```python
from jaqpotpy.descriptors.molecular import RDKitDescriptors

smiles = ['c1cc(O)ccc1']
featurizer = RDKitDescriptors()
# Create numpy array of features
features = featurizer.featurize(smiles)
```

#### CLASS: PubChemFingerprint()

Class for computing chemical descriptors for molecules using RDKit library. For each molecule it calculates a total of 881 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. RDkit package must be installed-> `pip install rdkit`.
**https://web.cse.ohio-state.edu/~zhang.10631/bak/drugreposition/list_fingerprints.pdf**

###### Example
```python
from jaqpotpy.descriptors.molecular import PubChemFingerprint

smiles = ['c1cc(O)ccc1']
featurizer = PubChemFingerprint()
# Create numpy array of features
features_numpy = featurizer.features(smiles)
```

#### CLASS: MordredDescriptors(ignore_3D = True)

Class for computing chemical descriptors for molecules using Mordred Descriptors. For each molecule it calculates a total of 1613 features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features. Mordred package must be installed-> `pip install mordred`.
**https://jcheminf.biomedcentral.com/articles/10.1186/s13321-018-0258-y**

##### Parameters

* `ignore_3D(bool,optional)` : If 3D information is used.

###### Example

```python
from jaqpotpy.descriptors.molecular import MordredDescriptors

smiles = ['c1cc(O)ccc1']
featurizer = MordredDescriptors()
# Create numpy array of features
features = featurizer.featurize(smiles)
```

#### CLASS: TopologicalFingerprint(radius=2,size=2048,chiral=False,bonds=True,features=False,sparse=False,smiles=False)

Class for computing molecular Circular (Morgan) fingerprints. For each molecule it calculates a total of 2048 different features. For a list of molecules in SMILES format use `.featurize(list)` to obtain the features.
**https://pubmed.ncbi.nlm.nih.gov/20426451/**

##### Parameters

* `radius(int,optional)`: Specify fingerprint radius
* `size(int,optional)`: Length of features
* `chiral(bool,optional)`: If chirality is used for fingerprint generation
* `bonds(bool,optional)`: If bonds are used for fingerprint generation.
* `features(bool,optional)`: If feature information is used insteam of atom information.
* `sparse(bool,optional)`: Returns dict with sparse fingerprint.
* `smiles(bool,optional)`: Calculates SMILES strings for fragment IDs.

###### Example

```python
from jaqpotpy.descriptors.molecular import TopologicalFingerprint

smiles = ['c1cc(O)ccc1']
featurizer = TopologicalFingerprint()
# Create numpy array of features
features = featurizer.featurize(smiles)
```

#### CLASS: SmilesToImage(img_size=80, res=0.5, max_len=250, img_spec="std")

Class for converting a SMILES string to an image tensor. Rdkit library must be installed.
**https://dl.acm.org/doi/10.1145/3219819.3219838**

##### Parameters

* `img_size(int,optional)`: Size of output tensor.
* `res(float,optional)`: Resolution of each pixel in Angstrom. 
* `max_len(int,optional)`: Maximum length of input SMILES string.
* `img_spec(str,optional)`: Channel organization of the image tensor, ("std","engd").

###### Example

```python
from jaqpotpy.descriptors.molecular import SmilesToImage

smiles = ['c1cc(O)ccc1']
featurizer = SmilesToImage()
# Create numpy array
images = featurizer.featurize(smiles)
```

#### CLASS: SmilesToSeq(char_to_idx, max_len=250,pad_len)

Class for converting a SMILES string into a sequence. Use `.featurize` to convert.
**https://dl.acm.org/doi/10.1145/3219819.3219838**

##### Parameters

* `char_to_idx(dict)`: Dictionary containing character to index mapping for unique characters. Must be dict{str: int}.
* `max_len(int,optional)`: Maximum length of the SMILES string.
* `pad_len(int,optional)`: Amount of padding to add on either side of the SMILES seq.

###### Example

```python
from jaqpotpy.descriptors.molecular import SmilesToSeq

smiles = ['c1cc(O)ccc1']
featurizer = SmilesToSeq(char_to_idx=....)
# Convert to sequence
sequence = featurizer.featurize(smiles)
```

#### Class: OneHotSequence(charset = ZINC_CHARSET, max_length = 100)

Class for converting a string or a molecule to a one hot array.  Use `.featurize` to convert.

##### Parameters

* `charset(list,optional)` : List of string where each string is length 1 and unique.
* `max_length(int,optional)` : Max length of each string.

###### Example
```python
from jaqpotpy.descriptors.molecular import OneHotSequence

smiles = ['c1cc(O)ccc1']
featurizer = OneHotSequence()
# Convert to one hot array given a list of smiles
one_hot = featurizer.featurize(smiles)
```








