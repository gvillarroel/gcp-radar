---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.967Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Gmail Postmaster Tools API v2beta"
feature_slug: "gmail-postmaster-tools-api-v2beta"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings"
  - "https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens"
  - "https://developers.google.com/workspace/gmail/api/guides/smime_certs"
keywords:
  - "v2beta"
  - "postmaster"
  - "provides"
  - "dataset"
  - "access"
  - "tools"
  - "full"
---

# Gmail Postmaster Tools API v2beta

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

Provides access to the full Postmaster Tools dataset, including compliance status data, with flexible querying and batch operations.

## Extended Definition

Provides access to the full Postmaster Tools dataset, including compliance status data, with flexible querying and batch operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- [https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens)
- [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)

## Supporting Pages

### Manage aliases and signatures with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Limited Use Access Tokens \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens)
- Source ID: `site-docs-reference-required-10`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For instance, if your application handles approval requests at http://www.example.com/approve?requestId=123 , you should consider including an additional accessToken parameter to it and listen to requests sent to http://www.example.com/approve?requestId=123&accessToken=xyz .
- The combination requestId=123 and accessToken=xyz is the one that you have to generate in advance, making sure that the accessToken cannot be deduced from the requestId .
- Limited-Use Access Tokens provide protection from request spoofing and replay attacks , ensuring that the action is performed by the user the message was sent to.
- Home Google Workspace Gmail Guides Send feedback Limited Use Access Tokens Stay organized with collections Save and categorize content based on your preferences.

### Manage S/MIME certificates with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/smime_certs](https://developers.google.com/workspace/gmail/api/guides/smime_certs)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Gmail API provides programmatic access to manage S/MIME email certificates for users in a Google Workspace domain.
- Authorize API access To authorize access to the Gmail API, use one of the following methods: Use a service account with domain-wide delegation of authority .
- Configure S/MIME keys The settings.sendAs.smimeInfo resource provides several methods to manage S/MIME certificates.
- Use a standard OAuth 2.0 flow that requires end-user consent to obtain an OAuth 2.0 access token.

