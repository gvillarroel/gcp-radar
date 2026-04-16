---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.362Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Windows Server version mapping gcloud command"
feature_slug: "windows-server-version-mapping-gcloud-command"
latest_feature_date: "2021-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "mapping"
  - "gcloud"
  - "command"
  - "between"
  - "shows"
  - "windows"
  - "server"
  - "version"
---

# Windows Server version mapping gcloud command

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

A gcloud command shows the version mapping between GKE versions and Windows Server versions for Windows Server node pools.

## Extended Definition

A gcloud command shows the version mapping between GKE versions and Windows Server versions for Windows Server node pools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### "Building Windows Server multi-arch images \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Some flags for common behaviors are described in this section, but this is not an exhaustive list; to see the full list of flags that gke-windows-builder supports, run the following command on a Linux server or in Cloud Shell : docker run -it us-docker.pkg.dev/gke-windows-tools/docker-repo/gke-windows-builder:latest --help To speed up your builds you can use a larger machine type for the Windows instances: - --machineType - 'n1-standard-8' Instead of building the image for all Windows versions that GKE supports, you can choose specific Windows Server versions to build for by using the --versions flag: - --versions - '20H2,ltsc2019' If your workspace has many files, your image build will be more reliable if you configure the builder to copy the workspace via Cloud Storage rather than WinRM.
- These roles are required for the builder to create the Windows Server VMs, to copy the workspace to a Cloud Storage bucket, to configure the networks to build the Docker image and to push resulting image to Artifact Registry: gcloud projects add-iam-policy-binding $PROJECT --member = serviceAccount: $MEMBER --role = 'roles/compute.instanceAdmin' gcloud projects add-iam-policy-binding $PROJECT --member = serviceAccount: $MEMBER --role = 'roles/iam.serviceAccountUser' gcloud projects add-iam-policy-binding $PROJECT --member = serviceAccount: $MEMBER --role = 'roles/compute.networkViewer' gcloud projects add-iam-policy-binding $PROJECT --member = serviceAccount: $MEMBER --role = 'roles/storage.admin' gcloud projects add-iam-policy-binding $PROJECT --member = serviceAccount: $MEMBER --role = 'roles/artifactregistry.writer' gcloud projects add-iam-policy-binding $PROJECT --member = serviceAccount: $MEMBER --role = 'roles/cloudbuild.builds.editor' Add a firewall rule named allow-winrm-ingress to allow WinRM to connect to Windows Server VMs to run a Docker build: Note: The firewall rule name must be allow-winrm-ingress , as gke-windows-builder uses this particular name to check whether this firewall rule exists. gcloud compute firewall-rules create allow-winrm-ingress --allow = tcp:5986 --direction = INGRESS Create a Docker repository in Artifact Registry for your project.
- Compute Engine is required for the builder to create and manage Windows Server VMs. gcloud services enable compute.googleapis.com cloudbuild.googleapis.com \ artifactregistry.googleapis.com cloudbuild.googleapis.com Grant the following Identity and Access Management (IAM) roles to your Cloud Build service account by using the Google Cloud CLI: Set variables: export PROJECT = $( gcloud info --format = 'value(config.project)' ) export MEMBER = $( gcloud projects describe $PROJECT --format 'value(projectNumber)' ) @cloudbuild.gserviceaccount.com Assign roles.
- Run this command to create your repository: gcloud artifacts repositories create REPOSITORY \ --repository-format = docker --location = REGISTRY REGION \ --description = "Docker repository" Replace the following: REPOSITORY : a name such as windows-multi-arch-images .

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The following patched GKE versions are available: 1.26.15-gke.1090004 1.26.15-gke.1191001 1.26.15-gke.1300001 1.26.15-gke.1320002 1.26.15-gke.1381001 1.26.15-gke.1390001 1.26.15-gke.1404002 1.26.15-gke.1469001 1.27.13-gke.1070002 1.27.13-gke.1166001 1.27.13-gke.1201002 1.27.14-gke.1022001 1.27.14-gke.1042001 1.27.14-gke.1059002 1.27.14-gke.1100002 1.27.15-gke.1012003 1.28.9-gke.1069002 1.28.9-gke.1209001 1.28.9-gke.1289002 1.28.10-gke.1058001 1.28.10-gke.1075001 1.28.10-gke.1089002 1.28.10-gke.1148001 1.28.11-gke.1019001 1.29.4-gke.1043004 1.29.5-gke.1060001 1.29.5-gke.1091002 1.29.6-gke.1038001 1.30.1-gke.1329003 1.30.2-gke.1023004 To check whether a patch is available in your cluster zone or region, run the following command: gcloud container get-server-config --location= LOCATION Replace LOCATION with your zone or region.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- GKE Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Test new GKE versions for compatibility in a staging environment before automatic upgrades change the version on your production GPU nodes, or disable automatic upgrades in those node pools. gcloud To create a node pool with GPUs in a cluster, run the following command: gcloud container node-pools create POOL NAME \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type MACHINE TYPE \ --cluster CLUSTER NAME \ --location CONTROL PLANE LOCATION \ --node-locations COMPUTE ZONE1 [ , COMPUTE ZONE2 ] \ [ --sandbox = type = gvisor ] [ --enable-autoscaling \ --min-nodes MIN NODES \ --max-nodes MAX NODES ] \ [ --scopes = SCOPES ] \ [ --service-account = SERVICE ACCOUNT ] \ [ --reservation-affinity = specific --reservation = RESERVATION NAME ] Replace the following: POOL NAME : the name you choose for the node pool.
- If you previously installed the gcloud CLI, get the latest version by running the gcloud components update command.
- Earlier gcloud CLI versions might not support running the commands in this document.
- Use the following table which lists the available GPU driver versions in each GKE version: GKE NVIDIA driver versions 1.33 R535 (default), R570, R575, or R580 1.32 R535 (default), R570, R575, or R580 1.31 R535 (default), R570, R575, or R580 1.30 R535 (default) or R550 1.29 R535 (default) or R550 1.28 R535 (default) or R550 1.27 R470 (default), R525, R535, or R550 1.26 R470 (default), R525, R535, or R550 Ubuntu The installation DaemonSet that you deploy depends on the GPU type and on the GKE node version as follows: For all GPUs except NVIDIA H200 GPUs, run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/ubuntu/daemonset-preloaded.yaml For NVIDIA H200 GPUs, install the R550 driver: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/nvidia-driver-installer/ubuntu/daemonset-preloaded-R550.yaml The installation takes several seconds to complete.

