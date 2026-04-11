---
title: "LocalizedText \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/LocalizedText
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/LocalizedText
  title: "LocalizedText \_|\_ Routes API \_|\_ Google for Developers"
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
LocalizedText
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
LocalizedText provides localized strings in a specific language, represented by the text field.
It uses the BCP-47 standard for language codes in the languageCode field, enabling global language support.
The JSON representation combines the localized text and its language code for clear identification.
JSON representation
Localized variant of a text in a particular language.
JSON representation
{
"text" : string ,
"languageCode" : string
}
Fields
text
string
Localized string in the language corresponding to languageCode below.
languageCode
string
The text's BCP-47 language code, such as "en-US" or "sr-Latn".
For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The provided information describes a JSON structure for representing localized text. It includes two key fields: `text`, which holds the localized string, and `languageCode`, which uses a BCP-47 code (e.g., \"en-US\") to specify the language of the `text`. This schema allows for the storage and identification of a string in a particular language, referencing external information for further detail.\n"]]
