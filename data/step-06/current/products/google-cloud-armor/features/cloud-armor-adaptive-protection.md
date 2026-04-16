---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.944Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor Adaptive Protection"
feature_slug: "cloud-armor-adaptive-protection"
latest_feature_date: "2021-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-overview"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases"
  - "https://docs.cloud.google.com/armor/docs/configure-adaptive-protection"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy"
keywords:
  - "armor"
  - "adaptive"
  - "protection"
  - "uses"
  - "machine"
  - "learning"
  - "models"
  - "to"
---

# Cloud Armor Adaptive Protection

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor Adaptive Protection uses machine learning models to help protect applications, websites, and services against L7 distributed denial-of-service attacks.

## Extended Definition

Cloud Armor Adaptive Protection uses machine learning models to help protect applications, websites, and services against L7 distributed denial-of-service attacks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases)
- [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy)

## Supporting Pages

### Google Cloud Armor Adaptive Protection overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adaptive Protection builds machine-learning models that do the following: Detect and alert on anomalous activity Generate a signature describing the potential attack Generate a custom Cloud Armor WAF rule to block the signature You enable or disable Adaptive Protection on a per-security-policy basis.
- Machine learning overview and privacy Training data and detection data Adaptive Protection builds several models to detect potential attacks and identify their signatures.
- In the following scenarios, requests are not counted in Adaptive Protection: Requests directly served from Cloud CDN Requests rejected by a Cloud Armor security policy Granular models By default, Adaptive Protection detects an attack and suggests mitigations based on the typical traffic directed to each backend service.
- These must be stored in Cloud Logging, or routed to a logging bucket which Cloud Armor can access. networksecurity.googleapis.com/dos attack networksecurity.googleapis.com/network dos attack networksecurity.googleapis.com/network dos attack mitigations Configure and tune alerts You can enable Adaptive Protection in projects where Cloud Armor security policies already protect your applications.

### Google Cloud Armor Adaptive Protection use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases)
- Source ID: `site-iam-reference`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customizing the model and reporting event errors The Adaptive Protection attack detection models are trained on a data set, artificially produced to exhibit the characteristics of both the good and the malicious traffic.
- Example signature of a potential attack. (click to enlarge) You can report individual alerts as a false positive to further help Adaptive Protection train and customize the detection models.
- With false positive reports, Adaptive Protection models will be less likely to alert on traffic with similar characteristics and attributes in the future.
- Over time, the Adaptive Protection detection models will be more attuned to the specific characteristics of the traffic in each protected security policy.

### Configure Google Cloud Armor Adaptive Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection)
- Source ID: `site-iam-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following command to configure Adaptive Protection with customized detection thresholds: gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY NAME \ --threshold-config-name=my-customized-thresholds \ --detection-load-threshold=0.9 \ --detection-relative-to-baseline-qps=1.5 What's next Google Cloud Armor Adaptive Protection overview Google Cloud Armor Adaptive Protection use cases Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Click Update . gcloud To activate Adaptive Protection for a security policy: gcloud compute security-policies update MY-SECURITY-POLICY \ --enable-layer7-ddos-defense To deactivate Adaptive Protection for a security policy: gcloud compute security-policies update MY-SECURITY-POLICY \ --no-enable-layer7-ddos-defense Configure granular models The granular models feature lets you configure specific hosts or paths as the granular units that Adaptive Protection analyzes.
- IAM permission API methods Roles compute.securityPolicies.create SecurityPolicies insert Compute Security Admin ( roles/compute.securityAdmin ) compute.securityPolicies.delete SecurityPolicies delete Compute Security Admin ( roles/compute.securityAdmin ) compute.securityPolicies.get SecurityPolicies get SecurityPolicies getRule Security Admin ( roles/iam.securityAdmin ) compute.securityPolicies.list SecurityPolicies list Security Admin ( roles/iam.securityAdmin ) Both of the following: compute.securityPolicies.use compute.backendServices. setSecurityPolicy BackendServices setSecurityPolicy Compute Network Admin ( roles/compute.networkAdmin ) compute.securityPolicies.update SecurityPolicies patch SecurityPolicies addRule SecurityPolicies patchRule SecurityPolicies removeRule Compute Security Admin ( roles/compute.securityAdmin ) Enable Adaptive Protection Use the following steps to enable Adaptive Protection for your security policy.
- Use this command for each granular traffic unit that you want to customize, replacing the variables as needed for each host and URL path: gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY NAME --threshold-config-name=my-host-config --auto-deploy-impacted-baseline-threshold=0.01 --auto-deploy-expiration-sec=3600 --traffic-granularity-configs=type=HTTP HEADER HOST;value= HOST ,type=HTTP PATH;value= PATH Detect when attack volume exceeds baseline average QPS In the following example, you configure Adaptive Protection to detect an attack only when the attack volume exceeds your baseline average QPS by more than 50%, and only when the backend service's load is more than 90% of its capacity. gcloud Create a security policy with the name POLICY NAME , or use an existing security policy.

### "Automatically deploy Adaptive Protection suggested rules \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor applies the blocking action to the attacking request: gcloud compute security-policies rules create 1000 \ --security-policy POLICY NAME \ --expression "evaluateAdaptiveProtectionAutoDeploy()" \ --action deny-403 Redirect malicious traffic to a reCAPTCHA challenge This example rule redirects traffic that Adaptive Protection identifies as malicious to a reCAPTCHA challenge: gcloud compute security-policies rules create 1000 \ --security-policy POLICY NAME \ --expression "evaluateAdaptiveProtectionAutoDeploy()" \ --action redirect \ --redirect-type google-recaptcha Rate limit malicious traffic This example applies Cloud Armor rate limiting to traffic that Adaptive Protection identifies as malicious: gcloud compute security-policies rules create 1000 \ --security-policy POLICY NAME \ --expression "evaluateAdaptiveProtectionAutoDeploy()" \ --action throttle \ --rate-limit-threshold-count 500 \ --rate-limit-threshold-interval-sec 120 \ --conform-action allow \ --exceed-action deny-404 \ --enforce-on-key ip Configure Adaptive Protection auto-deploy parameters You can configure the thresholds for automatic deployment of rules by tuning the following parameters.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Automatically deploy Adaptive Protection suggested rules Stay organized with collections Save and categorize content based on your preferences.
- Once the load surpasses the configured load threshold, the rule is automatically deployed to mitigate the attack. adaptiveProtection.autoDeployAlertId : whenever Adaptive Protection takes an action on a request as part of an automatic defense, the request log has the additional adaptiveProtection.autoDeployAlertId field, which records the alert ID.
- For example, even if Adaptive Protection confidently detects an attack and generates a targeted attack signature with minimal baseline impact, auto-deploy still does not act if the backend service under attack is significantly over-provisioned such that the load balancer sees its load below the configured load threshold during the attack.

