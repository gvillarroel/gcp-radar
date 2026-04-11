---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.241Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "drafts.list includeSpamTrash"
feature_slug: "drafts-list-includespamtrash"
latest_feature_date: "2016-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list"
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
keywords:
  - "drafts"
  - "list"
  - "includespamtrash"
  - "the"
  - "method"
  - "can"
  - "include"
  - "with"
---

# drafts.list includeSpamTrash

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The drafts.list method can include drafts with the SPAM or TRASH label when includeSpamTrash is enabled.

## Extended Definition

The drafts.list method can include drafts with the SPAM or TRASH label when includeSpamTrash is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list)
- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)

## Supporting Pages

### Method: users.drafts.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Response body If successful, the response body contains data with the following structure: JSON representation { "drafts" : [ { object ( Draft ) } ] , "nextPageToken" : string , "resultSizeEstimate" : integer } Fields drafts[] object ( Draft ) List of drafts.
- The messages.get method can fetch additional message details. nextPageToken string Token to retrieve the next page of results in the list. resultSizeEstimate integer ( uint32 format) Estimated total number of results.
- Home Google Workspace Gmail Reference Send feedback Method: users.drafts.list Stay organized with collections Save and categorize content based on your preferences.
- For example, "from:someuser@example.com rfc822msgid:<somemsgid@example.com> is:unread" . includeSpamTrash boolean Include drafts from SPAM and TRASH in the results.

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ if not send as email : send as email = user id creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . list ( userId = user id , sendAsEmail = send as email ) . execute () ) except HttpError as error : print ( f "An error occurred during list: { error } " ) return None default cert id = None best cert id = ( None , datetime . datetime . fromtimestamp ( 0 )) if not expire dt : expire dt = datetime . datetime . now () if results and "smimeInfo" in results : for smime info in results [ "smimeInfo" ]: cert id = smime info [ "id" ] is default cert = smime info [ "isDefault" ] if is default cert : default cert id = cert id exp = datetime . datetime . fromtimestamp ( smime info [ "expiration" ] / 1000 ) if exp > expire dt : if exp > best cert id [ 1 ]: best cert id = ( cert id , exp ) else : if is default cert : default cert id = None if not default cert id : default id = best cert id [ 0 ] if not default id and cert filename : create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) results = insert smime info . insert smime info () if results : default id = results [ "id" ] if default id : try : pylint: disable=maybe-no-member service . users () . settings () . sendAs () . smimeInfo () . setDefault ( userId = user id , sendAsEmail = send as email , id = default id ) . execute () return default id except HttpError as error : print ( f "An error occurred during setDefault: { error } " ) else : return default cert id return None if name == " main " : update smime cert ( user id = "xyz" , send as email = None , cert filename = "xyz" , cert password = "xyz" , expire dt = None , ) Related topics Manage aliases and signatures with the Gmail API Choose Gmail API scopes Turn on hosted S/MIME for message encryption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) user id = "gduser1@workspacesamples.dev" smime info = create smime info . create smime info ( cert filename = "xyz" , cert password = "xyz" ) send as email = None if not send as email : send as email = user id pylint: disable=maybe-no-member results = ( service . users () . settings () . sendAs () . smimeInfo () . insert ( userId = user id , sendAsEmail = send as email , body = smime info ) . execute () ) print ( f 'Inserted certificate; id: { results [ "id" ] } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) results = None return results if name == " main " : insert smime info () Manage multiple users' certificates These code samples show how to manage certificates for multiple users in an organization in one batch call: Insert certificates from a CSV file The following is a sample CSV file that lists user IDs and the path to each user's certificate: $ cat certificates.csv user1@example.com,/path/to/user1 cert.p12,cert password 1 user2@example.com,/path/to/user2 cert.p12,cert password 2 user3@example.com,/path/to/user3 cert.p12,cert password 3 Java You can use the CreateSmimeInfo and InsertSmimeInfo samples to upload the certificates for the users specified in a CSV file: gmail/snippets/src/main/java/InsertCertFromCsv.java View on GitHub import com.google.api.services.gmail.model.SmimeInfo ; import java.io.File ; import org.apache.commons.csv.CSVFormat ; import org.apache.commons.csv.CSVParser ; import org.apache.commons.csv.CSVRecord ; / Class to demonstrate the use of Gmail Insert Certificate from CSV File / public class InsertCertFromCsv { / Upload S/MIME certificates based on the contents of a CSV file. <p>Each row of the CSV file should contain a user ID, path to the certificate, and the certificate password. @param csvFilename Name of the CSV file. / public static void insertCertFromCsv ( String csvFilename ) { try { File csvFile = new File ( csvFilename ); CSVParser parser = CSVParser . parse ( csvFile , java . nio . charset .
- Returns : Smime object, including smime information """ smime info = None try : with open ( cert filename , "rb" ) as cert : smime info = {} data = cert . read () . encode ( "UTF-8" ) smime info [ "pkcs12" ] = base64 . urlsafe b64encode ( data ) . decode () if cert password and len ( cert password ) > 0 : smime info [ "encryptedKeyPassword" ] = cert password except ( OSError , IOError ) as error : print ( f "An error occurred while reading the certificate file: { error } " ) smime info = None return smime info if name == " main " : print ( create smime info ( cert filename = "xyz" , cert password = "xyz" )) Upload an S/MIME certificate To upload a certificate, call the settings.sendAs.smimeInfo.insert method and supply the settings.sendAs.smimeInfo resource in the body of the request: Java gmail/snippets/src/main/java/InsertSmimeInfo.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.SmimeInfo ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Insert Smime Certificate API / public class InsertSmimeInfo { / Upload an S/MIME certificate for the user. @param userId User's email address. @param sendAsEmail The "send as" email address, or null if it should be the same as userId. @param smimeInfo The SmimeInfo object containing the user's S/MIME certificate. @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static SmimeInfo insertSmimeInfo ( String userId , String sendAsEmail , SmimeInfo smimeInfo ) throws IOException { / Load pre-authorized user credentials from the environment.
- Args: csv filename: Name of the CSV file. """ try : with open ( csv filename , "rb" ) as cert : csv reader = csv . reader ( cert , delimiter = "," ) next ( csv reader , None ) # skip CSV file header for row in csv reader : user id = row [ 0 ] cert filename = row [ 1 ] cert password = row [ 2 ] smime info = create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) if smime info : insert smime info . insert smime info () else : print ( f "Unable to read certificate file for user id: { user id } " ) return smime info except ( OSError , IOError ) as error : print ( f "An error occured while reading the CSV file: { error } " ) if name == " main " : insert cert from csv ( csv filename = "xyz" ) Certificate management This sample combines several methods from the settings.sendAs.smimeInfo resource to show how to manage certificates for your organization.

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- This document explains how to call the Gmail API's messages.list method.
- The code handles pagination to retrieve all messages matching the query. gmail/snippet/list messages.py View on GitHub import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from googleapiclient.discovery import build from googleapiclient.errors import HttpError If modifying these scopes, delete the file token.json.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.drafts Methods create POST /gmail/v1/users/{userId}/drafts POST /upload/gmail/v1/users/{userId}/drafts Creates a new draft with the DRAFT label. delete DELETE /gmail/v1/users/{userId}/drafts/{id} Immediately and permanently deletes the specified draft. get GET /gmail/v1/users/{userId}/drafts/{id} Gets the specified draft. list GET /gmail/v1/users/{userId}/drafts Lists the drafts in the user's mailbox. send POST /gmail/v1/users/{userId}/drafts/send POST /upload/gmail/v1/users/{userId}/drafts/send Sends the specified, existing draft to the recipients in the To , Cc , and Bcc headers. update PUT /gmail/v1/users/{userId}/drafts/{id} PUT /upload/gmail/v1/users/{userId}/drafts/{id} Replaces a draft's content.
- REST Resource: v1.users.settings.delegates Methods create POST /gmail/v1/users/{userId}/settings/delegates Adds a delegate with its verification status set directly to accepted , without sending any verification email. delete DELETE /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. get GET /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Gets the specified delegate. list GET /gmail/v1/users/{userId}/settings/delegates Lists the delegates for the specified account.
- REST Resource: v1.users.settings.cse.identities Methods create POST /gmail/v1/users/{userId}/settings/cse/identities Creates and configures a client-side encryption identity that's authorized to send mail from the user account. delete DELETE /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} Deletes a client-side encryption identity. get GET /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} Retrieves a client-side encryption identity configuration. list GET /gmail/v1/users/{userId}/settings/cse/identities Lists the client-side encrypted identities for an authenticated user. patch PATCH /gmail/v1/users/{userId}/settings/cse/identities/{emailAddress} Associates a different key pair with an existing client-side encryption identity.

