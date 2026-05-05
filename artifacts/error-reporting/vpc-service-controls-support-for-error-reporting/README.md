# VPC Service Controls support for Error Reporting

Product: Error Reporting
Feature slug: `vpc-service-controls-support-for-error-reporting`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Error Reporting supports Virtual Private Cloud Service Controls.

## Lifecycle

- Latest feature date: 2022-12-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/error-reporting/docs/setup](https://docs.cloud.google.com/error-reporting/docs/setup), [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages), [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient))
- private (evidence: [https://docs.cloud.google.com/error-reporting/docs/setup](https://docs.cloud.google.com/error-reporting/docs/setup), [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages), [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages)
- [https://docs.cloud.google.com/error-reporting/docs/setup](https://docs.cloud.google.com/error-reporting/docs/setup)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
