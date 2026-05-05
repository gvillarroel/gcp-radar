# dev_appserver local grpcio import workaround

Product: App Engine Admin API
Feature slug: `dev-appserver-local-grpcio-import-workaround`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Developers can use a locally installed grpcio package as a workaround for import failures on dev_appserver.

## Lifecycle

- Latest feature date: 2018-09-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app))
- audit (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app))
- credential (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
