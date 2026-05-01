# VM and disk assignment platform logs

Product: Cloud Workstations
Feature slug: `vm-and-disk-assignment-platform-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Workstations writes vm_assignments and disk_assignments platform logs to Cloud Logging for newly created clusters.

## Lifecycle

- Latest feature date: 2023-03-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- logging
- private

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/overview](https://docs.cloud.google.com/workstations/docs/overview)
