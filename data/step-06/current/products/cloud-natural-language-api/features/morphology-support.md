---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.626Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Morphology support"
feature_slug: "morphology-support"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/morphology"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-syntax"
  - "https://docs.cloud.google.com/natural-language/docs/classify-text-tutorial"
keywords:
  - "morphology"
  - "adds"
  - "morphological"
  - "information"
  - "to"
  - "returned"
  - "syntax"
  - "tokens"
---

# Morphology support

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

Morphology support adds morphological information to returned syntax tokens.

## Extended Definition

Morphology support adds morphological information to returned syntax tokens.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- [https://docs.cloud.google.com/natural-language/docs/classify-text-tutorial](https://docs.cloud.google.com/natural-language/docs/classify-text-tutorial)

## Supporting Pages

### "Morphology & Dependency Trees \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The analyzeSyntax response returns morphological information in the partOfSpeech field and the syntactic relationship between words in the dependencyTree field.
- For each token in the text, the Natural Language API provides information about its internal structure (morphology) and its role in the sentence (syntax).
- Dependency trees Within a syntactic request, part-of-speech and morphological information are returned within the response's partOfSpeech field.
- Parts of Speech Within a syntactic request, part-of-speech and morphological information are returned within the response's partOfSpeech field.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that this offset is calculated using the passed encodingType . content contains the actual textual content from the original text. partOfSpeech provides grammatical information, including morphological information , about the token, such as the token's tense, person, number, gender, etc. (For more complete information on these fields, consult the Morphology & Dependency Trees guide.) lemma contains the "root" word upon which this word is based, which allows you to canonicalize word usage within your text.
- The syntactic and morphological information associated with these tokens are useful for understanding the syntactic structure of sentences within the Natural Language API.
- Once these tokens are extracted, the Natural Language API processes them to determine their associated part of speech (including morphological information) and lemma.
- The Natural Language API then processes the tokens and, using their locations within sentences, adds syntactic information to the tokens.

### Analyzing Syntax \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "sentences": [ { "text": { "content": "Google, headquartered in Mountain View, unveiled the new Android phone at the Consumer Electronic Show.", "beginOffset": 0 } }, { "text": { "content": "Sundar Pichai said in his keynote that users love their new Android phones.", "beginOffset": 105 } } ], "tokens": [ { "text": { "content": "Google", "beginOffset": 0 }, "partOfSpeech": { "tag": "NOUN", "aspect": "ASPECT UNKNOWN", "case": "CASE UNKNOWN", "form": "FORM UNKNOWN", "gender": "GENDER UNKNOWN", "mood": "MOOD UNKNOWN", "number": "SINGULAR", "person": "PERSON UNKNOWN", "proper": "PROPER", "reciprocity": "RECIPROCITY UNKNOWN", "tense": "TENSE UNKNOWN", "voice": "VOICE UNKNOWN" }, "dependencyEdge": { "headTokenIndex": 7, "label": "NSUBJ" }, "lemma": "Google" }, ... { "text": { "content": ".", "beginOffset": 179 }, "partOfSpeech": { "tag": "PUNCT", "aspect": "ASPECT UNKNOWN", "case": "CASE UNKNOWN", "form": "FORM UNKNOWN", "gender": "GENDER UNKNOWN", "mood": "MOOD UNKNOWN", "number": "NUMBER UNKNOWN", "person": "PERSON UNKNOWN", "proper": "PROPER UNKNOWN", "reciprocity": "RECIPROCITY UNKNOWN", "tense": "TENSE UNKNOWN", "voice": "VOICE UNKNOWN" }, "dependencyEdge": { "headTokenIndex": 20, "label": "P" }, "lemma": "." } ], "language": "en" } The tokens array contains Token objects representing the detected sentence tokens, which include information such as a token's part of speech and its position in the sentence. gcloud Refer to the analyze-syntax command for complete details.
- To perform syntax analysis on a file in Cloud Storage, use the gcloud command line tool and use the --content-file flag to identify the file path that contains the content to analyze: gcloud ml language analyze-syntax --content-file=gs:// YOUR BUCKET NAME / YOUR FILE NAME If the request is successful, the server returns a response in JSON format: { "sentences": [ { "text": { "content": "Hello, world!", "beginOffset": 0 } } ], "tokens": [ { "text": { "content": "Hello", "beginOffset": 0 }, "partOfSpeech": { "tag": "X", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "DISCOURSE" }, "lemma": "Hello" }, { "text": { "content": ",", "beginOffset": 5 }, "partOfSpeech": { "tag": "PUNCT", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": "," }, // ... ], "language": "en" } The tokens array contains Token objects representing the detected sentence tokens, which include information such as a token's part of speech and its position in the sentence.
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Need to specify an encodingType to receive word offsets const encodingType = 'UTF8' ; // Detects the sentiment of the document const [ syntax ] = await client . analyzeSyntax ({ document , encodingType }); console . log ( 'Parts of speech:' ); syntax . tokens . forEach ( part = > { console . log ( ${ part . partOfSpeech . tag } : ${ part . text . content } ); console . log ( 'Morphology:' , part . partOfSpeech ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "sentences": [ { "text": { "content": "Hello, world!", "beginOffset": 0 } } ], "tokens": [ { "text": { "content": "Hello", "beginOffset": 0 }, "partOfSpeech": { "tag": "X", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "DISCOURSE" }, "lemma": "Hello" }, { "text": { "content": ",", "beginOffset": 5 }, "partOfSpeech": { "tag": "PUNCT", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": "," }, // ... ], "language": "en" } The tokens array contains Token objects representing the detected sentence tokens, which include information such as a token's part of speech and its position in the sentence. gcloud Refer to the analyze-syntax command for complete details.

### "Content Classification Tutorial \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/classify-text-tutorial](https://docs.cloud.google.com/natural-language/docs/classify-text-tutorial)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . def query ( index file , text , n top = 3 ): """Find the indexed files that are the most similar to the query text. """ with open ( index file ) as f : index = json . load ( f ) Get the categories of the query text. query categories = classify ( text , verbose = False ) similarities = [] for filename , categories in index . items (): similarities . append (( filename , similarity ( query categories , categories ))) similarities = sorted ( similarities , key = lambda p : p [ 1 ], reverse = True ) print ( "=" 20 ) print ( f "Query: { text } \n " ) for category , confidence in query categories . items (): print ( f " \t Category: { category } , confidence: { confidence } " ) print ( f " \n Most similar { n top } indexed texts:" ) for filename , sim in similarities [: n top ]: print ( f " \t Filename: { filename } " ) print ( f " \t Similarity: { sim } " ) print ( " \n " ) return similarities To do this from the command line, run: python classify text tutorial.py query index.json "Google Home enables users to speak voice commands to interact with services through the Home's intelligent personal assistant called Google Assistant.
- PLAIN TEXT ) response = language client . classify text ( request = { "document" : document }) categories = response . categories result = {} for category in categories : Turn the categories into a dictionary of the form: {category.name: category.confidence}, so that they can be treated as a sparse vector. result [ category . name ] = category . confidence if verbose : print ( text ) for category in categories : print ( "=" 20 ) print ( " {:<16} : {} " . format ( "category" , category . name )) print ( " {:<16} : {} " . format ( "confidence" , category . confidence )) return result The returned result is a dictionary with the category labels as keys, and confidence scores as values, such as: { "/Computers & Electronics": 0.800000011920929, "/Internet & Telecom/Mobile & Wireless/Mobile Apps & Add-Ons": 0.6499999761581421 } The tutorial Python script is organized so that it can be run from the command line for quick experiments.
- For more information, see Set up authentication for a local development environment . def index ( path , index file ): """Classify each text file in a directory and write the results to the index file. """ result = {} for filename in os . listdir ( path ): file path = os . path . join ( path , filename ) if not os . path . isfile ( file path ): continue try : with open ( file path ) as f : text = f . read () categories = classify ( text , verbose = False ) result [ filename ] = categories except Exception : print ( f "Failed to process { file path } " ) with open ( index file , "w" , encoding = "utf-8" ) as f : f . write ( json . dumps ( result , ensure ascii = False )) print ( f "Texts indexed in file: { index file } " ) return result The results from the Cloud Natural Language API for each file are organized into a single dictionary, serialized as a JSON string, and then written to a file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

