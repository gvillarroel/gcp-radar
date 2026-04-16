---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.837Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing exception error codes"
feature_slug: "live-sharing-exception-error-codes"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/participants"
  - "https://developers.google.com/workspace/meet/api/guides/quickstart/java"
  - "https://developers.google.com/workspace/meet/api/guides/artifacts"
  - "https://developers.google.com/workspace/meet/api/guides/quickstart/python"
keywords:
  - "live"
  - "sharing"
  - "exception"
  - "error"
  - "codes"
  - "livesharingexception"
  - "can"
  - "now"
---

# Live Sharing exception error codes

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

LiveSharingException can now include canonical error codes such as MEET_VERSION_UNSUPPORTED.

## Extended Definition

LiveSharingException can now include canonical error codes such as MEET_VERSION_UNSUPPORTED.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- [https://developers.google.com/workspace/meet/api/guides/quickstart/java](https://developers.google.com/workspace/meet/api/guides/quickstart/java)
- [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- [https://developers.google.com/workspace/meet/api/guides/quickstart/python](https://developers.google.com/workspace/meet/api/guides/quickstart/python)

## Supporting Pages

### Work with participants \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't know the participant session name, you can list all participant sessions of a participant using the list method.
- If you don't know the participant name, you can list all participant names using the list method.
- The following code sample shows how to list all participant sessions in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listparticipantsessions/AsyncListParticipantSessions.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListParticipantSessionsRequest ; import com.google.apps.meet.v2.ParticipantName ; import com.google.apps.meet.v2.ParticipantSession ; public class AsyncListParticipantSessions { public static void main ( String [] args ) throws Exception { asyncListParticipantSessions (); } public static void asyncListParticipantSessions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListParticipantSessionsRequest request = ListParticipantSessionsRequest . newBuilder () . setParent ( ParticipantName . of ( "[CONFERENCE RECORD]" , "[PARTICIPANT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<ParticipantSession> future = conferenceRecordsServiceClient . listParticipantSessionsPagedCallable (). futureCall ( request ); // Do something. for ( ParticipantSession element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list participant sessions.js View on GitHub // Copyright 2026 Google LLC // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // This file is automatically generated by gapic-generator-typescript. // https://github.com/googleapis/gapic-generator-typescript // All changes to this file may be overwritten. 'use strict' ; function main ( parent ) { / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to list all participants in a conference record: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/conferencerecordsservice/listparticipants/AsyncListParticipants.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.ConferenceRecordName ; import com.google.apps.meet.v2.ConferenceRecordsServiceClient ; import com.google.apps.meet.v2.ListParticipantsRequest ; import com.google.apps.meet.v2.Participant ; public class AsyncListParticipants { public static void main ( String [] args ) throws Exception { asyncListParticipants (); } public static void asyncListParticipants () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ConferenceRecordsServiceClient conferenceRecordsServiceClient = ConferenceRecordsServiceClient . create ()) { ListParticipantsRequest request = ListParticipantsRequest . newBuilder () . setParent ( ConferenceRecordName . of ( "[CONFERENCE RECORD]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Participant> future = conferenceRecordsServiceClient . listParticipantsPagedCallable (). futureCall ( request ); // Do something. for ( Participant element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js packages/google-apps-meet/samples/generated/v2/conference records service.list participants.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.

### Java quickstart \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/quickstart/java](https://developers.google.com/workspace/meet/api/guides/quickstart/java)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Files . exists ( pathFor ( id ))) { return ; } Files . delete ( pathFor ( id )); } }; / Initialize a UserAuthorizer for local authorization. @param callbackUri @return / private static UserAuthorizer getAuthorizer ( URI callbackUri ) throws IOException { // Load client secrets. try ( InputStream in = MeetQuickstart . class . getResourceAsStream ( CREDENTIALS FILE PATH )) { if ( in == null ) { throw new FileNotFoundException ( "Resource not found: " + CREDENTIALS FILE PATH ); } ClientId clientId = ClientId . fromStream ( in ); UserAuthorizer authorizer = UserAuthorizer . newBuilder () . setClientId ( clientId ) . setCallbackUri ( callbackUri ) . setScopes ( SCOPES ) . setPKCEProvider ( new DefaultPKCEProvider () { // Temporary fix for https://github.com/googleapis/google-auth-library-java/issues/1373 @Override public String getCodeChallenge () { return super . getCodeChallenge (). split ( "=" ) [ 0 ] ; } }) . setTokenStore ( TOKEN STORE ). build (); return authorizer ; } } / Run the OAuth2 flow for local/installed app. @return An authorized Credential object. @throws IOException If the credentials.json file cannot be found. / private static Credentials getCredentials () throws Exception { LocalServerReceiver receiver = new LocalServerReceiver .
- Credentials credentials = getCredentials (); SpacesServiceSettings settings = SpacesServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( credentials )) . build (); try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ( settings )) { CreateSpaceRequest request = CreateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . build (); Space response = spacesServiceClient . createSpace ( request ); System . out . printf ( "Space created: %s\n" , response . getMeetingUri ()); } catch ( IOException e ) { // TODO(developer): Handle errors e . printStackTrace (); } } } Run the sample Run the sample: gradle run The first time you run the sample, it prompts you to authorize access: If you're not already signed in to your Google Account, sign in when prompted.
- For now, you can skip adding scopes.
- Include the following code in your new Java file: meet/quickstart/src/main/java/MeetQuickstart.java View on GitHub import java.awt.Desktop ; import java.io.FileNotFoundException ; import java.io.IOException ; import java.io.InputStream ; import java.net.URI ; import java.net.URL ; import java.nio.file.Files ; import java.nio.file.Path ; import java.nio.file.Paths ; import java.util.Collections ; import java.util.List ; import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ; import com.google.api.gax.core.FixedCredentialsProvider ; import com.google.apps.meet.v2.CreateSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.SpacesServiceSettings ; import com.google.auth.Credentials ; import com.google.auth.oauth2.ClientId ; import com.google.auth.oauth2.DefaultPKCEProvider ; import com.google.auth.oauth2.TokenStore ; import com.google.auth.oauth2.UserAuthorizer ; / class to demonstrate use of Drive files list API / public class MeetQuickstart { / Directory to store authorization tokens for this application. / private static final String TOKENS DIRECTORY PATH = "tokens" ; / Global instance of the scopes required by this quickstart.

### Work with artifacts \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- If you don't know the transcript entry name, you can list all transcript entry names using the list method.
- If you don't know the name of the smart note, you can list all smart notes files using the list method.
- If you don't know the transcript name, you can list all transcript names using the list method.
- If you don't know the recording name, you can list all recording names using the list method.

### Python quickstart \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/quickstart/python](https://developers.google.com/workspace/meet/api/guides/quickstart/python)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateSpaceRequest () response = client . create space ( request = request ) print ( f 'Space created: { response . meeting uri } ' ) except Exception as error : TODO(developer) - Handle errors from Meet API. print ( f 'An error occurred: { error } ' ) if name == ' main ' : main () Run the sample In your working directory, build and run the sample: python3 quickstart . py The first time you run the sample, it prompts you to authorize access: If you're not already signed in to your Google Account, sign in when prompted.
- For now, you can skip adding scopes.
- Go to Branding If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access .
- In User support email , choose a support email address where users can contact you if they have questions about their consent.

