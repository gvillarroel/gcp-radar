---
title: "Interface BatchProcessRequestOrBuilder (2.92.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessRequestOrBuilder
  title: "Interface BatchProcessRequestOrBuilder (2.92.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface BatchProcessRequestOrBuilder (2.92.0)
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
public interface BatchProcessRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsLabels(String key)
public abstract boolean containsLabels ( String key )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getDocumentOutputConfig()
public abstract DocumentOutputConfig getDocumentOutputConfig ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
DocumentOutputConfig
The documentOutputConfig.
getDocumentOutputConfigOrBuilder()
public abstract DocumentOutputConfigOrBuilder getDocumentOutputConfigOrBuilder ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
DocumentOutputConfigOrBuilder
getInputDocuments()
public abstract BatchDocumentsInputConfig getInputDocuments ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
BatchDocumentsInputConfig
The inputDocuments.
getInputDocumentsOrBuilder()
public abstract BatchDocumentsInputConfigOrBuilder getInputDocumentsOrBuilder ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
BatchDocumentsInputConfigOrBuilder
getLabels() (deprecated)
public abstract Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public abstract int getLabelsCount ()
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public abstract Map<String , String > getLabelsMap ()
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public abstract String getLabelsOrDefault ( String key , String defaultValue )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getLabelsOrThrow(String key)
public abstract String getLabelsOrThrow ( String key )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getName()
public abstract String getName ()
Required. The resource name of
Processor or
ProcessorVersion .
Format: projects/{project}/locations/{location}/processors/{processor} ,
or
projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Required. The resource name of
Processor or
ProcessorVersion .
Format: projects/{project}/locations/{location}/processors/{processor} ,
or
projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getProcessOptions()
public abstract ProcessOptions getProcessOptions ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptions
The processOptions.
getProcessOptionsOrBuilder()
public abstract ProcessOptionsOrBuilder getProcessOptionsOrBuilder ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptionsOrBuilder
getSkipHumanReview()
public abstract boolean getSkipHumanReview ()
Whether human review should be skipped for this request. Default to
false .
bool skip_human_review = 4;
Returns
Type
Description
boolean
The skipHumanReview.
hasDocumentOutputConfig()
public abstract boolean hasDocumentOutputConfig ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
boolean
Whether the documentOutputConfig field is set.
hasInputDocuments()
public abstract boolean hasInputDocuments ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
boolean
Whether the inputDocuments field is set.
hasProcessOptions()
public abstract boolean hasProcessOptions ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
boolean
Whether the processOptions field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
