---
title: "Cloud Speech-to-Text API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest
  title: "Cloud Speech-to-Text API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Reference
Send feedback
Cloud Speech-to-Text API
Stay organized with collections
Save and categorize content based on your preferences.
Converts audio to text by applying powerful neural network models.
REST Resource: v2.projects.locations
REST Resource: v2.projects.locations.config
REST Resource: v2.projects.locations.customClasses
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.locations.phraseSets
REST Resource: v2.projects.locations.recognizers
REST Resource: v1p1beta1.operations
REST Resource: v1p1beta1.projects.locations.customClasses
REST Resource: v1p1beta1.projects.locations.phraseSets
REST Resource: v1p1beta1.speech
REST Resource: v1.operations
REST Resource: v1.projects.locations.customClasses
REST Resource: v1.projects.locations.phraseSets
REST Resource: v1.speech
Service: speech.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://speech.googleapis.com/$discovery/rest?version=v2
https://speech.googleapis.com/$discovery/rest?version=v1
https://speech.googleapis.com/$discovery/rest?version=v1p1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://speech.googleapis.com
REST Resource: v2.projects.locations
Methods
get
GET /v2/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v2/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v2.projects.locations.config
Methods
get
GET /v2/{name=projects/*/locations/*/config}
Returns the requested Config .
update
PATCH /v2/{config.name=projects/*/locations/*/config}
Updates the Config .
REST Resource: v2.projects.locations.customClasses
Methods
create
POST /v2/{parent=projects/*/locations/*}/customClasses
Creates a CustomClass .
delete
DELETE /v2/{name=projects/*/locations/*/customClasses/*}
Deletes the CustomClass .
get
GET /v2/{name=projects/*/locations/*/customClasses/*}
Returns the requested CustomClass .
list
GET /v2/{parent=projects/*/locations/*}/customClasses
Lists CustomClasses.
patch
PATCH /v2/{customClass.name=projects/*/locations/*/customClasses/*}
Updates the CustomClass .
undelete
POST /v2/{name=projects/*/locations/*/customClasses/*}:undelete
Undeletes the CustomClass .
REST Resource: v2.projects.locations.operations
Methods
cancel
POST /v2/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v2/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v2/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.locations.phraseSets
Methods
create
POST /v2/{parent=projects/*/locations/*}/phraseSets
Creates a PhraseSet .
delete
DELETE /v2/{name=projects/*/locations/*/phraseSets/*}
Deletes the PhraseSet .
get
GET /v2/{name=projects/*/locations/*/phraseSets/*}
Returns the requested PhraseSet .
list
GET /v2/{parent=projects/*/locations/*}/phraseSets
Lists PhraseSets.
patch
PATCH /v2/{phraseSet.name=projects/*/locations/*/phraseSets/*}
Updates the PhraseSet .
undelete
POST /v2/{name=projects/*/locations/*/phraseSets/*}:undelete
Undeletes the PhraseSet .
REST Resource: v2.projects.locations.recognizers
Methods
batchRecognize
POST /v2/{recognizer=projects/*/locations/*/recognizers/*}:batchRecognize
Performs batch asynchronous speech recognition: send a request with N audio files and receive a long running operation that can be polled to see when the transcriptions are finished.
create
POST /v2/{parent=projects/*/locations/*}/recognizers
Creates a Recognizer .
delete
DELETE /v2/{name=projects/*/locations/*/recognizers/*}
Deletes the Recognizer .
get
GET /v2/{name=projects/*/locations/*/recognizers/*}
Returns the requested Recognizer .
list
GET /v2/{parent=projects/*/locations/*}/recognizers
Lists Recognizers.
patch
PATCH /v2/{recognizer.name=projects/*/locations/*/recognizers/*}
Updates the Recognizer .
recognize
POST /v2/{recognizer=projects/*/locations/*/recognizers/*}:recognize
Performs synchronous Speech recognition: receive results after all audio has been sent and processed.
undelete
POST /v2/{name=projects/*/locations/*/recognizers/*}:undelete
Undeletes the Recognizer .
REST Resource: v1p1beta1.operations
Methods
cancel
POST /v1p1beta1/operations/{name=**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1p1beta1/operations/{name=**}
Deletes a long-running operation.
get
GET /v1p1beta1/operations/{name=**}
Gets the latest state of a long-running operation.
list
GET /v1p1beta1/operations
Lists operations that match the specified filter in the request.
REST Resource: v1p1beta1.projects.locations.customClasses
Methods
create
POST /v1p1beta1/{parent=projects/*/locations/*}/customClasses
Create a custom class.
delete
DELETE /v1p1beta1/{name=projects/*/locations/*/customClasses/*}
Delete a custom class.
get
GET /v1p1beta1/{name=projects/*/locations/*/customClasses/*}
Get a custom class.
list
GET /v1p1beta1/{parent=projects/*/locations/*}/customClasses
List custom classes.
patch
PATCH /v1p1beta1/{customClass.name=projects/*/locations/*/customClasses/*}
Update a custom class.
REST Resource: v1p1beta1.projects.locations.phraseSets
Methods
create
POST /v1p1beta1/{parent=projects/*/locations/*}/phraseSets
Create a set of phrase hints.
delete
DELETE /v1p1beta1/{name=projects/*/locations/*/phraseSets/*}
Delete a phrase set.
get
GET /v1p1beta1/{name=projects/*/locations/*/phraseSets/*}
Get a phrase set.
list
GET /v1p1beta1/{parent=projects/*/locations/*}/phraseSets
List phrase sets.
patch
PATCH /v1p1beta1/{phraseSet.name=projects/*/locations/*/phraseSets/*}
Update a phrase set.
REST Resource: v1p1beta1.speech
Methods
longrunningrecognize
POST /v1p1beta1/speech:longrunningrecognize
Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface.
recognize
POST /v1p1beta1/speech:recognize
Performs synchronous speech recognition: receive results after all audio has been sent and processed.
REST Resource: v1.operations
Methods
cancel
POST /v1/operations/{name=**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/operations/{name=**}
Deletes a long-running operation.
get
GET /v1/operations/{name=**}
Gets the latest state of a long-running operation.
list
GET /v1/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.customClasses
Methods
create
POST /v1/{parent=projects/*/locations/*}/customClasses
Create a custom class.
delete
DELETE /v1/{name=projects/*/locations/*/customClasses/*}
Delete a custom class.
get
GET /v1/{name=projects/*/locations/*/customClasses/*}
Get a custom class.
list
GET /v1/{parent=projects/*/locations/*}/customClasses
List custom classes.
patch
PATCH /v1/{customClass.name=projects/*/locations/*/customClasses/*}
Update a custom class.
REST Resource: v1.projects.locations.phraseSets
Methods
create
POST /v1/{parent=projects/*/locations/*}/phraseSets
Create a set of phrase hints.
delete
DELETE /v1/{name=projects/*/locations/*/phraseSets/*}
Delete a phrase set.
get
GET /v1/{name=projects/*/locations/*/phraseSets/*}
Get a phrase set.
list
GET /v1/{parent=projects/*/locations/*}/phraseSets
List phrase sets.
patch
PATCH /v1/{phraseSet.name=projects/*/locations/*/phraseSets/*}
Update a phrase set.
REST Resource: v1.speech
Methods
longrunningrecognize
POST /v1/speech:longrunningrecognize
Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface.
recognize
POST /v1/speech:recognize
Performs synchronous speech recognition: receive results after all audio has been sent and processed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
