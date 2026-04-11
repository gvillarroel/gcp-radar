---
title: "Google Play Game Services \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/web/api/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/games/services/reference
source_metadata:
  url: https://developers.google.com/games/services/web/api/rest
  title: "Google Play Game Services \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
Google Play Game Services
Stay organized with collections
Save and categorize content based on your preferences.
The Google Play games service allows developers to enhance games with social leaderboards, achievements, game state, sign-in with Google, and more.
REST Resource: accesstokens
REST Resource: achievementDefinitions
REST Resource: achievements
REST Resource: applications
REST Resource: events
REST Resource: leaderboards
REST Resource: metagame
REST Resource: players
REST Resource: recall
REST Resource: revisions
REST Resource: scores
REST Resource: snapshots
REST Resource: stats
Service: games.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://games.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://games.googleapis.com
REST Resource: accesstokens
Methods
generatePlayGroupingApiToken
POST /games/v1/accesstokens/generatePlayGroupingApiToken
Generates a Play Grouping API token for the PGS user identified by the attached credential.
generateRecallPlayGroupingApiToken
POST /games/v1/accesstokens/generateRecallPlayGroupingApiToken
Generates a Play Grouping API token for the PGS user identified by the Recall session ID provided in the request.
REST Resource: achievementDefinitions
Methods
list
GET /games/v1/achievements
Lists all the achievement definitions for your application.
REST Resource: achievements
Methods
increment
POST /games/v1/achievements/{achievementId}/increment
Increments the steps of the achievement with the given ID for the currently authenticated player.
list
GET /games/v1/players/{playerId}/achievements
Lists the progress for all your application's achievements for the currently authenticated player.
reveal
POST /games/v1/achievements/{achievementId}/reveal
Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
setStepsAtLeast
POST /games/v1/achievements/{achievementId}/setStepsAtLeast
Sets the steps for the currently authenticated player towards unlocking an achievement.
unlock
POST /games/v1/achievements/{achievementId}/unlock
Unlocks this achievement for the currently authenticated player.
updateMultiple
POST /games/v1/achievements/updateMultiple
Updates multiple achievements for the currently authenticated player.
REST Resource: applications
Methods
get
GET /games/v1/applications/{applicationId}
Retrieves the metadata of the application with the given ID.
getEndPoint
POST /games/v1/applications/getEndPoint
Returns a URL for the requested end point type.
played
POST /games/v1/applications/played
Indicate that the currently authenticated user is playing your application.
verify
GET /games/v1/applications/{applicationId}/verify
Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
REST Resource: events
Methods
listByPlayer
GET /games/v1/events
Returns a list showing the current progress on events in this application for the currently authenticated user.
listDefinitions
GET /games/v1/eventDefinitions
Returns a list of the event definitions in this application.
record
POST /games/v1/events
Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
REST Resource: leaderboards
Methods
get
GET /games/v1/leaderboards/{leaderboardId}
Retrieves the metadata of the leaderboard with the given ID.
list
GET /games/v1/leaderboards
Lists all the leaderboard metadata for your application.
REST Resource: metagame
Methods
getMetagameConfig
GET /games/v1/metagameConfig
Return the metagame configuration data for the calling application.
listCategoriesByPlayer
GET /games/v1/players/{playerId}/categories/{collection}
List play data aggregated per category for the player corresponding to playerId .
REST Resource: players
Methods
get
GET /games/v1/players/{playerId}
Retrieves the Player resource with the given ID.
getMultipleApplicationPlayerIds
GET /games/v1/players/me/multipleApplicationPlayerIds
Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application.
getScopedPlayerIds
GET /games/v1/players/me/scopedIds
Retrieves scoped player identifiers for currently authenticated user.
list
GET /games/v1/players/me/players/{collection}
Get the collection of players for the currently authenticated user.
REST Resource: recall
Methods
gamesPlayerTokens
GET /games/v1/recall/gamesPlayerTokens/{sessionId}
Retrieve the Recall tokens from all requested games that is associated with the PGS Player encoded in the provided recall session id.
lastTokenFromAllDeveloperGames
GET /games/v1/recall/developerGamesLastPlayerToken/{sessionId}
Retrieve the last Recall token from all developer games that is associated with the PGS Player encoded in the provided recall session id.
linkPersona
POST /games/v1/recall:linkPersona
Associate the PGS Player principal encoded in the provided recall session id with an in-game account
resetPersona
POST /games/v1/recall:resetPersona
Delete all Recall tokens linking the given persona to any player (with or without a profile).
retrieveTokens
GET /games/v1/recall/tokens/{sessionId}
Retrieve all Recall tokens associated with the PGS Player encoded in the provided recall session id.
unlinkPersona
POST /games/v1/recall:unlinkPersona
Delete a Recall token linking the PGS Player principal identified by the Recall session and an in-game account identified either by the 'persona' or by the token value.
REST Resource: revisions
Methods
check
GET /games/v1/revisions/check
Checks whether the games client is out of date.
REST Resource: scores
Methods
get
GET /games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}
Get high scores, and optionally ranks, in leaderboards for the currently authenticated player.
list
GET /games/v1/leaderboards/{leaderboardId}/scores/{collection}
Lists the scores in a leaderboard, starting from the top.
listWindow
GET /games/v1/leaderboards/{leaderboardId}/window/{collection}
Lists the scores in a leaderboard around (and including) a player's score.
submit
POST /games/v1/leaderboards/{leaderboardId}/scores
Submits a score to the specified leaderboard.
submitMultiple
POST /games/v1/leaderboards/scores
Submits multiple scores to leaderboards.
REST Resource: snapshots
Methods
get
GET /games/v1/snapshots/{snapshotId}
Retrieves the metadata for a given snapshot ID.
list
GET /games/v1/players/{playerId}/snapshots
Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
REST Resource: stats
Methods
get
GET /games/v1/stats
Returns engagement and spend statistics in this application for the currently authenticated user.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
