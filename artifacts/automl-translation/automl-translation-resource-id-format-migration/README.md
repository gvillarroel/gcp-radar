# AutoML Translation resource ID format migration

Product: AutoML Translation
Feature slug: `automl-translation-resource-id-format-migration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AutoML Translation changed dataset, model, and operation ID formats, requiring hardcoded resource IDs to be refreshed using get/list operations.

## Lifecycle

- Latest feature date: 2018-07-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))
- auth (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))
- authorization (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))
- iam (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))
- permission (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))
- role (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))
- token (evidence: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade), [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets), [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart))

## Official Evidence

- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
