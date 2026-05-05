# External HTTP(S) Load Balancing via serverless NEG

Product: App Engine standard environment Go
Feature slug: `external-http-s-load-balancing-via-serverless-neg`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine can use External HTTP(S) Load Balancing through serverless network endpoint groups, including Cloud CDN support.

## Lifecycle

- Latest feature date: 2020-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed))
- armor (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls), [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
