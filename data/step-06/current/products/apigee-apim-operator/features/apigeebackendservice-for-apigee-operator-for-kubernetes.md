---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:46:04.466Z"
product_name: "Apigee APIM Operator"
product_slug: "apigee-apim-operator"
feature_name: "ApigeeBackendService for Apigee Operator for Kubernetes"
feature_slug: "apigeebackendservice-for-apigee-operator-for-kubernetes"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "apigeebackendservice"
  - "generally"
  - "resource"
  - "kubernetes"
  - "available"
  - "became"
---

# ApigeeBackendService for Apigee Operator for Kubernetes

Product: Apigee APIM Operator
Coverage: MEDIUM

## Step 02 Summary

The ApigeeBackendService resource for the Apigee Operator for Kubernetes became generally available (GA), enabling integration with GKE Inference Gateway.

## Extended Definition

The ApigeeBackendService resource for the Apigee Operator for Kubernetes became generally available (GA), enabling integration with GKE Inference Gateway.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### Install the Apigee Operator for Kubernetes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up Service Account Credentials to connect to Google Cloud services: gcloud iam service-accounts create apigee-apim-gsa Grant the required roles and permissions to the service account you created using the following commands: Apigee Admin role : Required to create and manage Apigee resources. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/apigee.admin" Service extension admin role : Required to create and manage service extensions. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/networkservices.serviceExtensionsAdmin" Networking admin role : Required to manage access to Apigee using service extensions. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/compute.networkAdmin" Load balancer admin role : Required to manage access between network endpoint groups (NEGs) and backend services. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/compute.loadBalancerAdmin" gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/iam.workloadIdentityUser" Create a workload identity The helm installation of the Apigee Operator for Kubernetes in the next step creates a required Kubernetes service account (KSA) named apim-ksa in the apim namespace.
- Install Custom Resource Definitions (CRDs) and Apigee Operator for Kubernetes Install the Kubernetes Custom Resource Definitions (CRDs) and Apigee Operator for Kubernetes: Create a namespace for the Apigee Operator for Kubernetes: kubectl create ns apim Install the Apigee Operator for Kubernetes CRDs: helm install apigee-apim-crds -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-crds \ --version 1 .1.1 \ --atomic Install the Apigee Operator for Kubernetes: helm install apigee-apim-operator -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-helm \ --version 1 .1.1 \ --set projectId = $PROJECT ID \ --set serviceAccount = apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com \ --set apigeeOrg = $PROJECT ID \ --set generateEnv = ENV GENERATION MODE \ --atomic Replace ENV GENERATION MODE with TRUE if you want the operator to create a new Apigee environment when the Apigee Operator for Kubernetes is installed.
- Required roles To get the permissions that you need to install the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage the GKE cluster: Container Admin ( roles/container.admin ) Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) Create and manage Apigee resources: Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When created, the KSA contains the annotation required to associate with a workload identity used by the Apigee Operator for Kubernetes to access required Apigee and Service Networking resources.

### Apigee Operator for Kubernetes: Before you begin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to set up the resources required to install and use the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage the Google Kubernetes Engine (GKE) cluster: Container Admin ( roles/container.admin ) Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) Create and manage Apigee resources: Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Required set up tasks Before you install the Apigee Operator for Kubernetes, complete the following tasks to set up the resources you need to use the feature: Provision an Apigee instance using version 1-15-0-apigee-4 or later.
- Copy the following content into the new file: target.yaml apiVersion : v1 kind : Namespace metadata : name : http --- apiVersion : v1 kind : ServiceAccount metadata : name : httpbin namespace : http --- apiVersion : v1 kind : Service metadata : name : httpbin namespace : http labels : app : httpbin service : httpbin spec : type : LoadBalancer ports : - name : https port : 80 targetPort : 80 selector : app : httpbin --- apiVersion : apps/v1 kind : Deployment metadata : name : httpbin namespace : http spec : replicas : 1 selector : matchLabels : app : httpbin version : v1 template : metadata : labels : app : httpbin version : v1 spec : serviceAccountName : httpbin containers : - image : docker.io/kennethreitz/httpbin imagePullPolicy : IfNotPresent name : httpbin ports : - containerPort : 80 resources : requests : cpu : 1 memory : 1024Mi limits : cpu : 1 memory : 1024Mi Apply the configuration to your cluster: kubectl apply -f target.yaml For more information on deploying backend applications to GKE clusters, see Deploy the demo applications .
- You can retrieve the HOST NAME using the following command: kubectl get HTTPRoute HTTPROUTE NAME -n NAMESPACE For example: curl http://34.54.193.72/get \ -H "Host: apigee-apim-operator-test.apigee.net " The response should appear similar to the following: { "args": {}, "headers": { "Accept": " / ", "Host": "apigee-apim-operator-test.apigee.net", "User-Agent": "curl/8.7.1", "X-Cloud-Trace-Context": "2bb8a80e29e80662ff9cb89971c447d9/13083106619927322701" }, "origin": "67.164.1.10,34.54.193.72", "url": "http://apigee-apim-operator-test.apigee.net/get" } What's next Learn how to Install the Apigee Operator for Kubernetes .

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'kubernetes.io/container/restart count' filter (resource.container name = '. cassandra. ' && resource.namespace name == 'apigee') align rate(1m) every 1m group by [resource.cluster name, resource.namespace name, resource.pod name, resource.container name], [value restart count aggregate: aggregate(value.restart count)] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/response count' filter (resource.container name == 'apigee-synchronizer') && (metric.response code != '200' && metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.response code, metric.type, resource.container name], [value response count aggregate: aggregate(value.response count)] Infrastructure GKE and other Kubernetes platforms provide system-level SLI metrics.
- For example, all the metrics with k8s container resource type have cluster name , pod name , and container name labels available to use, in addition to the metrics labels.
- Resource types k8s container Metric kubernetes.io/container/restart count Filter By namespace name = apigee and container name = . cassandra.

