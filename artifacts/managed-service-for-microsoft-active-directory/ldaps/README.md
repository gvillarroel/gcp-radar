# LDAPS

Product: Managed Service for Microsoft Active Directory
Feature slug: `ldaps`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed Microsoft AD supports enabling LDAPS from the Google Cloud console; Managed Microsoft AD supports LDAPS.

## Lifecycle

- Latest feature date: 2022-07-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- audit (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- certificate (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))
- role (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings), [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)
- [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest)
- [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
