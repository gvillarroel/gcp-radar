---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.623Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Sentiment Analysis"
feature_slug: "sentiment-analysis"
latest_feature_date: "2017-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud"
  - "https://docs.cloud.google.com/natural-language/docs/languages"
keywords:
  - "sentiment"
  - "analysis"
  - "adds"
  - "full"
  - "for"
  - "chinese"
  - "french"
  - "german"
---

# Sentiment Analysis

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

Sentiment Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese; Sentiment Analysis adds beta support for Chinese, French, German, Italian, Korean, and Portuguese.

## Extended Definition

Sentiment Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese; Sentiment Analysis adds beta support for Chinese, French, German, Italian, Korean, and Portuguese.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)

## Supporting Pages

### "Quickstart: Perform sentiment analysis by using client libraries \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following code to perform your first text sentiment analysis: Go // Sample language-quickstart uses the Google Cloud Natural API to analyze the // sentiment of "Hello, world!". package main import ( "context" "fmt" "log" language "cloud.google.com/go/language/apiv1" "cloud.google.com/go/language/apiv1/languagepb" ) func main () { ctx := context .
- Perform sentiment analysis by using client libraries This page shows you how to get started with the Cloud Natural Language API in your favorite programming language using the Google Cloud Client Libraries.
- PLAIN TEXT ). build (); // Detects the sentiment of the text Sentiment sentiment = language . analyzeSentiment ( doc ). getDocumentSentiment (); System . out . printf ( "Text: %s%n" , text ); System . out . printf ( "Sentiment: %s, %s%n" , sentiment . getScore (), sentiment . getMagnitude ()); } } } Node.js Before running the example, make sure you've prepared your environment for Node.js development . async function quickstart () { // Imports the Google Cloud client library const language = require ( ' @google-cloud/language ' ); // Instantiates a client const client = new language .
- LanguageServiceClient (); // The text to analyze const text = 'Hello, world!' ; const document = { content : text , type : 'PLAIN TEXT' , }; // Detects the sentiment of the text const [ result ] = await client . analyzeSentiment ({ document : document }); const sentiment = result . documentSentiment ; console . log ( Text: ${ text } ); console . log ( Sentiment score: ${ sentiment . score } ); console . log ( Sentiment magnitude: ${ sentiment . magnitude } ); } Python Before running the example, make sure you've prepared your environment for Python development .

### "Sentiment Analysis Tutorial \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . """Demonstrates how to make a simple call to the Natural Language API.""" import argparse from google.cloud import language v1 def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .
- Overall Sentiment: score of -0.1 with magnitude of 1.8 Note that the magnitudes are all similar (indicating a relative equal amount of emotionally significant sentiment) except for the "neutral" case, which indicates a review with not very much emotional sentiment, either positive or negative. (For more information on sentiment scores and magnitude, and how to interpret these values, see Interpreting Sentiment Analysis Values .) If you wish to explore sentiment analysis with more data, Stanford provides a dataset of IMDB movie reviews.
- Sentiment analysis attempts to determine the overall attitude (positive or negative) and is represented by numerical score and magnitude values. (For more information on these concepts, consult Natural Language Basics .) We'll show the entire code first. (Note that we have removed most comments from this code in order to show you how brief it is.
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .

### "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Perform sentiment analysis by using the gcloud tool This page shows you how to get started with the Cloud Natural Language API using the Google Cloud SDK.
- The example uses the gcloud auth application-default print-access-token command to obtain an access token for the service account that you created when you set up the project. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ "https://language.googleapis.com/v1/documents:analyzeEntities" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Michelangelo Caravaggio, Italian painter, is known for \'The Calling of Saint Matthew\'.' }, 'encodingType':'UTF8' }" You should see a response similar to the following: { "entities" : [ { "name" : "Michelangelo Caravaggio" , "type" : "PERSON" , "metadata" : { "wikipedia url" : "http://en.wikipedia.org/wiki/Caravaggio" , "mid" : "/m/020bg" }, "salience" : 0.83047235 , "mentions" : [ { "text" : { "content" : "Michelangelo Caravaggio" , "beginOffset" : 0 }, "type" : "PROPER" }, { "text" : { "content" : "painter" , "beginOffset" : 33 }, "type" : "COMMON" } ] }, { "name" : "Italian" , "type" : "LOCATION" , "metadata" : { "mid" : "/m/03rjj" , "wikipedia url" : "http://en.wikipedia.org/wiki/Italy" }, "salience" : 0.13870546 , "mentions" : [ { "text" : { "content" : "Italian" , "beginOffset" : 25 }, "type" : "PROPER" } ] }, { "name" : "The Calling of Saint Matthew" , "type" : "EVENT" , "metadata" : { "mid" : "/m/085 p7" , "wikipedia url" : "http://en.wikipedia.org/wiki/The Calling of St Matthew (Caravaggio)" }, "salience" : 0.030822212 , "mentions" : [ { "text" : { "content" : "The Calling of Saint Matthew" , "beginOffset" : 69 }, "type" : "PROPER" } ] } ], "language" : "en" } You can also analyze document sentiment and extract syntax annotations from text by making requests to different Cloud Natural Language API endpoints.
- Learn how to grant roles . gcloud services enable language.googleapis.com Make an entity analysis request gcloud Use the gcloud command line tool to call the analyze-entities command and use the --content flag to specify the text to analyze. gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." Command-line Use curl to make a POST request to the documents:analyzeEntities method and provide the appropriate request body as shown in the following example.
- Try the Sentiment Analysis Tutorial and browse the Sample Applications .

### Language Support \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Content classification V2 Model Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es V1 Model Language ISO-639-1 Code English en Syntactic analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Entity analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Sentiment analysis Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Spanish es Thai th Turkish tr Vietnamese vi Entity sentiment analysis Language ISO-639-1 Code English en Japanese ja Spanish es Text moderation Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Dutch nl English en French fr German de Hindi hi Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es language support is limited based on the type of text (eg. webpage, chat message, etc) for some attributes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If you do not specify a language parameter, then the language for the request is auto-detected by the Natural Language API.
- Language code parameters conform to ISO-639-1 or BCP-47 identifiers.

