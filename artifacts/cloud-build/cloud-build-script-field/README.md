# Cloud Build script field

Product: Cloud Build
Feature slug: `cloud-build-script-field`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Build's script field is generally available for defining build steps with shell scripts or other scripting languages; Cloud Build supports a script field for executing shell scripts within build steps as a preview feature.

## Lifecycle

- Latest feature date: 2022-09-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/docs/buildpacks](https://docs.cloud.google.com/docs/buildpacks)
- [https://docs.cloud.google.com/docs/buildpacks/overview](https://docs.cloud.google.com/docs/buildpacks/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
