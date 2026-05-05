# GKE resource filtering in Error Reporting

Product: Error Reporting
Feature slug: `gke-resource-filtering-in-error-reporting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Error Reporting resource filter can filter Google Kubernetes Engine resources by location, cluster, namespace, container, or pod.

## Lifecycle

- Latest feature date: 2023-08-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter))
- logging (evidence: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter))
- private (evidence: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter))
- role (evidence: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter))

## Official Evidence

- [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter)
