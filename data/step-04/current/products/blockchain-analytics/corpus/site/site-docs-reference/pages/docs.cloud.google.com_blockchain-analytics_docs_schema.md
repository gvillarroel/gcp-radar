---
title: "Dataset schemas \_|\_ Blockchain Analytics \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-analytics/docs/schema
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-analytics/docs/schema
source_metadata:
  url: https://docs.cloud.google.com/blockchain-analytics/docs/schema
  title: "Dataset schemas \_|\_ Blockchain Analytics \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Blockchain Analytics
Reference
Send feedback
Dataset schemas
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes Blockchain Analytics table schemas.
Note: All tables for Blockchain Analytics datasets use MONTHLY time partition on the block_timestamp field.
Arbitrum One
Tables available for analysis
blocks : Table holding Arbitrum block data.
decoded_events : Table holding decoded event data for a
variety of popular Arbitrum event types.
logs : Table holding Arbitrum event logs emitted
during on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Arbitrum dataset are indexed in all
lowercase. Use LOWER() when working with mixed case addresses.
Avalanche Contract Chain
Tables available for analysis
blocks : Table holding Avalanche block data.
decoded_events : Table holding decoded event data for a
variety of popular Avalanche event types.
logs : Table holding Avalanche event logs emitted
during on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Avalanche dataset are indexed in all
lowercase. Use LOWER() when working with mixed case addresses.
Cronos Mainnet
Tables available for analysis
blocks : Table holding Cronos block data.
decoded_events : Table holding decoded event data for a
variety of popular Cronos event types.
logs : Table holding Cronos event logs emitted
during on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Cronos dataset are indexed in all
lowercase. Use LOWER() when working with mixed case addresses.
Ethereum Goerli
Warning: Goerli has reached end-of-life status and is no longer maintained by the Ethereum Foundation.
Tables available for analysis
blocks : Table holding Ethereum Goerli block data.
decoded_events : Table holding decoded event data for a
variety of popular Ethereum Goerli event types.
logs : Table holding Ethereum Goerli event logs emitted
during on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Ethereum Goerli dataset are indexed in all
lowercase. Use LOWER() when working with mixed case addresses.
Ethereum Mainnet
Tables available for analysis
accounts_state : Table holding account state at block
heights where the account was seen transacting on-chain (excludes internal
transactions).
blocks : Table holding Ethereum block data.
decoded_events : Table holding decoded event data for a
variety of popular Ethereum event types.
logs : Table holding Ethereum event logs emitted during
on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
token_transfers : Table holding ERC-20, ERC-721, and
ERC-1155 token transfers.
traces : Table holding Parity-style traces which show
actions executed by the EVM for some specific transaction or block reward.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Ethereum dataset are indexed in all lowercase. Use LOWER() when working with mixed case addresses.
Clustered materialized views
Important: The following materialized views leverage clustering to improve query performance and reduce bytes scanned. We recommend issuing queries against these materialized views if your queries heavily filter on account addresses.
accounts : Identifies accounts as externally owned accounts or smart contracts with the following schema, clustered on address .
Field name
BigQuery type
Description
address
STRING
Address identifying the account.
code
STRING
Compiled runtime bytecode of this account, given the account is a
smart contract.
code_hash
STRING
Hash of the code of the account. For all externally-owned accounts
this will be
0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 .
This is the hash when there is no code present.
is_contract
BOOLEAN
Whether or not this address is a smart contract. True, if the address
identifies a smart contract.
accounts_state_by_address : Materialized view that has the same schema as the accounts_state table and clusters the data on the address column.
transactions_by_from_address : Materialized view that has the same schema as the transactions table and clusters the data on the from_address column.
transactions_by_to_address : Materialized view that has the same schema as the transactions table and clusters the data on the to_address column.
Fantom Opera
Tables available for analysis
blocks : Table holding Fantom block data.
decoded_events : Table holding decoded event data for a
variety of popular Fantom event types.
logs : Table holding Fantom event logs emitted during
on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Fantom dataset are indexed in all lowercase. Use LOWER() when working with mixed case addresses.
Optimism Mainnet
Tables available for analysis
blocks : Table holding Optimism block data.
decoded_events : Table holding decoded event data for a
variety of popular Optimism event types.
logs : Table holding Optimism event logs emitted during
on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions :
Table holding transactions which are actions initiated by externally owned
accounts.
Caution: Addresses in the Blockchain Analytics Optimism dataset are indexed in all lowercase. Use LOWER() when working with mixed case addresses.
Polygon Mainnet
Tables available for analysis
blocks : Table holding Polygon block data.
decoded_events : Table holding decoded event data for a
variety of popular Polygon event types.
logs : Table holding Polygon event logs emitted during
on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions :
Table holding transactions which are actions initiated by externally owned
accounts.
Caution: Addresses in the Blockchain Analytics Polygon dataset are indexed in all lowercase. Use LOWER() when working with mixed case addresses.
Tron Mainnet
Tables available for analysis
blocks : Table holding Tron block data.
decoded_events : Table holding decoded event data for a
variety of popular Tron event types.
logs : Table holding Tron event logs emitted during
on-chain activity.
receipts : Table holding transaction receipts, data
about outcomes of transactions.
transactions : Table holding transactions which are
actions initiated by externally owned accounts.
Caution: Addresses in the Blockchain Analytics Tron dataset are indexed in all lowercase. Use LOWER() when working with mixed case addresses.
BigQuery schemas
Please reference the Schema tab of each table in BigQuery:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
