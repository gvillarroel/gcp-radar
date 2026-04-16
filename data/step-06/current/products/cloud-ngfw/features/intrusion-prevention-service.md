---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.998Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Intrusion prevention service"
feature_slug: "intrusion-prevention-service"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial"
  - "https://docs.cloud.google.com/firewall/docs/about-threats"
  - "https://docs.cloud.google.com/firewall/docs/about-url-filtering"
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
Coverage: MEDIUM

## Step 02 Summary

Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks; Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks.

## Extended Definition

Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks; Intrusion prevention service safeguards workload traffic from threats such as malware, spyware, and command-and-control attacks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention](https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- [https://docs.cloud.google.com/firewall/docs/about-threats](https://docs.cloud.google.com/firewall/docs/about-threats)
- [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)

## Supporting Pages

### "Intrusion detection and prevention service overview \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention](https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How intrusion detection and prevention service works Intrusion detection and prevention service processes the traffic in the following sequence: Firewall policy rules are applied to the traffic to and from the virtual machine (VM) instances or Google Kubernetes Engine (GKE) clusters, in the network.
- Cloud NGFW intrusion detection and prevention service works by creating Google-managed zonal firewall endpoints that use packet intercept technology to transparently inspect the workloads for the configured threat signatures and protect them against threats.
- Cloud Next Generation Firewall intrusion detection and prevention service continuously monitors your Google Cloud workload traffic for any malicious activity and takes preemptive actions to prevent it.
- For intrusion detection and prevention service, the firewall endpoint scans the intercepted traffic for any threats.

### "Set up intrusion detection and prevention service in your network \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Intrusion detection and prevention service monitors your Google Cloud workload traffic for any malicious activity and takes preemptive actions to prevent it.
- Click Create . gcloud To create a security profile group, run the following command: gcloud network-security security-profile-groups \ create sec-profile-group-ips \ --organization ORGANIZATION ID \ --location global \ --project PROJECT ID \ --threat-prevention-profile \ organizations/ ORGANIZATION ID /locations/global/securityProfiles/sec-profile-ips \ --description "Security profile group to set up intrusion detection and prevention service." Replace the following: ORGANIZATION ID : the organization where the security profile group is created.
- Click Create . gcloud To create a security profile, run the following command: gcloud network-security security-profiles \ threat-prevention \ create sec-profile-ips \ --organization ORGANIZATION ID \ --location global \ --project PROJECT ID \ --description "Security profile to set up intrusion detection and prevention service." Replace the following: ORGANIZATION ID : the organization where the security profile is created.
- Click Create . gcloud To create a VPC network, run the following command: gcloud compute networks create vpc-ips \ --subnet-mode custom \ --description "VPC network to set up intrusion detection and prevention service." In the Authorize cloud shell dialog, click Authorize .

### "Threat signatures overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\

- URL: [https://docs.cloud.google.com/firewall/docs/about-threats](https://docs.cloud.google.com/firewall/docs/about-threats)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To set up an alert or to deny network traffic for all supported network protocols, use the following commands: To set up an alert action on antivirus threats for all supported protocols: gcloud network-security security-profiles threat-prevention add-override NAME \ --antivirus SMB,IMAP,HTTP,HTTP2,FTP,SMTP,POP3 \ --action ALERT \ --organization ORGANIZATION ID \ --location LOCATION \ --project PROJECT ID Replace the following: NAME : the name of the security profile; you can specify the name as a string or as a unique URL identifier.
- What's next View threats Intrusion detection and prevention service overview Configure intrusion detection and prevention service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Default signature set Cloud NGFW provides a default set of threat signatures that help you to safeguard your network workloads from threats.
- To set up a deny action on antivirus threats for all supported protocols: gcloud network-security security-profiles threat-prevention add-override NAME \ --antivirus SMB,IMAP,HTTP,HTTP2,FTP,SMTP,POP3 \ --action DENY \ --organization ORGANIZATION ID \ --location LOCATION \ --project PROJECT ID Replace the following: NAME : the name of the security profile; you can specify the name as a string or as a unique URL identifier.

### "URL filtering service overview \_|\_ Cloud Next Generation Firewall \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the URL filtering service allows the egress traffic, the intrusion detection and prevention service (if enabled) can further scan the traffic for threats.
- You can use the URL filtering service along with the intrusion detection and prevention service to deny traffic to malicious URLs, prevent access to malicious command-and-control (C2) servers, and detect malware in executable files.
- A firewall policy rule references a security profile group to enable either the URL filtering service or the intrusion detection and prevention service, or both, for the network traffic.
- How the URL filtering service works The URL filtering service processes the HTTP(S) traffic in the following sequence: The URL filtering service applies firewall policy rules to the traffic to and from the VM instances or Google Kubernetes Engine (GKE) clusters in the network.

