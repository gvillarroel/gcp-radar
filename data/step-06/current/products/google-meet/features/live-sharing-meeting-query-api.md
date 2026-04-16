---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.838Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing meeting query API"
feature_slug: "live-sharing-meeting-query-api"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/overview"
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/events-overview"
keywords:
  - "live"
  - "sharing"
  - "meeting"
  - "query"
  - "api"
  - "the"
  - "sdk"
  - "enables"
---

# Live Sharing meeting query API

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

The SDK enables the queryMeeting() capability.

## Extended Definition

The SDK enables the queryMeeting() capability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)

## Supporting Pages

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Meet REST API supports the following OAuth 2.0 scopes: Scope code Description Usage https://www.googleapis.com/auth/meetings.space.settings Edit and see the settings for all of your Google Meet calls.
- Meet REST API scopes Authorization scopes are the permissions that you request users to authorize for your app to access the meeting content.
- Sensitive https://www.googleapis.com/auth/meetings.space.readonly Allow apps to read metadata about any meeting space the user has access to.
- Restricted The following Meet-adjacent OAuth 2.0 scope resides in the Google Drive API scopes list : Scope code Description Usage https://www.googleapis.com/auth/drive.meet.readonly View Drive files created or edited by Google Meet.

### Google Meet REST API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see: Respond to events from Google Meet Subscribe to events using the Google Workspace Events API Subscribe to Google Meet events Use cases Apps can integrate with the Meet REST API to perform the following tasks: Before a conference : Tailor the conference experience as needed by creating the meeting space.
- Some examples of things you might want to use Meet REST API for include the following: Sales and account management Retrieve meeting and participant information for record purposes.
- The Google Meet REST API lets you create and manage meetings for Google Meet and offers entry points to your users directly from your app.
- To learn how to create a meeting space with Meet REST API, read the Create and manage meeting spaces guide.

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .
- Enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub with the gcloud services enable command: gcloud services enable meet.googleapis.com workspaceevents.googleapis.com pubsub.googleapis.com Install the Meet REST API client library Follow these steps to install the Meet REST API client library: Run the command: pip install google-apps-meet Edit the main.py file to import the client: from google.apps import meet v2 as meet Create a space Now that the Meet REST API is available, define a function to create a meeting space that can be subscribed to.
- SpacesServiceClient ( credentials = USER CREDENTIALS ) return client . get space ( name = "spaces/" + meeting code ) Make sure to add "https://www.googleapis.com/auth/meetings.space.readonly" in the authorize method in the credential samples above.
- Instead of downloading transcripts from Google Drive, retrieve them using the structured transcript methods in the Meet REST API. get space instead of creating the space def get space ( meeting code : str ) - > meet .

### Respond to events from Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query for recent events Instead of receiving events as they occur, a Meet app can also call the Meet REST API to list recent meeting space events that are related to participant activity.
- A Meet app receives recent participant events by querying for meeting space events using the Meet REST API.
- The following example shows how an activity in Meet affects a related Meet REST API resource, and the type of event that your Meet app receives: Activity Meet REST API resource Event type A user joins a meeting space.
- Subscribe to events To receive events in real time, the Meet app calls the Google Workspace Events API subscriptions.create method to subscribe to the meeting space for all types of events.

