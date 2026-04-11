---
title: "Method: achievements.reveal \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/achievements/reveal
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/achievements/reveal
  title: "Method: achievements.reveal \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
Method: achievements.reveal
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
RevealAchievementState
Try it!
Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
HTTP request
POST https://games.googleapis.com/games/v1/achievements/{achievementId}/reveal
Path parameters
Parameters
achievementId
string
The ID of the achievement used by this method.
Request body
The request body must be empty.
Response body
An achievement reveal response
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"currentState" : enum ( RevealAchievementState )
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#achievementRevealResponse .
currentState
enum ( RevealAchievementState )
The current state of the achievement for which a reveal was attempted. This might be UNLOCKED if the achievement was already unlocked.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/games
https://www.googleapis.com/auth/games_lite
For more information, see the OAuth 2.0 Overview .
RevealAchievementState
Possible reveal achievement states.
Enums
REVEALED
Achievement is revealed.
UNLOCKED
Achievement is unlocked.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
