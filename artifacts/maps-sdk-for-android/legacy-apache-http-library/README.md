# Legacy Apache HTTP library

Product: Maps SDK for Android
Feature slug: `legacy-apache-http-library`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The SDK no longer includes the deprecated org.apache.http.legacy library in its AndroidManifest.xml, which can break apps that load the legacy map renderer; deprecated on 2026-01-31.

## Lifecycle

- Latest feature date: 2026-01-31
- Deprecation date: 2026-01-31
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- permission
- private
- security

## Official Evidence

- [https://developers.google.com/maps/documentation/android-sdk/config](https://developers.google.com/maps/documentation/android-sdk/config)
