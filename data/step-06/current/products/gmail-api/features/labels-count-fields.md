---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.256Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Labels count fields"
feature_slug: "labels-count-fields"
latest_feature_date: "2014-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/performance"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
keywords:
  - "labels"
  - "count"
  - "fields"
  - "the"
  - "resource"
  - "adds"
  - "for"
  - "total"
---

# Labels count fields

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The Labels resource adds fields for total and unread message and thread counts.

## Extended Definition

The Labels resource adds fields for total and unread message and thread counts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.
- Old setting New setting Notes enable accessWindow Disabled when set to disabled enableFor accessWindow ALL MAIL is now allMail MAIL FROM NOW ON is now fromNowOn action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Manage IMAP settings To manage IMAP access in the Gmail API, use the settings resource.
- Old setting New setting Notes labelId id label name unreadCount messagesUnread visibility labelListVisibility SHOW is now labelShow HIDE is now labelHide Other changes: When updating or deleting labels, the Gmail API references labels by ID instead of by name.
- This means authorizing a domain administrator account doesn't let you migrate mail for other users in the domain.

### Performance tips \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/performance](https://developers.google.com/workspace/gmail/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- The request uses the fields parameter to specify which fields to return. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) The partial response looks like this: 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note: For APIs that support query parameters for data pagination ( maxResults and nextPageToken , for example), use those parameters to reduce the results of each query to a manageable size.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.users.settings.delegates Methods create POST /gmail/v1/users/{userId}/settings/delegates Adds a delegate with its verification status set directly to accepted , without sending any verification email. delete DELETE /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. get GET /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Gets the specified delegate. list GET /gmail/v1/users/{userId}/settings/delegates Lists the delegates for the specified account.
- REST Resource: v1.users.settings Methods getAutoForwarding GET /gmail/v1/users/{userId}/settings/autoForwarding Gets the auto-forwarding setting for the specified account. getImap GET /gmail/v1/users/{userId}/settings/imap Gets IMAP settings. getLanguage GET /gmail/v1/users/{userId}/settings/language Gets language settings. getPop GET /gmail/v1/users/{userId}/settings/pop Gets POP settings. getVacation GET /gmail/v1/users/{userId}/settings/vacation Gets vacation responder settings. updateAutoForwarding PUT /gmail/v1/users/{userId}/settings/autoForwarding Updates the auto-forwarding setting for the specified account. updateImap PUT /gmail/v1/users/{userId}/settings/imap Updates IMAP settings. updateLanguage PUT /gmail/v1/users/{userId}/settings/language Updates language settings. updatePop PUT /gmail/v1/users/{userId}/settings/pop Updates POP settings. updateVacation PUT /gmail/v1/users/{userId}/settings/vacation Updates vacation responder settings.
- REST Resource: v1.users.settings.sendAs Methods create POST /gmail/v1/users/{userId}/settings/sendAs Creates a custom "from" send-as alias. delete DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} Deletes the specified send-as alias. get GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} Gets the specified send-as alias. list GET /gmail/v1/users/{userId}/settings/sendAs Lists the send-as aliases for the specified account. patch PATCH /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} Patch the specified send-as alias. update PUT /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} Updates a send-as alias. verify POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify Sends a verification email to the specified send-as alias address.
- REST Resource: v1.users.settings.cse.identities Methods create POST /gmail/v1/users/{userId}/settings/cse/identities Creates and configures a client-side encryption identity that's authorized to send mail from the user account. delete DELETE /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} Deletes a client-side encryption identity. get GET /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} Retrieves a client-side encryption identity configuration. list GET /gmail/v1/users/{userId}/settings/cse/identities Lists the client-side encrypted identities for an authenticated user. patch PATCH /gmail/v1/users/{userId}/settings/cse/identities/{emailAddress} Associates a different key pair with an existing client-side encryption identity.

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Returns : Smime object, including smime information """ smime info = None try : with open ( cert filename , "rb" ) as cert : smime info = {} data = cert . read () . encode ( "UTF-8" ) smime info [ "pkcs12" ] = base64 . urlsafe b64encode ( data ) . decode () if cert password and len ( cert password ) > 0 : smime info [ "encryptedKeyPassword" ] = cert password except ( OSError , IOError ) as error : print ( f "An error occurred while reading the certificate file: { error } " ) smime info = None return smime info if name == " main " : print ( create smime info ( cert filename = "xyz" , cert password = "xyz" )) Upload an S/MIME certificate To upload a certificate, call the settings.sendAs.smimeInfo.insert method and supply the settings.sendAs.smimeInfo resource in the body of the request: Java gmail/snippets/src/main/java/InsertSmimeInfo.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.SmimeInfo ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Insert Smime Certificate API / public class InsertSmimeInfo { / Upload an S/MIME certificate for the user. @param userId User's email address. @param sendAsEmail The "send as" email address, or null if it should be the same as userId. @param smimeInfo The SmimeInfo object containing the user's S/MIME certificate. @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static SmimeInfo insertSmimeInfo ( String userId , String sendAsEmail , SmimeInfo smimeInfo ) throws IOException { / Load pre-authorized user credentials from the environment.
- Code samples The following code samples show how to use the Gmail API to manage S/MIME certificates for an organization with multiple users: Create an smimeInfo resource for an S/MIME certificate This code sample shows how to read a certificate from a file, encode it to a Base64URL string, and assign it to the pkcs12 field on the settings.sendAs.smimeInfo resource: Java gmail/snippets/src/main/java/CreateSmimeInfo.java View on GitHub import com.google.api.services.gmail.model.SmimeInfo ; import java.io.File ; import java.io.FileInputStream ; import java.io.IOException ; import java.io.InputStream ; import java.util.Base64 ; / Class to demonstrate the use of Gmail Create SmimeInfo API / public class CreateSmimeInfo { / Create an SmimeInfo resource for a certificate from file. @param filename Name of the file containing the S/MIME certificate. @param password Password for the certificate file, or null if the file is not password-protected. @return An SmimeInfo object with the specified certificate. / public static SmimeInfo createSmimeInfo ( String filename , String password ) { SmimeInfo smimeInfo = null ; InputStream in = null ; try { File file = new File ( filename ); in = new FileInputStream ( file ); byte [] fileContent = new byte [ ( int ) file . length () ] ; in . read ( fileContent ); smimeInfo = new SmimeInfo (); smimeInfo . setPkcs12 ( Base64 . getUrlEncoder (). encodeToString ( fileContent )); if ( password != null && password . length () > 0 ) { smimeInfo . setEncryptedKeyPassword ( password ); } } catch ( Exception e ) { System . out . printf ( "An error occured while reading the certificate file: %s\n" , e ); } finally { try { if ( in != null ) { in . close (); } } catch ( IOException ioe ) { System . out . printf ( "An error occured while closing the input stream: %s\n" , ioe ); } } return smimeInfo ; } } Python gmail/snippet/smime snippets/create smime info.py View on GitHub import base64 def create smime info ( cert filename , cert password ): """Create an smimeInfo resource for a certificate from file.
- Args: csv filename: Name of the CSV file. """ try : with open ( csv filename , "rb" ) as cert : csv reader = csv . reader ( cert , delimiter = "," ) next ( csv reader , None ) # skip CSV file header for row in csv reader : user id = row [ 0 ] cert filename = row [ 1 ] cert password = row [ 2 ] smime info = create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) if smime info : insert smime info . insert smime info () else : print ( f "Unable to read certificate file for user id: { user id } " ) return smime info except ( OSError , IOError ) as error : print ( f "An error occured while reading the CSV file: { error } " ) if name == " main " : insert cert from csv ( csv filename = "xyz" ) Certificate management This sample combines several methods from the settings.sendAs.smimeInfo resource to show how to manage certificates for your organization.
- Set the default S/MIME key for an alias Use the settings.sendAs.smimeInfo.setDefault method on the settings.sendAs.smimeInfo resource to mark the specified S/MIME key as the default for the specified alias.

