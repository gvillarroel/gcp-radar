---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.427Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multi-cluster Ingress"
feature_slug: "multi-cluster-ingress"
latest_feature_date: "2020-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "deploy"
  - "native"
  - "provides"
  - "ingress"
  - "cluster"
  - "multi"
---

# Multi-cluster Ingress

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Provides a Kubernetes-native way to deploy Ingress resources across multiple clusters and regions.

## Extended Definition

Provides a Kubernetes-native way to deploy Ingress resources across multiple clusters and regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The following manifest describes a Deployment with version 2.0 of the same web application: apiVersion : apps/v1 kind : Deployment metadata : name : web2 namespace : default spec : selector : matchLabels : run : web2 template : metadata : labels : run : web2 spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0 imagePullPolicy : IfNotPresent name : web2 ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment-v2.yaml The following manifest describes a Service that exposes web2 internally to the cluster on a NodePort Service called web2 : apiVersion : v1 kind : Service metadata : name : web2 namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web2 type : NodePort Apply the resource to the cluster: kubectl apply -f web-service-v2.yaml The following manifest describes an Ingress resource that: routes the requests with path starting with /v2/ to the web2 Service routes all other requests to the web Service apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : fanout-ingress spec : rules : - http : paths : - path : / pathType : ImplementationSpecific backend : service : name : web port : number : 8080 - path : /v2/ pathType : ImplementationSpecific backend : service : name : web2 port : number : 8080 Apply the resource to the cluster: kubectl create -f fanout-ingress.yaml After the Ingress is deployed, run kubectl get ingress fanout-ingress to find out the public IP address of the cluster.
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- If you followed "Option 2" to create a new static IP address, then run the following command to delete the static IP address: gcloud compute addresses delete web-static-ip --global Delete the cluster: This step deletes the compute nodes of your container cluster and other resources such as the Deployments in the cluster: gcloud container clusters delete loadbalancedcluster What's next Check out the Ingress user guide for details about Ingress features.
- The following manifest describes an Ingress resource that directs traffic to your web Service: apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress spec : defaultBackend : service : name : web port : number : 8080 Apply the resource to the cluster: kubectl apply -f basic-ingress.yaml After you deploy this manifest, Kubernetes creates an Ingress resource on your cluster.

### "Modern CI/CD with GKE: Apply the developer workflow \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow)
- Source ID: `site-docs-reference-required-5`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Approve the release to prod2 cluster: Run the following command to fetch the name of the rollout pending approval and save it in an environment variable: export ROLLOUT = $( gcloud deploy targets describe prod2 --region = us-central1 --format = "json" jq -r '."Pending Approvals"[]' awk -F '/' '{print $NF}' ) Approve the release: gcloud deploy rollouts approve $ROLLOUT --delivery-pipeline = sample --region = us-central1 --release = $RELEASE --quiet Note: Cloud Deploy lets you do parallel deployments in multiple GKE clusters so you can deploy to multiple production clusters simultaneously.
- When one of the GKE clusters is unhealthy and the application instance running on it can't be reached, the multi-cluster ingress keeps sending the traffic to the healthy instance of the application running on the other GKE cluster.
- When you send request to the IP address of the load balancer, Multi Cluster Ingress forwards the request to one of the two instances of the application running in two different GKE clusters.
- When the application is accessed through that IP, multi-cluster ingress routes it to one of the two instances of the application running on two different GKE clusters.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- For instructions, refer to the following hardening guides: GKE Standard GKE on VMware Google Distributed Cloud Virtual for Bare Metal Update 2022-03-15: GKE on AWS Update 2022-03-15: GKE on Azure Low GCP-2022-008 Published: 2022-02-23 Updated: 2022-04-28 Reference: CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , CVE-2022-21656 GKE Description Severity The Envoy project recently discovered a set of vulnerabilities, CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , and CVE-2022-21656 which may impact GKE clusters using Anthos Service Mesh , Istio-on-GKE , or custom Istio deployments.
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- This issue affects the following GKE versions: 1.18.19-gke.1400 to 1.18.20-gke.5100 (exclusive) 1.19.10-gke.700 to 1.19.14-gke.300 (exclusive) 1.20.6-gke.700 to 1.20.9-gke.900 (exclusive) 1.21 to 1.21.1-gke.2700 (exclusive) If you do not configure Google Cloud Armor on your Ingress resources via the BackendConfig , then this issue does not affect your clusters.

