---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.406Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java mail service quota increase requests"
feature_slug: "app-engine-java-mail-service-quota-increase-requests"
latest_feature_date: "2016-04-18"
deprecation_date: "2016-04-18"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "mail service quota increase requests"
  - "Java mail API deprecation"
  - "mail quota request"
  - "Java mail quota"
  - "mail service request"
  - "SendGrid migration"
  - "App Engine Java mail"
  - "SendGrid"
---

# App Engine Java mail service quota increase requests

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

The App Engine Java runtime stopped accepting quota increase requests for its mail service and recommends using SendGrid instead; deprecated on 2016-04-18.

## Extended Definition

The App Engine Java runtime stopped accepting quota increase requests for its mail service and recommends using SendGrid instead; deprecated on 2016-04-18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java PHP Python Note: To improve email security and ensure reliable, high-volume email delivery, we recommend that you migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet.
- If you need to send more mail than the quota allows, you can use a third-party mail provider, such as SendGrid or Mailgun .
- Go to the Quota Details page Each Mail service request counts toward the Mail API Calls quota.

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- October 31, 2025 Feature To improve email security and ensure reliable, high-volume email delivery, migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet (Preview).
- March 02, 2026 Feature Support for migrating from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet is in General Availability .
- Customers should use Sendgrid instead.

