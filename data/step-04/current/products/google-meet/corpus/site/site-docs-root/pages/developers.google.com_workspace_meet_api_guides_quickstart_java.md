---
title: "Java quickstart \_|\_ Google Meet \_|\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/guides/quickstart/java
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/guides/overview
source_metadata:
  url: https://developers.google.com/workspace/meet/api/guides/quickstart/java
  title: "Java quickstart \_|\_ Google Meet \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Guides
Send feedback
Java quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Create a Java command-line application that makes requests to the Google Meet API.
Quickstarts explain how to set up and run an app that calls a
Google Workspace API. This quickstart uses a
simplified authentication approach that is appropriate for a testing
environment. For a production environment, we recommend learning about
authentication and authorization
before
choosing the access credentials
that are appropriate for your app.
This quickstart uses Google Workspace's recommended API client libraries
to handle some details of the authentication and authorization flow.
Objectives
Set up your environment.
Set up the sample.
Run the sample.
Prerequisites
Java 11 or greater.
Gradle 7.0 or greater .
A Google Cloud project .
A Google Workspace account with Google Meet enabled.
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Meet API.
Enable the API
Configure the OAuth consent screen
If you're using a new Google Cloud project to complete this quickstart, configure
the OAuth consent screen. If you've already
completed this step for your Cloud project, skip to the next section.
In the Google API Console, go to Menu menu
> Google Auth platform
> Branding .
Go to Branding
If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access . If you see a message that says Google Auth platform not configured yet , click Get Started :
Under App Information , in App name , enter a name for the app.
In User support email , choose a support email address where users can contact you if they have questions about their consent.
Click Next .
Under Audience , select Internal .
Click Next .
Under Contact Information , enter an Email address where you can be notified about any changes to your project.
Click Next .
Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy .
Click Continue .
Click Create .
For now, you can skip adding scopes.
In the future, when you create an app for use outside of your
Google Workspace organization, you must change the User type to External . Then
add the authorization scopes that your app requires. To learn more, see the full
Configure OAuth consent guide.
Authorize credentials for a desktop application
To authenticate end users and access user data in your app, you need to
create one or more OAuth 2.0 Client IDs. A client ID is used to identify a
single app to Google's OAuth servers. If your app runs on multiple platforms,
you must create a separate client ID for each platform.
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Desktop app .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Save the downloaded JSON file as credentials.json , and move the
file to your working directory.
Prepare the workspace
In your working directory, create a new project structure:
gradle init --type basic
mkdir -p src/main/java src/main/resources
In the src/main/resources/ directory, copy the credentials.json file
that you previously downloaded.
Open the default build.gradle file and replace its contents with the
following code:
meet/quickstart/build.gradle
View on GitHub
apply plugin: 'java'
apply plugin: 'application'
mainClassName = 'MeetQuickstart'
sourceCompatibility = 11
targetCompatibility = 11
version = '1.0'
repositories {
mavenCentral ()
}
dependencies {
implementation 'com.google.cloud:google-cloud-meet:0.3.0'
implementation 'com.google.auth:google-auth-library-oauth2-http:1.19.0'
implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1'
}
Set up the sample
In the src/main/java/ directory, create a new Java file with a name that
matches the mainClassName value in your build.gradle file.
Include the following code in your new Java file:
meet/quickstart/src/main/java/MeetQuickstart.java
View on GitHub
import java.awt.Desktop ;
import java.io.FileNotFoundException ;
import java.io.IOException ;
import java.io.InputStream ;
import java.net.URI ;
import java.net.URL ;
import java.nio.file.Files ;
import java.nio.file.Path ;
import java.nio.file.Paths ;
import java.util.Collections ;
import java.util.List ;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ;
import com.google.api.gax.core.FixedCredentialsProvider ;
import com.google.apps.meet.v2.CreateSpaceRequest ;
import com.google.apps.meet.v2.Space ;
import com.google.apps.meet.v2.SpacesServiceClient ;
import com.google.apps.meet.v2.SpacesServiceSettings ;
import com.google.auth.Credentials ;
import com.google.auth.oauth2.ClientId ;
import com.google.auth.oauth2.DefaultPKCEProvider ;
import com.google.auth.oauth2.TokenStore ;
import com.google.auth.oauth2.UserAuthorizer ;
/* class to demonstrate use of Drive files list API */
public class MeetQuickstart {
/**
* Directory to store authorization tokens for this application.
*/
private static final String TOKENS_DIRECTORY_PATH = "tokens" ;
/**
* Global instance of the scopes required by this quickstart.
* If modifying these scopes, delete your previously saved tokens/ folder.
*/
private static final List<String> SCOPES = Collections
. singletonList ( "https://www.googleapis.com/auth/meetings.space.created" );
private static final String CREDENTIALS_FILE_PATH = "/credentials.json" ;
private static final String USER = "default" ;
// Simple file-based token storage for storing oauth tokens
private static final TokenStore TOKEN_STORE = new TokenStore () {
private Path pathFor ( String id ) {
return Paths . get ( "." , TOKENS_DIRECTORY_PATH , id + ".json" );
}
@Override
public String load ( String id ) throws IOException {
if ( ! Files . exists ( pathFor ( id ))) {
return null ;
}
return Files . readString ( pathFor ( id ));
}
@Override
public void store ( String id , String token ) throws IOException {
Files . createDirectories ( Paths . get ( "." , TOKENS_DIRECTORY_PATH ));
Files . writeString ( pathFor ( id ), token );
}
@Override
public void delete ( String id ) throws IOException {
if ( ! Files . exists ( pathFor ( id ))) {
return ;
}
Files . delete ( pathFor ( id ));
}
};
/**
* Initialize a UserAuthorizer for local authorization.
*
* @param callbackUri
* @return
*/
private static UserAuthorizer getAuthorizer ( URI callbackUri ) throws IOException {
// Load client secrets.
try ( InputStream in = MeetQuickstart . class . getResourceAsStream ( CREDENTIALS_FILE_PATH )) {
if ( in == null ) {
throw new FileNotFoundException ( "Resource not found: " + CREDENTIALS_FILE_PATH );
}
ClientId clientId = ClientId . fromStream ( in );
UserAuthorizer authorizer = UserAuthorizer . newBuilder ()
. setClientId ( clientId )
. setCallbackUri ( callbackUri )
. setScopes ( SCOPES )
. setPKCEProvider ( new DefaultPKCEProvider () {
// Temporary fix for https://github.com/googleapis/google-auth-library-java/issues/1373
@Override
public String getCodeChallenge () {
return super . getCodeChallenge (). split ( "=" ) [ 0 ] ;
}
})
. setTokenStore ( TOKEN_STORE ). build ();
return authorizer ;
}
}
/**
* Run the OAuth2 flow for local/installed app.
*
* @return An authorized Credential object.
* @throws IOException If the credentials.json file cannot be found.
*/
private static Credentials getCredentials ()
throws Exception {
LocalServerReceiver receiver = new LocalServerReceiver . Builder (). build ();
try {
URI callbackUri = URI . create ( receiver . getRedirectUri ());
UserAuthorizer authorizer = getAuthorizer ( callbackUri );
Credentials credentials = authorizer . getCredentials ( USER );
if ( credentials != null ) {
return credentials ;
}
URL authorizationUrl = authorizer . getAuthorizationUrl ( USER , "" , null );
if ( Desktop . isDesktopSupported () &&
Desktop . getDesktop (). isSupported ( Desktop . Action . BROWSE )) {
Desktop . getDesktop (). browse ( authorizationUrl . toURI ());
} else {
System . out . printf ( "Open the following URL to authorize access: %s\n" ,
authorizationUrl . toExternalForm ());
}
String code = receiver . waitForCode ();
credentials = authorizer . getAndStoreCredentialsFromCode ( USER , code , callbackUri );
return credentials ;
} finally {
receiver . stop ();
}
}
public static void main ( String ... args ) throws Exception {
// Override default service settings to supply user credentials.
Credentials credentials = getCredentials ();
SpacesServiceSettings settings = SpacesServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( credentials ))
. build ();
try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ( settings )) {
CreateSpaceRequest request = CreateSpaceRequest . newBuilder ()
. setSpace ( Space . newBuilder (). build ())
. build ();
Space response = spacesServiceClient . createSpace ( request );
System . out . printf ( "Space created: %s\n" , response . getMeetingUri ());
} catch ( IOException e ) {
// TODO(developer): Handle errors
e . printStackTrace ();
}
}
}
Run the sample
Run the sample:
gradle run
The first time you run the sample, it prompts you to authorize access:
If you're not already signed in to your Google Account, sign in when prompted. If
you're signed in to multiple accounts, select one account to use for authorization.
Click Accept .
Your Java application runs and calls the Google Meet API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Google Meet API Javadoc documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
