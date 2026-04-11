---
title: "Interface AlloyDbReferenceOrBuilder (0.16.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbReferenceOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbReferenceOrBuilder
  title: "Interface AlloyDbReferenceOrBuilder (0.16.0) \_|\_ Java client libraries\
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
Interface AlloyDbReferenceOrBuilder (0.16.0)
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
public interface AlloyDbReferenceOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAgentContextReference()
public abstract AgentContextReference getAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReference
The agentContextReference.
getAgentContextReferenceOrBuilder()
public abstract AgentContextReferenceOrBuilder getAgentContextReferenceOrBuilder ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReferenceOrBuilder
getDatabaseReference()
public abstract AlloyDbDatabaseReference getDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference
The databaseReference.
getDatabaseReferenceOrBuilder()
public abstract AlloyDbDatabaseReferenceOrBuilder getDatabaseReferenceOrBuilder ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReferenceOrBuilder
hasAgentContextReference()
public abstract boolean hasAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the agentContextReference field is set.
hasDatabaseReference()
public abstract boolean hasDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the databaseReference field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
