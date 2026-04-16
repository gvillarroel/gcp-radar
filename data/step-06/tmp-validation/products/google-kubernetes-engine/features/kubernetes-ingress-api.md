---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.401Z"
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
  - "availability"
  - "graduated"
  - "ingress"
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
- The following manifest describes a Deployment with version 2.0 of the same web application: apiVersion : apps/v1 kind : Deployment metadata : name : web2 namespace : default spec : selector : matchLabels : run : web2 template : metadata : labels : run : web2 spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0 imagePullPolicy : IfNotPresent name : web2 ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment-v2.yaml The following manifest describes a Service that exposes web2 internally to the cluster on a NodePort Service called web2 : apiVersion : v1 kind : Service metadata : name : web2 namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web2 type : NodePort Apply the resource to the cluster: kubectl apply -f web-service-v2.yaml The following manifest describes an Ingress resource that: routes the requests with path starting with /v2/ to the web2 Service routes all other requests to the web Service apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : fanout-ingress spec : rules : - http : paths : - path : / pathType : ImplementationSpecific backend : service : name : web port : number : 8080 - path : /v2/ pathType : ImplementationSpecific backend : service : name : web2 port : number : 8080 Apply the resource to the cluster: kubectl create -f fanout-ingress.yaml After the Ingress is deployed, run kubectl get ingress fanout-ingress to find out the public IP address of the cluster.
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- If you followed "Option 2" to create a new static IP address, then run the following command to delete the static IP address: gcloud compute addresses delete web-static-ip --global Delete the cluster: This step deletes the compute nodes of your container cluster and other resources such as the Deployments in the cluster: gcloud container clusters delete loadbalancedcluster What's next Check out the Ingress user guide for details about Ingress features.

### "HighAvailabilityApplication \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Possible values: ["StatefulSet"] policy Optional object Policy defines the high availability characteristics of this application policy.storageSettings Optional object StorageSettings defines the high availability characteristics of this application. policy.storageSettings.requireRegionalStorage Optional string RequireRegionalStorage enforces regional storage when using a HighAvailabilityApplication. policy.failoverSettings Optional object FailoverSettings defines the failover settings when an application pod encounters an error. policy.failoverSettings.forceDeleteStrategy Optional string forceDeleteStrategy determines how force delete is triggered on node failure.
- Custom Resource Definition Properties Spec Schema resourceSelection : resourceKind : string policy : storageSettings : requireRegionalStorage : boolean failoverSettings : forceDeleteStrategy : string afterNodeUnreachable : afterNodeUnreachableSeconds : int Fields resourceSelection Optional object ResourceSelection specifies the resources belonging to this HighAvailabilityApplication.
- The HighAvailabilityApplication will look for a resource with the same name and namespace as itself. resourceSelection.resourceKind Optional string ResourceKind specifies the kind of resources included in this component.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback HighAvailabilityApplication Stay organized with collections Save and categorize content based on your preferences.

### "Authenticate to the Kubernetes API server \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: N/A

