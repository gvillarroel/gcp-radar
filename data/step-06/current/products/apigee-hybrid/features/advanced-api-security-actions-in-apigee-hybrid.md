---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.844Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Advanced API Security Actions in Apigee hybrid"
feature_slug: "advanced-api-security-actions-in-apigee-hybrid"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee"
keywords:
  - "advanced"
  - "includes"
  - "actions"
  - "security"
  - "feature"
---

# Advanced API Security Actions in Apigee hybrid

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee hybrid now includes the Advanced API Security Actions feature from Apigee Advance API Security.

## Extended Definition

Apigee hybrid now includes the Advanced API Security Actions feature from Apigee Advance API Security.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)

## Supporting Pages

### Security actions overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Preview — Advanced API Security Actions This feature is covered by the Pre-GA Offerings Terms of the Google Cloud Terms of Service.
- Open the Security actions page To open the Security actions page: In the Google Cloud console, go to the Apigee > Advanced API security > Security actions page.
- Support for the Preview launch of Advanced API Security Actions is available through the Apigee - Google Cloud Community forum.
- Advanced API Security security actions let you configure security actions defining how Apigee handles traffic .

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Tip: Consider using hub to set a private repository URL for all components instead of configuring them individually. ao.resources.limits.cpu Advanced Introduced in version: 1.2.0 Default value: 250m Chart: apigee-operator , apigee-ingress-manager The CPU limit for the resource in a Kubernetes container, in millicores. ao.resources.limits.memory Advanced Introduced in version: 1.2.0 Default value: 256Mi Chart: apigee-operator , apigee-ingress-manager The memory limit for the resource in a Kubernetes container, in mebibytes. ao.resources.requests.cpu Advanced Introduced in version: 1.2.0 Default value: 250m Chart: apigee-operator , apigee-ingress-manager The CPU needed for normal operation of the resource in a Kubernetes container, in millicores. ao.resources.requests.memory Advanced Introduced in version: 1.2.0 Default value: 256Mi Chart: apigee-operator , apigee-ingress-manager The memory needed for normal operation of the resource in a Kubernetes container, in mebibytes. ao.tolerations.effect Advanced Introduced in version: 1.10.1 Default value: None Chart: apigee-operator Required to use the Taints and Tolerations feature of Kubernetes . effect specifies the effect that matching a toleration with a taint will have.
- This setting cannot be used in tandem with useForRuntimeManagement . envs[].name Basic Introduced in version: 1.0.0 Default value: None Chart: apigee-env Required Apigee environment name to be synchronized. envs[].pollInterval Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-env Interval used for polling organization and environment synchronization changes, in seconds. envs[].port Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-env TCP port number for HTTPS traffic. envs[].securityContext.seccompProfile.type Advanced Introduced in version: 1.16.0 Default value: None Chart: apigee-env Specifies the Seccomp profile type to apply to the pod's security context.
- Tip: Consider using hub to set a private repository URL for all components instead of configuring them individually. istiod.tolerations.effect Advanced Introduced in version: 1.10.1 Default value: None Chart: apigee-ingress-manager Required to use the Taints and Tolerations feature of Kubernetes . effect specifies the effect that matching a toleration with a taint will have.
- For more information on scaling in Kubernetes, see Horizontal Pod Autoscaling in the Kubernetes documentation. ingressGateways[].tolerations.effect Advanced Introduced in version: 1.10.1 Default value: None Chart: apigee-operator Required to use the Taints and Tolerations feature of Kubernetes . effect specifies the effect that matching a toleration with a taint will have.

### What is Apigee? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API insights Apigee offers Advanced API security , API monitoring , and analytics features that enable API producers to secure access to their services, monitor uptime and traffic with alerting, and gain insight into how their APIs are being used.
- Apigee provides a rich array of policies that allow you to add security, traffic management, data mediation, extensions, and other features to the API proxy layer for a robust, enterprise-grade API management solution.
- Challenges for API producers API producers face a specific set of challenges when exposing backend services, such as: Security : Because API producers make their services available over the web, they must take all necessary steps to secure and protect their services from unauthorized access.
- Because the policies and actions are implemented on Apigee, in the API proxy layer, your underlying backend services can remain unchanged.

