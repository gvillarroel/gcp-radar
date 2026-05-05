# ImportCustomer method

Product: Channel Services
Feature slug: `importcustomer-method`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds the ImportCustomer API method in v1alpha1 as the first step of a transfer, replacing CreateCustomer and allowing customer data import by domain or Cloud Identity ID.

## Lifecycle

- Latest feature date: 2021-03-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))
- auth (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))
- credential (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))
- identity (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))
- key (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))
- permission (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))
- private (evidence: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements), [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning), [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc))

## Official Evidence

- [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning)
- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
