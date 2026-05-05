# Gzip response compression by default

Product: App Engine flexible environment Ruby
Feature slug: `gzip-response-compression-by-default`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine flexible environment compresses all responses with gzip by default after redeployment.

## Lifecycle

- Latest feature date: 2017-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas), [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/creating-firewalls)
