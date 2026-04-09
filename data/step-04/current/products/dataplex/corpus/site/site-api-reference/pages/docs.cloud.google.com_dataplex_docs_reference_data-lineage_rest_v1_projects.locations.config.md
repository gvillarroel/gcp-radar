---
title: "REST Resource: projects.locations.config \_|\_ Dataplex Universal Catalog\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.config
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.config
  title: "REST Resource: projects.locations.config \_|\_ Dataplex Universal Catalog\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Reference
Send feedback
REST Resource: projects.locations.config
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Config
JSON representation
Methods
Resource: Config
Configuration for Data Lineage. Defines different configuration options for Lineage customers to control behaviour of lineage systems.
JSON representation
{
"name" : string ,
"ingestion" : {
object ( Ingestion )
} ,
"etag" : string
}
Fields
name
string
Identifier. The resource name of the config. Format: organizations/{organization_id}/locations/global/config folders/{folder_id}/locations/global/config projects/{projectId}/locations/global/config projects/{project_number}/locations/global/config
ingestion
object ( Ingestion )
Optional. Ingestion rule for Data Lineage ingestion.
etag
string
Optional. etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a config from overwriting each other. It is required that systems make use of the etag in the read-modify-write cycle to perform config updates in order to avoid race conditions: An etag is returned in the response to config.get , and systems are expected to put that etag in the request to config.patch to ensure that their change will be applied to the same version of the config. If an etag is not provided in the call to config.patch , then the existing config, if any, will be overwritten.
Methods
get
Get the Config for a given resource.
patch
Update the Config for a given resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-29 UTC."],[],[]]
