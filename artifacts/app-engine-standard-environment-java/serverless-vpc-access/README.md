# Serverless VPC Access

Product: App Engine standard environment Java
Feature slug: `serverless-vpc-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Serverless VPC Access lets App Engine services connect to VPC network resources.

## Lifecycle

- Latest feature date: 2019-12-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- constraint (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/connecting-shared-vpc)
