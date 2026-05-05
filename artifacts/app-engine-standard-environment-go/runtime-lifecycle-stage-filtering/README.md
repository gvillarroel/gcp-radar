# Runtime lifecycle stage filtering

Product: App Engine standard environment Go
Feature slug: `runtime-lifecycle-stage-filtering`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Google Cloud console can filter App Engine versions by runtime lifecycle stage and show warnings for versions nearing or past support milestones.

## Lifecycle

- Latest feature date: 2024-07-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
