# SMTP-based email service migration

Product: App Engine standard environment Python
Feature slug: `smtp-based-email-service-migration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet.

## Lifecycle

- Latest feature date: 2026-03-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access), [https://cloud.google.com/appengine/docs/standard/bundled-services-overview](https://cloud.google.com/appengine/docs/standard/bundled-services-overview), [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview))

## Official Evidence

- [https://cloud.google.com/appengine/docs/standard/bundled-services-overview](https://cloud.google.com/appengine/docs/standard/bundled-services-overview)
- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
