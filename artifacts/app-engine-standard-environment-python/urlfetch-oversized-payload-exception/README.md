# URLFetch oversized payload exception

Product: App Engine standard environment Python
Feature slug: `urlfetch-oversized-payload-exception`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

URLFetch now uses RequestPayloadTooLargeException when request payloads exceed the size limit.

## Lifecycle

- Latest feature date: 2015-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- constraint (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))

## Official Evidence

- [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
