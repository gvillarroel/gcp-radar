---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.331Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "bmctl update diff view"
feature_slug: "bmctl-update-diff-view"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart"
keywords:
  - "bmctl"
  - "update"
  - "diff"
  - "view"
  - "command"
  - "can"
  - "show"
  - "differences"
---

# bmctl update diff view

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The bmctl update command can show differences between the cluster YAML configuration and the deployed Cluster and NodePool resources.

## Extended Definition

The bmctl update command can show differences between the cluster YAML configuration and the deployed Cluster and NodePool resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure your cluster to enable dynamic resource allocation: Edit your cluster configuration file to include the preview.baremetal.cluster.gke.io/dynamic-resource-allocation: "enable" preview annotation and add DynamicResourceAllocation: true under featureGates in the kubeletConfig section: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : dra namespace : cluster-dra annotations : preview.baremetal.cluster.gke.io/dynamic-resource-allocation : "enable" spec : controlPlane : nodePoolSpec : kubeletConfig : featureGates : DynamicResourceAllocation : true ... other cluster configuration Update the cluster by running the bmctl update command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig = ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the ame of the user cluster you are updating.
- The cluster create and update operations check that node machines can be accessed with the specified user and SSH key. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : nodeAccess : loginUser : abm gcloud CLI You specify the user that you want to use to access node machines in the --login-user flag, for example: gcloud container bare-metal clusters update abm-user-cluster1a \ --project = example-project-12345 \ --location = us-central1 \ --login-user = abm To enable passwordless sudo access for a user, follow these steps on each cluster node machine: Use sudo visudo to open the sudoers file for editing: sudo visudo -f /etc/sudoers The visudo command locks the sudoers file to prevent simultaneous edits and validates the syntax of the file upon saving.
- After making this change, the cluster configuration file should look something like this: --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user-cluster namespace : cluster-user-cluster spec : controlPlane : nodePoolSpec : nodes : - address : 192.0.2.11 - address : 192.0.2.12 - address : 192.0.2.14 Update the cluster by running the following command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig= KUBECONFIG gcloud CLI You can use the gcloud CLI to replace high availability (HA) control plane nodes in admin and user clusters.
- After making this change, the cluster configuration file should look something like this: --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user-cluster namespace : cluster-user-cluster spec : controlPlane : nodePoolSpec : nodes : - address : 192.0.2.11 - address : 192.0.2.12 Update the cluster by running the following command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig= KUBECONFIG Make the following changes: Replace CLUSTER NAME with the name of the cluster you want to update.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output of the bmctl register bootstrap command in the other terminal window is similar to the following: ... [2024-04-15 23:10:48+0000] Waiting for cluster to become ready OK [2024-04-15 23:16:38+0000] Please run [2024-04-15 23:16:38+0000] kubectl --kubeconfig bmctl-workspace/gce-admin-gcloud-001/gce-admin-gcloud-001-kubeconfig get nodes [2024-04-15 23:16:38+0000] to get cluster nodes status. [2024-04-15 23:16:38+0000] Waiting for node pools to become ready OK [2024-04-15 23:16:58+0000] Waiting for metrics to become ready in GCP OK [2024-04-15 23:21:58+0000] Waiting for cluster API provider to install in the created admin cluster OK [2024-04-15 23:22:08+0000] Moving admin cluster resources to the created admin cluster [2024-04-15 23:22:10+0000] Waiting for node update jobs to finish OK [2024-04-15 23:24:30+0000] Flushing logs...
- The output of the bmctl register bootstrap command in the other terminal window is similar to the following: ... [2024-04-15 23:10:48+0000] Waiting for cluster to become ready OK [2024-04-15 23:16:38+0000] Please run [2024-04-15 23:16:38+0000] kubectl --kubeconfig bmctl-workspace/gce-admin-gcloud-001/gce-admin-gcloud-001-kubeconfig get nodes [2024-04-15 23:16:38+0000] to get cluster nodes status. [2024-04-15 23:16:38+0000] Waiting for node pools to become ready OK [2024-04-15 23:16:58+0000] Waiting for metrics to become ready in GCP OK [2024-04-15 23:21:58+0000] Waiting for cluster API provider to install in the created admin cluster OK [2024-04-15 23:22:08+0000] Moving admin cluster resources to the created admin cluster [2024-04-15 23:22:10+0000] Waiting for node update jobs to finish OK [2024-04-15 23:24:30+0000] Flushing logs...
- The output of the bmctl register bootstrap command in the other terminal window is similar to the following: ... [2024-04-15 23:10:48+0000] Waiting for cluster to become ready OK [2024-04-15 23:16:38+0000] Please run [2024-04-15 23:16:38+0000] kubectl --kubeconfig bmctl-workspace/gce-admin-gcloud-001/gce-admin-gcloud-001-kubeconfig get nodes [2024-04-15 23:16:38+0000] to get cluster nodes status. [2024-04-15 23:16:38+0000] Waiting for node pools to become ready OK [2024-04-15 23:16:58+0000] Waiting for metrics to become ready in GCP OK [2024-04-15 23:21:58+0000] Waiting for cluster API provider to install in the created admin cluster OK [2024-04-15 23:22:08+0000] Moving admin cluster resources to the created admin cluster [2024-04-15 23:22:10+0000] Waiting for node update jobs to finish OK [2024-04-15 23:24:30+0000] Flushing logs...
- The bmctl register bootstrap command in the other terminal window must run for a few minutes before the bootstrap cluster shows as a registered member.

### "Create basic clusters \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that your cluster was created and is running: kubectl --kubeconfig bmctl-workspace/ ADMIN CLUSTER NAME / ADMIN CLUSTER NAME -kubeconfig \ get nodes If your cluster is running, the response looks something like this: NAME STATUS ROLES AGE VERSION node-01 Ready control-plane 16h v1.25.7-gke.1000 To grant your user account the Kubernetes clusterrole/cluster-admin role on the cluster, run the following gcloud command: gcloud container fleet memberships generate-gateway-rbac \ --membership = ADMIN CLUSTER NAME \ --role = clusterrole/cluster-admin \ --users = GOOGLE ACCOUNT EMAIL \ --project = PROJECT ID \ --kubeconfig = bmctl-workspace/ ADMIN CLUSTER NAME / ADMIN CLUSTER NAME -kubeconfig \ --context = ADMIN CLUSTER NAME -admin@ ADMIN CLUSTER NAME \ --apply The output of this command is similar to the following, which is truncated for readability: Validating input arguments.
- To create an admin cluster for the minimal installation: Set the default credentials that Google Distributed Cloud can use to create the cluster with the following command: gcloud auth application-default login To generate a cluster configuration file, run the following command from the /baremetal directory on your admin workstation: bmctl create config -c ADMIN CLUSTER NAME \ --enable-apis --create-service-accounts --project-id = PROJECT ID Verify the admin cluster configuration file: The following cluster configuration file is filled in with the values that you entered in the planning table in the preceding section.
- After the cluster is created, run the following command to create a node pool on the newly created cluster. gcloud container bare-metal node-pools create node-pool-1 \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location=us-central1 \ --node-configs node-ip= USER WORKER NODE IP For more information and other examples, see the following: gcloud container bare-metal clusters gcloud container bare-metal node-pools Create a user cluster Terraform This section shows you how to create a user cluster and a node pool using Terraform.
- To create a kubeconfig file for the user cluster, run the following command on the admin workstation: bmctl get credentials --cluster USER CLUSTER NAME \ --admin-kubeconfig bmctl-workspace/ ADMIN CLUSTER NAME / ADMIN CLUSTER NAME -kubeconfig The output from the command displays the name of the kubeconfig file for the user cluster, for example: bmctl-workspace/ USER CLUSTER NAME / USER CLUSTER NAME - TIMESTAMP -kubeconfig The TIMESTAMP in the filename indicates the date and time the file was created.

