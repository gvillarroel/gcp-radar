---
title: "Cloud Router release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/release-notes
  title: "Cloud Router release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Router
Resources
Send feedback
Cloud Router release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to Cloud Router.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 24, 2026
Feature
Cloud Router supports named sets in Preview
for BGP route policies. Named sets are used to group together expressions of
either communities or BGP prefixes, allowing them to be managed or
referenced as a single entity. For more information, see
BGP route policies overview .
March 06, 2025
Feature
Cloud Router support for BGP route policies is now generally available . For more information, see BGP route policies overview .
December 17, 2024
Feature
Standard best path selection mode is now generally available . For more information, see Best path selection modes .
August 27, 2024
Feature
Cloud Router supports standard best path selection mode in Preview , which offers support for consistent AS path-based routing and more control over how BGP prefixes are ranked in your VPC networks. For more information, see Best path selection modes .
May 21, 2024
Feature
Cloud Router supports BGP route policies in Public Preview . For more information, see BGP route policies overview .
Feature
Cloud Router support for IPv6 BGP sessions is generally available . For more information, see BGP peering IP addresses .
December 06, 2023
Feature
Cloud Router support for IPv6 BGP sessions is in Public Preview. For more information, see BGP peering IP addresses .
July 20, 2023
Feature
The Cloud Router custom learned routes feature is Generally Available ( GA ). For more information, see Custom learned routes .
May 10, 2023
Feature
The Cloud Router custom learned routes feature is in Preview . This feature lets you configure a Border Gateway Protocol (BGP) session to include learned routes that you manually specify. Cloud Router then behaves as if it learned the routes from the BGP peer.
Custom learned routes can be helpful if you want to avoid the limitations of static routes . For example:
Static routes can't detect a loss of reachability in the next hop of a route. In contrast, custom learned routes can detect a loss of reachability, and they react accordingly to avoid dropping traffic without notification.
Static routes do not support using HA VPN tunnels or Cloud Interconnect VLAN attachments as next hops. Custom learned routes do.
For more information, see Custom learned routes .
December 14, 2022
Feature
Cloud Router supports Multiprotocol BGP (MP-BGP) and can exchange IPv6 prefixes over IPv4 BGP sessions. Cloud Router supports IPv6 prefix advertisement for VPC networks with dual-stack subnets . You can enable IPv6 prefix exchange over IPv4 BGP sessions that are created for HA VPN tunnels . This feature is generally available .
November 01, 2022
Feature
The Cloud Router BGP MD5 authentication feature is Generally Available ( GA ). For more information, see Use MD5 authentication .
September 20, 2022
Change
You can now use the Google Cloud Console to configure MD5 authentication for BGP sessions. The MD5 authentication feature is available in Preview . For more information, see Use MD5 authentication .
May 10, 2022
Feature
Cloud Router now supports MD5 authentication of BGP sessions. This feature is available in preview . For more information, see Use MD5 authentication .
February 07, 2022
Feature
Bidirectional Forwarding Detection (BFD) for Cloud Router is Generally Available ( GA ).
January 25, 2022
Change
The Cloud Router documentation now includes a page that describes the possible values for a BGP session's state. Also, the documentation about diagnostic messages and session states related to Bidirectional Forwarding Detection (BFD) has moved from Troubleshooting to a new page . BFD is in preview and is covered by the Pre-GA Offerings Terms of the Google Cloud Terms of Service.
October 25, 2021
Feature
Bidirectional Forwarding Detection (BFD) for Cloud Router is available in Preview .
June 23, 2021
Feature
Cloud Router now supports the following:
Enabling and disabling BGP sessions
Updating the BGP keepalive interval
June 16, 2020
Change
The public documentation for Cloud Router is now located under the Network Connectivity page .
September 26, 2018
Change
Added recommended settings for the Graceful Restart timer and the Stalepath timer to the Overview page .
August 27, 2018
Change
Added a section on BGP timer settings to the Overview page .
March 14, 2018
Feature
Specifying Cloud Router route advertisements is Generally Available .
January 12, 2018
Feature
Specifying Cloud Router route advertisements is in Beta .
October 19, 2017
Feature
Setting a VPC network's dynamic routing mode is Generally Available .
August 17, 2017
Feature
Setting a VPC network's dynamic routing mode is is in Beta . The VPC dynamic routing mode determines whether Cloud Router advertises and propagates routes globally or regionally.
Change
Published a standalone guide for Cloud Router.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
