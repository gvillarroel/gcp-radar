---
title: "Address Validation API coverage details \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/coverage
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/coverage
  title: "Address Validation API coverage details \_|\_ Google for Developers"
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
Address Validation API
Resources
Send feedback
Address Validation API coverage details
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Maps Platform's Address Validation API provides international address validation coverage for a wide range of countries, as detailed in the table.
While the API is generally available for most listed countries, India is currently in preview (pre-GA) and may have limited support and potential for changes.
For countries in preview, using the google.type.PostalAddress.region_code in API requests is strongly recommended to enhance performance.
The API's residential and commercial address metadata properties are only populated for specific countries, as indicated in the table with a black circle symbol (⬤).
Address Validation API support is not extended to dependent territories with unique CLDR codes, except for those explicitly mentioned in the coverage list.
The Google Maps Platform team is constantly working to improve international
coverage for our API services. The following list shows the latest coverage
details, on a country-by-country basis, for the Address Validation API. Data quality
can vary by country.
Note: The API only populates the response with the residential and
commercial
AddressMetadata
properties for the countries called out in the table.
Note: Countries marked by
science are in preview (pre-GA). For those
countries, we strongly recommend you include the
google.type.PostalAddress.region_code
in the API request to improve performance. In addition, pre-GA products and
features might have limited support, and changes to pre-GA products and
features are not guaranteed to be compatible from version to version. Pre-GA
Offerings are covered by the
Google Maps Platform Service Specific Terms .
For more information, see the launch stage descriptions .
Region code
Country/Region
Address Validation API
Response Address Metadata:
AR
Argentina
⬤
⬤
AT
Austria
⬤
⬤
AU
Australia
⬤
⬤
BE
Belgium
⬤
⬤
BG
Bulgaria
⬤
⬤
BR
Brazil
⬤
⬤
CA
Canada
⬤
⬤
CH
Switzerland
⬤
⬤
CL
Chile
⬤
⬤
CO
Colombia
⬤
—
CZ
Czechia
⬤
⬤
DE
Germany
⬤
⬤
DK
Denmark
⬤
⬤
EE
Estonia
⬤
⬤
ES
Spain
⬤
⬤
FI
Finland
⬤
⬤
FR
France
⬤
⬤
GB
United Kingdom
⬤
⬤
HR
Croatia
⬤
⬤
HU
Hungary
⬤
⬤
IE
Ireland
⬤
⬤
IN science
India science
⬤
⬤
IT
Italy
⬤
—
JP science
Japan science
⬤
⬤
LT
Lithuania
⬤
⬤
LU
Luxembourg
⬤
⬤
LV
Latvia
⬤
⬤
MX
Mexico
⬤
⬤
MY
Malaysia
⬤
⬤
NL
Netherlands
⬤
⬤
NO
Norway
⬤
⬤
NZ
New Zealand
⬤
⬤
PL
Poland
⬤
⬤
PR
Puerto Rico
⬤
⬤
PT
Portugal
⬤
⬤
SE
Sweden
⬤
⬤
SG
Singapore
⬤
—
SI
Slovenia
⬤
⬤
SK
Slovakia
⬤
⬤
US
United States
⬤
⬤
Unless listed above, the Address Validation API does not support dependent
territories that have their own CLDR code, such as US Virgin
Islands (VI). For details, see the
Unicode CLDR chart .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
