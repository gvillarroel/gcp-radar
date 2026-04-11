---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.330Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Email migration from legacy Mail API to SMTP providers"
feature_slug: "email-migration-from-legacy-mail-api-to-smtp-providers"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
keywords:
  - "SMTP-based email"
  - "migrate from Mail API"
  - "Email service migration"
  - "SMTP migration"
  - "Mail API migration"
  - "Mailgun"
  - "Mailjet"
  - "legacy Mail API"
---

# Email migration from legacy Mail API to SMTP providers

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

App Engine standard environment supports migrating applications from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment recommends migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet, in Preview.

## Extended Definition

App Engine standard environment supports migrating applications from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment recommends migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet, in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- October 31, 2025 Feature To improve email security and ensure reliable, high-volume email delivery, migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet (Preview).
- March 02, 2026 Feature Support for migrating from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet is in General Availability .

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java PHP Python Note: To improve email security and ensure reliable, high-volume email delivery, we recommend that you migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet.
- If you need to send more mail than the quota allows, you can use a third-party mail provider, such as SendGrid or Mailgun .

