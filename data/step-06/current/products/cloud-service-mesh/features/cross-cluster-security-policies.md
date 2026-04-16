---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.854Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Cross-cluster security policies"
feature_slug: "cross-cluster-security-policies"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/security/security-overview"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz"
keywords:
  - "cross"
  - "cluster"
  - "security"
  - "policies"
  - "anthos"
  - "mesh"
  - "supports"
  - "for"
---

# Cross-cluster security policies

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Anthos Service Mesh supports cross-cluster security policies for multi-cluster meshes on GKE in beta; Anthos Service Mesh supports cross-cluster security policies for multi-cluster meshes on GKE in beta.

## Extended Definition

Anthos Service Mesh supports cross-cluster security policies for multi-cluster meshes on GKE in beta; Anthos Service Mesh supports cross-cluster security policies for multi-cluster meshes on GKE in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/security/security-overview](https://docs.cloud.google.com/service-mesh/docs/security/security-overview)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz)

## Supporting Pages

### Cloud Service Mesh security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/security-overview](https://docs.cloud.google.com/service-mesh/docs/security/security-overview)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this integration, all workloads in Cloud Service Mesh are granted two IAM roles: privateca.workloadCertificateRequester privateca.auditor Identity-aware access control (firewall) policies With Cloud Service Mesh, you can configure network security policies that are based on the mTLS identity versus the IP address of the peer.
- Certificate Authority Service As an alternative to Cloud Service Mesh certificate authority, you can configure Cloud Service Mesh to use Certificate Authority Service, which is suitable for the following use cases: If you need different certificate authorities to sign workload certificates on different clusters.
- What's next Cloud Service Mesh security best practices Configure transport security Update your authorization policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- It lets you achieve this posture through declarative policies and without modifying any application code. mutual TLS Cloud Service Mesh uses mutual TLS (mTLS) for peer authentication.

### "Configuring audit policies for your services \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuring audit policies for your services Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Turn on RBAC debug logging with the following command: kubectl exec POD NAME -n NAMESPACE -c istio-proxy -- pilot-agent request POST 'logging?rbac=debug' Send some requests, and then check logs for the Pod with the kubectl logs command: kubectl logs POD NAME -n NAMESPACE -c istio-proxy What's next Learn about security in Cloud Service Mesh Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After applying the following policy, you see audit logs for requests to both ProductPage and Ratings. kubectl apply -f - << EOF apiVersion: "security.istio.io/v1beta1" kind: "AuthorizationPolicy" metadata: name: "audit-ratings" namespace: default spec: action: AUDIT rules: - from: - source: principals: ["cluster.local/ns/default/sa/bookinfo-ratings"] to: - operation: methods: ["GET"] EOF The new audit policy has to propagate first before it takes effect.
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of vulnerable policy that uses "DENY action + paths field" pattern: apiVersion: security.istio.io/v1beta1 kind: AuthorizationPolicy metadata: name: deny-path-admin spec: action: DENY rules: - to: - operation: paths: ["/admin"] The following is another example of vulnerable policy that uses "ALLOW action + notPaths field" pattern: apiVersion: security.istio.io/v1beta1 kind: AuthorizationPolicy metadata: name: allow-path-not-admin spec: action: ALLOW rules: - to: - operation: notPaths: ["/admin"] Your cluster is not impacted by this vulnerability if: You don't have authorization policies.
- Check if your clusters are impacted Your cluster is impacted if it uses an in-cluster Cloud Service Mesh patch version earlier than: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 Your cluster is impacted if it uses a managed Cloud Service Mesh version earlier than: 1.21.6-asm.7 1.20.8-asm.59 1.19.10-asm.54 Mitigation For in-cluster Cloud Service Mesh, upgrade your cluster to one of the following patched versions: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 If you're using Cloud Service Mesh v1.24 or earlier, your release has reached end of life and is no longer supported.
- Mitigation If you are running standalone Cloud Service Mesh , upgrade your cluster to one of the following patched versions: If you're using Anthos Service Mesh 1.14, upgrade to v1.14.4-asm.2 If you're using Anthos Service Mesh 1.13, upgrade to v1.13.8-asm.4 If you're using Anthos Service Mesh 1.12, upgrade to v1.12.9-asm.3 If you are running managed Cloud Service Mesh , your system will be automatically updated within the next few days.
- Check if your clusters are impacted Your cluster is impacted if patch versions earlier than: 1.23.4-asm.1 1.22.7-asm.1 1.21.5-asm.17 1.20.8-asm.14 1.19.10-asm.24 Mitigation For in-cluster Cloud Service Mesh, Upgrade your cluster to one of the following patched versions: 1.23.4-asm.1 1.22.7-asm.1 1.21.5-asm.17 If you're using Cloud Service Mesh v1.20 or earlier, your release has reached end of life and is no longer supported.

### Cloud Service Mesh by example: Authorization \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the following command, REVISION LABEL is the value of the istiod revision label that you noted in the previous step. kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Deploy the example gateway in the anthos-service-mesh-samples repository: kubectl apply -n asm-ingress \ -f docs/shared/asm-ingress-gateway Expected output: serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Deploy the Online Boutique sample application If you haven't, set the current context for kubectl to the cluster: gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create the namespace for the sample application: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies: kubectl label namespace onlineboutique \ istio.io/rev- istio-injection=enabled --overwrite Deploy the sample app, the VirtualService for the frontend, and service accounts for the workloads.
- In Cloud Shell, delete the project: gcloud projects delete PROJECT ID Delete the resources If you want to keep your cluster and remove the Online Boutique sample: Delete the application namespaces: kubectl delete namespace onlineboutique Expected output: namespace "onlineboutique" deleted Delete the Ingress Gateway namespace: kubectl delete namespace asm-ingress Expected output: namespace "asm-ingress" deleted If you want to prevent additional charges, delete the cluster: gcloud container clusters delete CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION What's next For a general guide on configuring PeerAuthentication policies, see Configuring transport security .
- There are various supported setup methods: Fleet API and a managed control plane on Google Cloud asmcli and an unmanaged, in-cluster control plane off Google Cloud Clone the repo: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples cd anthos-service-mesh-samples Deploy an ingress gateway Set the current context for kubectl to the cluster: Note: Use --region instead of --zone , if the cluster is a regional cluster. gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create a namespace for your ingress gateway: kubectl create namespace asm-ingress Enable the namespace for injection.
- With Cloud Service Mesh, AuthorizationPolicies allow for workload-to-workload communication in your mesh to be controlled for improved security and access.

