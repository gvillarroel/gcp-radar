---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.763Z"
product_name: "Games Dev Center"
product_slug: "games-dev-center"
feature_name: "Recall API"
feature_slug: "recall-api"
latest_feature_date: "2026-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken"
  - "https://developers.google.com/games/services/cpp/api"
  - "https://developers.google.com/games/services/web/api/rest"
  - "https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken"
keywords:
  - "recall"
  - "api"
  - "play"
  - "games"
  - "services"
  - "v2"
  - "adds"
  - "for"
---

# Recall API

Product: Games Dev Center
Coverage: MEDIUM

## Step 02 Summary

Play Games Services v2 adds support for the Recall API; Google Play Games plugin for Unity v2.0.0 adds support for the Recall API.

## Extended Definition

Play Games Services v2 adds support for the Recall API; Google Play Games plugin for Unity v2.0.0 adds support for the Recall API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken)
- [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api)
- [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest)
- [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken)

## Supporting Pages

### "Method: accesstokens.generateRecallPlayGroupingApiToken \_|\_ API reference\

- URL: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request POST https://games.googleapis.com/games/v1/accesstokens/generateRecallPlayGroupingApiToken Query parameters Parameters packageName string Required.
- Generates a Play Grouping API token for the PGS user identified by the Recall session ID provided in the request.
- Response body Response for the accesstokens.generateRecallPlayGroupingApiToken RPC.
- If successful, the response body contains data with the following structure: JSON representation { "token" : { object ( PlayGroupingApiToken ) } } Fields token object ( PlayGroupingApiToken ) Token for accessing the Play Grouping API.

### Google Play Games C++ API Reference \_|\_ API reference \_|\_ Android Developers

- URL: [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Classes gpg::Achievement A single data structure which allows you to access data about the status of a specific achievement. gpg::AchievementManager Gets and sets various achievement-related data. gpg::AndroidPlatformConfiguration The platform configuration used when creating an instance of the GameServices class on Android. gpg::CaptureOverlayStateListenerHelper Defines a helper which can be used to provide ICaptureOverlayStateListener callbacks to the SDK without defining the full ICaptureOverlayStateListener interface. gpg::EndpointDiscoveryListenerHelper Defines a helper which can be used to provide IEndpointDiscoveryListener callbacks to the SDK without defining the full IEndpointDiscoveryListener interface. gpg::Event A single data structure containing data about the status of a specific event. gpg::EventManager Gets and sets various event-related data. gpg::GameServices The starting point for interacting with Google Play Games. gpg::GameServices::Builder Used for creating and configuring an instance of the GameServices class. gpg::ICaptureOverlayStateListener Defines an interface that can deliver events relating to changes in video capture state. gpg::ICrossAppEndpointDiscoveryListener Defines an interface which can be delivered events relating to cross-app remote endpoint discovery. gpg::IEndpointDiscoveryListener Defines an interface which can be delivered events relating to remote endpoint discovery. gpg::IMessageListener Defines an interface which can be delivered messages from remote endpoints. gpg::IRealTimeEventListener Defines an interface that can deliver events relating to real-time multiplayer. gpg::Leaderboard A single data structure allowing you to access data about the status of a specific leaderboard, such as its name and validity. gpg::LeaderboardManager Gets and sets various leaderboard-related data. gpg::MessageListenerHelper Defines a helper which can be used to provide IMessageListener callbacks to the SDK without defining the full IMessageListener interface. gpg::MultiplayerInvitation A data structure containing data about the current state of an invitation to a turn-based match. gpg::MultiplayerParticipant A data structure containing data about a participant in a multiplayer match. gpg::NearbyConnections An API used for creating connections and communicating between apps on the same local network. gpg::NearbyConnections::Builder Builder class used to construct NearbyConnections objects. gpg::ParticipantResults A data structure containing data about the per-participant results for a TurnBasedMatch . gpg::Player A data structure that allows you to access data about a specific player. gpg::PlayerLevel A single data structure containing data about player's level. gpg::PlayerManager Gets and sets various player-related data. gpg::PlayerStats A data structure that allows you to access data about a specific player. gpg::RealTimeEventListenerHelper Defines a helper which can be used to provide IRealTimeEventListener callbacks to the SDK without defining the full IRealTimeEventListener interface. gpg::RealTimeMultiplayerManager Fetches, modifies, handles messaging for, and creates RealTimeRoom objects. gpg::RealTimeRoom A data structure containing the current state of a real-time multiplayer room. gpg::RealTimeRoomConfig A data structure containing the data needed to create a RealTimeRoom object. gpg::RealTimeRoomConfig::Builder Builds one or more RealTimeRoomConfig objects. gpg::Score Single data structure which allows you to access data about a player's score. gpg::ScorePage A single data structure which allows you to access score data. gpg::ScorePage::Entry A class that creates an entry on a score page. gpg::ScorePage::ScorePageToken A data structure that is a nearly-opaque type representing a query for a ScorePage (or is empty). gpg::ScoreSummary A single data structure which allows you to access a summary of score information. gpg::SnapshotManager Gets and sets various snapshot-related data. gpg::SnapshotMetadata A single data structure that allows you to access data about the status of a specific snapshot metadata. gpg::SnapshotMetadataChange A single data structure which allows you to access data about the status of a specific snapshot. gpg::SnapshotMetadataChange::Builder Builds one or more SnapshotMetadataChange objects. gpg::SnapshotMetadataChange::CoverImage A single data structure which allows you to access data about the status of a specific cover image. gpg::StatsManager Gets and sets various stats-related data. gpg::TurnBasedMatch A data structure containing data about the current state of a TurnBasedMatch . gpg::TurnBasedMatchConfig A data structure containing the data needed to create a TurnBasedMatch . gpg::TurnBasedMatchConfig::Builder Builds one or more TurnBasedMatchConfig objects. gpg::TurnBasedMultiplayerManager Fetches, modifies and creates TurnBasedMatch objects. gpg::VideoCapabilities A data structure which allows access to information on what capabilities the current device has for video recording. gpg::VideoCaptureState A data structure which allows access to the current state of video capture. gpg::VideoManager Gets and sets various video-related data.
- Google Play Games C++ API Reference These are the reference pages for the Play Games services C++ APIs.
- Structs gpg::AchievementManager::FetchAllResponse Holds all data for all achievements, along with a response status. gpg::AchievementManager::FetchResponse Contains data and response status for a single achievement. gpg::AndroidInitialization AndroidInitialization includes three initialization functions, exactly one of which must be called. gpg::AndroidSupport Functions which enable pre- Android 4.0 support. gpg::AppIdentifier An identifier for an application. gpg::BaseStatus A struct containing all possible status codes that can be returned by our APIs. gpg::ConnectionRequest A request to establish a connection. gpg::ConnectionResponse A response to a connection request. gpg::EndpointDetails Details about a remote endpoint that the app has discovered. gpg::EventManager::FetchAllResponse Data and ResponseStatus for all events. gpg::EventManager::FetchResponse Contains data and response status for a single event. gpg::LeaderboardManager::FetchAllResponse Contains data and response statuses for all leaderboards. gpg::LeaderboardManager::FetchAllScoreSummariesResponse Contains all data and response statuses for all leaderboard score summaries. gpg::LeaderboardManager::FetchResponse Holds data for a leaderboard, along with a response status. gpg::LeaderboardManager::FetchScorePageResponse Returns response status and data from the accessed score page. gpg::LeaderboardManager::FetchScoreSummaryResponse Data and response status for a specified leaderboard score summary. gpg::PlayerManager::FetchListResponse A response which contains a vector of players. gpg::PlayerManager::FetchResponse data and ResponseStatus for a specific Player . gpg::PlayerManager::FetchSelfResponse Holds all player data, along with a response status. gpg::RealTimeMultiplayerManager::FetchInvitationsResponse Data and ResponseStatus for the FetchInvitations operation. gpg::RealTimeMultiplayerManager::RealTimeRoomResponse Data and ResponseStatus for a specific RealTimeRoom object. gpg::RealTimeMultiplayerManager::RoomInboxUIResponse Data and ResponseStatus for the ShowRoomInboxUI operation. gpg::RealTimeMultiplayerManager::WaitingRoomUIResponse Data and ResponseStatus for the ShowWaitingRoomUI operation. gpg::SnapshotManager::CommitResponse Holds the data for an updated snapshot, along with a response status. gpg::SnapshotManager::FetchAllResponse Holds all data for all snapshots, along with a response status. gpg::SnapshotManager::MaxSizeResponse Holds max size for snapshot data and for snapshot cover image. gpg::SnapshotManager::OpenResponse Holds the data for a particular requested snapshot along with a response status. gpg::SnapshotManager::ReadResponse Reads response status and snapshot data returned from a snapshot read operation. gpg::SnapshotManager::SnapshotSelectUIResponse Data and ResponseStatus for the ShowSelectUIOperation operation. gpg::StartAdvertisingResult The ID and name of an instance registered on this device. gpg::StatsManager::FetchForPlayerResponse Holds all PlayerStats data, along with a response status. gpg::TurnBasedMultiplayerManager::MatchInboxUIResponse Data and ResponseStatus for the ShowMatchInboxUI operation. gpg::TurnBasedMultiplayerManager::PlayerSelectUIResponse Data and ResponseStatus for the ShowPlayerSelectUI operation. gpg::TurnBasedMultiplayerManager::TurnBasedMatchResponse Data and ResponseStatus for a specific TurnBasedMatch . gpg::TurnBasedMultiplayerManager::TurnBasedMatchesResponse Data and ResponseStatus for TurnBasedMatches and invitations . gpg::VideoManager::GetCaptureCapabilitiesResponse Holds data for video capabilities, along with a response status. gpg::VideoManager::GetCaptureStateResponse Holds data for video capture state, along with a response status. gpg::VideoManager::IsCaptureAvailableResponse Holds whether or not a capture mode (specified in IsCaptureAvailable ) is available, along with a response status.
- Last updated 2024-10-28 UTC. [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-28 UTC."],[],[]]

### Google Play Game Services \_|\_ API reference \_|\_ Android Developers

- URL: [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://games.googleapis.com REST Resource: accesstokens Methods generatePlayGroupingApiToken POST /games/v1/accesstokens/generatePlayGroupingApiToken Generates a Play Grouping API token for the PGS user identified by the attached credential. generateRecallPlayGroupingApiToken POST /games/v1/accesstokens/generateRecallPlayGroupingApiToken Generates a Play Grouping API token for the PGS user identified by the Recall session ID provided in the request.
- REST Resource: accesstokens REST Resource: achievementDefinitions REST Resource: achievements REST Resource: applications REST Resource: events REST Resource: leaderboards REST Resource: metagame REST Resource: players REST Resource: recall REST Resource: revisions REST Resource: scores REST Resource: snapshots REST Resource: stats Service: games.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: recall Methods gamesPlayerTokens GET /games/v1/recall/gamesPlayerTokens/{sessionId} Retrieve the Recall tokens from all requested games that is associated with the PGS Player encoded in the provided recall session id. lastTokenFromAllDeveloperGames GET /games/v1/recall/developerGamesLastPlayerToken/{sessionId} Retrieve the last Recall token from all developer games that is associated with the PGS Player encoded in the provided recall session id. linkPersona POST /games/v1/recall:linkPersona Associate the PGS Player principal encoded in the provided recall session id with an in-game account resetPersona POST /games/v1/recall:resetPersona Delete all Recall tokens linking the given persona to any player (with or without a profile). retrieveTokens GET /games/v1/recall/tokens/{sessionId} Retrieve all Recall tokens associated with the PGS Player encoded in the provided recall session id. unlinkPersona POST /games/v1/recall:unlinkPersona Delete a Recall token linking the PGS Player principal identified by the Recall session and an in-game account identified either by the 'persona' or by the token value.
- REST Resource: achievements Methods increment POST /games/v1/achievements/{achievementId}/increment Increments the steps of the achievement with the given ID for the currently authenticated player. list GET /games/v1/players/{playerId}/achievements Lists the progress for all your application's achievements for the currently authenticated player. reveal POST /games/v1/achievements/{achievementId}/reveal Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player. setStepsAtLeast POST /games/v1/achievements/{achievementId}/setStepsAtLeast Sets the steps for the currently authenticated player towards unlocking an achievement. unlock POST /games/v1/achievements/{achievementId}/unlock Unlocks this achievement for the currently authenticated player. updateMultiple POST /games/v1/achievements/updateMultiple Updates multiple achievements for the currently authenticated player.

### "Method: accesstokens.generatePlayGroupingApiToken \_|\_ API reference \_\

- URL: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "token" : { object ( PlayGroupingApiToken ) } } Fields token object ( PlayGroupingApiToken ) Token for accessing the Play Grouping API.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/games https://www.googleapis.com/auth/games lite For more information, see the OAuth 2.0 Overview .
- HTTP request POST https://games.googleapis.com/games/v1/accesstokens/generatePlayGroupingApiToken Query parameters Parameters packageName string Required.
- Generates a Play Grouping API token for the PGS user identified by the attached credential.

