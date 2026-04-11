---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.249Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "URL filtering service"
feature_slug: "url-filtering-service"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/about-url-filtering"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial"
  - "https://docs.cloud.google.com/firewall/docs/configure-url-filtering"
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
Coverage: LOW

## Step 02 Summary

URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information; URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information.

## Extended Definition

URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information; URL filtering service filters egress HTTP(S) workload traffic using domain and Server Name Indication (SNI) information.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial)
- [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)

## Supporting Pages

### "URL filtering service overview \_|\_ Cloud Next Generation Firewall \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It lets you filter your workload traffic by using domain and Server Name Indication (SNI) information that is available in the egress HTTP(S) messages.
- How the URL filtering service works The URL filtering service processes the HTTP(S) traffic in the following sequence: The URL filtering service applies firewall policy rules to the traffic to and from the VM instances or Google Kubernetes Engine (GKE) clusters in the network.
- For the URL filtering service, the firewall endpoint matches the domain from the message's host header, or the SNI obtained during TLS negotiation for encrypted traffic without TLS inspection, against the URL filters in the URL filtering security profile.
- To configure the URL filtering service, create a firewall policy rule that does the following: Identifies the type of traffic to be inspected by using multiple Layer 3 and Layer 4 firewall policy rule components .

### "Set up URL filtering service in your network \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- URL filtering service lets you filter your Google Cloud workload traffic by using the domain and Server Name Indication (SNI) information that is available in the egress HTTP or HTTPS messages.
- Note: The implicit deny URL filter that has the lowest priority, denies all traffic by default. gcloud Create a YAML file with the following content for the security profile: name: sec-profile-urlf type: url-filtering urlFilteringProfile: urlFilters: - filteringAction: ALLOW priority: 1000 urls: URL Note: The implicit deny URL filter that has the lowest priority, denies all traffic by default.
- The endpoint inspects the domain and SNI information available in the egress HTTP or HTTPS messages for a match against the URL listed in the URL filtering security profile sec-profile-urlf .
- To add the firewall rule to enable IAP access, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy fw-policy-urlf \ --direction INGRESS \ --action ALLOW \ --src-ip-ranges 35.235.240.0/20 \ --layer4-configs tcp:22 \ --global-firewall-policy \ --enable-logging To add the firewall rule to enable Layer 7 inspection for URL filtering, run the following command: gcloud compute network-firewall-policies rules create 200 \ --direction EGRESS \ --firewall-policy fw-policy-urlf \ --action apply security profile group \ --dest-ip-ranges 0.0.0.0/0 \ --layer4-configs tcp:80, tcp:443 \ --global-firewall-policy \ --security-profile-group \ //networksecurity.googleapis.com/organizations/ ORGANIZATION ID \ /locations/global/securityProfileGroups/sec-profile-group-urlf \ --enable-logging Replace the following: ORGANIZATION ID : the organization where the secure profile group is created.

### "Configure the URL filtering service \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Firewall endpoint Firewall endpoint 2 performs URL filtering with TLS inspection enabled for workloads running on VPC 1 and VPC 2 in zone us-west1-b .
- A firewall endpoint is a zonal resource that you must create in the same zone as the workload you want to protect with the URL filtering service.
- A firewall endpoint is a zonal resource that you must create in the same zone as the workload you want to protect with the URL filtering service.
- Firewall endpoint Firewall endpoint 1 performs URL filtering for workloads running on VPC 1 and VPC 2 in zone us-west1-a .

