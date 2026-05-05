# Version upgrade

Product: Memorystore for Valkey
Feature slug: `version-upgrade`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows upgrading a Memorystore for Valkey instance to a newer Valkey version; Allows upgrading a Memorystore for Valkey instance from Valkey 7.2 to 8.0.

## Lifecycle

- Latest feature date: 2025-06-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- authorization (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version), [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)
