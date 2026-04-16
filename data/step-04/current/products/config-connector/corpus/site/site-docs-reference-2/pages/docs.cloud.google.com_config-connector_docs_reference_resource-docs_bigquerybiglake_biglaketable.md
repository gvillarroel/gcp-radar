---
title: "BigLakeTable \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquerybiglake/biglaketable
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquerybiglake/biglaketable
  title: "BigLakeTable \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigLakeTable
Property
Value
Google Cloud Service Name
BigQuery BigLake
Google Cloud Service Documentation
/bigquery/docs/biglake-intro
Google Cloud REST Resource Name
projects.locations.catalogs.databases.tables
Google Cloud REST Resource Documentation
/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs.databases.tables
Config Connector Resource Short Names
gcpbiglaketable gcpbiglaketables biglaketable
Config Connector Service Name
biglake.googleapis.com
Config Connector Resource Fully Qualified Name
biglaketables.bigquerybiglake.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
hiveOptions :
parameters :
string : string
storageDescriptor :
inputFormat : string
locationURI : string
outputFormat : string
serdeInfo :
serializationLib : string
tableType : string
parentDatabaseRef :
external : string
name : string
namespace : string
resourceID : string
type : string
Fields
hiveOptions
Optional
object
Options of a Hive table.
hiveOptions.parameters
Optional
map (key: string, value: string)
Stores user supplied Hive table parameters.
hiveOptions.storageDescriptor
Optional
object
Stores physical storage information of the data.
hiveOptions.storageDescriptor.inputFormat
Optional
string
The fully qualified Java class name of the input format.
hiveOptions.storageDescriptor.locationURI
Optional
string
Cloud Storage folder URI where the table data is stored, starting with "gs://".
hiveOptions.storageDescriptor.outputFormat
Optional
string
The fully qualified Java class name of the output format.
hiveOptions.storageDescriptor.serdeInfo
Optional
object
Serializer and deserializer information.
hiveOptions.storageDescriptor.serdeInfo.serializationLib
Optional
string
The fully qualified Java class name of the serialization library.
hiveOptions.tableType
Optional
string
Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.
parentDatabaseRef
Required
object
Required. The parent resource where this table will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
parentDatabaseRef.external
Optional
string
A reference to an externally managed BigQueryBigLakeDatabase resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/catalogs/{{catalogID}}/databases/{{databaseID}}".
parentDatabaseRef.name
Optional
string
The name of a BigQueryBigLakeDatabase resource.
parentDatabaseRef.namespace
Optional
string
The namespace of a BigQueryBigLakeDatabase resource.
resourceID
Optional
string
The BigLake Table ID. If not given, the metadata.name will be used.
type
Optional
string
The table type.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
createTime : string
deleteTime : string
expireTime : string
updateTime : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the BigLakeTable resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.createTime
string
Output only. The creation time of the table.
observedState.deleteTime
string
Output only. The deletion time of the table. Only set after the table is deleted.
observedState.expireTime
string
Output only. The time when this table is considered expired. Only set after the table is deleted.
observedState.updateTime
string
Output only. The last modification time of the table.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
