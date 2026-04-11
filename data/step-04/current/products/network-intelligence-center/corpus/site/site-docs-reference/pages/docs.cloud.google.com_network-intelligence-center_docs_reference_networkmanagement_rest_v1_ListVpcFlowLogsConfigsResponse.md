---
title: "ListVpcFlowLogsConfigsResponse \_|\_ Network Intelligence Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse
  title: "ListVpcFlowLogsConfigsResponse \_|\_ Network Intelligence Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Reference
Send feedback
ListVpcFlowLogsConfigsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response for the ListVpcFlowLogsConfigs method.
JSON representation
{
"vpcFlowLogsConfigs" : [
{
object ( VpcFlowLogsConfig )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
vpcFlowLogsConfigs[]
object ( VpcFlowLogsConfig )
List of VPC Flow Log configurations.
nextPageToken
string
Page token to fetch the next set of configurations.
unreachable[]
string
Locations that could not be reached (when querying all locations with - ).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
