# Multiple domains for Google-managed SSL certificates

Product: Cloud Load Balancing
Feature slug: `multiple-domains-for-google-managed-ssl-certificates`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Google-managed SSL certificates can secure multiple domains with a single certificate resource.

## Lifecycle

- Latest feature date: 2019-12-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
