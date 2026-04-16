---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.620Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Entity Sentiment Analysis"
feature_slug: "entity-sentiment-analysis"
latest_feature_date: "2019-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud"
  - "https://docs.cloud.google.com/natural-language/docs/languages"
keywords:
  - "entity"
  - "sentiment"
  - "analysis"
  - "adds"
  - "for"
  - "spanish"
  - "japanese"
---

# Entity Sentiment Analysis

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

Entity Sentiment Analysis adds support for Spanish; Entity Sentiment Analysis adds support for Japanese.

## Extended Definition

Entity Sentiment Analysis adds support for Spanish; Entity Sentiment Analysis adds support for Japanese.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)

## Supporting Pages

### "Analyzing Entity Sentiment \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To perform entity sentiment analysis, use the gcloud CLI and use the --content flag to identify the content to analyze: gcloud ml language analyze-entity-sentiment \ --content-file=gs:// <bucket-name> / <object-name> Java To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- To perform entity sentiment analysis, use the gcloud CLI and use the --content flag to identify the content to analyze: gcloud ml language analyze-entity-sentiment \ --content="I love R&B music.
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Detects sentiment of entities in the document const [ result ] = await client . analyzeEntitySentiment ({ document }); const entities = result . entities ; console . log ( 'Entities and sentiments:' ); entities . forEach ( entity = > { console . log ( Name: ${ entity . name } ); console . log ( Type: ${ entity . type } ); console . log ( Score: ${ entity . sentiment . score } ); console . log ( Magnitude: ${ entity . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- Analyzing Entity Sentiment from Cloud Storage Here is an example of analyzing entity sentiment stored in a text file on Cloud Storage: Protocol To analyze entity sentiment from a document stored in Cloud Storage, make a POST request to the documents:analyzeEntitySentiment REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'gcsContentUri':'gs:// <bucket-name> / <object-name> ' } }" "https://language.googleapis.com/v1/documents:analyzeEntitySentiment" gcloud Refer to the analyze-entity-sentiment command for complete details.

### "Quickstart: Perform sentiment analysis by using client libraries \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following code to perform your first text sentiment analysis: Go // Sample language-quickstart uses the Google Cloud Natural API to analyze the // sentiment of "Hello, world!". package main import ( "context" "fmt" "log" language "cloud.google.com/go/language/apiv1" "cloud.google.com/go/language/apiv1/languagepb" ) func main () { ctx := context .
- Perform sentiment analysis by using client libraries This page shows you how to get started with the Cloud Natural Language API in your favorite programming language using the Google Cloud Client Libraries.
- PLAIN TEXT ). build (); // Detects the sentiment of the text Sentiment sentiment = language . analyzeSentiment ( doc ). getDocumentSentiment (); System . out . printf ( "Text: %s%n" , text ); System . out . printf ( "Sentiment: %s, %s%n" , sentiment . getScore (), sentiment . getMagnitude ()); } } } Node.js Before running the example, make sure you've prepared your environment for Node.js development . async function quickstart () { // Imports the Google Cloud client library const language = require ( ' @google-cloud/language ' ); // Instantiates a client const client = new language .
- LanguageServiceClient (); // The text to analyze const text = 'Hello, world!' ; const document = { content : text , type : 'PLAIN TEXT' , }; // Detects the sentiment of the text const [ result ] = await client . analyzeSentiment ({ document : document }); const sentiment = result . documentSentiment ; console . log ( Text: ${ text } ); console . log ( Sentiment score: ${ sentiment . score } ); console . log ( Sentiment magnitude: ${ sentiment . magnitude } ); } Python Before running the example, make sure you've prepared your environment for Python development .

### "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to grant roles . gcloud services enable language.googleapis.com Make an entity analysis request gcloud Use the gcloud command line tool to call the analyze-entities command and use the --content flag to specify the text to analyze. gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." Command-line Use curl to make a POST request to the documents:analyzeEntities method and provide the appropriate request body as shown in the following example.
- Perform sentiment analysis by using the gcloud tool This page shows you how to get started with the Cloud Natural Language API using the Google Cloud SDK.
- The example uses the gcloud auth application-default print-access-token command to obtain an access token for the service account that you created when you set up the project. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ "https://language.googleapis.com/v1/documents:analyzeEntities" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Michelangelo Caravaggio, Italian painter, is known for \'The Calling of Saint Matthew\'.' }, 'encodingType':'UTF8' }" You should see a response similar to the following: { "entities" : [ { "name" : "Michelangelo Caravaggio" , "type" : "PERSON" , "metadata" : { "wikipedia url" : "http://en.wikipedia.org/wiki/Caravaggio" , "mid" : "/m/020bg" }, "salience" : 0.83047235 , "mentions" : [ { "text" : { "content" : "Michelangelo Caravaggio" , "beginOffset" : 0 }, "type" : "PROPER" }, { "text" : { "content" : "painter" , "beginOffset" : 33 }, "type" : "COMMON" } ] }, { "name" : "Italian" , "type" : "LOCATION" , "metadata" : { "mid" : "/m/03rjj" , "wikipedia url" : "http://en.wikipedia.org/wiki/Italy" }, "salience" : 0.13870546 , "mentions" : [ { "text" : { "content" : "Italian" , "beginOffset" : 25 }, "type" : "PROPER" } ] }, { "name" : "The Calling of Saint Matthew" , "type" : "EVENT" , "metadata" : { "mid" : "/m/085 p7" , "wikipedia url" : "http://en.wikipedia.org/wiki/The Calling of St Matthew (Caravaggio)" }, "salience" : 0.030822212 , "mentions" : [ { "text" : { "content" : "The Calling of Saint Matthew" , "beginOffset" : 69 }, "type" : "PROPER" } ] } ], "language" : "en" } You can also analyze document sentiment and extract syntax annotations from text by making requests to different Cloud Natural Language API endpoints.
- Try the Sentiment Analysis Tutorial and browse the Sample Applications .

### Language Support \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Content classification V2 Model Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es V1 Model Language ISO-639-1 Code English en Syntactic analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Entity analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Sentiment analysis Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Spanish es Thai th Turkish tr Vietnamese vi Entity sentiment analysis Language ISO-639-1 Code English en Japanese ja Spanish es Text moderation Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Dutch nl English en French fr German de Hindi hi Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es language support is limited based on the type of text (eg. webpage, chat message, etc) for some attributes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If you do not specify a language parameter, then the language for the request is auto-detected by the Natural Language API.
- Language code parameters conform to ISO-639-1 or BCP-47 identifiers.

