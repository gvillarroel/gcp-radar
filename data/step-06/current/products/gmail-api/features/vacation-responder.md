---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.239Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Vacation responder"
feature_slug: "vacation-responder"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/vacation_settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings"
  - "https://developers.google.com/workspace/gmail/api/guides/performance"
  - "https://developers.google.com/workspace/gmail/api/guides/uploads"
keywords:
  - "vacation"
  - "responder"
  - "new"
  - "endpoints"
  - "are"
  - "available"
  - "for"
  - "managing"
---

# Vacation responder

Product: Gmail API
Coverage: LOW

## Step 02 Summary

New endpoints are available for managing vacation responder settings in mail settings.

## Extended Definition

New endpoints are available for managing vacation responder settings in mail settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/vacation_settings](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings)
- [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)

## Supporting Pages

### Manage vacation settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/vacation_settings](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on how to get or update vacation responder settings, see the settings resource.
- The following code samples show how to set an automatic reply for a fixed period of time and restrict replies to users in the same domain: Java gmail/snippets/src/main/java/EnableAutoReply.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.VacationSettings ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; import java.time.LocalDateTime ; import java.time.ZoneOffset ; import java.time.ZonedDateTime ; / Class to demonstrate the use of Gmail Enable Auto Reply API / public class EnableAutoReply { / Enables the auto reply @return the reply message and response metadata. @throws IOException - if service account credentials file not found. / public static VacationSettings autoReply () throws IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) epoch = datetime . utcfromtimestamp ( 0 ) now = datetime . now () start time = ( now - epoch ) . total seconds () 1000 end time = ( now + timedelta ( days = 7 ) - epoch ) . total seconds () 1000 vacation settings = { "enableAutoReply" : True , "responseBodyHtml" : ( "I am on vacation and will reply when I am " "back in the office.
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto reply by restricting domain with start time and end time VacationSettings vacationSettings = new VacationSettings () . setEnableAutoReply ( true ) . setResponseBodyHtml ( "I am on vacation and will reply when I am back in the office.

### VacationSettings \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If both startTime and endTime are specified, startTime must precede endTime . endTime string ( int64 format) An optional end time for sending auto-replies (epoch ms).
- This feature is only available for Google Workspace users. startTime string ( int64 format) An optional start time for sending auto-replies (epoch ms).
- If both responseBodyPlainText and responseBodyHtml are specified, responseBodyHtml will be used. responseBodyHtml string Response body in HTML format.
- These settings correspond to the "Vacation responder" feature in the web interface.

### Performance tips \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- Here is an example that assumes the Demo resource uses ETags: GET https://www.googleapis.com/demo/v1/324 ?fields=etag,title,comment,characteristics Authorization: Bearer your auth token This is the partial response: 200 OK { "etag": " ETagString " "title": "New title" "comment": "First comment.", "characteristics": { "length": "short", "level": "5", "followers": ["Jo", "Will"], } } The following patch request is based on that response.

### Upload attachments \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: message/rfc822 X-Upload-Content-Length: 2000000 { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .
- The specific characteristics of the data you can upload are specified on the reference page for any method that supports media uploads: Maximum upload file size : The maximum amount of data you can store with this method.
- Resume an interrupted upload If an upload request is terminated before receiving a response or if you receive an HTTP 503 Service Unavailable response from the server, then you need to resume the interrupted upload.
- It is especially useful if you are transferring large files and the likelihood of a network interruption or some other transmission failure is high, for example, when uploading from a mobile client app.

