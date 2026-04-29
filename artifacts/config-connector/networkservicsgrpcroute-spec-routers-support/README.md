# NetworkServicsGRPCRoute spec.routers support

Product: Config Connector
Feature slug: `networkservicsgrpcroute-spec-routers-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector previously supported the spec.routers field for NetworkServicsGRPCRoute resources; deprecated on 2022-09-14.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: 2022-09-14
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- constraint
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkservicesgrpcroute](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkservicesgrpcroute)

## Validation Findings

- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): spec.routers.
