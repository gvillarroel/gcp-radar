# Cloud Build continue-on-failure build execution

Product: Cloud Build
Feature slug: `cloud-build-continue-on-failure-build-execution`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build can continue a build execution when selected steps fail by using allowFailure and allowExitCodes options.

## Lifecycle

- Latest feature date: 2022-11-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- key
- logging
- permission
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
