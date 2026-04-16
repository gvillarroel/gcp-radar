---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.927Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Hierarchical security policies"
feature_slug: "hierarchical-security-policies"
latest_feature_date: "2025-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-using"
  - "https://docs.cloud.google.com/armor/docs/configure-security-policies"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
keywords:
  - "hierarchical"
  - "security"
  - "policies"
  - "that"
  - "provide"
  - "centralized"
  - "control"
  - "consistency"
---

# Hierarchical security policies

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Security policies that provide centralized control, consistency, operational efficiency, and delegated policy management; Security policies that provide centralized control, consistency, operational efficiency, and delegated policy management.

## Extended Definition

Security policies that provide centralized control, consistency, operational efficiency, and delegated policy management; Security policies that provide centralized control, consistency, operational efficiency, and delegated policy management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)

## Supporting Pages

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Edge security policies Edge security policies enable users to configure filtering and access control policies for content that is stored in cache; this includes endpoints like Cloud CDN-enabled backend services and Cloud Storage buckets.
- You can use Cloud Armor with load balancers that are in either of the following Network Service Tiers: Premium Tier Standard Tier You can use backend security policies with GKE and the default ingress controller.
- Cloud Armor provides two categories of security policies: hierarchical security policies and service-level security policies.
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.

### Use Google Cloud Armor Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-using](https://docs.cloud.google.com/armor/docs/armor-enterprise-using)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You unsubscribed from Google Cloud Armor Enterprise Annual, but were automatically enrolled in Paygo If you unsubscribe your billing account from Google Cloud Armor Enterprise Annual while your project has effective hierarchical security policies, your project is downgraded to Cloud Armor Enterprise Paygo.
- Enroll projects to Cloud Armor Enterprise Note: If you create a hierarchical security policy in a project that isn't enrolled in Cloud Armor Enterprise, your project is automatically enrolled in Cloud Armor Enterprise Paygo.
- Your project was automatically enrolled to Cloud Armor Enterprise Projects that are covered by a hierarchical security policy are automatically enrolled to the highest Cloud Armor Enterprise tier for which they are eligible.
- For more information about hierarchical security policy automatic enrollment behavior, see Hierarchical security policies .

### "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The following command adds a rule to allow traffic from the IP address 1.2.3.4 and contains the string example in the user-agent header: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \ --action allow \ --description "Block User-Agent 'example'" The following command adds a rule to block requests if the request's cookie contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['cookie']) && request.headers['cookie'].contains('80=BLAH')" \ --action deny-403 \ --description "Cookie Block" The following command adds a rule to block requests from the region AU : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU'" \ --action deny-403 \ --description "AU block" The following command adds a rule to block requests from the region AU that are not in the specified IP range: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == "AU" && !inIpRange(origin.ip, '1.2.3.0/24')" \ --action deny-403 \ --description "country and IP block" The following command adds a rule to block requests with a URI that matches a regular expression: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "request.path.matches('/example path/')" \ --action deny-502 \ --description "regex block" The following command adds a rule to block requests if the Base64 decoded value of the user-id header contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \ --action deny-403 \ --description "country and IP block" The following command adds a rule that uses a preconfigured expression set to mitigate SQLi attacks: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sqli-stable')" \ --action deny-403 Update a single rule in a security policy Use these instructions to update a single rule in a Cloud Armor security policy.
- If you don't provide the file format, Cloud Armor uses the default YAML. gcloud compute security-policies export NAME \ --file-name FILE NAME \ --file-format FILE FORMAT The following example exports the my-policy security policy to the my-file file in the YAML format: gcloud compute security-policies export my-policy \ --file-name my-file \ --file-format yaml The following example shows an exported security policy: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: allow description: default rule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy You can modify the exported file with any text editor, and then import it back to Google Cloud by using the import command.
- Note that the actual output would include all of the rules that are listed in Tuning Cloud Armor WAF rules . gcloud compute security-policies list-preconfigured-expression-sets EXPRESSION SET sqli-canary RULE ID SENSITIVITY owasp-crs-v042200-id942120-sqli 2 … xss-canary RULE ID SENSITIVITY owasp-crs-v042200-id941110-xss 1 owasp-crs-v042200-id941120-xss 2 … sourceiplist-fastly sourceiplist-cloudflare sourceiplist-imperva What's next Tune web application firewall (WAF) rules Troubleshoot issues Use the custom rules language reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, if you want to block access to the /admin directory, you can use the following expression to block bypasses that use the backslash character (): request.path.matches(r'^/\\ admin') You can also combine this with urlDecode to handle both URL encoding and the backslash character () bypasses: request.path.urlDecode().matches(r'^/\\ admin') Manage security policies Use the following sections to list the security policies in your project, update your security policies, delete your security policies, or test your security policies.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Hierarchical security policies When you attach a hierarchical security policy, each of the projects that inherit the hierarchical security policy must be enrolled in Cloud Armor Enterprise.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Migrating projects between billing accounts Beginning September 3, 2024, if you migrate your project from one billing account to another while subscribed to Cloud Armor Enterprise Annual, but your new billing account isn't subscribed to Cloud Armor Enterprise Annual, your project reverts to Cloud Armor Standard after the migration completes—unless your project has effective hierarchical security policies, in which case your project is downgraded to Cloud Armor Enterprise Paygo.

