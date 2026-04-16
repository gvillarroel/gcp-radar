---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.937Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Preview mode for advanced network DDoS protection"
feature_slug: "preview-mode-for-advanced-network-ddos-protection"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/advanced-network-ddos"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-overview"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
keywords:
  - "preview"
  - "mode"
  - "for"
  - "advanced"
  - "network"
  - "ddos"
  - "protection"
  - "provides"
---

# Preview mode for advanced network DDoS protection

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Advanced network DDoS protection preview mode provides logging and telemetry without enforcement.

## Extended Definition

Advanced network DDoS protection preview mode provides logging and telemetry without enforcement.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/advanced-network-ddos](https://docs.cloud.google.com/armor/docs/advanced-network-ddos)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)

## Supporting Pages

### "Configure advanced network DDoS protection \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/advanced-network-ddos](https://docs.cloud.google.com/armor/docs/advanced-network-ddos)
- Source ID: `site-iam-reference`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To remove your policy from the network edge security service, use the following command: gcloud compute network-edge-security-services update SERVICE NAME \ --security-policy="" \ --region= REGION NAME To delete the network edge security service, use the following command: gcloud compute network-edge-security-services delete SERVICE NAME \ --region= REGION NAME Delete the security policy using the following command: gcloud compute security-policies delete SECURITY POLICY NAME Use preview mode Preview mode lets you monitor the effects of advanced network DDoS protection without enforcing the mitigation.
- If your security policy is in preview mode during an active attack and you want to enforce the mitigations, you can update your security policy to set the --network-ddos-protection flag to ADVANCED .
- Cloud Armor Enterprise subscribers can also enable preview mode for advanced network DDoS protection policies.
- Create a security policy of type CLOUD ARMOR NETWORK , or use an existing security policy with type CLOUD ARMOR NETWORK . gcloud compute security-policies create SECURITY POLICY NAME \ --type CLOUD ARMOR NETWORK \ --region REGION Replace the following: SECURITY POLICY NAME : the name that you want your security policy to have REGION : the region in which you want your security policy to be provisioned Update the newly created or existing security policy by setting the --network-ddos-protection flag to ADVANCED . gcloud compute security-policies update SECURITY POLICY NAME \ --network-ddos-protection ADVANCED \ --region REGION Alternatively, you can set the --network-ddos-protection flag to ADVANCED PREVIEW to enable the security policy in preview mode . gcloud beta compute security-policies update SECURITY POLICY NAME \ --network-ddos-protection ADVANCED PREVIEW \ --region REGION Create a network edge security service that references your security policy. gcloud compute network-edge-security-services create SERVICE NAME \ --security-policy SECURITY POLICY NAME \ --region REGION Disable advanced network DDoS protection To disable advanced network DDoS protection, you can either update or delete the security policy.

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor also provides advanced network DDoS protection for external passthrough Network Load Balancers , protocol forwarding , and VMs with public IP addresses.
- For more information about advanced DDoS protection, see Configure advanced network DDoS protection .
- For more information about advanced DDoS protection, see Configure advanced network DDoS protection .
- To configure network edge security policies, you must first configure advanced network DDoS protection in the region in which you intend to create the policies.

### Google Cloud Armor Adaptive Protection overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- During the training period, Adaptive Protection models incoming traffic and usage patterns that are specific to each backend service, so that it develops the baseline for each backend service.
- For more information about configuring granular models, see Configure Google Cloud Armor Adaptive Protection .
- The following example is the JSON payload of a sample alert along with the resource labels on which you can filter the logs. ... jsonPayload: { alertId: "11275630857957031521" backendService: "test-service" confidence: 0.71828485 headerSignatures: [ 0: { name: "RequestUri" significantValues: [ 0: { attackLikelihood: 0.88 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.85 proportionInBaseline: 0.01 value: "/" } ] } 1: { name: "RegionCode" significantValues: [ 0: { attackLikelihood: 0.08 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.17 proportionInBaseline: 0.28 value: "US" } 1: { attackLikelihood: 0.68 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.09 proportionInBaseline: 0.01 value: "DE" } 2: { attackLikelihood: 0.74 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.05 proportionInBaseline: 0 value: "MD" } ] } 2: { name: "UserAgent" significantValues: [ 0: { attackLikelihood: 0.92 matchType: "MATCH TYPE EQUALS" proportionInAttack: 0.85 proportionInBaseline: 0 value: "Unusual browser" } 1: { attackLikelihood: 0.87 proportionInAttack: 0.7 proportionInBaseline: 0.1 missing: true } ] } ] suggestedRule: [ 0: { action: "DENY" evaluation: { impactedAttackProportion: 0.95 impactedBaselineProportion: 0.001 impactedBaselinePolicyProportion: 0.001 } expression: "evaluateAdaptiveProtection('11275630857957031521')" } ] ruleStatus: RULE GENERATED attackSize: 5000 } resource: { type: "network security policy", labels: { project id: "your-project", policy name: "your-security-policy-name" } }, } } ...
- For each attribute value that Adaptive Protection believes indicates the potential attack, Adaptive Protection lists the following: The attack likelihood The proportion of the attribute in the attack, which is the percentage of potential attack traffic that had this value at the time that the attack was detected The proportion of the attribute in baseline, which is the percentage of baseline traffic that possessed this attribute value at time that the attack was detected Cloud Logging entry specification contains details about the information in each alert.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Note: For projects enrolled in Cloud Armor Enterprise, resources—such as external passthrough Network Load Balancer backend services, target pools, target instances, and VM instances with public IP addresses—are metered as protected resources only when advanced network DDoS protection has been enabled for the region in which the resources are located.
- We recommend that you delete any advanced network DDoS protection rules before you unenroll your project from Cloud Armor Enterprise, but you can also delete advanced network DDoS protection rules after downgrading.

