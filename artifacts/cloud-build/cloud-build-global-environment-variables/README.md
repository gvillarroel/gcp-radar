# Cloud Build global environment variables

Product: Cloud Build
Feature slug: `cloud-build-global-environment-variables`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build allows environment variables to be defined globally for all build steps in a build.

## Lifecycle

- Latest feature date: 2019-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config), [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables))
- encrypt (evidence: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config), [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables))
- key (evidence: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config), [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables))
- kms (evidence: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config), [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables))
- secret (evidence: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config), [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
