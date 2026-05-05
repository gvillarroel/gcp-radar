# Flexible app staging file selection

Product: App Engine standard environment Java
Feature slug: `flexible-app-staging-file-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Maven and Gradle staging for flexible apps now copies only app.yaml into the build or target directory and expects other configuration files under src/main/appengine.

## Lifecycle

- Latest feature date: 2017-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
