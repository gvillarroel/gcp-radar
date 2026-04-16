---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.970Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "POP and IMAP"
feature_slug: "pop-and-imap"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings"
keywords:
  - "imap"
  - "endpoints"
  - "available"
  - "managing"
  - "settings"
  - "mail"
---

# POP and IMAP

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

New endpoints are available for managing POP and IMAP settings in mail settings.

## Extended Definition

New endpoints are available for managing POP and IMAP settings in mail settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings)

## Supporting Pages

### Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics IMAP, POP, and SMTP for Gmail IMAP API Choose your IMAP email client settings for Gmail Read Gmail messages on other email clients using POP Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can use the settings resource of the Gmail API to configure how Gmail handles POP and IMAP protocols: settings.getPop settings.updatePop settings.getImap settings.updateImap POP You can manage POP settings for an account using the PopSettings object.
- Home Google Workspace Gmail Guides Send feedback Configure POP and IMAP settings with the Gmail API Stay organized with collections Save and categorize content based on your preferences.
- Value Effect archive Move messages marked as deleted out of the INBOX deleteForever Permanently delete messages marked as deleted trash Move messages marked as deleted to the TRASH If the boolean autoExpunge field is true , Gmail immediately expunges a message when it is marked as deleted in IMAP.

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Old setting New setting Notes enable accessWindow Disabled when set to disabled enableFor accessWindow ALL MAIL is now allMail MAIL FROM NOW ON is now fromNowOn action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Manage IMAP settings To manage IMAP access in the Gmail API, use the settings resource.
- Old setting New setting name displayName address sendAsEmail replyTo replyToAddress makeDefault isDefault Manage web clips Web Clip settings are not available in the Gmail API.
- Manage general settings General settings are not available in the Gmail API.
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.

### ImapSettings \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings](https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback ImapSettings Stay organized with collections Save and categorize content based on your preferences.
- Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted. expungeBehavior enum ( ExpungeBehavior ) The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder. maxFolderSize integer An optional limit on the number of messages that an IMAP folder may contain.
- JSON representation { "enabled" : boolean , "autoExpunge" : boolean , "expungeBehavior" : enum ( ExpungeBehavior ) , "maxFolderSize" : integer } Fields enabled boolean Whether IMAP is enabled for the account. autoExpunge boolean If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP.
- JSON representation ExpungeBehavior IMAP settings for an account.

