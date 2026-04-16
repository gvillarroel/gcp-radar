---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.976Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "internalDateSource parameter"
feature_slug: "internaldatesource-parameter"
latest_feature_date: "2014-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get"
keywords:
  - "internaldatesource"
  - "methods"
  - "insert"
  - "parameter"
  - "import"
  - "messages"
---

# internalDateSource parameter

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.insert and messages.import methods support the internalDateSource parameter.

## Extended Definition

The messages.insert and messages.import methods support the internalDateSource parameter.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)

## Supporting Pages

### Method: users.messages.import \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- Source ID: `site-docs-reference-required-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Query parameters Parameters internalDateSource enum ( InternalDateSource ) Source for Gmail's internal date of the message. neverMarkSpam boolean Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox. processForCalendar boolean Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user. deleted boolean Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator.
- HTTP request Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/import Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/import The URL uses gRPC Transcoding syntax.
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.import Stay organized with collections Save and categorize content based on your preferences.
- Authorization scopes Requires one of the following OAuth scopes: https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.insert For more information, see the OAuth 2.0 Overview .

### Method: users.messages.insert \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
- Source ID: `site-docs-reference-required-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Query parameters Parameters internalDateSource enum ( InternalDateSource ) Source for Gmail's internal date of the message. deleted boolean Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator.
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.insert Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages The URL uses gRPC Transcoding syntax.
- Authorization scopes Requires one of the following OAuth scopes: https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.insert For more information, see the OAuth 2.0 Overview .

### Method: users.messages.get \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- Source ID: `site-docs-reference-required-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The ID is also contained in the result when a message is inserted ( messages.insert ) or imported ( messages.import ).
- Query parameters Parameters format enum ( Format ) The format to return the message in. metadataHeaders[] string When given and format is METADATA , only include headers specified.
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id} The URL uses gRPC Transcoding syntax.

