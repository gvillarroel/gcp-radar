---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.749Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing participant metadata"
feature_slug: "live-sharing-participant-metadata"
latest_feature_date: "2022-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions"
  - "https://developers.google.com/workspace/meet/api/guides/participants"
keywords:
  - "live"
  - "sharing"
  - "participant"
  - "metadata"
  - "the"
  - "sdk"
  - "adds"
  - "an"
---

# Live Sharing participant metadata

Product: Google Meet
Coverage: LOW

## Step 02 Summary

The SDK adds an API for setting participant metadata in Live Sharing sessions.

## Extended Definition

The SDK adds an API for setting participant metadata in Live Sharing sessions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)
- [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)

## Supporting Pages

### "Method: conferenceRecords.participants.participantSessions.get \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request GET https://meet.googleapis.com/v2/{name=conferenceRecords/ /participants/ /participantSessions/ } The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains an instance of ParticipantSession .
- Resource name of the participant.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]

### "Method: conferenceRecords.participants.participantSessions.list \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/list)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "participantSessions" : [ { object ( ParticipantSession ) } ] , "nextPageToken" : string } Fields participantSessions[] object ( ParticipantSession ) List of participants in one page. nextPageToken string Token to be circulated back for further List call if current List doesn't include all the participants.
- The following are the filterable fields: start time end time For example, end time IS NULL returns active participant sessions in the conference record.
- HTTP request GET https://meet.googleapis.com/v2/{parent=conferenceRecords/ /participants/ }/participantSessions The URL uses gRPC Transcoding syntax.
- However, when the fields request parameter is omitted this API defaults to 'participantsessions/ , nextPageToken' .

### "REST Resource: conferenceRecords.participants.participantSessions \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- That means if a user joins a space multiple times from the same device, they're assigned different IDs, and are also be treated as different participant sessions.
- Methods get Gets a participant session by participant session ID. list Lists the participant sessions of a participant in a conference record.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
- Home Google Workspace Google Meet Reference Send feedback REST Resource: conferenceRecords.participants.participantSessions Stay organized with collections Save and categorize content based on your preferences.

### Work with participants \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows how to list all participant sessions in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listparticipantsessions/AsyncListParticipantSessions.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListParticipantSessionsRequest ; import com.google.apps.meet.v2.ParticipantName ; import com.google.apps.meet.v2.ParticipantSession ; public class AsyncListParticipantSessions { public static void main ( String [] args ) throws Exception { asyncListParticipantSessions (); } public static void asyncListParticipantSessions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListParticipantSessionsRequest request = ListParticipantSessionsRequest . newBuilder () . setParent ( ParticipantName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<ParticipantSession> future = conferenceRecordsServiceClient . listParticipantSessionsPagedCallable (). futureCall ( request ); // Do something. for ( ParticipantSession element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list participant sessions.js View on GitHub // Copyright 2026 Google LLC // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // This file is automatically generated by gapic-generator-typescript. // https://github.com/googleapis/gapic-generator-typescript // All changes to this file may be overwritten. 'use strict' ; function main ( parent ) { / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all participants in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listparticipants/AsyncListParticipants.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListParticipantsRequest ; import com.google.apps.meet.v2.Participant ; public class AsyncListParticipants { public static void main ( String [] args ) throws Exception { asyncListParticipants (); } public static void asyncListParticipants () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListParticipantsRequest request = ListParticipantsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Participant> future = conferenceRecordsServiceClient . listParticipantsPagedCallable (). futureCall ( request ); // Do something. for ( Participant element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list participants.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to retrieve a specific participant session: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/getparticipantsession/AsyncGetParticipantSession.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetParticipantSessionRequest ; import com.google.apps.meet.v2.ParticipantSession ; import com.google.apps.meet.v2.ParticipantSessionName ; public class AsyncGetParticipantSession { public static void main ( String [] args ) throws Exception { asyncGetParticipantSession (); } public static void asyncGetParticipantSession () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetParticipantSessionRequest request = GetParticipantSessionRequest . newBuilder () . setName ( ParticipantSessionName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" , "[PARTICIPANT SESSION]" ) . toString ()) . build (); ApiFuture<ParticipantSession> future = conferenceRecordsServiceClient . getParticipantSessionCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a specific participant: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/getparticipant/AsyncGetParticipant.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.GetParticipantRequest ; import com.google.apps.meet.v2.Participant ; import com.google.apps.meet.v2.ParticipantName ; public class AsyncGetParticipant { public static void main ( String [] args ) throws Exception { asyncGetParticipant (); } public static void asyncGetParticipant () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { GetParticipantRequest request = GetParticipantRequest . newBuilder () . setName ( ParticipantName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" ). toString ()) . build (); ApiFuture<Participant> future = conferenceRecordsServiceClient . getParticipantCallable (). futureCall ( request ); // Do something.

