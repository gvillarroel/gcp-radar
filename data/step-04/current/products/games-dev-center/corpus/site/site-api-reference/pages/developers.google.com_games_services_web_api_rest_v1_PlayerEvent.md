---
title: "PlayerEvent \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/PlayerEvent
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/PlayerEvent
  title: "PlayerEvent \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
PlayerEvent
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An event status resource.
JSON representation
{
"kind" : string ,
"definitionId" : string ,
"playerId" : string ,
"numEvents" : string ,
"formattedNumEvents" : string
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#playerEvent .
definitionId
string
The ID of the event definition.
playerId
string
The ID of the player.
numEvents
string ( int64 format)
The current number of times this event has occurred.
formattedNumEvents
string
The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
