---
title: "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/php-gen2/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic
  title: "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
Method: apps.services.versions.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:
Standard environment
instanceClass
automatic scaling in the standard environment:
automaticScaling.min_idle_instances
automaticScaling.max_idle_instances
automaticScaling.standard_scheduler_settings.max_instances
automaticScaling.standard_scheduler_settings.min_instances
automaticScaling.standard_scheduler_settings.target_cpu_utilization
automaticScaling.standard_scheduler_settings.target_throughput_utilization
basic scaling or manual scaling in the standard environment:
servingStatus
manualScaling.instances
Flexible environment
servingStatus
automatic scaling in the flexible environment:
automaticScaling.min_total_instances
automaticScaling.max_total_instances
automaticScaling.cool_down_period_sec
automaticScaling.cpu_utilization.target_utilization
manual scaling in the flexible environment:
manualScaling.instances
HTTP request
PATCH https://appengine.googleapis.com/v1/{name=apps/*/services/*/versions/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the resource to update. Example: apps/myapp/services/default/versions/1 .
Authorization requires the following IAM permission on the specified resource name :
appengine.versions.update
Query parameters
Parameters
updateMask
string ( FieldMask format)
Standard field mask for the set of fields to be updated.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of Version .
Response body
If successful, the response body contains an instance of Operation .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
