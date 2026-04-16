---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:15.684Z"
product_name: "Tasks API"
product_slug: "tasks-api"
feature_name: "Tasks API access to tasks assigned in Google Docs and Google Chat"
feature_slug: "tasks-api-access-to-tasks-assigned-in-google-docs-and-google-chat"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android"
  - "https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert"
  - "https://developers.google.com/workspace/tasks/reference/rest/v1/tasks"
  - "https://developers.google.com/workspace/tasks/oauth-authorization-callback-handler"
keywords:
  - "tasks"
  - "api"
  - "access"
  - "to"
  - "assigned"
  - "in"
  - "docs"
  - "and"
---

# Tasks API access to tasks assigned in Google Docs and Google Chat

Product: Tasks API
Coverage: MEDIUM

## Step 02 Summary

The Tasks API now supports getting, editing, and deleting tasks assigned from Google Docs documents or Google Chat spaces.

## Extended Definition

The Tasks API now supports getting, editing, and deleting tasks assigned from Google Docs documents or Google Chat spaces.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android](https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android)
- [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert)
- [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks)
- [https://developers.google.com/workspace/tasks/oauth-authorization-callback-handler](https://developers.google.com/workspace/tasks/oauth-authorization-callback-handler)

## Supporting Pages

### Use Tasks API on Android \_|\_ Google Tasks \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android](https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Manipulating Tasks through the API At this point you should have a fully set up Tasks API service Object which you can use to query the API as per the Tasks API developer's Guide , for example: // Getting all the Task lists List taskLists = service . tasklists . list (). execute (). items ; // Getting the list of tasks in the default task list List tasks = service . tasks . list ( "@default" ). execute (). items ; // Add a task to the default task list Task task = new Task (); task . title = "New Task" ; task . notes = "Please complete me" ; task . due = "2010-10-15T12:00:00.000Z" ; Task result = service . tasks . insert ( "@default" , task ). execute (); Don't forget to add the permission to access the Internet to your Android application manifest otherwise the above requests to the Tasks API endpoints will fail: <uses-permission android:name="android.permission.INTERNET" /> Sample application We recently added a new sample to the Google APIs Client Library for Java sample repository to help you getting started with the Tasks API and OAuth 2.0 on Android.
- You need to specify the API Key on your Tasks service Object: useTasksAPI(String accessToken) { // Setting up the Tasks API Service HttpTransport transport = AndroidHttp.newCompatibleTransport(); AccessProtectedResource accessProtectedResource = new GoogleAccessProtectedResource(accessToken); Tasks service = new Tasks(transport, accessProtectedResource, new JacksonFactory()); service.accessKey = INSERT YOUR API KEY; service.setApplicationName("Google-TasksSample/1.0"); // TODO: now use the service to query the Tasks API } The accessToken is only valid for a certain amount of time, so you will have to get a new one when it expires.
- In order for your Android application to use the Tasks API several steps are necessary, you need to: Select the Google Account of the user Get an OAuth 2.0 access token from the AccountManager for the Task API Identify your project and set up the Tasks service Object Make calls to the Tasks API Importing Google's client library The samples you will find in this document use the Google APIs client library for Java .
- To do that follow these steps: Create a project or use an existing one Enable the Tasks API on your project by toggling the Tasks API switch to ON The API Key can be found at API Access > Simple API Access > API Key Getting the API Key from the APIs Console The API Key is mandatory as it identifies your application and therefore allows the API to deduct quota and use the quota rules defined for your project.

### Method: tasks.insert \_|\_ Google Tasks \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces.
- A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
- Home Google Workspace Google Tasks Reference Send feedback Method: tasks.insert Stay organized with collections Save and categorize content based on your preferences.

### REST Resource: tasks \_|\_ Google Tasks \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- They can only be deleted by calling tasks.delete, in which case both the assigned task and the original task (in Docs or Chat Spaces) are deleted.
- This field is populated for tasks assigned to the current user and identifies where the task was assigned from.
- A task can be assigned to a user, currently possible from surfaces like Docs and Chat Spaces.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]

### "Build Authorization Callback Handler \_|\_ Google Tasks \_|\_ Google for\

- URL: [https://developers.google.com/workspace/tasks/oauth-authorization-callback-handler](https://developers.google.com/workspace/tasks/oauth-authorization-callback-handler)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Change the implementation to use your own database system . / public static OAuthTokenDao oauthTokenDao = new OAuthTokenDaoMemoryImpl (); public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException { // Getting the current user // This is using App Engine 's User Service but you should replace this to // your own user / login implementation UserService userService = UserServiceFactory . getUserService (); User user = userService . getCurrentUser (); // If the user is not logged - in it is redirected to the login service , then back to this page if ( user == null ) { resp . sendRedirect ( userService . createLoginURL ( getFullRequestUrl ( req ))); return ; } // Checking if we already have tokens for this user in store AccessTokenResponse accessTokenResponse = oauthTokenDao . getKeys ( user . getEmail ()); // If we don 't have tokens for this user if ( accessTokenResponse == null ) { OAuthProperties oauthProperties = new OAuthProperties (); // Redirect to the Google OAuth 2.0 authorization endpoint resp . sendRedirect ( new GoogleAuthorizationRequestUrl ( oauthProperties . getClientId (), OAuthCodeCallbackHandlerServlet . getOAuthCodeCallbackHandlerUrl ( req ), oauthProperties . getScopesAsString ()) . build ()); return ; } // Prints the user 's task list titles in the response resp . setContentType ( "text/plain" ); resp . getWriter () . append ( "Task Lists titles for user " + user . getEmail () + ": \n\n " ); printTasksTitles ( accessTokenResponse , resp . getWriter ()); } / Construct the request 's URL without the parameter part. @param req the HttpRequest object @return The constructed request 's URL / public static String getFullRequestUrl ( HttpServletRequest req ) { String scheme = req . getScheme () + "://" ; String serverName = req . getServerName (); String serverPort = ( req . getServerPort () == 80 ) ? "" : ":" + req . getServerPort (); String contextPath = req . getContextPath (); String servletPath = req . getServletPath (); String pathInfo = ( req . getPathInfo () == null ) ? "" : req . getPathInfo (); String queryString = ( req . getQueryString () == null ) ? "" : "?" + req . getQueryString (); return scheme + serverName + serverPort + contextPath + servletPath + pathInfo + queryString ; } / Uses the Google Tasks API to retrieve a list of the user 's tasks in the default tasks list . @param accessTokenResponse The OAuth 2.0 AccessTokenResponse object containing the access token and a refresh token . @param output The output stream writer to write the task list titles to . @return A list of the user 's task titles in the default task list. @throws IOException / public void printTasksTitles ( AccessTokenResponse accessTokenResponse , Writer output ) throws IOException { // Initializing the Tasks service HttpTransport transport = new NetHttpTransport (); JsonFactory jsonFactory = new JacksonFactory (); OAuthProperties oauthProperties = new OAuthProperties (); GoogleAccessProtectedResource accessProtectedResource = new GoogleAccessProtectedResource ( accessTokenResponse . accessToken , transport , jsonFactory , oauthProperties . getClientId (), oauthProperties . getClientSecret (), accessTokenResponse . refreshToken ); Tasks service = new Tasks ( transport , accessProtectedResource , jsonFactory ); // Using the initialized Tasks API service to query the list of tasks lists com . google . api . services . tasks . model .
- Redirect URI in the APIs Console Handle the Authorization code from the Google Authorization endpoint In the case where the user has not yet authorized the application to access their tasks and is therefore redirected to Google's OAuth 2.0 Authorization endpoint, the user is shown an authorization dialog from Google prompting the user to grant the application access to their tasks: Google's authorization Dialog After granting or denying access, the user is redirected back to the OAuth 2.0 code callback handler that was specified as a redirect/callback when constructing the Google authorization URL: new GoogleAuthorizationRequestUrl(oauthProperties.getClientId(), OAuthCodeCallbackHandlerServlet.getOAuthCodeCallbackHandlerUrl(req) , oauthProperties .getScopesAsString()).build() The OAuth 2.0 code callback handler - OAuthCodeCallbackHandlerServlet - handles the redirect from the Google OAuth 2.0 endpoint.
- Contents In order to have such fully working sample several steps are necessary, you need to: Declare servlet mappings in the web.xml file Authenticate the users on their system and request authorization to access their Tasks Listen for the Authorization code from the Google Authorization endpoint Exchange the authorization code for a refresh and access token Read the user's tasks and display them Declare servlet mappings in the web.xml file This application uses the following two servlets: PrintTasksTitlesServlet (mapped to / ): The entry point of the application that will handle user authentication, and will display the user's tasks OAuthCodeCallbackHandlerServlet (mapped to /oauth2callback ): The OAuth 2.0 callback which handles the response from the OAuth authorization endpoint The following web.xml file which maps these 2 servlets to URLs in our application: <?xml version="1.0" encoding="UTF-8"?> <web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app 2 5.xsd"> <servlet> <servlet-name>PrintTasksTitles</servlet-name> <servlet-class>com.google.oauthsample.PrintTasksTitlesServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>PrintTasksTitles</servlet-name> <url-pattern>/</url-pattern> </servlet-mapping> <servlet> <servlet-name>OAuthCodeCallbackHandlerServlet</servlet-name> <servlet-class>com.google.oauthsample.OAuthCodeCallbackHandlerServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>OAuthCodeCallbackHandlerServlet</servlet-name> <url-pattern>/oauth2callback</url-pattern> </servlet-mapping> </web-app> /WEB-INF/web.xml file Authenticate users on their system and request authorization to access their tasks The user enters the application through the root '/' URL that is mapped to the PrintTaskListsTitlesServlet servlet.
- Here is the OAuthProperties class and the oauth.properties file that is being used in the sample: package com . google . oauthsample ; import ... / Object representation of an OAuth properties file . / public class OAuthProperties { public static final String DEFAULT OAUTH PROPERTIES FILE NAME = "oauth.properties" ; / The OAuth 2.0 Client ID / private String clientId ; / The OAuth 2.0 Client Secret / private String clientSecret ; / The Google APIs scopes to access / private String scopes ; / Instantiates a new OauthProperties object reading its values from the { @code OAUTH PROPERTIES FILE NAME } properties file . @throws IOException IF there is an issue reading the { @code propertiesFile } @throws OauthPropertiesFormatException If the given { @code propertiesFile } is not of the right format ( does not contains the keys { @code clientId }, { @code clientSecret } and { @code scopes }) / public OAuthProperties () throws IOException { this ( OAuthProperties . class . getResourceAsStream ( DEFAULT OAUTH PROPERTIES FILE NAME )); } / Instantiates a new OAuthProperties object , reading its values from the given properties file . @param propertiesFile the InputStream to read an OAuth Properties file .

