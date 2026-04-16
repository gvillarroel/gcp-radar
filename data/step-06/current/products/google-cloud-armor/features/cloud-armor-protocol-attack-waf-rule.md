---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.945Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor protocol attack WAF rule"
feature_slug: "cloud-armor-protocol-attack-waf-rule"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rule-tuning"
  - "https://docs.cloud.google.com/armor/docs/configure-waf"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/cloud-armor-overview"
keywords:
  - "armor"
  - "protocol"
  - "attack"
  - "waf"
  - "rule"
  - "added"
  - "preconfigured"
  - "for"
---

# Cloud Armor protocol attack WAF rule

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor added a preconfigured WAF rule for protocol attacks.

## Extended Definition

Cloud Armor added a preconfigured WAF rule for protocol attacks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)

## Supporting Pages

### "Tune Cloud Armor preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This excludes request URIs that contain /bad-path from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 4 \ --target-rule-set "lfi-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id930100-lfi" \ --request-uri-to-exclude "op=CONTAINS,val=/bad-path" Replace the following: PRIORITY : the priority of the rule POLICY 4 : the name of the security policy The fifth example updates the rule in the security policy POLICY 5 at PRIORITY to remove all the request field exclusions for the rule IDs owasp-crs-v042200-id942110-sqli and owasp-crs-v042200-id942120-sqli under sqli-v422-stable . gcloud compute security-policies rules remove-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 5 \ --target-rule-set "sqli-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id942110-sqli,owasp-crs-v042200-id942120-sqli" Replace the following: PRIORITY : the priority of the rule POLICY 5 : the name of the security policy Apply parsing on custom Content-Type header values When Cloud Armor evaluates the request body against preconfigured WAF rules, the Content-Type header indicates the format of the data in the request body.
- By default, Cloud Armor treats the contents of the request body as one string, all of which is eligible for inspection and matching on your preconfigured WAF rules.
- Examples The first example updates the rule in the security policy POLICY 1 at PRIORITY to add an exclusion configuration for all signatures under the sqli-v422-stable preconfigured WAF rule, to exclude all request cookies from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 1 \ --target-rule-set "sqli-v422-stable" \ --request-cookie-to-exclude "op=EQUALS ANY" Replace the following: PRIORITY : the priority of the rule POLICY 1 : the name of the security policy The second example updates the rule in the security policy POLICY 2 at PRIORITY to add an exclusion configuration for signatures owasp-crs-v042200-id941140-xss and owasp-crs-v042200-id941270-xss under the xss-v422-stable preconfigured WAF rule, to exclude request headers that either start with abc or end with xyz from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 2 \ --target-rule-set "xss-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id941140-xss,owasp-crs-v042200-id941270-xss" \ --request-header-to-exclude "op=STARTS WITH,val=abc" \ --request-header-to-exclude "op=ENDS WITH,val=xyz" Replace the following: PRIORITY : the priority of the rule POLICY 2 : the name of the security policy The third example updates the rule in the security policy POLICY 3 at PRIORITY to add an exclusion configuration for all signatures under the sqli-v422-stable preconfigured WAF rule.
- This excludes request query parameters (parsed from the URI query string or the body payload) that are equal to bad-param from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 3 \ --target-rule-set "sqli-v422-stable" \ --request-query-param-to-exclude "op=EQUALS,val=bad-param" Replace the following: PRIORITY : the priority of the rule POLICY 3 : the name of the security policy The fourth example updates the rule in the security policy POLICY 4 at PRIORITY to add an exclusion configuration for sigature owasp-crs-v042200-id930100-lfi under the lfi-v422-stable preconfigured WAF rule.

### "Set up preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up If you want to include two or more signatures from a rule, provide a comma-separated list of signatures with the opt in rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up What's next For more information about WAF rule tuning, see Tune Cloud Armor preconfigured WAF rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Mitigate risk on request body that exceeds configured inspection limit When a preconfigured WAF rule is evaluated in a Cloud Armor security policy, up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body is inspected for signature matches against the WAF rules.
- Update inspection limit for preconfigured WAF rules Cloud Armor preconfigured WAF rules can only inspect up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body.
- Use these instructions to set up and tune Cloud Armor preconfigured web application firewall (WAF) rules to help protect your application against attacks.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.
- Cloud Armor Standard Cloud Armor Enterprise Paygo Annual Billing method Pay-as-you-go Pay-as-you-go Subscription with 12-month commitment Pricing Per policy, per rule, per request (see Pricing ) $200/month per project $200/month per protected resource after first 2 resources $3000/month per billing account $30/month per protected resource after first 100 resources DDoS attack protection External Application Load Balancer External proxy Network Load Balancer External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) External Application Load Balancer External proxy Network Load Balancer External passthrough Network Load Balancer Protocol forwarding Public IP addresses (VMs) Cloud Armor WAF Per policy, per rule, per request (see Pricing ) Included with Paygo Included with Annual Resource limits Up to quota limit Up to quota limit Up to quota limit Time commitment One year Adaptive Protection Alerting only Advanced network DDoS protection Network edge security policies Address Group Google Threat Intelligence Hierarchical security policies DDoS attack visibility DDoS response support Eligibility requirements DDoS bill protection Note: Customers who subscribed to Cloud Armor Enterprise after September 3, 2024 aren't eligible for DDoS Response Support until they have successfully completed a DDoS posture review.
- Proactive support lets us apply preconfigured rules that target common DDoS attack types before the attack reaches Cloud Armor.
- External passthrough Network Load Balancer, protocol forwarding, and public IP addresses (VMs) Cloud Armor offers the following options to protect these endpoints against DDoS attacks: Standard network DDoS protection : basic always-on protection for external passthrough Network Load Balancers, protocol forwarding, or VMs with public IP addresses.

### Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/cloud-armor-overview](https://docs.cloud.google.com/armor/docs/cloud-armor-overview)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud Armor Adaptive Protection Adaptive Protection helps you protect your applications and services from L7 distributed denial-of-service (DDoS) attacks by analyzing patterns of traffic to your backend services, detecting and alerting on suspected attacks, and generating suggested WAF rules to mitigate such attacks.
- You can use security policies to match against known conditions, create WAF rules to protect against common attacks like those found in the OWASP Core Rule Set 4.22 , and use Google Cloud Armor Enterprise's built-in protections against DDoS attacks.
- Preconfigured WAF rules Cloud Armor preconfigured WAF rules are complex web application firewall (WAF) rules with dozens of signatures that are compiled from open source industry standards.
- Cloud Armor preconfigured rules help protect your web applications and services from common attacks from the internet and help mitigate the OWASP Top 10 risks .

