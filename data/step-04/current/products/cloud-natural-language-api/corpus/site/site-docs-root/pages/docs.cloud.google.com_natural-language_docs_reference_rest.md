---
title: "Cloud Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/reference/rest
  title: "Cloud Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Reference
Send feedback
Cloud Natural Language API
Stay organized with collections
Save and categorize content based on your preferences.
Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.
REST Resource: v2.documents
REST Resource: v1beta2.documents
REST Resource: v1.documents
Service: language.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://language.googleapis.com/$discovery/rest?version=v2
https://language.googleapis.com/$discovery/rest?version=v1
https://language.googleapis.com/$discovery/rest?version=v1beta2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://language.googleapis.com
REST Resource: v2.documents
Methods
analyze Entities
POST /v2/documents:analyzeEntities
Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties.
analyze Sentiment
POST /v2/documents:analyzeSentiment
Analyzes the sentiment of the provided text.
annotate Text
POST /v2/documents:annotateText
A convenience method that provides all features in one call.
classify Text
POST /v2/documents:classifyText
Classifies a document into categories.
moderate Text
POST /v2/documents:moderateText
Moderates a document for harmful and sensitive categories.
REST Resource: v1beta2.documents
Methods
analyze Entities
POST /v1beta2/documents:analyzeEntities
Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
analyze Entity Sentiment
POST /v1beta2/documents:analyzeEntitySentiment
Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
analyze Sentiment
POST /v1beta2/documents:analyzeSentiment
Analyzes the sentiment of the provided text.
analyze Syntax
POST /v1beta2/documents:analyzeSyntax
Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
annotate Text
POST /v1beta2/documents:annotateText
A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
classify Text
POST /v1beta2/documents:classifyText
Classifies a document into categories.
moderate Text
POST /v1beta2/documents:moderateText
Moderates a document for harmful and sensitive categories.
REST Resource: v1.documents
Methods
analyze Entities
POST /v1/documents:analyzeEntities
Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
analyze Entity Sentiment
POST /v1/documents:analyzeEntitySentiment
Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
analyze Sentiment
POST /v1/documents:analyzeSentiment
Analyzes the sentiment of the provided text.
analyze Syntax
POST /v1/documents:analyzeSyntax
Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
annotate Text
POST /v1/documents:annotateText
A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
classify Text
POST /v1/documents:classifyText
Classifies a document into categories.
moderate Text
POST /v1/documents:moderateText
Moderates a document for harmful and sensitive categories.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
