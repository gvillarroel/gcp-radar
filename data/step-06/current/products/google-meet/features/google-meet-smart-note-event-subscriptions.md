---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.829Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Google Meet smart note event subscriptions"
feature_slug: "google-meet-smart-note-event-subscriptions"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/events-overview"
  - "https://developers.google.com/workspace/meet/api/guides/overview"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
keywords:
  - "meet"
  - "smart"
  - "note"
  - "event"
  - "subscriptions"
  - "developers"
  - "can"
  - "subscribe"
---

# Google Meet smart note event subscriptions

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

Developers can subscribe to Google Meet smart note events through the Google Workspace Events API or Google Cloud Pub/Sub.

## Extended Definition

Developers can subscribe to Google Meet smart note events through the Google Workspace Events API or Google Cloud Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- Add the code to main.py : space = create space () print ( f "Join the meeting at { space . meeting uri } " ) TOPIC NAME = "projects/ PROJECT ID /topics/ TOPIC ID " SUBSCRIPTION NAME = "projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID " subscription = subscribe to space ( topic name = TOPIC NAME , space name = space . name ) if ( subscription . status code ) == 200 : listen for events ( subscription name = SUBSCRIPTION NAME ) else : print ( f "Subscription to Meet events failed, response data: { subscription . content } " ) Replace the following: PROJECT ID : The unique Cloud project ID for your app, such as my-sample-project-191923 .
- Enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub with the gcloud services enable command: gcloud services enable meet.googleapis.com workspaceevents.googleapis.com pubsub.googleapis.com Install the Meet REST API client library Follow these steps to install the Meet REST API client library: Run the command: pip install google-apps-meet Edit the main.py file to import the client: from google.apps import meet v2 as meet Create a space Now that the Meet REST API is available, define a function to create a meeting space that can be subscribed to.
- Make a note of the email address for the service account. gcloud CLI Create the service account: gcloud iam service-accounts create meet-event-listener \ --display-name="meet-event-listener" Grant the necessary roles to the service account: gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:meet-event-listener@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/pubsub.subscriber" Replace PROJECT ID with your Google Cloud project ID.

### Respond to events from Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Google Workspace Events API overview Create a Google Workspace subscription Subscribe to Google Meet events Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- New conference record Receive event data from Google Meet To receive event data, your app can do either of the following: Subscribe to events using the Google Workspace Events API to receive events as they occur.
- Subscribe to events To receive events in real time, the Meet app calls the Google Workspace Events API subscriptions.create method to subscribe to the meeting space for all types of events.
- API Google Workspace Events API Meet REST API Source of events Conference record and users Space and conference record Supported events Conference record For a list of supported event types, see Event types for creating subscriptions in the Google Workspace Events API documentation.

### Google Meet REST API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see: Respond to events from Google Meet Subscribe to events using the Google Workspace Events API Subscribe to Google Meet events Use cases Apps can integrate with the Meet REST API to perform the following tasks: Before a conference : Tailor the conference experience as needed by creating the meeting space.
- You can also subscribe to Meet events using the Google Workspace Events API.
- To be notified of changes, you can subscribe to a specified meeting space or to all meeting spaces belonging to a specified user.
- Note that a meeting organizer can organize the meeting but not be present when it takes place.

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instead of polling, you can also subscribe to Meet events to receive push notifications.
- Instead of polling, you can subscribe to Meet events to receive push notifications.
- Related topics Create and manage meeting spaces Configure meeting spaces and members Join a meeting Countries where you can use a phone with Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To manage a meeting space, use the following values for the name field: To get details about a meeting space, you can use either spaces/{space} or the alias spaces/{meetingCode} .

