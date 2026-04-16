---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.929Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Adaptive Protection granular models"
feature_slug: "adaptive-protection-granular-models"
latest_feature_date: "2024-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-overview"
  - "https://docs.cloud.google.com/armor/docs/configure-adaptive-protection"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy"
keywords:
  - "adaptive"
  - "protection"
  - "granular"
  - "models"
  - "armor"
  - "are"
  - "generally"
  - "available"
---

# Adaptive Protection granular models

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor Adaptive Protection granular models are generally available.

## Extended Definition

Cloud Armor Adaptive Protection granular models are generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy)

## Supporting Pages

### Google Cloud Armor Adaptive Protection overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the following scenarios, requests are not counted in Adaptive Protection: Requests directly served from Cloud CDN Requests rejected by a Cloud Armor security policy Granular models By default, Adaptive Protection detects an attack and suggests mitigations based on the typical traffic directed to each backend service.
- Availability of Adaptive Protection Full Adaptive Protection alerts are available only if you subscribe to Google Cloud Armor Enterprise.
- For more information about configuring granular models, see Configure Google Cloud Armor Adaptive Protection .
- What's next Learn about common use cases for Adaptive Protection Learn about the features in Cloud Armor Enterprise tiers Learn how to enable Cloud Armor Enterprise Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Configure Google Cloud Armor Adaptive Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following command to configure Adaptive Protection with customized detection thresholds: gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY NAME \ --threshold-config-name=my-customized-thresholds \ --detection-load-threshold=0.9 \ --detection-relative-to-baseline-qps=1.5 What's next Google Cloud Armor Adaptive Protection overview Google Cloud Armor Adaptive Protection use cases Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Click Update . gcloud To activate Adaptive Protection for a security policy: gcloud compute security-policies update MY-SECURITY-POLICY \ --enable-layer7-ddos-defense To deactivate Adaptive Protection for a security policy: gcloud compute security-policies update MY-SECURITY-POLICY \ --no-enable-layer7-ddos-defense Configure granular models The granular models feature lets you configure specific hosts or paths as the granular units that Adaptive Protection analyzes.
- For more information about granular models, see the Adaptive Protection overview .
- Use this command for each granular traffic unit that you want to customize, replacing the variables as needed for each host and URL path: gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY NAME --threshold-config-name=my-host-config --auto-deploy-impacted-baseline-threshold=0.01 --auto-deploy-expiration-sec=3600 --traffic-granularity-configs=type=HTTP HEADER HOST;value= HOST ,type=HTTP PATH;value= PATH Detect when attack volume exceeds baseline average QPS In the following example, you configure Adaptive Protection to detect an attack only when the attack volume exceeds your baseline average QPS by more than 50%, and only when the backend service's load is more than 90% of its capacity. gcloud Create a security policy with the name POLICY NAME , or use an existing security policy.

### Google Cloud Armor Adaptive Protection use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customizing the model and reporting event errors The Adaptive Protection attack detection models are trained on a data set, artificially produced to exhibit the characteristics of both the good and the malicious traffic.
- Adaptive Protection identifies and mitigates an L7 DDoS attack, allowing legitimate users to access the application. (click to enlarge) Notifications of potential attacks and the identified signature of the suspect traffic are sent to Logging, where the log message can trigger a custom Alerting Policy, be analyzed and stored, or be sent to a downstream security information and event management (SIEM) or log management solution.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Google Cloud Armor Adaptive Protection use cases Stay organized with collections Save and categorize content based on your preferences.
- Example signature of a potential attack. (click to enlarge) You can report individual alerts as a false positive to further help Adaptive Protection train and customize the detection models.

### "Automatically deploy Adaptive Protection suggested rules \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Adaptive Protection is only available for backend security policies attached to backend services that are exposed through an external Application Load Balancer.
- Cloud Armor applies the blocking action to the attacking request: gcloud compute security-policies rules create 1000 \ --security-policy POLICY NAME \ --expression "evaluateAdaptiveProtectionAutoDeploy()" \ --action deny-403 Redirect malicious traffic to a reCAPTCHA challenge This example rule redirects traffic that Adaptive Protection identifies as malicious to a reCAPTCHA challenge: gcloud compute security-policies rules create 1000 \ --security-policy POLICY NAME \ --expression "evaluateAdaptiveProtectionAutoDeploy()" \ --action redirect \ --redirect-type google-recaptcha Rate limit malicious traffic This example applies Cloud Armor rate limiting to traffic that Adaptive Protection identifies as malicious: gcloud compute security-policies rules create 1000 \ --security-policy POLICY NAME \ --expression "evaluateAdaptiveProtectionAutoDeploy()" \ --action throttle \ --rate-limit-threshold-count 500 \ --rate-limit-threshold-interval-sec 120 \ --conform-action allow \ --exceed-action deny-404 \ --enforce-on-key ip Configure Adaptive Protection auto-deploy parameters You can configure the thresholds for automatic deployment of rules by tuning the following parameters.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Automatically deploy Adaptive Protection suggested rules Stay organized with collections Save and categorize content based on your preferences.
- Adaptive Protection is not available for external proxy Network Load Balancers.

