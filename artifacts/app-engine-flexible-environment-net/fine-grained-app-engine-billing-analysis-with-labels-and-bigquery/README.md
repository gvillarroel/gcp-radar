# Fine-grained App Engine billing analysis with labels and BigQuery

Product: App Engine flexible environment .NET
Feature slug: `fine-grained-app-engine-billing-analysis-with-labels-and-bigquery`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine now supports labeling services and exporting billing data to BigQuery to analyze resource-level billing usage.

## Lifecycle

- Latest feature date: 2020-05-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- audit (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources)
