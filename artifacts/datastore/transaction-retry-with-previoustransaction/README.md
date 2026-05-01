# Transaction retry with previousTransaction

Product: Datastore
Feature slug: `transaction-retry-with-previoustransaction`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Datastore Data API supports specifying previousTransaction when retrying a read-write transaction.

## Lifecycle

- Latest feature date: 2018-01-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- credential
- key

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/client)
