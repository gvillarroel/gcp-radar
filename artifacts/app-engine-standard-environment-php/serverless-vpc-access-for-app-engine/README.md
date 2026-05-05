# Serverless VPC Access for App Engine

Product: App Engine standard environment PHP
Feature slug: `serverless-vpc-access-for-app-engine`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Serverless VPC Access entered beta, allowing App Engine apps to connect to internal resources in a VPC network.

## Lifecycle

- Latest feature date: 2019-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings))
- constraint (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc), [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc)
