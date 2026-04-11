---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.254Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "getProfile method"
feature_slug: "getprofile-method"
latest_feature_date: "2014-10-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
  - "https://developers.google.com/workspace/gmail/api/guides/uploads"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/sending"
keywords:
  - "getprofile"
  - "method"
  - "the"
  - "returns"
  - "mailbox"
  - "wide"
  - "metadata"
  - "such"
---

# getProfile method

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The getProfile method returns mailbox-wide metadata such as history ID and total message and thread counts.

## Extended Definition

The getProfile method returns mailbox-wide metadata such as history ID and total message and thread counts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)

## Supporting Pages

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Returns : Smime object, including smime information """ smime info = None try : with open ( cert filename , "rb" ) as cert : smime info = {} data = cert . read () . encode ( "UTF-8" ) smime info [ "pkcs12" ] = base64 . urlsafe b64encode ( data ) . decode () if cert password and len ( cert password ) > 0 : smime info [ "encryptedKeyPassword" ] = cert password except ( OSError , IOError ) as error : print ( f "An error occurred while reading the certificate file: { error } " ) smime info = None return smime info if name == " main " : print ( create smime info ( cert filename = "xyz" , cert password = "xyz" )) Upload an S/MIME certificate To upload a certificate, call the settings.sendAs.smimeInfo.insert method and supply the settings.sendAs.smimeInfo resource in the body of the request: Java gmail/snippets/src/main/java/InsertSmimeInfo.java View on GitHub import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.SmimeInfo ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Insert Smime Certificate API / public class InsertSmimeInfo { / Upload an S/MIME certificate for the user. @param userId User's email address. @param sendAsEmail The "send as" email address, or null if it should be the same as userId. @param smimeInfo The SmimeInfo object containing the user's S/MIME certificate. @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static SmimeInfo insertSmimeInfo ( String userId , String sendAsEmail , SmimeInfo smimeInfo ) throws IOException { / Load pre-authorized user credentials from the environment.
- Authorize API access To authorize access to the Gmail API, use one of the following methods: Use a service account with domain-wide delegation of authority .
- A successful settings.sendAs.smimeInfo.insert method call returns the settings.sendAs.smimeInfo resource id used to refer to the key in the future.
- Args: csv filename: Name of the CSV file. """ try : with open ( csv filename , "rb" ) as cert : csv reader = csv . reader ( cert , delimiter = "," ) next ( csv reader , None ) # skip CSV file header for row in csv reader : user id = row [ 0 ] cert filename = row [ 1 ] cert password = row [ 2 ] smime info = create smime info . create smime info ( cert filename = cert filename , cert password = cert password ) if smime info : insert smime info . insert smime info () else : print ( f "Unable to read certificate file for user id: { user id } " ) return smime info except ( OSError , IOError ) as error : print ( f "An error occured while reading the CSV file: { error } " ) if name == " main " : insert cert from csv ( csv filename = "xyz" ) Certificate management This sample combines several methods from the settings.sendAs.smimeInfo resource to show how to manage certificates for your organization.

### Upload attachments \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } --foo bar baz Content-Type: message/rfc822 Email Message data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=media HTTP/1.1 Host: www.googleapis.com Content-Type: message/rfc822 Content-Length: number of bytes in file Authorization: Bearer your auth token Email Message data If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Multipart upload If you have metadata that you want to send along with the data to upload, you can make a single multipart/related request.
- Step 1: Start a resumable session To initiate a resumable upload, make a POST or PUT request to the method's /upload URI and add the query parameter uploadType=resumable , for example: POST https://www.googleapis.com/upload/gmail/v1/users/ userId /messages/send?uploadType=resumable For this initiating request, the body is either empty or it contains the metadata only; you'll transfer the actual contents of the file you want to upload in subsequent requests.
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: message/rfc822 X-Upload-Content-Length: 2000000 { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- Authorization scopes Requires one of the following OAuth scopes: https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.metadata For more information, see the OAuth 2.0 Overview .
- Any messages contained in the response will typically only have id and threadId fields populated. nextPageToken string Page token to retrieve the next page of results in the list. historyId string The ID of the mailbox's current history record.

### Create and send email messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Send messages Once you have created a message, you can send it by supplying it in the request body of the messages.send method, as shown in the following examples: Java gmail/snippets/src/main/java/SendMessage.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Send Message API / public class SendMessage { / Send an email from the user's mailbox to its recipient. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the sent message, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Message sendEmail ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); email . setText ( bodyText ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create send message message = service . users (). messages (). send ( "me" , message ). execute (); System . out . println ( "Message id: " + message . getId ()); System . out . println ( message . toPrettyString ()); return message ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to send message: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/send mail/send message.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail send message (): """Create and send an email message Print the returned message id Returns: Message object, including message id Load pre-authorized user credentials from the environment.
- Returns: A MIME part that can be attached to a message. """ content type , encoding = mimetypes . guess type ( file ) if content type is None or encoding is not None : content type = "application/octet-stream" main type , sub type = content type . split ( "/" , 1 ) if main type == "text" : with open ( file , "rb" ): msg = MIMEText ( "r" , subtype = sub type ) elif main type == "image" : with open ( file , "rb" ): msg = MIMEImage ( "r" , subtype = sub type ) elif main type == "audio" : with open ( file , "rb" ): msg = MIMEAudio ( "r" , subtype = sub type ) else : with open ( file , "rb" ): msg = MIMEBase ( main type , sub type ) msg . set payload ( file . read ()) filename = os . path . basename ( file ) msg . add header ( "Content-Disposition" , "attachment" , filename = filename ) return msg if name == " main " : gmail create draft with attachment () cURL curl --request POST \ 'https://gmail.googleapis.com/gmail/v1/users/me/drafts' \ --header 'Authorization: Bearer ACCESS TOKEN ' \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{"message":{"raw":" MESSAGE "}}' Replace the following: ACCESS TOKEN : the access token that grants access to the API.
- The following code sample shows how to create the email message, including the headers: gmail/snippets/src/main/java/CreateEmail.java View on GitHub import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; / Class to demonstrate the use of Gmail Create Email API / public class CreateEmail { / Create a MimeMessage using the parameters provided. @param toEmailAddress email address of the receiver @param fromEmailAddress email address of the sender, the mailbox account @param subject subject of the email @param bodyText body text of the email @return the MimeMessage to be used to send email @throws MessagingException - if a wrongly formatted address is encountered. / public static MimeMessage createEmail ( String toEmailAddress , String fromEmailAddress , String subject , String bodyText ) throws MessagingException { Properties props = new Properties (); Session session = Session . getDefaultInstance ( props , null ); MimeMessage email = new MimeMessage ( session ); email . setFrom ( new InternetAddress ( fromEmailAddress )); email . addRecipient ( javax . mail .

