---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.742Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Meet Add-ons SDK getCurrentMeetingRecordingStatus() method"
feature_slug: "meet-add-ons-sdk-getcurrentmeetingrecordingstatus-method"
latest_feature_date: "2024-02-12"
deprecation_date: "2024-02-12"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration"
keywords:
  - "meet"
  - "add"
  - "ons"
  - "sdk"
  - "getcurrentmeetingrecordingstatus"
  - "method"
  - "the"
  - "returned"
---

# Meet Add-ons SDK getCurrentMeetingRecordingStatus() method

Product: Google Meet
Coverage: LOW

## Step 02 Summary

The getCurrentMeetingRecordingStatus() method returned the current meeting recording status and was later deprecated with no replacement; deprecated on 2024-02-12.

## Extended Definition

The getCurrentMeetingRecordingStatus() method returned the current meeting recording status and was later deprecated with no replacement; deprecated on 2024-02-12.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.
- Add the code to main.py : space = create space () print ( f "Join the meeting at { space . meeting uri } " ) TOPIC NAME = "projects/ PROJECT ID /topics/ TOPIC ID " SUBSCRIPTION NAME = "projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID " subscription = subscribe to space ( topic name = TOPIC NAME , space name = space . name ) if ( subscription . status code ) == 200 : listen for events ( subscription name = SUBSCRIPTION NAME ) else : print ( f "Subscription to Meet events failed, response data: { subscription . content } " ) Replace the following: PROJECT ID : The unique Cloud project ID for your app, such as my-sample-project-191923 .
- When prompted for authorization, sign in using the same account used in the previous steps. gcloud auth application-default login --impersonate-service-account= SERVICE ACCOUNT EMAIL Install the Pub/Sub client library Use pip to install the client library for Pub/Sub: pip install google-cloud-pubsub Then edit main.py to import the client: from google.cloud import pubsub v1 Create the Google Workspace subscription Add the following code to main.py to define a method for subscribing to Meet events.

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How to call the meeting space methods The following table details the meeting roles required to use the meeting space methods: Method Owners Participants Others endActiveConference x get x x x with settings x with active conference x x patch x How Meet identifies a meeting space The Google Meet REST API generates a spaces resource for each meeting space.
- Related topics Create and manage meeting spaces Configure meeting spaces and members Join a meeting Countries where you can use a phone with Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- During the conference, the meeting owner can call the spaces.endActiveConference method to programmatically end an active conference for all participants.
- You can see additional phone numbers for a meeting space by appending the {meetingCode} to the following URL: https://meet.google.com/tel/ .

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Meet Guides Send feedback Authenticate and authorize Meet REST API requests Stay organized with collections Save and categorize content based on your preferences.
- Authenticating and authorizing with user credentials lets Meet apps access user data and perform operations on the authenticated user's behalf.
- Meet REST API scopes Authorization scopes are the permissions that you request users to authorize for your app to access the meeting content.
- Authenticate and authorize using domain-wide delegation If you're a domain administrator, you can grant domain-wide delegation of authority to authorize an application's service account to access your users' data without requiring each user to give consent.

### "Configure meeting spaces and members \_|\_ Google Meet \_|\_ Google for\

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following sections detail how to configure a meeting space using these objects and methods.
- Related topics Start or schedule a Google Meet video meeting "Take notes for me" in Google Meet Use Transcripts with Google Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Each method takes a path parameter with the create and list methods using the parent field to denote the meeting space, and the delete and get methods using the name field to filter the results based on the meeting space and the member name.
- Set moderation and meeting access You can set how users join a meeting, the moderation modes, the feature restrictions, and the permissions users receive when they join a meeting, through the SpaceConfig object.

