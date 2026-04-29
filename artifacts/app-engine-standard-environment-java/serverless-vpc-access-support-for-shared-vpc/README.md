# Serverless VPC Access support for Shared VPC

Product: App Engine standard environment Java
Feature slug: `serverless-vpc-access-support-for-shared-vpc`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Engine standard environment Java supports using Serverless VPC Access with Shared VPC; App Engine standard environment Java supports using Serverless VPC Access with Shared VPC.

## Lifecycle

- Latest feature date: 2021-04-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- constraint
- firewall
- iam
- identity
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
