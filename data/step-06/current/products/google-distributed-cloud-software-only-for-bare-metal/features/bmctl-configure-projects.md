---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.331Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "bmctl configure projects"
feature_slug: "bmctl-configure-projects"
latest_feature_date: "2025-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install"
keywords:
  - "bmctl"
  - "configure"
  - "projects"
  - "command"
  - "automatically"
  - "configures"
  - "iam"
  - "policy"
---

# bmctl configure projects

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The bmctl configure projects command automatically configures IAM policy bindings, creates required service accounts, and enables required APIs for Workload Identity cluster authentication.

## Extended Definition

The bmctl configure projects command automatically configures IAM policy bindings, creates required service accounts, and enables required APIs for Workload Identity cluster authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install)

## Supporting Pages

### "Create an admin cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command uses the key file names in Configure service accounts manually and assumes that bmctl and the key files are in the current working directory.
- Configures the cluster so that you can run read-only kubectl commands on your local computer without having to SSH to the admin workstation.
- If you already have the applicable version of bmctl downloaded to your admin workstation, you don't need to download it again. gcloud CLI Make sure to update components: gcloud components update Run the following command to sign in with your Google Account: gcloud auth login List the available bare metal cluster versions that you can install: The bmctl version that you download to create the bootstrap environment must match the version that you will install on the admin cluster. gcloud container bare-metal admin-clusters query-version-config \ --location= REGION Replace REGION with the Google Cloud region that you will use when you create the cluster.
- If you want to use your Google identity to sign in to the cluster, you can set up the connect gateway as follows: On your admin workstation, set the KUBECONFIG environment variable: export KUBECONFIG=$HOME/bmctl-workspace/ ADMIN CLUSTER NAME / ADMIN CLUSTER NAME -kubeconfig Set the current context in an environment variable: export CONTEXT = " $( kubectl config current-context ) " Run the following gcloud command.

### "Set up Google Cloud resources \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't already, login to Google Cloud CLI: gcloud auth login Create the service accounts: gcloud iam service-accounts create anthos-baremetal-gcr \ --project= PROJECT ID gcloud iam service-accounts create anthos-baremetal-connect \ --project= PROJECT ID gcloud iam service-accounts create anthos-baremetal-register \ --project= PROJECT ID gcloud iam service-accounts create anthos-baremetal-cloud-ops \ --project= PROJECT ID Grant the required IAM roles on the service accounts: gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-connect@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/gkehub.connect" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-register@ PROJECT ID .iam.gserviceaccount.com" \ --role=roles/gkehub.admin gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/logging.logWriter" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/monitoring.metricWriter" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/stackdriver.resourceMetadata.writer" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/opsconfigmonitoring.resourceMetadata.writer" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/monitoring.dashboardEditor" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/monitoring.viewer" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/serviceusage.serviceUsageViewer" gcloud projects add-iam-policy-binding PROJECT ID \ --member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com" \ --role="roles/kubernetesmetadata.publisher" Download the service account JSON key files: gcloud iam service-accounts keys create anthos-baremetal-gcr.json \ --project= PROJECT ID \ --iam-account=anthos-baremetal-gcr@ PROJECT ID .iam.gserviceaccount.com gcloud iam service-accounts keys create connect-agent.json \ --project= PROJECT ID \ --iam-account=anthos-baremetal-connect@ PROJECT ID .iam.gserviceaccount.com gcloud iam service-accounts keys create connect-register.json \ --project= PROJECT ID \ --iam-account=anthos-baremetal-register@ PROJECT ID .iam.gserviceaccount.com gcloud iam service-accounts keys create anthos-baremetal-cloud-ops.json \ --project= PROJECT ID \ --iam-account=anthos-baremetal-cloud-ops@ PROJECT ID .iam.gserviceaccount.com Configure a service account that can access a Cloud Storage bucket You use a service account and key file to access Cloud Storage.
- Add a policy binding to the service account: gcloud iam service-accounts add-iam-policy-binding SA NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = serviceAccount: SA NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = 'projects/ PROJECT ID /roles/ ROLE ID ' Download the service account JSON key file: gcloud iam service-accounts keys create OUTPUT FILE \ --iam-account = SA NAME @ PROJECT ID .iam.gserviceaccount.com For more information about how to create cluster snapshots and automatically upload them to a Cloud Storage bucket, see Create snapshots to help diagnose cluster problems .
- If you aren't a Google Cloud project owner, have a project owner grant you the following Identity and Access Management (IAM) roles: Role Purpose roles/compute.viewer Required: Needed when bmctl validates the clusterOperations.location field in the cluster configuration file. roles/iam.serviceAccountAdmin Required: Needed to create the service accounts that Google Distributed Cloud requires. roles/iam.securityAdmin Required: Needed to grant IAM roles to the service accounts that Google Distributed Cloud requires. roles/iam.serviceAccountKeyAdmin Required: Needed to create JSON key files for the service accounts that Google Distributed Cloud requires. roles/serviceusage.serviceUsageAdmin Required: Needed to enable the Google APIs that Google Distributed Cloud requires. roles/gkeonprem.admin Optional: Needed if you want to create clusters using GKE On-Prem API clients or configure a cluster to be managed by the GKE On-Prem API . roles/gkehub.viewer roles/container.viewer Optional: Needed if you want to access the GKE pages in the Google Cloud console.
- To see what APIs and services are enabled in your project, run the following command: gcloud services list --project= PROJECT ID \ --enabled Configure service accounts To use the Google APIs, Google Distributed Cloud requires a service account configured with specific IAM roles in your associated Google Cloud project.

### "Deploy a cluster on OpenStack \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adding the permissions means you don't need to create multiple service accounts for individual services. gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/gkehub.connect" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/gkehub.admin" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/logging.logWriter" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.dashboardEditor" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/stackdriver.resourceMetadata.writer" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/opsconfigmonitoring.resourceMetadata.writer" Create a cluster configuration file Download the bmctl command line utility. mkdir baremetal && cd baremetal gcloud storage cp gs://anthos-baremetal-release/bmctl/1.34.200-gke.68/linux-amd64/bmctl . chmod a+x bmctl sudo mv bmctl /usr/local/sbin/ Create a cluster configuration file for your cluster: bmctl create config -c CLUSTER NAME Update the configuration file for use with OpenStack: cat > bmctl-workspace/ CLUSTER NAME / CLUSTER NAME .yaml << EOB --- gcrKeyPath: /home/abm/bm-gcr.json sshPrivateKeyPath: /home/abm/.ssh/id rsa gkeConnectAgentServiceAccountKeyPath: /home/abm/bm-gcr.json gkeConnectRegisterServiceAccountKeyPath: /home/abm/bm-gcr.json cloudOperationsServiceAccountKeyPath: /home/abm/bm-gcr.json --- apiVersion: v1 kind: Namespace metadata: name: openstack-cluster-ns --- apiVersion: baremetal.cluster.gke.io/v1 kind: Cluster metadata: name: CLUSTER NAME namespace: openstack-cluster-ns annotations: baremetal.cluster.gke.io/external-cloud-provider: "true" spec: type: hybrid anthosBareMetalVersion: 1 .34.200-gke.68 gkeConnect: projectID: PROJECT ID controlPlane: nodePoolSpec: clusterName: CLUSTER NAME nodes: - address: 10 .200.0.11 clusterNetwork: pods: cidrBlocks: - 192 .168.0.0/16 services: cidrBlocks: - 10 .96.0.0/20 loadBalancer: mode: manual ports: controlPlaneLBPort: 443 vips: controlPlaneVIP: 10 .200.0.101 ingressVIP: 10 .200.0.102 clusterOperations: location: us-central1 projectID: PROJECT ID storage: lvpNodeMounts: path: /mnt/localpv-disk storageClassName: node-disk lvpShare: numPVUnderSharedPath: 5 path: /mnt/localpv-share storageClassName: standard nodeAccess: loginUser: abm --- apiVersion: baremetal.cluster.gke.io/v1 kind: NodePool metadata: name: node-pool-1 namespace: openstack-cluster-ns spec: clusterName: CLUSTER NAME nodes: - address: 10 .200.0.12 EOB Create the cluster Create the cluster: bmctl create cluster -c CLUSTER NAME Running the bmctl command starts setting up a new hybrid cluster.
- Clean up You can clean up the cluster by issuing the following command in your admin workstation ( abm-ws ) VM: Note: If you want to install the OpenStack Cloud Provider on the newly created cluster, follow the Configure the OpenStack Cloud Provider for Kubernetes guide before you clean up. export KUBECONFIG = $HOME /bmctl-workspace/ CLUSTER NAME / CLUSTER NAME -kubeconfig bmctl reset --cluster CLUSTER NAME What's next?
- Verify that you can use SSH to connect to the other nodes: ssh abm@10.200.0.11 'echo SSH to $HOSTNAME succeeded' ssh abm@10.200.0.12 'echo SSH to $HOSTNAME succeeded' The expected responses for the preceding commands are: SSH to abm-cp1 succeeded SSH to abm-w1 succeeded Download the kubectl command line utility on the abm-ws VM. curl -LO "https://storage.googleapis.com/kubernetes-release/release/ $( curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt ) /bin/linux/amd64/kubectl" chmod +x kubectl sudo mv kubectl /usr/local/sbin/ Install Docker on the abm-ws VM: curl -fsSL https://get.docker.com -o get-docker.sh sh get-docker.sh sudo usermod -aG docker abm newgrp docker Configure the Google Cloud project and service account Obtain Google Cloud CLI access credentials for your user account.
- To verify your deployment, complete the following steps: Set the KUBECONFIG environment variable with the path to the cluster configuration file to run kubectl commands on the cluster: export KUBECONFIG = $HOME /bmctl-workspace/ CLUSTER NAME / CLUSTER NAME -kubeconfig kubectl get nodes You should see the nodes of the cluster printed, similar to the following output: NAME STATUS ROLES AGE VERSION abm-cp1 Ready control-plane,master 5m24s v1.20.5-gke.1301 abm-w1 Ready <none> 2m17s v1.20.5-gke.1301 Sign in to your cluster from Google Cloud console To observe your workloads in the Google Cloud console, you must sign in to the cluster.

