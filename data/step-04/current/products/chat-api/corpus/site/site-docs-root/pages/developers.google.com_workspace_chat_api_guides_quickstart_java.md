---
title: "Java quickstart \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/guides/quickstart/java
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/api/guides/quickstart/java
  title: "Java quickstart \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Java quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This quickstart guide explains how to create a Java command-line application that interacts with the Google Chat API using the client libraries.
Before running the sample code, you must enable the Google Chat API, configure the OAuth consent screen, authorize credentials for a desktop application, and configure a Google Chat app in the Google Cloud console.
To run the provided sample code, you'll need Java 1.8 or greater, Gradle 7.0 or greater, and a Google Workspace account with access to Google Chat.
After setting up your environment and configuring the sample code, you can execute it using gradle run , which lists Google Chat spaces based on specified criteria.
This quickstart uses a simplified authentication method for testing; for production environments, consult Google's documentation on authentication and authorization to implement secure practices.
Create a Java command-line application that makes requests to the Google Chat API.
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
A Business or Enterprise Google Workspace account with access to Google Chat .
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Chat API.
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
Configure the Google Chat app
To call the Google Chat API, you must configure a
Google Chat app. For any write requests, Google Chat
attributes the Google Chat app in the UI using
the following information.
In the Google API Console, go to the Chat API Configuration page:
Go to Chat API Configuration page
Under Application info , enter the following information:
In the App name field, enter Chat API quickstart app .
In the Avatar URL field, enter
https://developers.google.com/chat/images/quickstart-app-avatar.png .
In the Description field, enter Quickstart for calling the Chat API .
Under Interactive features , click the Enable interactive features
toggle to the off position to disable interactive features for the
Chat app.
Click Save .
Prepare the workspace
In your working directory, create a new project structure:
gradle init --type basic
mkdir -p src/main/java src/main/resources
In the src/main/resources/ directory, copy the credentials.json file
that you previously downloaded.
Open the default build.gradle file and replace its contents with the
following code:
chat/quickstart/build.gradle
View on GitHub
apply plugin: 'java'
apply plugin: 'application'
mainClassName = 'ChatQuickstart'
sourceCompatibility = 11
targetCompatibility = 11
version = '1.0'
repositories {
mavenCentral ()
}
dependencies {
implementation 'com.google.auth:google-auth-library-oauth2-http:1.23.0'
implementation 'com.google.api-client:google-api-client:1.33.0'
implementation 'com.google.api.grpc:proto-google-cloud-chat-v1:0.8.0'
implementation 'com.google.api:gax:2.48.1'
implementation 'com.google.cloud:google-cloud-chat:0.1.0'
implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1'
}
Set up the sample
In the src/main/java/ directory, create a new Java file with a name that
matches the mainClassName value in your build.gradle file.
Include the following code in your new Java file:
chat/quickstart/src/main/java/ChatQuickstart.java
View on GitHub
import com.google.api.client.auth.oauth2.Credential ;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp ;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow ;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets ;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ;
import com.google.api.client.json.JsonFactory ;
import com.google.api.client.json.gson.GsonFactory ;
import com.google.api.client.util.store.FileDataStoreFactory ;
import com.google.api.gax.core.FixedCredentialsProvider ;
import com.google.auth.Credentials ;
import com.google.auth.oauth2.AccessToken ;
import com.google.auth.oauth2.UserCredentials ;
import com.google.chat.v1.ChatServiceClient ;
import com.google.chat.v1.ChatServiceSettings ;
import com.google.chat.v1.ListSpacesRequest ;
import com.google.chat.v1.Space ;
import com.google.protobuf.util.JsonFormat ;
import java.io.File ;
import java.io.FileNotFoundException ;
import java.io.IOException ;
import java.io.InputStream ;
import java.io.InputStreamReader ;
import java.util.Collections ;
import java.util.Date ;
import java.util.List ;
/* class to demonstrate use of Google Chat API spaces list API */
public class ChatQuickstart {
/** Directory to store authorization tokens for this application. */
private static final String TOKENS_DIRECTORY_PATH = "tokens" ;
/**
* Global instance of the scopes required by this quickstart. If modifying these scopes, delete
* your previously saved tokens/ folder.
*/
private static final List<String> SCOPES =
Collections . singletonList ( "https://www.googleapis.com/auth/chat.spaces.readonly" );
/** Global instance of the JSON factory. */
private static final JsonFactory JSON_FACTORY = GsonFactory . getDefaultInstance ();
private static final String CREDENTIALS_FILE_PATH = "/credentials.json" ;
/**
* Run the OAuth2 flow for local/installed app.
*
* @return An authorized Credential object.
* @throws IOException If the credentials.json file cannot be found.
*/
private static Credentials getCredentials () throws Exception {
// Load client secrets.
InputStream credentialsFileInputStream =
ChatQuickstart . class . getResourceAsStream ( CREDENTIALS_FILE_PATH );
if ( credentialsFileInputStream == null ) {
throw new FileNotFoundException ( "Credentials file resource not found." );
}
GoogleClientSecrets clientSecrets =
GoogleClientSecrets . load ( JSON_FACTORY , new InputStreamReader ( credentialsFileInputStream ));
// Set up authorization code flow.
GoogleAuthorizationCodeFlow flow =
new GoogleAuthorizationCodeFlow . Builder (
GoogleNetHttpTransport . newTrustedTransport (), JSON_FACTORY , clientSecrets , SCOPES )
// Set these two options to generate refresh token alongside access token.
. setDataStoreFactory ( new FileDataStoreFactory ( new File ( TOKENS_DIRECTORY_PATH )))
. setAccessType ( "offline" )
. build ();
// Authorize.
Credential credential =
new AuthorizationCodeInstalledApp ( flow , new LocalServerReceiver ()). authorize ( "user" );
// Build and return an authorized Credential object
AccessToken accessToken =
new AccessToken (
credential . getAccessToken (),
new Date (
// put the actual expiry date of access token here
System . currentTimeMillis ()));
return UserCredentials . newBuilder ()
. setAccessToken ( accessToken )
. setRefreshToken ( credential . getRefreshToken ())
. setClientId ( clientSecrets . getInstalled (). getClientId ())
. setClientSecret ( clientSecrets . getInstalled (). getClientSecret ())
. build ();
}
public static void main ( String ... args ) throws Exception {
// Override default service settings to supply user credentials.
Credentials credentials = getCredentials ();
// Create the ChatServiceSettings with the credentials
ChatServiceSettings chatServiceSettings =
ChatServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( credentials ))
. build ();
try ( ChatServiceClient chatServiceClient = ChatServiceClient . create ( chatServiceSettings )) {
ListSpacesRequest request =
ListSpacesRequest . newBuilder ()
// Filter spaces by space type (SPACE or GROUP_CHAT or
// DIRECT_MESSAGE).
. setFilter ( "spaceType = \"SPACE\"" )
. build ();
// Iterate over results and resolve additional pages automatically.
for ( Space response : chatServiceClient . listSpaces ( request ). iterateAll ()) {
System . out . println ( JsonFormat . printer (). print ( response ));
}
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
Your Java application runs and calls the Google Chat API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Google Chat API Javadoc documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide details how to create a Java command-line application to interact with the Google Chat API. Key actions include enabling the Google Chat API in the Google Cloud console and configuring the OAuth consent screen, including setting up a desktop application client ID. Users then configure a Google Chat app with essential information, including its name and avatar. Finally, users set up a Java project with Gradle, add the necessary dependencies, create the sample code and run it, which involves authorization for accessing the Google Chat.\n"]]
