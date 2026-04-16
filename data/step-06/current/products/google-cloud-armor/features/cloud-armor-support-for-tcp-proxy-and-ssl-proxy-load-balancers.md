---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.941Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor support for TCP Proxy and SSL proxy load balancers"
feature_slug: "cloud-armor-support-for-tcp-proxy-and-ssl-proxy-load-balancers"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
  - "https://docs.cloud.google.com/armor/docs/troubleshooting"
keywords:
  - "armor"
  - "for"
  - "tcp"
  - "proxy"
  - "and"
  - "ssl"
  - "load"
  - "balancers"
---

# Cloud Armor support for TCP Proxy and SSL proxy load balancers

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor supports TCP Proxy load balancers and SSL proxy load balancers; Cloud Armor added public preview support for TCP Proxy load balancers and SSL Proxy load balancers.

## Extended Definition

Cloud Armor supports TCP Proxy load balancers and SSL proxy load balancers; Cloud Armor added public preview support for TCP Proxy load balancers and SSL Proxy load balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)

## Supporting Pages

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor security policies are available for the following load balancer and endpoint types: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) External protocol forwarding VMs with external IPv4 addresses or external IPv6 address ranges assigned to a network interface (NIC) The load balancer can be in Premium Tier or Standard Tier .
- You can use a default security policy that throttles traffic over a user-specified threshold when you configure one of the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) In addition, you can configure Google Cloud Armor preconfigured WAF rules, which are complex web application firewall (WAF) rules with dozens of signatures that are compiled from open source industry standards.
- External proxy Network Load Balancer request logging You can configure logging for external proxy Network Load Balancers by using the Google Cloud CLI commands as listed in TCP/SSL proxy load balancing logging and monitoring .
- When you use rate limiting with global external proxy Network Load Balancers or classic proxy Network Load Balancers, the following restrictions apply: Cloud Armor only enforces rate limiting actions like throttling or banning on new connection requests from clients.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- External passthrough Network Load Balancer, protocol forwarding, and public IP addresses (VMs) Cloud Armor offers the following options to protect these endpoints against DDoS attacks: Standard network DDoS protection : basic always-on protection for external passthrough Network Load Balancers, protocol forwarding, or VMs with public IP addresses.
- When enabled for a particular region, Cloud Armor provides always-on volumetric attack detection and targeted mitigation for external passthrough Network Load Balancers, protocol forwarding, and VMs with public IP addresses in that region.

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can attach security policies to the backend services of the following load balancers: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) Cloud Armor security policies enable you to allow or deny access to your deployment at the Google Cloud edge, as close as possible to the source of incoming traffic.
- DDoS protection is automatically provided for global external Application Load Balancers, classic Application Load Balancers, and external proxy Network Load Balancers, regardless of tier.
- Google Threat Intelligence Cloud Armor Google Threat Intelligence lets you secure your traffic by allowing or blocking traffic to your global external Application Load Balancers and classic Application Load Balancers based on several categories of threat intelligence data.
- This document provides a high-level overview of these features, several of which are only available for global external Application Load Balancers and classic Application Load Balancers.

### "Troubleshoot Cloud Armor issues \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Check for the following fields and make sure that they match the rule that you configured to deny the traffic: configuredAction must match the action configured in the rule. name must match the name of the Cloud Armor security policy attached to this backend service. outcome must match configuredAction . priority must match the priority number of the rule. httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/ responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: mydev-policy-log-test1 outcome: ACCEPT priority: 2147483647 statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE NAME forwarding rule name: FORWARDING RULE NAME project id: PROJECT ID target proxy name: TARGET HTTP PROXY NAME url map name: URL MAP NAME zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This output includes the following values: BACKEND SERVICE NAME : the name of the backend service FORWARDING RULE NAME : the name of the forwarding rule PROJECT ID : the ID of your project TARGET HTTP PROXY NAME : the name of the target HTTP proxy URL MAP NAME : the name of the URL map Review the hierarchy of rules to ensure that the correct rule is matched.
- For example, the requestUrl compares positively to the OWASP CRS rule ID 941180: httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/foo?document.cookie=1010" responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: POLICY NAME outcome: ACCEPT priority: 2147483647 preconfiguredExprIds: [ 'owasp-crs-v042200-id941180-xss' ] statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE forwarding rule name: mydev-forwarding-rule project id: mydev-staging target proxy name: mydev-target-http-proxy url map name: mydev-url-map zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This log includes the following values: POLICY NAME : the name of the security policy BACKEND SERVICE : the name of the backend service Exclude the OWASP CRS rule ID 941180 by updating the rule in the Cloud Armor security policy: gcloud compute security-policies rules update 1000 \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', ['owasp-crs-v042200-id941180-xss'])" \ --action deny-403 \ --preview Replace POLICY NAME with the name of the security policy.
- Adaptive Protection is enabled for a security policy but there are no logs in Cloud Logging Adaptive Protection logs are generated separately from Cloud Armor request logs and appear under a different resource in Cloud Logging.
- Findings from Cloud Armor don't appear in the Security Command Center If findings from Cloud Armor don't appear in the Security Command Center, traffic to the backend services might not meet the criteria for raising a finding.

