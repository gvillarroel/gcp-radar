---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.750Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing client executor configuration"
feature_slug: "live-sharing-client-executor-configuration"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/participants"
keywords:
  - "live"
  - "sharing"
  - "client"
  - "executor"
  - "configuration"
  - "the"
  - "factory"
  - "adds"
---

# Live Sharing client executor configuration

Product: Google Meet
Coverage: LOW

## Step 02 Summary

The client factory adds an overload that lets consumers supply executor services.

## Extended Definition

The client factory adds an overload that lets consumers supply executor services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .
- Enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub with the gcloud services enable command: gcloud services enable meet.googleapis.com workspaceevents.googleapis.com pubsub.googleapis.com Install the Meet REST API client library Follow these steps to install the Meet REST API client library: Run the command: pip install google-apps-meet Edit the main.py file to import the client: from google.apps import meet v2 as meet Create a space Now that the Meet REST API is available, define a function to create a meeting space that can be subscribed to.
- When prompted for authorization, sign in using the same account used in the previous steps. gcloud auth application-default login --impersonate-service-account= SERVICE ACCOUNT EMAIL Install the Pub/Sub client library Use pip to install the client library for Pub/Sub: pip install google-cloud-pubsub Then edit main.py to import the client: from google.cloud import pubsub v1 Create the Google Workspace subscription Add the following code to main.py to define a method for subscribing to Meet events.
- ConferenceRecordsServiceClient ( credentials = USER CREDENTIALS ) Use the parent path of the session to fetch the participant details parsed session path = client . parse participant session path ( session name ) participant resource name = client . participant path ( parsed session path [ "conference record" ], parsed session path [ "participant" ]) return client . get participant ( name = participant resource name ) def on conference started ( message : pubsub v1 . subscriber . message .

### Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Later on the input space can be non-empty when space configuration is introduced. / // const space = {} // Imports the Meet library const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ; // Instantiates a client const meetClient = new SpacesServiceClient (); async function callCreateSpace () { // Construct request const request = { }; // Run request const response = await meetClient . createSpace ( request ); console . log ( response ); } callCreateSpace (); Python packages/google-apps-meet/samples/generated samples/meet v2 generated spaces service create space async.py View on GitHub This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to end an active conference: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/endactiveconference/AsyncEndActiveConference.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.EndActiveConferenceRequest ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.protobuf.Empty ; public class AsyncEndActiveConference { public static void main ( String [] args ) throws Exception { asyncEndActiveConference (); } public static void asyncEndActiveConference () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { EndActiveConferenceRequest request = EndActiveConferenceRequest . newBuilder () . setName ( SpaceName . of ( "[SPACE]" ). toString ()) . build (); ApiFuture<Empty> future = spacesServiceClient . endActiveConferenceCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js packages/google-apps-meet/samples/generated/v2/spaces service.end active conference.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to update a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.UpdateSpaceRequest ; import com.google.protobuf.FieldMask ; public class AsyncUpdateSpace { public static void main ( String [] args ) throws Exception { asyncUpdateSpace (); } public static void asyncUpdateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { UpdateSpaceRequest request = UpdateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/getspace/AsyncGetSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.GetSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncGetSpace { public static void main ( String [] args ) throws Exception { asyncGetSpace (); } public static void asyncGetSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { GetSpaceRequest request = GetSpaceRequest . newBuilder (). setName ( SpaceName . of ( "[SPACE]" ). toString ()). build (); ApiFuture<Space> future = spacesServiceClient . getSpaceCallable (). futureCall ( request ); // Do something.

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Authenticate and authorize using domain-wide delegation If you're a domain administrator, you can grant domain-wide delegation of authority to authorize an application's service account to access your users' data without requiring each user to give consent.
- Restricted The Usage column in the table indicates the sensitivity of each scope, according to the following definitions: Non-sensitive : These scopes provide the smallest scope of authorization access and only require basic app verification.
- Important terminology The following is a list of terms related to authentication and authorization: Authentication The act of ensuring that a principal , which can be a user or an app acting on behalf of a user, is who they say they are.

### Work with participants \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- The following code sample shows how to list all participant sessions in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listparticipantsessions/AsyncListParticipantSessions.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListParticipantSessionsRequest ; import com.google.apps.meet.v2.ParticipantName ; import com.google.apps.meet.v2.ParticipantSession ; public class AsyncListParticipantSessions { public static void main ( String [] args ) throws Exception { asyncListParticipantSessions (); } public static void asyncListParticipantSessions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListParticipantSessionsRequest request = ListParticipantSessionsRequest . newBuilder () . setParent ( ParticipantName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<ParticipantSession> future = conferenceRecordsServiceClient . listParticipantSessionsPagedCallable (). futureCall ( request ); // Do something. for ( ParticipantSession element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list participant sessions.js View on GitHub // Copyright 2026 Google LLC // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // This file is automatically generated by gapic-generator-typescript. // https://github.com/googleapis/gapic-generator-typescript // All changes to this file may be overwritten. 'use strict' ; function main ( parent ) { / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all participants in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listparticipants/AsyncListParticipants.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListParticipantsRequest ; import com.google.apps.meet.v2.Participant ; public class AsyncListParticipants { public static void main ( String [] args ) throws Exception { asyncListParticipants (); } public static void asyncListParticipants () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListParticipantsRequest request = ListParticipantsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Participant> future = conferenceRecordsServiceClient . listParticipantsPagedCallable (). futureCall ( request ); // Do something. for ( Participant element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list participants.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to retrieve a specific participant session: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/getparticipantsession/AsyncGetParticipantSession.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetParticipantSessionRequest ; import com.google.apps.meet.v2.ParticipantSession ; import com.google.apps.meet.v2.ParticipantSessionName ; public class AsyncGetParticipantSession { public static void main ( String [] args ) throws Exception { asyncGetParticipantSession (); } public static void asyncGetParticipantSession () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetParticipantSessionRequest request = GetParticipantSessionRequest . newBuilder () . setName ( ParticipantSessionName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" , "[PARTICIPANT SESSION]" ) . toString ()) . build (); ApiFuture<ParticipantSession> future = conferenceRecordsServiceClient . getParticipantSessionCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a specific participant: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/getparticipant/AsyncGetParticipant.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetParticipantRequest ; import com.google.apps.meet.v2.Participant ; import com.google.apps.meet.v2.ParticipantName ; public class AsyncGetParticipant { public static void main ( String [] args ) throws Exception { asyncGetParticipant (); } public static void asyncGetParticipant () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetParticipantRequest request = GetParticipantRequest . newBuilder () . setName ( ParticipantName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" ). toString ()) . build (); ApiFuture<Participant> future = conferenceRecordsServiceClient . getParticipantCallable (). futureCall ( request ); // Do something.

