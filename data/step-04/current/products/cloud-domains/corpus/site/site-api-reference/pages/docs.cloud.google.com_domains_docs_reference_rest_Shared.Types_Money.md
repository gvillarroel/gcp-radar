---
title: "Money \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/reference/rest/Shared.Types/Money
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/reference/rest/Shared.Types/Money
  title: "Money \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Reference
Send feedback
Money
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Represents an amount of money with its currency type.
JSON representation
{
"currencyCode" : string ,
"units" : string ,
"nanos" : integer
}
Fields
currencyCode
string
The three-letter currency code defined in ISO 4217.
units
string ( int64 format)
The whole units of the amount. For example if currencyCode is "USD" , then 1 unit is one US dollar.
nanos
integer
Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If units is positive, nanos must be positive or zero. If units is zero, nanos can be positive, zero, or negative. If units is negative, nanos must be negative or zero. For example $-1.75 is represented as units =-1 and nanos =-750,000,000.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
