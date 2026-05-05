# Service account delegation for workflow execution

Product: Dataform
Feature slug: `service-account-delegation-for-workflow-execution`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service account delegation lets Dataform configure delegated service accounts for workflow execution at the repository or workflow configuration level.

## Lifecycle

- Latest feature date: 2023-09-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- audit (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- auth (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- authorization (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- iam (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- logging (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- permission (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))
- token (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview), [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow))

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
