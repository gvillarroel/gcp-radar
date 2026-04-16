---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.948Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes Ingress API"
feature_slug: "kubernetes-ingress-api"
latest_feature_date: "2021-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication"
keywords:
  - "kubernetes"
  - "ingress"
  - "graduated"
  - "availability"
  - "19"
---

# Kubernetes Ingress API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Kubernetes Ingress API graduated to general availability in Kubernetes 1.19.

## Extended Definition

The Kubernetes Ingress API graduated to general availability in Kubernetes 1.19.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- The following manifest describes an Ingress resource that directs traffic to your web Service: apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress spec : defaultBackend : service : name : web port : number : 8080 Apply the resource to the cluster: kubectl apply -f basic-ingress.yaml After you deploy this manifest, Kubernetes creates an Ingress resource on your cluster.
- Delete any manually created forwarding rules and target proxies that reference the Ingress: Note: This step is needed only if the load balancer associated with the Ingress is updated manually using the Kubernetes Engine API or the Google Cloud console.
- Home Technology areas Google Kubernetes Engine (GKE) GKE networking Guides Send feedback Set up an external Application Load Balancer with Ingress Stay organized with collections Save and categorize content based on your preferences.

### "HighAvailabilityApplication \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback HighAvailabilityApplication Stay organized with collections Save and categorize content based on your preferences.
- Possible values: ["StatefulSet"] policy Optional object Policy defines the high availability characteristics of this application policy.storageSettings Optional object StorageSettings defines the high availability characteristics of this application. policy.storageSettings.requireRegionalStorage Optional string RequireRegionalStorage enforces regional storage when using a HighAvailabilityApplication. policy.failoverSettings Optional object FailoverSettings defines the failover settings when an application pod encounters an error. policy.failoverSettings.forceDeleteStrategy Optional string forceDeleteStrategy determines how force delete is triggered on node failure.
- Custom Resource Definition Properties Spec Schema resourceSelection : resourceKind : string policy : storageSettings : requireRegionalStorage : boolean failoverSettings : forceDeleteStrategy : string afterNodeUnreachable : afterNodeUnreachableSeconds : int Fields resourceSelection Optional object ResourceSelection specifies the resources belonging to this HighAvailabilityApplication.
- The HighAvailabilityApplication will look for a resource with the same name and namespace as itself. resourceSelection.resourceKind Optional string ResourceKind specifies the kind of resources included in this component.

### "Authenticate to the Kubernetes API server \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Use the following format if you're using the DNS-based endpoint for control plane access: apiVersion : v1 kind : Config clusters : - name : CLUSTER NAME cluster : server : https:// endpoint users : - name : ci-cd-pipeline-gsa user : exec : apiVersion : client.authentication.k8s.io/v1beta1 args : - --use application default credentials command : gke-gcloud-auth-plugin installHint : Install gke-gcloud-auth-plugin for kubectl by following https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install plugin provideClusterInfo : true contexts : - context : cluster : CLUSTER NAME user : ci-cd-pipeline-gsa name : CLUSTER NAME -ci-cd current-context : CLUSTER NAME -ci-cd Replace the following: CLUSTER NAME : the name of your cluster. endpoint : the value you obtained for endpoint from the previous step.
- Before reading this page, ensure that you're familiar with the following concepts: General overview of authentication in Google Cloud General overview of IAM and role-based access control (RBAC) in GKE General overview of Kubernetes methods for authentication Before you begin Before you start, make sure that you have performed the following tasks: Enable the Google Kubernetes Engine API.
- The following example grants view permissions to resources in the prod namespace to a service account named cicd in the cicd-ns namespace: kubectl create rolebinding cicd-secret-viewer \ --namespace = prod \ --clusterrole = view \ --serviceaccount = cicd-ns:cicd At runtime, when your application sends a Kubernetes API request, the API server authenticates the service account credentials.
- The following example grants the roles/container.developer IAM role, which provides access to Kubernetes API objects inside clusters: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:ci-cd-pipeline@ PROJECT ID .iam.gserviceaccount.com \ --role = roles/container.developer Alternatively, you can use RBAC to grant the IAM service account access to the cluster.

