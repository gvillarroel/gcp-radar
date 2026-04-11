---
title: "Interface BatchProcessMetadata.IndividualProcessStatusOrBuilder (2.92.0) \_\
  |\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatusOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatusOrBuilder
  title: "Interface BatchProcessMetadata.IndividualProcessStatusOrBuilder (2.92.0)\
    \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface BatchProcessMetadata.IndividualProcessStatusOrBuilder (2.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.92.0 (latest)
2.91.0
2.89.0
2.87.0
2.86.0
2.85.0
2.84.0
2.82.0
2.80.0
2.79.0
2.78.0
2.77.0
2.76.0
2.74.0
2.72.0
2.71.0
2.68.0
2.67.0
2.66.0
2.64.0
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.28.0
2.27.0
2.26.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.5
2.6.2
2.5.1
2.4.3
2.3.1
2.2.1
2.1.9
public static interface BatchProcessMetadata . IndividualProcessStatusOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getHumanReviewStatus()
public abstract HumanReviewStatus getHumanReviewStatus ()
The status of human review on the processed document.
.google.cloud.documentai.v1.HumanReviewStatus human_review_status = 5;
Returns
Type
Description
HumanReviewStatus
The humanReviewStatus.
getHumanReviewStatusOrBuilder()
public abstract HumanReviewStatusOrBuilder getHumanReviewStatusOrBuilder ()
The status of human review on the processed document.
.google.cloud.documentai.v1.HumanReviewStatus human_review_status = 5;
Returns
Type
Description
HumanReviewStatusOrBuilder
getInputGcsSource()
public abstract String getInputGcsSource ()
The source of the document, same as the
input_gcs_source
field in the request when the batch process started.
string input_gcs_source = 1;
Returns
Type
Description
String
The inputGcsSource.
getInputGcsSourceBytes()
public abstract ByteString getInputGcsSourceBytes ()
The source of the document, same as the
input_gcs_source
field in the request when the batch process started.
string input_gcs_source = 1;
Returns
Type
Description
ByteString
The bytes for inputGcsSource.
getOutputGcsDestination()
public abstract String getOutputGcsDestination ()
The Cloud Storage output destination (in the request as
DocumentOutputConfig.GcsOutputConfig.gcs_uri )
of the processed document if it was successful, otherwise empty.
string output_gcs_destination = 3;
Returns
Type
Description
String
The outputGcsDestination.
getOutputGcsDestinationBytes()
public abstract ByteString getOutputGcsDestinationBytes ()
The Cloud Storage output destination (in the request as
DocumentOutputConfig.GcsOutputConfig.gcs_uri )
of the processed document if it was successful, otherwise empty.
string output_gcs_destination = 3;
Returns
Type
Description
ByteString
The bytes for outputGcsDestination.
getStatus()
public abstract Status getStatus ()
The status processing the document.
.google.rpc.Status status = 2;
Returns
Type
Description
com.google.rpc.Status
The status.
getStatusOrBuilder()
public abstract StatusOrBuilder getStatusOrBuilder ()
The status processing the document.
.google.rpc.Status status = 2;
Returns
Type
Description
com.google.rpc.StatusOrBuilder
hasHumanReviewStatus()
public abstract boolean hasHumanReviewStatus ()
The status of human review on the processed document.
.google.cloud.documentai.v1.HumanReviewStatus human_review_status = 5;
Returns
Type
Description
boolean
Whether the humanReviewStatus field is set.
hasStatus()
public abstract boolean hasStatus ()
The status processing the document.
.google.rpc.Status status = 2;
Returns
Type
Description
boolean
Whether the status field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
