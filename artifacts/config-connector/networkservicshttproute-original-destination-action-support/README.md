# NetworkServicsHTTPRoute original destination action support

Product: Config Connector
Feature slug: `networkservicshttproute-original-destination-action-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector previously supported the spec.rules.action.originalDestination field for NetworkServicsHTTPRoute resources; deprecated on 2022-09-14.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: 2022-09-14
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- credential
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkserviceshttproute](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkserviceshttproute)

## Validation Findings

- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): spec.rules.action.
