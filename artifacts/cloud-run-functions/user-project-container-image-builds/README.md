# User-project container image builds

Product: Cloud Run functions
Feature slug: `user-project-container-image-builds`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supported runtimes can build container images in the user's project for direct build log access and without the preset build-time quota.

## Lifecycle

- Latest feature date: 2020-08-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- constraint
- credential
- iam
- key
- kms
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
