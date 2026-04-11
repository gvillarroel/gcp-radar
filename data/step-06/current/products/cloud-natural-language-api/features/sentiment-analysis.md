---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.648Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Sentiment Analysis"
feature_slug: "sentiment-analysis"
latest_feature_date: "2017-08-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud"
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
Coverage: LOW

## Step 02 Summary

Sentiment Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese; Sentiment Analysis adds beta support for Chinese, French, German, Italian, Korean, and Portuguese.

## Extended Definition

Sentiment Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese; Sentiment Analysis adds beta support for Chinese, French, German, Italian, Korean, and Portuguese.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)

## Supporting Pages

### "Quickstart: Perform sentiment analysis by using client libraries \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following code to perform your first text sentiment analysis: Go // Sample language-quickstart uses the Google Cloud Natural API to analyze the // sentiment of "Hello, world!". package main import ( "context" "fmt" "log" language "cloud.google.com/go/language/apiv1" "cloud.google.com/go/language/apiv1/languagepb" ) func main () { ctx := context .
- Perform sentiment analysis by using client libraries This page shows you how to get started with the Cloud Natural Language API in your favorite programming language using the Google Cloud Client Libraries.
- PLAIN TEXT ). build (); // Detects the sentiment of the text Sentiment sentiment = language . analyzeSentiment ( doc ). getDocumentSentiment (); System . out . printf ( "Text: %s%n" , text ); System . out . printf ( "Sentiment: %s, %s%n" , sentiment . getScore (), sentiment . getMagnitude ()); } } } Node.js Before running the example, make sure you've prepared your environment for Node.js development . async function quickstart () { // Imports the Google Cloud client library const language = require ( ' @google-cloud/language ' ); // Instantiates a client const client = new language .
- LanguageServiceClient (); // The text to analyze const text = 'Hello, world!' ; const document = { content : text , type : 'PLAIN TEXT' , }; // Detects the sentiment of the text const [ result ] = await client . analyzeSentiment ({ document : document }); const sentiment = result . documentSentiment ; console . log ( Text: ${ text } ); console . log ( Sentiment score: ${ sentiment . score } ); console . log ( Sentiment magnitude: ${ sentiment . magnitude } ); } Python Before running the example, make sure you've prepared your environment for Python development .

### "Sentiment Analysis Tutorial \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . """Demonstrates how to make a simple call to the Natural Language API.""" import argparse from google.cloud import language v1 def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .
- Overall Sentiment: score of -0.1 with magnitude of 1.8 Note that the magnitudes are all similar (indicating a relative equal amount of emotionally significant sentiment) except for the "neutral" case, which indicates a review with not very much emotional sentiment, either positive or negative. (For more information on sentiment scores and magnitude, and how to interpret these values, see Interpreting Sentiment Analysis Values .) If you wish to explore sentiment analysis with more data, Stanford provides a dataset of IMDB movie reviews.
- Sentiment analysis attempts to determine the overall attitude (positive or negative) and is represented by numerical score and magnitude values. (For more information on these concepts, consult Natural Language Basics .) We'll show the entire code first. (Note that we have removed most comments from this code in order to show you how brief it is.
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .

### "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Perform sentiment analysis by using the gcloud tool This page shows you how to get started with the Cloud Natural Language API using the Google Cloud SDK.
- The example uses the gcloud auth application-default print-access-token command to obtain an access token for the service account that you created when you set up the project. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ "https://language.googleapis.com/v1/documents:analyzeEntities" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Michelangelo Caravaggio, Italian painter, is known for \'The Calling of Saint Matthew\'.' }, 'encodingType':'UTF8' }" You should see a response similar to the following: { "entities" : [ { "name" : "Michelangelo Caravaggio" , "type" : "PERSON" , "metadata" : { "wikipedia url" : "http://en.wikipedia.org/wiki/Caravaggio" , "mid" : "/m/020bg" }, "salience" : 0.83047235 , "mentions" : [ { "text" : { "content" : "Michelangelo Caravaggio" , "beginOffset" : 0 }, "type" : "PROPER" }, { "text" : { "content" : "painter" , "beginOffset" : 33 }, "type" : "COMMON" } ] }, { "name" : "Italian" , "type" : "LOCATION" , "metadata" : { "mid" : "/m/03rjj" , "wikipedia url" : "http://en.wikipedia.org/wiki/Italy" }, "salience" : 0.13870546 , "mentions" : [ { "text" : { "content" : "Italian" , "beginOffset" : 25 }, "type" : "PROPER" } ] }, { "name" : "The Calling of Saint Matthew" , "type" : "EVENT" , "metadata" : { "mid" : "/m/085 p7" , "wikipedia url" : "http://en.wikipedia.org/wiki/The Calling of St Matthew (Caravaggio)" }, "salience" : 0.030822212 , "mentions" : [ { "text" : { "content" : "The Calling of Saint Matthew" , "beginOffset" : 69 }, "type" : "PROPER" } ] } ], "language" : "en" } You can also analyze document sentiment and extract syntax annotations from text by making requests to different Cloud Natural Language API endpoints.
- Learn how to grant roles . gcloud services enable language.googleapis.com Make an entity analysis request gcloud Use the gcloud command line tool to call the analyze-entities command and use the --content flag to specify the text to analyze. gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." Command-line Use curl to make a POST request to the documents:analyzeEntities method and provide the appropriate request body as shown in the following example.
- Try the Sentiment Analysis Tutorial and browse the Sample Applications .

