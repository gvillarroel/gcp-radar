---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.946Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor support for CDN and hybrid origins"
feature_slug: "cloud-armor-support-for-cdn-and-hybrid-origins"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/troubleshooting"
keywords:
  - "armor"
  - "for"
  - "cdn"
  - "and"
  - "hybrid"
  - "origins"
  - "added"
  - "general"
---

# Cloud Armor support for CDN and hybrid origins

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor added General Availability support for CDN origins and hybrid origins.

## Extended Definition

Cloud Armor added General Availability support for CDN origins and hybrid origins.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)

## Supporting Pages

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- To enable Cloud Armor protection for CDN external origins servers, follow these steps: Configure a global external Application Load Balancer or a classic Application Load Balancer with a backend service that has an internet NEG as a backend.
- Cloud CDN external origin server DDoS defense and layer 7 monitoring Cloud CDN deployments with an external origin server can have Google's edge infrastructure as the frontend for proxying, caching, and Cloud Armor layer 7 filtering.
- The following example uses a preconfigured rule to mitigate SQLi attacks from the 192.0.2.1/24 IP address range: inIpRange(origin.ip, '192.0.2.1/24') && evaluatePreconfiguredWaf('sqli-v422-stable') OWASP Top 10 mitigation for hybrid workloads Cloud Armor offers mitigations for the following attacks, whether they are deployed in Google Cloud,on-premises, or in a third-party provider: SQL injection (SQLi) Cross-site scripting (XSS) Local File Inclusion (LFI) Remote File Inclusion (RFI) Remote Code Execution (RCE) You can use these capabilities to address some of the most common web application security risks, including those risks identified in the OWASP Top 10 list.
- Protect your deployment against application layer attacks and help mitigate OWASP Top 10 risks You can use Cloud Armor to protect a Cloud CDN origin server from application layer (L7) attacks such as SQL injection (SQLi) and cross-site scripting (XSS).

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- External Application Load Balancer and external proxy Network Load Balancer After a project is enrolled in Cloud Armor Enterprise, the forwarding rules within the project are added to the enrollment.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- The following table demonstrates what resources are covered by DDos bill protection: Endpoint Type Covered Usage Increase External Application Load Balancer External proxy Network Load Balancer Cloud Armor Cloud Armor Enterprise data processing fee Network Outbound data transfer Inter-region Inter-zone Carrier Peering Load balancer Inbound data processing fee Outbound data processing fee Cloud CDN Cloud CDN egress fee Cache data transfer out Cache fill HTTP/HTTPS cache lookup requests Media CDN Media CDN egress fee Cache data transfer out External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor Cloud Armor Enterprise data processing fee Network Outbound data transfer Inter-region Inter-zone Carrier Peering Load balancer Inbound data processing fee Outbound data processing fee To engage DDoS bill protection, see Engaging DDoS bill protection .

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- Cloud Armor security policies are available for the following load balancer and endpoint types: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) External protocol forwarding VMs with external IPv4 addresses or external IPv6 address ranges assigned to a network interface (NIC) The load balancer can be in Premium Tier or Standard Tier .
- Google Cloud Armor security policies protect your application by providing Layer 7 filtering and by scrubbing incoming requests for common web attacks or other Layer 7 attributes to potentially block traffic before it reaches your load-balanced backend services or backend buckets.
- Cloud Armor can parse and apply preconfigured WAF rules for default URL-encoded and JSON-formatted request bodies ( Content-Type = "application/json" ), in which case rules are independently applied on the decoded names and values in the data.

### "Troubleshoot Cloud Armor issues \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Check for the following fields and make sure that they match the rule that you configured to deny the traffic: configuredAction must match the action configured in the rule. name must match the name of the Cloud Armor security policy attached to this backend service. outcome must match configuredAction . priority must match the priority number of the rule. httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/ responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: mydev-policy-log-test1 outcome: ACCEPT priority: 2147483647 statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE NAME forwarding rule name: FORWARDING RULE NAME project id: PROJECT ID target proxy name: TARGET HTTP PROXY NAME url map name: URL MAP NAME zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This output includes the following values: BACKEND SERVICE NAME : the name of the backend service FORWARDING RULE NAME : the name of the forwarding rule PROJECT ID : the ID of your project TARGET HTTP PROXY NAME : the name of the target HTTP proxy URL MAP NAME : the name of the URL map Review the hierarchy of rules to ensure that the correct rule is matched.
- Clients with denied signatures aren't blocked or denied If you are using Cloud Armor with Cloud CDN, security policies are enforced only for requests for dynamic content, cache misses, or other requests that are destined for the CDN origin server.
- Adaptive Protection is enabled for a security policy but there are no logs in Cloud Logging Adaptive Protection logs are generated separately from Cloud Armor request logs and appear under a different resource in Cloud Logging.
- Findings from Cloud Armor don't appear in the Security Command Center If findings from Cloud Armor don't appear in the Security Command Center, traffic to the backend services might not meet the criteria for raising a finding.

