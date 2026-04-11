---
title: "MonitoredResourceDescriptor \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/MonitoredResourceDescriptor
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/MonitoredResourceDescriptor
  title: "MonitoredResourceDescriptor \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
MonitoredResourceDescriptor
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.
Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
JSON representation
{
"name" : string ,
"type" : string ,
"displayName" : string ,
"description" : string ,
"labels" : [
{
object ( LabelDescriptor )
}
] ,
"launchStage" : enum ( LaunchStage )
}
Fields
name
string
Optional. The resource name of the monitored resource descriptor: "projects/{projectId}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {projectId} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}" .
type
string
Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types and Logging resource types .
displayName
string
Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database" .
description
string
Optional. A detailed description of the monitored resource type that might be used in documentation.
labels[]
object ( LabelDescriptor )
Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone" .
launchStage
enum ( LaunchStage )
Optional. The launch stage of the monitored resource definition.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
