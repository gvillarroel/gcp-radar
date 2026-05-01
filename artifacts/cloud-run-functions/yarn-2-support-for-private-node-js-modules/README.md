# Yarn 2 support for private Node.js modules

Product: Cloud Run functions
Feature slug: `yarn-2-support-for-private-node-js-modules`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports using the Yarn 2 package manager with private Node.js modules.

## Lifecycle

- Latest feature date: 2023-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- iam
- identity
- key
- kms
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
