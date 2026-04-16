---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.856Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Multi-cluster mesh"
feature_slug: "multi-cluster-mesh"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster"
keywords:
  - "multi"
  - "cluster"
  - "mesh"
  - "anthos"
  - "supports"
  - "meshes"
  - "on"
  - "gke"
---

# Multi-cluster mesh

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Anthos Service Mesh supports multi-cluster meshes on GKE in beta; Anthos Service Mesh supports multi-cluster meshes on GKE in beta.

## Extended Definition

Anthos Service Mesh supports multi-cluster meshes on GKE in beta; Anthos Service Mesh supports multi-cluster meshes on GKE in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that if you plan to register multiple clusters, enabling the Cloud Service Mesh fleet feature happens at the fleet-level so you only have to run this command once. gcloud container fleet mesh enable --project FLEET PROJECT ID Register clusters to a fleet Register a GKE cluster using fleet workload identity.
- Cloud Service Mesh can use multiple GKE clusters in a single-project single-network environment or a multi-project single-network environment.
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.
- Grant service accounts in the fleet project permission to access the network project: gcloud projects add-iam-policy-binding " NETWORK PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent If your cluster's project differs from your fleet host project, you must allow Cloud Service Mesh service accounts in the fleet project to access the cluster project, and enable required APIs on the cluster project.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises GKE on AWS GKE on Azure Attached clusters Single network Multi-network Notes: For attached clusters, only multi-cluster meshes spanning a single platform (Microsoft AKS, Amazon EKS) are supported at this time.
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Certificate authority (CA) support Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Service Mesh certificate authority Certificate Authority Service Istio CA (previously known as Citadel) Plug in your own CA certificates Supported by CA service and Istio CA Supported by CA service and Istio CA Supported by Istio CA Cloud Service Mesh security features In addition to supporting Istio security features, Cloud Service Mesh provides even more capabilities to help you secure your applications.
- Feature GKE clusters on Google Cloud Distributed Cloud GKE Multi-Cloud Other GKE Enterprise clusters IAP integration End-user authentication Audit policies (preview) Dry-run mode Denial logging Authorization policy Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Authorization v1beta1 policy Path templating Authentication policy Peer authentication Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Auto-mTLS mTLS PERMISSIVE mode For information on enabling mTLS STRICT mode, see Configuring transport security .

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway inside the ServiceEntry resource: sed -i "s/1.2.3.4/ ${ INGRESS IP OF CLUSTER WITH MANAGED ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the ServiceEntry to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the VirtualService to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service-in-cluster-asm.yaml Visit the IP address of the ingress gateway of the cluster with in-cluster Cloud Service Mesh, in your web browser: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service Refresh the Online Boutique homepage multiple times, and check the footer of the page each time.
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace onlineboutique Use the istio.io/rev=asm-1285-9 label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9 The output is similar to: namespace/onlineboutique labeled Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the ingress gateway, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace asm-ingress Use the istio.io/rev=asm-managed label to add the asm-ingress namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace asm-ingress 'istio.io/rev=asm-managed' Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: namespace/asm-ingress configured serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .

### "Enable optional features on an in-cluster control plane \_|\_ Cloud Service\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Trace Cloud Trace is available with Cloud Service Mesh installations on the following platforms: GKE on Google Cloud GKE Enterprise clusters on-premises if you install with Cloud Service Mesh certificate authority --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : meshConfig : enableTracing : true values : global : proxy : tracer : stackdriver For more information, see Accessing traces .
- Pull the Cloud Service Mesh canonical service images: docker pull gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 docker pull gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 Tag the images with your private registry URL: docker tag gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 \ ${PRIVATE REGISTRY URL}/gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 docker tag gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 \ ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 Push the tagged images to your private registry: docker push ${PRIVATE REGISTRY URL}/gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 docker push ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 If you can pull the tagged images from your private registry, then the procedure was successful.
- Enable CNI on GKE --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : components : cni : enabled : true namespace : kube-system values : cni : cniBinDir : /home/kubernetes/bin excludeNamespaces : - istio-system - kube-system Enable CNI on-premises --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : components : cni : enabled : true namespace : kube-system values : cni : cniBinDir : /opt/cni/bin excludeNamespaces : - istio-system - kube-system - gke-system Enable Traffic logs for off-Google Cloud Installing Cloud Service Mesh with Istio CA outside of Google Cloud reports metrics to Prometheus by default.
- For example: apiVersion: install . istio . io / v1alpha1 kind: IstioOperator spec: hub: { private registry url } The following is a list of images for Cloud Service Mesh that you need to mirror to the custom container registry: Install-cni - gke.gcr.io/asm/install-cni:1.28.5-asm.9 Managed Data Plane - gke.gcr.io/asm/mdp:1.28.5-asm.9 Pilot - gke.gcr.io/asm/pilot:1.28.5-asm.9 Proxyv2 - gke.gcr.io/asm/proxyv2:1.28.5-asm.9 Note: If you use a Canonical Service , then you also need to mirror the custom container registries gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 and gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 .

