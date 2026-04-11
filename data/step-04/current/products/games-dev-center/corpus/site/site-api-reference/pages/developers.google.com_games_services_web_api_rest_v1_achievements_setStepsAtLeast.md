---
title: "Method: achievements.setStepsAtLeast \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/achievements/setStepsAtLeast
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/achievements/setStepsAtLeast
  title: "Method: achievements.setStepsAtLeast \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
Method: achievements.setStepsAtLeast
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
HTTP request
POST https://games.googleapis.com/games/v1/achievements/{achievementId}/setStepsAtLeast
Path parameters
Parameters
achievementId
string
The ID of the achievement used by this method.
Query parameters
Parameters
steps
integer
Required. The minimum value to set the steps to.
Request body
The request body must be empty.
Response body
An achievement set steps at least response.
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"currentSteps" : integer ,
"newlyUnlocked" : boolean
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#achievementSetStepsAtLeastResponse .
currentSteps
integer
The current steps recorded for this incremental achievement.
newlyUnlocked
boolean
Whether the current steps for the achievement has reached the number of steps required to unlock.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/games
https://www.googleapis.com/auth/games_lite
For more information, see the OAuth 2.0 Overview .
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
