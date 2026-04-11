---
title: "API Reference \_|\_ API reference \_|\_ Android Developers"
url: https://developers.google.com/games/services/publishing/api
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/games/services/reference
source_metadata:
  url: https://developers.google.com/games/services/publishing/api
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
AchievementConfigurations
ImageConfigurations
LeaderboardConfigurations
AchievementConfigurations
For AchievementConfigurations Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1configuration, unless otherwise noted
delete
DELETE /achievements/ achievementId
Delete the achievement configuration with the given ID.
get
GET /achievements/ achievementId
Retrieves the metadata of the achievement configuration with the given ID.
insert
POST /applications/ applicationId /achievements
Insert a new achievement configuration in this application.
list
GET /applications/ applicationId /achievements
Returns a list of the achievement configurations in this application.
update
PUT /achievements/ achievementId
Update the metadata of the achievement configuration with the given ID.
ImageConfigurations
For ImageConfigurations Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1configuration, unless otherwise noted
upload
POST https://www.googleapis.com/upload/games/v1configuration/images/ resourceId /imageType/ imageType
Deprecated: This API is deprecated and is being removed, so you shouldn't use it.
Attempting to use this API causes errors.
Uploads an image for a resource with the given ID and image type.
LeaderboardConfigurations
For LeaderboardConfigurations Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/games/v1configuration, unless otherwise noted
delete
DELETE /leaderboards/ leaderboardId
Delete the leaderboard configuration with the given ID.
get
GET /leaderboards/ leaderboardId
Retrieves the metadata of the leaderboard configuration with the given ID.
insert
POST /applications/ applicationId /leaderboards
Insert a new leaderboard configuration in this application.
list
GET /applications/ applicationId /leaderboards
Returns a list of the leaderboard configurations in this application.
update
PUT /leaderboards/ leaderboardId
Update the metadata of the leaderboard configuration with the given ID.
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2024-10-28 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]
