---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.646Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Natural Language API v2"
feature_slug: "natural-language-api-v2"
latest_feature_date: "2023-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/release-notes"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial"
keywords:
  - "natural"
  - "language"
  - "api"
  - "v2"
  - "adds"
  - "for"
  - "sentiment"
  - "analysis"
---

# Natural Language API v2

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

Natural Language API v2 adds support for sentiment analysis, entity analysis, text moderation, and content classification, and returns language_code in API responses.

## Extended Definition

Natural Language API v2 adds support for sentiment analysis, entity analysis, text moderation, and content classification, and returns language_code in API responses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)

## Supporting Pages

### "Analyzing Sentiment \_|\_ Cloud Natural Language API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . import ( "context" "fmt" "io" language "cloud.google.com/go/language/apiv2" "cloud.google.com/go/language/apiv2/languagepb" ) // analyzeSentiment sends a string of text to the Cloud Natural Language API to // assess the sentiment of the text. func analyzeSentiment ( w io .
- Analyzing Sentiment in a String Here is an example of performing sentiment analysis on a text string sent directly to the Natural Language API: Protocol To analyze sentiment in a document, make a POST request to the documents:analyzeSentiment REST method and provide the appropriate request body as shown in the following example.
- Analyzing Sentiment from Cloud Storage For your convenience, the Natural Language API can perform sentiment analysis directly on a file located in Cloud Storage, without the need to send the contents of the file in the body of your request.
- For instructions on installing the gcloud CLI, setting up a project with a service account see the Quickstart . curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'encodingType': 'UTF8', 'document': { 'type': 'PLAIN TEXT', 'content': 'Enjoy your vacation!' } }" "https://language.googleapis.com/v2/documents:analyzeSentiment" If you don't specify document.language code , then the language will be automatically detected.

### "Natural Language release notes \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 04, 2019 Feature The Natural Language API now supports Russian for entity analysis and syntactic analysis, and Japanese for entity sentiment analysis.
- March 20, 2020 Change The Natural Language API now supports additional languages for sentiment analysis.
- May 03, 2019 Feature The Natural Language API now supports Spanish for entity sentiment analysis.
- September 19, 2017 Feature The Natural Language API v1 now supports entity sentiment analysis with the analyzeEntitySentiment method.

### "Sentiment Analysis Tutorial \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial](https://docs.cloud.google.com/natural-language/docs/sentiment-tutorial)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . """Demonstrates how to make a simple call to the Natural Language API.""" import argparse from google.cloud import language v1 def print result ( annotations ): score = annotations . document sentiment . score magnitude = annotations . document sentiment . magnitude for index , sentence in enumerate ( annotations . sentences ): sentence sentiment = sentence . sentiment . score print ( f "Sentence { index } has a sentiment score of { sentence sentiment } " ) print ( f "Overall Sentiment: score of { score } with magnitude of { magnitude } " ) return 0 def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .
- For more information on installing and using the Google Cloud Natural Language Client Library for Python, see Natural Language API Client Libraries . def analyze ( movie review filename ): """Run a sentiment analysis request on text within a passed filename.""" client = language v1 .
- You've installed the Google Cloud Client Library for Python Analyzing document sentiment This tutorial walks you through a basic Natural Language API application, using an analyzeSentiment request, which performs sentiment analysis on text.
- Sentiment analysis attempts to determine the overall attitude (positive or negative) and is represented by numerical score and magnitude values. (For more information on these concepts, consult Natural Language Basics .) We'll show the entire code first. (Note that we have removed most comments from this code in order to show you how brief it is.

