---
title: "SubmitLeaderboardScoreResponse \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/SubmitLeaderboardScoreResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/SubmitLeaderboardScoreResponse
  title: "SubmitLeaderboardScoreResponse \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
SubmitLeaderboardScoreResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
PlayerScore
JSON representation
A list of leaderboard entry resources.
JSON representation
{
"kind" : string ,
"beatenScoreTimeSpans" : [
enum ( ScoreTimeSpan )
] ,
"unbeatenScores" : [
{
object ( PlayerScore )
}
] ,
"formattedScore" : string ,
"leaderboardId" : string ,
"scoreTag" : string
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreResponse .
beatenScoreTimeSpans[]
enum ( ScoreTimeSpan )
The time spans where the submitted score is better than the existing score for that time span.
unbeatenScores[]
object ( PlayerScore )
The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's DAILY score, but not better than the player's scores for the WEEKLY or ALL_TIME time spans.
formattedScore
string
The formatted value of the submitted score.
leaderboardId
string
The leaderboard ID that this score was submitted to.
scoreTag
string
Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
PlayerScore
A player score.
JSON representation
{
"kind" : string ,
"timeSpan" : enum ( ScoreTimeSpan ) ,
"score" : string ,
"formattedScore" : string ,
"scoreTag" : string
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#playerScore .
timeSpan
enum ( ScoreTimeSpan )
The time span for this player score.
score
string ( int64 format)
The numerical value for this player score.
formattedScore
string
The formatted score for this player score.
scoreTag
string
Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
