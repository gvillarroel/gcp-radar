---
title: "RestrictAllowedResourcesRequest \_|\_ Assured Workloads \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/RestrictAllowedResourcesRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/RestrictAllowedResourcesRequest
  title: "RestrictAllowedResourcesRequest \_|\_ Assured Workloads \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Reference
Send feedback
RestrictAllowedResourcesRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request for restricting list of available resources in Workload environment.
JSON representation
{
"name" : string ,
"restrictionType" : enum ( RestrictionType )
}
Fields
name
string
Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{locationId}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
restrictionType
enum ( RestrictionType )
Required. The type of restriction for using gcp products in the Workload environment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
