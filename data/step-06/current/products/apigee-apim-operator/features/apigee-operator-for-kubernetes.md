---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:39.854Z"
product_name: "Apigee APIM Operator"
product_slug: "apigee-apim-operator"
feature_name: "Apigee Operator for Kubernetes"
feature_slug: "apigee-operator-for-kubernetes"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install"
keywords:
  - "Apigee Operator on GKE"
  - "Apigee Operator for Kubernetes"
  - "Kubernetes Operator for Apigee"
  - "Apigee Operator release"
  - "Apigee Operator v1.1.1"
  - "Apigee Kubernetes Operator"
  - "Apigee Operator"
  - "apigee-operator"
---

# Apigee Operator for Kubernetes

Product: Apigee APIM Operator
Coverage: HIGH

## Step 02 Summary

Apigee Operator for Kubernetes version 1.1.1 became available.

## Extended Definition

Apigee Operator for Kubernetes is a Kubernetes operator deployment for Apigee on GKE, installed via Helm using two charts (CRDs and operator) and typically deployed in an `apim` namespace, with versioned installer references shown as `1.1.1`. Using the documented installation workflow, an Apigee instance must be provisioned, required Google Cloud APIs must be enabled, and specific IAM roles must be granted before installation. The operator setup also requires creating a Google service account and Kubernetes service account binding/workload identity configuration to connect the operator to Google Cloud services.

## Evidence Summary

These two official docs provide prerequisites, required roles/APIs, and explicit Helm commands for installing Apigee Operator for Kubernetes (including versioned `1.1.1` chart references).

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install)

## Supporting Pages

### Apigee Operator for Kubernetes: Before you begin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-before-you-begin)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to set up the resources required to install and use the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage the Google Kubernetes Engine (GKE) cluster: Container Admin ( roles/container.admin ) Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) Create and manage Apigee resources: Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can retrieve the HOST NAME using the following command: kubectl get HTTPRoute HTTPROUTE NAME -n NAMESPACE For example: curl http://34.54.193.72/get \ -H "Host: apigee-apim-operator-test.apigee.net " The response should appear similar to the following: { "args": {}, "headers": { "Accept": " / ", "Host": "apigee-apim-operator-test.apigee.net", "User-Agent": "curl/8.7.1", "X-Cloud-Trace-Context": "2bb8a80e29e80662ff9cb89971c447d9/13083106619927322701" }, "origin": "67.164.1.10,34.54.193.72", "url": "http://apigee-apim-operator-test.apigee.net/get" } What's next Learn how to Install the Apigee Operator for Kubernetes .
- Required set up tasks Before you install the Apigee Operator for Kubernetes, complete the following tasks to set up the resources you need to use the feature: Provision an Apigee instance using version 1-15-0-apigee-4 or later.
- Go to the Instances page in the Google Cloud console to select an instance and view its details: Go to Instances You can use Apigee Operator for Kubernetes with a Subscription or Pay-as-you-go Apigee organization.

### Install the Apigee Operator for Kubernetes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Set up Service Account Credentials to connect to Google Cloud services: gcloud iam service-accounts create apigee-apim-gsa Grant the required roles and permissions to the service account you created using the following commands: Apigee Admin role : Required to create and manage Apigee resources. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/apigee.admin" Service extension admin role : Required to create and manage service extensions. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/networkservices.serviceExtensionsAdmin" Networking admin role : Required to manage access to Apigee using service extensions. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/compute.networkAdmin" Load balancer admin role : Required to manage access between network endpoint groups (NEGs) and backend services. gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/compute.loadBalancerAdmin" gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/iam.workloadIdentityUser" Create a workload identity The helm installation of the Apigee Operator for Kubernetes in the next step creates a required Kubernetes service account (KSA) named apim-ksa in the apim namespace.
- To confirm that the environment variables are set correctly, run the following command: echo $PROJECT ID $CLUSTER NAME $REGION $APIGEE ORG Enable required APIs Apigee Operator for Kubernetes requires access to the following APIs: Name Title apigee.googleapis.com Apigee API compute.googleapis.com Compute Engine API networkservices.googleapis.com Network Services API container.googleapis.com Kubernetes Engine API Use the following command to confirm that the required APIs are enabled: gcloud services list --project = $PROJECT ID If you don't see the required APIs listed in the command output, enable them: gcloud services enable apigee.googleapis.com --project = $PROJECT ID gcloud services enable compute.googleapis.com --project = $PROJECT ID gcloud services enable networkservices.googleapis.com --project = $PROJECT ID gcloud services enable container.googleapis.com --project = $PROJECT ID Retrieve and configure credentials Retrieve your cluster credentials and create a service account to connect to Google Cloud services: Get cluster credentials using the following command: gcloud container clusters get-credentials $CLUSTER NAME --location = $REGION --project = $PROJECT ID These credentials communicate with the GKE cluster created in the prerequisite steps.
- Install Custom Resource Definitions (CRDs) and Apigee Operator for Kubernetes Install the Kubernetes Custom Resource Definitions (CRDs) and Apigee Operator for Kubernetes: Create a namespace for the Apigee Operator for Kubernetes: kubectl create ns apim Install the Apigee Operator for Kubernetes CRDs: helm install apigee-apim-crds -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-crds \ --version 1 .1.1 \ --atomic Install the Apigee Operator for Kubernetes: helm install apigee-apim-operator -n apim \ oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-helm \ --version 1 .1.1 \ --set projectId = $PROJECT ID \ --set serviceAccount = apigee-apim-gsa@ $PROJECT ID .iam.gserviceaccount.com \ --set apigeeOrg = $PROJECT ID \ --set generateEnv = ENV GENERATION MODE \ --atomic Replace ENV GENERATION MODE with TRUE if you want the operator to create a new Apigee environment when the Apigee Operator for Kubernetes is installed.
- Required roles To get the permissions that you need to install the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization: Create and manage the GKE cluster: Container Admin ( roles/container.admin ) Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) Create and manage Apigee resources: Apigee Admin ( roles/apigee.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

