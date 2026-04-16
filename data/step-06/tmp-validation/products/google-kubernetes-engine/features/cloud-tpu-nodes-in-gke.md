---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.247Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud TPU nodes in GKE"
feature_slug: "cloud-tpu-nodes-in-gke"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "create"
  - "workloads"
  - "manage"
  - "nodes"
---

# Cloud TPU nodes in GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can create and manage Cloud TPU nodes for AI workloads, including provisioning, scaling, scheduling, repairing, and upgrading.

## Extended Definition

GKE can create and manage Cloud TPU nodes for AI workloads, including provisioning, scaling, scheduling, repairing, and upgrading.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, create and launch a regional GKE cluster: gcloud container clusters create ds-init-tutorial \ --enable-ip-alias \ --machine-type = n1-standard-2 \ --metadata disable-legacy-endpoints = true \ --node-labels = app = default-init \ --node-locations us-central1-a,us-central1-b,us-central1-c \ --no-enable-basic-auth \ --no-issue-client-certificate \ --num-nodes = 1 \ --location us-central1 \ --service-account = " $GKE SERVICE ACCOUNT EMAIL " Apply node configurations using a DaemonSet In this section, you prevent workloads from running on nodes before configuration is complete by applying a taint to the node pool.
- Enable the Kubernetes Engine API: gcloud services enable container.googleapis.com Provision a service account to manage GKE clusters In this section, you create a service account that is associated with the nodes in the cluster.
- For example, if you use a configuration management tool to initialize the cluster nodes, you're relying on a procedure that's outside the runtime environment where the rest of your workloads run.
- To provision a service account, follow these steps: In Cloud Shell, initialize an environment variable that stores the service account name: GKE SERVICE ACCOUNT NAME = ds-init-tutorial-gke Create a service account: gcloud iam service-accounts create " $GKE SERVICE ACCOUNT NAME " \ --display-name = " $GKE SERVICE ACCOUNT NAME " Initialize an environment variable that stores the service account email account name: GKE SERVICE ACCOUNT EMAIL = " $( gcloud iam service-accounts list \ --format = 'value(email)' \ --filter = displayName: " $GKE SERVICE ACCOUNT NAME " ) " Bind the Identity and Access Management (IAM) roles to the service account: gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/monitoring.viewer gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/monitoring.metricWriter gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/logging.logWriter Prepare the GKE cluster In this section, you launch the GKE cluster, grant permissions, and finish the cluster configuration.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn more about Confidential VM Learn more about Google Cloud encryption at rest Learn more about Google Cloud encryption in transit Learn more about customer-managed encryption keys (CMEK) Learn how to remotely attest that workloads are running on Confidential VM Learn how to run GPUs on Confidential GKE Nodes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifying the technology when you create a cluster has the following effects: You can create only node pools or workloads that use Confidential GKE Nodes in that cluster.
- Save the following Deployment manifest as a YAML file: apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello template : metadata : labels : app : hello spec : nodeSelector : Replace with the name of a compute class cloud.google.com/compute-class : COMPUTE CLASS containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : "250m" memory : "1Gi" Create the Deployment: kubectl apply -f PATH TO DEPLOYMENT MANIFEST Replace PATH TO DEPLOYMENT MANIFEST with the path to the Deployment manifest file.
- Create a new node pool To create a new node pool with Confidential GKE Nodes enabled, select one of the following options: gcloud Run the following command: gcloud container node-pools create NODE POOL NAME \ --location = LOCATION \ --cluster = CLUSTER NAME \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,... \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Note: You can enable confidential mode on boot disk storage by passing the --enable-confidential-storage flag and --boot-disk-kms-key= KMS KEY .

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command: kubectl get pods --all-namespaces -o json \ jq -r ' [ "/", "/var", "/var/","/var/run", "/var/run/", "/var/run/containerd", "/var/run/containerd/", "/var/run/containerd/containerd.sock", "/run", "/run/", "/run/containerd", "/run/containerd/", "/run/containerd/containerd.sock" ] as $socket paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( (.spec.volumes[]?.hostPath.path as $p $socket paths index($p)) and ([.metadata.namespace] inside($excluded namespaces) not) ) .metadata.namespace + "/" + .metadata.name ' Use eBPF tracing to identify API callers For a more definitive way to identify which workloads running on Linux nodes call the CRI v1alpha2 API, you can deploy two specialized DaemonSets: The containerd-socket-tracer logs any process opening a connection to the containerd socket, along with the Pod and container details.
- Run the following command to check for the DaemonSets: kubectl get daemonsets --all-namespaces -o json \ jq -r ' [ "/", "/etc", "/etc/", "/etc/containerd", "/etc/containerd/", "/etc/containerd/config.toml" ] as $host paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( ([.metadata.namespace] inside($excluded namespaces) not) and ( (any(.spec.template.spec.volumes[]?.hostPath.path; IN($host paths[]))) or ( .spec.template.spec.hostPID == true and any(.spec.template.spec.containers[]; .securityContext?.privileged == true) ) ) ) .metadata.namespace + "/" + .metadata.name ' Migrate from the CRI registry auths or configs.auth properties If your workloads use the auths or configs.auth properties in the containerd config to authenticate to a private registry for pulling container images, you must migrate the workloads using those images to the imagePullSecrets field instead.
- Identify which workloads need to be migrated to the imagePullSecrets field by running the following command: kubectl get pods -A -o json jq -r ".items[] select(.spec.containers[] .image startswith(\" $REGISTRY DOMAIN \")) .metadata.namespace + \"/\" + .metadata.name" You must create a Secret for each namespace that's used by workloads with images from this registry domain.
- If you don't migrate from these features, when 1.32 (for Linux nodes) or 1.34 (for Windows Server nodes) reaches the end of support, and your cluster nodes are automatically upgraded to 1.33 or 1.35, you could experience the following issues with your clusters: Workloads using Docker Schema 1 images fail.

