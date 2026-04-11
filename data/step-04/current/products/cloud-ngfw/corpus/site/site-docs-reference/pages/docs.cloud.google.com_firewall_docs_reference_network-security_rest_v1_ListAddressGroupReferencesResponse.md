---
title: "ListAddressGroupReferencesResponse \_|\_ Cloud Next Generation Firewall \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListAddressGroupReferencesResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListAddressGroupReferencesResponse
  title: "ListAddressGroupReferencesResponse \_|\_ Cloud Next Generation Firewall\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Reference
Send feedback
ListAddressGroupReferencesResponse
Stay organized with collections
Save and categorize content based on your preferences.
Response of the ListAddressGroupReferences method.
JSON representation
{
"addressGroupReferences" : [
{
object ( AddressGroupReference )
}
] ,
"nextPageToken" : string
}
Fields
addressGroupReferences[]
object ( AddressGroupReference )
A list of references that matches the specified filter in the request.
nextPageToken
string
If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken .
AddressGroupReference
The Reference of AddressGroup.
JSON representation
{
"firewallPolicy" : string ,
"securityPolicy" : string ,
"rulePriority" : integer ,
"ruleType" : string
}
Fields
firewallPolicy
string
FirewallPolicy that is using the Address Group.
securityPolicy
string
Cloud Armor SecurityPolicy that is using the Address Group.
rulePriority
integer
Rule priority of the FirewallPolicy that is using the Address Group.
ruleType
string
Type of the rule (applies only to FIREWALL_POLICY references)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-24 UTC."],[],[]]
