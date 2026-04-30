# Local development server boot classpath overrides

Product: App Engine standard environment Java
Feature slug: `local-development-server-boot-classpath-overrides`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The local development server no longer supports -Xbootclasspath/p and google_sql.jar on the class path; deprecated on 2017-09-25.

## Lifecycle

- Latest feature date: 2017-09-25
- Deprecation date: 2017-09-25
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- policy

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
