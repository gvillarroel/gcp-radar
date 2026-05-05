# VPC Service Controls support

Product: Cloud Run functions
Feature slug: `vpc-service-controls-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls support lets functions operate within a secure service perimeter to reduce data exfiltration risk.

## Lifecycle

- Latest feature date: 2020-01-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- audit (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- key (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- role (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- secret (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- security (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))
- token (evidence: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
