---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:58:35.281Z"
product_name: "Blockchain Analytics"
product_slug: "blockchain-analytics"
feature_name: "Legacy Analytics Hub Listing for Arbitrum One"
feature_slug: "legacy-analytics-hub-listing-for-arbitrum-one"
latest_feature_date: "2023-11-30"
deprecation_date: "2023-11-30"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-analytics/docs/release-notes"
  - "https://docs.cloud.google.com/blockchain-analytics/docs/schema"
  - "https://docs.cloud.google.com/blockchain-analytics/docs/prerequisites"
keywords:
  - "analytics"
  - "arbitrum"
  - "listing"
  - "legacy"
  - "hub"
  - "for"
  - "one"
  - "the"
---

# Legacy Analytics Hub Listing for Arbitrum One

Product: Blockchain Analytics
Coverage: LOW

## Step 02 Summary

The legacy Analytics Hub Listing for Arbitrum One is a discontinued listing capability that has been replaced by a newer Analytics Hub Listing; deprecated on 2023-11-30.

## Extended Definition

The legacy Analytics Hub Listing for Arbitrum One is a discontinued listing capability that has been replaced by a newer Analytics Hub Listing; deprecated on 2023-11-30.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/blockchain-analytics/docs/release-notes](https://docs.cloud.google.com/blockchain-analytics/docs/release-notes)
- [https://docs.cloud.google.com/blockchain-analytics/docs/schema](https://docs.cloud.google.com/blockchain-analytics/docs/schema)
- [https://docs.cloud.google.com/blockchain-analytics/docs/prerequisites](https://docs.cloud.google.com/blockchain-analytics/docs/prerequisites)

## Supporting Pages

### Blockchain Analytics release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-analytics/docs/release-notes](https://docs.cloud.google.com/blockchain-analytics/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- November 30, 2023 Deprecated Due to ongoing system migration, the legacy Analytics Hub Listing for Arbitrum One is now deprecated and has been replaced with the new Analytics Hub Listing .
- January 18, 2024 Fixed Blockchain Analytics' Ethereum Goerli nodes are synced with the network and indexing has resumed after the Dencun Hardfork.
- Cronos nodes used for Blockchain Analytics have not been upgraded to use the new v1.0.14 binary.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Dataset schemas \_|\_ Blockchain Analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-analytics/docs/schema](https://docs.cloud.google.com/blockchain-analytics/docs/schema)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Arbitrum One Tables available for analysis blocks : Table holding Arbitrum block data. decoded events : Table holding decoded event data for a variety of popular Arbitrum event types. logs : Table holding Arbitrum event logs emitted during on-chain activity. receipts : Table holding transaction receipts, data about outcomes of transactions. transactions : Table holding transactions which are actions initiated by externally owned accounts.
- Note: All tables for Blockchain Analytics datasets use MONTHLY time partition on the block timestamp field.
- Caution: Addresses in the Blockchain Analytics Arbitrum dataset are indexed in all lowercase.
- Ethereum Mainnet Tables available for analysis accounts state : Table holding account state at block heights where the account was seen transacting on-chain (excludes internal transactions). blocks : Table holding Ethereum block data. decoded events : Table holding decoded event data for a variety of popular Ethereum event types. logs : Table holding Ethereum event logs emitted during on-chain activity. receipts : Table holding transaction receipts, data about outcomes of transactions. token transfers : Table holding ERC-20, ERC-721, and ERC-1155 token transfers. traces : Table holding Parity-style traces which show actions executed by the EVM for some specific transaction or block reward. transactions : Table holding transactions which are actions initiated by externally owned accounts.

### Prerequisites \_|\_ Blockchain Analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-analytics/docs/prerequisites](https://docs.cloud.google.com/blockchain-analytics/docs/prerequisites)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Required Before you can use Blockchain Analytics, you must meet the following prerequisites: Prerequisite Description Google Cloud billing account You must have a Google Cloud account with active billing.
- Google Cloud projects form the basis for creating, enabling, and using all Google Cloud services including Blockchain Analytics.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Recommended The following tools are helpful for new developers: Tool Description BigQuery custom cost controls BigQuery custom cost controls allow you to create quotas that limit daily query size at both the project and user level.

