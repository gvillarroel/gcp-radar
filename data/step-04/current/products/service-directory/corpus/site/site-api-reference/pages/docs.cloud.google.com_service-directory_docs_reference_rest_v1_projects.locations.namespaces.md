---
title: "REST Resource: projects.locations.namespaces \_|\_ Service Directory \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations.namespaces
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations.namespaces
  title: "REST Resource: projects.locations.namespaces \_|\_ Service Directory \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Reference
Send feedback
REST Resource: projects.locations.namespaces
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Namespace
JSON representation
Methods
Resource: Namespace
A container for services . Namespaces allow administrators to group services together and define permissions for a collection of services.
JSON representation
{
"name" : string ,
"labels" : {
string : string ,
...
} ,
"uid" : string
}
Fields
name
string
Immutable. The resource name for the namespace in the format projects/*/locations/*/namespaces/* .
labels
map (key: string, value: string)
Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
uid
string
Output only. The globally unique identifier of the namespace in the UUID4 format.
Methods
create
Creates a namespace, and returns the new namespace.
delete
Deletes a namespace.
get
Gets a namespace.
getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).
list
Lists all namespaces.
patch
Updates a namespace.
setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).
testIamPermissions
Tests IAM permissions for a resource (namespace or service only).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
