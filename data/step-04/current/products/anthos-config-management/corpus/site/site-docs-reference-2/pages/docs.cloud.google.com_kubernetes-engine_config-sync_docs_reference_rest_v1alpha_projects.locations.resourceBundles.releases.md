---
title: "REST Resource: projects.locations.resourceBundles.releases \_|\_ Config Sync\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.resourceBundles.releases
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.resourceBundles.releases
  title: "REST Resource: projects.locations.resourceBundles.releases \_|\_ Config\
    \ Sync \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Reference
Send feedback
REST Resource: projects.locations.resourceBundles.releases
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Release
JSON representation
Lifecycle
ReleaseInfo
JSON representation
Methods
Resource: Release
Release represents a versioned release containing Kubernetes manifests.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"lifecycle" : enum ( Lifecycle ) ,
"version" : string ,
"publishTime" : string ,
"info" : {
object ( ReleaseInfo )
}
}
Fields
name
string
Identifier. Name of the Release. Format is projects/{project}/locations/location}/resourceBundles/{resourceBundle}/release/[a-z][a-z0-9\-]{0,62} .
createTime
string ( Timestamp format)
Output only. Time Release was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Time Release was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels as key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
lifecycle
enum ( Lifecycle )
Optional. lifecycle of the Release .
version
string
Required. Version of the Release . This must be v . . .
publishTime
string ( Timestamp format)
Output only. Time the Release was published.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
info
object ( ReleaseInfo )
Optional. ResourceBundle Release extra information e.g., artifact registry image path.
Lifecycle
Lifecycle indicates the state of the Release . A published release is immutable.
Enums
LIFECYCLE_UNSPECIFIED
indicates lifecycle has not been specified.
DRAFT
indicates that the Release is being edited.
PUBLISHED
indicates that the Release is now published (or released) and immutable.
ReleaseInfo
ReleaseInfo contains extra information about the ResourceBundle release e.g., link to an artifact registry OCI image.
JSON representation
{
"ociImagePath" : string ,
"variantOciImagePaths" : {
string : string ,
...
}
}
Fields
ociImagePath
string
Output only. Path to the oci image the service uploads to on a Release creation.
variantOciImagePaths
map (key: string, value: string)
Optional. Per-variant paths to the oci images the service uploads on package release creation
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Methods
create
Creates a new Release in a given project, location and resource bundle.
delete
Deletes a single Release.
get
Gets details of a single Release.
list
Lists Releases in a given project and location.
patch
Updates the parameters of a single Release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]
