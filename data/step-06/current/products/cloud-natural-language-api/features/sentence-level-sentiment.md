---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.650Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Sentence-level sentiment"
feature_slug: "sentence-level-sentiment"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial"
keywords:
  - "sentence"
  - "level"
  - "sentiment"
  - "returns"
  - "results"
  - "for"
  - "individual"
  - "sentences"
---

# Sentence-level sentiment

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

Sentence-level sentiment returns sentiment results for individual sentences.

## Extended Definition

Sentence-level sentiment returns sentiment results for individual sentences.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)

## Supporting Pages

### "Analyzing Sentiment \_|\_ Cloud Natural Language API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To perform sentiment analysis on a file in Cloud Storage, use the gcloud command line tool and use the --content-file flag to identify the file path that contains the content to analyze: gcloud ml language analyze-sentiment --content-file=gs:// YOUR BUCKET NAME / YOUR FILE NAME If the request is successful, the server returns a response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero.
- To perform sentiment analysis, use the gcloud CLI and use the --content flag to identify the content to analyze: gcloud ml language analyze-sentiment --content="Enjoy your vacation!" If the request is successful, the server returns a response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero.
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language code": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero. gcloud Refer to the analyze-sentiment command for complete details.
- If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format: { "documentSentiment": { "magnitude": 0.8, "score": 0.8 }, "language": "en", "sentences": [ { "text": { "content": "Enjoy your vacation!", "beginOffset": 0 }, "sentiment": { "magnitude": 0.8, "score": 0.8 } } ] } documentSentiment.score indicates positive sentiment with a value greater than zero, and negative sentiment with a value less than zero. gcloud Refer to the analyze-sentiment command for complete details.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unlike score , magnitude is not normalized for documentSentiment ; each expression of emotion within the text (both positive and negative) contributes to the text's magnitude (so longer text blocks may have greater magnitudes). language code contains the language of the document, either passed in the initial request, or automatically detected if absent. language supported contains a boolean value to identify if the language is officially supported sentences contains a list of the sentences extracted from the original document, which contains: sentiment contains the sentence level sentiment values attached to each sentence, which contain score between -1.0 (negative) and 1.0 (positive) as and magnitude values between 0.0 and 1.0 .
- Sentiment analysis response fields A sample analyzeSentiment response to the Gettysburg Address is shown below: { "documentSentiment" : { "score" : 0.2 , "magnitude" : 3.6 }, "language code" : "en" , "sentences" : [ { "text" : { "content" : "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal." , "beginOffset" : 0 }, "sentiment" : { "magnitude" : 0.8 , "score" : 0.8 } }, ... } These field values are described below: documentSentiment contains the overall sentiment of the document, which consists of the following fields: score of the sentiment ranges between -1.0 (negative) and 1.0 (positive) and corresponds to the overall emotional leaning of the text. magnitude indicates the overall strength of emotion (both positive and negative) within the given text, between 0.0 and +inf .
- Array of tokens with token information ] } Sentence extraction When performing syntactic analysis, the Natural Language API returns an array of sentences extracted from the provided text, with each sentence containing the following fields within a text parent: beginOffset indicating the (zero-based) character offset within the given text where the sentence begins.
- A Syntactic Analysis request returns a response containing these sentences and tokens in the following form: { "sentences" : [ ...

### "Sentiment Analysis Tutorial \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . """Demonstrates how to make a simple call to the Natural Language API.""" import argparse from google.cloud import language v1 def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .
- Parsing the response def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 We walk through the response to extract the sentiment score values for each sentence, and the overall score and magnitude values for the entire review, and display those to the user.
- PLAIN TEXT ) annotations = client . analyze sentiment ( request = { "document" : document }) Print the results print result ( annotations ) This code snippet performs the following tasks: Instantiates a LanguageServiceClient instance as the client.
- Unzip those samples, which will create a " reviews " folder: gunzip sentiment-samples.tgz tar -xvf sentiment-samples.tar Run our sentiment analysis on one of the specified files: python sentiment analysis.py reviews/bladerunner-pos.txt Sentence 0 has a sentiment score of 0.8 Sentence 1 has a sentiment score of 0.9 Sentence 2 has a sentiment score of 0.8 Sentence 3 has a sentiment score of 0.2 Sentence 4 has a sentiment score of 0.1 Sentence 5 has a sentiment score of 0.4 Sentence 6 has a sentiment score of 0.3 Sentence 7 has a sentiment score of 0.4 Sentence 8 has a sentiment score of 0.2 Sentence 9 has a sentiment score of 0.9 Overall Sentiment: score of 0.5 with magnitude of 5.5 The above example would indicate a review that was relatively positive (score of 0.5 ), and relatively emotional (magnitude of 5.5 ).

