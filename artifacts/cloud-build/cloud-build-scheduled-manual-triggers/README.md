# Cloud Build scheduled manual triggers

Product: Cloud Build
Feature slug: `cloud-build-scheduled-manual-triggers`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Build supports manual triggers that can run builds at a specified time.

## Lifecycle

- Latest feature date: 2020-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- [https://docs.cloud.google.com/docs/buildpacks/osonly](https://docs.cloud.google.com/docs/buildpacks/osonly)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
