---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.970Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Signatures"
feature_slug: "signatures"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings"
keywords:
  - "signatures"
  - "endpoints"
  - "available"
  - "managing"
  - "settings"
  - "mail"
---

# Signatures

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

New endpoints are available for managing signatures in mail settings.

## Extended Definition

New endpoints are available for managing signatures in mail settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting contactsOnly restrictToContacts domainOnly restrictToDomain enable enableAutoReply endDate endTime message responseBodyHtml responseBodyPlainText startDate startTime subject responseSubject Manage signature settings To manage email signatures in the Gmail API, use the settings.sendAs resource.
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Manage general settings General settings are not available in the Gmail API.
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.

### Manage aliases and signatures with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { SendAs primaryAlias = null ; ListSendAsResponse aliases = service . users (). settings (). sendAs (). list ( "me" ). execute (); for ( SendAs alias : aliases . getSendAs ()) { if ( alias . getIsPrimary ()) { primaryAlias = alias ; break ; } } // Updating a new signature SendAs aliasSettings = new SendAs (). setSignature ( "Automated Signature" ); SendAs result = service . users (). settings (). sendAs (). patch ( "me" , primaryAlias . getSendAsEmail (), aliasSettings ) . execute (); //Prints the updated signature System . out . println ( "Updated signature - " + result . getSignature ()); return result . getSignature (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to update signature: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/update signature.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def update signature (): """Create and update signature in gmail.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) primary alias = None pylint: disable=E1101 aliases = service . users () . settings () . sendAs () . list ( userId = "me" ) . execute () for alias in aliases . get ( "sendAs" ): if alias . get ( "isPrimary" ): primary alias = alias break send as configuration = { "displayName" : primary alias . get ( "sendAsEmail" ), "signature" : "Automated Signature" , } pylint: disable=E1101 result = ( service . users () . settings () . sendAs () . patch ( userId = "me" , sendAsEmail = primary alias . get ( "sendAsEmail" ), body = send as configuration , ) . execute () ) print ( f 'Updated signature for: { result . get ( "displayName" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "signature" ) if name == " main " : update signature () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Gmail Guides Send feedback Manage aliases and signatures with the Gmail API Stay organized with collections Save and categorize content based on your preferences.
- GMAIL SETTINGS BASIC ); HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter ( credentials ); // Create the gmail API client Gmail service = new Gmail .

### LanguageSettings \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article .
- Home Google Workspace Gmail Reference Send feedback LanguageSettings Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "displayLanguage" : string } Fields displayLanguage string The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example en-GB , fr or ja for British English, French, or Japanese respectively).
- In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).

