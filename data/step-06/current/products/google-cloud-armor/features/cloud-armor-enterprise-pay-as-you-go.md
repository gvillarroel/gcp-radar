---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.931Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor Enterprise pay-as-you-go"
feature_slug: "cloud-armor-enterprise-pay-as-you-go"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-using"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-overview"
keywords:
  - "armor"
  - "enterprise"
  - "pay"
  - "as"
  - "you"
  - "go"
  - "provides"
  - "access"
---

# Cloud Armor Enterprise pay-as-you-go

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor Enterprise pay-as-you-go provides access to premium Cloud Armor features without an annual commitment; Cloud Armor Enterprise pay-as-you-go lets projects access premium Cloud Armor features without a one-year term.

## Extended Definition

Cloud Armor Enterprise pay-as-you-go provides access to premium Cloud Armor features without an annual commitment; Cloud Armor Enterprise pay-as-you-go lets projects access premium Cloud Armor features without a one-year term.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)

## Supporting Pages

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 343
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Migrating projects between billing accounts Beginning September 3, 2024, if you migrate your project from one billing account to another while subscribed to Cloud Armor Enterprise Annual, but your new billing account isn't subscribed to Cloud Armor Enterprise Annual, your project reverts to Cloud Armor Standard after the migration completes—unless your project has effective hierarchical security policies, in which case your project is downgraded to Cloud Armor Enterprise Paygo.
- If you subscribe the billing account to Cloud Armor Enterprise Annual after your project was automatically enrolled in Cloud Armor Enterprise Paygo, the project isn't automatically enrolled to Annual.

### Use Google Cloud Armor Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following command to enroll a project in Cloud Armor Enterprise Annual: gcloud compute project-info update --cloud-armor-tier CA ENTERPRISE ANNUAL Enroll a project to Cloud Armor Enterprise Paygo Use the following command to enroll a project in Cloud Armor Enterprise Paygo: gcloud compute project-info update --cloud-armor-tier CA ENTERPRISE PAYGO Note: We strongly recommend that you enroll your projects in Cloud Armor Enterprise as soon as possible because activation can take up to one hour.
- You unsubscribed from Google Cloud Armor Enterprise Annual, but were automatically enrolled in Paygo If you unsubscribe your billing account from Google Cloud Armor Enterprise Annual while your project has effective hierarchical security policies, your project is downgraded to Cloud Armor Enterprise Paygo.
- You subscribed to Cloud Armor Enterprise Annual, but your bill continues to be pay-as-you-go If you subscribed to Cloud Armor Enterprise and you are still being billed on a pay-as-you-go basis, check whether you enrolled your projects in Cloud Armor Enterprise.
- If your project has effective hierarchical security policies, your project is downgraded to Cloud Armor Enterprise Paygo.

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can attach security policies to the backend services of the following load balancers: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) Cloud Armor security policies enable you to allow or deny access to your deployment at the Google Cloud edge, as close as possible to the source of incoming traffic.
- You can use security policies to match against known conditions, create WAF rules to protect against common attacks like those found in the OWASP Core Rule Set 4.22 , and use Google Cloud Armor Enterprise's built-in protections against DDoS attacks.
- What's next Examine common use cases for Cloud Armor Learn about Google Cloud Armor Enterprise Learn about Google Cloud Armor Adaptive Protection Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Threat Intelligence Cloud Armor Google Threat Intelligence lets you secure your traffic by allowing or blocking traffic to your global external Application Load Balancers and classic Application Load Balancers based on several categories of threat intelligence data.

### Google Cloud Armor Adaptive Protection overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These must be stored in Cloud Logging, or routed to a logging bucket which Cloud Armor can access. networksecurity.googleapis.com/dos attack networksecurity.googleapis.com/network dos attack networksecurity.googleapis.com/network dos attack mitigations Configure and tune alerts You can enable Adaptive Protection in projects where Cloud Armor security policies already protect your applications.
- Google Cloud Armor Adaptive Protection helps you protect your Google Cloud applications, websites, and services against L7 distributed denial-of-service (DDoS) attacks such as HTTP floods and other high-frequency layer 7 (application-level) malicious activity.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Google Cloud Armor Adaptive Protection overview Stay organized with collections Save and categorize content based on your preferences.
- If you are not subscribed to Cloud Armor Enterprise, basic alerts sent by Adaptive Protection do not include a suggested Cloud Armor rule that you can apply.

