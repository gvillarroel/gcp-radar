---
title: "Dictionary \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/Dictionary
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/Dictionary
  title: "Dictionary \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
Dictionary
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles.
Dictionary words are case-insensitive and all characters other than letters and digits in the unicode Basic Multilingual Plane will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer".
Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The limits page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using LargeCustomDictionaryConfig in the StoredInfoType API.
JSON representation
{
// Union field source can be only one of the following:
"wordList" : {
object ( WordList )
} ,
"cloudStoragePath" : {
object ( CloudStoragePath )
}
// End of list of possible types for union field source .
}
Fields
Union field source . The potential places the data can be read from. source can be only one of the following:
wordList
object ( WordList )
List of words or phrases to search for.
cloudStoragePath
object ( CloudStoragePath )
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
