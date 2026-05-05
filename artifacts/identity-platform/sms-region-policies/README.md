# SMS region policies

Product: Identity Platform
Feature slug: `sms-region-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity Platform supports SMS region policies to help protect applications from SMS abuse.

## Lifecycle

- Latest feature date: 2022-09-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- allow (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- auth (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- authorization (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- credential (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- iam (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- identity (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- policy (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- security (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))
- token (evidence: [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa), [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to), [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest), [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims))

## Official Evidence

- [https://docs.cloud.google.com/identity-platform/docs/how-to](https://docs.cloud.google.com/identity-platform/docs/how-to)
- [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims)
- [https://docs.cloud.google.com/identity-platform/docs/reference/rest](https://docs.cloud.google.com/identity-platform/docs/reference/rest)
- [https://docs.cloud.google.com/identity-platform/docs/web/mfa](https://docs.cloud.google.com/identity-platform/docs/web/mfa)
