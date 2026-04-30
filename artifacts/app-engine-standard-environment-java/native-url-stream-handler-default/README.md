# Native URL stream handler default

Product: App Engine standard environment Java
Feature slug: `native-url-stream-handler-default`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The local development server now sets the url-stream-handler configuration parameter to native by default to match Java 8 production behavior.

## Lifecycle

- Latest feature date: 2017-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
