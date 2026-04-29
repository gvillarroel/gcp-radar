# Default auto scaling max instances for new App Engine standard projects

Product: App Engine standard environment PHP
Feature slug: `default-auto-scaling-max-instances-for-new-app-engine-standard-projects`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New App Engine standard projects now default to a maximum of 20 automatic-scaling instances unless max_instances is overridden.

## Lifecycle

- Latest feature date: 2025-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- private

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
