---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.266Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "RSVP Action"
feature_slug: "rsvp-action"
latest_feature_date: "2013-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/performance"
  - "https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
keywords:
  - "rsvp"
  - "action"
  - "an"
  - "that"
  - "lets"
  - "recipients"
  - "to"
  - "calendar"
---

# RSVP Action

Product: Gmail API
Coverage: LOW

## Step 02 Summary

An action that lets recipients RSVP to Google Calendar emails.

## Extended Definition

An action that lets recipients RSVP to Google Calendar emails.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)

## Supporting Pages

### Performance tips \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- The request uses the fields parameter to specify which fields to return. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) The partial response looks like this: 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note: For APIs that support query parameters for data pagination ( maxResults and nextPageToken , for example), use those parameters to reduce the results of each query to a manageable size.
- Here is an example that assumes the Demo resource uses ETags: GET https://www.googleapis.com/demo/v1/324 ?fields=etag,title,comment,characteristics Authorization: Bearer your auth token This is the partial response: 200 OK { "etag": " ETagString " "title": "New title" "comment": "First comment.", "characteristics": { "length": "short", "level": "5", "followers": ["Jo", "Will"], } } The following patch request is based on that response.

### Manage aliases and signatures with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { SendAs primaryAlias = null ; ListSendAsResponse aliases = service . users (). settings (). sendAs (). list ( "me" ). execute (); for ( SendAs alias : aliases . getSendAs ()) { if ( alias . getIsPrimary ()) { primaryAlias = alias ; break ; } } // Updating a new signature SendAs aliasSettings = new SendAs (). setSignature ( "Automated Signature" ); SendAs result = service . users (). settings (). sendAs (). patch ( "me" , primaryAlias . getSendAsEmail (), aliasSettings ) . execute (); //Prints the updated signature System . out . println ( "Updated signature - " + result . getSignature ()); return result . getSignature (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to update signature: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/update signature.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def update signature (): """Create and update signature in gmail.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) primary alias = None pylint: disable=E1101 aliases = service . users () . settings () . sendAs () . list ( userId = "me" ) . execute () for alias in aliases . get ( "sendAs" ): if alias . get ( "isPrimary" ): primary alias = alias break send as configuration = { "displayName" : primary alias . get ( "sendAsEmail" ), "signature" : "Automated Signature" , } pylint: disable=E1101 result = ( service . users () . settings () . sendAs () . patch ( userId = "me" , sendAsEmail = primary alias . get ( "sendAsEmail" ), body = send as configuration , ) . execute () ) print ( f 'Updated signature for: { result . get ( "displayName" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "signature" ) if name == " main " : update signature () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following code samples show how to set the signature for the user's primary address: Java gmail/snippets/src/main/java/UpdateSignature.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.ListSendAsResponse ; import com.google.api.services.gmail.model.SendAs ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Update Signature API / public class UpdateSignature { / Update the gmail signature. @return the updated signature id , {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static String updateGmailSignature () throws IOException { / Load pre-authorized user credentials from the environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) user id = "gduser1@workspacesamples.dev" smime info = create smime info . create smime info ( cert filename = "xyz" , cert password = "xyz" ) send as email = None if not send as email : send as email = user id pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . insert ( userId = user id , sendAsEmail = send as email , body = smime info ) . execute () ) print ( f 'Inserted certificate; id: { results [ "id" ] } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) results = None return results if name == " main " : insert smime info () Manage multiple users' certificates These code samples show how to manage certificates for multiple users in an organization in one batch call: Insert certificates from a CSV file The following is a sample CSV file that lists user IDs and the path to each user's certificate: $ cat certificates.csv user1@example.com,/path/to/user1 cert.p12,cert password 1 user2@example.com,/path/to/user2 cert.p12,cert password 2 user3@example.com,/path/to/user3 cert.p12,cert password 3 Java You can use the CreateSmimeInfo and InsertSmimeInfo samples to upload the certificates for the users specified in a CSV file: gmail/snippets/src/main/java/InsertCertFromCsv.java View on GitHub import com.google.api.services.gmail.model.SmimeInfo ; import java.io.File ; import org.apache.commons.csv.CSVFormat ; import org.apache.commons.csv.CSVParser ; import org.apache.commons.csv.CSVRecord ; / Class to demonstrate the use of Gmail Insert Certificate from CSV File / public class InsertCertFromCsv { / Upload S/MIME certificates based on the contents of a CSV file. <p>Each row of the CSV file should contain a user ID, path to the certificate, and the certificate password. @param csvFilename Name of the CSV file. / public static void insertCertFromCsv ( String csvFilename ) { try { File csvFile = new File ( csvFilename ); CSVParser parser = CSVParser . parse ( csvFile , java . nio . charset .
- To ensure that the new default key is used by Gmail users with whom the user has already communicated, ensure that the new default key has a not before date later than the previous default key or revoke the previous default key.
- Use a standard OAuth 2.0 flow that requires end-user consent to obtain an OAuth 2.0 access token.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ if not send as email : send as email = user id creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . list ( userId = user id , sendAsEmail = send as email ) . execute () ) except HttpError as error : print ( f "An error occurred during list: { error } " ) return None default cert id = None best cert id = ( None , datetime . datetime . fromtimestamp ( 0 )) if not expire dt : expire dt = datetime . datetime . now () if results and "smimeInfo" in results : for smime info in results [ "smimeInfo" ]: cert id = smime info [ "id" ] is default cert = smime info [ "isDefault" ] if is default cert : default cert id = cert id exp = datetime . datetime . fromtimestamp ( smime info [ "expiration" ] / 1000 ) if exp > expire dt : if exp > best cert id [ 1 ]: best cert id = ( cert id , exp ) else : if is default cert : default cert id = None if not default cert id : default id = best cert id [ 0 ] if not default id and cert filename : create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) results = insert smime info . insert smime info () if results : default id = results [ "id" ] if default id : try : pylint: disable=maybe-no-member service . users () . settings () . sendAs () . smimeInfo () . setDefault ( userId = user id , sendAsEmail = send as email , id = default id ) . execute () return default id except HttpError as error : print ( f "An error occurred during setDefault: { error } " ) else : return default cert id return None if name == " main " : update smime cert ( user id = "xyz" , send as email = None , cert filename = "xyz" , cert password = "xyz" , expire dt = None , ) Related topics Manage aliases and signatures with the Gmail API Choose Gmail API scopes Turn on hosted S/MIME for message encryption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.
- Old setting New setting Notes enable accessWindow Disabled when set to disabled enableFor accessWindow ALL MAIL is now allMail MAIL FROM NOW ON is now fromNowOn action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Manage IMAP settings To manage IMAP access in the Gmail API, use the settings resource.
- Old setting New setting Notes enable enabled forwardTo emailAddress action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Other changes: Forwarding addresses must be created and verified prior to use.
- Instead, you must use standard service accounts with domain-wide authority that are added to an allowlist in the Google Admin console to generate the appropriate authentication token.

