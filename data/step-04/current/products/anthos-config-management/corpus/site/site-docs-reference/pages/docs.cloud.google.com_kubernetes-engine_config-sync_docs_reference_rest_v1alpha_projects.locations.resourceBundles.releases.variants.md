---
title: "REST Resource: projects.locations.resourceBundles.releases.variants \_|\_\
  \ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.resourceBundles.releases.variants
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.resourceBundles.releases.variants
  title: "REST Resource: projects.locations.resourceBundles.releases.variants \_|\_\
    \ Config Sync \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.resourceBundles.releases.variants
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Variant
JSON representation
Methods
Resource: Variant
Variant represents the content of a ResourceBundle variant.
JSON representation
{
"labels" : {
string : string ,
...
} ,
"resources" : [
string
] ,
"name" : string ,
"createTime" : string ,
"updateTime" : string
}
Fields
labels
map (key: string, value: string)
Optional. Labels to represent any metadata associated with the variant.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
resources[]
string
Required. Input only. Unordered list. Resources contain the Kubernetes manifests (YAMLs) for this variant.
name
string
Identifier. Name follows format of projects/{project}/locations/{location}/resourceBundles/{resourceBundle}/releases/{release}/variants/{variant}
createTime
string ( Timestamp format)
Output only. [Output only] Create time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. [Output only] Update time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Methods
create
Creates a new Variant in a given project, location, resource bundle, and release.
delete
Deletes a single Variant.
get
Gets details of a single Variant.
list
Lists Variants in a given project and location.
patch
Updates the parameters of a single Variant.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]
