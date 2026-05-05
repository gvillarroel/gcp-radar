# Legacy health checks

Product: App Engine flexible environment custom runtimes
Feature slug: `legacy-health-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine flexible environment supports legacy health checks for instance monitoring; deprecated on 2018-09-30.

## Lifecycle

- Latest feature date: 2017-09-18
- Deprecation date: 2018-09-30
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down), [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down), [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down), [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed), [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down](https://docs.cloud.google.com/appengine/docs/flexible/deprecations/shut-down)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
