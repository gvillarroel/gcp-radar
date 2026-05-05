# GKE workload error reporting

Product: Error Reporting
Feature slug: `gke-workload-error-reporting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Error Reporting shows recent application errors for Google Kubernetes Engine workloads of type Deployment or Pod.

## Lifecycle

- Latest feature date: 2023-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- credential (evidence: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash), [https://docs.cloud.google.com/error-reporting/docs/reference/libraries](https://docs.cloud.google.com/error-reporting/docs/reference/libraries), [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient))
- logging (evidence: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash), [https://docs.cloud.google.com/error-reporting/docs/reference/libraries](https://docs.cloud.google.com/error-reporting/docs/reference/libraries), [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient))
- private (evidence: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash), [https://docs.cloud.google.com/error-reporting/docs/reference/libraries](https://docs.cloud.google.com/error-reporting/docs/reference/libraries), [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- [https://docs.cloud.google.com/error-reporting/docs/reference/libraries](https://docs.cloud.google.com/error-reporting/docs/reference/libraries)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient)
