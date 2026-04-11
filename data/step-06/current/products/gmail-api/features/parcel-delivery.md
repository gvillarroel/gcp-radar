---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.264Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Parcel Delivery"
feature_slug: "parcel-delivery"
latest_feature_date: "2013-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/performance"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format"
keywords:
  - "parcel"
  - "delivery"
  - "schema"
  - "for"
  - "representing"
---

# Parcel Delivery

Product: Gmail API
Coverage: LOW

## Step 02 Summary

A schema for representing a parcel delivery.

## Extended Definition

A schema for representing a parcel delivery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding](https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format](https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format)

## Supporting Pages

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto-forwarding and move forwarded messages to the trash ForwardingAddress address = new ForwardingAddress () . setForwardingEmail ( forwardingEmail ); ForwardingAddress createAddressResult = service . users (). settings (). forwardingAddresses () . create ( "me" , address ). execute (); if ( createAddressResult . getVerificationStatus (). equals ( "accepted" )) { AutoForwarding autoForwarding = new AutoForwarding () . setEnabled ( true ) . setEmailAddress ( address . getForwardingEmail ()) . setDisposition ( "trash" ); autoForwarding = service . users (). settings (). updateAutoForwarding ( "me" , autoForwarding ). execute (); System . out . println ( autoForwarding . toPrettyString ()); return autoForwarding ; } } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable forwarding: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable forwarding.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def enable forwarding (): """Enable email forwarding.
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) address = { "forwardingEmail" : "gduser1@workspacesamples.dev" } pylint: disable=E1101 result = ( service . users () . settings () . forwardingAddresses () . create ( userId = "me" , body = address ) . execute () ) if result . get ( "verificationStatus" ) == "accepted" : body = { "emailAddress" : result . get ( "forwardingEmail" ), "enabled" : True , "disposition" : "trash" , } pylint: disable=E1101 result = ( service . users () . settings () . updateAutoForwarding ( userId = "me" , body = body ) . execute () ) print ( f "Forwarding is enabled : { result } " ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result if name == " main " : enable forwarding () To disable auto-forwarding, call the updateAutoForwarding method and set the enabled field on the AutoForwarding object to false .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Performance tips \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The request uses the fields parameter to specify which fields to return. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) The partial response looks like this: 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note: For APIs that support query parameters for data pagination ( maxResults and nextPageToken , for example), use those parameters to reduce the results of each query to a manageable size.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### AutoForwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding](https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
- JSON representation { "enabled" : boolean , "emailAddress" : string , "disposition" : enum ( Disposition ) } Fields enabled boolean Whether all incoming mail is automatically forwarded to another address. emailAddress string Email address to which all incoming messages are forwarded.
- This email address must be a verified member of the forwarding addresses. disposition enum ( Disposition ) The state that a message should be left in after it has been forwarded.
- Home Google Workspace Gmail Reference Send feedback AutoForwarding Stay organized with collections Save and categorize content based on your preferences.

### Format \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format](https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
- Format cannot be used when accessing the api using the gmail.metadata scope. raw Returns the full email message data with body content in the raw field as a base64url encoded string; the payload field is not used.
- Home Google Workspace Gmail Reference Send feedback Format Stay organized with collections Save and categorize content based on your preferences.
- Format cannot be used when accessing the api using the gmail.metadata scope. metadata Returns only email message ID, labels, and email headers.

