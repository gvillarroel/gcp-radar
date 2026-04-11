---
title: "REST Resource: projects.locations.gatewaySecurityPolicies.rules \_|\_ Secure\
  \ Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies.rules
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest/v1/projects.locations.gatewaySecurityPolicies.rules
  title: "REST Resource: projects.locations.gatewaySecurityPolicies.rules \_|\_ Secure\
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
REST Resource: projects.locations.gatewaySecurityPolicies.rules
Stay organized with collections
Save and categorize content based on your preferences.
Resource: GatewaySecurityPolicyRule
JSON representation
BasicProfile
Methods
Resource: GatewaySecurityPolicyRule
The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"enabled" : boolean ,
"priority" : integer ,
"description" : string ,
"sessionMatcher" : string ,
"applicationMatcher" : string ,
"tlsInspectionEnabled" : boolean ,
// Union field profile can be only one of the following:
"basicProfile" : enum ( BasicProfile )
// End of list of possible types for union field profile .
}
Fields
name
string
Required. Immutable. Name of the resource. name is the full resource name;
so, the projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}/rules/{rule}
rule must match this pattern: ^[a-z0-9-]+$ .
createTime
string ( Timestamp format)
Output only. Time when the rule was created.
A timestamp in the RFC3339
UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
For example, "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. Time when the rule was updated.
A timestamp in the RFC3339
UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
For example, "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
enabled
boolean
Required. Indicates whether the rule is enforced.
priority
integer
Required. Priority of the rule. Lower number corresponds to a higher precedence.
description
string
Optional. Free-text description of the resource.
sessionMatcher
string
Required. CEL expression for matching on session criteria.
applicationMatcher
string
Optional. CEL expression for matching on L7/application-level criteria.
tlsInspectionEnabled
boolean
Optional. Flag to enable TLS inspection of traffic matching on `sessionMatcher`.
It can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.
Union field profile .
profile can be only one of the following:
basicProfile
enum ( BasicProfile )
Required. Profile that indicates the primitive action to take on the matched traffic.
BasicProfile
enum to define the primitive action.
Enums
BASIC_PROFILE_UNSPECIFIED
If there is not a mentioned action for the target.
ALLOW
Allows the matched traffic.
DENY
Denies the matched traffic.
Methods
create
Creates a new GatewaySecurityPolicy in a given project and location.
delete
Deletes a single GatewaySecurityPolicyRule.
get
Retrieves the details of a single GatewaySecurityPolicyRule.
list
Lists GatewaySecurityPolicyRules in a given project and location.
patch
Updates the parameters of a single GatewaySecurityPolicyRule.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
