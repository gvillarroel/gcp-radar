# App Engine flexible instance billing granularity

Product: App Engine flexible environment .NET
Feature slug: `app-engine-flexible-instance-billing-granularity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Instance billing for App Engine flexible environment was changed from per-minute to per-second increments, with minimum billed resource usage reduced from 10 minutes to 1 minute.

## Lifecycle

- Latest feature date: 2017-09-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources), [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
