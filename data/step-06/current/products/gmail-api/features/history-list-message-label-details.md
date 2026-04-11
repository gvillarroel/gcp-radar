---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.242Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "history.list message label details"
feature_slug: "history-list-message-label-details"
latest_feature_date: "2015-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/guides/sending"
keywords:
  - "history"
  - "list"
  - "message"
  - "label"
  - "details"
  - "the"
  - "method"
  - "returns"
---

# history.list message label details

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The history.list method returns current message label IDs in change events to help reconstruct message state before and after a change.

## Extended Definition

The history.list method returns current message label IDs in change events to help reconstruct message state before and after a change.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)

## Supporting Pages

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request. labelId string Only return messages with a label matching the ID. historyTypes[] enum ( HistoryType ) History types to be returned by the function Request body The request body must be empty.
- Any messages contained in the response will typically only have id and threadId fields populated. nextPageToken string Page token to retrieve the next page of results in the list. historyId string The ID of the mailbox's current history record.

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- The method returns an array of Gmail messages objects that contain the message id and threadId .
- This document explains how to call the Gmail API's messages.list method.

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The message.data field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user: { "emailAddress" : "user@example.com" , "historyId" : "9876543210" } You can then use the history.list method to get the change details for the user since their last known historyId , as described in the Synchronize clients with Gmail API .
- For example, use the history.list method to identify changes that occurred between your initial watch request and the receipt of the notification message shared in the previous example.
- For example, fall back to periodically calling the history.list method after a period with no notifications for a user.
- For example, use the following request to be notified any time a change is made to the inbox: Protocol POST "https://www.googleapis.com/gmail/v1/users/me/watch" Content - type : application / json { topicName : "projects/myproject/topics/mytopic" , labelIds : [ "INBOX" ], labelFilterBehavior : "INCLUDE" , } Python request = { 'labelIds' : [ 'INBOX' ], 'topicName' : 'projects/myproject/topics/mytopic' , 'labelFilterBehavior' : 'INCLUDE' } gmail . users () . watch ( userId = 'me' , body = request ) . execute () Watch response If the watch request is successful, you receive a response like the following: { historyId: 1234567890 expiration: 1431990098200 } The response contains the current mailbox historyId for the user.

### Create and send email messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); email . setText ( bodyText ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create send message message = service . users (). messages (). send ( "me" , message ). execute (); System . out . println ( "Message id: " + message . getId ()); System . out . println ( message . toPrettyString ()); return message ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to send message: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/send mail/send message.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail send message (): """Create and send an email message Print the returned message id Returns: Message object, including message id Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); MimeBodyPart mimeBodyPart = new MimeBodyPart (); mimeBodyPart . setContent ( bodyText , "text/plain" ); Multipart multipart = new MimeMultipart (); multipart . addBodyPart ( mimeBodyPart ); mimeBodyPart = new MimeBodyPart (); DataSource source = new FileDataSource ( file ); mimeBodyPart . setDataHandler ( new DataHandler ( source )); mimeBodyPart . setFileName ( file . getName ()); multipart . addBodyPart ( mimeBodyPart ); email . setContent ( multipart ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python Similar to the create messages example, this example also handles encoding the message to base64URL and assigning it to the raw field of the messages resource. gmail/snippet/send mail/create draft with attachment.py View on GitHub import base64 import mimetypes import os from email.message import EmailMessage from email.mime.audio import MIMEAudio from email.mime.base import MIMEBase from email.mime.image import MIMEImage from email.mime.text import MIMEText import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft with attachment (): """Create and insert a draft email with attachment.
- Send messages Once you have created a message, you can send it by supplying it in the request body of the messages.send method, as shown in the following examples: Java gmail/snippets/src/main/java/SendMessage.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Send Message API / public class SendMessage { / Send an email from the user's mailbox to its recipient. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the sent message, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Message sendEmail ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- Returns: A MIME part that can be attached to a message. """ content type , encoding = mimetypes . guess type ( file ) if content type is None or encoding is not None : content type = "application/octet-stream" main type , sub type = content type . split ( "/" , 1 ) if main type == "text" : with open ( file , "rb" ): msg = MIMEText ( "r" , subtype = sub type ) elif main type == "image" : with open ( file , "rb" ): msg = MIMEImage ( "r" , subtype = sub type ) elif main type == "audio" : with open ( file , "rb" ): msg = MIMEAudio ( "r" , subtype = sub type ) else : with open ( file , "rb" ): msg = MIMEBase ( main type , sub type ) msg . set payload ( file . read ()) filename = os . path . basename ( file ) msg . add header ( "Content-Disposition" , "attachment" , filename = filename ) return msg if name == " main " : gmail create draft with attachment () cURL curl --request POST \ 'https://gmail.googleapis.com/gmail/v1/users/me/drafts' \ --header 'Authorization: Bearer ACCESS TOKEN ' \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{"message":{"raw":" MESSAGE "}}' Replace the following: ACCESS TOKEN : the access token that grants access to the API.

