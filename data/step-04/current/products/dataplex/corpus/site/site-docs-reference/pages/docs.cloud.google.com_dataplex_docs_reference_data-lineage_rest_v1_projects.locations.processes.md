---
title: "REST Resource: projects.locations.processes \_|\_ Knowledge Catalog \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.processes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.processes
  title: "REST Resource: projects.locations.processes \_|\_ Knowledge Catalog \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Reference
Send feedback
REST Resource: projects.locations.processes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Process
JSON representation
Origin
JSON representation
SourceType
Methods
Resource: Process
A process is the definition of a data transformation operation.
JSON representation
{
"name" : string ,
"displayName" : string ,
"attributes" : {
string : value ,
...
} ,
"origin" : {
object ( Origin )
}
}
Fields
name
string
Immutable. The resource name of the lineage process. Format: projects/{project}/locations/{location}/processes/{process} . Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: a-zA-Z0-9_-:.
displayName
string
Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like _-:&.
attributes
map (key: string, value: value ( Value format))
Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process).
Up to 100 attributes are allowed.
origin
object ( Origin )
Optional. The origin of this process and its runs and lineage events.
Origin
Origin of a process.
JSON representation
{
"sourceType" : enum ( SourceType ) ,
"name" : string
}
Fields
sourceType
enum ( SourceType )
Type of the source.
Use of a sourceType other than CUSTOM for process creation or updating is highly discouraged. It might be restricted in the future without notice. There will be increase in cost if you use any of the source types other than CUSTOM .
name
string
If the sourceType isn't CUSTOM, the value of this field should be a Google Cloud resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples:
{sourceType: COMPOSER, name:
"projects/foo/locations/us/environments/bar"}
{sourceType: BIGQUERY, name: "projects/foo/locations/eu"}
{sourceType: CUSTOM, name: "myCustomIntegration"}
SourceType
Type of the source of a process.
Enums
SOURCE_TYPE_UNSPECIFIED
Source is Unspecified
CUSTOM
A custom source
BIGQUERY
BigQuery
DATA_FUSION
Data Fusion
COMPOSER
Composer
LOOKER_STUDIO
Looker Studio
DATAPROC
Dataproc
VERTEX_AI
Vertex AI
LOOKER_CORE
Looker Core
Methods
create
Creates a new process.
delete
Deletes the process with the specified name.
get
Gets the details of the specified process.
list
List processes in the given project and location.
patch
Updates a process.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-17 UTC."],[],[]]
