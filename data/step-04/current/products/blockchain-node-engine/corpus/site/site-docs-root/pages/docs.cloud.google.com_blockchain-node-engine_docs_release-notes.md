---
title: "Blockchain Node Engine release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes
  title: "Blockchain Node Engine release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Blockchain Node Engine
Resources
Send feedback
Blockchain Node Engine release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Blockchain Node Engine.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can also subscribe to this page using a
feed reader to get notifications of updates.
What is a feed reader?
What is a feed reader?
Really simple syndication (RSS) feed readers aggregate content from
websites that you specify.
Feed reader notifications can be email-, browser-, desktop-, or
mobile-based. Some readers are free, or have free versions, and some
require a subscription.
A few examples:
Feedly
Feedreader
Feeder
More information on RSS:
RSS
Comparison of feed aggregators
Close
rss_feed Subscribe:
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 19, 2024
Announcement
On March 19, 2024, Blockchain Node Engine upgraded all mainnet Polygon nodes in preparation for the Napoli (PIP-33) Hardfork.
March 12, 2024
Announcement
On March 12, 2024, Blockchain Node Engine upgraded all mainnet Ethereum nodes in preparation for the Dencun Hardfork.
February 01, 2024
Announcement
On February 1, 2024, Blockchain Node Engine upgraded all Ethereum Holesky nodes in preparation for the Dencun Hardfork.
January 30, 2024
Announcement
On January 30, 2024, Blockchain Node Engine upgraded all Ethereum Sepolia nodes in preparation for the Dencun Hardfork.
January 16, 2024
Announcement
On January 16, 2024, Blockchain Node Engine upgraded all Ethereum Goerli nodes in preparation for the Dencun Hardfork.
December 18, 2023
Feature
Blockchain Node Engine is now integrated with VPC Service Controls. This integration offers enhanced access control options for admins at the organization level.
This integration is still in Preview and is ready for broader testing and use, but is not fully supported for production environments.
November 08, 2023
Announcement
On November 8, 2023 Blockchain Node Engine released a limited preview version of the software. This release adds the Solana blockchain node option. Access to the user interface and APIs is limited to specific customers until GA release.
September 21, 2023
Announcement
On September 21, 2023 Blockchain Node Engine released a limited preview version of the software. This release adds the Polygon blockchain node option. Access to the user interface and APIs is limited to specific customers until the GA release.
July 20, 2023
Announcement
On July 20, 2023 Blockchain Node Engine added a self-managed nodes section and common setup instructions .
June 13, 2023
Announcement
On June 13, 2023 Blockchain Node Engine became generally available. The user interface and APIs are now publicly available to all customers.
June 05, 2023
Announcement
On June 5, 2023 Blockchain Node Engine released a limited GA version of the software. Access to the user interface and APIs is limited to specific customers until the full GA release.
Note: Rollouts of this release began today and may take four or more business days to be completed across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Feature
Features supported in this release include:
Blockchain Node Engine is a fully-managed service for dedicated blockchain nodes.
Ethereum support:
Execution and consensus clients
Full and Archive nodes
JSON-RPC and WebSocket endpoints.
With a single operation, Blockchain Node Engine provisions a new node with the specified configuration (network, region, client, node type), bootstrap it from a known-good snapshot, sync it with the blockchain, and ensure its availability.
Google Cloud Armor always enabled.
See:
What is Blockchain Node Engine?
Get started
Create a blockchain node
Using blockchain nodes
APIs and reference
March 22, 2023
Announcement
On March 22, 2023, We released into private preview an updated version of the Blockchain Node Engine software.
Feature
You can now access a node's WebSocket server through the WebSocket API endpoint.
The WebSocket API unlocks the eth_subscribe and eth_unsubscribe methods, giving you powerful new ways to interact with your nodes.
See Using WebSockets for more information on Ethereum WebSocket.
March 09, 2023
Announcement
On March 9, 2023, We released into private preview an updated version of the Blockchain Node Engine software.
Feature
You can now configure access to the admin and debug JSON-RPC API namespaces. This optionally enables access to a broad array of useful functions related to retrieving debug information from the node, and accessing administrative actions.
These fields may be omitted from node creation and default to false .
Note: for the time being these flags cannot be changed once a node is created.
February 09, 2023
Announcement
On February 9, 2023, We released into private preview an updated version of the Blockchain Node Engine software.
Feature
The following features are now available:
Sepolia Testnet (supported for Geth/Lighthouse Full nodes)
Archive nodes (supported for Erigon nodes on Mainnet)
Sepolia Testnet is one of the preferred testnets for dApp developers. We currently support nodes running the Geth/Lighthouse clients on this network.
Archive nodes have the same capabilities as Full nodes, but also allow for querying historical data. Our first supported client for archive nodes is Erigon.
Feature
Blockchain nodes created with the execution client GETH and consensus client LIGHTHOUSE now expose the JSON-RPC endpoint of the lighthouse client (consensus layer).
This feature allows you run your own validators by connecting the validator nodes to the consensus layer.
This feature also allows you to execute use cases involving deep inspection of the staking process.
January 04, 2023
Announcement
On January 4, 2023, We released into private preview an updated version of the Blockchain Node Engine software.
Feature
You can now select either Ethereum Mainnet or Testnet as options when creating blockchain nodes.
With the Testnet option, Blockchain Node Engine creates a different type of node that connects the Goerli-Prater Ethereum network.
November 30, 2022
Announcement
On November 30, 2022 Blockchain Node Engine was released into a private preview.
Feature
Features supported in this launch include:
Blockchain support: Ethereum (Proof of Stake)
Administer "full" nodes via API
us-central1 regional support
Full RPC API
See: Introducing Blockchain Node Engine
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
