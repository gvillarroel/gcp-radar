# 60-minute request timeout

Product: Cloud Run
Feature slug: `60-minute-request-timeout`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports request timeouts of up to 60 minutes.

## Lifecycle

- Latest feature date: 2020-10-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub), [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub))
- iam (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub), [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub))
- permission (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub), [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub))
- policy (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub), [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub))
- role (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub), [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
