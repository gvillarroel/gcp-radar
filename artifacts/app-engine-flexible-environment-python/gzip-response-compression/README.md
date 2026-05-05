# Gzip response compression

Product: App Engine flexible environment Python
Feature slug: `gzip-response-compression`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine flexible environment compresses application responses with gzip by default after redeployment.

## Lifecycle

- Latest feature date: 2017-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl), [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
