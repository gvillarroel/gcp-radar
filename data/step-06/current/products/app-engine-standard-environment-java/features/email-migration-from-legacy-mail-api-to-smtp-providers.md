---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.862Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Email migration from legacy Mail API to SMTP providers"
feature_slug: "email-migration-from-legacy-mail-api-to-smtp-providers"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview"
keywords:
  - "email"
  - "migration"
  - "legacy"
  - "mail"
  - "smtp"
  - "providers"
  - "app"
  - "engine"
---

# Email migration from legacy Mail API to SMTP providers

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment supports migrating applications from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment recommends migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet, in Preview.

## Extended Definition

App Engine standard environment supports migrating applications from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment recommends migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet, in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview)

## Supporting Pages

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Java PHP Python Note: To improve email security and ensure reliable, high-volume email delivery, we recommend that you migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Mail API for legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- If your application sends messages from an email address that is part of a Google Workspace domain, App Engine can cryptographically sign the emails it sends.
- App Engine applications can send email messages on behalf of the app's email receiving addresses and on behalf of some users with Google Accounts.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.
- While a user is signed in to the application, the app can access the user's email address.
- The App Engine Users service is accessible only through the legacy bundled services.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- For the legacy bundled services that are not available as separate products in Google Cloud, such as image processing, search, and messaging, you can use third-party providers or other workarounds as suggested in the Runtimes guide.

