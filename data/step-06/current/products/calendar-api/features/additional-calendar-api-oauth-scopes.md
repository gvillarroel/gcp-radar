---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.890Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Additional Calendar API OAuth scopes"
feature_slug: "additional-calendar-api-oauth-scopes"
latest_feature_date: "2018-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/auth"
  - "https://developers.google.com/workspace/calendar/api/quickstart/java"
  - "https://developers.google.com/workspace/calendar/api/quickstart/js"
keywords:
  - "additional"
  - "scopes"
  - "oauth"
  - "four"
  - "calendar"
  - "added"
  - "the"
  - "api"
---

# Additional Calendar API OAuth scopes

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API added four OAuth scopes to support finer-grained authorization of calendar data access.

## Extended Definition

The Calendar API added four OAuth scopes to support finer-grained authorization of calendar data access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java)
- [https://developers.google.com/workspace/calendar/api/quickstart/js](https://developers.google.com/workspace/calendar/api/quickstart/js)

## Supporting Pages

### Choose Google Calendar API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The Calendar API supports the following scopes: Scope Meaning https://www.googleapis.com/auth/calendar See, edit, share, and permanently delete all the calendars you can access using Google Calendar. https://www.googleapis.com/auth/calendar.readonly See and download any calendar you can access using your Calendar. https://www.googleapis.com/auth/calendar.freebusy View your availability in your calendars. https://www.googleapis.com/auth/calendar.events View and edit events on all your calendars. https://www.googleapis.com/auth/calendar.events.readonly View events on all your calendars. https://www.googleapis.com/auth/calendar.settings.readonly View your Calendar settings. https://www.googleapis.com/auth/calendar.addons.execute Run as a Calendar add-on. https://www.googleapis.com/auth/calendar.addons.current.event.read See the events you open in Google Calendar. https://www.googleapis.com/auth/calendar.addons.current.event.write Edit the events you open in Google Calendar. https://www.googleapis.com/auth/calendar.events.owned See, create, change, and delete events on Google calendars you own. https://www.googleapis.com/auth/calendar.events.owned.readonly See the events on Google calendars you own. https://www.googleapis.com/auth/calendar.events.freebusy See the availability on Google calendars you have access to. https://www.googleapis.com/auth/calendar.app.created Make secondary Google calendars, and see, create, change, and delete events on them. https://www.googleapis.com/auth/calendar.calendarlist See, add, and remove Google calendars you're subscribed to. https://www.googleapis.com/auth/calendar.calendarlist.readonly See the list of Google calendars you're subscribed to. https://www.googleapis.com/auth/calendar.calendars See and change the properties of Google calendars you have access to, and create secondary calendars. https://www.googleapis.com/auth/calendar.calendars.readonly See the title, description, default time zone, and other properties of Google calendars you have access to. https://www.googleapis.com/auth/calendar.acls See and change the sharing permissions of Google calendars you own. https://www.googleapis.com/auth/calendar.acls.readonly See the sharing permissions of Google calendars you own. https://www.googleapis.com/auth/calendar.events.public.readonly See the events on public calendars.
- Calendar API scopes To define the level of access granted to your app, you need to identify and declare authorization scopes .
- Configure OAuth 2.0 for authorization Configure the OAuth consent screen and choose scopes to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.
- Home Google Workspace Google Calendar Guides Send feedback Choose Google Calendar API scopes Stay organized with collections Save and categorize content based on your preferences.

### Java quickstart \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Include the following code in your new Java file: calendar/quickstart/src/main/java/CalendarQuickstart.java View on GitHub import com.google.api.client.auth.oauth2.Credential ; import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp ; import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ; import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow ; import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets ; import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.JsonFactory ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.client.util.DateTime ; import com.google.api.client.util.store.FileDataStoreFactory ; import com.google.api.services.calendar.Calendar ; import com.google.api.services.calendar.CalendarScopes ; import com.google.api.services.calendar.model.Event ; import com.google.api.services.calendar.model.Events ; import java.io.FileNotFoundException ; import java.io.IOException ; import java.io.InputStream ; import java.io.InputStreamReader ; import java.security.GeneralSecurityException ; import java.util.Collections ; import java.util.List ; / class to demonstrate use of Calendar events list API / public class CalendarQuickstart { / Application name. / private static final String APPLICATION NAME = "Google Calendar API Java Quickstart" ; / Global instance of the JSON factory. / private static final JsonFactory JSON FACTORY = GsonFactory . getDefaultInstance (); / Directory to store authorization tokens for this application. / private static final String TOKENS DIRECTORY PATH = "tokens" ; / Global instance of the scopes required by this quickstart.
- Open the default build.gradle file and replace its contents with the following code: calendar/quickstart/build.gradle View on GitHub apply plugin: 'java' apply plugin: 'application' mainClassName = 'CalendarQuickstart' sourceCompatibility = 11 targetCompatibility = 11 version = '1.0' repositories { mavenCentral () } dependencies { implementation 'com.google.api-client:google-api-client:2.0.0' implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1' implementation 'com.google.apis:google-api-services-calendar:v3-rev20220715-2.0.0' } Set up the sample In the src/main/java/ directory, create a new Java file with a name that matches the mainClassName value in your build.gradle file.
- Next steps Try the Google Workspace APIs in the APIs explorer Create events Troubleshoot authentication and authorization issues Calendar API reference documentation Google APIs Client for Java documentation Google Calendar API Javadoc documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If modifying these scopes, delete your previously saved tokens/ folder. / private static final List<String> SCOPES = Collections . singletonList ( CalendarScopes .

### JavaScript quickstart \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/quickstart/js](https://developers.google.com/workspace/calendar/api/quickstart/js)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Loads the discovery doc to initialize the API. / async function initializeGapiClient() { await gapi.client.init({ apiKey: API KEY, discoveryDocs: [DISCOVERY DOC], }); gapiInited = true; maybeEnableButtons(); } / Callback after Google Identity Services are loaded. / function gisLoaded() { tokenClient = google.accounts.oauth2.initTokenClient({ client id: CLIENT ID, scope: SCOPES, callback: '', // defined later }); gisInited = true; maybeEnableButtons(); } / Enables user interaction after all libraries are loaded. / function maybeEnableButtons() { if (gapiInited && gisInited) { document.getElementById('authorize button').style.visibility = 'visible'; } } / Sign in the user upon button click. / function handleAuthClick() { tokenClient.callback = async (resp) => { if (resp.error !== undefined) { throw (resp); } document.getElementById('signout button').style.visibility = 'visible'; document.getElementById('authorize button').innerText = 'Refresh'; await listUpcomingEvents(); }; if (gapi.client.getToken() === null) { // Prompt the user to select a Google Account and ask for consent to share their data // when establishing a new session. tokenClient.requestAccessToken({prompt: 'consent'}); } else { // Skip display of account chooser and consent dialog for an existing session. tokenClient.requestAccessToken({prompt: ''}); } } / Sign out the user upon button click. / function handleSignoutClick() { const token = gapi.client.getToken(); if (token !== null) { google.accounts.oauth2.revoke(token.access token); gapi.client.setToken(''); document.getElementById('content').innerText = ''; document.getElementById('authorize button').innerText = 'Authorize'; document.getElementById('signout button').style.visibility = 'hidden'; } } / Print the summary and start datetime/date of the next ten events in the authorized user's calendar.
- In the index.html file, paste the following sample code: calendar/quickstart/index.html View on GitHub <!DOCTYPE html> <html> <head> <title>Google Calendar API Quickstart</title> <meta charset="utf-8" /> </head> <body> <p>Google Calendar API Quickstart</p> <!--Add buttons to initiate auth sequence and sign out--> <button id="authorize button" onclick="handleAuthClick()">Authorize</button> <button id="signout button" onclick="handleSignoutClick()">Sign Out</button> <pre id="content" style="white-space: pre-wrap;"></pre> <script type="text/javascript"> / exported gapiLoaded / / exported gisLoaded / / exported handleAuthClick / / exported handleSignoutClick / // TODO(developer): Set to client ID and API key from the Developer Console const CLIENT ID = '<YOUR CLIENT ID>'; const API KEY = '<YOUR API KEY>'; // Discovery doc URL for APIs used by the quickstart const DISCOVERY DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'; // Authorization scopes required by the API; multiple scopes can be // included, separated by spaces. const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'; let tokenClient; let gapiInited = false; let gisInited = false; document.getElementById('authorize button').style.visibility = 'hidden'; document.getElementById('signout button').style.visibility = 'hidden'; / Callback after api.js is loaded. / function gapiLoaded() { gapi.load('client', initializeGapiClient); } / Callback after the API client is loaded.
- If no events are found an appropriate message is printed. / async function listUpcomingEvents() { let response; try { const request = { 'calendarId': 'primary', 'timeMin': (new Date()).toISOString(), 'showDeleted': false, 'singleEvents': true, 'maxResults': 10, 'orderBy': 'startTime', }; response = await gapi.client.calendar.events.list(request); } catch (err) { document.getElementById('content').innerText = err.message; return; } const events = response.result.items; if (!events events.length == 0) { document.getElementById('content').innerText = 'No events found.'; return; } // Flatten to string to display const output = events.reduce( (str, event) => ${str}${event.summary} (${event.start.dateTime event.start.date})\n, 'Events:\n'); document.getElementById('content').innerText = output; } </script> <script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script> <script async defer src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script> </body> </html> Replace the following: YOUR CLIENT ID : the client ID that you created when you authorized credentials for a web application .
- Next steps Try the Google Workspace APIs in the APIs explorer Create events Troubleshoot authentication and authorization issues Calendar API reference documentation google-api-javascript-client section of GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

