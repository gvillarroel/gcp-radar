# Bring your own reCAPTCHA keys

Product: Identity Platform
Feature slug: `bring-your-own-recaptcha-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity Platform's reCAPTCHA Enterprise integration supports using your own reCAPTCHA keys in Preview.

## Lifecycle

- Latest feature date: 2024-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- authorization (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- secret (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- security (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging)
- [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to)
- [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest)
- [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
