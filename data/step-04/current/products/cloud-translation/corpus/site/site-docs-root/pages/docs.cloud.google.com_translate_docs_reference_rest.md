---
title: "Cloud Translation API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/reference/rest
  title: "Cloud Translation API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
API and references
Send feedback
Cloud Translation API
Stay organized with collections
Save and categorize content based on your preferences.
Integrates text translation into your website or application.
REST Resource: v3beta1.projects
REST Resource: v3beta1.projects.locations
REST Resource: v3beta1.projects.locations.glossaries
REST Resource: v3beta1.projects.locations.operations
REST Resource: v3.projects
REST Resource: v3.projects.locations
REST Resource: v3.projects.locations.adaptiveMtDatasets
REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles
REST Resource:
v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences
REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtSentences
REST Resource: v3.projects.locations.datasets
REST Resource: v3.projects.locations.datasets.examples
REST Resource: v3.projects.locations.glossaries
REST Resource: v3.projects.locations.glossaries.glossaryEntries
REST Resource: v3.projects.locations.models
REST Resource: v3.projects.locations.operations
Service: translate.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://translate.googleapis.com/$discovery/rest?version=v3
https://translate.googleapis.com/$discovery/rest?version=v3beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://translate.googleapis.com
REST Resource: v3beta1.projects
Methods
detectLanguage
POST /v3beta1/{parent=projects/*}:detectLanguage
Detects the language of text within a request.
getSupportedLanguages
GET /v3beta1/{parent=projects/*}/supportedLanguages
Returns a list of supported languages for translation.
translateText
POST /v3beta1/{parent=projects/*}:translateText
Translates input text and returns translated text.
REST Resource: v3beta1.projects.locations
Methods
batchTranslateDocument
POST /v3beta1/{parent=projects/*/locations/*}:batchTranslateDocument
Translates a large volume of document in asynchronous batch mode.
batchTranslateText
POST /v3beta1/{parent=projects/*/locations/*}:batchTranslateText
Translates a large volume of text in asynchronous batch mode.
detectLanguage
POST /v3beta1/{parent=projects/*/locations/*}:detectLanguage
Detects the language of text within a request.
get
GET /v3beta1/{name=projects/*/locations/*}
Gets information about a location.
getSupportedLanguages
GET /v3beta1/{parent=projects/*/locations/*}/supportedLanguages
Returns a list of supported languages for translation.
list
GET /v3beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
translateDocument
POST /v3beta1/{parent=projects/*/locations/*}:translateDocument
Translates documents in synchronous mode.
translateText
POST /v3beta1/{parent=projects/*/locations/*}:translateText
Translates input text and returns translated text.
REST Resource: v3beta1.projects.locations.glossaries
Methods
create
POST /v3beta1/{parent=projects/*/locations/*}/glossaries
Creates a glossary and returns the long-running operation.
delete
DELETE /v3beta1/{name=projects/*/locations/*/glossaries/*}
Deletes a glossary, or cancels glossary construction if the glossary isn't created yet.
get
GET /v3beta1/{name=projects/*/locations/*/glossaries/*}
Gets a glossary.
list
GET /v3beta1/{parent=projects/*/locations/*}/glossaries
Lists glossaries in a project.
REST Resource: v3beta1.projects.locations.operations
Methods
cancel
POST /v3beta1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v3beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v3beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v3beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
wait
POST /v3beta1/{name=projects/*/locations/*/operations/*}:wait
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
REST Resource: v3.projects
Methods
detectLanguage
POST /v3/{parent=projects/*}:detectLanguage
Detects the language of text within a request.
getSupportedLanguages
GET /v3/{parent=projects/*}/supportedLanguages
Returns a list of supported languages for translation.
romanizeText
POST /v3/{parent=projects/*}:romanizeText
Romanize input text written in non-Latin scripts to Latin text.
translateText
POST /v3/{parent=projects/*}:translateText
Translates input text and returns translated text.
REST Resource: v3.projects.locations
Methods
adaptiveMtTranslate
POST /v3/{parent=projects/*/locations/*}:adaptiveMtTranslate
Translate text using Adaptive MT.
batchTranslateDocument
POST /v3/{parent=projects/*/locations/*}:batchTranslateDocument
Translates a large volume of document in asynchronous batch mode.
batchTranslateText
POST /v3/{parent=projects/*/locations/*}:batchTranslateText
Translates a large volume of text in asynchronous batch mode.
detectLanguage
POST /v3/{parent=projects/*/locations/*}:detectLanguage
Detects the language of text within a request.
get
GET /v3/{name=projects/*/locations/*}
Gets information about a location.
getSupportedLanguages
GET /v3/{parent=projects/*/locations/*}/supportedLanguages
Returns a list of supported languages for translation.
list
GET /v3/{name=projects/*}/locations
Lists information about the supported locations for this service.
romanizeText
POST /v3/{parent=projects/*/locations/*}:romanizeText
Romanize input text written in non-Latin scripts to Latin text.
translateDocument
POST /v3/{parent=projects/*/locations/*}:translateDocument
Translates documents in synchronous mode.
translateText
POST /v3/{parent=projects/*/locations/*}:translateText
Translates input text and returns translated text.
REST Resource: v3.projects.locations.adaptiveMtDatasets
Methods
create
POST /v3/{parent=projects/*/locations/*}/adaptiveMtDatasets
Creates an Adaptive MT dataset.
delete
DELETE /v3/{name=projects/*/locations/*/adaptiveMtDatasets/*}
Deletes an Adaptive MT dataset, including all its entries and associated metadata.
get
GET /v3/{name=projects/*/locations/*/adaptiveMtDatasets/*}
Gets the Adaptive MT dataset.
importAdaptiveMtFile
POST /v3/{parent=projects/*/locations/*/adaptiveMtDatasets/*}:importAdaptiveMtFile
Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
list
GET /v3/{parent=projects/*/locations/*}/adaptiveMtDatasets
Lists all Adaptive MT datasets for which the caller has read permission.
REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles
Methods
delete
DELETE /v3/{name=projects/*/locations/*/adaptiveMtDatasets/*/adaptiveMtFiles/*}
Deletes an AdaptiveMtFile along with its sentences.
get
GET /v3/{name=projects/*/locations/*/adaptiveMtDatasets/*/adaptiveMtFiles/*}
Gets and AdaptiveMtFile
list
GET /v3/{parent=projects/*/locations/*/adaptiveMtDatasets/*}/adaptiveMtFiles
Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences
Methods
list
GET /v3/{parent=projects/*/locations/*/adaptiveMtDatasets/*/adaptiveMtFiles/*}/adaptiveMtSentences
Lists all AdaptiveMtSentences under a given file/dataset.
REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtSentences
Methods
list
GET /v3/{parent=projects/*/locations/*/adaptiveMtDatasets/*}/adaptiveMtSentences
Lists all AdaptiveMtSentences under a given file/dataset.
REST Resource: v3.projects.locations.datasets
Methods
create
POST /v3/{parent=projects/*/locations/*}/datasets
Creates a Dataset.
delete
DELETE /v3/{name=projects/*/locations/*/datasets/*}
Deletes a dataset and all of its contents.
exportData
POST /v3/{dataset=projects/*/locations/*/datasets/*}:exportData
Exports dataset's data to the provided output location.
get
GET /v3/{name=projects/*/locations/*/datasets/*}
Gets a Dataset.
importData
POST /v3/{dataset=projects/*/locations/*/datasets/*}:importData
Import sentence pairs into translation Dataset.
list
GET /v3/{parent=projects/*/locations/*}/datasets
Lists datasets.
REST Resource: v3.projects.locations.datasets.examples
Methods
list
GET /v3/{parent=projects/*/locations/*/datasets/*}/examples
Lists sentence pairs in the dataset.
REST Resource: v3.projects.locations.glossaries
Methods
create
POST /v3/{parent=projects/*/locations/*}/glossaries
Creates a glossary and returns the long-running operation.
delete
DELETE /v3/{name=projects/*/locations/*/glossaries/*}
Deletes a glossary, or cancels glossary construction if the glossary isn't created yet.
get
GET /v3/{name=projects/*/locations/*/glossaries/*}
Gets a glossary.
list
GET /v3/{parent=projects/*/locations/*}/glossaries
Lists glossaries in a project.
patch
PATCH /v3/{glossary.name=projects/*/locations/*/glossaries/*}
Updates a glossary.
REST Resource: v3.projects.locations.glossaries.glossaryEntries
Methods
create
POST /v3/{parent=projects/*/locations/*/glossaries/*}/glossaryEntries
Creates a glossary entry.
delete
DELETE /v3/{name=projects/*/locations/*/glossaries/*/glossaryEntries/*}
Deletes a single entry from the glossary
get
GET /v3/{name=projects/*/locations/*/glossaries/*/glossaryEntries/*}
Gets a single glossary entry by the given id.
list
GET /v3/{parent=projects/*/locations/*/glossaries/*}/glossaryEntries
List the entries for the glossary.
patch
PATCH /v3/{glossaryEntry.name=projects/*/locations/*/glossaries/*/glossaryEntries/*}
Updates a glossary entry.
REST Resource: v3.projects.locations.models
Methods
create
POST /v3/{parent=projects/*/locations/*}/models
Creates a Model.
delete
DELETE /v3/{name=projects/*/locations/*/models/*}
Deletes a model.
get
GET /v3/{name=projects/*/locations/*/models/*}
Gets a model.
list
GET /v3/{parent=projects/*/locations/*}/models
Lists models.
REST Resource: v3.projects.locations.operations
Methods
cancel
POST /v3/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v3/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v3/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v3/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
wait
POST /v3/{name=projects/*/locations/*/operations/*}:wait
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
