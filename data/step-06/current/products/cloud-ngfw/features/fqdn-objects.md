---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.998Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "FQDN objects"
feature_slug: "fqdn-objects"
latest_feature_date: "2023-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/about-firewalls"
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress"
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc"
  - "https://docs.cloud.google.com/firewall/docs/about-url-filtering"
keywords:
  - "fqdn"
  - "objects"
  - "let"
  - "firewall"
  - "policy"
  - "rules"
  - "filter"
  - "incoming"
---

# FQDN objects

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

FQDN objects let firewall policy rules filter incoming or outgoing traffic for specific domain names.

## Extended Definition

FQDN objects let firewall policy rules filter incoming or outgoing traffic for specific domain names.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)
- [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)

## Supporting Pages

### "Cloud NGFW overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud NGFW lets you group firewall rules into policy objects that you can apply consistently across multiple Virtual Private Cloud (VPC) networks, either globally or within a specific region.
- Cloud NGFW lets you group firewall rules into policy objects that you can apply across your organization or to specific folders.
- Cloud Next Generation Firewall Standard : extends the Essentials tier features with enhanced capabilities, such as fully qualified domain name (FQDN) objects and threat intelligence.
- What's next Cloud NGFW tiers Firewall policies and rules Evaluation order for firewall policies and rules Network profiles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Configure a global network firewall policy to allow egress traffic to an\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to create a custom VPC network, VM, Cloud Router, Cloud NAT, global network firewall policy and its rules, and to view the logs, ask your administrator to grant you the following IAM roles on the project: Compute Network Admin role ( roles/compute.networkAdmin ) Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) Compute Security Admin role ( roles/compute.securityAdmin ) Logs Viewer role ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This quickstart creates a Virtual Private Cloud (VPC) network with a subnet, creates a virtual machine (VM) instance in the VPC network, sets up a firewall policy that uses egress rules, and then tests the firewall policy from the VM.
- Home Documentation Networking Cloud NGFW Guides Send feedback Configure a global network firewall policy to allow egress traffic to an FQDN Stay organized with collections Save and categorize content based on your preferences.
- Add a firewall rule to allow egress traffic to only a specific FQDN To allow egress traffic to only a specific FQDN, ads.google.com , add a firewall rule in fw-egress-policy .

### "Configure a hierarchical firewall policy to allow egress traffic from a\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make sure that you have the following Identity and Access Management (IAM) roles: Organization Administrator role (roles/resourcemanager.organizationAdmin) Folder Admin role (roles/resourcemanager.folderAdmin) Project Creator role (roles/resourcemanager.projectCreator) Project Deleter role (roles/resourcemanager.projectDeleter) Compute Network Admin role ( roles/compute.networkAdmin ) Compute Organization Firewall Policy Admin role ( roles/compute.orgFirewallPolicyAdmin ) Enable the Compute Engine and Identity-Aware Proxy (IAP) APIs.
- Create a hierarchical firewall policy and add firewall rules Create a hierarchical firewall policy and add the following firewall policy rules to it: Enable IAP for all the VMs in test-folder to enable administrative access to the VMs.
- The page walks through an example of creating two VPC networks, creating virtual machine (VM) instances in the VPC networks, setting up a hierarchical firewall policy with firewall rules, and then testing the firewall policy.
- To create, update, monitor, and delete VPC firewall rules, see Use VPC firewall rules .

### "URL filtering service overview \_|\_ Cloud Next Generation Firewall \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How the URL filtering service works The URL filtering service processes the HTTP(S) traffic in the following sequence: The URL filtering service applies firewall policy rules to the traffic to and from the VM instances or Google Kubernetes Engine (GKE) clusters in the network.
- Firewall policy rules Firewall policy rules let you control the type of traffic that is intercepted and inspected.
- To configure the URL filtering service, create a firewall policy rule that does the following: Identifies the type of traffic to be inspected by using multiple Layer 3 and Layer 4 firewall policy rule components .
- A firewall policy rule references a security profile group to enable either the URL filtering service or the intrusion detection and prevention service, or both, for the network traffic.

