---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.934Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "DDoS attack visibility"
feature_slug: "ddos-attack-visibility"
latest_feature_date: "2023-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/ddos-visibility"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
  - "https://docs.cloud.google.com/armor/docs/advanced-network-ddos"
keywords:
  - "ddos"
  - "attack"
  - "visibility"
  - "armor"
  - "provides"
  - "telemetry"
  - "for"
  - "detected"
---

# DDoS attack visibility

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor provides telemetry for DDoS attack visibility; Cloud Armor provides telemetry visibility for detected DDoS attacks.

## Extended Definition

Cloud Armor provides telemetry for DDoS attack visibility; Cloud Armor provides telemetry visibility for detected DDoS attacks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/ddos-visibility](https://docs.cloud.google.com/armor/docs/ddos-visibility)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- [https://docs.cloud.google.com/armor/docs/advanced-network-ddos](https://docs.cloud.google.com/armor/docs/advanced-network-ddos)

## Supporting Pages

### "Access DDoS attack visibility telemetry \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/ddos-visibility](https://docs.cloud.google.com/armor/docs/ddos-visibility)
- Source ID: `site-iam-reference`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DDoS attack visibility is available for the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer If you use cross-project service referencing , you can only view the telemetry and logging associated with DDoS attack visibility under the host or service project that includes your load balancer's frontend and URL map.
- Instead, the Cloud Logging and Cloud Monitoring metrics for DDoS mitigation events are part of DDoS attack visibility, a feature available exclusively for Google Cloud Armor Enterprise subscribers.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Access DDoS attack visibility telemetry Stay organized with collections Save and categorize content based on your preferences.
- The available metrics are as follows: Ingress bytes ( /dos/ingress bytes ) Ingress packets ( /dos/ingress packets ) You can group and filter the preceding metrics based upon the following labels: Label Value project id The ID of your project that is enrolled in Cloud Armor Enterprise. location The location of your protected endpoint. vip The virtual IP address of the protected endpoint. drop status Possible values: processed : Traffic was not denied by Cloud Armor always-on DDoS protection, meaning that it was evaluated against your security policies. blocked : Traffic was denied by Cloud Armor always-on DDoS protection and dropped before being evaluated against your security policies.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- It provides credits for future Google Cloud usage for some increases in the bills from Cloud Load Balancing, Cloud Armor, and network internet, inter-region, and inter-zone outbound data transfer as a result of a verified DDoS attack.
- External passthrough Network Load Balancer, protocol forwarding, and public IP addresses (VMs) Cloud Armor offers the following options to protect these endpoints against DDoS attacks: Standard network DDoS protection : basic always-on protection for external passthrough Network Load Balancers, protocol forwarding, or VMs with public IP addresses.

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, Cloud Armor Enterprise subscribers can Access DDoS attack visibility telemetry .
- Advanced network DDoS protection provides always-on attack monitoring and alerting, targeted attack mitigations, and mitigation telemetry.
- How Cloud Armor works Cloud Armor provides always-on DDoS protection against network or protocol-based volumetric DDoS attacks.
- Google Cloud Armor Adaptive Protection Adaptive Protection helps you protect your applications and services from L7 distributed denial-of-service (DDoS) attacks by analyzing patterns of traffic to your backend services, detecting and alerting on suspected attacks, and generating suggested WAF rules to mitigate such attacks.

### "Configure advanced network DDoS protection \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/advanced-network-ddos](https://docs.cloud.google.com/armor/docs/advanced-network-ddos)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Standard network DDoS protection Advanced network DDoS protection Protected endpoint type External passthrough Network Load Balancer Protocol forwarding VMs with public IP addresses External passthrough Network Load Balancer Protocol forwarding VMs with public IP addresses Forwarding rule enforcement Always-on attack monitoring and alerting Targeted attack mitigations Mitigation telemetry Important: Advanced network DDoS protection isn't supported for VM instances using Dynamic NICs .
- For workloads using external passthrough Network Load Balancers , protocol forwarding , or VMs with public IP addresses, Google Cloud Armor offers the following options to help protect systems against DDoS attacks: Standard network DDoS protection: basic always-on protection for external passthrough Network Load Balancer, protocol forwarding, or VMs with public IP addresses.
- When you enable it for that region, Cloud Armor provides always-on targeted volumetric attack detection and mitigation for external passthrough Network Load Balancer, protocol forwarding, and VMs with public IP addresses in that region.
- Network DDoS mitigation telemetry Cloud Armor generates three types of event logs when mitigating DDoS attacks: MITIGATION STARTED , MITIGATION ONGOING , and MITIGATION ENDED .

