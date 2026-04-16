---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.974Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.import neverMarkSpam parameter"
feature_slug: "messages-import-nevermarkspam-parameter"
latest_feature_date: "2015-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get"
  - "https://developers.google.com/workspace/gmail/api/guides/sending"
keywords:
  - "nevermarkspam"
  - "migration"
  - "parameter"
  - "supports"
  - "import"
  - "email"
  - "messages"
  - "method"
---

# messages.import neverMarkSpam parameter

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.import method supports the neverMarkSpam parameter for email migration use cases.

## Extended Definition

The messages.import method supports the neverMarkSpam parameter for email migration use cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)

## Supporting Pages

### Method: users.messages.import \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- Source ID: `site-docs-reference-required-2`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Query parameters Parameters internalDateSource enum ( InternalDateSource ) Source for Gmail's internal date of the message. neverMarkSpam boolean Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox. processForCalendar boolean Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user. deleted boolean Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator.
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.import Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/import Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/import The URL uses gRPC Transcoding syntax.
- This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing.

### Method: users.messages.get \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- Source ID: `site-docs-reference-required-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.get Stay organized with collections Save and categorize content based on your preferences.
- The ID is also contained in the result when a message is inserted ( messages.insert ) or imported ( messages.import ).
- Path parameters Parameters userId string The user's email address.
- Query parameters Parameters format enum ( Format ) The format to return the message in. metadataHeaders[] string When given and format is METADATA , only include headers specified.

### Create and send email messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Send messages Once you have created a message, you can send it by supplying it in the request body of the messages.send method, as shown in the following examples: Java gmail/snippets/src/main/java/SendMessage.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Send Message API / public class SendMessage { / Send an email from the user's mailbox to its recipient. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the sent message, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Message sendEmail ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); MimeBodyPart mimeBodyPart = new MimeBodyPart (); mimeBodyPart . setContent ( bodyText , "text/plain" ); Multipart multipart = new MimeMultipart (); multipart . addBodyPart ( mimeBodyPart ); mimeBodyPart = new MimeBodyPart (); DataSource source = new FileDataSource ( file ); mimeBodyPart . setDataHandler ( new DataHandler ( source )); mimeBodyPart . setFileName ( file . getName ()); multipart . addBodyPart ( mimeBodyPart ); email . setContent ( multipart ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python Similar to the create messages example, this example also handles encoding the message to base64URL and assigning it to the raw field of the messages resource. gmail/snippet/send mail/create draft with attachment.py View on GitHub import base64 import mimetypes import os from email.message import EmailMessage from email.mime.audio import MIMEAudio from email.mime.base import MIMEBase from email.mime.image import MIMEImage from email.mime.text import MIMEText import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft with attachment (): """Create and insert a draft email with attachment.
- The encoding and assignment steps are the same as create messages . gmail/snippets/src/main/java/CreateDraftWithAttachment.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Draft ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.File ; import java.io.IOException ; import java.util.Properties ; import javax.activation.DataHandler ; import javax.activation.DataSource ; import javax.activation.FileDataSource ; import javax.mail.MessagingException ; import javax.mail.Multipart ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeBodyPart ; import javax.mail.internet.MimeMessage ; import javax.mail.internet.MimeMultipart ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Draft with attachment API / public class CreateDraftWithAttachment { / Create a draft email with attachment. @param fromEmailAddress - Email address to appear in the from: header. @param toEmailAddress - Email address of the recipient. @param file - Path to the file to be attached. @return the created draft, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Draft createDraftMessageWithAttachment ( String fromEmailAddress , String toEmailAddress , File file ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( subject ); email . setText ( bodyText ); return email ; } } Next, encode the MimeMessage , instantiate a messages object, and set the base64URL encoded message string as the value of the raw property. gmail/snippets/src/main/java/CreateMessage.java View on GitHub import com.google.api.services.gmail.model.Message ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import javax.mail.MessagingException ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Message API / public class CreateMessage { / Create a message from an email. @param emailContent Email to be set to raw of message @return a message containing a base64url encoded email @throws IOException - if service account credentials file not found. @throws MessagingException - if a wrongly formatted address is encountered. / public static Message createMessageWithEmail ( MimeMessage emailContent ) throws MessagingException , IOException { ByteArrayOutputStream buffer = new ByteArrayOutputStream (); emailContent . writeTo ( buffer ); byte [] bytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( bytes ); Message message = new Message (); message . setRaw ( encodedEmail ); return message ; } } Python The following code sample shows how to create a MIME message, encode it to a base64URL string, and assign it to the raw field of the messages resource: gmail/snippet/send mail/create draft.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft (): """Create and insert a draft email.

