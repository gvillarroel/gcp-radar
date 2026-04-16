---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.995Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "URL filtering service"
feature_slug: "url-filtering-service"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/about-url-filtering"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial"
  - "https://docs.cloud.google.com/firewall/docs/configure-url-filtering"
  - "https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles"
keywords:
  - "url"
  - "filtering"
  - "filters"
  - "egress"
  - "http"
  - "workload"
  - "traffic"
  - "using"
---

# URL filtering service

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information; URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information.

## Extended Definition

URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information; URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial)
- [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)
- [https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles)

## Supporting Pages

### "URL filtering service overview \_|\_ Cloud Next Generation Firewall \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It lets you filter your workload traffic by using domain and Server Name Indication (SNI) information that is available in the egress HTTP(S) messages.
- How the URL filtering service works The URL filtering service processes the HTTP(S) traffic in the following sequence: The URL filtering service applies firewall policy rules to the traffic to and from the VM instances or Google Kubernetes Engine (GKE) clusters in the network.
- For the URL filtering service, the firewall endpoint matches the domain from the message's host header, or the SNI obtained during TLS negotiation for encrypted traffic without TLS inspection, against the URL filters in the URL filtering security profile.
- To configure the URL filtering service, create a firewall policy rule that does the following: Identifies the type of traffic to be inspected by using multiple Layer 3 and Layer 4 firewall policy rule components .

### "Set up URL filtering service in your network \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial)
- Source ID: `site-docs-root`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- URL filtering service lets you filter your Google Cloud workload traffic by using the domain and Server Name Indication (SNI) information that is available in the egress HTTP or HTTPS messages.
- Note: The implicit deny URL filter that has the lowest priority, denies all traffic by default. gcloud Create a YAML file with the following content for the security profile: name: sec-profile-urlf type: url-filtering urlFilteringProfile: urlFilters: - filteringAction: ALLOW priority: 1000 urls: URL Note: The implicit deny URL filter that has the lowest priority, denies all traffic by default.
- The endpoint inspects the domain and SNI information available in the egress HTTP or HTTPS messages for a match against the URL listed in the URL filtering security profile sec-profile-urlf .
- To add the firewall rule to enable IAP access, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy fw-policy-urlf \ --direction INGRESS \ --action ALLOW \ --src-ip-ranges 35.235.240.0/20 \ --layer4-configs tcp:22 \ --global-firewall-policy \ --enable-logging To add the firewall rule to enable Layer 7 inspection for URL filtering, run the following command: gcloud compute network-firewall-policies rules create 200 \ --direction EGRESS \ --firewall-policy fw-policy-urlf \ --action apply security profile group \ --dest-ip-ranges 0.0.0.0/0 \ --layer4-configs tcp:80, tcp:443 \ --global-firewall-policy \ --security-profile-group \ //networksecurity.googleapis.com/organizations/ ORGANIZATION ID \ /locations/global/securityProfileGroups/sec-profile-group-urlf \ --enable-logging Replace the following: ORGANIZATION ID : the organization where the secure profile group is created.

### "Configure the URL filtering service \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firewall endpoint Firewall endpoint 2 performs URL filtering with TLS inspection enabled for workloads running on VPC 1 and VPC 2 in zone us-west1-b .
- A firewall endpoint is a zonal resource that you must create in the same zone as the workload you want to protect with the URL filtering service.
- A firewall endpoint is a zonal resource that you must create in the same zone as the workload you want to protect with the URL filtering service.
- Firewall endpoint Firewall endpoint 1 performs URL filtering for workloads running on VPC 1 and VPC 2 in zone us-west1-a .

### "Create and manage URL filtering security profiles \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can happen with unencrypted HTTP traffic, or when TLS inspection is disabled for encrypted message headers. urlFilteringProfile: urlFilters: user-specified filters - filteringAction: DENY priority: 1000 urls: ['www.example.com','www.examplepetstore.com'] explicit allow URL filter that you can add - filteringAction: ALLOW priority: 2000 urls: [' '] implicit deny URL filter that will be processed last - filteringAction: DENY priority: 2147483647 urls: [' '] Limitations Matcher strings represent either domains or subdomains.
- The following code snippet demonstrates how to allow all domains (and their subdomains) that end in .com but deny the remaining traffic. urlFilteringProfile: urlFilters: Allow all domains (and their subdomains) that end in '.com' - filteringAction: ALLOW priority: 2000 urls: [' .com'] implicit deny URL filter that will be processed last - filteringAction: DENY priority: 2147483647 urls: [' '] The following code snippet demonstrates how to deny all subdomains of example.com and examplepetstore.com but allow these domains and all other domains (and their subdomains) that end in .com . urlFilteringProfile: urlFilters: Deny all subdomains of example.com - filteringAction: DENY priority: 1000 urls: [' .example.com'] Deny all subdomains of examplepetstore.com - filteringAction: DENY priority: 1500 urls: [' .examplepetstore.com'] Allow all domains (and their subdomains) that end in '.com' - filteringAction: ALLOW priority: 2000 urls: [' .com'] implicit deny URL filter that will be processed last - filteringAction: DENY priority: 2147483647 urls: [' '] Cloud NGFW doesn't interpret the asterisk ( ) as a regular expression wildcard.
- For example, the matcher string example.com matches with a.example.com , a.b.c.example.com , as well as example.com . urlFilteringProfile: urlFilters: user-specified filters - filteringAction: ALLOW priority: 1000 urls: [' example.com'] implicit deny URL filter that will be processed last - filteringAction: DENY priority: 2147483647 urls: [' '] In the preceding example, Cloud NGFW allows traffic towards example.com as well as the subdomains of example.com but denies the rest of the outbound traffic.
- For example, the matcher string .example.com matches with a.example.com and a.b.c.example.com but doesn't match with example.com . urlFilteringProfile: urlFilters: user-specified filters - filteringAction: ALLOW priority: 1000 urls: [' .example.com'] implicit deny URL filter that will be processed last - filteringAction: DENY priority: 2147483647 urls: [' '] In the preceding example, Cloud NGFW allows traffic towards the subdomains of example.com but denies the rest of the outbound traffic.

