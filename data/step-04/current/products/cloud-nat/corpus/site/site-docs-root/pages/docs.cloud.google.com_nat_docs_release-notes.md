---
title: "Cloud NAT release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/release-notes
  title: "Cloud NAT release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NAT
Resources
Send feedback
Cloud NAT release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to Cloud NAT.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 31, 2026
Announcement
The default TCP TIME_WAIT
timeout for Cloud NAT is scheduled to decrease from 120 seconds to 30 seconds,
across all regions, as follows:
From June 30 to September 29, 2026 : new Cloud NAT gateways will use either
the 120-second or 30-second default, depending on when the update is
deployed in a specific region.
On or after September 30, 2026 : all new Cloud NAT gateways in all regions
will use the 30-second default.
Impact on gateways
New gateways : after the update is deployed in a region, all new Cloud NAT
gateways created in that region will use the 30-second default.
This change also applies if a pre-update gateway is deleted and then recreated.
Existing gateways : Cloud NAT gateways created before the regional update
will retain the 120-second default. You can adjust this value by using the
--tcp-time-wait-timeout
flag at any time.
Cloud NAT gateways configured with a custom TIME_WAIT value
aren't affected and will continue to use your configured custom value.
The following table outlines the applicable default timeout for new gateways throughout the deployment timeline.
Gateway type
Default timeout (before June 30)
Default timeout (June 30—September 29)
Default timeout (on or after September 30)
New
120 seconds
30 or 120 seconds
30 seconds
October 21, 2025
Feature
General Availability : Private NAT supports Cloud Run. For more
information, see Supported resources .
September 23, 2025
Feature
Preview : Cloud NAT gateways for Public NAT support source-based NAT rules for IPv4 addresses.
August 26, 2025
Feature
General Availability : Cloud NAT gateways for Public NAT support IPv6 to IPv4 network address translation. For more information, see NAT64 in Public NAT .
May 06, 2025
Feature
Preview : Private NAT supports Cloud Run. For more information, see Supported resources .
February 12, 2025
Feature
Preview : Cloud NAT gateways for Public NAT support IPv6 to IPv4 network address translation. For more information, see NAT64 in Public NAT .
September 30, 2024
Feature
Hybrid NAT is in General Availability .
July 22, 2024
Feature
Hybrid NAT supports Cloud Interconnect in Preview .
April 08, 2024
Feature
Hybrid NAT is available in Preview .
January 16, 2024
Feature
Cloud NAT support for inter-VPC communication is in General Availability .
September 11, 2023
Issue
In some cases, it is possible to create multiple NAT gateway configurations that include the same subnet. For some of these configurations, VMs that are attached to that subnet are not allocated NAT ports, and therefore can't access resources on the internet.
For more information about this issue and a workaround, see VMs can't reach the internet .
August 22, 2023
Feature
Cloud NAT support for inter-VPC communication is in Preview .
August 06, 2023
Feature
Cloud NAT support for Standard Tier egress is in General Availability .
May 30, 2023
Feature
Cloud NAT support for Standard Tier egress is available in Preview .
February 17, 2022
Feature
Dynamic port allocation for Cloud NAT is in General Availability .
November 18, 2021
Feature
Cloud NAT rules are in General Availability .
September 30, 2021
Feature
Dynamic port allocation for Cloud NAT is available in Preview .
August 02, 2021
Feature
Cloud NAT rules are available in Preview . NAT rules let you create access rules that define how
Cloud NAT is used to connect to the internet. NAT rules support source
NAT based on destination address.
December 16, 2020
Feature
Enabling or disabling endpoint-independent
mapping for your gateway is in General Availability .
October 28, 2020
Feature
Organization policy constraints for Cloud NAT are in General Availability .
October 06, 2020
Feature
Enabling or disabling endpoint-independent
mapping for your gateway is available in Preview .
August 19, 2020
Feature
Organization policy constraints for Cloud NAT are available in Beta .
March 30, 2020
Feature
Cloud NAT monitoring is in General Availability .
February 27, 2020
Feature
Cloud NAT monitoring is available in Beta .
September 30, 2019
Feature
Draining NAT IP addresses is in General Availability .
June 26, 2019
Feature
Cloud NAT logging is in General Availability .
April 17, 2019
Feature
Cloud NAT logging is available in Beta .
November 30, 2018
Feature
Cloud NAT is in General Availability .
October 11, 2018
Feature
Cloud NAT is available in Beta .
June 29, 2018
Feature
Cloud NAT is available in Alpha .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
