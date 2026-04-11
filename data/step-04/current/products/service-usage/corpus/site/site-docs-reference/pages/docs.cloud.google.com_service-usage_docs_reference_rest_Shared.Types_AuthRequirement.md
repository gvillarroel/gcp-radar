---
title: "AuthRequirement \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/AuthRequirement
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/AuthRequirement
  title: "AuthRequirement \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
AuthRequirement
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
User-defined authentication requirements, including support for JSON Web Token (JWT) .
JSON representation
{
"providerId" : string ,
"audiences" : string
}
Fields
providerId
string
id from authentication provider.
Example:
providerId: bookstore_auth
audiences
string
NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components.
The list of JWT audiences . that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience "https:// Service_name / API_name " will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
Example:
audiences: bookstore_android.apps.googleusercontent.com,
bookstore_web.apps.googleusercontent.com
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
