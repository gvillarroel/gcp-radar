# Committed use discounts

Product: Datastore
Feature slug: `committed-use-discounts`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Committed use discounts provide discounted pricing for sustained read, write, and delete spend commitments.

## Lifecycle

- Latest feature date: 2025-04-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- allow (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- auth (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- encrypt (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- iam (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- identity (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- key (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- private (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))
- role (evidence: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore), [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions))

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore)
