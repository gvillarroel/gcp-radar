---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.973Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.import deleted parameter"
feature_slug: "messages-import-deleted-parameter"
latest_feature_date: "2015-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get"
  - "https://developers.google.com/workspace/gmail/api/guides/drafts"
keywords:
  - "deleted"
  - "migration"
  - "parameter"
  - "supports"
  - "import"
  - "email"
  - "messages"
  - "method"
---

# messages.import deleted parameter

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.import method supports the deleted parameter for email migration use cases.

## Extended Definition

The messages.import method supports the deleted parameter for email migration use cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts)

## Supporting Pages

### Method: users.messages.import \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- Source ID: `site-docs-reference-required-2`
- Final score: 230
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

### Create and send draft emails \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- TO , new InternetAddress ( toEmailAddress )); email . setSubject ( messageSubject ); email . setText ( bodyText ); // Encode and wrap the MIME message into a gmail message ByteArrayOutputStream buffer = new ByteArrayOutputStream (); email . writeTo ( buffer ); byte [] rawMessageBytes = buffer . toByteArray (); String encodedEmail = Base64 . encodeBase64URLSafeString ( rawMessageBytes ); Message message = new Message (); message . setRaw ( encodedEmail ); try { // Create the draft message Draft draft = new Draft (); draft . setMessage ( message ); draft = service . users (). drafts (). create ( "me" , draft ). execute (); System . out . println ( "Draft id: " + draft . getId ()); System . out . println ( draft . toPrettyString ()); return draft ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create draft: " + e . getMessage ()); } else { throw e ; } } return null ; } } Python gmail/snippet/send mail/create draft.py View on GitHub import base64 from email.message import EmailMessage import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def gmail create draft (): """Create and insert a draft email.
- The following code samples demonstrate the process: Java gmail/snippets/src/main/java/CreateDraft.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Draft ; import com.google.api.services.gmail.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.util.Properties ; import javax.mail.MessagingException ; import javax.mail.Session ; import javax.mail.internet.InternetAddress ; import javax.mail.internet.MimeMessage ; import org.apache.commons.codec.binary.Base64 ; / Class to demonstrate the use of Gmail Create Draft API / public class CreateDraft { / Create a draft email. @param fromEmailAddress - Email address to appear in the from: header @param toEmailAddress - Email address of the recipient @return the created draft, {@code null} otherwise. @throws MessagingException - if a wrongly formatted address is encountered. @throws IOException - if service account credentials file not found. / public static Draft createDraftMessage ( String fromEmailAddress , String toEmailAddress ) throws MessagingException , IOException { / Load pre-authorized user credentials from the environment.
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); // Create the email content String messageSubject = "Test message" ; String bodyText = "lorem ipsum." ; // Encode as MIME message Properties props = new Properties (); Session session = Session . getDefaultInstance ( props , null ); MimeMessage email = new MimeMessage ( session ); email . setFrom ( new InternetAddress ( fromEmailAddress )); email . addRecipient ( javax . mail .
- You can retrieve the current MIME message contained in the draft by calling the drafts.get method with the query parameter format=raw .

