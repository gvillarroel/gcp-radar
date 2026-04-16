---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.839Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Apigee Operator namespace placement"
feature_slug: "apigee-operator-namespace-placement"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "namespace"
  - "placement"
  - "moves"
  - "operator"
  - "same"
  - "kubernetes"
---

# Apigee Operator namespace placement

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Moves the Apigee Operator to run in the same Kubernetes namespace as other hybrid components instead of the apigee-system namespace.

## Extended Definition

Moves the Apigee Operator to run in the same Kubernetes namespace as other hybrid components instead of the apigee-system namespace.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### "Install the Apigee Operator for Kubernetes for Apigee hybrid \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create and download the $PROJECT ID -apigee-apim-gsa.json key file with the following command: gcloud iam service-accounts keys create $PROJECT ID-apigee-apim-gsa.json \ --iam-account=apigee-apim-gsa@$PROJECT ID.iam.gserviceaccount.com --project=$PROJECT ID Verify that the file downloaded correctly: ls $PROJECT ID-apigee-apim-gsa.json Install the Apigee Operator for Kubernetes Install the Kubernetes custom resources definitions (CRDs) and Apigee Operator for Kubernetes: Create a namespace for the Apigee Operator for Kubernetes kubectl create namespace apim Install the Apigee Operator for Kubernetes custom resource definitions (CRDs): helm install apigee-apim-crds -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-crds \ --version 1.1.0 \ --atomic Install the Apigee Operator for Kubernetes: helm install apigee-apim-operator -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-helm \ --version 1.1.0 \ --set serviceAccount=apigee-apim-gsa@$PROJECT ID.iam.gserviceaccount.com \ --set apigeeOrg=$APIGEE ORG \ --set apigeeEnv= ENV NAME \ --set-file serviceAccountKeyFileContent=$PROJECT ID-apigee-apim-gsa-key.json \ --atomic Where ENV NAME is the name of the Apigee Hybrid environment in which you want to install the Apigee Operator for Kubernetes.
- Confirm that the installation completed successfully: helm list -n apim The output should look similar to the following: NAME NAMESPACE REVISION UPDATED STATUS CHART APP VERSION apigee-apim-crds apim 1 2025-09-01 00:17:03.399810627 +0000 UTC deployed apigee-apim-operator-crds-1.1.0 1.1.0 apigee-apim-operator apim 1 2025-09-01 00:15:00.362829981 +0000 UTC deployed apigee-apim-operator-helm-1.1.0 1.1.0 Confirm that the Kubernetes service account (KSA) was created with the required annotation: kubectl describe serviceaccounts apim-ksa -n apim The output should look similar to the following: Name: apim-ksa Namespace: apim ...
- You can retrieve the Gateway IP address using the following command, where GATEWAY NAME is the name of the Gateway: kubectl get gateways.gateway.networking.k8s.io GATEWAY NAME -o=jsonpath="{.status.addresses.value}" For example: curl http://34.54.193.72/get -H "Host: example.httpbin.com" The response should appear similar to the following: { "args": {}, "headers": { "Accept": " / ", "Host": "http://example.httpbin.com", "User-Agent": "curl/8.7.1", "X-Cloud-Trace-Context": "2bb8a80e29e80662ff9cb89971c447d9/13083106619927322701" }, "origin": "67.164.1.10,34.54.193.72", "url": "http://example.httpbin.com/get" } Install the Apigee Operator for Kubernetes This procedure describes the steps required to install and configure the Apigee Operator for Kubernetes.
- Before you begin Before you begin, make sure that you have the following: Required roles For the permissions that you need to set up the resources required to install and use the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage service accounts : Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage Apigee resources : Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Apigee Operator for Kubernetes overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Benefits The Apigee Operator for Kubernetes can benefit your organization by providing: Simplified API Management : The APIM Operator allows API producers to manage and secure their APIs using Kubernetes resource definitions.
- Integration with Kubernetes : The operator integrates with native Kubernetes concepts such as Custom Resource Definitions (CRDs) and Helm charts, providing a seamless experience for cloud-native developers.
- How Apigee Operator for Kubernetes works The Apigee Operator for Kubernetes uses the GKE gateway of an Application Load Balancer , along with a traffic extension to act as a policy enforcement point (PEP).
- It is especially useful for cloud-native developers who are familiar with Kubernetes and want to use the same tools and workflows for managing their APIs that they use for other Kubernetes resources.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Adding multiple hybrid orgs to a cluster . namespace Basic Introduced in version: 1.0.0 Default value: apigee Chart: apigee-datastore , apigee-env , apigee-ingress-manager , apigee-operator , apigee-org , apigee-redis , apigee-telemetry , apigee-virtualhost The namespace of your Kubernetes cluster where the Apigee components will be installed. org Basic Introduced in version: 1.0.0 Default value: None Chart: apigee-operator , apigee-telemetry , apigee-org , apigee-env , apigee-virtualhost Required The hybrid-enabled organization that was provisioned for you by Apigee during the hybrid installation.
- Tip: Consider using hub to set a private repository URL for all components instead of configuring them individually. ao.resources.limits.cpu Advanced Introduced in version: 1.2.0 Default value: 250m Chart: apigee-operator , apigee-ingress-manager The CPU limit for the resource in a Kubernetes container, in millicores. ao.resources.limits.memory Advanced Introduced in version: 1.2.0 Default value: 256Mi Chart: apigee-operator , apigee-ingress-manager The memory limit for the resource in a Kubernetes container, in mebibytes. ao.resources.requests.cpu Advanced Introduced in version: 1.2.0 Default value: 250m Chart: apigee-operator , apigee-ingress-manager The CPU needed for normal operation of the resource in a Kubernetes container, in millicores. ao.resources.requests.memory Advanced Introduced in version: 1.2.0 Default value: 256Mi Chart: apigee-operator , apigee-ingress-manager The memory needed for normal operation of the resource in a Kubernetes container, in mebibytes. ao.tolerations.effect Advanced Introduced in version: 1.10.1 Default value: None Chart: apigee-operator Required to use the Taints and Tolerations feature of Kubernetes . effect specifies the effect that matching a toleration with a taint will have.
- Tip: Consider using hub to set a private repository URL for all components instead of configuring them individually. kubeRBACProxy.resources.limits.cpu Advanced Introduced in version: 1.11.0 Default value: 500m Chart: apigee-operator , apigee-ingress-manager The CPU limit for the resource in a Kubernetes container, in millicores. kubeRBACProxy.resources.limits.memory Advanced Introduced in version: 1.11.0 Default value: 128Mi Chart: apigee-operator , apigee-ingress-manager The memory limit for the resource in a Kubernetes container, in mebibytes. kubeRBACProxy.resources.requests.cpu Advanced Introduced in version: 1.11.0 Default value: 5m Chart: apigee-operator , apigee-ingress-manager The CPU needed for normal operation of the resource in a Kubernetes container, in millicores. kubeRBACProxy.resources.requests.memory Advanced Introduced in version: 1.11.0 Default value: 64Mi Chart: apigee-operator , apigee-ingress-manager The memory needed for normal operation of the resource in a Kubernetes container, in mebibytes. logger Defines the service that manages operational logs.
- You can override image URL for components individualy with the following properties: ao.image.url apigeeIngressGateway.image.url cassandra.image.url cassandra.auth.image.url cassandra.backup.image.url cassandra.restore.image.url connectAgent.image.url guardrails.image.url ingressGateways[].image.url istiod.image.url kubeRBACProxy.image.url logger.image.url mart.image.url metrics.adapter.image.url metrics.prometheus.image.url metrics.sdSidecar.image.url mintTaskScheduler.image.url redis.image.url redis.envoy.image.url runtime.image.url synchronizer.image.url udca.image.url udca.fluentd.image.url watcher.image.url imagePullSecrets[].name Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-operator , apigee-redis , apigee-org , apigee-env Kubernetes secret name configured as docker-registry type; used to pull images from private repo. instanceID Basic Introduced in version: 1.3.0 Default value: None Chart: apigee-org Required A unique identifier for this installation.

