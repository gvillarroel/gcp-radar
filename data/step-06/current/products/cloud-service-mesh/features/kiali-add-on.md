---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.822Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Kiali add-on"
feature_slug: "kiali-add-on"
latest_feature_date: "2020-12-16"
deprecation_date: "2020-12-16"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/deploy-demo-telemetry-addons"
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/onlineboutique-install-kpt"
keywords:
  - "kiali"
  - "add"
  - "on"
  - "the"
  - "provided"
  - "third"
  - "party"
  - "mesh"
---

# Kiali add-on

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

The Kiali add-on provided third-party service mesh observability integration for Anthos Service Mesh profiles; The Kiali add-on provided third-party service mesh observability integration for Anthos Service Mesh profiles; deprecated on 2020-12-16.

## Extended Definition

The Kiali add-on provided third-party service mesh observability integration for Anthos Service Mesh profiles; The Kiali add-on provided third-party service mesh observability integration for Anthos Service Mesh profiles; deprecated on 2020-12-16.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/deploy-demo-telemetry-addons](https://docs.cloud.google.com/service-mesh/docs/deploy-demo-telemetry-addons)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/onlineboutique-install-kpt](https://docs.cloud.google.com/service-mesh/docs/onlineboutique-install-kpt)

## Supporting Pages

### "Deploying a demo version of the telemetry add-ons \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/deploy-demo-telemetry-addons](https://docs.cloud.google.com/service-mesh/docs/deploy-demo-telemetry-addons)
- Source ID: `site-docs-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the repo: git clone -b release-1.10 https://github.com/istio/istio --depth 1 Deploy an instance of the add-ons: To deploy Grafana: kubectl apply -f istio/samples/addons/grafana.yaml To deploy Kiali: kubectl apply -f istio/samples/addons/kiali.yaml To deploy Prometheus: kubectl apply -f istio/samples/addons/prometheus.yaml If you need to delete the add-ons, you can do so with the kubectl delete -f command.
- Important: For production environments, we recommend that you follow the applicable third-party documentation to ensure that you stay up to date with the latest versions and best practices for these applications.
- Deploying a demo version of the telemetry add-ons Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Although these YAML files make it easy for you to deploy an instance of Prometheus, Grafana and Kiali to your cluster, these files aren't meant to take the place of installing and configuring the applications yourself.

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.
- Grant service accounts in the fleet project permission to access the network project: gcloud projects add-iam-policy-binding " NETWORK PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent If your cluster's project differs from your fleet host project, you must allow Cloud Service Mesh service accounts in the fleet project to access the cluster project, and enable required APIs on the cluster project.
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Replace CLUSTER PROJECT ID with the unique identifier of your cluster project.
- Grant service accounts in the fleet project permission to access the network project: gcloud projects add-iam-policy-binding " NETWORK PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Cluster-level settings When you're ready to create clusters to use with Cloud Service Mesh, create and register them in a single step with Google Cloud CLI to use the default configuration.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Proxy request logging Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Traffic logs Access logs Tracing Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Trace Jaeger tracing (allows use of customer-managed Jaeger) Compatible Compatible Compatible Zipkin tracing (allows use of customer-managed Zipkin) Compatible Compatible Compatible Note: You can configure third-party telemetry products (such as Jaeger, Zipkin, and Grafana), but we cannot guarantee future compatibility and Cloud Support cannot provide help managing them.
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Certificate authority (CA) support Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Service Mesh certificate authority Certificate Authority Service Istio CA (previously known as Citadel) Plug in your own CA certificates Supported by CA service and Istio CA Supported by CA service and Istio CA Supported by Istio CA Cloud Service Mesh security features In addition to supporting Istio security features, Cloud Service Mesh provides even more capabilities to help you secure your applications.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.

### "Deploying the Online Boutique sample application \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onlineboutique-install-kpt](https://docs.cloud.google.com/service-mesh/docs/onlineboutique-install-kpt)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Visit the application on your browser to confirm installation: http:// EXTERNAL IP / No ingress gateway If you did not deploy an ingress gateway or choose to expose the application using a Kubernetes Service, do the following steps: Deploy a service of type LoadBalancer to expose the frontend service kubectl apply -f frontend-external.yaml Find the external IP address of the frontend-external service: kubectl get service frontend-external -n frontend Visit the application on your browser to confirm installation: http:// EXTERNAL IP / You can explore the Cloud Service Mesh observability features in the Google Cloud console.
- Install kpt if you haven't already: gcloud components install kpt Download the sample using kpt : kpt pkg get \ https : //github.com/GoogleCloudPlatform/anthos-service-mesh-packages.git/samples/online-boutique \ online - boutique Expected output Package "online-boutique": Fetching https://github.com/GoogleCloudPlatform/anthos-service-mesh-packages@main From https://github.com/GoogleCloudPlatform/anthos-service-mesh-packages branch main -> FETCH HEAD Adding package "samples/online-boutique".
- Create the service accounts and deployments: kubectl apply -f kubernetes-manifests/deployments Expected output: serviceaccount/ad created deployment.apps/adservice created serviceaccount/cart created deployment.apps/cartservice created serviceaccount/checkout created deployment.apps/checkoutservice created serviceaccount/currency created deployment.apps/currencyservice created serviceaccount/email created deployment.apps/emailservice created serviceaccount/frontend created deployment.apps/frontend created serviceaccount/loadgenerator created deployment.apps/loadgenerator created serviceaccount/payment created deployment.apps/paymentservice created serviceaccount/product-catalog created deployment.apps/productcatalogservice created serviceaccount/recommendation created deployment.apps/recommendationservice created serviceaccount/shipping created deployment.apps/shippingservice created Create the services: kubectl apply -f kubernetes-manifests/services Expected output: service/adservice created service/cartservice created service/checkoutservice created service/currencyservice created service/emailservice created service/frontend created service/frontend-external created service/paymentservice created service/productcatalogservice created service/recommendationservice created service/shippingservice created Create the service entries: kubectl apply -f istio-manifests/allow-egress-googleapis.yaml Expected output: serviceentry.networking.istio.io/allow-egress-googleapis created serviceentry.networking.istio.io/allow-egress-google-metadata created Enabling sidecar auto-injection Apply the default injection label to the application namespaces. for ns in ad cart checkout currency email frontend loadgenerator \ payment product-catalog recommendation shipping ; do kubectl label namespace $ns istio-injection = enabled --overwrite done ; Expected output: namespace/ad labeled namespace/cart labeled namespace/checkout labeled namespace/currency labeled namespace/email labeled namespace/frontend labeled namespace/loadgenerator labeled namespace/payment labeled namespace/product-catalog labeled namespace/recommendation labeled namespace/shipping labeled If you are using managed Cloud Service Mesh and deployed the optional managed data plane , annotate the application namespaces as follows: for ns in ad cart checkout currency email frontend loadgenerator \ payment product-catalog recommendation shipping ; do kubectl annotate --overwrite namespace $ns mesh.cloud.google.com/proxy = '{"managed":"true"}' done ; Restart the pods: for ns in ad cart checkout currency email frontend loadgenerator \ payment product-catalog recommendation shipping ; do kubectl rollout restart deployment -n ${ ns } done ; Expected output: deployment.apps/adservice restarted deployment.apps/cartservice restarted deployment.apps/checkoutservice restarted deployment.apps/currencyservice restarted deployment.apps/emailservice restarted deployment.apps/frontend restarted deployment.apps/loadgenerator restarted deployment.apps/paymentservice restarted deployment.apps/productcatalogservice restarted deployment.apps/recommendationservice restarted deployment.apps/shippingservice restarted Exposing and accessing the application The way you expose the application outside the mesh depends on whether you deployed an ingress gateway.
- Deploy a Gateway and VirtualService for the frontend service kubectl apply -f istio-manifests/frontend-gateway.yaml Expected output: gateway.networking.istio.io/frontend-gateway created virtualservice.networking.istio.io/frontend-ingress created Get the external IP address of the ingress gateway .

