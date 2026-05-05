# Use env:true for new App Engine flexible applications

Product: App Engine flexible environment .NET
Feature slug: `use-env-true-for-new-app-engine-flexible-applications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New App Engine flexible applications are required to use env:true in app.yaml instead of vm:true, with existing applications expected to migrate later.

## Lifecycle

- Latest feature date: 2016-12-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php), [https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml))

## Official Evidence

- [https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
