---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.829Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "and setup fees for monetization"
feature_slug: "and-setup-fees-for-monetization"
latest_feature_date: "2025-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid"
keywords:
  - "monetization"
  - "recurring"
  - "setup"
  - "fees"
  - "supports"
---

# and setup fees for monetization

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees; Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees.

## Extended Definition

Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees; Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- See Taints and Tolerations: Concepts for details. mintTaskScheduler mintTaskScheduler is the cron job to schedule monetization tasks, like recurring fee calculation on a periodic basis.
- For example for version 1.12.0, the default value is "1120" .) Chart: apigee-operator Apigee hybrid supports rolling Kubernetes updates, which allow deployment updates to take place with zero downtime by incrementally updating Pod instances with new ones.
- You can set this flag even if runtime has its own proxy setup for its environment.

### "Service account authentication methods in Apigee hybrid \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods)
- Source ID: `site-iam-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- For simpler deployments or if you lack a Vault setup , storing keys in Kubernetes secrets provides a native Kubernetes solution.
- Authentication Method Options Apigee hybrid supports several methods for authenticating service accounts.
- After initial setup, this method eliminates the need for service account key files.
- Install Apigee hybrid: Part 1, Project and org setup: Overview .

### "Install the Apigee Operator for Kubernetes for Apigee hybrid \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Create an HTTPRoute following the instructions in create the HTTPRoute using the following yaml configuration: apiVersion: gateway.networking.k8s.io/v1 kind: HTTPRoute metadata: name: http-bin-route namespace: default spec: parentRefs: - name: istio-gateway namespace: default hostnames: ["example.httpbin.com"] rules: - matches: - path: type: PathPrefix value: /get backendRefs: - name: httpbin port: 8000 Apply the file to your cluster: kubectl apply -f httproute.yaml Verify the GKE Gateway setup to confirm that it is working as expected.
- Apply the file to your cluster with the following command: kubectl apply -f gateway.yaml Verify the Istio Gateway setup (optional) For the purposes of this guide, we recommend that you deploy a sample httpbin application in the default namespace to test the gateway you deployed.
- Note: The instructions in these procedures are intended to work with installations on any provider that supports Istio Gateway.
- Create a Kubernetes cluster in a cloud provider that supports Istio Gateway, such as Google Cloud, Azure, or Amazon.

