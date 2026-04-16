---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.969Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Forwarding"
feature_slug: "forwarding"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding"
keywords:
  - "forwarding"
  - "endpoints"
  - "available"
  - "managing"
  - "settings"
  - "mail"
---

# Forwarding

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

New endpoints are available for managing forwarding in mail settings.

## Extended Definition

New endpoints are available for managing forwarding in mail settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding](https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Manage automatic forwarding To manage automatic forwarding in the Gmail API, use the settings resource.
- Manage general settings General settings are not available in the Gmail API.
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Enable auto-forwarding and move forwarded messages to the trash ForwardingAddress address = new ForwardingAddress () . setForwardingEmail ( forwardingEmail ); ForwardingAddress createAddressResult = service . users (). settings (). forwardingAddresses () . create ( "me" , address ). execute (); if ( createAddressResult . getVerificationStatus (). equals ( "accepted" )) { AutoForwarding autoForwarding = new AutoForwarding () . setEnabled ( true ) . setEmailAddress ( address . getForwardingEmail ()) . setDisposition ( "trash" ); autoForwarding = service . users (). settings (). updateAutoForwarding ( "me" , autoForwarding ). execute (); System . out . println ( autoForwarding . toPrettyString ()); return autoForwarding ; } } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to enable forwarding: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/enable forwarding.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def enable forwarding (): """Enable email forwarding.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) address = { "forwardingEmail" : "gduser1@workspacesamples.dev" } pylint: disable=E1101 result = ( service . users () . settings () . forwardingAddresses () . create ( userId = "me" , body = address ) . execute () ) if result . get ( "verificationStatus" ) == "accepted" : body = { "emailAddress" : result . get ( "forwardingEmail" ), "enabled" : True , "disposition" : "trash" , } pylint: disable=E1101 result = ( service . users () . settings () . updateAutoForwarding ( userId = "me" , body = body ) . execute () ) print ( f "Forwarding is enabled : { result } " ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result if name == " main " : enable forwarding () To disable auto-forwarding, call the updateAutoForwarding method and set the enabled field on the AutoForwarding object to false .
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.
- GMAIL SETTINGS SHARING ); HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter ( credentials ); // Create the gmail API client Gmail service = new Gmail .

### AutoForwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding](https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- This email address must be a verified member of the forwarding addresses. disposition enum ( Disposition ) The state that a message should be left in after it has been forwarded.
- Home Google Workspace Gmail Reference Send feedback AutoForwarding Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Disposition Auto-forwarding settings for an account.
- JSON representation { "enabled" : boolean , "emailAddress" : string , "disposition" : enum ( Disposition ) } Fields enabled boolean Whether all incoming mail is automatically forwarded to another address. emailAddress string Email address to which all incoming messages are forwarded.

