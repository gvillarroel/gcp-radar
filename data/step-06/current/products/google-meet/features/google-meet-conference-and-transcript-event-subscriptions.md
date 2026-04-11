---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.740Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Google Meet conference and transcript event subscriptions"
feature_slug: "google-meet-conference-and-transcript-event-subscriptions"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration"
  - "https://developers.google.com/workspace/meet/api/guides/events-overview"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list"
keywords:
  - "meet"
  - "conference"
  - "and"
  - "transcript"
  - "event"
  - "subscriptions"
  - "calendar"
  - "invitees"
---

# Google Meet conference and transcript event subscriptions

Product: Google Meet
Coverage: LOW

## Step 02 Summary

Calendar invitees can subscribe to Google Meet conference started and transcript file generated events through the Google Workspace Events API or Google Cloud Pub/Sub.

## Extended Definition

Calendar invitees can subscribe to Google Meet conference started and transcript file generated events through the Google Workspace Events API or Google Cloud Pub/Sub.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- Message ) - > None : """Handles an incoming event from the Google Cloud Pub/Sub API.""" event type = message . attributes . get ( "ce-type" ) handler = { "google.workspace.meet.conference.v2.started" : on conference started , "google.workspace.meet.conference.v2.ended" : on conference ended , "google.workspace.meet.participant.v2.joined" : on participant joined , "google.workspace.meet.participant.v2.left" : on participant left , "google.workspace.meet.recording.v2.fileGenerated" : on recording ready , "google.workspace.meet.transcript.v2.fileGenerated" : on transcript ready , } . get ( event type ) try : if handler is not None : handler ( message ) message . ack () except Exception as error : print ( "Unable to process event" ) print ( error ) def listen for events ( subscription name : str = None ): """Subscribe to events on the subscription.""" subscriber = pubsub v1 .
- Add the code to main.py : space = create space () print ( f "Join the meeting at { space . meeting uri } " ) TOPIC NAME = "projects/ PROJECT ID /topics/ TOPIC ID " SUBSCRIPTION NAME = "projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID " subscription = subscribe to space ( topic name = TOPIC NAME , space name = space . name ) if ( subscription . status code ) == 200 : listen for events ( subscription name = SUBSCRIPTION NAME ) else : print ( f "Subscription to Meet events failed, response data: { subscription . content } " ) Replace the following: PROJECT ID : The unique Cloud project ID for your app, such as my-sample-project-191923 .

### "Configure meeting spaces and members \_|\_ Google Meet \_|\_ Google for\

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OAuth scopes for settings Setting or accessing meetings settings requires the following OAuth scopes: Use case Scope code Set auto artifact generation for spaces created by other apps. https://www.googleapis.com/auth/meetings.space.settings Get or list artifacts from conferences created by other apps. https://www.googleapis.com/auth/meetings.space.readonly Get or list other pre-meeting settings of a meeting space created by a third-party app. https://www.googleapis.com/auth/meetings.space.created https://www.googleapis.com/auth/meetings.space.readonly Read and edit the settings for all meeting spaces a user can access through any other app, such as Calendar. https://www.googleapis.com/auth/meetings.space.settings For more information on OAuth scopes, see Meet REST API scopes .
- Related topics Start or schedule a Google Meet video meeting "Take notes for me" in Google Meet Use Transcripts with Google Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Difference between transcripts and smart notes While both meeting transcripts and smart notes (also known as "take notes for me") capture information from your meeting, these features serve different purposes and produce different artifacts.
- When both features are enabled While each feature can be used separately, both transcripts and smart notes can also be used at the same time to create better post-meeting artifacts.

### Respond to events from Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations Calendar invitees and other participants invited to a conference can only receive the following events: google.workspace.meet.conference.v2.started and google.workspace.meet.transcript.v2.fileGenerated .
- API Google Workspace Events API Meet REST API Source of events Conference record and users Space and conference record Supported events Conference record For a list of supported event types, see Event types for creating subscriptions in the Google Workspace Events API documentation.
- In the meeting space, a participant joins an active conference, which populates a ParticipantSession resource and triggers a new event.
- A Meet REST API resource ( Space and ConferenceRecord ) Event data Base64-encoded string with or without resource data.

### "Method: conferenceRecords.transcripts.entries.list \_|\_ Google Meet \_\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries/list)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Meet Reference Send feedback Method: conferenceRecords.transcripts.entries.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://meet.googleapis.com/v2/{parent=conferenceRecords/ /transcripts/ }/entries The URL uses gRPC Transcoding syntax.
- Format: conferenceRecords/{conferenceRecord}/transcripts/{transcript} Query parameters Parameters pageSize integer Maximum number of entries to return.
- Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file.

