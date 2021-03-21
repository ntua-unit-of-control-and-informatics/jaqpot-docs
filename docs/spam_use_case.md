---
id: spam
title: Spam Detector (Spam vs Ham)
sidebar_label: Spam Detector (Spam vs Ham)
---


Jaqpot provides support on text processing pipelines, including predictions on text data.

## Use Case's Description

In this use case we created a spam detector using Python and served the model through the Jaqpot platform. The dataset contained a collection of more than 5 thousand SMS phone messages and is pubilcaly available from the [UCI datasets](https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection).

## Read the Corpus

First step was to read the SMSs and the label(either 'spam' or 'ham') and pass them into a pandas DataFrame:
```python
messages = pd.read_csv('smsspamcollection/SMSSpamCollection', sep='\t', names=["label", "message"])
messages.head()
```

Then, we started preprocessing the data. In this section, we created the [bag-of-words](https://en.wikipedia.org/wiki/Bag-of-words_model). As a first step, we created a function that split a message into its individual words and returned a list. We also removed very common words, (stopwords) and the punctuation. To do this we took advantage of the NLTK library. 
```python
import string
from nltk.corpus import stopwords

def text_process(message):
    """
    Takes in a string of text, then performs the following:
    1. Remove all punctuation
    2. Remove all stopwords
    3. Returns a list of the cleaned text
    """
    # Check characters to see if they are in punctuation
    nopunc = [char for char in message if char not in string.punctuation]

    # Join the characters again to form the string.
    nopunc = ''.join(nopunc)
    
    # Now just remove any stopwords
    return [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]
```

Next step of the preprocess was the vectorization of the messages (lemmas) following the next steps:
1. Count how many times does a word occur in each message (Known as term frequency)

2. Weigh the counts, so that frequent tokens get lower weight (inverse document frequency)

3. Normalize the vectors to unit length, to abstract from the original text length (L2 norm)

In order to do that, we used the SciKit Learn's **CountVectorizer** for the first step. This model converts a collection of text documents to a matrix. 
```python
from sklearn.feature_extraction.text import CountVectorizer

bow_transformer = CountVectorizer(analyzer=text_process).fit(messages['message'])
```
After the counting, the term weighting and normalization of steps 2 and 3 was done with TF-IDF, using scikit-learn's TfidfTransformer. TF-IDF stands for term frequency-inverse document frequency, and the tf-idf weight is a weight often used in information retrieval and text mining. This weight is a statistical measure used to evaluate how important a word is to a document in a collection or corpus. The importance increases proportionally to the number of times a word appears in the document but is offset by the frequency of the word in the corpus. 

```python
from sklearn.feature_extraction.text import TfidfTransformer

tfidf_transformer = TfidfTransformer().fit(messages_bow)
```

## Train the Model

Before training the model we used the train-test split method to split the dataset into a training and a testing one.
```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(messages['message'], messages['label'], test_size=0.2)
```

For a [variety of reasons](http://www.inf.ed.ac.uk/teaching/courses/inf2b/learnnotes/inf2b-learn-note07-2up.pdf), the Naive Bayes classifier algorithm is a good choice.  Finally, we used SciKit Learn's pipeline capabilities to store a pipeline of workflow:
```python
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

pipeline = Pipeline([
    ('bow', CountVectorizer(analyzer=text_process)),  # strings to token integer counts
    ('tfidf', TfidfTransformer()),  # integer counts to weighted TF-IDF scores
    ('classifier', MultinomialNB()),  # train on TF-IDF vectors w/ Naive Bayes classifier
])

pipeline.fit(X_train, y_train)
```

## Upload on Jaqpot

To upload the model on Jaqpot we imported the package and instantiated the Jaqpot Python SDK:
```python
from jaqpotpy import Jaqpot

jaqpot = Jaqpot()
```

Then we [set our credentials](http://localhost:3000/docs/python#set-your-credientials) and we used the deploy_sklearn method:
```python
jaqpot.deploy_sklearn(pipeline, X_train, y_train, 'Spam Detector', 'This pipeline gets a message and predicts whether it is a spam message or not.')
```
