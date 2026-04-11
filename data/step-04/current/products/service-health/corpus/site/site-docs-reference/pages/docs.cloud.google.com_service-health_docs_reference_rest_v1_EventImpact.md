---
title: "EventImpact \_|\_ Personalized Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/EventImpact
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/EventImpact
  title: "EventImpact \_|\_ Personalized Service Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
EventImpact
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Product
JSON representation
Location
JSON representation
Represents the Google Cloud products and locations impacted by the event.
JSON representation
{
"product" : {
object ( Product )
} ,
"location" : {
object ( Location )
}
}
Fields
product
object ( Product )
Google Cloud product impacted by the event.
location
object ( Location )
Location impacted by the event.
Product
Represents the Google Cloud product impacted by the event.
JSON representation
{
"productName" : string ,
"id" : string
}
Fields
product Name
string
Google Cloud product impacted by the event. Example: "Google Cloud SQL"
id
string
Unique identifier for the product.
Location
Represents the locations impacted by the event.
JSON representation
{
"locationName" : string
}
Fields
location Name
string
Location impacted by the event. Example: "us-central1"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
