---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.413Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Advanced API Security Terraform configuration"
feature_slug: "advanced-api-security-terraform-configuration"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
keywords:
  - "configure"
  - "terraform"
  - "expanded"
  - "configuration"
  - "been"
---

# Advanced API Security Terraform configuration

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Terraform support has been expanded to configure Advanced API Security settings such as add-on enablement, risk assessment profiles, IP address resolution, and security actions in a declarative workflow.

## Extended Definition

Terraform support has been expanded to configure Advanced API Security settings such as add-on enablement, risk assessment profiles, IP address resolution, and security actions in a declarative workflow.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)

## Supporting Pages

### Use Terraform with Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you apply the configuration , Terraform creates an execution plan and performs the operations needed to configure Apigee.
- Provision API hub with Terraform Configure Advanced API Security Configure risk assessment security profiles and monitoring conditions (v2) Configure abuse detection exclusion lists Configure security actions Configure Advanced API Security with Terraform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you use Terraform with Apigee, you create Terraform files that describe your desired configuration for provisioning or a feature.
- HashiCorp Terraform is an Infrastructure as Code (IaC) tool that you can use to provision and configure Apigee using code.

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For example: Create a custom profile with the following checks and weights: OAuthV2 policy check: Major VerifyAPIKey policy check: Minor With this configuration, the scores are: 100% if both policies are present 94% if only the OAuthV2 policy is present 6% if only the VerifyAPIKey policy is present 0% if neither policy is present Use the scores to determine which policies are configured in the proxies.
- You can also use Terraform to configure security profiles and monitoring conditions .
- Proxy assessment: Assesses how well proxies have implemented various security policies in the following areas: Mediation: Check if one of the following mediation policies is configured for all proxies in the environment: OASValidation or SOAPMessageValidation .
- Source details The Source details pane displays details of detected abuse traffic in the environment, including: Traffic details : Detected traffic: The number of API calls originating from an IP address that has been detected as a source of abuse.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Configuration property Default value metrics.aggregator.resources.requests.memory : 512Mi metrics.aggregator.resources.limits.memory : 3Gi metrics.app.resources.requests.memory : 512Mi metrics.app.resources.limits.memory : 1Gi metrics.appStackdriverExporter.resources.requests.memory : 512Mi metrics.appStackdriverExporter.resources.limits.memory : 1Gi metrics.proxy.resources.requests.memory : 512Mi metrics.proxy.resources.limits.memory : 1Gi metrics.proxyStackdriverExporter.resources.requests.memory : 512Mi metrics.proxyStackdriverExporter.resources.limits.memory : 1Gi Apply the changes with apigeectl apply with the ‑‑telemetry flag: apigeectl apply --telemetry -f overrides.yaml 260324159 Apigee 1-9-0-apigee-16 FIXED API proxy and shared flow deployments taking up to 30 minutes.
- 260772383 hybrid 1.8.0 and later OPEN Socket bind error on the AKS platform If installing hybrid on AKS, you may see this error: envoy config listener '0.0.0.0 443' failed to bind or apply socket options: cannot bind '0.0.0.0:443': Permission denied Workaround: Add the following svcAnnotations stanza to the overrides file: ingressGateways: - name: INGRESS NAME ... svcAnnotations: service.beta.kubernetes.io/azure-load-balancer-internal: "true" See Configure the hybrid runtime .
- 391861216 hybrid 1.13.x hybrid 1.14.x FIXED in hybrid 1.13.3 and hybrid 1.14.1 Restarting Cassandra pods on a Hybrid cluster that has been restored using the GCP or HYBRID Cloud Providers will cause the pods to go into the CrashLoopBackoff state.
- If you see problems with the apigee-telemetry-app or apigee-telemetry-proxy pods not running, change the metrics resources requests and resources limits properties to match the following defaults in Configuration property reference: metrics .

