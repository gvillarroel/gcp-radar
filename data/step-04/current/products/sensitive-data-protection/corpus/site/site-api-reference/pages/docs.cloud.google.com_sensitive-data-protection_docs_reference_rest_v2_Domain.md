---
title: "Domain \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/Domain
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/Domain
  title: "Domain \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
Domain
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Category
Signal
A domain represents a thematic category that a data profile can fall under.
JSON representation
{
"category" : enum ( Category ) ,
"signals" : [
enum ( Signal )
]
}
Fields
category
enum ( Category )
A domain category that this profile is related to.
signals[]
enum ( Signal )
The collection of signals that influenced selection of the category.
Category
This enum defines the various domain categories a data profile can fall under.
Enums
CATEGORY_UNSPECIFIED
Category unspecified.
AI
Indicates that the data profile is related to artificial intelligence. When set, all findings stored to Security Command Center will set the corresponding AI domain field of Finding objects.
CODE
Indicates that the data profile is related to code.
Signal
The signal used to determine the category. New values may be added in the future.
Enums
SIGNAL_UNSPECIFIED
Unused.
MODEL
One or more machine learning models are present.
TEXT_EMBEDDING
A table appears to contain text embeddings.
EMBEDDING
A table appears to contain embeddings of any type (for example, text, image, multimodal). The TEXT_EMBEDDING signal might also be present if the table contains text embeddings.
VERTEX_PLUGIN
The Cloud SQL Vertex AI plugin is installed on the database.
VECTOR_PLUGIN
Support for Cloud SQL vector embeddings is enabled on the database.
SOURCE_CODE
Source code is present.
SERVICE
If the service determines the category type. For example, Vertex AI assets would always have a Category of AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-04 UTC."],[],[]]
