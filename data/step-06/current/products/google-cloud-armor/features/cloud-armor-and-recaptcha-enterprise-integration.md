---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.942Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor and reCAPTCHA Enterprise integration"
feature_slug: "cloud-armor-and-recaptcha-enterprise-integration"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-using"
  - "https://docs.cloud.google.com/armor/docs/best-practices"
  - "https://docs.cloud.google.com/armor/docs/bot-management"
keywords:
  - "armor"
  - "and"
  - "recaptcha"
  - "enterprise"
  - "integration"
  - "integrates"
  - "with"
  - "for"
---

# Cloud Armor and reCAPTCHA Enterprise integration

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor integrates with reCAPTCHA Enterprise for WAF and bot management use cases.

## Extended Definition

Cloud Armor integrates with reCAPTCHA Enterprise for WAF and bot management use cases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)
- [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)

## Supporting Pages

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Note: For projects enrolled in Cloud Armor Enterprise, resources—such as external passthrough Network Load Balancer backend services, target pools, target instances, and VM instances with public IP addresses—are metered as protected resources only when advanced network DDoS protection has been enabled for the region in which the resources are located.
- External Application Load Balancer and external proxy Network Load Balancer After a project is enrolled in Cloud Armor Enterprise, the forwarding rules within the project are added to the enrollment.

### Use Google Cloud Armor Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Engage DDoS bill protection To file a claim for DDoS Bill Protection, your project must be enrolled in Cloud Armor Enterprise Annual, and you must prepare the following information: The billing account associated with the targeted project.
- Go to Cloud Armor Service Tier In the Standard pane, click Enroll . gcloud Unenroll a project from Cloud Armor Enterprise Annual gcloud compute project-info update --cloud-armor-tier CA STANDARD Unenroll a project from Cloud Armor Enterprise Paygo gcloud compute project-info update --cloud-armor-tier CA STANDARD View your enrollment information Use the following sections to view your current Cloud Armor Enterprise enrollment tier, or to view the number of resources covered by your enrollment.
- Qualified Attacks For external passthrough Network Load Balancers, protocol forwarding, and public IP addresses (VMs), an attack is considered a Qualified Attack (as described in the Cloud Armor terms and limitations ) only if advanced DDoS protection was already enabled for the region with the attacked endpoint at the start of the attack.
- Remove a project from Cloud Armor Enterprise Before you remove your project from Cloud Armor Enterprise, we recommend that you familiarize yourself with Downgrading from Cloud Armor Enterprise .

### Cloud Armor best practices \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- For this example, we recommend the following structure of rule priority, from greatest-priority to least-priority: Explicit deny rules (ASN, region, IP ranges) Trusted explicit allow rules (scanners, trusted systems - use with extreme caution) Security rules (OWASP, custom rules) Explicit allow rules (ASN, presence of header value, IP range) Default deny rules Use reCAPTCHA for bot management Cloud Armor integrates with Google's reCAPTCHA for bot detection at the WAF layer.
- In this integration, reCAPTCHA generates reCAPTCHA tokens, and Cloud Armor performs the token assessment process instead of reCAPTCHA.
- Use the Security Command Center Cloud Armor integrates automatically with the Security Command Center.
- For example, the following expression uses a single rule that denies AU traffic unless it is from the specific IP range 10.10.10.0/24 : expr: origin . region code == ' AU ' && ! inIpRange ( origin . ip , '1 0.10.10.0 / 24 ') action: deny ( 403 ) priority: 1 This condition only evaluates to true (and triggers a deny action) if both the region is AU and the IP address is not within the 10.10.10.0/24 range.

### "Cloud Armor bot management overview \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Cloud Armor and reCAPTCHA integration overview .
- For information about implementing tokens in reCAPTCHA, see the following pages: Web applications Implement reCAPTCHA action-tokens Implement reCAPTCHA session-tokens Mobile applications Implement reCAPTCHA action-tokens Finally, use the Cloud Armor rules language to configure security policy rules to evaluate reCAPTCHA tokens that are attached with the request.
- When you associate reCAPTCHA keys with a security policy rule, Cloud Armor performs additional validation on the token by comparing the reCAPTCHA key in the token against reCAPTCHA keys that are associated with the rule.
- Enforce reCAPTCHA assessment When there is a reCAPTCHA token attached to an incoming request, Cloud Armor evaluates the request and applies the configured action based on the individual attributes in the token.

