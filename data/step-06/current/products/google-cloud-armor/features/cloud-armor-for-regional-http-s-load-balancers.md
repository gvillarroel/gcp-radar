---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.935Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor for regional HTTP(S) load balancers"
feature_slug: "cloud-armor-for-regional-http-s-load-balancers"
latest_feature_date: "2023-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-overview"
keywords:
  - "armor"
  - "for"
  - "regional"
  - "http"
  - "load"
  - "balancers"
  - "can"
  - "protect"
---

# Cloud Armor for regional HTTP(S) load balancers

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor can protect regional HTTP(S) load balancers; Cloud Armor can protect regional HTTP(S) load balancers.

## Extended Definition

Cloud Armor can protect regional HTTP(S) load balancers; Cloud Armor can protect regional HTTP(S) load balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)

## Supporting Pages

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- The following table demonstrates what resources are covered by DDos bill protection: Endpoint Type Covered Usage Increase External Application Load Balancer External proxy Network Load Balancer Cloud Armor Cloud Armor Enterprise data processing fee Network Outbound data transfer Inter-region Inter-zone Carrier Peering Load balancer Inbound data processing fee Outbound data processing fee Cloud CDN Cloud CDN egress fee Cache data transfer out Cache fill HTTP/HTTPS cache lookup requests Media CDN Media CDN egress fee Cache data transfer out External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor Cloud Armor Enterprise data processing fee Network Outbound data transfer Inter-region Inter-zone Carrier Peering Load balancer Inbound data processing fee Outbound data processing fee To engage DDoS bill protection, see Engaging DDoS bill protection .
- External passthrough Network Load Balancer, protocol forwarding, and public IP addresses (VMs) Cloud Armor offers the following options to protect these endpoints against DDoS attacks: Standard network DDoS protection : basic always-on protection for external passthrough Network Load Balancers, protocol forwarding, or VMs with public IP addresses.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor security policies are available for the following load balancer and endpoint types: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) External protocol forwarding VMs with external IPv4 addresses or external IPv6 address ranges assigned to a network interface (NIC) The load balancer can be in Premium Tier or Standard Tier .
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- You can use a default security policy that throttles traffic over a user-specified threshold when you configure one of the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) In addition, you can configure Google Cloud Armor preconfigured WAF rules, which are complex web application firewall (WAF) rules with dozens of signatures that are compiled from open source industry standards.
- Custom error responses When you use a global external Application Load Balancer, you can configure custom error responses for HTTP status codes for errors that load balancers or backend instances generate.

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can attach security policies to the backend services of the following load balancers: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) Cloud Armor security policies enable you to allow or deny access to your deployment at the Google Cloud edge, as close as possible to the source of incoming traffic.
- Advanced network DDoS protection Advanced network DDoS protection provides additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
- DDoS protection is automatically provided for global external Application Load Balancers, classic Application Load Balancers, and external proxy Network Load Balancers, regardless of tier.
- Cloud Armor Enterprise features always-on protections for your load balancer, and gives you access to WAF rules.

### Google Cloud Armor Adaptive Protection overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example is the JSON payload of a sample alert along with the resource labels on which you can filter the logs. ... jsonPayload: { alertId: "11275630857957031521" backendService: "test-service" confidence: 0.71828485 headerSignatures: [ 0: { name: "RequestUri" significantValues: [ 0: { attackLikelihood: 0.88 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.85 proportionInBaseline: 0.01 value: "/" } ] } 1: { name: "RegionCode" significantValues: [ 0: { attackLikelihood: 0.08 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.17 proportionInBaseline: 0.28 value: "US" } 1: { attackLikelihood: 0.68 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.09 proportionInBaseline: 0.01 value: "DE" } 2: { attackLikelihood: 0.74 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.05 proportionInBaseline: 0 value: "MD" } ] } 2: { name: "UserAgent" significantValues: [ 0: { attackLikelihood: 0.92 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.85 proportionInBaseline: 0 value: "Unusual browser" } 1: { attackLikelihood: 0.87 proportionInAttack: 0.7 proportionInBaseline: 0.1 missing: true } ] } ] suggestedRule: [ 0: { action: "DENY" evaluation: { impactedAttackProportion: 0.95 impactedBaselineProportion: 0.001 impactedBaselinePolicyProportion: 0.001 } expression: "evaluateAdaptiveProtection('11275630857957031521')" } ] ruleStatus: RULE GENERATED attackSize: 5000 } resource: { type: "network security policy", labels: { project id: "your-project", policy name: "your-security-policy-name" } }, } } ...
- These must be stored in Cloud Logging, or routed to a logging bucket which Cloud Armor can access. networksecurity.googleapis.com/dos attack networksecurity.googleapis.com/network dos attack networksecurity.googleapis.com/network dos attack mitigations Configure and tune alerts You can enable Adaptive Protection in projects where Cloud Armor security policies already protect your applications.
- Monitoring, feedback, and reporting event errors You need the following permissions to view or interact with the Adaptive Protection dashboard. compute.securityPolicies.list compute.backendServices.list logging.logEntries.list After you enable Adaptive Protection on any Cloud Armor security policy, you can see the following page under Network Security > Cloud Armor panel.
- What's next Learn about common use cases for Adaptive Protection Learn about the features in Cloud Armor Enterprise tiers Learn how to enable Cloud Armor Enterprise Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

