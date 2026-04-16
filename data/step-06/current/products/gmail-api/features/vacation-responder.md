---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.971Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Vacation responder"
feature_slug: "vacation-responder"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/vacation_settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
keywords:
  - "responder"
  - "vacation"
  - "endpoints"
  - "available"
  - "managing"
  - "settings"
  - "mail"
---

# Vacation responder

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

New endpoints are available for managing vacation responder settings in mail settings.

## Extended Definition

New endpoints are available for managing vacation responder settings in mail settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/vacation_settings](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)

## Supporting Pages

### Manage vacation settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/vacation_settings](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code samples show how to set an automatic reply for a fixed period of time and restrict replies to users in the same domain: Java gmail/snippets/src/main/java/EnableAutoReply.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.VacationSettings ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; import java.time.LocalDateTime ; import java.time.ZoneOffset ; import java.time.ZonedDateTime ; / Class to demonstrate the use of Gmail Enable Auto Reply API / public class EnableAutoReply { / Enables the auto reply @return the reply message and response metadata. @throws IOException - if service account credentials file not found. / public static VacationSettings autoReply () throws IOException { / Load pre-authorized user credentials from the environment.
- Thanks!" ) . setRestrictToDomain ( true ) . setStartTime ( LocalDateTime . now () . toEpochSecond ( ZoneOffset . from ( ZonedDateTime . now ())) 1000 ) . setEndTime ( LocalDateTime . now (). plusDays ( 7 ) . toEpochSecond ( ZoneOffset . from ( ZonedDateTime . now ())) 1000 ); VacationSettings response = service . users (). settings () . updateVacation ( "me" , vacationSettings ). execute (); // Prints the auto-reply response body System . out . println ( "Enabled auto reply with message : " + response . getResponseBodyHtml ()); return response ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable auto reply: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable auto reply.py View on GitHub from datetime import datetime , timedelta import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError from numpy import long def enable auto reply (): """Enable auto reply.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) epoch = datetime . utcfromtimestamp ( 0 ) now = datetime . now () start time = ( now - epoch ) . total seconds () 1000 end time = ( now + timedelta ( days = 7 ) - epoch ) . total seconds () 1000 vacation settings = { "enableAutoReply" : True , "responseBodyHtml" : ( "I am on vacation and will reply when I am " "back in the office.
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto reply by restricting domain with start time and end time VacationSettings vacationSettings = new VacationSettings () . setEnableAutoReply ( true ) . setResponseBodyHtml ( "I am on vacation and will reply when I am back in the office.

### VacationSettings \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback VacationSettings Stay organized with collections Save and categorize content based on your preferences.
- These settings correspond to the "Vacation responder" feature in the web interface.
- JSON representation { "enableAutoReply" : boolean , "responseSubject" : string , "responseBodyPlainText" : string , "responseBodyHtml" : string , "restrictToContacts" : boolean , "restrictToDomain" : boolean , "startTime" : string , "endTime" : string } Fields enableAutoReply boolean Flag that controls whether Gmail automatically replies to messages. responseSubject string Optional text to prepend to the subject line in vacation responses.
- JSON representation Vacation auto-reply settings for an account.

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Old setting New setting enable enabled Manage vacation automatic reply settings To manage vacation automatic reply in the Gmail API, use the settings resource.
- Manage general settings General settings are not available in the Gmail API.
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.

