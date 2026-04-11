---
title: "Method: accesstokens.generatePlayGroupingApiToken \_|\_ API reference \_|\_\
  \ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken
  title: "Method: accesstokens.generatePlayGroupingApiToken \_|\_ API reference \_\
    |\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
Method: accesstokens.generatePlayGroupingApiToken
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Generates a Play Grouping API token for the PGS user identified by the attached credential.
HTTP request
POST https://games.googleapis.com/games/v1/accesstokens/generatePlayGroupingApiToken
Query parameters
Parameters
packageName
string
Required. App package name to generate the token for (e.g. com.example.mygame).
persona
string
Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system.
Request body
The request body must be empty.
Response body
Response for the accesstokens.generatePlayGroupingApiToken RPC.
If successful, the response body contains data with the following structure:
JSON representation
{
"token" : {
object ( PlayGroupingApiToken )
}
}
Fields
token
object ( PlayGroupingApiToken )
Token for accessing the Play Grouping API.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/games
https://www.googleapis.com/auth/games_lite
For more information, see the OAuth 2.0 Overview .
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
