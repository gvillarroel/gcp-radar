# Custom PyPI repository for pip

Product: Dataproc
Feature slug: `custom-pypi-repository-for-pip`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option; Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option.

## Lifecycle

- Latest feature date: 2026-02-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb))
- audit (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb))
- auth (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb))
- logging (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb))
- private (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): pypi.repository.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
