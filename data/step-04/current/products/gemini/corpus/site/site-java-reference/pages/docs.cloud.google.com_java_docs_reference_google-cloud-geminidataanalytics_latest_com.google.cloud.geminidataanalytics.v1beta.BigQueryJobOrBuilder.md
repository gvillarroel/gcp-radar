---
title: "Interface BigQueryJobOrBuilder (0.16.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.BigQueryJobOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.BigQueryJobOrBuilder
  title: "Interface BigQueryJobOrBuilder (0.16.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Interface BigQueryJobOrBuilder (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.13.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.4.0
0.3.0
0.2.0
0.1.0
public interface BigQueryJobOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getDestinationTable()
public abstract BigQueryTableReference getDestinationTable ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryTableReference
The destinationTable.
getDestinationTableOrBuilder()
public abstract BigQueryTableReferenceOrBuilder getDestinationTableOrBuilder ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryTableReferenceOrBuilder
getJobId()
public abstract String getJobId ()
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The jobId.
getJobIdBytes()
public abstract ByteString getJobIdBytes ()
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for jobId.
getLocation()
public abstract String getLocation ()
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The location.
getLocationBytes()
public abstract ByteString getLocationBytes ()
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for location.
getProjectId()
public abstract String getProjectId ()
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The projectId.
getProjectIdBytes()
public abstract ByteString getProjectIdBytes ()
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for projectId.
getSchema()
public abstract Schema getSchema ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Schema
The schema.
getSchemaOrBuilder()
public abstract SchemaOrBuilder getSchemaOrBuilder ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
SchemaOrBuilder
hasDestinationTable()
public abstract boolean hasDestinationTable ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the destinationTable field is set.
hasSchema()
public abstract boolean hasSchema ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the schema field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
