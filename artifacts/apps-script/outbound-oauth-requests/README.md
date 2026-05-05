# Outbound OAuth requests

Product: Apps Script
Feature slug: `outbound-oauth-requests`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Apps Script supports outbound OAuth requests through UrlFetchApp OAuth services.

## Lifecycle

- Latest feature date: 2010-08-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- allow (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- auth (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- authorization (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- identity (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- key (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- logging (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- policy (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))
- token (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification))

## Official Evidence

- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
