---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.104Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "JSON-RPC protocol support"
feature_slug: "json-rpc-protocol-support"
latest_feature_date: "2018-03-22"
deprecation_date: "2019-03-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/performance"
  - "https://developers.google.com/workspace/calendar/api/quickstart/go"
  - "https://developers.google.com/workspace/calendar/api/quickstart/java"
keywords:
  - "json"
  - "rpc"
  - "protocol"
  - "calendar"
  - "deprecated"
  - "scheduled"
  - "discontinuation"
  - "2019"
---

# JSON-RPC protocol support

Product: Calendar API
Coverage: MEDIUM

## Step 02 Summary

Calendar API support for the JSON-RPC protocol is deprecated and scheduled for discontinuation; deprecated on 2019-03-25.

## Extended Definition

Calendar API support for the JSON-RPC protocol is deprecated and scheduled for discontinuation; deprecated on 2019-03-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance)
- [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go)
- [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java)

## Supporting Pages

### Go quickstart \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/quickstart/go](https://developers.google.com/workspace/calendar/api/quickstart/go)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the file, paste the following code: calendar/quickstart/quickstart.go View on GitHub package main import ( "context" "encoding/json" "fmt" "log" "net/http" "os" "time" "golang.org/x/oauth2" "golang.org/x/oauth2/google" "google.golang.org/api/calendar/v3" "google.golang.org/api/option" ) // Retrieve a token, saves the token, then returns the generated client. func getClient ( config oauth2 .
- ConfigFromJSON ( b , calendar .
- Next steps Try the Google Workspace APIs in the APIs explorer Create events Troubleshoot authentication and authorization issues Calendar API reference documentation google-api-go-client section of GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prepare the workspace Create a working directory: mkdir quickstart Change to the working directory: cd quickstart Initialize the new module: go mod init quickstart Get the Google Calendar API Go client library and OAuth2.0 package: go get google.golang.org/api/calendar/v3 go get golang.org/x/oauth2/google Set up the sample In your working directory, create a file named quickstart.go .

### Java quickstart \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/quickstart/java](https://developers.google.com/workspace/calendar/api/quickstart/java)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Include the following code in your new Java file: calendar/quickstart/src/main/java/CalendarQuickstart.java View on GitHub import com.google.api.client.auth.oauth2.Credential ; import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp ; import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ; import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow ; import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets ; import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.JsonFactory ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.client.util.DateTime ; import com.google.api.client.util.store.FileDataStoreFactory ; import com.google.api.services.calendar.Calendar ; import com.google.api.services.calendar.CalendarScopes ; import com.google.api.services.calendar.model.Event ; import com.google.api.services.calendar.model.Events ; import java.io.FileNotFoundException ; import java.io.IOException ; import java.io.InputStream ; import java.io.InputStreamReader ; import java.security.GeneralSecurityException ; import java.util.Collections ; import java.util.List ; / class to demonstrate use of Calendar events list API / public class CalendarQuickstart { / Application name. / private static final String APPLICATION NAME = "Google Calendar API Java Quickstart" ; / Global instance of the JSON factory. / private static final JsonFactory JSON FACTORY = GsonFactory . getDefaultInstance (); / Directory to store authorization tokens for this application. / private static final String TOKENS DIRECTORY PATH = "tokens" ; / Global instance of the scopes required by this quickstart.
- CALENDAR READONLY ); private static final String CREDENTIALS FILE PATH = "/credentials.json" ; / Creates an authorized Credential object. @param HTTP TRANSPORT The network HTTP Transport. @return An authorized Credential object. @throws IOException If the credentials.json file cannot be found. / private static Credential getCredentials ( final NetHttpTransport HTTP TRANSPORT ) throws IOException { // Load client secrets.
- InputStream in = CalendarQuickstart . class . getResourceAsStream ( CREDENTIALS FILE PATH ); if ( in == null ) { throw new FileNotFoundException ( "Resource not found: " + CREDENTIALS FILE PATH ); } GoogleClientSecrets clientSecrets = GoogleClientSecrets . load ( JSON FACTORY , new InputStreamReader ( in )); // Build flow and trigger user authorization request.
- Builder ( HTTP TRANSPORT , JSON FACTORY , getCredentials ( HTTP TRANSPORT )) . setApplicationName ( APPLICATION NAME ) . build (); // List the next 10 events from the primary calendar.

### Performance tips \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- Here is an example: PATCH https://www.googleapis.com/demo/v1/324?fields=comment,characteristics Authorization: Bearer your auth token Content-Type: application/json { "comment": "A new comment", "characteristics": { "volume": "loud", "accuracy": null } } With this request, if the comment field has an existing value, the new value overwrites it; otherwise it is set to the new value.
- 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note that the response is a JSON object that includes only the selected fields and their enclosing parent objects.

