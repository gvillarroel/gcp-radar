---
title: "Method: projects.locations.gatewaySecurityPolicies.rules.create \_|\_ Secure\
  \ Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies.rules/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies.rules/create
  title: "Method: projects.locations.gatewaySecurityPolicies.rules.create \_|\_ Secure\
    \ Web Proxy \_|\_ Google Cloud Documentation"
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
Method: projects.locations.gatewaySecurityPolicies.rules.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Creates a new GatewaySecurityPolicy in a given project and location.
HTTP request
POST https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/*
Authorization requires the following IAM permission on the specified resource parent :
networksecurity.gatewaySecurityPolicyRules.create
Query parameters
Parameters
gatewaySecurityPolicyRuleId
string
The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/.
Request body
The request body contains an instance of GatewaySecurityPolicyRule .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
