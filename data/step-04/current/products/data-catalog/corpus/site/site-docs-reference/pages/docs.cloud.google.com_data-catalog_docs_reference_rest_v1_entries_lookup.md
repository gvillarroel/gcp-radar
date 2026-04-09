---
title: "Method: entries.lookup \_|\_ Data Catalog Documentation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/entries/lookup
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/entries/lookup
  title: "Method: entries.lookup \_|\_ Data Catalog Documentation \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
Method: entries.lookup
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
Authorization scopes
Try it!
Data Catalog is deprecated. Please use Dataplex Universal Catalog instead.
Gets an entry by its target resource name.
The resource name comes from the source Google Cloud Platform service.
HTTP request
GET https://datacatalog.googleapis.com/v1/entries:lookup
Query parameters
Parameters
project
string
Project where the lookup should be performed. Required to lookup entry that is not a part of DPMS or DATAPLEX integratedSystem using its fullyQualifiedName . Ignored in other cases.
location
string
Location where the lookup should be performed. Required to lookup entry that is not a part of DPMS or DATAPLEX integratedSystem using its fullyQualifiedName . Ignored in other cases.
Union parameter target_name . Required. A full name, SQL name, or a fully qualified name of a Google Cloud Platform resource. target_name can be only one of the following:
linkedResource
string
The full name of the Google Cloud Platform resource the Data Catalog entry represents. For more information, see Full Resource Name .
Full names are case-sensitive. For example:
//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}
//pubsub.googleapis.com/projects/{PROJECT_ID}/topics/{TOPIC_ID}
sqlResource
string
The SQL name of the entry. SQL names are case-sensitive.
Examples:
pubsub.topic.{PROJECT_ID}.{TOPIC_ID}
pubsub.topic.{PROJECT_ID}. ` {TOPIC.ID.SEPARATED.WITH.DOTS} `
bigquery.table.{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}
bigquery.dataset.{PROJECT_ID}.{DATASET_ID}
datacatalog.entry.{PROJECT_ID}.{LOCATION_ID}.{ENTRY_GROUP_ID}.{ENTRY_ID}
Identifiers ( *_ID ) should comply with the Lexical structure in GoogleSQL .
fullyQualifiedName
string
Fully Qualified Name (FQN) of the resource.
FQNs take two forms:
For non-regionalized resources:
{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}
For regionalized resources:
{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}
Example for a DPMS table:
dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Entry .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
