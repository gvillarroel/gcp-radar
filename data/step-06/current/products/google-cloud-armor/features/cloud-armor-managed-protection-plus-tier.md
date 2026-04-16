---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.943Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor Managed Protection Plus Tier"
feature_slug: "cloud-armor-managed-protection-plus-tier"
latest_feature_date: "2021-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-using"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
keywords:
  - "armor"
  - "managed"
  - "protection"
  - "plus"
  - "tier"
  - "is"
  - "subscription"
  - "that"
---

# Cloud Armor Managed Protection Plus Tier

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor Managed Protection Plus Tier is a subscription tier that bundles the features of Standard Tier with WAF policy, rules, HTTP request usage, and named IP lists; Cloud Armor Managed Protection Plus Tier is a subscription tier that bundles the features of Standard Tier with WAF policy, rules, HTTP request usage, and named IP lists.

## Extended Definition

Cloud Armor Managed Protection Plus Tier is a subscription tier that bundles the features of Standard Tier with WAF policy, rules, HTTP request usage, and named IP lists; Cloud Armor Managed Protection Plus Tier is a subscription tier that bundles the features of Standard Tier with WAF policy, rules, HTTP request usage, and named IP lists.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)

## Supporting Pages

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Cloud Armor Standard versus Cloud Armor Enterprise Note: If you use cross-project service referencing , both the frontend and backend service projects must be under the same billing account that is associated with the Cloud Armor Enterprise subscription and enrolled in Cloud Armor Enterprise.
- Note: If you use cross-project service referencing , both the frontend and backend service projects must be under the same billing account that is associated with the Cloud Armor Enterprise subscription and enrolled in Cloud Armor Enterprise.

### Use Google Cloud Armor Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your current Cloud Armor Enterprise enrollment tier is highlighted, and has the status "Enrolled" in the Project field. gcloud To view your current Cloud Armor Enterprise enrollment tier, check the cloudArmorTier value by using the gcloud compute project-info describe command : gcloud compute project-info describe View the number of backend services and backend buckets covered by an enrollment Each project that is enrolled in Cloud Armor Enterprise shows the number of backend services and backend buckets covered on the Cloud Armor Enterprise page.
- Use the following command to enroll a project in Cloud Armor Enterprise Annual: gcloud compute project-info update --cloud-armor-tier CA ENTERPRISE ANNUAL Enroll a project to Cloud Armor Enterprise Paygo Use the following command to enroll a project in Cloud Armor Enterprise Paygo: gcloud compute project-info update --cloud-armor-tier CA ENTERPRISE PAYGO Note: We strongly recommend that you enroll your projects in Cloud Armor Enterprise as soon as possible because activation can take up to one hour.
- Required IAM permissions To enroll a project into the Cloud Armor Enterprise subscription, you must have the following IAM permissions: IAM permission API methods Roles billing.accounts.update N/A Billing Account Admininstrator ( roles/billing.admin ) compute.projects.setCloudArmorTier Projects setCloudArmorTier Compute Admin ( roles/compute.admin ) To learn more about billing permissions, see Cloud Billing access control and permissions .
- Your project was automatically enrolled to Cloud Armor Enterprise Projects that are covered by a hierarchical security policy are automatically enrolled to the highest Cloud Armor Enterprise tier for which they are eligible.

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Armor Enterprise Cloud Armor Enterprise is the managed application protection service that helps protect your web applications and services from distributed denial-of-service (DDoS) attacks and other threats from the internet.
- Adaptive Protection can be enabled on a per- security policy basis, but it requires an active Cloud Armor Enterprise subscription in the project.
- What's next Examine common use cases for Cloud Armor Learn about Google Cloud Armor Enterprise Learn about Google Cloud Armor Adaptive Protection Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud Armor Adaptive Protection Adaptive Protection helps you protect your applications and services from L7 distributed denial-of-service (DDoS) attacks by analyzing patterns of traffic to your backend services, detecting and alerting on suspected attacks, and generating suggested WAF rules to mitigate such attacks.

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- Rule1 expr: inIPRange(origin.ip, '10.10.10.0/24') action: deny(403) priority: 1 Rule2 expr: evaluatePreconfiguredWaf('xss-v422-stable') action: deny(403) priority: 2 Rule3 expr: inIPRange(origin.ip, '9.9.9.0/24') action: allow priority: 3 Rule-default action: deny(403) priority: INT-MAX In the following example, the policy allows IP 9.9.9.1 without scanning against XSS attacks: Rule1 expr: inIPRange(origin.ip, '10.10.10.0/24') action: deny(403) priority: 1 Rule2 expr: inIPRange(origin.ip, '9.9.9.0/24') action: allow priority: 2 Rule3 expr: evaluatePreconfiguredWaf('xss-v422-stable') action: deny(403) priority: 3 Rule-default action: allow priority: INT-MAX Default rule Each Cloud Armor security policy contains a default rule that is matched if none of the higher priority rules are matched or if there are no other rules in the policy.
- What's next Configure Cloud Armor security policies Learn about the features in Cloud Armor Enterprise tiers Learn about named IP address lists Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In addition, you can configure custom error codes for traffic that Cloud Armor denies by configuring custom response pages for the same 4 xx series or 5 xx series status codes that your existing security policy rules use.

