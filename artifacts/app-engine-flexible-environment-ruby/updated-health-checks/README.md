# Updated health checks

Product: App Engine flexible environment Ruby
Feature slug: `updated-health-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Updated health checks are the newer default health check system for new App Engine projects; Updated health checks provide separate liveness and readiness checks to confirm an instance is running and ready to serve content.

## Lifecycle

- Latest feature date: 2017-09-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls)
