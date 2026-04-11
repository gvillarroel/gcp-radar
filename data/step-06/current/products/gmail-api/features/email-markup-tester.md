---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.260Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Email Markup Tester"
feature_slug: "email-markup-tester"
latest_feature_date: "2013-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/drafts"
  - "https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/sending"
keywords:
  - "email"
  - "markup"
  - "tester"
  - "the"
  - "replaced"
  - "schema"
  - "validator"
  - "tool"
---

# Email Markup Tester

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The Email Markup Tester replaced the Schema Validator tool for testing email schemas.

## Extended Definition

The Email Markup Tester replaced the Schema Validator tool for testing email schemas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts)
- [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.
- The Email Settings API used the scope: https://apps-apis.google.com/a/feeds/emailsettings/2.0/ The equivalent scopes in the Gmail API are: https://www.googleapis.com/auth/gmail.settings.basic https://www.googleapis.com/auth/gmail.settings.sharing Protocol changes The Email Settings API uses the XML based GDATA protocol.
- Old setting New setting contactsOnly restrictToContacts domainOnly restrictToDomain enable enableAutoReply endDate endTime message responseBodyHtml responseBodyPlainText startDate startTime subject responseSubject Manage signature settings To manage email signatures in the Gmail API, use the settings.sendAs resource.
- Old setting New setting Notes enable enabled forwardTo emailAddress action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Other changes: Forwarding addresses must be created and verified prior to use.

### Create and send draft emails \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The following code samples demonstrate the process: Java gmail/snippets/src/main/java/CreateDraft.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Draft ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Draft API / public class CreateDraft { / Create a draft email. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the created draft, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Draft createDraftMessage ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) message = EmailMessage () message . set content ( "This is automated draft mail" ) message [ "To" ] = "gduser1@workspacesamples.dev" message [ "From" ] = "gduser2@workspacesamples.dev" message [ "Subject" ] = "Automated draft" encoded message encoded message = base64 . urlsafe b64encode ( message . as bytes ()) . decode () create message = { "message" : { "raw" : encoded message }} pylint: disable=E1101 draft = ( service . users () . drafts () . create ( userId = "me" , body = create message ) . execute () ) print ( f 'Draft id: { draft [ "id" ] } \n Draft message: { draft [ "message" ] } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) draft = None return draft if name == " main " : gmail create draft () cURL curl --request POST \ 'https://gmail.googleapis.com/gmail/v1/users/me/drafts' \ --header 'Authorization: Bearer ACCESS TOKEN " \ --header ' Accept: application/json ' \ --header ' Content-Type: application/json ' \ --data ' { "message" : { "raw" : " MESSAGE " }} ' Replace the following: ACCESS TOKEN : the access token that grants access to the API.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); email . setText ( bodyText ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getMessage ()); } else { throw e ; } } return null ; } } Python gmail/snippet/send mail/create draft.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft (): """Create and insert a draft email.
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); // Create the email content String messageSubject = "Test message" ; String bodyText = "lorem ipsum." ; // Encode as MIME message Properties props = new Properties (); Session session = Session . getDefaultInstance ( props , null ); MimeMessage email = new MimeMessage ( session ); email . setFrom ( new InternetAddress ( fromEmailAddress )); email . addRecipient ( javax . mail .

### Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Related topics IMAP, POP, and SMTP for Gmail IMAP API Choose your IMAP email client settings for Gmail Read Gmail messages on other email clients using POP Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- POP and IMAP are two ways to read your Gmail messages in other email clients.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Value Effect archive Move messages marked as deleted out of the INBOX deleteForever Permanently delete messages marked as deleted trash Move messages marked as deleted to the TRASH If the boolean autoExpunge field is true , Gmail immediately expunges a message when it is marked as deleted in IMAP.

### Create and send email messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); MimeBodyPart mimeBodyPart = new MimeBodyPart (); mimeBodyPart . setContent ( bodyText , "text/plain" ); Multipart multipart = new MimeMultipart (); multipart . addBodyPart ( mimeBodyPart ); mimeBodyPart = new MimeBodyPart (); DataSource source = new FileDataSource ( file ); mimeBodyPart . setDataHandler ( new DataHandler ( source )); mimeBodyPart . setFileName ( file . getName ()); multipart . addBodyPart ( mimeBodyPart ); email . setContent ( multipart ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python Similar to the create messages example, this example also handles encoding the message to base64URL and assigning it to the raw field of the messages resource. gmail/snippet/send mail/create draft with attachment.py View on GitHub import base64 import mimetypes import os from email.message import EmailMessage from email.mime.audio import MIMEAudio from email.mime.base import MIMEBase from email.mime.image import MIMEImage from email.mime.text import MIMEText import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft with attachment (): """Create and insert a draft email with attachment.
- The encoding and assignment steps are the same as create messages . gmail/snippets/src/main/java/CreateDraftWithAttachment.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Draft ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.File ; import java.io.IOException ; import java.util.Properties ; import javax.activation.DataHandler ; import javax.activation.DataSource ; import javax.activation.FileDataSource ; import javax.mail.MessagingException ; import javax.mail.Multipart ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeBodyPart ; import javax.mail.internet.MimeMessage ; import javax.mail.internet.MimeMultipart ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Draft with attachment API / public class CreateDraftWithAttachment { / Create a draft email with attachment. @param fromEmailAddress - Email address to appear in the from: header. @param toEmailAddress - Email address of the recipient. @param file - Path to the file to be attached. @return the created draft, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Draft createDraftMessageWithAttachment ( String fromEmailAddress , String toEmailAddress , File file ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( subject ); email . setText ( bodyText ); return email ; } } Next, encode the MimeMessage , instantiate a messages object, and set the base64URL encoded message string as the value of the raw property. gmail/snippets/src/main/java/CreateMessage.java View on GitHub import com.google.api.services.gmail.model.Message ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import javax.mail.MessagingException ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Message API / public class CreateMessage { / Create a message from an email. @param emailContent Email to be set to raw of message @return a message containing a base64url encoded email @throws IOException - if service account credentials file not found. @throws MessagingException - if a wrongly formatted address is encountered. / public static Message createMessageWithEmail ( MimeMessage emailContent ) throws MessagingException , IOException { ByteArrayOutputStream buffer = new ByteArrayOutputStream (); emailContent . writeTo ( buffer ); byte [] bytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( bytes ); Message message = new Message (); message . setRaw ( encodedEmail ); return message ; } } Python The following code sample shows how to create a MIME message, encode it to a base64URL string, and assign it to the raw field of the messages resource: gmail/snippet/send mail/create draft.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft (): """Create and insert a draft email.
- Send messages Once you have created a message, you can send it by supplying it in the request body of the messages.send method, as shown in the following examples: Java gmail/snippets/src/main/java/SendMessage.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Send Message API / public class SendMessage { / Send an email from the user's mailbox to its recipient. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the sent message, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Message sendEmail ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.

