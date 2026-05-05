# SMS toll fraud protection

Product: Identity Platform
Feature slug: `sms-toll-fraud-protection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity Platform's reCAPTCHA Enterprise integration supports SMS toll fraud protection for SMS-based authentication flows in Preview.

## Lifecycle

- Latest feature date: 2024-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- allow (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- audit (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- auth (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- authorization (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- credential (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- iam (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- identity (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- key (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- logging (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- policy (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- security (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))
- token (evidence: [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes))

## Official Evidence

- [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes)
- [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to)
- [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest)
- [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
