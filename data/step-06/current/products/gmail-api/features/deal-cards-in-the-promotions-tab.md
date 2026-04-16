---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.968Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Deal Cards in the Promotions tab"
feature_slug: "deal-cards-in-the-promotions-tab"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/markup/overview"
  - "https://developers.google.com/workspace/gmail/markup/highlights"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
keywords:
  - "annotations"
  - "promotions"
  - "create"
  - "deal"
  - "used"
  - "cards"
---

# Deal Cards in the Promotions tab

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

Annotations can be used to create Deal Cards in the Promotions tab.

## Extended Definition

Annotations can be used to create Deal Cards in the Promotions tab.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/markup/overview](https://developers.google.com/workspace/gmail/markup/overview)
- [https://developers.google.com/workspace/gmail/markup/highlights](https://developers.google.com/workspace/gmail/markup/highlights)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)

## Supporting Pages

### Overview \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/overview](https://developers.google.com/workspace/gmail/markup/overview)
- Source ID: `site-docs-reference-required-10`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bus Highlight Car Rental Highlight Flight Highlight Event Highlight for events with tickets Order and parcel delivery Highlights for shopping Hotel Highlight for hotel reservations Invoice Highlight Restaurant Highlight for restaurant reservations Train Highlight Gmail Promotions tab The Promotions tab puts the most valuable parts of email right at users' fingertips.
- Gmail supports the following types of actions and interactive cards: One-click Action for just about anything that can be performed with a single click Go-to Action for more complex interactions Flight interactive cards Gmail Highlights Gmail uses the same schema.org markup to highlight the most important information within an email, and allow user to act on it.
- Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future.
- By working with schema.org, we are creating an open standard, so that the markup you embed can be used by any email product that receives them.

### What Are Highlights? | Gmail | Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/highlights](https://developers.google.com/workspace/gmail/markup/highlights)
- Source ID: `feature-recovery-direct-http`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Declare Actions Handle Action Requests Secure Actions Overview Limited-Use Access Tokens Verify Bearer Tokens Tutorials Apps Script Quickstart App Engine End-to-End Test Your Schemas Register with Google Email promotions Overview Get started Preview annotations Best Practices Troubleshooting FAQ Email reactions Overview Examples Android content provider Overview Download a sample app Content provider basics Extend & automate Add-ons Apps Script Google Workspace apps Admin console Cloud Search Gmail Google Calendar Google Chat Google Classroom Google Docs Google Drive Google Forms Google Keep Google Meet Google Sheets Google Sites Google Slides Google Tasks Google Vault Extend, automate & share Add-ons Apps Script Chat apps Drive apps Marketplace Tools Admin console Apps Script dashboard Google Cloud console APIs Explorer Card Builder Training & support How to get started Codelabs Developer support Updates Release notes Developer Previews YouTube Newsletter X (Twitter) Blog Home Google Workspace Gmail Guides Send feedback What Are Highlights?
- What Are Highlights? | Gmail | Google for Developers Skip to main content Workspace Home Gmail All products Google Workspace apps Admin console Cloud Search Gmail Google Calendar Google Chat Google Classroom Google Docs Google Drive Google Forms Google Keep Google Meet Google Sheets Google Sites Google Slides Google Tasks Google Vault Extend, automate & share Add-ons Apps Script Chat apps Drive apps Marketplace Resources Tools Admin console Apps Script dashboard Google Cloud console APIs Explorer Card Builder Training & support How to get started Codelabs Developer support Updates Release notes Developer Previews YouTube Newsletter X (Twitter) Blog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Gmail Overview Guides Reference Samples Support Workspace Home Gmail Overview Guides Reference Samples Support All products More Resources More Get started Gmail API overview Get started with Google Workspace Configure OAuth consent Gmail API Authenticate and authorize Choose scopes Implement server-side authorization Quickstarts JavaScript Java Python Apps Script Go Node.js Create and send mail Create and send draft emails Create and send email messages Upload attachments Manage mailboxes Manage threads Manage labels Search and filter messages List Gmail messages Synchronize clients with Gmail Configure push notifications Manage settings Manage aliases and signatures Manage email forwarding Manage Gmail filters Manage vacation settings Manage S/MIME certificates Configure POP and IMAP settings Manage delegates Manage language settings Gmail inbox feed Techniques and best practices Batch requests Performance tips Troubleshoot Resolve errors Troubleshoot authentication and authorization issues Migrate from the Email Settings API IMAP for Gmail Overview XOAUTH2 Mechanism Libraries and Samples IMAP Extensions Postmaster Tools API Overview Quickstarts Java Python How do I...

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A delegate user must be referred to by their primary email address. settings.delegates.create This method can now be used to create delegate relationships across multiple domains belonging to the same Google Workspace organization.
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.
- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error. settings.delegates.delete This method can now be used to delete delegates with any VerificationStatus , rather than just delegates which are accepted or expired . settings.delegates.get This is a new method, which might be preferable over the settings.delegates.list method depending on need.
- The Email Settings API used the scope: https://apps-apis.google.com/a/feeds/emailsettings/2.0/ The equivalent scopes in the Gmail API are: https://www.googleapis.com/auth/gmail.settings.basic https://www.googleapis.com/auth/gmail.settings.sharing Protocol changes The Email Settings API uses the XML based GDATA protocol.

