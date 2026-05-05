# Default credential reuse and forced refresh

Product: Earth Engine Python Client Library
Feature slug: `default-credential-reuse-and-forced-refresh`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Makes ee.Authenticate() reuse existing credentials by default while allowing force=True to refresh them.

## Lifecycle

- Latest feature date: 2023-12-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth), [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro), [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install))
- allow (evidence: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth), [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro), [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install))
- auth (evidence: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth), [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro), [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install))
- credential (evidence: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth), [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro), [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install))
- key (evidence: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth), [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro), [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install))
- private (evidence: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth), [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro), [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install))

## Official Evidence

- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
