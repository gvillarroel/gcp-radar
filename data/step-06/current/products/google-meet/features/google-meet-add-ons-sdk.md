---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.832Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Google Meet Add-ons SDK"
feature_slug: "google-meet-add-ons-sdk"
latest_feature_date: "2023-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/overview"
keywords:
  - "meet"
  - "add"
  - "ons"
  - "sdk"
  - "the"
  - "lets"
  - "developers"
  - "embed"
---

# Google Meet Add-ons SDK

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

The Google Meet Add-ons SDK lets developers embed apps into Google Meet so users can discover, share, and collaborate without leaving Meet.

## Extended Definition

The Google Meet Add-ons SDK lets developers embed apps into Google Meet so users can discover, share, and collaborate without leaving Meet.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)

## Supporting Pages

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Create and manage meeting spaces Configure meeting spaces and members Join a meeting Countries where you can use a phone with Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can see additional phone numbers for a meeting space by appending the {meetingCode} to the following URL: https://meet.google.com/tel/ .
- This guide explains how the Google Meet REST API lets you create and manage meetings for Google Meet.
- How to call the meeting space methods The following table details the meeting roles required to use the meeting space methods: Method Owners Participants Others endActiveConference x get x x x with settings x with active conference x x patch x How Meet identifies a meeting space The Google Meet REST API generates a spaces resource for each meeting space.

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticating and authorizing with user credentials lets Meet apps access user data and perform operations on the authenticated user's behalf.
- Home Google Workspace Google Meet Guides Send feedback Authenticate and authorize Meet REST API requests Stay organized with collections Save and categorize content based on your preferences.
- Meet REST API scopes Authorization scopes are the permissions that you request users to authorize for your app to access the meeting content.
- Authenticate and authorize using domain-wide delegation If you're a domain administrator, you can grant domain-wide delegation of authority to authorize an application's service account to access your users' data without requiring each user to give consent.

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.
- Add the code to main.py : space = create space () print ( f "Join the meeting at { space . meeting uri } " ) TOPIC NAME = "projects/ PROJECT ID /topics/ TOPIC ID " SUBSCRIPTION NAME = "projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID " subscription = subscribe to space ( topic name = TOPIC NAME , space name = space . name ) if ( subscription . status code ) == 200 : listen for events ( subscription name = SUBSCRIPTION NAME ) else : print ( f "Subscription to Meet events failed, response data: { subscription . content } " ) Replace the following: PROJECT ID : The unique Cloud project ID for your app, such as my-sample-project-191923 .
- Grant access to publish messages to your topic: gcloud pubsub topics add-iam-policy-binding workspace-events --member='serviceAccount:meet-api-event-push@system.gserviceaccount.com' --role='roles/pubsub.publisher' It can take a few minutes to update the permissions for your topic.

### Google Meet REST API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common terms The following is a list of common terms used in this API: Artifact A file generated by Meet in response to a conference , such as recordings and transcripts .
- The Google Meet REST API lets you create and manage meetings for Google Meet and offers entry points to your users directly from your app.
- Each call has a unique URL consisting of https://meet.google.com/ followed by the meeting code .
- This user can also be considered the meeting owner.

