# Error Reporting

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:54.584Z`
Product status: `PASS`

## Summary

- Feature cards: 23
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 2 explicit, 0 derived, 21 unknown

## Service Card

- Service card ID: `error-reporting:service`
- Latest feature date: 2026-03-26
- Official source links: 33
- Security capabilities: 11

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Error Reporting API MCP server | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/notifications)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/php) |
| Non-global log bucket analysis | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting)<br>[source](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)<br>[source](https://docs.cloud.google.com/error-reporting/docs/troubleshooting) |
| Duet AI error troubleshooting | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)<br>[source](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient) |
| Error groups on custom dashboards | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient) |
| GKE App Errors tab | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient) |
| GKE resource filtering in Error Reporting | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/java)<br>[source](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)<br>[source](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter) |
| GKE workload error reporting | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)<br>[source](https://docs.cloud.google.com/error-reporting/docs/reference/libraries)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient) |
| Error Reporting resource filter | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient) |
| VPC Service Controls support for Error Reporting | LOW | WARN | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient) |
| Error Group button in Logs Explorer | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)<br>[source](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)<br>[source](https://docs.cloud.google.com/error-reporting/docs/viewing-errors) |
| Error Reporting notification recommendations and insights | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)<br>[source](https://docs.cloud.google.com/error-reporting/docs/iam)<br>[source](https://docs.cloud.google.com/error-reporting/docs/notifications) |
| ReportedErrorEvent logging integration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/java)<br>[source](https://docs.cloud.google.com/error-reporting/docs/troubleshooting) |
| Python error detection | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/ec2)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/python)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest) |
| Error group resolution status | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/managing-errors)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup.Builder) |
| Error Reporting IAM roles | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/error-reporting/docs/iam)<br>[source](https://docs.cloud.google.com/error-reporting/docs/reference/authentication)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/ruby) |
| Error filters | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/java)<br>[source](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)<br>[source](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter) |
| Cloud Functions error reporting | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/java)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/nodejs)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/php) |
| C++ support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/dotnet)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/go)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/ruby) |
| Ruby support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/ec2)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/ruby) |
| Error Reporting support in Cloud Console mobile app | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/notifications)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/dotnet)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/java) |
| App Engine standard environment error reporting | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-flexible-environment)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-standard-environment)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/ruby) |
| Error Reporting API report endpoint | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/php)<br>[source](https://docs.cloud.google.com/error-reporting/docs/setup/ruby) |
| Error Reporting card in Google Cloud Console home page | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)<br>[source](https://docs.cloud.google.com/error-reporting/docs/notifications)<br>[source](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsAsyncPager) |
