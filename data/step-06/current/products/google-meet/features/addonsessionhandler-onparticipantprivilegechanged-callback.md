---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.834Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "AddonSessionHandler.onParticipantPrivilegeChanged callback"
feature_slug: "addonsessionhandler-onparticipantprivilegechanged-callback"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions"
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
keywords:
  - "addonsessionhandler"
  - "onparticipantprivilegechanged"
  - "callback"
  - "the"
  - "notifies"
  - "an"
  - "add"
  - "on"
---

# AddonSessionHandler.onParticipantPrivilegeChanged callback

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

The onParticipantPrivilegeChanged callback notifies an add-on when a participant's privileges change.

## Extended Definition

The onParticipantPrivilegeChanged callback notifies an add-on when a participant's privileges change.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)

## Supporting Pages

### "Method: conferenceRecords.participants.participantSessions.get \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP request GET https://meet.googleapis.com/v2/{name=conferenceRecords/ /participants/ /participantSessions/ } The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains an instance of ParticipantSession .

### "Method: conferenceRecords.participants.participantSessions.list \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
- If successful, the response body contains data with the following structure: JSON representation { "participantSessions" : [ { object ( ParticipantSession ) } ] , "nextPageToken" : string } Fields participantSessions[] object ( ParticipantSession ) List of participants in one page. nextPageToken string Token to be circulated back for further List call if current List doesn't include all the participants.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following are the filterable fields: start time end time For example, end time IS NULL returns active participant sessions in the conference record.

### "REST Resource: conferenceRecords.participants.participantSessions \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- That means if a user joins a space multiple times from the same device, they're assigned different IDs, and are also be treated as different participant sessions.
- Methods get Gets a participant session by participant session ID. list Lists the participant sessions of a participant in a conference record.

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- SubscriberClient () with subscriber : future = subscriber . subscribe ( subscription name , callback = on message ) print ( "Listening for events" ) try : future . result () except KeyboardInterrupt : future . cancel () print ( "Done" ) Finalize the code Add the following code to main.py to call the methods to create the space, subscribe to events, and listen.
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.

