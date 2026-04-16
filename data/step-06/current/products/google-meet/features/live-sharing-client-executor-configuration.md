---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.837Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing client executor configuration"
feature_slug: "live-sharing-client-executor-configuration"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces"
  - "https://developers.google.com/workspace/meet/api/guides/quickstart/java"
  - "https://developers.google.com/workspace/meet/api/guides/quickstart/nodejs"
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
Coverage: MEDIUM

## Step 02 Summary

The client factory adds an overload that lets consumers supply executor services.

## Extended Definition

The client factory adds an overload that lets consumers supply executor services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- [https://developers.google.com/workspace/meet/api/guides/quickstart/java](https://developers.google.com/workspace/meet/api/guides/quickstart/java)
- [https://developers.google.com/workspace/meet/api/guides/quickstart/nodejs](https://developers.google.com/workspace/meet/api/guides/quickstart/nodejs)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .
- Enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub with the gcloud services enable command: gcloud services enable meet.googleapis.com workspaceevents.googleapis.com pubsub.googleapis.com Install the Meet REST API client library Follow these steps to install the Meet REST API client library: Run the command: pip install google-apps-meet Edit the main.py file to import the client: from google.apps import meet v2 as meet Create a space Now that the Meet REST API is available, define a function to create a meeting space that can be subscribed to.
- When prompted for authorization, sign in using the same account used in the previous steps. gcloud auth application-default login --impersonate-service-account= SERVICE ACCOUNT EMAIL Install the Pub/Sub client library Use pip to install the client library for Pub/Sub: pip install google-cloud-pubsub Then edit main.py to import the client: from google.cloud import pubsub v1 Create the Google Workspace subscription Add the following code to main.py to define a method for subscribing to Meet events.
- ConferenceRecordsServiceClient ( credentials = USER CREDENTIALS ) Use the parent path of the session to fetch the participant details parsed session path = client . parse participant session path ( session name ) participant resource name = client . participant path ( parsed session path [ "conference record" ], parsed session path [ "participant" ]) return client . get participant ( name = participant resource name ) def on conference started ( message : pubsub v1 . subscriber . message .

### Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Later on the input space can be non-empty when space configuration is introduced. / // const space = {} // Imports the Meet library const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ; // Instantiates a client const meetClient = new SpacesServiceClient (); async function callCreateSpace () { // Construct request const request = { }; // Run request const response = await meetClient . createSpace ( request ); console . log ( response ); } callCreateSpace (); Python packages/google-apps-meet/samples/generated samples/meet v2 generated spaces service create space async.py View on GitHub This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to end an active conference: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/endactiveconference/AsyncEndActiveConference.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.EndActiveConferenceRequest ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.protobuf.Empty ; public class AsyncEndActiveConference { public static void main ( String [] args ) throws Exception { asyncEndActiveConference (); } public static void asyncEndActiveConference () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { EndActiveConferenceRequest request = EndActiveConferenceRequest . newBuilder () . setName ( SpaceName . of ( "[SPACE]" ). toString ()) . build (); ApiFuture<Empty> future = spacesServiceClient . endActiveConferenceCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js packages/google-apps-meet/samples/generated/v2/spaces service.end active conference.js View on GitHub / This snippet has been automatically generated and should be regarded as a code template only.
- The following code sample shows how to update a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.UpdateSpaceRequest ; import com.google.protobuf.FieldMask ; public class AsyncUpdateSpace { public static void main ( String [] args ) throws Exception { asyncUpdateSpace (); } public static void asyncUpdateSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { UpdateSpaceRequest request = UpdateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request ); // Do something.
- The following code sample shows how to retrieve a meeting space: Java java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/getspace/AsyncGetSpace.java View on GitHub import com.google.api.core.ApiFuture ; import com.google.apps.meet.v2.GetSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpaceName ; import com.google.apps.meet.v2.SpacesServiceClient ; public class AsyncGetSpace { public static void main ( String [] args ) throws Exception { asyncGetSpace (); } public static void asyncGetSpace () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) { GetSpaceRequest request = GetSpaceRequest . newBuilder (). setName ( SpaceName . of ( "[SPACE]" ). toString ()). build (); ApiFuture<Space> future = spacesServiceClient . getSpaceCallable (). futureCall ( request ); // Do something.

### Java quickstart \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/quickstart/java](https://developers.google.com/workspace/meet/api/guides/quickstart/java)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Files . exists ( pathFor ( id ))) { return ; } Files . delete ( pathFor ( id )); } }; / Initialize a UserAuthorizer for local authorization. @param callbackUri @return / private static UserAuthorizer getAuthorizer ( URI callbackUri ) throws IOException { // Load client secrets. try ( InputStream in = MeetQuickstart . class . getResourceAsStream ( CREDENTIALS FILE PATH )) { if ( in == null ) { throw new FileNotFoundException ( "Resource not found: " + CREDENTIALS FILE PATH ); } ClientId clientId = ClientId . fromStream ( in ); UserAuthorizer authorizer = UserAuthorizer . newBuilder () . setClientId ( clientId ) . setCallbackUri ( callbackUri ) . setScopes ( SCOPES ) . setPKCEProvider ( new DefaultPKCEProvider () { // Temporary fix for https://github.com/googleapis/google-auth-library-java/issues/1373 @Override public String getCodeChallenge () { return super . getCodeChallenge (). split ( "=" ) [ 0 ] ; } }) . setTokenStore ( TOKEN STORE ). build (); return authorizer ; } } / Run the OAuth2 flow for local/installed app. @return An authorized Credential object. @throws IOException If the credentials.json file cannot be found. / private static Credentials getCredentials () throws Exception { LocalServerReceiver receiver = new LocalServerReceiver .
- Include the following code in your new Java file: meet/quickstart/src/main/java/MeetQuickstart.java View on GitHub import java.awt.Desktop ; import java.io.FileNotFoundException ; import java.io.IOException ; import java.io.InputStream ; import java.net.URI ; import java.net.URL ; import java.nio.file.Files ; import java.nio.file.Path ; import java.nio.file.Paths ; import java.util.Collections ; import java.util.List ; import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ; import com.google.api.gax.core.FixedCredentialsProvider ; import com.google.apps.meet.v2.CreateSpaceRequest ; import com.google.apps.meet.v2.Space ; import com.google.apps.meet.v2.SpacesServiceClient ; import com.google.apps.meet.v2.SpacesServiceSettings ; import com.google.auth.Credentials ; import com.google.auth.oauth2.ClientId ; import com.google.auth.oauth2.DefaultPKCEProvider ; import com.google.auth.oauth2.TokenStore ; import com.google.auth.oauth2.UserAuthorizer ; / class to demonstrate use of Drive files list API / public class MeetQuickstart { / Directory to store authorization tokens for this application. / private static final String TOKENS DIRECTORY PATH = "tokens" ; / Global instance of the scopes required by this quickstart.
- Credentials credentials = getCredentials (); SpacesServiceSettings settings = SpacesServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( credentials )) . build (); try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ( settings )) { CreateSpaceRequest request = CreateSpaceRequest . newBuilder () . setSpace ( Space . newBuilder (). build ()) . build (); Space response = spacesServiceClient . createSpace ( request ); System . out . printf ( "Space created: %s\n" , response . getMeetingUri ()); } catch ( IOException e ) { // TODO(developer): Handle errors e . printStackTrace (); } } } Run the sample Run the sample: gradle run The first time you run the sample, it prompts you to authorize access: If you're not already signed in to your Google Account, sign in when prompted.
- Open the default build.gradle file and replace its contents with the following code: meet/quickstart/build.gradle View on GitHub apply plugin: 'java' apply plugin: 'application' mainClassName = 'MeetQuickstart' sourceCompatibility = 11 targetCompatibility = 11 version = '1.0' repositories { mavenCentral () } dependencies { implementation 'com.google.cloud:google-cloud-meet:0.3.0' implementation 'com.google.auth:google-auth-library-oauth2-http:1.19.0' implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1' } Set up the sample In the src/main/java/ directory, create a new Java file with a name that matches the mainClassName value in your build.gradle file.

### Node.js quickstart \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/quickstart/nodejs](https://developers.google.com/workspace/meet/api/guides/quickstart/nodejs)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the file, paste the following code: meet/quickstart/index.js View on GitHub import path from 'node:path' ; import process from 'node:process' ; import { SpacesServiceClient } from '@google-apps/meet' ; import { authenticate } from '@google-cloud/local-auth' ; // The scope for creating a new meeting space. const SCOPES = [ 'https://www.googleapis.com/auth/meetings.space.created' ]; // The path to the credentials file. const CREDENTIALS PATH = path . join ( process . cwd (), 'credentials.json' ); / Creates a new meeting space. / async function createSpace () { // Authenticate with Google and get an authorized client. const authClient = await authenticate ({ scopes : SCOPES , keyfilePath : CREDENTIALS PATH , }); // Create a new Meet API client. const meetClient = new SpacesServiceClient ({ authClient , }); // Construct the request to create a new space.
- The request body is empty. const request = {}; // Run the request to create the space. const response = await meetClient . createSpace ( request ); // Print the URL of the new meeting. console . log ( Meet URL: ${ response [ 0 ]. meetingUri } ); } await createSpace (); Run the sample In your working directory, run the sample: node .
- Next steps Try the Google Workspace APIs in the APIs explorer Google Meet API Client on GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Install the client library Install the libraries using npm: npm install @google-apps/meet @google-cloud/local-auth@2.1.0 --save Set up the sample In your working directory, create a file named index.js .

