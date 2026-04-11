---
title: "ListLeaderboardScoresResponse \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest/v1/ListLeaderboardScoresResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/games/services/web/api/rest
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest/v1/ListLeaderboardScoresResponse
  title: "ListLeaderboardScoresResponse \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
ListLeaderboardScoresResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
LeaderboardEntry
JSON representation
A ListScores response.
JSON representation
{
"kind" : string ,
"nextPageToken" : string ,
"prevPageToken" : string ,
"numScores" : string ,
"playerScore" : {
object ( LeaderboardEntry )
} ,
"items" : [
{
object ( LeaderboardEntry )
}
]
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScores .
nextPageToken
string
The pagination token for the next page of results.
prevPageToken
string
The pagination token for the previous page of results.
numScores
string ( int64 format)
The total number of scores in the leaderboard.
playerScore
object ( LeaderboardEntry )
The score of the requesting player on the leaderboard. The player's score may appear both here and in the list of scores above. If you are viewing a public leaderboard and the player is not sharing their gameplay information publicly, the scoreRank and formattedScoreRank values will not be present.
items[]
object ( LeaderboardEntry )
The scores in the leaderboard.
LeaderboardEntry
The Leaderboard Entry resource.
JSON representation
{
"kind" : string ,
"player" : {
object ( Player )
} ,
"scoreRank" : string ,
"formattedScoreRank" : string ,
"scoreValue" : string ,
"formattedScore" : string ,
"timeSpan" : enum ( ScoreTimeSpan ) ,
"writeTimestampMillis" : string ,
"scoreTag" : string
}
Fields
kind
string
Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardEntry .
player
object ( Player )
The player who holds this score.
scoreRank
string ( int64 format)
The rank of this score for this leaderboard.
formattedScoreRank
string
The localized string for the rank of this score for this leaderboard.
scoreValue
string ( int64 format)
The numerical value of this score.
formattedScore
string
The localized string for the numerical value of this score.
timeSpan
enum ( ScoreTimeSpan )
The time span of this high score.
writeTimestampMillis
string ( int64 format)
The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
scoreTag
string
Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
