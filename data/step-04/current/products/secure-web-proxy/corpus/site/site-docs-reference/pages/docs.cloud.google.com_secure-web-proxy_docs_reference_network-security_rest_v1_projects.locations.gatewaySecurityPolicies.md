---
title: "REST Resource: projects.locations.gatewaySecurityPolicies \_|\_ Secure Web\
  \ Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies
  title: "REST Resource: projects.locations.gatewaySecurityPolicies \_|\_ Secure Web\
    \ Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Reference
Send feedback
REST Resource: projects.locations.gatewaySecurityPolicies
Stay organized with collections
Save and categorize content based on your preferences.
Resource: GatewaySecurityPolicy
JSON representation
Methods
Resource: GatewaySecurityPolicy
The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"description" : string ,
"tlsInspectionPolicy" : string
}
Fields
name
string
Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^ a-z ?$).
createTime
string ( Timestamp format)
Output only. The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
description
string
Optional. Free-text description of the resource.
tlsInspectionPolicy
string
Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it.
Methods
create
Creates a new GatewaySecurityPolicy in a given project and location.
delete
Deletes a single GatewaySecurityPolicy.
get
Gets details of a single GatewaySecurityPolicy.
list
Lists GatewaySecurityPolicies in a given project and location.
patch
Updates the parameters of a single GatewaySecurityPolicy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
