---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:46:04.465Z"
product_name: "Apigee APIM Operator"
product_slug: "apigee-apim-operator"
feature_name: "Apigee Operator for Kubernetes"
feature_slug: "apigee-operator-for-kubernetes"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "version"
  - "kubernetes"
  - "available"
  - "became"
---

# Apigee Operator for Kubernetes

Product: Apigee APIM Operator
Coverage: MEDIUM

## Step 02 Summary

Apigee Operator for Kubernetes version 1.1.1 became available.

## Extended Definition

Apigee Operator for Kubernetes version 1.1.1 became available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### Apigee Operator for Kubernetes: Before you begin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required set up tasks Before you install the Apigee Operator for Kubernetes, complete the following tasks to set up the resources you need to use the feature: Provision an Apigee instance using version 1-15-0-apigee-4 or later.
- Copy the following content into the new file: target.yaml apiVersion : v1 kind : Namespace metadata : name : http --- apiVersion : v1 kind : ServiceAccount metadata : name : httpbin namespace : http --- apiVersion : v1 kind : Service metadata : name : httpbin namespace : http labels : app : httpbin service : httpbin spec : type : LoadBalancer ports : - name : https port : 80 targetPort : 80 selector : app : httpbin --- apiVersion : apps/v1 kind : Deployment metadata : name : httpbin namespace : http spec : replicas : 1 selector : matchLabels : app : httpbin version : v1 template : metadata : labels : app : httpbin version : v1 spec : serviceAccountName : httpbin containers : - image : docker.io/kennethreitz/httpbin imagePullPolicy : IfNotPresent name : httpbin ports : - containerPort : 80 resources : requests : cpu : 1 memory : 1024Mi limits : cpu : 1 memory : 1024Mi Apply the configuration to your cluster: kubectl apply -f target.yaml For more information on deploying backend applications to GKE clusters, see Deploy the demo applications .
- Required roles To get the permissions that you need to set up the resources required to install and use the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage the Google Kubernetes Engine (GKE) cluster: Container Admin ( roles/container.admin ) Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) Create and manage Apigee resources: Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can retrieve the HOST NAME using the following command: kubectl get HTTPRoute HTTPROUTE NAME -n NAMESPACE For example: curl http://34.54.193.72/get \ -H "Host: apigee-apim-operator-test.apigee.net " The response should appear similar to the following: { "args": {}, "headers": { "Accept": " / ", "Host": "apigee-apim-operator-test.apigee.net", "User-Agent": "curl/8.7.1", "X-Cloud-Trace-Context": "2bb8a80e29e80662ff9cb89971c447d9/13083106619927322701" }, "origin": "67.164.1.10,34.54.193.72", "url": "http://apigee-apim-operator-test.apigee.net/get" } What's next Learn how to Install the Apigee Operator for Kubernetes .

### Install the Apigee Operator for Kubernetes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install Custom Resource Definitions (CRDs) and Apigee Operator for Kubernetes Install the Kubernetes Custom Resource Definitions (CRDs) and Apigee Operator for Kubernetes: Create a namespace for the Apigee Operator for Kubernetes: kubectl create ns apim Install the Apigee Operator for Kubernetes CRDs: helm install apigee-apim-crds -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-crds \ --version 1 .1.1 \ --atomic Install the Apigee Operator for Kubernetes: helm install apigee-apim-operator -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-helm \ --version 1 .1.1 \ --set projectId = $PROJECT ID \ --set serviceAccount = apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com \ --set apigeeOrg = $PROJECT ID \ --set generateEnv = ENV GENERATION MODE \ --atomic Replace ENV GENERATION MODE with TRUE if you want the operator to create a new Apigee environment when the Apigee Operator for Kubernetes is installed.
- Set up Service Account Credentials to connect to Google Cloud services: gcloud iam service-accounts create apigee-apim-gsa Grant the required roles and permissions to the service account you created using the following commands: Apigee Admin role : Required to create and manage Apigee resources. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/apigee.admin" Service extension admin role : Required to create and manage service extensions. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/networkservices.serviceExtensionsAdmin" Networking admin role : Required to manage access to Apigee using service extensions. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/compute.networkAdmin" Load balancer admin role : Required to manage access between network endpoint groups (NEGs) and backend services. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/compute.loadBalancerAdmin" gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/iam.workloadIdentityUser" Create a workload identity The helm installation of the Apigee Operator for Kubernetes in the next step creates a required Kubernetes service account (KSA) named apim-ksa in the apim namespace.
- To confirm that the environment variables are set correctly, run the following command: echo $PROJECT ID $CLUSTER NAME $REGION $APIGEE ORG Enable required APIs Apigee Operator for Kubernetes requires access to the following APIs: Name Title apigee.googleapis.com Apigee API compute.googleapis.com Compute Engine API networkservices.googleapis.com Network Services API container.googleapis.com Kubernetes Engine API Use the following command to confirm that the required APIs are enabled: gcloud services list --project = $PROJECT ID If you don't see the required APIs listed in the command output, enable them: gcloud services enable apigee.googleapis.com --project = $PROJECT ID gcloud services enable compute.googleapis.com --project = $PROJECT ID gcloud services enable networkservices.googleapis.com --project = $PROJECT ID gcloud services enable container.googleapis.com --project = $PROJECT ID Retrieve and configure credentials Retrieve your cluster credentials and create a service account to connect to Google Cloud services: Get cluster credentials using the following command: gcloud container clusters get-credentials $CLUSTER NAME --location = $REGION --project = $PROJECT ID These credentials communicate with the GKE cluster created in the prerequisite steps.
- Required roles To get the permissions that you need to install the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage the GKE cluster: Container Admin ( roles/container.admin ) Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) Create and manage Apigee resources: Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'kubernetes.io/container/restart count' filter (resource.container name = '. cassandra. ' && resource.namespace name == 'apigee') align rate(1m) every 1m group by [resource.cluster name, resource.namespace name, resource.pod name, resource.container name], [value restart count aggregate: aggregate(value.restart count)] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/response count' filter (resource.container name == 'apigee-synchronizer') && (metric.response code != '200' && metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.response code, metric.type, resource.container name], [value response count aggregate: aggregate(value.response count)] Infrastructure GKE and other Kubernetes platforms provide system-level SLI metrics.
- Service Name Container Name Cassandra apigee-cassandra Message Processor(MP) apigee-runtime Synchronizer apigee-synchronizer Telemetry apigee-prometheus-app apigee-prometheus-proxy apigee-prometheus-agg apigee-stackdriver-exporter Containers / Pods Restart count Use case : The kubernetes.io/container/restart count system SLI metric provides the number of times a container has restarted.
- Version 1.10 keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.

