---
title: "REST Resource: projects.locations.namespaces.services \_|\_ Service Directory\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations.namespaces.services
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations.namespaces.services
  title: "REST Resource: projects.locations.namespaces.services \_|\_ Service Directory\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.namespaces.services
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Service
JSON representation
Methods
Resource: Service
An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
JSON representation
{
"name" : string ,
"annotations" : {
string : string ,
...
} ,
"endpoints" : [
{
object ( Endpoint )
}
] ,
"uid" : string
}
Fields
name
string
Immutable. The resource name for the service in the format projects/*/locations/*/namespaces/*/services/* .
annotations
map (key: string, value: string)
Optional. Annotations for the service. This data can be consumed by service clients.
Restrictions:
The entire annotations dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected
Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Annotations that fails to meet these requirements are rejected
Note: This field is equivalent to the metadata field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
endpoints[]
object ( Endpoint )
Output only. Endpoints associated with this service. Returned on LookupService.ResolveService . Control plane clients should use RegistrationService.ListEndpoints .
uid
string
Output only. The globally unique identifier of the service in the UUID4 format.
Methods
create
Creates a service, and returns the new service.
delete
Deletes a service.
get
Gets a service.
getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).
list
Lists all services belonging to a namespace.
patch
Updates a service.
resolve
Returns a service and its associated endpoints.
setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).
testIamPermissions
Tests IAM permissions for a resource (namespace or service only).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
