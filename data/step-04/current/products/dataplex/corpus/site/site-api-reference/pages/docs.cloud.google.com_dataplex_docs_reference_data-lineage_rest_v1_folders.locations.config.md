---
title: "REST Resource: folders.locations.config \_|\_ Dataplex Universal Catalog \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/folders.locations.config
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/folders.locations.config
  title: "REST Resource: folders.locations.config \_|\_ Dataplex Universal Catalog\
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
REST Resource: folders.locations.config
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Config
JSON representation
Ingestion
JSON representation
IngestionRule
JSON representation
IntegrationSelector
JSON representation
Integration
LineageEnablement
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
Ingestion
Defines how Lineage should be ingested for a given resource.
JSON representation
{
"rules" : [
{
object ( IngestionRule )
}
]
}
Fields
rules[]
object ( IngestionRule )
Optional. List of rules for Data Lineage ingestion.
IngestionRule
Ingestion rule for Data Lineage ingestion.
JSON representation
{
"integrationSelector" : {
object ( IntegrationSelector )
} ,
"lineageEnablement" : {
object ( LineageEnablement )
}
}
Fields
integrationSelector
object ( IntegrationSelector )
Required. Integration selector of the rule. The rule is only applied to the Integration selected by the selector.
lineageEnablement
object ( LineageEnablement )
Required. Lineage enablement configuration. Defines configurations for the ingestion of lineage for the resource and its children. If unspecified, the ingestion will be enabled only if it was configured in the resource's parent.
IntegrationSelector
Integration selector of the rule. The rule is only applied to the Integration selected by the selector.
JSON representation
{
"integration" : enum ( Integration )
}
Fields
integration
enum ( Integration )
Required. Integration to which the rule applies. This field can be used to specify the integration against which the ingestion rule should be applied.
Integration
Integration to which the rule applies. This enum is expected to grow over time.
Enums
INTEGRATION_UNSPECIFIED
Integration is Unspecified
DATAPROC
Dataproc
LOOKER_CORE
Looker Core
LineageEnablement
Lineage enablement configuration. Defines configurations for the ingestion of lineage for the resource and its children.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Optional. If true, ingestion of lineage should be enabled. If false, it should be disabled. If unspecified, the system default value is used.
Methods
get
Get the Config for a given resource.
patch
Update the Config for a given resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-17 UTC."],[],[]]
