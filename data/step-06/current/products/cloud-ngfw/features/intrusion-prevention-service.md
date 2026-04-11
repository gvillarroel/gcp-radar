---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.253Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Intrusion prevention service"
feature_slug: "intrusion-prevention-service"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial"
  - "https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention"
keywords:
  - "intrusion"
  - "prevention"
  - "safeguards"
  - "workload"
  - "traffic"
  - "from"
  - "threats"
  - "such"
---

# Intrusion prevention service

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks; Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks.

## Extended Definition

Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks; Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention](https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- [https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention](https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention)

## Supporting Pages

### "Intrusion detection and prevention service overview \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention](https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- How intrusion detection and prevention service works Intrusion detection and prevention service processes the traffic in the following sequence: Firewall policy rules are applied to the traffic to and from the virtual machine (VM) instances or Google Kubernetes Engine (GKE) clusters, in the network.
- Cloud NGFW intrusion detection and prevention service works by creating Google-managed zonal firewall endpoints that use packet intercept technology to transparently inspect the workloads for the configured threat signatures and protect them against threats.
- Cloud Next Generation Firewall intrusion detection and prevention service continuously monitors your Google Cloud workload traffic for any malicious activity and takes preemptive actions to prevent it.
- For intrusion detection and prevention service, the firewall endpoint scans the intercepted traffic for any threats.

### "Set up intrusion detection and prevention service in your network \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Intrusion detection and prevention service monitors your Google Cloud workload traffic for any malicious activity and takes preemptive actions to prevent it.
- Click Create . gcloud To create a security profile group, run the following command: gcloud network-security security-profile-groups \ create sec-profile-group-ips \ --organization ORGANIZATION ID \ --location global \ --project PROJECT ID \ --threat-prevention-profile \ organizations/ ORGANIZATION ID /locations/global/securityProfiles/sec-profile-ips \ --description "Security profile group to set up intrusion detection and prevention service." Replace the following: ORGANIZATION ID : the organization where the security profile group is created.
- Click Create . gcloud To create a security profile, run the following command: gcloud network-security security-profiles \ threat-prevention \ create sec-profile-ips \ --organization ORGANIZATION ID \ --location global \ --project PROJECT ID \ --description "Security profile to set up intrusion detection and prevention service." Replace the following: ORGANIZATION ID : the organization where the security profile is created.
- Click Create . gcloud To create a VPC network, run the following command: gcloud compute networks create vpc-ips \ --subnet-mode custom \ --description "VPC network to set up intrusion detection and prevention service." In the Authorize cloud shell dialog, click Authorize .

### "Configure intrusion detection and prevention service \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention](https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Configure intrusion detection and prevention service with TLS inspection To configure intrusion detection and prevention service with Transport Layer Security (TLS) inspection in your network, perform the following tasks.
- Home Documentation Networking Cloud NGFW Guides Send feedback Configure intrusion detection and prevention service Stay organized with collections Save and categorize content based on your preferences.
- If you need intrusion detection and prevention service, we recommend that you configure the associated VPC networks to use the maximum transmission unit (MTU) limits of 8,500 bytes and 1,460 bytes.
- Caution: A firewall endpoint doesn't perform intrusion detection and prevention service for a VPC network if the network is configured with an MTU that's greater than the firewall endpoint's limit.

