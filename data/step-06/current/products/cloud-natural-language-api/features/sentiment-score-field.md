---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.627Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Sentiment.score field"
feature_slug: "sentiment-score-field"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial"
keywords:
  - "sentiment"
  - "score"
  - "field"
  - "the"
  - "provides"
  - "replacement"
  - "value"
  - "in"
---

# Sentiment.score field

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

The Sentiment.score field provides the replacement sentiment score value in the Sentiment type.

## Extended Definition

The Sentiment.score field provides the replacement sentiment score value in the Sentiment type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)

## Supporting Pages

### "Analyzing Entity Sentiment \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information on how to interpret the score and magnitude sentiment values included in the analysis, see Interpreting sentiment analysis values .
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Detects sentiment of entities in the document const [ result ] = await client . analyzeEntitySentiment ({ document }); const entities = result . entities ; console . log ( 'Entities and sentiments:' ); entities . forEach ( entity = > { console . log ( Name: ${ entity . name } ); console . log ( Type: ${ entity . type } ); console . log ( Score: ${ entity . sentiment . score } ); console . log ( Magnitude: ${ entity . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- Hello, world!'; // Prepares a document, representing the provided text const document = { content : text , type : 'PLAIN TEXT' , }; // Detects sentiment of entities in the document const [ result ] = await client . analyzeEntitySentiment ({ document }); const entities = result . entities ; console . log ( 'Entities and sentiments:' ); entities . forEach ( entity = > { console . log ( Name: ${ entity . name } ); console . log ( Type: ${ entity . type } ); console . log ( Score: ${ entity . sentiment . score } ); console . log ( Magnitude: ${ entity . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- EntityMention mention : entity . getMentionsList ()) { System . out . printf ( "Begin offset: %d\n" , mention . getText (). getBeginOffset ()); System . out . printf ( "Content: %s\n" , mention . getText (). getContent ()); System . out . printf ( "Magnitude: %.3f\n" , mention . getSentiment (). getMagnitude ()); System . out . printf ( "Sentiment score : %.3f\n" , mention . getSentiment (). getScore ()); System . out . printf ( "Type: %s\n\n" , mention . getType ()); } } } Node.js To learn how to install and use the client library for Natural Language, see Natural Language client libraries .

### "Analyzing Sentiment \_|\_ Cloud Natural Language API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To perform sentiment analysis on a file in Cloud Storage, use the gcloud command line tool and use the --content-file flag to identify the file path that contains the content to analyze: gcloud ml language analyze-sentiment --content-file=gs:// YOUR BUCKET NAME / YOUR FILE NAME If the request is successful, the server returns a response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero.
- To perform sentiment analysis, use the gcloud CLI and use the --content flag to identify the content to analyze: gcloud ml language analyze-sentiment --content="Enjoy your vacation!" If the request is successful, the server returns a response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero.
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language code": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero. gcloud Refer to the analyze-sentiment command for complete details.
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero. gcloud Refer to the analyze-sentiment command for complete details.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sentiment analysis response fields A sample analyzeSentiment response to the Gettysburg Address is shown below: { "documentSentiment" : { "score" : 0.2 , "magnitude" : 3.6 }, "language code" : "en" , "sentences" : [ { "text" : { "content" : "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal." , "beginOffset" : 0 }, "sentiment" : { "magnitude" : 0.8 , "score" : 0.8 } }, ... } These field values are described below: documentSentiment contains the overall sentiment of the document, which consists of the following fields: score of the sentiment ranges between -1.0 (negative) and 1.0 (positive) and corresponds to the overall emotional leaning of the text. magnitude indicates the overall strength of emotion (both positive and negative) within the given text, between 0.0 and +inf .
- The score and magnitude values for an entity can be 0 , if there was low sentiment in the text, resulting in a magnitude of 0, or the sentiment is mixed, resulting in a score of 0. { "entities" : [ { "name" : "R&B music" , "type" : "WORK OF ART" , "metadata" : {}, "salience" : 0.5306305 , "mentions" : [ { "text" : { "content" : "R&B music" , "beginOffset" : 7 }, "type" : "COMMON" , "sentiment" : { "magnitude" : 0.9 , "score" : 0.9 } } ], "sentiment" : { "magnitude" : 0.9 , "score" : 0.9 } }, { "name" : "Marvin Gaye" , "type" : "PERSON" , "metadata" : { "mid" : "/m/012z8 " , "wikipedia url" : "http://en.wikipedia.org/wiki/Marvin Gaye" }, "salience" : 0.21584158 , "mentions" : [ { "text" : { "content" : "Marvin Gaye" , "beginOffset" : 18 }, "type" : "PROPER" , "sentiment" : { "magnitude" : 0.4 , "score" : 0.4 } }, { "text" : { "content" : "Marvin Gaye" , "beginOffset" : 138 }, "type" : "PROPER" , "sentiment" : { "magnitude" : 0.2 , "score" : - 0.2 } } ], "sentiment" : { "magnitude" : 0.6 , "score" : 0.1 } }, ... ], "language" : "en" } For an example, see Analyzing Entity Sentiment .
- Unlike score , magnitude is not normalized for documentSentiment ; each expression of emotion within the text (both positive and negative) contributes to the text's magnitude (so longer text blocks may have greater magnitudes). language code contains the language of the document, either passed in the initial request, or automatically detected if absent. language supported contains a boolean value to identify if the language is officially supported sentences contains a list of the sentences extracted from the original document, which contains: sentiment contains the sentence level sentiment values attached to each sentence, which contain score between -1.0 (negative) and 1.0 (positive) as and magnitude values between 0.0 and 1.0 .
- This information can be valuable for translation, information extraction, and summarization. (The Morphology & Dependency Trees guide contains more detailed information about dependency parsing.) Each dependencyEdge field contains the following child fields: headTokenIndex provides the (zero-based) index value of this token's "parent token" within the token's encapsulating sentence.

### "Sentiment Analysis Tutorial \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overall Sentiment: score of -0.1 with magnitude of 1.8 Note that the magnitudes are all similar (indicating a relative equal amount of emotionally significant sentiment) except for the "neutral" case, which indicates a review with not very much emotional sentiment, either positive or negative. (For more information on sentiment scores and magnitude, and how to interpret these values, see Interpreting Sentiment Analysis Values .) If you wish to explore sentiment analysis with more data, Stanford provides a dataset of IMDB movie reviews.
- Parsing the response def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 We walk through the response to extract the sentiment score values for each sentence, and the overall score and magnitude values for the entire review, and display those to the user.
- Sentiment analysis attempts to determine the overall attitude (positive or negative) and is represented by numerical score and magnitude values. (For more information on these concepts, consult Natural Language Basics .) We'll show the entire code first. (Note that we have removed most comments from this code in order to show you how brief it is.
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . """Demonstrates how to make a simple call to the Natural Language API.""" import argparse from google.cloud import language v1 def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .

