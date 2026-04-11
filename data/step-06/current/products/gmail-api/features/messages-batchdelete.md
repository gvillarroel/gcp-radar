---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.240Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.batchDelete"
feature_slug: "messages-batchdelete"
latest_feature_date: "2016-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
  - "https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings"
keywords:
  - "messages"
  - "batchdelete"
  - "the"
  - "method"
  - "deletes"
  - "multiple"
  - "in"
  - "single"
---

# messages.batchDelete

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The messages.batchDelete method deletes multiple messages in a single batch operation.

## Extended Definition

The messages.batchDelete method deletes multiple messages in a single batch operation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)

## Supporting Pages

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.labels Methods create POST /gmail/v1/users/{userId}/labels Creates a new label. delete DELETE /gmail/v1/users/{userId}/labels/{id} Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to. get GET /gmail/v1/users/{userId}/labels/{id} Gets the specified label. list GET /gmail/v1/users/{userId}/labels Lists all labels in the user's mailbox. patch PATCH /gmail/v1/users/{userId}/labels/{id} Patch the specified label. update PUT /gmail/v1/users/{userId}/labels/{id} Updates the specified label.
- REST Resource: v1.users.settings.cse.keypairs Methods create POST /gmail/v1/users/{userId}/settings/cse/keypairs Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. disable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable Turns off a client-side encryption key pair. enable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable Turns on a client-side encryption key pair that was turned off. get GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId} Retrieves an existing client-side encryption key pair. list GET /gmail/v1/users/{userId}/settings/cse/keypairs Lists client-side encryption key pairs for an authenticated user. obliterate POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate Deletes a client-side encryption key pair permanently and immediately.
- REST Resource: v1.users.settings.sendAs.smimeInfo Methods delete DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} Deletes the specified S/MIME config for the specified send-as alias. get GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} Gets the specified S/MIME config for the specified send-as alias. insert POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo Insert (upload) the given S/MIME config for the specified send-as alias. list GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo Lists S/MIME configs for the specified send-as alias. setDefault POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault Sets the default S/MIME config for the specified send-as alias.

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto-forwarding and move forwarded messages to the trash ForwardingAddress address = new ForwardingAddress () . setForwardingEmail ( forwardingEmail ); ForwardingAddress createAddressResult = service . users (). settings (). forwardingAddresses () . create ( "me" , address ). execute (); if ( createAddressResult . getVerificationStatus (). equals ( "accepted" )) { AutoForwarding autoForwarding = new AutoForwarding () . setEnabled ( true ) . setEmailAddress ( address . getForwardingEmail ()) . setDisposition ( "trash" ); autoForwarding = service . users (). settings (). updateAutoForwarding ( "me" , autoForwarding ). execute (); System . out . println ( autoForwarding . toPrettyString ()); return autoForwarding ; } } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable forwarding: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable forwarding.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def enable forwarding (): """Enable email forwarding.
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) address = { "forwardingEmail" : "gduser1@workspacesamples.dev" } pylint: disable=E1101 result = ( service . users () . settings () . forwardingAddresses () . create ( userId = "me" , body = address ) . execute () ) if result . get ( "verificationStatus" ) == "accepted" : body = { "emailAddress" : result . get ( "forwardingEmail" ), "enabled" : True , "disposition" : "trash" , } pylint: disable=E1101 result = ( service . users () . settings () . updateAutoForwarding ( userId = "me" , body = body ) . execute () ) print ( f "Forwarding is enabled : { result } " ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result if name == " main " : enable forwarding () To disable auto-forwarding, call the updateAutoForwarding method and set the enabled field on the AutoForwarding object to false .
- For information on how to create , list , get , or delete forwarding addresses, see the methods on the settings.forwardingAddresses resource.

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- The method returns an array of Gmail messages objects that contain the message id and threadId .
- This document explains how to call the Gmail API's messages.list method.

### Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Related topics IMAP, POP, and SMTP for Gmail IMAP API Choose your IMAP email client settings for Gmail Read Gmail messages on other email clients using POP Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Value Effect archive Move messages marked as deleted out of the INBOX deleteForever Permanently delete messages marked as deleted trash Move messages marked as deleted to the TRASH If the boolean autoExpunge field is true , Gmail immediately expunges a message when it is marked as deleted in IMAP.
- Value Effect archive Move messages out of the INBOX leaveInInbox Do nothing; leave messages unread in the INBOX markRead Leave the message in the INBOX and mark it as read trash Move the message to the TRASH IMAP You can manage IMAP settings for an account using the ImapSettings object.
- Otherwise, messages remain until the IMAP client explicitly requests their removal.

