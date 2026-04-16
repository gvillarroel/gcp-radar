---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.969Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Filters"
feature_slug: "filters"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/filter_settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
keywords:
  - "filters"
  - "endpoints"
  - "available"
  - "managing"
  - "settings"
  - "mail"
---

# Filters

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

New endpoints are available for managing filters in mail settings.

## Extended Definition

New endpoints are available for managing filters in mail settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/filter_settings](https://developers.google.com/workspace/gmail/api/guides/filter_settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Manage filters To manage filters in the Gmail API, use the settings.filters resource.
- Manage general settings General settings are not available in the Gmail API.
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.

### Manage Gmail filters \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/filter_settings](https://developers.google.com/workspace/gmail/api/guides/filter_settings)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Filter the mail from sender and archive them(skip the inbox) Filter filter = new Filter () . setCriteria ( new FilterCriteria () . setFrom ( "gduser2@workspacesamples.dev" )) . setAction ( new FilterAction () . setAddLabelIds ( Arrays . asList ( labelId )) . setRemoveLabelIds ( Arrays . asList ( "INBOX" ))); Filter result = service . users (). settings (). filters (). create ( "me" , filter ). execute (); // Prints the new created filter ID System . out . println ( "Created filter " + result . getId ()); return result . getId (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create filter: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/create filter.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def create filter (): """Create a filter.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) label name = "IMPORTANT" filter content = { "criteria" : { "from" : "gsuder1@workspacesamples.dev" }, "action" : { "addLabelIds" : [ label name ], "removeLabelIds" : [ "INBOX" ], }, } pylint: disable=E1101 result = ( service . users () . settings () . filters () . create ( userId = "me" , body = filter content ) . execute () ) print ( f 'Created filter with id: { result . get ( "id" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "id" ) if name == " main " : create filter () Related topics Search and filter messages Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For information on how to create , list , get , or delete Gmail filters, see the settings.filters resource.
- Home Google Workspace Gmail Guides Send feedback Manage Gmail filters Stay organized with collections Save and categorize content based on your preferences.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.users REST Resource: v1.users.drafts REST Resource: v1.users.history REST Resource: v1.users.labels REST Resource: v1.users.messages REST Resource: v1.users.messages.attachments REST Resource: v1.users.settings REST Resource: v1.users.settings.cse.identities REST Resource: v1.users.settings.cse.keypairs REST Resource: v1.users.settings.delegates REST Resource: v1.users.settings.filters REST Resource: v1.users.settings.forwardingAddresses REST Resource: v1.users.settings.sendAs REST Resource: v1.users.settings.sendAs.smimeInfo REST Resource: v1.users.threads Service: gmail.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.users.settings.filters Methods create POST /gmail/v1/users/{userId}/settings/filters Creates a filter. delete DELETE /gmail/v1/users/{userId}/settings/filters/{id} Immediately and permanently deletes the specified filter. get GET /gmail/v1/users/{userId}/settings/filters/{id} Gets a filter. list GET /gmail/v1/users/{userId}/settings/filters Lists the message filters of a Gmail user.
- REST Resource: v1.users.settings Methods getAutoForwarding GET /gmail/v1/users/{userId}/settings/autoForwarding Gets the auto-forwarding setting for the specified account. getImap GET /gmail/v1/users/{userId}/settings/imap Gets IMAP settings. getLanguage GET /gmail/v1/users/{userId}/settings/language Gets language settings. getPop GET /gmail/v1/users/{userId}/settings/pop Gets POP settings. getVacation GET /gmail/v1/users/{userId}/settings/vacation Gets vacation responder settings. updateAutoForwarding PUT /gmail/v1/users/{userId}/settings/autoForwarding Updates the auto-forwarding setting for the specified account. updateImap PUT /gmail/v1/users/{userId}/settings/imap Updates IMAP settings. updateLanguage PUT /gmail/v1/users/{userId}/settings/language Updates language settings. updatePop PUT /gmail/v1/users/{userId}/settings/pop Updates POP settings. updateVacation PUT /gmail/v1/users/{userId}/settings/vacation Updates vacation responder settings.
- REST Resource: v1.users.settings.cse.keypairs Methods create POST /gmail/v1/users/{userId}/settings/cse/keypairs Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. disable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable Turns off a client-side encryption key pair. enable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable Turns on a client-side encryption key pair that was turned off. get GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId} Retrieves an existing client-side encryption key pair. list GET /gmail/v1/users/{userId}/settings/cse/keypairs Lists client-side encryption key pairs for an authenticated user. obliterate POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate Deletes a client-side encryption key pair permanently and immediately.

