---
title: "Method: achievements.list \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/achievements/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/achievements/list
  title: "Method: achievements.list \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
Method: achievements.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
State
PlayerAchievement
JSON representation
State
Try it!
Lists the progress for all your application's achievements for the currently authenticated player.
HTTP request
GET https://games.googleapis.com/games/v1/players/{playerId}/achievements
Path parameters
Parameters
playerId
string
A player ID. A value of me may be used in place of the authenticated player's ID.
Query parameters
Parameters
language
string
The preferred language to use for strings returned by this method.
maxResults
integer
The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults .
pageToken
string
The token returned by the previous request.
state
enum ( State )
Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
Request body
The request body must be empty.
Response body
A list of achievement objects.
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"nextPageToken" : string ,
"items" : [
{
object ( PlayerAchievement )
}
]
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievementListResponse .
nextPageToken
string
Token corresponding to the next page of results.
items[]
object ( PlayerAchievement )
The achievements.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/games
https://www.googleapis.com/auth/games_lite
For more information, see the OAuth 2.0 Overview .
State
Enums
ALL
List all achievements. This is the default.
HIDDEN
List only hidden achievements.
REVEALED
List only revealed achievements.
UNLOCKED
List only unlocked achievements.
PlayerAchievement
An achievement object.
JSON representation
{
"kind" : string ,
"id" : string ,
"currentSteps" : integer ,
"formattedCurrentStepsString" : string ,
"achievementState" : enum ( State ) ,
"lastUpdatedTimestamp" : string ,
"experiencePoints" : string
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievement .
id
string
The ID of the achievement.
currentSteps
integer
The current steps for an incremental achievement.
formattedCurrentStepsString
string
The current steps for an incremental achievement as a string.
achievementState
enum ( State )
The state of the achievement.
lastUpdatedTimestamp
string ( int64 format)
The timestamp of the last modification to this achievement's state.
experiencePoints
string ( int64 format)
Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
State
Defines possible states of an achievement.
Enums
HIDDEN
Achievement is hidden.
REVEALED
Achievement is revealed.
UNLOCKED
Achievement is unlocked.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
