---
title: "Sample templates for registering model endpoints \_|\_ AlloyDB for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint-sample-template
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint-sample-template
  title: "Sample templates for registering model endpoints \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Sample templates for registering model endpoints
Stay organized with collections
Save and categorize content based on your preferences.
Use sample SQL queries to register model endpoints with providers
like Google, OpenAI, Anthropic, Hugging Face, and custom AI model providers with AlloyDB.
You can select the provider, filter the model endpoint you want to create, and
then enter the model ID and other parameters to call the create model SQL
query.
Google
OpenAI
Anthropic
Hugging Face
Custom
Model type
text_embedding
generic
Provider
Model type
Auth with Secret Manager
Auth with custom header
Sample SQL query
google
text_embedding
Not applicable
Not applicable
CALL google_ml.create_model (
model_id = > ' UNIQUE_EMB_MODEL_ID ' ,
model_request_url = > ' VERTEX_AI_URL_EMB ' ,
model_provider = > 'google' ,
model_type = > 'text_embedding' ,
model_auth_type = > 'alloydb_service_agent_iam' ) ;
google
generic
Not applicable
Not applicable
CALL google_ml.create_model (
model_id = > ' UNIQUE_GEN_MODEL_ID ' ,
model_request_url = > ' VERTEX_AI_URL_GEN ' ,
model_provider = > 'google' ,
model_type = > 'generic' ,
model_auth_type = > 'alloydb_service_agent_iam'
) ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
