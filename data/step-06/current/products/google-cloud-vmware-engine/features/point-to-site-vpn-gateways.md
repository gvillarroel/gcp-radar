---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.696Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Point-to-site VPN gateways"
feature_slug: "point-to-site-vpn-gateways"
latest_feature_date: "2023-11-14"
deprecation_date: "2022-08-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-vpn-connect"
keywords:
  - "point"
  - "site"
  - "vpn"
  - "gateways"
  - "can"
  - "no"
  - "longer"
  - "managed"
---

# Point-to-site VPN gateways

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Point-to-site VPN gateways can no longer be managed for projects that already have them; deprecated on 2022-08-10.

## Extended Definition

Point-to-site VPN gateways can no longer be managed for projects that already have them; deprecated on 2022-08-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-vpn-connect](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-vpn-connect)

## Supporting Pages

### VPN gateways \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- VMware Engine supports VPN connectivity by using the following types of gateways: Point-to-site VPN gateways: for point-to-site connections, like connecting from your computer to your private cloud Cloud VPN or Cloud Interconnect : for site-to-site connections, like establishing a connection between your on-premises network and your private cloud For more details about Cloud VPN and Cloud Interconnect, see Choosing a Network Connectivity product .
- Point-to-site VPN gateways A point-to-site VPN gateway sends encrypted traffic between a VMware Engine network and a client computer.
- VPN gateways VPN gateways provide secure connectivity between multiple sites, such as on-premises data centers, Google Cloud Virtual Private Cloud (VPC) networks, and Google Cloud VMware Engine private clouds.
- To set up a point-to-site VPN gateway, first choose a marketplace vendor solution.

### "Configure advanced policy settings \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send logs to OnVault Pool Set to Yes , logs are replicated to one or more OnVault storage pools enabling for point-in-time recoveries from OnVault on another site.
- Crash consistent might result in a longer RTO due to the need for the file system or application to perform a recovery from the inconsistent snap, and could even result in an unrecoverable snap in extreme cases.
- Map Staging Disk to All ESX Hosts in a Cluster (For VMware VMs only) If your ESX servers are in an appliance, you can use this setting to ensure that the VMs are managed in case of failover during backup.
- This option both unmounts the staging disk from the operating system at the conclusion of every job (removing mount points or drive letters), and also unmaps it from the host altogether.

### "Connecting using VPN \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-vpn-connect](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-vpn-connect)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Connecting to multiple private clouds using Viscosity A point-to-site VPN connection resolves the DNS names of the first private cloud that you create.
- Connect to VMware Engine using point-to-site VPN To connect to VMware Engine from your computer, you need a VPN client and a connection profile.
- Connecting using VPN This article describes how to connect to your private cloud after you have a point-to-site VPN gateway set up.
- Before you begin This process requires you to have a point-to-site VPN gateway.

