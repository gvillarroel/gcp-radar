---
title: "Package types (3.14.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/documentai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.types
  title: "Package types (3.14.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (3.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.14.0 (latest)
3.13.0
3.12.0
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.1
2.35.0
2.34.0
2.33.0
2.32.0
2.30.0
2.29.3
2.28.0
2.27.1
2.26.0
2.25.0
2.24.2
2.23.0
2.22.0
2.21.1
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.1
2.8.0
2.7.0
2.6.0
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.0
0.5.2
0.4.0
0.3.0
0.2.0
0.1.0
API documentation for documentai_v1.types package.
Classes
Barcode
Encodes the detailed information of a barcode.
BatchDocumentsInputConfig
The common config to specify a set of documents used as
input.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
BatchProcessMetadata
The long-running operation metadata for
BatchProcessDocuments .
BatchProcessRequest
Request message for
BatchProcessDocuments .
BatchProcessResponse
Response message for
BatchProcessDocuments .
BoundingPoly
A bounding polygon for the detected image annotation.
CommonOperationMetadata
The common metadata for long running operations.
CreateProcessorRequest
Request message for the
CreateProcessor
method. Notice this request is sent to a regionalized backend
service. If the
ProcessorType isn't
available in that region, the creation fails.
DeleteProcessorMetadata
The long-running operation metadata for the
DeleteProcessor
method.
DeleteProcessorRequest
Request message for the
DeleteProcessor
method.
DeleteProcessorVersionMetadata
The long-running operation metadata for the
DeleteProcessorVersion
method.
DeleteProcessorVersionRequest
Request message for the
DeleteProcessorVersion
method.
DeployProcessorVersionMetadata
The long-running operation metadata for the
DeployProcessorVersion
method.
DeployProcessorVersionRequest
Request message for the
DeployProcessorVersion
method.
DeployProcessorVersionResponse
Response message for the
DeployProcessorVersion
method.
DisableProcessorMetadata
The long-running operation metadata for the
DisableProcessor
method.
DisableProcessorRequest
Request message for the
DisableProcessor
method.
DisableProcessorResponse
Response message for the
DisableProcessor
method. Intentionally empty proto for adding fields in future.
Document
Document represents the canonical document resource in
Document AI. It is an interchange format that provides insights
into documents and allows for collaboration between users and
Document AI to iterate and optimize for quality.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DocumentOutputConfig
Config that controls the output of documents. All documents
will be written as a JSON file.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DocumentSchema
The schema defines the output of the processed document by a
processor.
EnableProcessorMetadata
The long-running operation metadata for the
EnableProcessor
method.
EnableProcessorRequest
Request message for the
EnableProcessor
method.
EnableProcessorResponse
Response message for the
EnableProcessor
method. Intentionally empty proto for adding fields in future.
EvaluateProcessorVersionMetadata
Metadata of the
EvaluateProcessorVersion
method.
EvaluateProcessorVersionRequest
Evaluates the given
ProcessorVersion
against the supplied documents.
EvaluateProcessorVersionResponse
Response of the
EvaluateProcessorVersion
method.
Evaluation
An evaluation of a ProcessorVersion's performance.
EvaluationReference
Gives a short summary of an evaluation, and links to the
evaluation itself.
FetchProcessorTypesRequest
Request message for the
FetchProcessorTypes
method. Some processor types may require the project be added to an
allowlist.
FetchProcessorTypesResponse
Response message for the
FetchProcessorTypes
method.
GcsDocument
Specifies a document stored on Cloud Storage.
GcsDocuments
Specifies a set of documents on Cloud Storage.
GcsPrefix
Specifies all documents on Cloud Storage with a common
prefix.
GetEvaluationRequest
Retrieves a specific Evaluation.
GetProcessorRequest
Request message for the
GetProcessor
method.
GetProcessorTypeRequest
Request message for the
GetProcessorType
method.
GetProcessorVersionRequest
Request message for the
GetProcessorVersion
method.
HumanReviewStatus
The status of human review on a processed document.
ListEvaluationsRequest
Retrieves a list of evaluations for a given
ProcessorVersion .
ListEvaluationsResponse
The response from ListEvaluations .
ListProcessorTypesRequest
Request message for the
ListProcessorTypes
method. Some processor types may require the project be added to an
allowlist.
ListProcessorTypesResponse
Response message for the
ListProcessorTypes
method.
ListProcessorVersionsRequest
Request message for list all processor versions belongs to a
processor.
ListProcessorVersionsResponse
Response message for the
ListProcessorVersions
method.
ListProcessorsRequest
Request message for list all processors belongs to a project.
ListProcessorsResponse
Response message for the
ListProcessors
method.
NormalizedVertex
A vertex represents a 2D point in the image.
NOTE: the normalized vertex coordinates are relative to the
original image and range from 0 to 1.
OcrConfig
Config for Document OCR.
ProcessOptions
Options for Process API
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ProcessRequest
Request message for the
ProcessDocument
method.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ProcessResponse
Response message for the
ProcessDocument
method.
Processor
The first-class citizen for Document AI. Each processor
defines how to extract structural information from a document.
ProcessorType
A processor type is responsible for performing a certain
document understanding task on a certain type of document.
ProcessorVersion
A processor version is an implementation of a processor. Each
processor can have multiple versions, pretrained by Google
internally or uptrained by the customer. A processor can only
have one default version at a time. Its document-processing
behavior is defined by that version.
ProcessorVersionAlias
Contains the alias and the aliased resource name of processor
version.
RawDocument
Payload message of raw document content (bytes).
ReviewDocumentOperationMetadata
The long-running operation metadata for the
ReviewDocument
method.
ReviewDocumentRequest
Request message for the
ReviewDocument
method.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ReviewDocumentResponse
Response message for the
ReviewDocument
method.
SetDefaultProcessorVersionMetadata
The long-running operation metadata for the
SetDefaultProcessorVersion
method.
SetDefaultProcessorVersionRequest
Request message for the
SetDefaultProcessorVersion
method.
SetDefaultProcessorVersionResponse
Response message for the
SetDefaultProcessorVersion
method.
TrainProcessorVersionMetadata
The metadata that represents a processor version being
created.
TrainProcessorVersionRequest
Request message for the
TrainProcessorVersion
method.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TrainProcessorVersionResponse
The response for
TrainProcessorVersion .
UndeployProcessorVersionMetadata
The long-running operation metadata for the
UndeployProcessorVersion
method.
UndeployProcessorVersionRequest
Request message for the
UndeployProcessorVersion
method.
UndeployProcessorVersionResponse
Response message for the
UndeployProcessorVersion
method.
Vertex
A vertex represents a 2D point in the image.
NOTE: the vertex coordinates are in the same scale as the
original image.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
