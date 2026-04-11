---
title: "DestinationConfig \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/DestinationConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/DestinationConfig
  title: "DestinationConfig \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
DestinationConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Destination
JSON representation
Define the Connectors target endpoint.
JSON representation
{
"key" : string ,
"destinations" : [
{
object ( Destination )
}
]
}
Fields
key
string
The key is the destination identifier that is supported by the Connector.
destinations[]
object ( Destination )
The destinations for the key.
Destination
JSON representation
{
"port" : integer ,
// Union field destination can be only one of the following:
"serviceAttachment" : string ,
"host" : string
// End of list of possible types for union field destination .
}
Fields
port
integer
The port is the target port number that is accepted by the destination.
Union field destination .
destination can be only one of the following:
serviceAttachment (deprecated)
string
This item is deprecated!
PSC service attachments. Format: projects/*/regions/*/serviceAttachments/*
host
string
For publicly routable host.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
