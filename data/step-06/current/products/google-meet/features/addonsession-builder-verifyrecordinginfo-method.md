---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.745Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "AddonSession.Builder.verifyRecordingInfo() method"
feature_slug: "addonsession-builder-verifyrecordinginfo-method"
latest_feature_date: "2023-10-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
  - "https://developers.google.com/workspace/meet/api/guides/artifacts"
keywords:
  - "addonsession"
  - "builder"
  - "verifyrecordinginfo"
  - "method"
  - "the"
  - "checks"
  - "that"
  - "add"
---

# AddonSession.Builder.verifyRecordingInfo() method

Product: Google Meet
Coverage: LOW

## Step 02 Summary

The verifyRecordingInfo() method checks that the add-on's recording status matches Meet's recording status and terminates the session if they differ.

## Extended Definition

The verifyRecordingInfo() method checks that the add-on's recording status matches Meet's recording status and terminates the session if they differ.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- When prompted for authorization, sign in using the same account used in the previous steps. gcloud auth application-default login --impersonate-service-account= SERVICE ACCOUNT EMAIL Install the Pub/Sub client library Use pip to install the client library for Pub/Sub: pip install google-cloud-pubsub Then edit main.py to import the client: from google.cloud import pubsub v1 Create the Google Workspace subscription Add the following code to main.py to define a method for subscribing to Meet events.
- SubscriberClient () with subscriber : future = subscriber . subscribe ( subscription name , callback = on message ) print ( "Listening for events" ) try : future . result () except KeyboardInterrupt : future . cancel () print ( "Done" ) Finalize the code Add the following code to main.py to call the methods to create the space, subscribe to events, and listen.
- The app prompts for authorization and creates a token.json file in the project working directory after the request is approved. python3 main.py Add the Meet REST API Now that the authorization code is complete, it's time to enable and call the Meet REST API.

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Important terminology The following is a list of terms related to authentication and authorization: Authentication The act of ensuring that a principal , which can be a user or an app acting on behalf of a user, is who they say they are.
- This code informs the user that the app wishes to act on their behalf and, if allowed, uses your app's unique credentials to obtain an access token from Google to access data or perform operations.
- By authenticating on a user's behalf, the app has the same permissions as that user and can perform actions as if they were performed by that user.
- Meet REST API scopes Authorization scopes are the permissions that you request users to authorize for your app to access the meeting content.

### Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The method returns an instance of a spaces resource, which includes the SpaceConfig object that's the configuration for the meeting space.
- The following code sample shows how to end an active conference: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/endactiveconference/AsyncEndActiveConference.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.EndActiveConferenceRequest ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.protobuf.Empty ; public class AsyncEndActiveConference { public static void main ( String [] args ) throws Exception { asyncEndActiveConference (); } public static void asyncEndActiveConference () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { EndActiveConferenceRequest request = EndActiveConferenceRequest . newBuilder () . setName ( SpaceName . of ( "[SPACE]" ). toString ()) . build (); ApiFuture<Empty> future = spacesServiceClient . endActiveConferenceCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js packages/google-apps-meet/samples/generated/v2/spaces service.end active conference.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to update a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.UpdateSpaceRequest ; import com.google.protobuf.FieldMask ; public class AsyncUpdateSpace { public static void main ( String [] args ) throws Exception { asyncUpdateSpace (); } public static void asyncUpdateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { UpdateSpaceRequest request = UpdateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/getspace/AsyncGetSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.GetSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncGetSpace { public static void main ( String [] args ) throws Exception { asyncGetSpace (); } public static void asyncGetSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { GetSpaceRequest request = GetSpaceRequest . newBuilder (). setName ( SpaceName . of ( "[SPACE]" ). toString ()). build (); ApiFuture<Space> future = spacesServiceClient . getSpaceCallable (). futureCall ( request ); // Do something.

### Work with artifacts \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The following code sample shows how to list all transcript entries in a transcript: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listtranscriptentries/AsyncListTranscriptEntries.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListTranscriptEntriesRequest ; import com.google.apps.meet.v2.TranscriptEntry ; import com.google.apps.meet.v2.TranscriptName ; public class AsyncListTranscriptEntries { public static void main ( String [] args ) throws Exception { asyncListTranscriptEntries (); } public static void asyncListTranscriptEntries () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListTranscriptEntriesRequest request = ListTranscriptEntriesRequest . newBuilder () . setParent ( TranscriptName . of ( "[CONFERENCE RECORD]" , "[TRANSCRIPT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<TranscriptEntry> future = conferenceRecordsServiceClient . listTranscriptEntriesPagedCallable (). futureCall ( request ); // Do something. for ( TranscriptEntry element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list transcript entries.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all transcripts in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listtranscripts/AsyncListTranscripts.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListTranscriptsRequest ; import com.google.apps.meet.v2.Transcript ; public class AsyncListTranscripts { public static void main ( String [] args ) throws Exception { asyncListTranscripts (); } public static void asyncListTranscripts () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListTranscriptsRequest request = ListTranscriptsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Transcript> future = conferenceRecordsServiceClient . listTranscriptsPagedCallable (). futureCall ( request ); // Do something. for ( Transcript element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list transcripts.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all recordings in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listrecordings/AsyncListRecordings.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListRecordingsRequest ; import com.google.apps.meet.v2.Recording ; public class AsyncListRecordings { public static void main ( String [] args ) throws Exception { asyncListRecordings (); } public static void asyncListRecordings () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListRecordingsRequest request = ListRecordingsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Recording> future = conferenceRecordsServiceClient . listRecordingsPagedCallable (). futureCall ( request ); // Do something. for ( Recording element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list recordings.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to retrieve a specific transcript entry: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/gettranscriptentry/AsyncGetTranscriptEntry.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetTranscriptEntryRequest ; import com.google.apps.meet.v2.TranscriptEntry ; import com.google.apps.meet.v2.TranscriptEntryName ; public class AsyncGetTranscriptEntry { public static void main ( String [] args ) throws Exception { asyncGetTranscriptEntry (); } public static void asyncGetTranscriptEntry () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetTranscriptEntryRequest request = GetTranscriptEntryRequest . newBuilder () . setName ( TranscriptEntryName . of ( "[CONFERENCE RECORD]" , "[TRANSCRIPT]" , "[ENTRY]" ) . toString ()) . build (); ApiFuture<TranscriptEntry> future = conferenceRecordsServiceClient . getTranscriptEntryCallable (). futureCall ( request ); // Do something.

