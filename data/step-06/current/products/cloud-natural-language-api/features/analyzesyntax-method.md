---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.649Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "analyzeSyntax method"
feature_slug: "analyzesyntax-method"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-syntax"
  - "https://docs.cloud.google.com/natural-language/docs/moderating-text"
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
Coverage: LOW

## Step 02 Summary

The analyzeSyntax method performs syntactic analysis on text.

## Extended Definition

The analyzeSyntax method performs syntactic analysis on text.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- [https://docs.cloud.google.com/natural-language/docs/moderating-text](https://docs.cloud.google.com/natural-language/docs/moderating-text)

## Supporting Pages

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Syntactic analysis requests Syntactic Analysis requests are sent to the Natural Language API through use of the analyzeSyntax method in the following form: { "document" : { "type" : "PLAIN TEXT" , "content" : "Ask not what your country can do for you, ask what you can do for your country." }, "encodingType" : "UTF8" } Syntactic analysis responses The Natural Language API processes the given text to extract sentences and tokens.
- These features are listed below: extractDocumentSentiment performs sentiment analysis, as described in the Sentiment Analysis section. extractEntities performs entity analysis, as described in the Entity Analysis section. extractSyntax indicates that the given text should be processed to perform syntactic analysis, as described in the Syntactic Analysis section.
- For example, the following sentences element is received for a Syntactic Analysis request of the Gettysburg Address: { "sentences" : [ { "text" : { "content" : "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal." , "beginOffset" : 0 } }, { "text" : { "content" : "Now we are engaged in a great civil war, testing whether that nation or any nation so conceived and so dedicated can long endure." , "beginOffset" : 175 } }, ... ... { "text" : { "content" : "It is rather for us to be here dedicated to the great task remaining before us--that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion--that we here highly resolve that these dead shall not have died in vain, that this nation under God shall have a new birth of freedom, and that government of the people, by the people, for the people shall not perish from the earth." , "beginOffset" : 1002 } } ], "language" : "en" } A syntactic analysis request to the Natural Language API will also include a set of tokens.
- Array of tokens with token information ] } Sentence extraction When performing syntactic analysis, the Natural Language API returns an array of sentences extracted from the provided text, with each sentence containing the following fields within a text parent: beginOffset indicating the (zero-based) character offset within the given text where the sentence begins.

### Analyzing Syntax \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-syntax](https://docs.cloud.google.com/natural-language/docs/analyzing-syntax)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Analyzing Syntax in a String Here is an example of performing syntactic analysis on a text string sent directly to the Natural Language API: Protocol To analyze syntax in a document, make a POST request to the documents:analyzeSyntax REST method and provide the appropriate request body as shown in the following example.
- Protocol To analyze syntax in a document stored in Cloud Storage, make a POST request to the documents:analyzeSyntax REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'encodingType': 'UTF8', 'document': { 'type': 'PLAIN TEXT', 'gcsContentUri': 'gs:// <bucket-name> / <object-name> ' } }" "https://language.googleapis.com/v1/documents:analyzeSyntax" If you don't specify document.language , then the language will be automatically detected.
- Syntactic Analysis breaks up the given text into a series of sentences and tokens (generally, words) and provides linguistic information about those tokens.
- UTF16 ) . build (); // Analyze the syntax in the given text AnalyzeSyntaxResponse response = language . analyzeSyntax ( request ); // Print the response for ( Token token : response . getTokensList ()) { System . out . printf ( "\tText: %s\n" , token . getText (). getContent ()); System . out . printf ( "\tBeginOffset: %d\n" , token . getText (). getBeginOffset ()); System . out . printf ( "Lemma: %s\n" , token . getLemma ()); System . out . printf ( "PartOfSpeechTag: %s\n" , token . getPartOfSpeech (). getTag ()); System . out . printf ( "\tAspect: %s\n" , token . getPartOfSpeech (). getAspect ()); System . out . printf ( "\tCase: %s\n" , token . getPartOfSpeech (). getCase ()); System . out . printf ( "\tForm: %s\n" , token . getPartOfSpeech (). getForm ()); System . out . printf ( "\tGender: %s\n" , token . getPartOfSpeech (). getGender ()); System . out . printf ( "\tMood: %s\n" , token . getPartOfSpeech (). getMood ()); System . out . printf ( "\tNumber: %s\n" , token . getPartOfSpeech (). getNumber ()); System . out . printf ( "\tPerson: %s\n" , token . getPartOfSpeech (). getPerson ()); System . out . printf ( "\tProper: %s\n" , token . getPartOfSpeech (). getProper ()); System . out . printf ( "\tReciprocity: %s\n" , token . getPartOfSpeech (). getReciprocity ()); System . out . printf ( "\tTense: %s\n" , token . getPartOfSpeech (). getTense ()); System . out . printf ( "\tVoice: %s\n" , token . getPartOfSpeech (). getVoice ()); System . out . println ( "DependencyEdge" ); System . out . printf ( "\tHeadTokenIndex: %d\n" , token . getDependencyEdge (). getHeadTokenIndex ()); System . out . printf ( "\tLabel: %s\n\n" , token . getDependencyEdge (). getLabel ()); } return response . getTokensList (); } Node.js To learn how to install and use the client library for Natural Language, see Natural Language client libraries .

### Moderate text \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/moderating-text](https://docs.cloud.google.com/natural-language/docs/moderating-text)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For instructions on installing the gcloud CLI, setting up a project with a service account see the Quickstart . curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Shut up!' } }" "https://language.googleapis.com/v1/documents:moderateText" Moderate text from Cloud Storage Here is an example of moderating text stored in a text file on Cloud Storage: Protocol To moderate text from a document stored in Cloud Storage, make a POST request to the documents:moderateText REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ https://language.googleapis.com/v1/documents:moderateText -d "{ 'document':{ 'type':'PLAIN TEXT', 'gcsContentUri':'gs:// <bucket-name> / <object-name> ' } }" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Here is an example of moderating text provided as a string: Protocol To moderate content from a document, make a POST request to the documents:moderateText REST method and provide the appropriate request body as shown in the following example.
- A complete list of categories returned for the moderateText method are found here: Safety Attribute Description Toxic Content that is rude, disrespectful, or unreasonable.
- To moderate the text in a document, call the moderateText method.

