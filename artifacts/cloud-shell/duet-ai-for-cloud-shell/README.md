# Duet AI for Cloud Shell

Product: Cloud Shell
Feature slug: `duet-ai-for-cloud-shell`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Duet AI for Cloud Shell provides contextualized coding assistance and source-cited responses in the Cloud Shell editor.

## Lifecycle

- Latest feature date: 2023-11-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails)
- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
