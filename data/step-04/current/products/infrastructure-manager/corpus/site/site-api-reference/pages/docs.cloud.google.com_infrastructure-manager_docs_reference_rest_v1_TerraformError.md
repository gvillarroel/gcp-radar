---
title: "TerraformError \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError
  title: "TerraformError \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Infrastructure Manager
Reference
Send feedback
TerraformError
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Errors encountered during actuation using Terraform
JSON representation
{
"resourceAddress" : string ,
"httpResponseCode" : integer ,
"errorDescription" : string ,
"error" : {
object ( Status )
}
}
Fields
resourceAddress
string
Address of the resource associated with the error, e.g. google_compute_network.vpc_network .
httpResponseCode
integer
HTTP response code returned from Google Cloud Platform APIs when Terraform fails to provision the resource. If unset or 0, no HTTP response code was returned by Terraform.
errorDescription
string
A human-readable error description.
error
object ( Status )
Output only. Original error response from underlying Google API, if available.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
