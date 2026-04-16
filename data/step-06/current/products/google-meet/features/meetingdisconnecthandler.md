---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.835Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "MeetingDisconnectHandler"
feature_slug: "meetingdisconnecthandler"
latest_feature_date: "2023-02-22"
deprecation_date: "2023-02-22"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/events-overview"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
  - "https://developers.google.com/workspace/meet/api/guides/overview"
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
Coverage: MEDIUM

## Step 02 Summary

MeetingDisconnectHandler was deprecated and developers were directed to use LiveSharingSessionDelegate instead; deprecated on 2023-02-22.

## Extended Definition

MeetingDisconnectHandler was deprecated and developers were directed to use LiveSharingSessionDelegate instead; deprecated on 2023-02-22.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)

## Supporting Pages

### Respond to events from Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/events-overview](https://developers.google.com/workspace/meet/api/guides/events-overview)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Meet uses events to deliver information to your app about the type of activity that occurred, and the Meet REST API resource that was affected.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Related topics Google Workspace Events API overview Create a Google Workspace subscription Subscribe to Google Meet events Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Limitations Calendar invitees and other participants invited to a conference can only receive the following events: google.workspace.meet.conference.v2.started and google.workspace.meet.transcript.v2.fileGenerated .

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

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Related topics Create and manage meeting spaces Configure meeting spaces and members Join a meeting Countries where you can use a phone with Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The phoneAccess object contains information required to dial into a conference including the regional phone numbers for the meeting space and a PIN code specific to that phone number.
- Warning: A meetingCode shouldn't be stored long term as it can become dissociated from a meeting space and it can be reused for different meeting spaces in the future.

### Google Meet REST API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Some examples of things you might want to use Meet REST API for include the following: Sales and account management Retrieve meeting and participant information for record purposes.
- Common terms The following is a list of common terms used in this API: Artifact A file generated by Meet in response to a conference , such as recordings and transcripts .
- Related topics To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to Develop on Google Workspace .

