---
title: "Blockchain Analytics release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-analytics/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-analytics/docs
source_metadata:
  url: https://docs.cloud.google.com/blockchain-analytics/docs/release-notes
  title: "Blockchain Analytics release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Blockchain Analytics
Resources
Send feedback
Blockchain Analytics release notes
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
This page documents production updates to Blockchain Analytics.
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
January 18, 2024
Fixed
Blockchain Analytics' Ethereum Goerli nodes are synced with the network and indexing has resumed after the Dencun Hardfork.
January 17, 2024
Issue
Users may experience data staleness with the Ethereum Goerli dataset. Goerli experienced a chain split earlier today due to the Dencun Hardfork. While the Goerli network has reached consensus, the Goerli nodes powering Blockchain Analytics data indexing have not yet synced with the network.
December 27, 2023
Issue
On December 16, 2023, Cronos mainnet executed an emergency hardfork at block height 11608760 . Cronos nodes used for Blockchain Analytics have not been upgraded to use the new v1.0.14 binary. As a result, the Cronos dataset provides data up to pre-hardfork block height 11608760 .
November 30, 2023
Deprecated
Due to ongoing system migration, the legacy Analytics Hub Listing for Arbitrum One is now deprecated and has been replaced with the new Analytics Hub Listing .
Issue
Due to an ongoing system migration, users may experience data staleness and data absence intermittently throughout next week
November 29, 2023
Change
We are performing a scheduled system upgrade on 11/29/2023 from 4:00PM EST to 6:00PM EST. During this upgrade, you may experience increased data staleness and data absences. We apologize for any inconvenience this may cause.
What to Expect:
Data staleness may increase, causing delays in data retrieval and updates.
Data absences may occur, meaning that certain blockchain data may be unavailable for a period of time.
July 17, 2023
Announcement
On July 17, 2023 we released the preview version of Blockchain Analytics.
Blockchain Analytics offers indexed blockchain data made available through BigQuery for easy analysis through SQL. Starting with Ethereum , Blockchain Analytics offers you access to reliable data without the overhead of operating nodes or developing and maintaining an indexer.
Documentation: What is Blockchain Analytics?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
