---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.765Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "In-cluster Anthos Service Mesh 1.16"
feature_slug: "in-cluster-anthos-service-mesh-1-16"
latest_feature_date: "2023-12-12"
deprecation_date: "2023-12-12"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster"
keywords:
  - "in"
  - "cluster"
  - "anthos"
  - "mesh"
  - "16"
  - "version"
  - "is"
  - "supported"
---

# In-cluster Anthos Service Mesh 1.16

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

In-cluster Anthos Service Mesh version 1.16 is a supported service mesh version; In-cluster Anthos Service Mesh version 1.16 is a supported service mesh version; deprecated on 2023-12-12.

## Extended Definition

In-cluster Anthos Service Mesh version 1.16 is a supported service mesh version; In-cluster Anthos Service Mesh version 1.16 is a supported service mesh version; deprecated on 2023-12-12.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)

## Supporting Pages

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certificate authority (CA) support Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Service Mesh certificate authority Certificate Authority Service Istio CA (previously known as Citadel) Plug in your own CA certificates Supported by CA service and Istio CA Supported by CA service and Istio CA Supported by Istio CA Cloud Service Mesh security features In addition to supporting Istio security features, Cloud Service Mesh provides even more capabilities to help you secure your applications.
- Cloud Service Mesh is supported on the following cluster types: Amazon EKS clusters Microsoft AKS clusters In the following tables: – indicates the feature is enabled by default. – indicates the feature is supported for the platform and can be enabled, as described in Enabling optional features or the feature guide linked in the feature table.
- Network Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises GKE on AWS GKE on Azure Attached clusters Single network Multi-network Notes: For attached clusters, only multi-cluster meshes spanning a single platform (Microsoft AKS, Amazon EKS) are supported at this time.
- User interface Feature GKE clusters on Google Cloud Google Distributed Cloud Other GKE Enterprise clusters Cloud Service Mesh dashboards in the Google Cloud console Cloud Monitoring Cloud Logging Cloud Trace Note: On-premises clusters require GKE Enterprise version 1.11 or later.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can see the version suffixed in the name of your istiod-asm- Service by running kubectl get service --context=cluster-with-in-cluster-asm --namespace=istio-system Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-in-cluster-asm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: serviceaccount/asm-ingressgateway created service/asm-ingressgateway created deployment.apps/asm-ingressgateway created gateway.networking.istio.io/asm-ingressgateway created Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace onlineboutique Use the istio.io/rev=asm-1285-9 label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9 The output is similar to: namespace/onlineboutique labeled Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the ingress gateway, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway inside the ServiceEntry resource: sed -i "s/1.2.3.4/ ${ INGRESS IP OF CLUSTER WITH MANAGED ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the ServiceEntry to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the VirtualService to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service-in-cluster-asm.yaml Visit the IP address of the ingress gateway of the cluster with in-cluster Cloud Service Mesh, in your web browser: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service Refresh the Online Boutique homepage multiple times, and check the footer of the page each time.

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check if your clusters are impacted Your clusters are impacted if they use Cloud Service Mesh patch versions earlier than: 1.16.4 1.15.7 1.14.6 Mitigation Upgrade your cluster to one of the following patched versions: 1.16.4-asm.2 1.15.7-asm.1 1.14.6-asm.11 If you're using Cloud Service Mesh v1.13 or below, your release has reached end of life and is no longer supported.
- Check if your clusters are impacted Your clusters are impacted if they use Cloud Service Mesh patch versions earlier than: 1.16.4 1.15.7 1.14.6 Mitigation Upgrade your cluster to one of the following patched versions: 1.16.4-asm.2 1.15.7-asm.1 1.14.6-asm.11 If you're using Cloud Service Mesh v1.13 or below, your release has reached end of life and is no longer supported.
- Check if your clusters are impacted Your clusters are impacted if they use Cloud Service Mesh patch versions earlier than: 1.16.4 1.15.7 1.14.6 Mitigation Upgrade your cluster to one of the following patched versions: 1.16.4-asm.2 1.15.7-asm.1 1.14.6-asm.11 If you're using Cloud Service Mesh v1.13 or below, your release has reached end of life and is no longer supported.
- Check if your clusters are impacted Your clusters are impacted if they use Cloud Service Mesh patch versions earlier than: 1.16.4 1.15.7 1.14.6 Mitigation Upgrade your cluster to one of the following patched versions: 1.16.4-asm.2 1.15.7-asm.1 1.14.6-asm.11 If you're using Cloud Service Mesh v1.13 or below, your release has reached end of life and is no longer supported.

### "Enable optional features on an in-cluster control plane \_|\_ Cloud Service\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: apiVersion: install . istio . io / v1alpha1 kind: IstioOperator spec: hub: { private registry url } The following is a list of images for Cloud Service Mesh that you need to mirror to the custom container registry: Install-cni - gke.gcr.io/asm/install-cni:1.28.5-asm.9 Managed Data Plane - gke.gcr.io/asm/mdp:1.28.5-asm.9 Pilot - gke.gcr.io/asm/pilot:1.28.5-asm.9 Proxyv2 - gke.gcr.io/asm/proxyv2:1.28.5-asm.9 Note: If you use a Canonical Service , then you also need to mirror the custom container registries gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 and gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 .
- Cloud Trace Cloud Trace is available with Cloud Service Mesh installations on the following platforms: GKE on Google Cloud GKE Enterprise clusters on-premises if you install with Cloud Service Mesh certificate authority --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : meshConfig : enableTracing : true values : global : proxy : tracer : stackdriver For more information, see Accessing traces .
- Enable CNI on GKE --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : components : cni : enabled : true namespace : kube-system values : cni : cniBinDir : /home/kubernetes/bin excludeNamespaces : - istio-system - kube-system Enable CNI on-premises --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : components : cni : enabled : true namespace : kube-system values : cni : cniBinDir : /opt/cni/bin excludeNamespaces : - istio-system - kube-system - gke-system Enable Traffic logs for off-Google Cloud Installing Cloud Service Mesh with Istio CA outside of Google Cloud reports metrics to Prometheus by default.
- For more information see Global Mesh Options . --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : meshConfig : defaultConfig : terminationDrainDuration : 30s Enable Access logs --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : meshConfig : accessLogFile : "/dev/stdout" For more information, see Enable Envoy's access logging .

