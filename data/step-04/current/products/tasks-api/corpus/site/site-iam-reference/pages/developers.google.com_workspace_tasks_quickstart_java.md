---
title: "Java quickstart \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/quickstart/java
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/auth
source_metadata:
  url: https://developers.google.com/workspace/tasks/quickstart/java
  title: "Java quickstart \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Guides
Send feedback
Java quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Create a Java command-line application that makes requests to the Google Tasks API.
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
A Google account with Google Tasks enabled.
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Tasks API.
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
tasks/quickstart/build.gradle
View on GitHub
apply plugin: 'java'
apply plugin: 'application'
mainClassName = 'TasksQuickstart'
sourceCompatibility = 11
targetCompatibility = 11
version = '1.0'
repositories {
mavenCentral ()
}
dependencies {
implementation 'com.google.api-client:google-api-client:2.0.0'
implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1'
implementation 'com.google.apis:google-api-services-tasks:v1-rev20210709-2.0.0'
}
Set up the sample
In the src/main/java/ directory, create a new Java file with a name that
matches the mainClassName value in your build.gradle file.
Include the following code in your new Java file:
tasks/quickstart/src/main/java/TasksQuickstart.java
View on GitHub
import com.google.api.client.auth.oauth2.Credential ;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp ;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow ;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets ;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ;
import com.google.api.client.http.javanet.NetHttpTransport ;
import com.google.api.client.json.JsonFactory ;
import com.google.api.client.json.gson.GsonFactory ;
import com.google.api.client.util.store.FileDataStoreFactory ;
import com.google.api.services.tasks.Tasks ;
import com.google.api.services.tasks.TasksScopes ;
import com.google.api.services.tasks.model.TaskList ;
import com.google.api.services.tasks.model.TaskLists ;
import java.io.FileNotFoundException ;
import java.io.IOException ;
import java.io.InputStream ;
import java.io.InputStreamReader ;
import java.security.GeneralSecurityException ;
import java.util.Collections ;
import java.util.List ;
public class TasksQuickstart {
private static final String APPLICATION_NAME = "Google Tasks API Java Quickstart" ;
private static final JsonFactory JSON_FACTORY = GsonFactory . getDefaultInstance ();
private static final String TOKENS_DIRECTORY_PATH = "tokens" ;
/**
* Global instance of the scopes required by this quickstart.
* If modifying these scopes, delete your previously saved tokens/ folder.
*/
private static final List<String> SCOPES = Collections . singletonList ( TasksScopes . TASKS_READONLY );
private static final String CREDENTIALS_FILE_PATH = "/credentials.json" ;
/**
* Creates an authorized Credential object.
*
* @param HTTP_TRANSPORT The network HTTP Transport.
* @return An authorized Credential object.
* @throws IOException If the credentials.json file cannot be found.
*/
private static Credential getCredentials ( final NetHttpTransport HTTP_TRANSPORT )
throws IOException {
// Load client secrets.
InputStream in = TasksQuickstart . class . getResourceAsStream ( CREDENTIALS_FILE_PATH );
if ( in == null ) {
throw new FileNotFoundException ( "Resource not found: " + CREDENTIALS_FILE_PATH );
}
GoogleClientSecrets clientSecrets =
GoogleClientSecrets . load ( JSON_FACTORY , new InputStreamReader ( in ));
// Build flow and trigger user authorization request.
GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow . Builder (
HTTP_TRANSPORT , JSON_FACTORY , clientSecrets , SCOPES )
. setDataStoreFactory ( new FileDataStoreFactory ( new java . io . File ( TOKENS_DIRECTORY_PATH )))
. setAccessType ( "offline" )
. build ();
LocalServerReceiver receiver = new LocalServerReceiver . Builder (). setPort ( 8888 ). build ();
return new AuthorizationCodeInstalledApp ( flow , receiver ). authorize ( "user" );
}
public static void main ( String ... args ) throws IOException , GeneralSecurityException {
// Build a new authorized API client service.
final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport . newTrustedTransport ();
Tasks service = new Tasks . Builder ( HTTP_TRANSPORT , JSON_FACTORY , getCredentials ( HTTP_TRANSPORT ))
. setApplicationName ( APPLICATION_NAME )
. build ();
// Print the first 10 task lists.
TaskLists result = service . tasklists (). list ()
. setMaxResults ( 10 )
. execute ();
List<TaskList> taskLists = result . getItems ();
if ( taskLists == null || taskLists . isEmpty ()) {
System . out . println ( "No task lists found." );
} else {
System . out . println ( "Task lists:" );
for ( TaskList tasklist : taskLists ) {
System . out . printf ( "%s (%s)\n" , tasklist . getTitle (), tasklist . getId ());
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
Your Java application runs and calls the Google Tasks API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Troubleshoot authentication and authorization issues
Tasks API reference documentation
Google APIs Client for Java documentation
Google Tasks API Javadoc documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
