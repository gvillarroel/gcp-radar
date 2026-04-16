---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.970Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Send-as aliases"
feature_slug: "send-as-aliases"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings"
  - "https://developers.google.com/workspace/gmail/api/guides"
keywords:
  - "aliases"
  - "send"
  - "endpoints"
  - "available"
  - "managing"
  - "settings"
  - "mail"
---

# Send-as aliases

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

New endpoints are available for managing send-as aliases in mail settings.

## Extended Definition

New endpoints are available for managing send-as aliases in mail settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)

## Supporting Pages

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Manage send-as aliases To manage send-as aliases in the Gmail API, use the settings.sendAs resource.
- Old setting New setting contactsOnly restrictToContacts domainOnly restrictToDomain enable enableAutoReply endDate endTime message responseBodyHtml responseBodyPlainText startDate startTime subject responseSubject Manage signature settings To manage email signatures in the Gmail API, use the settings.sendAs resource.
- Home Google Workspace Gmail Guides Send feedback Migrate from the Email Settings API Stay organized with collections Save and categorize content based on your preferences.

### Manage aliases and signatures with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { SendAs primaryAlias = null ; ListSendAsResponse aliases = service . users (). settings (). sendAs (). list ( "me" ). execute (); for ( SendAs alias : aliases . getSendAs ()) { if ( alias . getIsPrimary ()) { primaryAlias = alias ; break ; } } // Updating a new signature SendAs aliasSettings = new SendAs (). setSignature ( "Automated Signature" ); SendAs result = service . users (). settings (). sendAs (). patch ( "me" , primaryAlias . getSendAsEmail (), aliasSettings ) . execute (); //Prints the updated signature System . out . println ( "Updated signature - " + result . getSignature ()); return result . getSignature (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to update signature: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/update signature.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def update signature (): """Create and update signature in gmail.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) primary alias = None pylint: disable=E1101 aliases = service . users () . settings () . sendAs () . list ( userId = "me" ) . execute () for alias in aliases . get ( "sendAs" ): if alias . get ( "isPrimary" ): primary alias = alias break send as configuration = { "displayName" : primary alias . get ( "sendAsEmail" ), "signature" : "Automated Signature" , } pylint: disable=E1101 result = ( service . users () . settings () . sendAs () . patch ( userId = "me" , sendAsEmail = primary alias . get ( "sendAsEmail" ), body = send as configuration , ) . execute () ) print ( f 'Updated signature for: { result . get ( "displayName" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "signature" ) if name == " main " : update signature () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- SMTP settings Aliases for external addresses should send mail through a remote SMTP mail sending agent (MSA).
- Home Google Workspace Gmail Guides Send feedback Manage aliases and signatures with the Gmail API Stay organized with collections Save and categorize content based on your preferences.

### Gmail API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- S/MIME certificates Digital certificates uploaded to specific send-as aliases that allow a user to send encrypted and digitally signed emails, ensuring message security and sender authenticity.
- Aliases correspond to the "Send mail as" feature in the Gmail web interface and are also the basis for configuring per-address email signatures.
- Send-as aliases These represent the various email addresses from which an account is authorized to send mail.
- For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as: Read-only mail extraction, indexing, and backup Automated or programmatic message sending Email account migration Email organization including filtering and sorting of messages Standardization of email signatures across an organization Common terms The following is a list of common terms used in this API: Delegator and Delegate A delegator is a Gmail user who grants mailbox access to another user within the same Google Workspace organization.

