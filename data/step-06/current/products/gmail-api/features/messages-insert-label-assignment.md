---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.246Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.insert label assignment"
feature_slug: "messages-insert-label-assignment"
latest_feature_date: "2015-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/sending"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings"
keywords:
  - "messages"
  - "insert"
  - "label"
  - "assignment"
  - "the"
  - "method"
  - "can"
  - "set"
---

# messages.insert label assignment

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The messages.insert method can set the SENT and DRAFT labels on inserted messages.

## Extended Definition

The messages.insert method can set the SENT and DRAFT labels on inserted messages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.
- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error. settings.delegates.delete This method can now be used to delete delegates with any VerificationStatus , rather than just delegates which are accepted or expired . settings.delegates.get This is a new method, which might be preferable over the settings.delegates.list method depending on need.
- Old setting New setting Notes labelId id label name unreadCount messagesUnread visibility labelListVisibility SHOW is now labelShow HIDE is now labelHide Other changes: When updating or deleting labels, the Gmail API references labels by ID instead of by name.
- A delegate user must be referred to by their primary email address. settings.delegates.create This method can now be used to create delegate relationships across multiple domains belonging to the same Google Workspace organization.

### Create and send email messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sending](https://developers.google.com/workspace/gmail/api/guides/sending)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); MimeBodyPart mimeBodyPart = new MimeBodyPart (); mimeBodyPart . setContent ( bodyText , "text/plain" ); Multipart multipart = new MimeMultipart (); multipart . addBodyPart ( mimeBodyPart ); mimeBodyPart = new MimeBodyPart (); DataSource source = new FileDataSource ( file ); mimeBodyPart . setDataHandler ( new DataHandler ( source )); mimeBodyPart . setFileName ( file . getName ()); multipart . addBodyPart ( mimeBodyPart ); email . setContent ( multipart ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python Similar to the create messages example, this example also handles encoding the message to base64URL and assigning it to the raw field of the messages resource. gmail/snippet/send mail/create draft with attachment.py View on GitHub import base64 import mimetypes import os from email.message import EmailMessage from email.mime.audio import MIMEAudio from email.mime.base import MIMEBase from email.mime.image import MIMEImage from email.mime.text import MIMEText import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft with attachment (): """Create and insert a draft email with attachment.
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( subject ); email . setText ( bodyText ); return email ; } } Next, encode the MimeMessage , instantiate a messages object, and set the base64URL encoded message string as the value of the raw property. gmail/snippets/src/main/java/CreateMessage.java View on GitHub import com.google.api.services.gmail.model.Message ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import javax.mail.MessagingException ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Message API / public class CreateMessage { / Create a message from an email. @param emailContent Email to be set to raw of message @return a message containing a base64url encoded email @throws IOException - if service account credentials file not found. @throws MessagingException - if a wrongly formatted address is encountered. / public static Message createMessageWithEmail ( MimeMessage emailContent ) throws MessagingException , IOException { ByteArrayOutputStream buffer = new ByteArrayOutputStream (); emailContent . writeTo ( buffer ); byte [] bytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( bytes ); Message message = new Message (); message . setRaw ( encodedEmail ); return message ; } } Python The following code sample shows how to create a MIME message, encode it to a base64URL string, and assign it to the raw field of the messages resource: gmail/snippet/send mail/create draft.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft (): """Create and insert a draft email.
- Send messages Once you have created a message, you can send it by supplying it in the request body of the messages.send method, as shown in the following examples: Java gmail/snippets/src/main/java/SendMessage.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Send Message API / public class SendMessage { / Send an email from the user's mailbox to its recipient. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the sent message, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Message sendEmail ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- There are two ways to send email using the Gmail API: You can send it directly using the messages.send method.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.settings.sendAs.smimeInfo Methods delete DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} Deletes the specified S/MIME config for the specified send-as alias. get GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} Gets the specified S/MIME config for the specified send-as alias. insert POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo Insert (upload) the given S/MIME config for the specified send-as alias. list GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo Lists S/MIME configs for the specified send-as alias. setDefault POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault Sets the default S/MIME config for the specified send-as alias.
- REST Resource: v1.users REST Resource: v1.users.drafts REST Resource: v1.users.history REST Resource: v1.users.labels REST Resource: v1.users.messages REST Resource: v1.users.messages.attachments REST Resource: v1.users.settings REST Resource: v1.users.settings.cse.identities REST Resource: v1.users.settings.cse.keypairs REST Resource: v1.users.settings.delegates REST Resource: v1.users.settings.filters REST Resource: v1.users.settings.forwardingAddresses REST Resource: v1.users.settings.sendAs REST Resource: v1.users.settings.sendAs.smimeInfo REST Resource: v1.users.threads Service: gmail.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.users.settings.delegates Methods create POST /gmail/v1/users/{userId}/settings/delegates Adds a delegate with its verification status set directly to accepted , without sending any verification email. delete DELETE /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. get GET /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Gets the specified delegate. list GET /gmail/v1/users/{userId}/settings/delegates Lists the delegates for the specified account.

### Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Value Effect archive Move messages out of the INBOX leaveInInbox Do nothing; leave messages unread in the INBOX markRead Leave the message in the INBOX and mark it as read trash Move the message to the TRASH IMAP You can manage IMAP settings for an account using the ImapSettings object.
- Related topics IMAP, POP, and SMTP for Gmail IMAP API Choose your IMAP email client settings for Gmail Read Gmail messages on other email clients using POP Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can use the settings resource of the Gmail API to configure how Gmail handles POP and IMAP protocols: settings.getPop settings.updatePop settings.getImap settings.updateImap POP You can manage POP settings for an account using the PopSettings object.
- Value Effect archive Move messages marked as deleted out of the INBOX deleteForever Permanently delete messages marked as deleted trash Move messages marked as deleted to the TRASH If the boolean autoExpunge field is true , Gmail immediately expunges a message when it is marked as deleted in IMAP.

