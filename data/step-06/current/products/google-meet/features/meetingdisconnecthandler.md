---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.747Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "MeetingDisconnectHandler"
feature_slug: "meetingdisconnecthandler"
latest_feature_date: "2023-02-22"
deprecation_date: "2023-02-22"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
  - "https://developers.google.com/workspace/meet/api/guides/events-overview"
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination"
keywords:
  - "meetingdisconnecthandler"
  - "was"
  - "deprecated"
  - "and"
  - "developers"
  - "were"
  - "directed"
  - "to"
---

# MeetingDisconnectHandler

Product: Google Meet
Coverage: LOW

## Step 02 Summary

MeetingDisconnectHandler was deprecated and developers were directed to use LiveSharingSessionDelegate instead; deprecated on 2023-02-22.

## Extended Definition

MeetingDisconnectHandler was deprecated and developers were directed to use LiveSharingSessionDelegate instead; deprecated on 2023-02-22.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination](https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination)

## Supporting Pages

### Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see How Meet identifies a meeting space (https://developers.google.com/meet/api/guides/meeting-spaces#identify-meeting-space). / // const name = 'abc123' // Imports the Meet library const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ; // Instantiates a client const meetClient = new SpacesServiceClient (); async function callEndActiveConference () { // Construct request const request = { name , }; // Run request const response = await meetClient . endActiveConference ( request ); console . log ( response ); } callEndActiveConference (); Python packages/google-apps-meet/samples/generated samples/meet v2 generated spaces service end active conference async.py View on GitHub This snippet has been automatically generated and should be regarded as a code template only.
- For more information, see How Meet identifies a meeting space (https://developers.google.com/meet/api/guides/meeting-spaces#identify-meeting-space). / // const name = 'abc123' // Imports the Meet library const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ; // Instantiates a client const meetClient = new SpacesServiceClient (); async function callGetSpace () { // Construct request const request = { name , }; // Run request const response = await meetClient . getSpace ( request ); console . log ( response ); } callGetSpace (); Python packages/google-apps-meet/samples/generated samples/meet v2 generated spaces service get space async.py View on GitHub This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to end an active conference: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/endactiveconference/AsyncEndActiveConference.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.EndActiveConferenceRequest ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.protobuf.Empty ; public class AsyncEndActiveConference { public static void main ( String [] args ) throws Exception { asyncEndActiveConference (); } public static void asyncEndActiveConference () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { EndActiveConferenceRequest request = EndActiveConferenceRequest . newBuilder () . setName ( SpaceName . of ( "[SPACE]" ). toString ()) . build (); ApiFuture<Empty> future = spacesServiceClient . endActiveConferenceCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js packages/google-apps-meet/samples/generated/v2/spaces service.end active conference.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to update a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.UpdateSpaceRequest ; import com.google.protobuf.FieldMask ; public class AsyncUpdateSpace { public static void main ( String [] args ) throws Exception { asyncUpdateSpace (); } public static void asyncUpdateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { UpdateSpaceRequest request = UpdateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request ); // Do something.

### Respond to events from Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Meet uses events to deliver information to your app about the type of activity that occurred, and the Meet REST API resource that was affected.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Related topics Google Workspace Events API overview Create a Google Workspace subscription Subscribe to Google Meet events Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Limitations Calendar invitees and other participants invited to a conference can only receive the following events: google.workspace.meet.conference.v2.started and google.workspace.meet.transcript.v2.fileGenerated .

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Message ) - > None : """Handles an incoming event from the Google Cloud Pub/Sub API.""" event type = message . attributes . get ( "ce-type" ) handler = { "google.workspace.meet.conference.v2.started" : on conference started , "google.workspace.meet.conference.v2.ended" : on conference ended , "google.workspace.meet.participant.v2.joined" : on participant joined , "google.workspace.meet.participant.v2.left" : on participant left , "google.workspace.meet.recording.v2.fileGenerated" : on recording ready , "google.workspace.meet.transcript.v2.fileGenerated" : on transcript ready , } . get ( event type ) try : if handler is not None : handler ( message ) message . ack () except Exception as error : print ( "Unable to process event" ) print ( error ) def listen for events ( subscription name : str = None ): """Subscribe to events on the subscription.""" subscriber = pubsub v1 .
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.
- Enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub with the gcloud services enable command: gcloud services enable meet.googleapis.com workspaceevents.googleapis.com pubsub.googleapis.com Install the Meet REST API client library Follow these steps to install the Meet REST API client library: Run the command: pip install google-apps-meet Edit the main.py file to import the client: from google.apps import meet v2 as meet Create a space Now that the Meet REST API is available, define a function to create a meeting space that can be subscribed to.

### DocsDestination \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination](https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
- Use the documents.get method of the Google Docs API ( https://developers.google.com/docs/api/reference/rest/v1/documents/get ) to fetch the content. exportUri string Output only.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Google Meet Reference Send feedback DocsDestination Stay organized with collections Save and categorize content based on your preferences.

