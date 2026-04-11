---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.646Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Content Classification v2 model"
feature_slug: "content-classification-v2-model"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions"
  - "https://docs.cloud.google.com/natural-language/docs/release-notes"
  - "https://docs.cloud.google.com/natural-language/docs/classifying-text"
keywords:
  - "content"
  - "classification"
  - "v2"
  - "model"
  - "the"
  - "provides"
  - "an"
  - "expanded"
---

# Content Classification v2 model

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

The Content Classification v2 model provides an expanded taxonomy of 1091 categories in 11 languages with improved performance over v1; The Content Classification v2 model provides an expanded taxonomy of 1091 categories in 11 languages with improved performance over v1.

## Extended Definition

The Content Classification v2 model provides an expanded taxonomy of 1091 categories in 11 languages with improved performance over v1; The Content Classification v2 model provides an expanded taxonomy of 1091 categories in 11 languages with improved performance over v1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions](https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions)
- [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- [https://docs.cloud.google.com/natural-language/docs/classifying-text](https://docs.cloud.google.com/natural-language/docs/classifying-text)

## Supporting Pages

### "ClassificationModelOptions \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions](https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { // Union field model type can be only one of the following: "v1Model" : { object ( V1Model ) } , "v2Model" : { object ( V2Model ) } // End of list of possible types for union field model type . } Fields Union field model type .
- If this field is not set, then the v1 model will be used by default. model type can be only one of the following: v1 Model object ( V1Model ) Setting this field will use the V1 model and V1 content categories version.
- The V1 model is a legacy model; support for this will be discontinued in the future. v2 Model object ( V2Model ) Setting this field will use the V2 model with the appropriate content categories version.
- Home Documentation AI and ML Cloud Natural Language API Reference Send feedback ClassificationModelOptions Stay organized with collections Save and categorize content based on your preferences.

### "Natural Language release notes \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- January 31, 2023 Feature Natural Language Content Classification v2 model is now Generally Available .
- October 18, 2022 Feature Natural Language Content Classification v2 model is now in Public Preview .
- This new version of the API supports Sentiment Analysis, Entity Analysis, Text Moderation, and Content Classification.
- This model supports an expanded taxonomy with 1091 content categories and 11 languages.

### "Classifying Content \_|\_ Cloud Natural Language API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/classifying-text](https://docs.cloud.google.com/natural-language/docs/classifying-text)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Hello, world!'; // Prepares a document, representing the provided text const document = { content : text , type : 'PLAIN TEXT' , }; const classificationModelOptions = { v2Model : { contentCategoriesVersion : 'V2' , }, }; // Classifies text in the document const [ classification ] = await client . classifyText ({ document , classificationModelOptions , }); console . log ( 'Categories:' ); classification . categories . forEach ( category = > { console . log ( Name: ${ category . name } , Confidence: ${ category . confidence } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- Sundar Pichai said in his keynote that users love their new Android phones.' }, 'classificationModelOptions': { 'v2Model': { 'contentCategoriesVersion': 'V2', } } }" "https://language.googleapis.com/v1/documents:classifyText" Go To learn how to install and use the client library for Natural Language, see Natural Language client libraries .
- You can choose which model to use for the classifyText method by setting the optional classificationModelOptions field: The V2 model is a newer model with better performance that supports both Version 1 content categories and Version 2 content categories .
- Classifying Content from Cloud Storage Here is an example of classifying content stored in a text file on Cloud Storage: Protocol To classify content from a document stored in Cloud Storage, make a POST request to the documents:classifyText REST method and provide the appropriate request body with the path to the document as shown in the following example. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'gcsContentUri':'gs:// <bucket-name> / <object-name> ' } 'classificationModelOptions': { 'v1Model': { } } }" "https://language.googleapis.com/v1/documents:classifyText" Go To learn how to install and use the client library for Natural Language, see Natural Language client libraries .

