---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.270Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Valkey version 8.0 support"
feature_slug: "valkey-version-8-0-support"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance"
keywords:
  - "valkey"
  - "version"
  - "memorystore"
  - "for"
  - "supports"
  - "in"
  - "preview"
---

# Valkey version 8.0 support

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Valkey supports Valkey version 8.0 in Preview.

## Extended Definition

Memorystore for Valkey supports Valkey version 8.0 in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance](https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance)

## Supporting Pages

### "About upgrading the Valkey version of an instance \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version)
- Source ID: `site-iam-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page contains the following information: Best practices to upgrade the version of your Memorystore for Valkey instance How your instance behaves during a version upgrade operation For more information about upgrading your instance's version, see Upgrade the Valkey version of an instance .
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About upgrading the Valkey version of an instance Stay organized with collections Save and categorize content based on your preferences.
- Best practices to upgrade your instance's version This section provides guidance for upgrading the version of your Memorystore for Valkey instance.
- Version upgrade behavior Memorystore for Valkey upgrades the version of your instance by updating all nodes within the instance.

### "About in-transit encryption \_|\_ Memorystore for Valkey \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-transit encryption prerequisites To use in-transit encryption with Memorystore for Valkey, you need the following: A Valkey client that supports TLS or a third-party TLS sidecar.
- Memorystore for Valkey supports the TLS protocol, versions 1.2 and later.
- The following are sample use cases for using in-transit encryption: Protect sensitive cached data : If you use Memorystore for Valkey to store high-value information, such as session tokens, Personal Identifiable Information (PII), or API keys, then in-transit encryption prevents attackers with VPC access from accessing your data.
- Secure Identity and Access Management (IAM) authentication : When you use IAM authentication to manage access to your data, Memorystore for Valkey requires TLS to prevent the exposure or leaking of authentication tokens during transmission.

### Supported versions \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Valkey version 8.0 The following table outlines Memorystore support of some major features introduced by Valkey 8.0: Feature Description Asynchronous I/O threading for performance boost This feature significantly improves performance by enabling parallel processing between the main thread and I/O threads.
- Memorystore for Valkey supports Valkey versions 7.2, 8.0, and 9.0.
- Current versions This table shows the supported Valkey versions and when each version was last updated: Valkey major version Last update 9.0 March 11, 2026 8.0 October 2, 2024 7.2 August 30, 2024 Valkey version 9.0 Valkey 9.0's major features focus on performance and scalability enhancements, including hash field expiration for more granular data management.
- Valkey version 7.2 The following table outlines Memorystore support of some major features introduced by Valkey 7.2: Feature Description New command Introduces the WAITAOF command that blocks the client until a specified number of Redises have synced all previous write commands to the AOF on disk.

### Connect to a Memorystore for Valkey instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance](https://docs.cloud.google.com/memorystore/docs/valkey/connect-instance)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output should be similar to the following: authorizationMode: AUTH DISABLED createTime: '2024-08-06T22:02:55.224704101Z' deletionProtectionEnabled: false engineVersion: VALKEY 7 2 name: projects/myproject/locations/us-central1/instances/my-instance nodeConfig: sizeGb: 6.5 nodeType: STANDARD SMALL persistenceConfig: mode: DISABLED endpoints: - connections: - pscAutoConnection: connectionType: CONNECTION TYPE PRIMARY forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-ec00907a-3ee3-4740-8092-ae832428f8e4 ipAddress: 10.128.0.124 network: projects/my-project/global/networks/default port: 6379 projectId: my-project pscConnectionId: '38876592440606778' serviceAttachment: projects/448055306617/regions/us-central1/serviceAttachments/gcp-memorystore-auto-b3c43536-4a77-40-psc-sa - pscAutoConnection: connectionType: CONNECTION TYPE READER forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-5ce5518f-1c59-4b46-aa74-799fad70d7b1 ipAddress: 10.128.0.125 network: projects/my-project/global/networks/default port: 6379 projectId: my-project pscConnectionId: '38876592440606779' serviceAttachment: projects/448055306617/regions/us-central1/serviceAttachments/gcp-memorystore-auto-b3c43536-4a77-40-psc-sa-2 replicaCount: 2 shardCount: 1 mode: CLUSTER DISABLED state: ACTIVE transitEncryptionMode: TRANSIT ENCRYPTION DISABLED uid: 869f2d09-d20b-46d8-94ba-be83c48ceb54 updateTime: '2024-08-06T22:18:59.389980051Z' zoneDistributionConfig: mode: MULTI ZONE Primary endpoint: Take a note of the endpoint address and port number listed under CONNECTION TYPE PRIMARY in the endpoints: section.
- The output should be similar to the following: authorizationMode: AUTH DISABLED createTime: '2024-08-06T22:02:55.224704101Z' deletionProtectionEnabled: false engineVersion: VALKEY 7 2 name: projects/myproject/locations/us-central1/instances/my-instance nodeConfig: sizeGb: 6.5 nodeType: STANDARD SMALL persistenceConfig: mode: DISABLED endpoints: - connections: - pscAutoConnection: connectionType: CONNECTION TYPE DISCOVERY forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-ec00907a-3ee3-4740-8092-ae832428f8e4 ipAddress: 10.128.0.58 network: projects/my-project/global/networks/default port: 6379 projectId: my-project pscConnectionId: '38876592440606778' serviceAttachment: projects/129109085717/regions/us-east1/serviceAttachments/gcp-memorystore-auto-58e78f71-fdb7-48-psc-sa - pscAutoConnection: forwardingRule: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/forwardingRules/sca-auto-fr-5ce5518f-1c59-4b46-aa74-799fad70d7b1 ipAddress: 10.128.0.59 network: projects/my-project/global/networks/default port: 6379 projectId: my-project pscConnectionId: '38876592440606779' serviceAttachment: projects/129109085717/regions/us-east1/serviceAttachments/gcp-memorystore-auto-58e78f71-fdb7-48-psc-sa-2 replicaCount: 2 shardCount: 5 state: ACTIVE transitEncryptionMode: TRANSIT ENCRYPTION DISABLED uid: 869f2d09-d20b-46d8-94ba-be83c48ceb54 updateTime: '2024-08-06T22:18:59.389980051Z' zoneDistributionConfig: mode: MULTI ZONE Take a note of the endpoint address and port number listed in the endpoints: section for the connectionType: CONNECTION TYPE DISCOVERY entry.
- After you connect to the node, enter the following Valkey commands: Enter: PING Result: PONG Connect to a Cluster Mode Disabled instance This section explains how to connect to a Memorystore for Valkey Cluster Mode Disabled instance.
- To connect to the instance: If you don't already have a Linux Compute Engine VM that uses the authorized network for your Memorystore for Valkey instance, create one and connect to it by following Quickstart to create a Linux VM .

