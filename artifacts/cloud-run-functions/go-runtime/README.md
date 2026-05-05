# Go runtime

Product: Cloud Run functions
Feature slug: `go-runtime`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Go runtime lets functions run Go code.

## Lifecycle

- Latest feature date: 2019-01-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- authorization (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- role (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- token (evidence: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
