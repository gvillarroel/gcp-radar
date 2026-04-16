---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.688Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "DNS forwarding rules"
feature_slug: "dns-forwarding-rules"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine"
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog"
keywords:
  - "dns"
  - "forwarding"
  - "rules"
  - "management"
  - "appliance"
  - "resolution"
  - "can"
  - "configured"
---

# DNS forwarding rules

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Management appliance DNS resolution can be configured for private clouds attached to legacy VMware Engine networks.

## Extended Definition

Management appliance DNS resolution can be configured for private clouds attached to legacy VMware Engine networks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding)
- [https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine](https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)

## Supporting Pages

### "(Legacy networks) Create DNS forwarding rules \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your private cloud's DNS forwarding rules determines how Google Cloud VMware Engine forwards DNS requests from management appliances to the DNS servers of your on-premises services.
- To configure DNS resolution for management appliances in private clouds attached to Standard VMware Engine networks, see Configure DNS Bindings .
- You can add one or more rules to each request. curl -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD NAME /dnsForwarding -d '{"forwardingRules": [ { "domain": " DOMAIN ", "nameServers": [ " DNS SERVER IP1 ", " DNS SERVER IP2 " ] }, { "domain": " DOMAIN ", "nameServers": [ " DNS SERVER IP1 ", " DNS SERVER IP2 " ] } ]} Replace the following: PROJECT ID : the ID for your project where the private cloud is located ZONE : the zone for the private cloud PRIVATE CLOUD NAME : the name of the private cloud DOMAIN : the domain to be forwarded DNS SERVER IP1,DNS SERVER IP2,.... : a comma-separated list of IPv4 addresses for the authoritative DNS server Describe DNS forwarding rules To describe DNS forwarding rules in your project, use one of the following methods.
- You can specify multiple rules by using multiple --rule flags for each request. gcloud vmware private-clouds dns-forwarding update \ --project= PROJECT ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD NAME \ --rule=domain= DOMAIN ,name-servers= DNS SERVER IP1,DNS SERVER IP2,.... \ --rule=domain= DOMAIN ,name-servers= DNS SERVER IP1,DNS SERVER IP2,....

### "About VMware Engine networks \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine](https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DNS Resolution from private cloud management appliances Private cloud management appliances use conditional DNS forwarding rules which you can configure within each private cloud.
- Binding Cloud DNS zones You can bind Cloud DNS zones configured in your project to a VMware Engine network; this ensures proper resolution of authoritative or conditional forward zones from any of your private cloud VMs or management appliances.
- DNS Resolution from private cloud VMs and management appliances Each private cloud deploys a Cloud DNS Server used for all management appliances resolution and that you can configure as the DNS server for all VMware workloads.
- On-premises resolution See Configuring DNS for management appliance access .

### "Forwarding syslog messages to a remote server \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Forward logs The method of forwarding logs depends on the management appliance that you want to forward logs for.
- Caution: Don't update your syslog server configuration using the vCenter Server Appliance Management Interface (VAMI).
- For Legacy VMware Engine networks, configure conditional DNS forwarding rules .
- See Accessing management appliances .

