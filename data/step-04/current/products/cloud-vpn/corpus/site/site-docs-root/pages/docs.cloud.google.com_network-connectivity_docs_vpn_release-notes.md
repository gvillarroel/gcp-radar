---
title: "Cloud VPN release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes
  title: "Cloud VPN release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud VPN
Resources
Send feedback
Cloud VPN release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to Cloud VPN.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
January 20, 2026
Feature
Cloud VPN is now available in region
asia-southeast3 (Bangkok, Thailand).
For more information, see Global locations .
Pricing is available on the Cloud VPN pricing page .
December 11, 2025
Feature
Cloud VPN provides predefined dashboards in the Google Cloud console for a
quick, single-view insight into system health and tunnel performance. These
dashboards display key metrics that enable you to monitor project-wide health
and conduct tunnel-specific diagnosis without manual configuration. This feature
is Generally Available .
For more information, see View Monitoring dashboards
September 30, 2025
Feature
Cloud VPN supports customizable cipher options for your VPN tunnels. You can configure ciphers as per your security requirements. This feature is Generally Available .
For more information, see Configure ciphers in Cloud VPN tunnel .
August 01, 2025
Deprecated
Classic VPN full deprecation update
As of August 1, 2025, dynamic routing or Border Gateway Protocol (BGP) for Classic VPN tunnels is deprecated. If your workloads require BGP for VPN connectivity, you must use HA VPN.
Existing Classic VPN tunnels that use BGP will continue to function. However, they will no longer be supported and will operate without an availability SLA.
For more information, refer to Classic VPN dynamic routing deprecation .
June 12, 2025
Feature
Cloud VPN supports customizable cipher options for your VPN tunnels. You can configure ciphers as per your security requirements. This feature is available in Public Preview .
For more information, see Configure ciphers in Cloud VPN tunnel .
March 04, 2025
Feature
Cloud VPN is now available in region europe-north2 (Stockholm, Sweden).
For more information, see Global locations .
Pricing is available on the Cloud VPN pricing page .
November 18, 2024
Feature
Cloud VPN is now available in region northamerica-south1 (Queretaro, Mexico, North America).
For more information, see Global locations .
Pricing is available on the Cloud VPN pricing page .
June 19, 2024
Feature
Cloud VPN lets you connect two VPC networks in different regions by using HA VPN gateways.
For more information, see HA VPN topologies .
June 13, 2024
Feature
Cloud VPN support for IPv6-only HA VPN gateways is available in General Availability . For more information, see IPv6 support .
January 31, 2024
Feature
Cloud VPN is now available in region africa-south1 (Johannesburg, South Africa).
Pricing is available on the Cloud VPN pricing page .
January 30, 2024
Feature
Cloud VPN support for IPv6-only HA VPN gateways is in Preview . For more information, see IPv6 support .
January 08, 2024
Feature
Cloud VPN lets you connect an HA VPN gateway to Compute Engine virtual machine (VM) instances.
For more information, see HA VPN topologies .
September 19, 2023
Feature
Cloud VPN is now available in region me-central2 (Dammam, Saudi Arabia).
Pricing is available on the Cloud VPN pricing page .
August 22, 2023
Feature
Cloud VPN is now available in region europe-west10 (Berlin, Germany).
Pricing is available on the Cloud VPN pricing page .
March 30, 2023
Feature
Cloud VPN is now available in region me-central1 (Doha, Qatar).
Pricing is available on the Cloud VPN pricing page .
March 23, 2023
Feature
Cloud VPN is now available in region europe-west12 (Turin, Italy).
Pricing is available on the Cloud VPN pricing page .
February 22, 2023
Feature
HA VPN over Cloud Interconnect is generally available . With HA VPN over Cloud Interconnect, you can use Cloud VPN to encrypt your Cloud Interconnect traffic by deploying HA VPN tunnels over your VLAN attachments.
For more information, see the HA VPN over Cloud Interconnect overview .
December 14, 2022
Feature
Cloud VPN supports dual-stack HA VPN gateways that allow both IPv4 and IPv6 traffic. By using Multiprotocol BGP (MP-BGP) sessions in Cloud Router , HA VPN can connect your peer networks to VPC networks with dual-stack subnets . This feature is generally available .
October 05, 2022
Feature
Cloud VPN is now available in region me-west1 (Tel Aviv, Israel).
Pricing is available on the Cloud VPN pricing page .
July 15, 2022
Feature
You can now download third-party peer VPN configuration templates for Cloud VPN from the Google Cloud console. Use these templates to configure HA VPN tunnels on your peer VPN device. Configuration templates are currently available for the following vendor platform and software versions:
Cisco Firepower, running ASA 9.13(1)2 or later
Fortinet FortiGate 200E, running FortiOS 6.2.3 or later
Juniper vSRX, running JunOS 18.4R3-S2 or later
For more information, see Download a peer VPN configuration template .
June 28, 2022
Change
Cloud VPN no longer checks a peer's IKE identity.
This change simplifies the configuration of your VPN peers, because you no longer need to explicitly set a peer's IKE identity to a specific value.
Note: Some Cloud VPN tunnels that were previously unestablished due to unmatched IKE identity might now become established.
If you don't want the affected tunnels to become established, delete them as needed on the Cloud VPN side, on the on-premises side, or on both sides.
If you want the affected tunnels to become established, no action is required on your part.
Previously, Cloud VPN required peers to use an IKE identity of type ID_IPV4_ADDR , which is equal to the peer's public IP address.
Removing this restriction enables easier interoperation with peers that don't support changing their IKE identity, especially when such peers are located behind NAT (Network Address Translation).
If you have any questions or require assistance, contact Google Cloud Support .
June 07, 2022
Feature
Cloud VPN is available in region us-south1 (Dallas, US).
Pricing is available on the Cloud VPN pricing page .
May 24, 2022
Feature
Cloud VPN is available in region us-east5 (Columbus, US).
Pricing is available on the Cloud VPN pricing page .
May 10, 2022
Feature
Cloud VPN is now available in region europe-southwest1 (Madrid, Spain).
Pricing is available on the Cloud VPN pricing page .
May 02, 2022
Feature
Cloud VPN is now available in region europe-west9 (Paris, France).
Pricing is available on the Cloud VPN pricing page .
April 20, 2022
Feature
Cloud VPN is now available in region europe-west8 (Milan, Italy).
Pricing is available on the Cloud VPN pricing page .
November 16, 2021
Feature
Cloud VPN is now available in region southamerica-west1 (Santiago, Chile).
Pricing is available on the Cloud VPN pricing page .
October 05, 2021
Deprecated
Classic VPN partial deprecation update
Starting on March 31, 2022, you will no longer be able to create new Classic VPN tunnels that use dynamic routing (BGP) unless you are creating a specifically supported configuration.
On or after March 31, 2022, you can still create the following Classic VPN configurations:
Classic VPN tunnels that use dynamic routing and connect to VPN gateway software running inside a Compute Engine VM.
Classic VPN tunnels that use static (route-based or policy-based) routing.
This notice replaces any previous notice about the deprecation of static routing configurations in Classic VPN.
Although Google will not proactively disable existing connections on the deprecation date, deprecated Classic VPN configurations will only receive maintenance updates going forward.
For more information, see Classic VPN partial deprecation for a video tutorial and documentation to help you migrate to the more reliable High Availability Cloud VPN solution.
September 03, 2021
Change
Added Terraform examples to automate HA VPN gateway creation:
HA VPN gateway between Google Cloud networks
HA VPN gateway to a peer VPN gateway
August 03, 2021
Feature
Cloud VPN is now available in region northamerica-northeast2 (Toronto, Canada).
Pricing is available on the Cloud VPN pricing page .
June 29, 2021
Feature
Cloud VPN is now available in region asia-south2 (Delhi, India).
Pricing is available on the Cloud VPN pricing page .
June 21, 2021
Feature
Cloud VPN is now available in region australia-southeast2 (Melbourne, Australia).
Pricing is available on the Cloud VPN pricing page .
June 08, 2021
Feature
You can check for VPN tunnel overutilization using the VPN tunnel utilization recommender. A recommender is a service in Google Cloud that provides usage recommendations for cloud resources.
May 07, 2021
Feature
Cloud VPN support for GRE traffic is available in General Availability . For more information, see the Cloud VPN overview .
March 24, 2021
Feature
Cloud VPN is now available in region europe-central2 (Warsaw, Poland).
Pricing is available on the Cloud VPN pricing page .
March 16, 2021
Feature
Cloud VPN support for GRE traffic is available in Preview . For more information, see the Cloud VPN overview .
October 14, 2020
Deprecated
Classic VPN partial deprecation
Starting on October 31, 2021, you will no longer be able to do the following:
Create new Classic VPN tunnels using static
routing (route based or policy based) that connect to another Classic VPN gateway
Create new Classic VPN tunnels using static
routing (route based or policy based) that connect a
Google Cloud Virtual Private Cloud (VPC) network to another cloud
provider's network
Create new Classic VPN tunnels using dynamic
routing (all configurations)
You can continue to create the following types of connections and get support for them:
VPN tunnels using static routing from Classic VPN gateways
to on-premises VPN gateways and from on-premises VPN gateways to Classic VPN gateways
VPN tunnels using static routing from a Classic VPN gateway to
and from a Compute Engine virtual machine (VM) acting as a VPN gateway
Although Google will not proactively disable existing connections on the deprecation date, deprecated Classic VPN configurations will no longer receive regular updates or maintenance.
For more information, see the Classic VPN partial deprecation page for a video tutorial and documentation to help you migrate, as soon as possible, to our more reliable High Availability Cloud VPN solution.
June 16, 2020
Change
The public documentation for Cloud VPN is now located under the Network Connectivity page .
June 15, 2020
Feature
Cloud VPN now supports an org-level policy that restricts peer IP addresses through a Cloud VPN tunnel.
June 08, 2020
Feature
Cloud VPN is now available in region asia-southeast2 (Jakarta, Indonesia).
Pricing is available on the Cloud VPN pricing page .
April 20, 2020
Feature
Cloud VPN is now available in region us-west4 (Las Vegas, Nevada, USA).
Pricing is available on the Cloud VPN pricing page .
February 24, 2020
Feature
Cloud VPN is now available in region us-west3 (Salt Lake City, Utah, USA).
Pricing is available on the Cloud VPN pricing page .
January 24, 2020
Feature
Cloud VPN is now available in region asia-northeast3 (Seoul).
Pricing is available on the Cloud VPN pricing page .
October 30, 2019
Fixed
In the Stackdriver Metrics Explorer, the sent_packets_count and received_packets_count metrics for a Cloud VPN gateway reported double the actual count.
These metrics now report an accurate count on a per tunnel basis.
September 27, 2019
Feature
HA VPN is Generally Available.
Issue
When setting up Cloud VPN tunnels to AWS, using IKEv2 and configuring
fewer IKE transform sets
is required.
Issue
To view Monitoring metrics for HA VPN, you
must use Metrics Explorer. See the Viewing logs and
metrics page .
Issue
GCP resources specific to HA VPN, including
compute.vpnGateways and compute.externalVpnGateways , are not
yet displayed in Cloud
Asset Inventory ,
or Cloud Security Command Center .
The compute.vpnTunnels resource is listed in both locations and is required
for a working HA VPN connection.
May 13, 2019
Feature
HA VPN is available in Beta .
HA VPN enables you to securely connect your on-premises network to your Virtual Private Cloud network through a highly-available IPsec VPN connection in a single region. HA VPN provides a service level availability of 99.99% at GA.
June 05, 2018
Change
Published a major document reorganization and rewrite for Cloud VPN.
April 20, 2018
Change
Published a quickstart guide for Cloud VPN.
October 31, 2017
Change
Published a standalone guide for Cloud VPN.
May 20, 2015
Feature
Cloud VPN is Generally available .
March 05, 2015
Feature
Cloud VPN is available in Beta .
Cloud VPN enables you to connect your on-premises and Virtual Private Cloud networks through an IPsec VPN tunnel.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
