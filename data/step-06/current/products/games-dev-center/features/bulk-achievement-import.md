---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.765Z"
product_name: "Games Dev Center"
product_slug: "games-dev-center"
feature_name: "Bulk achievement import"
feature_slug: "bulk-achievement-import"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list"
  - "https://developers.google.com/games/services/web/api/rest"
  - "https://developers.google.com/games/services/web/api/rest/v1/achievements/list"
  - "https://developers.google.com/games/services/web/api/rest/v1/achievements"
keywords:
  - "bulk"
  - "achievement"
  - "import"
  - "you"
  - "can"
  - "multiple"
  - "achievements"
  - "definitions"
---

# Bulk achievement import

Product: Games Dev Center
Coverage: MEDIUM

## Step 02 Summary

You can import multiple achievements' definitions and metadata in a single step.

## Extended Definition

You can import multiple achievements' definitions and metadata in a single step.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list](https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list)
- [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest)
- [https://developers.google.com/games/services/web/api/rest/v1/achievements/list](https://developers.google.com/games/services/web/api/rest/v1/achievements/list)
- [https://developers.google.com/games/services/web/api/rest/v1/achievements](https://developers.google.com/games/services/web/api/rest/v1/achievements)

## Supporting Pages

### Method: achievementDefinitions.list \_|\_ API reference \_|\_ Android Developers

- URL: [https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list](https://developers.google.com/games/services/web/api/rest/v1/achievementDefinitions/list)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Android Developers Develop API reference Method: achievementDefinitions.list Stay organized with collections Save and categorize content based on your preferences.
- Lists all the achievement definitions for your application.
- Value is always the fixed string games#achievementDefinition . id string The ID of the achievement. name string The name of the achievement. description string The description of the achievement. achievementType enum ( AchievementType ) The type of the achievement. totalSteps integer The total steps for an incremental achievement. formattedTotalSteps string The total steps for an incremental achievement as a string. revealedIconUrl string The image URL for the revealed achievement icon. isRevealedIconUrlDefault boolean Indicates whether the revealed icon image being returned is a default image, or is provided by the game. unlockedIconUrl string The image URL for the unlocked achievement icon. isUnlockedIconUrlDefault boolean Indicates whether the unlocked icon image being returned is a default image, or is game-provided. initialState enum ( InitialAchievementState ) The initial state of the achievement. experiencePoints string ( int64 format) Experience points which will be earned when unlocking this achievement.
- JSON representation { "kind" : string , "id" : string , "name" : string , "description" : string , "achievementType" : enum ( AchievementType ) , "totalSteps" : integer , "formattedTotalSteps" : string , "revealedIconUrl" : string , "isRevealedIconUrlDefault" : boolean , "unlockedIconUrl" : string , "isUnlockedIconUrlDefault" : boolean , "initialState" : enum ( InitialAchievementState ) , "experiencePoints" : string } Fields kind string Uniquely identifies the type of this resource.

### Google Play Game Services \_|\_ API reference \_|\_ Android Developers

- URL: [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: achievements Methods increment POST /games/v1/achievements/{achievementId}/increment Increments the steps of the achievement with the given ID for the currently authenticated player. list GET /games/v1/players/{playerId}/achievements Lists the progress for all your application's achievements for the currently authenticated player. reveal POST /games/v1/achievements/{achievementId}/reveal Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player. setStepsAtLeast POST /games/v1/achievements/{achievementId}/setStepsAtLeast Sets the steps for the currently authenticated player towards unlocking an achievement. unlock POST /games/v1/achievements/{achievementId}/unlock Unlocks this achievement for the currently authenticated player. updateMultiple POST /games/v1/achievements/updateMultiple Updates multiple achievements for the currently authenticated player.
- REST Resource: accesstokens REST Resource: achievementDefinitions REST Resource: achievements REST Resource: applications REST Resource: events REST Resource: leaderboards REST Resource: metagame REST Resource: players REST Resource: recall REST Resource: revisions REST Resource: scores REST Resource: snapshots REST Resource: stats Service: games.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: achievementDefinitions Methods list GET /games/v1/achievements Lists all the achievement definitions for your application.
- The Google Play games service allows developers to enhance games with social leaderboards, achievements, game state, sign-in with Google, and more.

### Method: achievements.list \_|\_ API reference \_|\_ Android Developers

- URL: [https://developers.google.com/games/services/web/api/rest/v1/achievements/list](https://developers.google.com/games/services/web/api/rest/v1/achievements/list)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Android Developers Develop API reference Method: achievements.list Stay organized with collections Save and categorize content based on your preferences.
- Lists the progress for all your application's achievements for the currently authenticated player.
- Value is always the fixed string games#playerAchievement . id string The ID of the achievement. currentSteps integer The current steps for an incremental achievement. formattedCurrentStepsString string The current steps for an incremental achievement as a string. achievementState enum ( State ) The state of the achievement. lastUpdatedTimestamp string ( int64 format) The timestamp of the last modification to this achievement's state. experiencePoints string ( int64 format) Experience points earned for the achievement.
- JSON representation { "kind" : string , "id" : string , "currentSteps" : integer , "formattedCurrentStepsString" : string , "achievementState" : enum ( State ) , "lastUpdatedTimestamp" : string , "experiencePoints" : string } Fields kind string Uniquely identifies the type of this resource.

### REST Resource: achievements \_|\_ API reference \_|\_ Android Developers

- URL: [https://developers.google.com/games/services/web/api/rest/v1/achievements](https://developers.google.com/games/services/web/api/rest/v1/achievements)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods increment Increments the steps of the achievement with the given ID for the currently authenticated player. list Lists the progress for all your application's achievements for the currently authenticated player. reveal Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player. setStepsAtLeast Sets the steps for the currently authenticated player towards unlocking an achievement. unlock Unlocks this achievement for the currently authenticated player. updateMultiple Updates multiple achievements for the currently authenticated player.
- Android Developers Develop API reference REST Resource: achievements Stay organized with collections Save and categorize content based on your preferences.

