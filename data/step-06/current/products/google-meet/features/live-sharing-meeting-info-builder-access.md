---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.838Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing meeting info builder access"
feature_slug: "live-sharing-meeting-info-builder-access"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
  - "https://developers.google.com/workspace/meet/api/guides/artifacts"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
keywords:
  - "live"
  - "sharing"
  - "meeting"
  - "info"
  - "builder"
  - "access"
  - "the"
  - "sdk"
---

# Live Sharing meeting info builder access

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

The SDK exposes LiveSharingMeetingInfo.Builder to API consumers for testing.

## Extended Definition

The SDK exposes LiveSharingMeetingInfo.Builder to API consumers for testing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)

## Supporting Pages

### Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows how to update a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.UpdateSpaceRequest ; import com.google.protobuf.FieldMask ; public class AsyncUpdateSpace { public static void main ( String [] args ) throws Exception { asyncUpdateSpace (); } public static void asyncUpdateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { UpdateSpaceRequest request = UpdateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/getspace/AsyncGetSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.GetSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncGetSpace { public static void main ( String [] args ) throws Exception { asyncGetSpace (); } public static void asyncGetSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { GetSpaceRequest request = GetSpaceRequest . newBuilder (). setName ( SpaceName . of ( "[SPACE]" ). toString ()). build (); ApiFuture<Space> future = spacesServiceClient . getSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to create a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/createspace/AsyncCreateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.CreateSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncCreateSpace { public static void main ( String [] args ) throws Exception { asyncCreateSpace (); } public static void asyncCreateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { CreateSpaceRequest request = CreateSpaceRequest . newBuilder (). setSpace ( Space . newBuilder (). build ()). build (); ApiFuture<Space> future = spacesServiceClient . createSpaceCallable (). futureCall ( request ); // Do something.
- For more information, see How Meet identifies a meeting space (https://developers.google.com/meet/api/guides/meeting-spaces#identify-meeting-space). / // const name = 'abc123' // Imports the Meet library const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ; // Instantiates a client const meetClient = new SpacesServiceClient (); async function callEndActiveConference () { // Construct request const request = { name , }; // Run request const response = await meetClient . endActiveConference ( request ); console . log ( response ); } callEndActiveConference (); Python packages/google-apps-meet/samples/generated samples/meet v2 generated spaces service end active conference async.py View on GitHub This snippet has been automatically generated and should be regarded as a code template only.

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Learn about meeting codes in Google Meet . phoneAccess Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- The phoneAccess object contains information required to dial into a conference including the regional phone numbers for the meeting space and a PIN code specific to that phone number.
- You can also access this information for up to 30 days after the conference. (Optional) End the conference .
- The Session Initiation Protocol (SIP) access methods for this meeting space.

### Work with artifacts \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows how to list all transcript entries in a transcript: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listtranscriptentries/AsyncListTranscriptEntries.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListTranscriptEntriesRequest ; import com.google.apps.meet.v2.TranscriptEntry ; import com.google.apps.meet.v2.TranscriptName ; public class AsyncListTranscriptEntries { public static void main ( String [] args ) throws Exception { asyncListTranscriptEntries (); } public static void asyncListTranscriptEntries () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListTranscriptEntriesRequest request = ListTranscriptEntriesRequest . newBuilder () . setParent ( TranscriptName . of ( "[CONFERENCE RECORD]" , "[TRANSCRIPT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<TranscriptEntry> future = conferenceRecordsServiceClient . listTranscriptEntriesPagedCallable (). futureCall ( request ); // Do something. for ( TranscriptEntry element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list transcript entries.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all transcripts in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listtranscripts/AsyncListTranscripts.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListTranscriptsRequest ; import com.google.apps.meet.v2.Transcript ; public class AsyncListTranscripts { public static void main ( String [] args ) throws Exception { asyncListTranscripts (); } public static void asyncListTranscripts () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListTranscriptsRequest request = ListTranscriptsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Transcript> future = conferenceRecordsServiceClient . listTranscriptsPagedCallable (). futureCall ( request ); // Do something. for ( Transcript element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list transcripts.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all recordings in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listrecordings/AsyncListRecordings.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListRecordingsRequest ; import com.google.apps.meet.v2.Recording ; public class AsyncListRecordings { public static void main ( String [] args ) throws Exception { asyncListRecordings (); } public static void asyncListRecordings () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListRecordingsRequest request = ListRecordingsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Recording> future = conferenceRecordsServiceClient . listRecordingsPagedCallable (). futureCall ( request ); // Do something. for ( Recording element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list recordings.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to retrieve a specific transcript entry: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/gettranscriptentry/AsyncGetTranscriptEntry.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetTranscriptEntryRequest ; import com.google.apps.meet.v2.TranscriptEntry ; import com.google.apps.meet.v2.TranscriptEntryName ; public class AsyncGetTranscriptEntry { public static void main ( String [] args ) throws Exception { asyncGetTranscriptEntry (); } public static void asyncGetTranscriptEntry () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetTranscriptEntryRequest request = GetTranscriptEntryRequest . newBuilder () . setName ( TranscriptEntryName . of ( "[CONFERENCE RECORD]" , "[TRANSCRIPT]" , "[ENTRY]" ) . toString ()) . build (); ApiFuture<TranscriptEntry> future = conferenceRecordsServiceClient . getTranscriptEntryCallable (). futureCall ( request ); // Do something.

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This code informs the user that the app wishes to act on their behalf and, if allowed, uses your app's unique credentials to obtain an access token from Google to access data or perform operations.
- Meet REST API scopes Authorization scopes are the permissions that you request users to authorize for your app to access the meeting content.
- Sensitive https://www.googleapis.com/auth/meetings.space.readonly Allow apps to read metadata about any meeting space the user has access to.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

