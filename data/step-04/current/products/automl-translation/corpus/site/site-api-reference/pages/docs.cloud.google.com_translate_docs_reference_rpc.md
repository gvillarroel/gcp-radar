---
title: "Cloud Translation API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/reference/rpc
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/reference/rpc
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/reference/rpc
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
Service: translate.googleapis.com
The Service name translate.googleapis.com is needed to create RPC client stubs.
google.cloud.location.Locations
Methods
GetLocation
Gets information about a location.
ListLocations
Lists information about the supported locations for this service.
google.cloud.translate.v2.TranslateService
Methods
DetectLanguage
Detects the language of text within a request.
GetSupportedLanguages
Returns a list of supported languages for translation.
TranslateText
Translates input text, returning translated text.
google.cloud.translation.v3.TranslationService
Methods
AdaptiveMtTranslate
Translate text using Adaptive MT.
BatchTranslateDocument
Translates a large volume of document in asynchronous batch mode.
BatchTranslateText
Translates a large volume of text in asynchronous batch mode.
CreateAdaptiveMtDataset
Creates an Adaptive MT dataset.
CreateDataset
Creates a Dataset.
CreateGlossary
Creates a glossary and returns the long-running operation.
CreateGlossaryEntry
Creates a glossary entry.
CreateModel
Creates a Model.
DeleteAdaptiveMtDataset
Deletes an Adaptive MT dataset, including all its entries and associated metadata.
DeleteAdaptiveMtFile
Deletes an AdaptiveMtFile along with its sentences.
DeleteDataset
Deletes a dataset and all of its contents.
DeleteGlossary
Deletes a glossary, or cancels glossary construction if the glossary isn't created yet.
DeleteGlossaryEntry
Deletes a single entry from the glossary
DeleteModel
Deletes a model.
DetectLanguage
Detects the language of text within a request.
ExportData
Exports dataset's data to the provided output location.
GetAdaptiveMtDataset
Gets the Adaptive MT dataset.
GetAdaptiveMtFile
Gets and AdaptiveMtFile
GetDataset
Gets a Dataset.
GetGlossary
Gets a glossary.
GetGlossaryEntry
Gets a single glossary entry by the given id.
GetModel
Gets a model.
GetSupportedLanguages
Returns a list of supported languages for translation.
ImportAdaptiveMtFile
Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
ImportData
Import sentence pairs into translation Dataset.
ListAdaptiveMtDatasets
Lists all Adaptive MT datasets for which the caller has read permission.
ListAdaptiveMtFiles
Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
ListAdaptiveMtSentences
Lists all AdaptiveMtSentences under a given file/dataset.
ListDatasets
Lists datasets.
ListExamples
Lists sentence pairs in the dataset.
ListGlossaries
Lists glossaries in a project.
ListGlossaryEntries
List the entries for the glossary.
ListModels
Lists models.
RomanizeText
Romanize input text written in non-Latin scripts to Latin text.
TranslateDocument
Translates documents in synchronous mode.
TranslateText
Translates input text and returns translated text.
UpdateGlossary
Updates a glossary.
UpdateGlossaryEntry
Updates a glossary entry.
google.cloud.translation.v3beta1.TranslationService
Methods
BatchTranslateDocument
Translates a large volume of document in asynchronous batch mode.
BatchTranslateText
Translates a large volume of text in asynchronous batch mode.
CreateGlossary
Creates a glossary and returns the long-running operation.
DeleteGlossary
Deletes a glossary, or cancels glossary construction if the glossary isn't created yet.
DetectLanguage
Detects the language of text within a request.
GetGlossary
Gets a glossary.
GetSupportedLanguages
Returns a list of supported languages for translation.
ListGlossaries
Lists glossaries in a project.
TranslateDocument
Translates documents in synchronous mode.
TranslateText
Translates input text and returns translated text.
google.iam.v1.IAMPolicy
Methods
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
