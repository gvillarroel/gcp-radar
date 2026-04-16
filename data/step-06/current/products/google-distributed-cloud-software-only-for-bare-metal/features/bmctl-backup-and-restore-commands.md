---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.354Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "bmctl backup and restore commands"
feature_slug: "bmctl-backup-and-restore-commands"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
keywords:
  - "bmctl"
  - "backup"
  - "restore"
  - "commands"
  - "includes"
  - "cluster"
  - "disaster"
  - "recovery"
---

# bmctl backup and restore commands

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Bmctl includes backup and restore commands to support cluster disaster recovery.

## Extended Definition

Bmctl includes backup and restore commands to support cluster disaster recovery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)

## Supporting Pages

### "Back up and restore clusters with bmctl \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To restore a user cluster, run the following command: bmctl restore cluster -c CLUSTER NAME --backup-file BACKUP FILE \ --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you are restoring.
- To restore an admin, hybrid, or standalone cluster, run the following command: bmctl restore cluster -c CLUSTER NAME --backup-file BACKUP FILE Replace the following: CLUSTER NAME : the name of the cluster you are restoring.
- When the restore finishes, use the following steps to verify that it was successful: Run the following commands to verify the node readiness and system pods running with the generated kubeconfig file: There are two types of etcd pods: etcd- HOST NAME , which corresponds to the main etcd Pod etcd-events- HOST NAME , which corresponds to the etcd-events Pod kubectl get pods -n kube-system --kubeconfig GENERATED KUBECONFIG kubectl get nodes --kubeconfig GENERATED KUBECONFIG For each etcd pod, run following to verify etcd healthiness: kubectl exec ETCD POD NAME -n kube-system \ --kubeconfig GENERATED KUBECONFIG \ -- /bin/sh -c 'ETCDCTL API=3 etcdctl --endpoints=https://127.0.0.1:2379 \ --cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \ --cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health' For a healthy etcd member, the response should look like the following: https://127.0.0.1:2379 is healthy: successfully committed proposal: took = 11.514177ms For each etcd-events Pod, run following command to verify etcd-events healthiness: kubectl exec ETCD EVENTS POD NAME -n kube-system \ --kubeconfig GENERATED KUBECONFIG \ -- /bin/sh -c 'ETCDCTL API=3 etcdctl --endpoints=https://127.0.0.1:2382 \ --cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \ --cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health' For a healthy etcd-events member, the response should look like the following: https://127.0.0.1:2382 is healthy: successfully committed proposal: took = 14.308148ms Troubleshoot If you have problems with the backup or restore process, the following sections might help you to troubleshoot the issue.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Back up and restore clusters with bmctl Stay organized with collections Save and categorize content based on your preferences.

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- The cluster create and update operations check that node machines can be accessed with the specified user and SSH key. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : nodeAccess : loginUser : abm gcloud CLI You specify the user that you want to use to access node machines in the --login-user flag, for example: gcloud container bare-metal clusters update abm-user-cluster1a \ --project = example-project-12345 \ --location = us-central1 \ --login-user = abm To enable passwordless sudo access for a user, follow these steps on each cluster node machine: Use sudo visudo to open the sudoers file for editing: sudo visudo -f /etc/sudoers The visudo command locks the sudoers file to prevent simultaneous edits and validates the syntax of the file upon saving.
- Configure your cluster to enable dynamic resource allocation: Edit your cluster configuration file to include the preview.baremetal.cluster.gke.io/dynamic-resource-allocation: "enable" preview annotation and add DynamicResourceAllocation: true under featureGates in the kubeletConfig section: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : dra namespace : cluster-dra annotations : preview.baremetal.cluster.gke.io/dynamic-resource-allocation : "enable" spec : controlPlane : nodePoolSpec : kubeletConfig : featureGates : DynamicResourceAllocation : true ... other cluster configuration Update the cluster by running the bmctl update command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig = ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the ame of the user cluster you are updating.
- The network range can't be reduced, which means the mask (the value after "/") can't be increased. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... clusterNetwork : services : cidrBlocks : - 192.0.2.0/ 14 ... gcloud CLI To increase the range of the IPv4 service CIDR on a user cluster, specify the new range in the --island-mode-service-address-cidr-blocks flag. gcloud container bare-metal clusters update cluster1 \ --project = example-project-12345 \ --location = us-central1 \ --island-mode-service-address-cidr-blocks = 192 .0.2.0/ 14 Starting with version 1.34, you will see new ServiceCIDR resources in your cluster.
- If you set this field to true in the cluster configuration file, the internal preflight checks are ignored when you apply resources to existing clusters. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : bypassPreflightCheck : true Add or remove cluster administrators bmctl You can add or remove a user or service account as a cluster administrator for a user cluster by specifying email addresses in the clusterSecurity.authorization.clusterAdmin.gcpAccounts section of the cluster configuration file.

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- After you have the necessary credentials, you can run commands using kubectl as you normally would for any Kubernetes cluster, and you don't need to specify the name of the kubeconfig file, for example: kubectl get namespaces Admin workstation Use the bmctl get credentials command to retrieve a kubeconfig file for the newly created user cluster. bmctl get credentials --cluster CLUSTER NAME --admin-kubeconfig ADMIN KUBECONFIG PATH Replace the following: CLUSTER NAME : the name of the target user cluster.
- Connect gateway Either initialize the gcloud CLI for use with the fleet host project, or run the following commands to log in with your Google Account, set your fleet host project as the default, and update components: gcloud auth login gcloud config set project PROJECT ID gcloud components update Fetch the cluster credentials used to interact with connect gateway.
- If you are using a CI/CD tool, such as Cloud Build , you can use the gcloud commands to create a cluster and node pool and specify the --impersonate-service-account flag to automate the creation.
- If you want to use Terraform, the console or gcloud CLI to manage the lifecycle of clusters that were created using bmctl , see Configure a user cluster to be managed by the GKE On-Prem API ..

