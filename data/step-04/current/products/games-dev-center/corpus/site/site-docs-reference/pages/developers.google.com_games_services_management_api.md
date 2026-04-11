---
title: "API Reference \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/management/api
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/games/services/reference
source_metadata:
  url: https://developers.google.com/games/services/management/api
  title: "API Reference \_|\_ API reference \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Develop
API reference
API Reference
Stay organized with collections
Save and categorize content based on your preferences.
This API reference is organized by resource type. Each resource type has one or more data representations and one or more methods.
Resource types
Achievements
Applications
Events
Players
Rooms
Scores
TurnBasedMatches
Achievements
For Achievements Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
reset
POST /achievements/ achievementId /reset
Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
resetAll
POST /achievements/reset
Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
resetForAllPlayers
POST /achievements/ achievementId /resetForAllPlayers
Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
resetAllForAllPlayers
POST /achievements/resetAllForAllPlayers
Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
resetMultipleForAllPlayers
POST /achievements/resetMultipleForAllPlayers
Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
Applications
For Applications Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
listHidden
GET /applications/ applicationId /players/hidden
Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
Events
For Events Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
reset
POST /events/ eventId /reset
Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
resetAll
POST /events/reset
Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
resetForAllPlayers
POST /events/ eventId /resetForAllPlayers
Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
resetAllForAllPlayers
POST /events/resetAllForAllPlayers
Resets all draft events for all players. This method is only available to user accounts for your developer console.
resetMultipleForAllPlayers
POST /events/resetMultipleForAllPlayers
Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
Players
For Players Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
hide
POST /applications/ applicationId /players/hidden/ playerId
Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
unhide
DELETE /applications/ applicationId /players/hidden/ playerId
Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console and may take up to a day to take effect.
Rooms
For Rooms Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
reset
POST /rooms/reset
Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
resetForAllPlayers
POST /rooms/resetForAllPlayers
Deletes rooms where the only room participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.
Scores
For Scores Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
reset
POST /leaderboards/ leaderboardId /scores/reset
Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
resetForAllPlayers
POST /leaderboards/ leaderboardId /scores/resetForAllPlayers
Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
resetAll
POST /scores/reset
Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
resetAllForAllPlayers
POST /scores/resetAllForAllPlayers
Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
resetMultipleForAllPlayers
POST /scores/resetMultipleForAllPlayers
Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
TurnBasedMatches
For TurnBasedMatches Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1management, unless otherwise noted
reset
POST /turnbasedmatches/reset
Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.
resetForAllPlayers
POST /turnbasedmatches/resetForAllPlayers
Deletes turn-based matches where the only match participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
