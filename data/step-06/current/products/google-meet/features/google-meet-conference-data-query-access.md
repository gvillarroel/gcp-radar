---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.831Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Google Meet conference data query access"
feature_slug: "google-meet-conference-data-query-access"
latest_feature_date: "2025-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
  - "https://developers.google.com/workspace/meet/api/guides/participants"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration"
keywords:
  - "meet"
  - "conference"
  - "query"
  - "access"
  - "meeting"
  - "participants"
  - "can"
  - "records"
---

# Google Meet conference data query access

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

Meeting participants can query conference records, conference artifacts, and participant records.

## Extended Definition

Meeting participants can query conference records, conference artifacts, and participant records.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)

## Supporting Pages

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During the conference, the meeting owner can call the spaces.endActiveConference method to programmatically end an active conference for all participants.
- How to call the meeting space methods The following table details the meeting roles required to use the meeting space methods: Method Owners Participants Others endActiveConference x get x x x with settings x with active conference x x patch x How Meet identifies a meeting space The Google Meet REST API generates a spaces resource for each meeting space.
- The phoneAccess object contains information required to dial into a conference including the regional phone numbers for the meeting space and a PIN code specific to that phone number.
- To end an active conference within a meeting space, you can only use spaces/{space} .

### Work with participants \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListParticipantSessionsRequest ( parent = "parent value" , ) Make the request page result = client . list participant sessions ( request = request ) Handle the response async for response in page result : print ( response ) cURL curl -X GET "https://meet.googleapis.com/v2/conferenceRecords/ CONFERENCE RECORD NAME /participants/ PARENT NAME /participantSessions" \ -H "Authorization: Bearer ACCESS TOKEN " Replace ACCESS TOKEN with the access token that grants access to the API.
- GetParticipantSessionRequest ( name = "name value" , ) Make the request response = await client . get participant session ( request = request ) Handle the response print ( response ) cURL curl -X GET "https://meet.googleapis.com/v2/conferenceRecords/ CONFERENCE RECORD NAME /participants/ PARTICIPANT NAME /participantSessions/ PARTICIPANT SESSION ID " \ -H "Authorization: Bearer ACCESS TOKEN " Replace ACCESS TOKEN with the access token that grants access to the API.
- ListParticipantsRequest ( parent = "parent value" , ) Make the request page result = client . list participants ( request = request ) Handle the response async for response in page result : print ( response ) cURL curl -X GET "https://meet.googleapis.com/v2/conferenceRecords/ PARENT NAME /participants" \ -H "Authorization: Bearer ACCESS TOKEN " Replace ACCESS TOKEN with the access token that grants access to the API.
- GetParticipantRequest ( name = "name value" , ) Make the request response = await client . get participant ( request = request ) Handle the response print ( response ) cURL curl -X GET "https://meet.googleapis.com/v2/conferenceRecords/ CONFERENCE RECORD NAME /participants/ PARTICIPANT NAME " \ -H "Authorization: Bearer ACCESS TOKEN " Replace ACCESS TOKEN with the access token that grants access to the API.

### "Method: conferenceRecords.participants.participantSessions.list \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Meet Reference Send feedback Method: conferenceRecords.participants.participantSessions.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://meet.googleapis.com/v2/{parent=conferenceRecords/ /participants/ }/participantSessions The URL uses gRPC Transcoding syntax.
- Format: conferenceRecords/{conferenceRecord}/participants/{participant} Query parameters Parameters pageSize integer Optional.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/meetings.space.created https://www.googleapis.com/auth/meetings.space.readonly For more information, see the Authorization guide .

### "Configure meeting spaces and members \_|\_ Google Meet \_|\_ Google for\

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAuth scopes for settings Setting or accessing meetings settings requires the following OAuth scopes: Use case Scope code Set auto artifact generation for spaces created by other apps. https://www.googleapis.com/auth/meetings.space.settings Get or list artifacts from conferences created by other apps. https://www.googleapis.com/auth/meetings.space.readonly Get or list other pre-meeting settings of a meeting space created by a third-party app. https://www.googleapis.com/auth/meetings.space.created https://www.googleapis.com/auth/meetings.space.readonly Read and edit the settings for all meeting spaces a user can access through any other app, such as Calendar. https://www.googleapis.com/auth/meetings.space.settings For more information on OAuth scopes, see Meet REST API scopes .
- Set moderation and meeting access You can set how users join a meeting, the moderation modes, the feature restrictions, and the permissions users receive when they join a meeting, through the SpaceConfig object.
- To define the entry points that can be used to join meetings hosted in a meeting space, set the entryPointAccess field using the EntryPointAccess object.
- Access meeting spaces To determine who can join a meeting space without knocking, set the accessType field using the AccessType object.

