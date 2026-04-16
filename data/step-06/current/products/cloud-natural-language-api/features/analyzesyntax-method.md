---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.624Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "analyzeSyntax method"
feature_slug: "analyzesyntax-method"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-syntax"
  - "https://docs.cloud.google.com/natural-language/docs/morphology"
  - "https://docs.cloud.google.com/natural-language/docs/reference/rest"
keywords:
  - "analyzesyntax"
  - "method"
  - "the"
  - "performs"
  - "syntactic"
  - "analysis"
  - "on"
  - "text"
---

# analyzeSyntax method

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

The analyzeSyntax method performs syntactic analysis on text.

## Extended Definition

The analyzeSyntax method performs syntactic analysis on text.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- [https://docs.cloud.google.com/natural-language/docs/reference/rest](https://docs.cloud.google.com/natural-language/docs/reference/rest)

## Supporting Pages

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Syntactic analysis requests Syntactic Analysis requests are sent to the Natural Language API through use of the analyzeSyntax method in the following form: { "document" : { "type" : "PLAIN TEXT" , "content" : "Ask not what your country can do for you, ask what you can do for your country." }, "encodingType" : "UTF8" } Syntactic analysis responses The Natural Language API processes the given text to extract sentences and tokens.
- These features are listed below: extractDocumentSentiment performs sentiment analysis, as described in the Sentiment Analysis section. extractEntities performs entity analysis, as described in the Entity Analysis section. extractSyntax indicates that the given text should be processed to perform syntactic analysis, as described in the Syntactic Analysis section.
- For example, the following sentences element is received for a Syntactic Analysis request of the Gettysburg Address: { "sentences" : [ { "text" : { "content" : "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal." , "beginOffset" : 0 } }, { "text" : { "content" : "Now we are engaged in a great civil war, testing whether that nation or any nation so conceived and so dedicated can long endure." , "beginOffset" : 175 } }, ... ... { "text" : { "content" : "It is rather for us to be here dedicated to the great task remaining before us--that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion--that we here highly resolve that these dead shall not have died in vain, that this nation under God shall have a new birth of freedom, and that government of the people, by the people, for the people shall not perish from the earth." , "beginOffset" : 1002 } } ], "language" : "en" } A syntactic analysis request to the Natural Language API will also include a set of tokens.
- Array of tokens with token information ] } Sentence extraction When performing syntactic analysis, the Natural Language API returns an array of sentences extracted from the provided text, with each sentence containing the following fields within a text parent: beginOffset indicating the (zero-based) character offset within the given text where the sentence begins.

### Analyzing Syntax \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analyzing Syntax in a String Here is an example of performing syntactic analysis on a text string sent directly to the Natural Language API: Protocol To analyze syntax in a document, make a POST request to the documents:analyzeSyntax REST method and provide the appropriate request body as shown in the following example.
- Protocol To analyze syntax in a document stored in Cloud Storage, make a POST request to the documents:analyzeSyntax REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'encodingType': 'UTF8', 'document': { 'type': 'PLAIN TEXT', 'gcsContentUri': 'gs:// <bucket-name> / <object-name> ' } }" "https://language.googleapis.com/v1/documents:analyzeSyntax" If you don't specify document.language , then the language will be automatically detected.
- Syntactic Analysis breaks up the given text into a series of sentences and tokens (generally, words) and provides linguistic information about those tokens.
- UTF16 ) . build (); // Analyze the syntax in the given text AnalyzeSyntaxResponse response = language . analyzeSyntax ( request ); // Print the response for ( Token token : response . getTokensList ()) { System . out . printf ( "\tText: %s\n" , token . getText (). getContent ()); System . out . printf ( "\tBeginOffset: %d\n" , token . getText (). getBeginOffset ()); System . out . printf ( "Lemma: %s\n" , token . getLemma ()); System . out . printf ( "PartOfSpeechTag: %s\n" , token . getPartOfSpeech (). getTag ()); System . out . printf ( "\tAspect: %s\n" , token . getPartOfSpeech (). getAspect ()); System . out . printf ( "\tCase: %s\n" , token . getPartOfSpeech (). getCase ()); System . out . printf ( "\tForm: %s\n" , token . getPartOfSpeech (). getForm ()); System . out . printf ( "\tGender: %s\n" , token . getPartOfSpeech (). getGender ()); System . out . printf ( "\tMood: %s\n" , token . getPartOfSpeech (). getMood ()); System . out . printf ( "\tNumber: %s\n" , token . getPartOfSpeech (). getNumber ()); System . out . printf ( "\tPerson: %s\n" , token . getPartOfSpeech (). getPerson ()); System . out . printf ( "\tProper: %s\n" , token . getPartOfSpeech (). getProper ()); System . out . printf ( "\tReciprocity: %s\n" , token . getPartOfSpeech (). getReciprocity ()); System . out . printf ( "\tTense: %s\n" , token . getPartOfSpeech (). getTense ()); System . out . printf ( "\tVoice: %s\n" , token . getPartOfSpeech (). getVoice ()); System . out . println ( "DependencyEdge" ); System . out . printf ( "\tHeadTokenIndex: %d\n" , token . getDependencyEdge (). getHeadTokenIndex ()); System . out . printf ( "\tLabel: %s\n\n" , token . getDependencyEdge (). getLabel ()); } return response . getTokensList (); } Node.js To learn how to install and use the client library for Natural Language, see Natural Language client libraries .

### "Morphology & Dependency Trees \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parsing a syntactic analysis response The following pseudo-code provides a common pattern to use when performing iterative operations on the syntactic analysis response: index = 0 for sentence in self.sentences: content = sentence['text']['content'] sentence begin = sentence['text']['beginOffset'] sentence end = sentence begin + len(content) - 1 while index Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For each sentence within the text provided to the Natural Language API for syntactic analysis, the API constructs a dependency tree that describes the syntactic structure of that sentence.
- The analyzeSyntax response returns morphological information in the partOfSpeech field and the syntactic relationship between words in the dependencyTree field.
- The analyzeSyntax method returns details about the linguistic structure of the given text.

### Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/reference/rest](https://docs.cloud.google.com/natural-language/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta2.documents Methods analyze Entities POST /v1beta2/documents:analyzeEntities Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties. analyze Entity Sentiment POST /v1beta2/documents:analyzeEntitySentiment Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions. analyze Sentiment POST /v1beta2/documents:analyzeSentiment Analyzes the sentiment of the provided text. analyze Syntax POST /v1beta2/documents:analyzeSyntax Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties. annotate Text POST /v1beta2/documents:annotateText A convenience method that provides all syntax, sentiment, entity, and classification features in one call. classify Text POST /v1beta2/documents:classifyText Classifies a document into categories. moderate Text POST /v1beta2/documents:moderateText Moderates a document for harmful and sensitive categories.
- REST Resource: v1.documents Methods analyze Entities POST /v1/documents:analyzeEntities Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties. analyze Entity Sentiment POST /v1/documents:analyzeEntitySentiment Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions. analyze Sentiment POST /v1/documents:analyzeSentiment Analyzes the sentiment of the provided text. analyze Syntax POST /v1/documents:analyzeSyntax Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties. annotate Text POST /v1/documents:annotateText A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call. classify Text POST /v1/documents:classifyText Classifies a document into categories. moderate Text POST /v1/documents:moderateText Moderates a document for harmful and sensitive categories.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://language.googleapis.com REST Resource: v2.documents Methods analyze Entities POST /v2/documents:analyzeEntities Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties. analyze Sentiment POST /v2/documents:analyzeSentiment Analyzes the sentiment of the provided text. annotate Text POST /v2/documents:annotateText A convenience method that provides all features in one call. classify Text POST /v2/documents:classifyText Classifies a document into categories. moderate Text POST /v2/documents:moderateText Moderates a document for harmful and sensitive categories.
- Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.

