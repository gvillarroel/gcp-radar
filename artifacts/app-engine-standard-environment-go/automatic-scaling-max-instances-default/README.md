# Automatic scaling max_instances default

Product: App Engine standard environment Go
Feature slug: `automatic-scaling-max-instances-default`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New App Engine standard environment projects default automatic scaling max_instances to 20 for deployments unless overridden in app.yaml.

## Lifecycle

- Latest feature date: 2025-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
