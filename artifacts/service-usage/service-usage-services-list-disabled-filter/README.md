# Service Usage services.list disabled filter

Product: Service Usage
Feature slug: `service-usage-services-list-disabled-filter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added support to the Service Usage `services.list` method to filter results for disabled APIs and services.

## Lifecycle

- Latest feature date: 2018-03-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key
- logging
- permission

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- [https://docs.cloud.google.com/service-usage/docs/list-services](https://docs.cloud.google.com/service-usage/docs/list-services)
