# Customer-managed encryption keys (CMEK)

Product: Memorystore for Valkey
Feature slug: `customer-managed-encryption-keys-cmek`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Memorystore for Valkey now supports customer-managed encryption keys for data encryption.

## Lifecycle

- Latest feature date: 2025-09-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- authorization (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- token (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek), [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
