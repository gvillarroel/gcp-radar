---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.410Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ingress HTTPS redirects"
feature_slug: "ingress-https-redirects"
latest_feature_date: "2020-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale"
keywords:
  - "redirecting"
  - "redirects"
  - "https"
  - "same"
  - "requests"
  - "http"
  - "ingress"
  - "adds"
---

# Ingress HTTPS redirects

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Adds support for redirecting HTTP requests to HTTPS on the same external load balancer IP.

## Extended Definition

Adds support for redirecting HTTP requests to HTTPS on the same external load balancer IP.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following manifest describes a Deployment with version 2.0 of the same web application: apiVersion : apps/v1 kind : Deployment metadata : name : web2 namespace : default spec : selector : matchLabels : run : web2 template : metadata : labels : run : web2 spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0 imagePullPolicy : IfNotPresent name : web2 ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment-v2.yaml The following manifest describes a Service that exposes web2 internally to the cluster on a NodePort Service called web2 : apiVersion : v1 kind : Service metadata : name : web2 namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web2 type : NodePort Apply the resource to the cluster: kubectl apply -f web-service-v2.yaml The following manifest describes an Ingress resource that: routes the requests with path starting with /v2/ to the web2 Service routes all other requests to the web Service apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : fanout-ingress spec : rules : - http : paths : - path : / pathType : ImplementationSpecific backend : service : name : web port : number : 8080 - path : /v2/ pathType : ImplementationSpecific backend : service : name : web2 port : number : 8080 Apply the resource to the cluster: kubectl create -f fanout-ingress.yaml After the Ingress is deployed, run kubectl get ingress fanout-ingress to find out the public IP address of the cluster.
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- Then visit the IP address to see that both applications are reachable on the same load balancer: Visit http://<IP ADDRESS>/ and note that the response contains Version: 1.0.0 (as the request is routed to the web Service) Visit http://<IP ADDRESS>/v2/ and note that the response contains Version: 2.0.0 (as the request is routed to the web2 Service) The only supported wildcard character for the path field of an Ingress is the character.
- HTTPS termination : You can configure the Ingress to terminate the HTTPS traffic using the Cloud Load Balancer.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- CVE-2023-27491: Attackers can send specifically crafted HTTP/2 or HTTP/3 requests to trigger parsing errors on HTTP/1 upstream service.
- CVE-2023-27491: Attackers can send specifically crafted HTTP/2 or HTTP/3 requests to trigger parsing errors on HTTP/1 upstream service.
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- Upgrade your Container-Optimized OS node pools to one of the following versions or later: 1.27.5-gke.200 1.28.2-gke.1157000 Upgrade your Ubuntu node pools to one of the following versions or later: 1.25.14-gke.1421000 1.26.9-gke.1437000 1.27.6-gke.1248000 1.28.2-gke.1157000 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.

### "Run full-stack workloads at scale on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the adapter: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter.yaml Configure the adapter to use Workload Identity Federation for GKE to get metrics: Configure the IAM service account: gcloud projects add-iam-policy-binding PROJECT ID \ --member "serviceAccount:bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com" \ --role roles/monitoring.viewer gcloud iam service-accounts add-iam-policy-binding bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com \ --role roles/iam.workloadIdentityUser \ --member "serviceAccount: PROJECT ID .svc.id.goog[custom-metrics/custom-metrics-stackdriver-adapter]" Annotate the Kubernetes service account that the adapter uses: kubectl annotate serviceaccount custom-metrics-stackdriver-adapter \ --namespace = custom-metrics \ iam.gke.io/gcp-service-account = bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com Restart the adapter Deployment to propagate the changes: kubectl rollout restart deployment custom-metrics-stackdriver-adapter \ --namespace = custom-metrics Configure autoscaling for the database When you deployed Bank of Anthos and PostgreSQL earlier in this tutorial,, you deployed the database as a StatefulSet with one primary read/write replica to handle all incoming SQL statements.
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : frontend spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : frontend minReplicas : 5 maxReplicas : 25 metrics : - type : External external : metric : name : loadbalancing.googleapis.com https request count selector : matchLabels : resource.labels.forwarding rule name : FORWARDING RULE NAME target : type : AverageValue averageValue : "5" This manifest uses the following fields: spec.scaleTargetRef : The Kubernetes resource to scale. spec.minReplicas : The minimum number of replicas, which is 5 in this sample. spec.maxReplicas : The maximum number of replicas, which is 25 in this sample. spec.metrics. : The metric to use.
- To delete all the resources in this tutorial, do the following: Delete the sample Kubernetes resources: kubectl delete \ -f extras/postgres-hpa/loadgenerator.yaml \ -f extras/postgres-hpa/hpa \ -f extras/postgres-hpa/kubernetes-manifests \ -f extras/jwt/jwt-secret.yaml \ -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter.yaml Delete the PostgreSQL database: helm uninstall accounts-db kubectl delete pvc -l "app.kubernetes.io/instance=accounts-db" kubectl delete configmaps initdb Delete the GKE cluster and the IAM service account: gcloud iam service-accounts delete "bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com" --quiet gcloud container clusters delete "bank-of-anthos" --location = "us-central1" --quiet Delete the project Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Deploy the database schema and a data definition language (DDL) script: kubectl create configmap initdb \ --from-file = src/accounts/accounts-db/initdb/0-accounts-schema.sql \ --from-file = src/accounts/accounts-db/initdb/1-load-testdata.sql \ --from-file = src/ledger/ledger-db/initdb/0 init tables.sql \ --from-file = src/ledger/ledger-db/initdb/1 create transactions.sh Install PostgreSQL using the sample Helm chart: helm repo add bitnami https://charts.bitnami.com/bitnami helm install accounts-db bitnami/postgresql-ha \ --version 10 .0.1 \ --values extras/postgres-hpa/helm-postgres-ha/values.yaml \ --set = "postgresql.initdbScriptsCM=initdb" \ --set = "postgresql.replicaCount=1" \ --wait This command creates a PostgreSQL cluster with a starting replica count of 1.

