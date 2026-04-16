---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.199Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "VM Manager troubleshooting command"
feature_slug: "vm-manager-troubleshooting-command"
latest_feature_date: "2022-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting"
  - "https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting"
keywords:
  - "vm"
  - "manager"
  - "troubleshooting"
  - "command"
  - "os"
  - "config"
  - "troubleshoot"
  - "helps"
---

# VM Manager troubleshooting command

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

The os-config troubleshoot command helps verify whether VM Manager is set up correctly.

## Extended Definition

The os-config troubleshoot command helps verify whether VM Manager is set up correctly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)

## Supporting Pages

### Troubleshoot Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshoot NCC Gateway spokes You can view the services and routers that are connected to your NCC Gateway by using the gcloud network-connectivity spokes describe command on the NCC Gateway spoke resource. gcloud gcloud network-connectivity spokes describe SPOKE NAME \ --region REGION Replace the following: SPOKE NAME : the name of the NCC Gateway spoke REGION : the region in which the spoke resides The output is similar to the following: createTime: '2022-11-25T06:06:11.572019860Z' hub: projects/PROJECT/locations/REGION/hubs/HUB gateway: ipRangeReservation: 10.1.2.0/24 asn: 65123 routers: projects/PROJECT/locations/REGION/routers/ROUTER name: projects/PROJECT/locations/REGION/spokes/SPOKE state: ACTIVE uniqueId: 8ca10af0-ee69-43c2-b0b4-61e8f53d410b updateTime: '2023-12-27T21:26:47.786506888Z' You can view the application VPC routing table and the created hub route table route that is propagated to your VPC route table with next hop as hub by using the gcloud compute routes list command : gcloud gcloud compute routes list \ --filter="network= NETWORK " Replace NETWORK with the name of the VPC network.
- Troubleshoot Private Service Connect connection propagation errors Before investigating issues, familiarize yourself with the following pages: Private Service Connect connection propagation through NCC Configure a hub VM in one spoke can't access the Private Service Connect connection in another spoke If a VM in one VPC spoke can't access the Private Service Connect endpoint in another spoke, make sure that the following conditions are met: The --export psc field is enabled in the hub.
- For more information, see the following: Troubleshoot BGP sessions Troubleshoot BGP peering Troubleshoot BGP routes and route selection Troubleshoot Cloud Router log messages BGP sessions fail to establish If BGP sessions between Cloud Router and Router appliance fail to establish, check for the following issues: Make sure that a VM acting as a router appliance instance is configured as part of a spoke in Network Connectivity Center.
- Learn about troubleshooting steps that you might find helpful if you run into problems using Network Connectivity Center, hybrid spokes, VPC spokes, NCC Gateway spokes, or Private Service Connect connection propagation.

### "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- Source ID: `site-docs-reference-required-6`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this tutorial, use 10.0.0.9 : gcloud compute addresses create load-balancer-ip --region [YOUR REGION] --subnet wsfcnetsub1 --addresses 10.0.0.9 To confirm the reservation of the IP address: gcloud compute addresses list Add the role Follow these steps: In Failover Cluster Manager, in the Actions pane, select Configure Role .
- In Server Manager, click Local Server in the navigation pane on the left side of the window. in the Properties section at the top, turn off IE Enhanced Security Configuration .
- Troubleshooting Here are some common issues you can check if things aren't working.
- Refer to the Troubleshooting section for more issues to check.

### Troubleshooting \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)
- Source ID: `site-docs-reference-3`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Connectivity Cloud VPN Guides Send feedback Troubleshooting Stay organized with collections Save and categorize content based on your preferences.
- This resource includes information about how to analyze results, explanations of variables that can affect network performance, and troubleshooting tips.
- Troubleshooting reference This section includes information about status icons, status messages, and supported IKE ciphers.
- This troubleshooting guide can help you monitor and solve common issues with Cloud VPN.

