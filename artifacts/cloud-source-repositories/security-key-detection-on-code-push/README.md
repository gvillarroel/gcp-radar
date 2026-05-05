# Security key detection on code push

Product: Cloud Source Repositories
Feature slug: `security-key-detection-on-code-push`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Source Repositories can detect security keys when code changes are pushed.

## Lifecycle

- Latest feature date: 2018-06-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- audit (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- auth (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- credential (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- key (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- logging (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- permission (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- private (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- role (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))
- security (evidence: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features), [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository), [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig), [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication))

## Official Evidence

- [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication)
- [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features)
- [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)
- [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig)
