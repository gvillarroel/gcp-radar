---
title: "Method: achievementDefinitions.list \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list
  title: "Method: achievementDefinitions.list \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
Method: achievementDefinitions.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
AchievementDefinition
JSON representation
AchievementType
InitialAchievementState
Try it!
Lists all the achievement definitions for your application.
HTTP request
GET https://games.googleapis.com/games/v1/achievements
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
Request body
The request body must be empty.
Response body
A list of achievement definition objects.
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"nextPageToken" : string ,
"items" : [
{
object ( AchievementDefinition )
}
]
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinitionsListResponse .
nextPageToken
string
Token corresponding to the next page of results.
items[]
object ( AchievementDefinition )
The achievement definitions.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/games
https://www.googleapis.com/auth/games_lite
For more information, see the OAuth 2.0 Overview .
AchievementDefinition
An achievement definition object.
JSON representation
{
"kind" : string ,
"id" : string ,
"name" : string ,
"description" : string ,
"achievementType" : enum ( AchievementType ) ,
"totalSteps" : integer ,
"formattedTotalSteps" : string ,
"revealedIconUrl" : string ,
"isRevealedIconUrlDefault" : boolean ,
"unlockedIconUrl" : string ,
"isUnlockedIconUrlDefault" : boolean ,
"initialState" : enum ( InitialAchievementState ) ,
"experiencePoints" : string
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinition .
id
string
The ID of the achievement.
name
string
The name of the achievement.
description
string
The description of the achievement.
achievementType
enum ( AchievementType )
The type of the achievement.
totalSteps
integer
The total steps for an incremental achievement.
formattedTotalSteps
string
The total steps for an incremental achievement as a string.
revealedIconUrl
string
The image URL for the revealed achievement icon.
isRevealedIconUrlDefault
boolean
Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
unlockedIconUrl
string
The image URL for the unlocked achievement icon.
isUnlockedIconUrlDefault
boolean
Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
initialState
enum ( InitialAchievementState )
The initial state of the achievement.
experiencePoints
string ( int64 format)
Experience points which will be earned when unlocking this achievement.
AchievementType
Possible achievement types.
Enums
STANDARD
Achievement is either locked or unlocked.
INCREMENTAL
Achievement is incremental.
InitialAchievementState
Possible initial states of an achievement.
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
