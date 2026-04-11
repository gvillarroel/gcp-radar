---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.650Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Sentiment.polarity field"
feature_slug: "sentiment-polarity-field"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud"
keywords:
  - "sentiment"
  - "polarity"
  - "field"
  - "the"
  - "represented"
  - "in"
  - "type"
  - "deprecated"
---

# Sentiment.polarity field

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

The Sentiment.polarity field represented sentiment polarity in the Sentiment type; deprecated on 2016-11-15.

## Extended Definition

The Sentiment.polarity field represented sentiment polarity in the Sentiment type; deprecated on 2016-11-15.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)

## Supporting Pages

### "Analyzing Entity Sentiment \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Detects sentiment of entities in the document const [ result ] = await client . analyzeEntitySentiment ({ document }); const entities = result . entities ; console . log ( 'Entities and sentiments:' ); entities . forEach ( entity = > { console . log ( Name: ${ entity . name } ); console . log ( Type: ${ entity . type } ); console . log ( Score: ${ entity . sentiment . score } ); console . log ( Magnitude: ${ entity . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- Analyzing Entity Sentiment from Cloud Storage Here is an example of analyzing entity sentiment stored in a text file on Cloud Storage: Protocol To analyze entity sentiment from a document stored in Cloud Storage, make a POST request to the documents:analyzeEntitySentiment REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'gcsContentUri':'gs:// <bucket-name> / <object-name> ' } }" "https://language.googleapis.com/v1/documents:analyzeEntitySentiment" gcloud Refer to the analyze-entity-sentiment command for complete details.
- Hello, world!'; // Prepares a document, representing the provided text const document = { content : text , type : 'PLAIN TEXT' , }; // Detects sentiment of entities in the document const [ result ] = await client . analyzeEntitySentiment ({ document }); const entities = result . entities ; console . log ( 'Entities and sentiments:' ); entities . forEach ( entity = > { console . log ( Name: ${ entity . name } ); console . log ( Type: ${ entity . type } ); console . log ( Score: ${ entity . sentiment . score } ); console . log ( Magnitude: ${ entity . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- EntityMention mention : entity . getMentionsList ()) { System . out . printf ( "Begin offset: %d\n" , mention . getText (). getBeginOffset ()); System . out . printf ( "Content: %s\n" , mention . getText (). getContent ()); System . out . printf ( "Magnitude: %.3f\n" , mention . getSentiment (). getMagnitude ()); System . out . printf ( "Sentiment score : %.3f\n" , mention . getSentiment (). getScore ()); System . out . printf ( "Type: %s\n\n" , mention . getType ()); } } } Node.js To learn how to install and use the client library for Natural Language, see Natural Language client libraries .

### "Analyzing Sentiment \_|\_ Cloud Natural Language API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Detects the sentiment of the document const [ result ] = await client . analyzeSentiment ({ document }); const sentiment = result . documentSentiment ; console . log ( 'Document sentiment:' ); console . log ( Score: ${ sentiment . score } ); console . log ( Magnitude: ${ sentiment . magnitude } ); const sentences = result . sentences ; sentences . forEach ( sentence = > { console . log ( Sentence: ${ sentence . text . content } ); console . log ( Score: ${ sentence . sentiment . score } ); console . log ( Magnitude: ${ sentence . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- UTF8 response = client . analyze sentiment ( request = { "document" : document , "encoding type" : encoding type } ) Get overall sentiment of the input document print ( f "Document sentiment score: { response . document sentiment . score } " ) print ( f "Document sentiment magnitude: { response . document sentiment . magnitude } " ) Get sentiment for all sentences in the document for sentence in response . sentences : print ( f "Sentence text: { sentence . text . content } " ) print ( f "Sentence sentiment score: { sentence . sentiment . score } " ) print ( f "Sentence sentiment magnitude: { sentence . sentiment . magnitude } " ) Get the language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. print ( f "Language of the text: { response . language code } " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Natural Language reference documentation for .NET.
- UTF8 response = client . analyze sentiment ( request = { "document" : document , "encoding type" : encoding type } ) Get overall sentiment of the input document print ( f "Document sentiment score: { response . document sentiment . score } " ) print ( f "Document sentiment magnitude: { response . document sentiment . magnitude } " ) Get sentiment for all sentences in the document for sentence in response . sentences : print ( f "Sentence text: { sentence . text . content } " ) print ( f "Sentence sentiment score: { sentence . sentiment . score } " ) print ( f "Sentence sentiment magnitude: { sentence . sentiment . magnitude } " ) Get the language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. print ( f "Language of the text: { response . language code } " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Natural Language reference documentation for .NET.
- Protocol To analyze sentiment from a document stored in Cloud Storage, make a POST request to the documents:analyzeSentiment REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'gcsContentUri':'gs:// <bucket-name> / <object-name> ' } }" "https://language.googleapis.com/v2/documents:analyzeSentiment" If you don't specify document.language code , then the language will be automatically detected.

### "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The example uses the gcloud auth application-default print-access-token command to obtain an access token for the service account that you created when you set up the project. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ "https://language.googleapis.com/v1/documents:analyzeEntities" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Michelangelo Caravaggio, Italian painter, is known for \'The Calling of Saint Matthew\'.' }, 'encodingType':'UTF8' }" You should see a response similar to the following: { "entities" : [ { "name" : "Michelangelo Caravaggio" , "type" : "PERSON" , "metadata" : { "wikipedia url" : "http://en.wikipedia.org/wiki/Caravaggio" , "mid" : "/m/020bg" }, "salience" : 0.83047235 , "mentions" : [ { "text" : { "content" : "Michelangelo Caravaggio" , "beginOffset" : 0 }, "type" : "PROPER" }, { "text" : { "content" : "painter" , "beginOffset" : 33 }, "type" : "COMMON" } ] }, { "name" : "Italian" , "type" : "LOCATION" , "metadata" : { "mid" : "/m/03rjj" , "wikipedia url" : "http://en.wikipedia.org/wiki/Italy" }, "salience" : 0.13870546 , "mentions" : [ { "text" : { "content" : "Italian" , "beginOffset" : 25 }, "type" : "PROPER" } ] }, { "name" : "The Calling of Saint Matthew" , "type" : "EVENT" , "metadata" : { "mid" : "/m/085 p7" , "wikipedia url" : "http://en.wikipedia.org/wiki/The Calling of St Matthew (Caravaggio)" }, "salience" : 0.030822212 , "mentions" : [ { "text" : { "content" : "The Calling of Saint Matthew" , "beginOffset" : 69 }, "type" : "PROPER" } ] } ], "language" : "en" } You can also analyze document sentiment and extract syntax annotations from text by making requests to different Cloud Natural Language API endpoints.
- Perform sentiment analysis by using the gcloud tool This page shows you how to get started with the Cloud Natural Language API using the Google Cloud SDK.
- In the dialog, type the project ID, and then click Shut down to delete the project.
- Learn how to grant roles . gcloud services enable language.googleapis.com Make an entity analysis request gcloud Use the gcloud command line tool to call the analyze-entities command and use the --content flag to specify the text to analyze. gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." Command-line Use curl to make a POST request to the documents:analyzeEntities method and provide the appropriate request body as shown in the following example.

