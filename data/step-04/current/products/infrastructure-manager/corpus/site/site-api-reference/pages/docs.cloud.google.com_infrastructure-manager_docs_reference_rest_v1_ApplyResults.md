---
title: "ApplyResults \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/ApplyResults
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/ApplyResults
  title: "ApplyResults \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
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
ApplyResults
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TerraformOutput
JSON representation
Outputs and artifacts from applying a deployment.
JSON representation
{
"content" : string ,
"artifacts" : string ,
"outputs" : {
string : {
object ( TerraformOutput )
} ,
...
}
}
Fields
content
string
Location of a blueprint copy and other manifests in Google Cloud Storage. Format: gs://{bucket}/{object}
artifacts
string
Location of artifacts (e.g. logs) in Google Cloud Storage. Format: gs://{bucket}/{object}
outputs
map (key: string, value: object ( TerraformOutput ))
Map of output name to output info.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
TerraformOutput
Describes a Terraform output.
JSON representation
{
"sensitive" : boolean ,
"value" : value
}
Fields
sensitive
boolean
Identifies whether Terraform has set this output as a potential sensitive value.
value
value ( Value format)
Value of output.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
