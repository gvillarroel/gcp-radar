---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.245Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.insert deleted parameter"
feature_slug: "messages-insert-deleted-parameter"
latest_feature_date: "2015-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
  - "https://developers.google.com/workspace/gmail/api/guides/sending"
keywords:
  - "messages"
  - "insert"
  - "deleted"
  - "parameter"
  - "the"
  - "method"
  - "supports"
  - "request"
---

# messages.insert deleted parameter

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The messages.insert method supports the deleted request parameter.

## Extended Definition

The messages.insert method supports the deleted request parameter.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)

## Supporting Pages

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Returns : Smime object, including smime information """ smime info = None try : with open ( cert filename , "rb" ) as cert : smime info = {} data = cert . read () . encode ( "UTF-8" ) smime info [ "pkcs12" ] = base64 . urlsafe b64encode ( data ) . decode () if cert password and len ( cert password ) > 0 : smime info [ "encryptedKeyPassword" ] = cert password except ( OSError , IOError ) as error : print ( f "An error occurred while reading the certificate file: { error } " ) smime info = None return smime info if name == " main " : print ( create smime info ( cert filename = "xyz" , cert password = "xyz" )) Upload an S/MIME certificate To upload a certificate, call the settings.sendAs.smimeInfo.insert method and supply the settings.sendAs.smimeInfo resource in the body of the request: Java gmail/snippets/src/main/java/InsertSmimeInfo.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.SmimeInfo ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Insert Smime Certificate API / public class InsertSmimeInfo { / Upload an S/MIME certificate for the user. @param userId User's email address. @param sendAsEmail The "send as" email address, or null if it should be the same as userId. @param smimeInfo The SmimeInfo object containing the user's S/MIME certificate. @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static SmimeInfo insertSmimeInfo ( String userId , String sendAsEmail , SmimeInfo smimeInfo ) throws IOException { / Load pre-authorized user credentials from the environment.
- Args: csv filename: Name of the CSV file. """ try : with open ( csv filename , "rb" ) as cert : csv reader = csv . reader ( cert , delimiter = "," ) next ( csv reader , None ) # skip CSV file header for row in csv reader : user id = row [ 0 ] cert filename = row [ 1 ] cert password = row [ 2 ] smime info = create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) if smime info : insert smime info . insert smime info () else : print ( f "Unable to read certificate file for user id: { user id } " ) return smime info except ( OSError , IOError ) as error : print ( f "An error occured while reading the CSV file: { error } " ) if name == " main " : insert cert from csv ( csv filename = "xyz" ) Certificate management This sample combines several methods from the settings.sendAs.smimeInfo resource to show how to manage certificates for your organization.
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); if ( sendAsEmail == null ) { sendAsEmail = userId ; } try { SmimeInfo results = service . users (). settings (). sendAs (). smimeInfo () . insert ( userId , sendAsEmail , smimeInfo ) . execute (); System . out . printf ( "Inserted certificate, id: %s\n" , results . getId ()); return results ; } catch ( IOException e ) { System . err . printf ( "An error occured: %s" , e ); } return null ; } } Python gmail/snippet/smime snippets/insert smime info.py View on GitHub import create smime info import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def insert smime info (): """Upload an S/MIME certificate for the user.
- Upload an S/MIME key Use the settings.sendAs.smimeInfo.insert method on the settings.sendAs.smimeInfo resource to upload a new S/MIME key for an alias belonging to a user.

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request. labelId string Only return messages with a label matching the ID. historyTypes[] enum ( HistoryType ) History types to be returned by the function Request body The request body must be empty.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes HistoryType History JSON representation MessageAdded JSON representation MessageDeleted JSON representation LabelAdded JSON representation LabelRemoved JSON representation Try it!

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- The code handles pagination to retrieve all messages matching the query. gmail/snippet/list messages.py View on GitHub import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from googleapiclient.discovery import build from googleapiclient.errors import HttpError If modifying these scopes, delete the file token.json.
- To fetch the full message content and metadata, use the message.id field to call the messages.get method.

### Create and send email messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Send messages Once you have created a message, you can send it by supplying it in the request body of the messages.send method, as shown in the following examples: Java gmail/snippets/src/main/java/SendMessage.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Send Message API / public class SendMessage { / Send an email from the user's mailbox to its recipient. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the sent message, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Message sendEmail ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); MimeBodyPart mimeBodyPart = new MimeBodyPart (); mimeBodyPart . setContent ( bodyText , "text/plain" ); Multipart multipart = new MimeMultipart (); multipart . addBodyPart ( mimeBodyPart ); mimeBodyPart = new MimeBodyPart (); DataSource source = new FileDataSource ( file ); mimeBodyPart . setDataHandler ( new DataHandler ( source )); mimeBodyPart . setFileName ( file . getName ()); multipart . addBodyPart ( mimeBodyPart ); email . setContent ( multipart ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python Similar to the create messages example, this example also handles encoding the message to base64URL and assigning it to the raw field of the messages resource. gmail/snippet/send mail/create draft with attachment.py View on GitHub import base64 import mimetypes import os from email.message import EmailMessage from email.mime.audio import MIMEAudio from email.mime.base import MIMEBase from email.mime.image import MIMEImage from email.mime.text import MIMEText import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft with attachment (): """Create and insert a draft email with attachment.
- The encoding and assignment steps are the same as create messages . gmail/snippets/src/main/java/CreateDraftWithAttachment.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Draft ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.File ; import java.io.IOException ; import java.util.Properties ; import javax.activation.DataHandler ; import javax.activation.DataSource ; import javax.activation.FileDataSource ; import javax.mail.MessagingException ; import javax.mail.Multipart ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeBodyPart ; import javax.mail.internet.MimeMessage ; import javax.mail.internet.MimeMultipart ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Draft with attachment API / public class CreateDraftWithAttachment { / Create a draft email with attachment. @param fromEmailAddress - Email address to appear in the from: header. @param toEmailAddress - Email address of the recipient. @param file - Path to the file to be attached. @return the created draft, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Draft createDraftMessageWithAttachment ( String fromEmailAddress , String toEmailAddress , File file ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( subject ); email . setText ( bodyText ); return email ; } } Next, encode the MimeMessage , instantiate a messages object, and set the base64URL encoded message string as the value of the raw property. gmail/snippets/src/main/java/CreateMessage.java View on GitHub import com.google.api.services.gmail.model.Message ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import javax.mail.MessagingException ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Message API / public class CreateMessage { / Create a message from an email. @param emailContent Email to be set to raw of message @return a message containing a base64url encoded email @throws IOException - if service account credentials file not found. @throws MessagingException - if a wrongly formatted address is encountered. / public static Message createMessageWithEmail ( MimeMessage emailContent ) throws MessagingException , IOException { ByteArrayOutputStream buffer = new ByteArrayOutputStream (); emailContent . writeTo ( buffer ); byte [] bytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( bytes ); Message message = new Message (); message . setRaw ( encodedEmail ); return message ; } } Python The following code sample shows how to create a MIME message, encode it to a base64URL string, and assign it to the raw field of the messages resource: gmail/snippet/send mail/create draft.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft (): """Create and insert a draft email.

