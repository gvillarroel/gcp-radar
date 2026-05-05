# Serverless VPC Access Shared VPC support

Product: App Engine standard environment Ruby
Feature slug: `serverless-vpc-access-shared-vpc-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks; Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks.

## Lifecycle

- Latest feature date: 2021-04-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- constraint (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-shared-vpc)
