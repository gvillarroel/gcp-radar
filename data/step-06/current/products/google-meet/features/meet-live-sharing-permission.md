---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:41:32.749Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "MEET_LIVE_SHARING permission"
feature_slug: "meet-live-sharing-permission"
latest_feature_date: "2022-07-26"
deprecation_date: "2022-07-26"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
keywords:
  - "meet"
  - "live"
  - "sharing"
  - "permission"
  - "the"
  - "android"
  - "is"
  - "obsolete"
---

# MEET_LIVE_SHARING permission

Product: Google Meet
Coverage: LOW

## Step 02 Summary

The MEET_LIVE_SHARING Android permission is obsolete and removed from the manifest; deprecated on 2022-07-26.

## Extended Definition

The MEET_LIVE_SHARING Android permission is obsolete and removed from the manifest; deprecated on 2022-07-26.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Grant access to publish messages to your topic: gcloud pubsub topics add-iam-policy-binding workspace-events --member='serviceAccount:meet-api-event-push@system.gserviceaccount.com' --role='roles/pubsub.publisher' It can take a few minutes to update the permissions for your topic.
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- Message ) - > None : """Handles an incoming event from the Google Cloud Pub/Sub API.""" event type = message . attributes . get ( "ce-type" ) handler = { "google.workspace.meet.conference.v2.started" : on conference started , "google.workspace.meet.conference.v2.ended" : on conference ended , "google.workspace.meet.participant.v2.joined" : on participant joined , "google.workspace.meet.participant.v2.left" : on participant left , "google.workspace.meet.recording.v2.fileGenerated" : on recording ready , "google.workspace.meet.transcript.v2.fileGenerated" : on transcript ready , } . get ( event type ) try : if handler is not None : handler ( message ) message . ack () except Exception as error : print ( "Unable to process event" ) print ( error ) def listen for events ( subscription name : str = None ): """Subscribe to events on the subscription.""" subscriber = pubsub v1 .
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Meet REST API scopes Authorization scopes are the permissions that you request users to authorize for your app to access the meeting content.
- Restricted The following Meet-adjacent OAuth 2.0 scope resides in the Google Drive API scopes list : Scope code Description Usage https://www.googleapis.com/auth/drive.meet.readonly View Drive files created or edited by Google Meet.
- The Meet REST API supports the following OAuth 2.0 scopes: Scope code Description Usage https://www.googleapis.com/auth/meetings.space.settings Edit and see the settings for all of your Google Meet calls.
- By authenticating on a user's behalf, the app has the same permissions as that user and can perform actions as if they were performed by that user.

### "Configure meeting spaces and members \_|\_ Google Meet \_|\_ Google for\

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Set moderation and meeting access You can set how users join a meeting, the moderation modes, the feature restrictions, and the permissions users receive when they join a meeting, through the SpaceConfig object.
- Set to HOSTS ONLY to apply the permissions to both the meeting organizer and co-host, or NO RESTRICTION to apply to all participants.
- The restrictions define who has permission within the meeting space to send chat messages or reactions, or to share their screen.
- These users can join the meeting space without requesting permission to connect (also known as "knocking").

### Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The following code sample shows how to end an active conference: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/endactiveconference/AsyncEndActiveConference.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.EndActiveConferenceRequest ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.protobuf.Empty ; public class AsyncEndActiveConference { public static void main ( String [] args ) throws Exception { asyncEndActiveConference (); } public static void asyncEndActiveConference () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { EndActiveConferenceRequest request = EndActiveConferenceRequest . newBuilder () . setName ( SpaceName . of ( "[SPACE]" ). toString ()) . build (); ApiFuture<Empty> future = spacesServiceClient . endActiveConferenceCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js packages/google-apps-meet/samples/generated/v2/spaces service.end active conference.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to update a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.UpdateSpaceRequest ; import com.google.protobuf.FieldMask ; public class AsyncUpdateSpace { public static void main ( String [] args ) throws Exception { asyncUpdateSpace (); } public static void asyncUpdateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { UpdateSpaceRequest request = UpdateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/getspace/AsyncGetSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.GetSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncGetSpace { public static void main ( String [] args ) throws Exception { asyncGetSpace (); } public static void asyncGetSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { GetSpaceRequest request = GetSpaceRequest . newBuilder (). setName ( SpaceName . of ( "[SPACE]" ). toString ()). build (); ApiFuture<Space> future = spacesServiceClient . getSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to create a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/createspace/AsyncCreateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.CreateSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncCreateSpace { public static void main ( String [] args ) throws Exception { asyncCreateSpace (); } public static void asyncCreateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { CreateSpaceRequest request = CreateSpaceRequest . newBuilder (). setSpace ( Space . newBuilder (). build ()). build (); ApiFuture<Space> future = spacesServiceClient . createSpaceCallable (). futureCall ( request ); // Do something.

