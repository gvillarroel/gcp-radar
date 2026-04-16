---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.678Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Standard VMware Engine network"
feature_slug: "standard-vmware-engine-network"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding"
keywords:
  - "standard"
  - "vmware"
  - "engine"
  - "network"
  - "networks"
  - "terraform"
  - "provider"
---

# Standard VMware Engine network

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Standard VMware Engine networks are supported by the Terraform provider.

## Extended Definition

Standard VMware Engine networks are supported by the Terraform provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises)
- [https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine](https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding)

## Supporting Pages

### "Connecting from an on-premises network to VMware Engine standard or stretched\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises)
- Source ID: `site-docs-reference-required-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect from your VPC network to VMware Engine The connection from your VPC network to a VMware Engine differs based on whether you use standard or legacy networks.
- Standard VMware Engine networks The connection from your VPC network to a Standard VMware Engine network uses VPC Network Peering .
- End-to-end connectivity and routing considerations To allow a VMware Engine regional network to reach on-premises networks, you must enable Import/export custom routes on the VPC network peering connection associated with the private services access.
- Connecting from an on-premises network to VMware Engine standard or stretched private cloud Google Cloud VMware Engine enables key use cases such as data center lift and shift, data center extension, and disaster recovery.

### "About VMware Engine networks \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine](https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network connectivity for Standard VMware Engine networks To establish communication to VMware Engine from your VPC network, you must create a VPC Network peering relationship between your VPC network and a VMware Engine network.
- Standard VMware Engine networks Create one or more standard networks in a project to create network isolation between your private clouds.
- These global VMware networks are referred to as Standard VMware Engine Networks .
- Network connectivity for Legacy VMware Engine networks To establish communication to VMware Engine from your VPC network, you must enable private services access and create a private connection between your VPC network and the VMware Engine network.

### "(Legacy networks) Create DNS forwarding rules \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure DNS resolution for management appliances in private clouds attached to Standard VMware Engine networks, see Configure DNS Bindings .
- Home Documentation Compute VMware Engine Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Legacy networks) Create DNS forwarding rules Caution: You can only use conditional DNS forwarding rules for private clouds attached to Legacy VMware Engine networks.
- You can add one or more rules to each request. curl -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD NAME /dnsForwarding -d '{"forwardingRules": [ { "domain": " DOMAIN ", "nameServers": [ " DNS SERVER IP1 ", " DNS SERVER IP2 " ] }, { "domain": " DOMAIN ", "nameServers": [ " DNS SERVER IP1 ", " DNS SERVER IP2 " ] } ]} Replace the following: PROJECT ID : the ID for your project where the private cloud is located ZONE : the zone for the private cloud PRIVATE CLOUD NAME : the name of the private cloud DOMAIN : the domain to be forwarded DNS SERVER IP1,DNS SERVER IP2,.... : a comma-separated list of IPv4 addresses for the authoritative DNS server Describe DNS forwarding rules To describe DNS forwarding rules in your project, use one of the following methods.
- POST https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /dnsForwarding Replace the following: PROJECT ID : the ID for your project where the private cloud is located ZONE : the zone for the private cloud PRIVATE CLOUD NAME : the name of the private cloud Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

