---
title: "Method: services.tenancyUnits.addProject \_|\_ Service Infrastructure \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject
  title: "Method: services.tenancyUnits.addProject \_|\_ Service Infrastructure \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Reference
Send feedback
Method: services.tenancyUnits.addProject
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
Try it!
Add a new tenant project to the tenancy unit. There can be a maximum of 512 tenant projects in a tenancy unit. If there are previously failed tenancyUnits.addProject calls, you might need to call tenancyUnits.removeProject first to resolve them before you can make another call to tenancyUnits.addProject with the same tag. Operation<response: Empty>.
HTTP request
POST https://serviceconsumermanagement.googleapis.com/v1/{parent=services/*/*/*/tenancyUnits/*}:addProject
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
Authorization requires the following Google IAM permission on the specified resource parent :
serviceconsumermanagement.tenancyu.addResource
Request body
The request body contains data with the following structure:
JSON representation
{
"tag" : string ,
"projectConfig" : {
object ( TenantProjectConfig )
}
}
Fields
tag
string
Tag of the added project. Must be less than 128 characters. Required.
projectConfig
object ( TenantProjectConfig )
Configuration of the new tenant project to be added to tenancy unit resources.
Response body
If successful, the response body contains an instance of Operation .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Try it!
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
