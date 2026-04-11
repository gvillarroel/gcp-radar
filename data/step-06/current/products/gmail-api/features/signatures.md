---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.238Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Signatures"
feature_slug: "signatures"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/performance"
keywords:
  - "signatures"
  - "new"
  - "endpoints"
  - "are"
  - "available"
  - "for"
  - "managing"
  - "in"
---

# Signatures

Product: Gmail API
Coverage: LOW

## Step 02 Summary

New endpoints are available for managing signatures in mail settings.

## Extended Definition

New endpoints are available for managing signatures in mail settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)

## Supporting Pages

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto-forwarding and move forwarded messages to the trash ForwardingAddress address = new ForwardingAddress () . setForwardingEmail ( forwardingEmail ); ForwardingAddress createAddressResult = service . users (). settings (). forwardingAddresses () . create ( "me" , address ). execute (); if ( createAddressResult . getVerificationStatus (). equals ( "accepted" )) { AutoForwarding autoForwarding = new AutoForwarding () . setEnabled ( true ) . setEmailAddress ( address . getForwardingEmail ()) . setDisposition ( "trash" ); autoForwarding = service . users (). settings (). updateAutoForwarding ( "me" , autoForwarding ). execute (); System . out . println ( autoForwarding . toPrettyString ()); return autoForwarding ; } } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable forwarding: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable forwarding.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def enable forwarding (): """Enable email forwarding.
- Enable automatic forwarding You can choose to forward all of your new messages to another email address.
- These are set using the AutoForwarding object.
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error. settings.delegates.delete This method can now be used to delete delegates with any VerificationStatus , rather than just delegates which are accepted or expired . settings.delegates.get This is a new method, which might be preferable over the settings.delegates.list method depending on need.
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Old setting New setting signature signature Other changes: Signatures are now managed per alias.
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.

### Manage aliases and signatures with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { SendAs primaryAlias = null ; ListSendAsResponse aliases = service . users (). settings (). sendAs (). list ( "me" ). execute (); for ( SendAs alias : aliases . getSendAs ()) { if ( alias . getIsPrimary ()) { primaryAlias = alias ; break ; } } // Updating a new signature SendAs aliasSettings = new SendAs (). setSignature ( "Automated Signature" ); SendAs result = service . users (). settings (). sendAs (). patch ( "me" , primaryAlias . getSendAsEmail (), aliasSettings ) . execute (); //Prints the updated signature System . out . println ( "Updated signature - " + result . getSignature ()); return result . getSignature (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to update signature: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/update signature.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def update signature (): """Create and update signature in gmail.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) primary alias = None pylint: disable=E1101 aliases = service . users () . settings () . sendAs () . list ( userId = "me" ) . execute () for alias in aliases . get ( "sendAs" ): if alias . get ( "isPrimary" ): primary alias = alias break send as configuration = { "displayName" : primary alias . get ( "sendAsEmail" ), "signature" : "Automated Signature" , } pylint: disable=E1101 result = ( service . users () . settings () . sendAs () . patch ( userId = "me" , sendAsEmail = primary alias . get ( "sendAsEmail" ), body = send as configuration , ) . execute () ) print ( f 'Updated signature for: { result . get ( "displayName" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "signature" ) if name == " main " : update signature () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Aliases are also used to manage signatures for an account.
- The following code samples show how to set the signature for the user's primary address: Java gmail/snippets/src/main/java/UpdateSignature.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.ListSendAsResponse ; import com.google.api.services.gmail.model.SendAs ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Update Signature API / public class UpdateSignature { / Update the gmail signature. @return the updated signature id , {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static String updateGmailSignature () throws IOException { / Load pre-authorized user credentials from the environment.

### Performance tips \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- Here is an example that assumes the Demo resource uses ETags: GET https://www.googleapis.com/demo/v1/324 ?fields=etag,title,comment,characteristics Authorization: Bearer your auth token This is the partial response: 200 OK { "etag": " ETagString " "title": "New title" "comment": "First comment.", "characteristics": { "length": "short", "level": "5", "followers": ["Jo", "Will"], } } The following patch request is based on that response.

