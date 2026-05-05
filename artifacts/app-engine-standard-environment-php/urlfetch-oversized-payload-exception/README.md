# URLFetch oversized payload exception

Product: App Engine standard environment PHP
Feature slug: `urlfetch-oversized-payload-exception`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed supported size limits.

## Lifecycle

- Latest feature date: 2015-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access))
- audit (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access), [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/php/services/access](https://docs.cloud.google.com/appengine/docs/standard/php/services/access)
