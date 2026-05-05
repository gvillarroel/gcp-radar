# SMTP-based email service migration support

Product: App Engine standard environment Java
Feature slug: `smtp-based-email-service-migration-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet.

## Lifecycle

- Latest feature date: 2026-03-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/java/services/access](https://docs.cloud.google.com/appengine/docs/standard/java/services/access))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/java/services/access](https://docs.cloud.google.com/appengine/docs/standard/java/services/access))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/java/services/access](https://docs.cloud.google.com/appengine/docs/standard/java/services/access))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/java/services/access](https://docs.cloud.google.com/appengine/docs/standard/java/services/access)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
