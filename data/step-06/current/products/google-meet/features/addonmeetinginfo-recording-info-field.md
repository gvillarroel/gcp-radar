---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.833Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "AddonMeetingInfo recording info field"
feature_slug: "addonmeetinginfo-recording-info-field"
latest_feature_date: "2023-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings"
  - "https://developers.google.com/workspace/meet/api/guides/artifacts"
keywords:
  - "addonmeetinginfo"
  - "recording"
  - "info"
  - "field"
  - "the"
  - "recordinginfo"
  - "indicates"
  - "whether"
---

# AddonMeetingInfo recording info field

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

The RecordingInfo field indicates whether the current Google Meet call is being recorded.

## Extended Definition

The RecordingInfo field indicates whether the current Google Meet call is being recorded.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings)
- [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- Message ) - > None : """Handles an incoming event from the Google Cloud Pub/Sub API.""" event type = message . attributes . get ( "ce-type" ) handler = { "google.workspace.meet.conference.v2.started" : on conference started , "google.workspace.meet.conference.v2.ended" : on conference ended , "google.workspace.meet.participant.v2.joined" : on participant joined , "google.workspace.meet.participant.v2.left" : on participant left , "google.workspace.meet.recording.v2.fileGenerated" : on recording ready , "google.workspace.meet.transcript.v2.fileGenerated" : on transcript ready , } . get ( event type ) try : if handler is not None : handler ( message ) message . ack () except Exception as error : print ( "Unable to process event" ) print ( error ) def listen for events ( subscription name : str = None ): """Subscribe to events on the subscription.""" subscriber = pubsub v1 .
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### "Method: conferenceRecords.recordings.list \_|\_ Google Meet \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "recordings" : [ { object ( Recording ) } ] , "nextPageToken" : string } Fields recordings[] object ( Recording ) List of recordings in one page. nextPageToken string Token to be circulated back for further List call if current List doesn't include all the recordings.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/meetings.space.created https://www.googleapis.com/auth/meetings.space.readonly For more information, see the Authorization guide .
- HTTP request GET https://meet.googleapis.com/v2/{parent=conferenceRecords/ }/recordings The URL uses gRPC Transcoding syntax.

### "REST Resource: conferenceRecords.recordings \_|\_ Google Meet \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
- Format: conferenceRecords/{conferenceRecord}/recordings/{recording} where {recording} is a 1:1 mapping to each unique recording session during the conference. state enum ( State ) Output only.
- Union field destination . destination can be only one of the following: driveDestination object ( DriveDestination ) Output only.
- Methods get Gets a recording by recording ID. list Lists the recording resources from the conference record.

### Work with artifacts \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recordings The following sections detail how to get information about recordings in a conference record.
- To download the recording or to play it back in a browser, use the object's exportUri field value.
- The following code sample shows how to list all recordings in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listrecordings/AsyncListRecordings.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListRecordingsRequest ; import com.google.apps.meet.v2.Recording ; public class AsyncListRecordings { public static void main ( String [] args ) throws Exception { asyncListRecordings (); } public static void asyncListRecordings () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListRecordingsRequest request = ListRecordingsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Recording> future = conferenceRecordsServiceClient . listRecordingsPagedCallable (). futureCall ( request ); // Do something. for ( Recording element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list recordings.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to retrieve a specific recording: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/getrecording/AsyncGetRecording.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetRecordingRequest ; import com.google.apps.meet.v2.Recording ; import com.google.apps.meet.v2.RecordingName ; public class AsyncGetRecording { public static void main ( String [] args ) throws Exception { asyncGetRecording (); } public static void asyncGetRecording () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetRecordingRequest request = GetRecordingRequest . newBuilder () . setName ( RecordingName . of ( "[CONFERENCE RECORD]" , "[RECORDING]" ). toString ()) . build (); ApiFuture<Recording> future = conferenceRecordsServiceClient . getRecordingCallable (). futureCall ( request ); // Do something.

