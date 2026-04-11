---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.647Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Entity Analysis"
feature_slug: "entity-analysis"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/languages"
  - "https://docs.cloud.google.com/natural-language/docs/release-notes"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud"
keywords:
  - "entity"
  - "analysis"
  - "adds"
  - "for"
  - "russian"
  - "full"
  - "chinese"
  - "french"
---

# Entity Analysis

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

Entity Analysis adds support for Russian; Entity Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese.

## Extended Definition

Entity Analysis adds support for Russian; Entity Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)

## Supporting Pages

### Language Support \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Content classification V2 Model Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es V1 Model Language ISO-639-1 Code English en Syntactic analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Entity analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Sentiment analysis Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Spanish es Thai th Turkish tr Vietnamese vi Entity sentiment analysis Language ISO-639-1 Code English en Japanese ja Spanish es Text moderation Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Dutch nl English en French fr German de Hindi hi Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es language support is limited based on the type of text (eg. webpage, chat message, etc) for some attributes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If you do not specify a language parameter, then the language for the request is auto-detected by the Natural Language API.
- Language code parameters conform to ISO-639-1 or BCP-47 identifiers.

### "Natural Language release notes \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 04, 2017 Feature The following languages are now fully supported for entity, sentiment, and syntax analysis: Chinese (Simplified and Traditional) French German Italian Korean Portuguese Change Sentiment analysis has been updated.
- Added beta support for entity, sentiment, and syntax analysis for the following languages: Chinese (Simplified and Traditional) French German Italian Korean Portuguese Feature Added beta support for entity sentiment analysis ( analyzeEntitySentiment ).
- April 04, 2019 Feature The Natural Language API now supports Russian for entity analysis and syntactic analysis, and Japanese for entity sentiment analysis.
- Feature The sentiment analysis feature has these enhancements: Support for Japanese ( ja ) and Spanish ( es ) Availability of sentence level sentiment Support for EncodingType within a Sentiment Analysis request to calculate offsets for sentence-level sentiment Addition of a score field within the Sentiment type to replace the previous polarity field Feature Syntactic analysis has these enhancements: Added a new analyzeSyntax method Added morphology support to returned tokens Feature The entity analysis feature has these enhancements: Added Google Knowledge Graph MID values, if available, to the metadata field for each Entity returned Returns Entity Mention Types for both proper nouns and common nouns (known as "nominals") Deprecated Removed the polarity field within the Sentiment type in favor of the new score field.

### "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn how to grant roles . gcloud services enable language.googleapis.com Make an entity analysis request gcloud Use the gcloud command line tool to call the analyze-entities command and use the --content flag to specify the text to analyze. gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." Command-line Use curl to make a POST request to the documents:analyzeEntities method and provide the appropriate request body as shown in the following example.
- Perform sentiment analysis by using the gcloud tool This page shows you how to get started with the Cloud Natural Language API using the Google Cloud SDK.
- The example uses the gcloud auth application-default print-access-token command to obtain an access token for the service account that you created when you set up the project. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ "https://language.googleapis.com/v1/documents:analyzeEntities" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Michelangelo Caravaggio, Italian painter, is known for \'The Calling of Saint Matthew\'.' }, 'encodingType':'UTF8' }" You should see a response similar to the following: { "entities" : [ { "name" : "Michelangelo Caravaggio" , "type" : "PERSON" , "metadata" : { "wikipedia url" : "http://en.wikipedia.org/wiki/Caravaggio" , "mid" : "/m/020bg" }, "salience" : 0.83047235 , "mentions" : [ { "text" : { "content" : "Michelangelo Caravaggio" , "beginOffset" : 0 }, "type" : "PROPER" }, { "text" : { "content" : "painter" , "beginOffset" : 33 }, "type" : "COMMON" } ] }, { "name" : "Italian" , "type" : "LOCATION" , "metadata" : { "mid" : "/m/03rjj" , "wikipedia url" : "http://en.wikipedia.org/wiki/Italy" }, "salience" : 0.13870546 , "mentions" : [ { "text" : { "content" : "Italian" , "beginOffset" : 25 }, "type" : "PROPER" } ] }, { "name" : "The Calling of Saint Matthew" , "type" : "EVENT" , "metadata" : { "mid" : "/m/085 p7" , "wikipedia url" : "http://en.wikipedia.org/wiki/The Calling of St Matthew (Caravaggio)" }, "salience" : 0.030822212 , "mentions" : [ { "text" : { "content" : "The Calling of Saint Matthew" , "beginOffset" : 69 }, "type" : "PROPER" } ] } ], "language" : "en" } You can also analyze document sentiment and extract syntax annotations from text by making requests to different Cloud Natural Language API endpoints.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

