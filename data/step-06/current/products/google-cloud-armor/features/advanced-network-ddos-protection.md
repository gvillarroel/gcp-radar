---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.938Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Advanced network DDoS protection"
feature_slug: "advanced-network-ddos-protection"
latest_feature_date: "2022-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/advanced-network-ddos"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
keywords:
  - "advanced"
  - "network"
  - "ddos"
  - "protection"
  - "is"
  - "available"
  - "for"
  - "load"
---

# Advanced network DDoS protection

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Advanced network DDoS protection is available for network load balancers, protocol forwarding, and VMs with public IP addresses; Cloud Armor provides advanced network DDoS protection for network load balancers, protocol forwarding, and VMs with public IP addresses.

## Extended Definition

Advanced network DDoS protection is available for network load balancers, protocol forwarding, and VMs with public IP addresses; Cloud Armor provides advanced network DDoS protection for network load balancers, protocol forwarding, and VMs with public IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/advanced-network-ddos](https://docs.cloud.google.com/armor/docs/advanced-network-ddos)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)

## Supporting Pages

### "Configure advanced network DDoS protection \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/advanced-network-ddos](https://docs.cloud.google.com/armor/docs/advanced-network-ddos)
- Source ID: `site-iam-reference`
- Final score: 352
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Standard network DDoS protection Advanced network DDoS protection Protected endpoint type External passthrough Network Load Balancer Protocol forwarding VMs with public IP addresses External passthrough Network Load Balancer Protocol forwarding VMs with public IP addresses Forwarding rule enforcement Always-on attack monitoring and alerting Targeted attack mitigations Mitigation telemetry Important: Advanced network DDoS protection isn't supported for VM instances using Dynamic NICs .
- Advanced network DDoS protection: additional protections for Cloud Armor Enterprise subscribers who use external passthrough Network Load Balancer, protocol forwarding, or VMs with public IP addresses.
- When you enable advanced network DDoS protection, there is a training period of 24 hours before advanced network DDoS protection develops a reliable baseline and can use its training to enhance its mitigations.
- If your security policy is in preview mode during an active attack and you want to enforce the mitigations, you can update your security policy to set the --network-ddos-protection flag to ADVANCED .

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Note: For projects enrolled in Cloud Armor Enterprise, resources—such as external passthrough Network Load Balancer backend services, target pools, target instances, and VM instances with public IP addresses—are metered as protected resources only when advanced network DDoS protection has been enabled for the region in which the resources are located.
- The following table demonstrates what resources are covered by DDos bill protection: Endpoint Type Covered Usage Increase External Application Load Balancer External proxy Network Load Balancer Cloud Armor Cloud Armor Enterprise data processing fee Network Outbound data transfer Inter-region Inter-zone Carrier Peering Load balancer Inbound data processing fee Outbound data processing fee Cloud CDN Cloud CDN egress fee Cache data transfer out Cache fill HTTP/HTTPS cache lookup requests Media CDN Media CDN egress fee Cache data transfer out External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor Cloud Armor Enterprise data processing fee Network Outbound data transfer Inter-region Inter-zone Carrier Peering Load balancer Inbound data processing fee Outbound data processing fee To engage DDoS bill protection, see Engaging DDoS bill protection .

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor also provides advanced network DDoS protection for external passthrough Network Load Balancers , protocol forwarding , and VMs with public IP addresses.
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- For more information about advanced DDoS protection, see Configure advanced network DDoS protection .
- For more information about advanced DDoS protection, see Configure advanced network DDoS protection .

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Advanced network DDoS protection Advanced network DDoS protection provides additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
- DDoS protection is automatically provided for global external Application Load Balancers, classic Application Load Balancers, and external proxy Network Load Balancers, regardless of tier.
- For more information, see Configure advanced network DDoS protection .
- This document provides a high-level overview of these features, several of which are only available for global external Application Load Balancers and classic Application Load Balancers.

