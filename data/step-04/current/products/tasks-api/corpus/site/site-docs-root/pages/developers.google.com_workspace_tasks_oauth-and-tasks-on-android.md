---
title: "Use Tasks API on Android \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/overview
source_metadata:
  url: https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android
  title: "Use Tasks API on Android \_|\_ Google Tasks \_|\_ Google for Developers"
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
Use Tasks API on Android
Stay organized with collections
Save and categorize content based on your preferences.
Warning: This document is deprecated.
For information about authorizing Android apps using OAuth 2.0 please have a look at the
Android Play Services Authorization documentation .
This document explains how to use the Tasks API with OAuth 2.0 on Android. It describes the authorization mechanisms to gain access to a user's Google Tasks and how you can have a ready to use Tasks API service Object in your Android application.
In order for your Android application to use the Tasks API several steps are necessary, you need to:
Select the Google Account of the user
Get an OAuth 2.0 access token from the AccountManager for the Task API
Identify your project and set up the Tasks service Object
Make calls to the Tasks API
Importing Google's client library
The samples you will find in this document use the Google APIs client library for Java . You will need to add the following jars to your Android application, to do that, place the jars listed below in the /assets folder at the root of your android application. Also check for new versions as this document gets older.
Import the Google APIs client library jars and its Android extensions (all part of google-api-java-client-1.4.1-beta.zip ):
google-api-client-1.4.1-beta.jar
google-api-client-extensions-android2-1.4.1-beta.jar
google-api-client-googleapis-1.4.1-beta.jar
google-api-client-googleapis-extensions-android2-1.4.1-beta.jar
Import the Tasks specific jar:
google-api-services-tasks-v1-1.1.0-beta.jar
Import dependencies (all part of google-api-java-client-1.4.1-beta.zip ):
commons-codec-1.3.jar
gson-1.6.jar
guava-r09.jar
httpclient-4.0.3.jar
httpcore-4.0.1.jar
jackson-core-asl-1.6.7.jar
jsr305-1.3.9.jar
Google accounts in Android
Since Android 2.0, the AccountManager manages the accounts that you have registered in your environment, the ones that are listed under Settings > Accounts & sync . Specifically, it handles the authorization flow and can generate authorization tokens that are required to access data using APIs.
Accounts registered in your Android environment
In order to be able to use the AccountManager to get accounts and to request authorization tokens you need to add the following permissions in your Android application manifest:
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
<uses-permission android:name="android.permission.USE_CREDENTIALS" />
You can use the AccountManager to get the Google account which you want to access the Tasks for. The AccountManager not only manages Google accounts but also accounts from other vendors. Therefore you will need to specifically ask for Google accounts by using the code below:
AccountManager accountManager = AccountManager.get(activity);
Account[] accounts = accountManager.getAccountsByType("com.google");
Alternatively the Google APIs client library for Java comes with a GoogleAccountManager which only handles Google accounts:
GoogleAccountManager googleAccountManager = new GoogleAccountManager(activity);
Account[] accounts = googleAccountManager.getAccounts();
If more than one Google accounts are available on the Android device you should prompt the user for the account he wishes to use with a dialog that could look like this:
Choose account dialog
You could build such a dialog by using the following switch/case code in the onCreateDialog method of your activity:
@Override
protected Dialog onCreateDialog ( int id ) {
switch ( id ) {
case DIALOG_ACCOUNTS :
AlertDialog . Builder builder = new AlertDialog . Builder ( this );
builder . setTitle ( "Select a Google account" );
final Account [] accounts = accountManager . getAccountsByType ( "com.google" );
final int size = accounts . length ;
String [] names = new String [ [ ] size ] ;
for ( int i = 0 ; i < size ; i ++ ) {
names [ [ ] i ] = accounts [ [ ] i ] . name ;
}
builder . setItems ( names , new DialogInterface . OnClickListener () {
public void onClick ( DialogInterface dialog , int which ) {
// Stuff to do when the account is selected by the user
gotAccount ( accounts [ [ ] which ] );
}
} );
return builder . create ();
}
return null ;
}
Calling showDialog(DIALOG_ACCOUNTS) will display the account chooser dialog.
The Google APIs authorization flow on Android
Now that the user has chosen an account we can ask the AccountManager to issue an OAuth 2.0 access token for the Task API. This is done by calling the AccountManager.getAuthToken() method. During the AccountManager.getAuthToken() call the AccountManager will take care of contacting the Google APIs authorization endpoint. When the AccountManager has retrieved the authorization token it will run the AccountManagerCallback that you have defined in the method call:
manager . getAuthToken ( account , AUTH_TOKEN_TYPE , null , activity , new AccountManagerCallback<Bundle> () {
public void run(AccountManagerFuture<Bundle> future) {
try {
// If the user has authorized your application to use the tasks API
// a token is available.
String token = future.getResult().getString(AccountManager.KEY_AUTHTOKEN) ;
// Now you can use the Tasks API...
useTasksAPI(token) ;
} catch ( OperationCanceledException e ) {
// TODO : The user has denied you access to the API , you should handle that
} catch ( Exception e ) {
handleException(e) ;
}
}
} , null );
As you may already know the Android AccountManager has experimental support for OAuth 2.0. You just need to prefix the scope of the API you want to access with oauth2: when setting the AUTH_TOKEN_TYPE . So for the Tasks API you can use:
String AUTH_TOKEN_TYPE = "oauth2:https://www.googleapis.com/auth/tasks" ;
The problem when using the value above as the AUTH_TOKEN_TYPE is that the string oauth2:https://www.googleapis.com/auth/tasks will be displayed in the authorization dialog as the name of the Google product you want to access. To work around this, special — human-readable — AUTH_TOKEN_TYPE aliases exists for the Tasks API. They are equivalent to using the OAuth 2.0 scope. For example you can use:
String AUTH_TOKEN_TYPE = "Manage your tasks";
You can also use the AUTH_TOKEN_TYPE alias
View your tasks which is equivalent to the Tasks API read-only
scope: oauth2:https://www.googleapis.com/auth/tasks.readonly .
During the AccountManager.getAuthToken() call the AccountManager will check if your application has been authorized to access the Tasks API. If your application has not yet been authorized an Activity is started by the AccountManager which displays an authorization dialog to the user so that they can Allow or Deny your application to use the Tasks API on their account.
Authorization dialog
If the user denies your application access to the Tasks API, an OperationCanceledException will be thrown during the future.getResult() call. You should handle that gracefully for example by asking to choose the account again or displaying a message with a button to authorize access again.
Identifying your application and setting up the Tasks API service Object
Now that your application has authorization to access the Tasks API and that it have been given an access token you also need an API Key that you need to get from a project in the Google APIs Console as it is mandatory for making Tasks API calls. To do that follow these steps:
Create a project or use an existing one
Enable the Tasks API on your project by toggling the Tasks API switch to ON
The API Key can be found at API Access > Simple API Access > API Key
Getting the API Key from the APIs Console
The API Key is mandatory as it identifies your application and therefore allows the API to deduct quota and use the quota rules defined for your project. You need to specify the API Key on your Tasks service Object:
useTasksAPI(String accessToken) {
// Setting up the Tasks API Service
HttpTransport transport = AndroidHttp.newCompatibleTransport();
AccessProtectedResource accessProtectedResource = new GoogleAccessProtectedResource(accessToken);
Tasks service = new Tasks(transport, accessProtectedResource, new JacksonFactory());
service.accessKey = INSERT_YOUR_API_KEY;
service.setApplicationName("Google-TasksSample/1.0");
// TODO: now use the service to query the Tasks API
}
The accessToken is only valid for a certain amount of time, so you will have to get a new one when it expires. There are 2 ways of handling this:
Request an accessToken to the AccountManager every time you make requests through the API. Since the AccountManager caches the token this solution is acceptable.
Keep using your accessToken until you get a 403 error at which point you ask for a new token to the AccountManager .
Manipulating Tasks through the API
At this point you should have a fully set up Tasks API service Object which you can use to query the API as per the Tasks API developer's Guide , for example:
// Getting all the Task lists
List taskLists = service . tasklists . list (). execute (). items ;
// Getting the list of tasks in the default task list
List tasks = service . tasks . list ( "@default" ). execute (). items ;
// Add a task to the default task list
Task task = new Task ();
task . title = "New Task" ;
task . notes = "Please complete me" ;
task . due = "2010-10-15T12:00:00.000Z" ;
Task result = service . tasks . insert ( "@default" , task ). execute ();
Don't forget to add the permission to access the Internet to your Android application manifest otherwise the above requests to the Tasks API endpoints will fail:
<uses-permission android:name="android.permission.INTERNET" />
Sample application
We recently added a new sample to the Google APIs Client Library for Java sample repository to help you getting started with the Tasks API and OAuth 2.0 on Android. The sample is a simple but fully working Android application which requests authorization to use the Tasks API and display the default task list's tasks in a ListView.
Displaying the tasks in the default tasks list in a ListView
Follow these instructions to get the sample running, and don't hesitate to post your feedback or questions to the Google Tasks API Forum .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
