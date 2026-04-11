---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.243Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Message.internalDate"
feature_slug: "message-internaldate"
latest_feature_date: "2015-06-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/InternalDateSource"
  - "https://developers.google.com/workspace/gmail/api/guides/vacation_settings"
keywords:
  - "message"
  - "internaldate"
  - "the"
  - "field"
  - "exposes"
  - "creation"
  - "timestamp"
  - "in"
---

# Message.internalDate

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The Message.internalDate field exposes a message's creation timestamp in the mailbox.

## Extended Definition

The Message.internalDate field exposes a message's creation timestamp in the mailbox.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/InternalDateSource](https://developers.google.com/workspace/gmail/api/reference/rest/v1/InternalDateSource)
- [https://developers.google.com/workspace/gmail/api/guides/vacation_settings](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)

## Supporting Pages

### Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Value Effect archive Move messages marked as deleted out of the INBOX deleteForever Permanently delete messages marked as deleted trash Move messages marked as deleted to the TRASH If the boolean autoExpunge field is true , Gmail immediately expunges a message when it is marked as deleted in IMAP.
- This field determines whether POP is enabled and which messages the API retrieves.
- Related topics IMAP, POP, and SMTP for Gmail IMAP API Choose your IMAP email client settings for Gmail Read Gmail messages on other email clients using POP Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Value Effect archive Move messages out of the INBOX leaveInInbox Do nothing; leave messages unread in the INBOX markRead Leave the message in the INBOX and mark it as read trash Move the message to the TRASH IMAP You can manage IMAP settings for an account using the ImapSettings object.

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto-forwarding and move forwarded messages to the trash ForwardingAddress address = new ForwardingAddress () . setForwardingEmail ( forwardingEmail ); ForwardingAddress createAddressResult = service . users (). settings (). forwardingAddresses () . create ( "me" , address ). execute (); if ( createAddressResult . getVerificationStatus (). equals ( "accepted" )) { AutoForwarding autoForwarding = new AutoForwarding () . setEnabled ( true ) . setEmailAddress ( address . getForwardingEmail ()) . setDisposition ( "trash" ); autoForwarding = service . users (). settings (). updateAutoForwarding ( "me" , autoForwarding ). execute (); System . out . println ( autoForwarding . toPrettyString ()); return autoForwarding ; } } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable forwarding: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable forwarding.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def enable forwarding (): """Enable email forwarding.
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) address = { "forwardingEmail" : "gduser1@workspacesamples.dev" } pylint: disable=E1101 result = ( service . users () . settings () . forwardingAddresses () . create ( userId = "me" , body = address ) . execute () ) if result . get ( "verificationStatus" ) == "accepted" : body = { "emailAddress" : result . get ( "forwardingEmail" ), "enabled" : True , "disposition" : "trash" , } pylint: disable=E1101 result = ( service . users () . settings () . updateAutoForwarding ( userId = "me" , body = body ) . execute () ) print ( f "Forwarding is enabled : { result } " ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result if name == " main " : enable forwarding () To disable auto-forwarding, call the updateAutoForwarding method and set the enabled field on the AutoForwarding object to false .
- The call requires a registered and verified forwarding address and an action to take on forwarded messages.

### InternalDateSource \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/InternalDateSource](https://developers.google.com/workspace/gmail/api/reference/rest/v1/InternalDateSource)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
- Enums receivedTime Internal message date set to current time when received by Gmail. dateHeader Internal message time based on 'Date' header in email, when valid.
- Home Google Workspace Gmail Reference Send feedback InternalDateSource Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Manage vacation settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/vacation_settings](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Thanks!" ), "restrictToDomain" : True , "startTime" : long ( start time ), "endTime" : long ( end time ), } pylint: disable=E1101 response = ( service . users () . settings () . updateVacation ( userId = "me" , body = vacation settings ) . execute () ) print ( f "Enabled AutoReply with message: { response . get ( 'responseBodyHtml' ) } " ) except HttpError as error : print ( f "An error occurred: { error } " ) response = None return response if name == " main " : enable auto reply () To disable automatic reply, call the settings.updateVacation method and set the enableAutoReply field on the VacationSettings object to false .
- The following code samples show how to set an automatic reply for a fixed period of time and restrict replies to users in the same domain: Java gmail/snippets/src/main/java/EnableAutoReply.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.VacationSettings ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; import java.time.LocalDateTime ; import java.time.ZoneOffset ; import java.time.ZonedDateTime ; / Class to demonstrate the use of Gmail Enable Auto Reply API / public class EnableAutoReply { / Enables the auto reply @return the reply message and response metadata. @throws IOException - if service account credentials file not found. / public static VacationSettings autoReply () throws IOException { / Load pre-authorized user credentials from the environment.
- Thanks!" ) . setRestrictToDomain ( true ) . setStartTime ( LocalDateTime . now () . toEpochSecond ( ZoneOffset . from ( ZonedDateTime . now ())) 1000 ) . setEndTime ( LocalDateTime . now (). plusDays ( 7 ) . toEpochSecond ( ZoneOffset . from ( ZonedDateTime . now ())) 1000 ); VacationSettings response = service . users (). settings () . updateVacation ( "me" , vacationSettings ). execute (); // Prints the auto-reply response body System . out . println ( "Enabled auto reply with message : " + response . getResponseBodyHtml ()); return response ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable auto reply: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable auto reply.py View on GitHub from datetime import datetime , timedelta import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError from numpy import long def enable auto reply (): """Enable auto reply.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) epoch = datetime . utcfromtimestamp ( 0 ) now = datetime . now () start time = ( now - epoch ) . total seconds () 1000 end time = ( now + timedelta ( days = 7 ) - epoch ) . total seconds () 1000 vacation settings = { "enableAutoReply" : True , "responseBodyHtml" : ( "I am on vacation and will reply when I am " "back in the office.

