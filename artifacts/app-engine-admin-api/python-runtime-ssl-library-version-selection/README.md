# Python runtime ssl library version selection

Product: App Engine Admin API
Feature slug: `python-runtime-ssl-library-version-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Python runtime added a new third-party ssl library based on Python 2.7.11 that can be selected as version 2.7.11 in app.yaml.

## Lifecycle

- Latest feature date: 2016-05-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- credential (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml)
