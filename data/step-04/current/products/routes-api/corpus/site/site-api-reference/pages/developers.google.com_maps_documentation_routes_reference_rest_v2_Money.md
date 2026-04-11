---
title: "Money \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/Money
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/Money
  title: "Money \_|\_ Routes API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Routes API
Reference
Send feedback
Money
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
JSON is used to represent monetary amounts with their currency type.
The representation includes the currency code (ISO 4217), whole units, and nano units for precision.
units and nanos must adhere to specific rules based on their values to ensure accurate representation.
The currencyCode follows the ISO 4217 standard using a three-letter code.
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
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core content defines a JSON structure for representing monetary amounts. It includes three fields: `currencyCode` (a string for the three-letter currency code), `units` (a string representing whole units of the currency), and `nanos` (an integer for the fractional nano-units). The `nanos` value must adhere to constraints based on the sign of `units` and is used for precision in amounts. The amount value is based on those three elements.\n"]]
