# Region ID in appspot URLs

Product: App Engine standard environment Go
Feature slug: `region-id-in-appspot-urls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine app URLs can include a region ID in the r.appspot.com hostname for more efficient request routing.

## Lifecycle

- Latest feature date: 2020-02-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed), [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/go/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
