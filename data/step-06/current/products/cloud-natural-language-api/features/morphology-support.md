---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.649Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Morphology support"
feature_slug: "morphology-support"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/morphology"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-syntax"
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
Coverage: LOW

## Step 02 Summary

Morphology support adds morphological information to returned syntax tokens.

## Extended Definition

Morphology support adds morphological information to returned syntax tokens.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)

## Supporting Pages

### "Morphology & Dependency Trees \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The analyzeSyntax response returns morphological information in the partOfSpeech field and the syntactic relationship between words in the dependencyTree field.
- For each token in the text, the Natural Language API provides information about its internal structure (morphology) and its role in the sentence (syntax).
- Dependency trees Within a syntactic request, part-of-speech and morphological information are returned within the response's partOfSpeech field.
- Parts of Speech Within a syntactic request, part-of-speech and morphological information are returned within the response's partOfSpeech field.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that this offset is calculated using the passed encodingType . content contains the actual textual content from the original text. partOfSpeech provides grammatical information, including morphological information , about the token, such as the token's tense, person, number, gender, etc. (For more complete information on these fields, consult the Morphology & Dependency Trees guide.) lemma contains the "root" word upon which this word is based, which allows you to canonicalize word usage within your text.
- The syntactic and morphological information associated with these tokens are useful for understanding the syntactic structure of sentences within the Natural Language API.
- Once these tokens are extracted, the Natural Language API processes them to determine their associated part of speech (including morphological information) and lemma.
- The Natural Language API then processes the tokens and, using their locations within sentences, adds syntactic information to the tokens.

### Analyzing Syntax \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "sentences": [ { "text": { "content": "Google, headquartered in Mountain View, unveiled the new Android phone at the Consumer Electronic Show.", "beginOffset": 0 } }, { "text": { "content": "Sundar Pichai said in his keynote that users love their new Android phones.", "beginOffset": 105 } } ], "tokens": [ { "text": { "content": "Google", "beginOffset": 0 }, "partOfSpeech": { "tag": "NOUN", "aspect": "ASPECT UNKNOWN", "case": "CASE UNKNOWN", "form": "FORM UNKNOWN", "gender": "GENDER UNKNOWN", "mood": "MOOD UNKNOWN", "number": "SINGULAR", "person": "PERSON UNKNOWN", "proper": "PROPER", "reciprocity": "RECIPROCITY UNKNOWN", "tense": "TENSE UNKNOWN", "voice": "VOICE UNKNOWN" }, "dependencyEdge": { "headTokenIndex": 7, "label": "NSUBJ" }, "lemma": "Google" }, ... { "text": { "content": ".", "beginOffset": 179 }, "partOfSpeech": { "tag": "PUNCT", "aspect": "ASPECT UNKNOWN", "case": "CASE UNKNOWN", "form": "FORM UNKNOWN", "gender": "GENDER UNKNOWN", "mood": "MOOD UNKNOWN", "number": "NUMBER UNKNOWN", "person": "PERSON UNKNOWN", "proper": "PROPER UNKNOWN", "reciprocity": "RECIPROCITY UNKNOWN", "tense": "TENSE UNKNOWN", "voice": "VOICE UNKNOWN" }, "dependencyEdge": { "headTokenIndex": 20, "label": "P" }, "lemma": "." } ], "language": "en" } The tokens array contains Token objects representing the detected sentence tokens, which include information such as a token's part of speech and its position in the sentence. gcloud Refer to the analyze-syntax command for complete details.
- To perform syntax analysis on a file in Cloud Storage, use the gcloud command line tool and use the --content-file flag to identify the file path that contains the content to analyze: gcloud ml language analyze-syntax --content-file=gs:// YOUR BUCKET NAME / YOUR FILE NAME If the request is successful, the server returns a response in JSON format: { "sentences": [ { "text": { "content": "Hello, world!", "beginOffset": 0 } } ], "tokens": [ { "text": { "content": "Hello", "beginOffset": 0 }, "partOfSpeech": { "tag": "X", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "DISCOURSE" }, "lemma": "Hello" }, { "text": { "content": ",", "beginOffset": 5 }, "partOfSpeech": { "tag": "PUNCT", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": "," }, // ... ], "language": "en" } The tokens array contains Token objects representing the detected sentence tokens, which include information such as a token's part of speech and its position in the sentence.
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Need to specify an encodingType to receive word offsets const encodingType = 'UTF8' ; // Detects the sentiment of the document const [ syntax ] = await client . analyzeSyntax ({ document , encodingType }); console . log ( 'Parts of speech:' ); syntax . tokens . forEach ( part = > { console . log ( ${ part . partOfSpeech . tag } : ${ part . text . content } ); console . log ( 'Morphology:' , part . partOfSpeech ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "sentences": [ { "text": { "content": "Hello, world!", "beginOffset": 0 } } ], "tokens": [ { "text": { "content": "Hello", "beginOffset": 0 }, "partOfSpeech": { "tag": "X", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "DISCOURSE" }, "lemma": "Hello" }, { "text": { "content": ",", "beginOffset": 5 }, "partOfSpeech": { "tag": "PUNCT", // ... }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": "," }, // ... ], "language": "en" } The tokens array contains Token objects representing the detected sentence tokens, which include information such as a token's part of speech and its position in the sentence. gcloud Refer to the analyze-syntax command for complete details.

