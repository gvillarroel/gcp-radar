---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.350Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Dedicated etcd instance for etcd-events"
feature_slug: "dedicated-etcd-instance-for-etcd-events"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
keywords:
  - "dedicated"
  - "etcd"
  - "instance"
  - "events"
  - "adds"
  - "separate"
  - "always"
  - "object"
---

# Dedicated etcd instance for etcd-events

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Adds a separate always-on etcd instance for the etcd-events object.

## Extended Definition

Adds a separate always-on etcd instance for the etcd-events object.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)

## Supporting Pages

### "Back up and restore clusters with bmctl \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: To improve cluster performance, Google Distributed Cloud uses a separate etcd instance to store Event objects.
- The cluster restore operation creates a new, empty etcd-events instance, so you lose existing Event objects.
- When the restore finishes, use the following steps to verify that it was successful: Run the following commands to verify the node readiness and system pods running with the generated kubeconfig file: There are two types of etcd pods: etcd- HOST NAME , which corresponds to the main etcd Pod etcd-events- HOST NAME , which corresponds to the etcd-events Pod kubectl get pods -n kube-system --kubeconfig GENERATED KUBECONFIG kubectl get nodes --kubeconfig GENERATED KUBECONFIG For each etcd pod, run following to verify etcd healthiness: kubectl exec ETCD POD NAME -n kube-system \ --kubeconfig GENERATED KUBECONFIG \ -- /bin/sh -c 'ETCDCTL API=3 etcdctl --endpoints=https://127.0.0.1:2379 \ --cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \ --cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health' For a healthy etcd member, the response should look like the following: https://127.0.0.1:2379 is healthy: successfully committed proposal: took = 11.514177ms For each etcd-events Pod, run following command to verify etcd-events healthiness: kubectl exec ETCD EVENTS POD NAME -n kube-system \ --kubeconfig GENERATED KUBECONFIG \ -- /bin/sh -c 'ETCDCTL API=3 etcdctl --endpoints=https://127.0.0.1:2382 \ --cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \ --cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health' For a healthy etcd-events member, the response should look like the following: https://127.0.0.1:2382 is healthy: successfully committed proposal: took = 14.308148ms Troubleshoot If you have problems with the backup or restore process, the following sections might help you to troubleshoot the issue.
- Back up a cluster The bmctl backup cluster command adds the cluster information from the etcd store and the PKI certificates for the specified cluster the cluster to a tar file.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- If you want to prevent workloads from running on a node in the load balancer node pool, add the following taint to the node: node-role.kubernetes.io/load-balancer:NoSchedule Google Distributed Cloud software adds tolerations for this taint to the pods that are required for load balancing.
- When you specify the optional k8sIP address for a node, it's dedicated to handling data and Kubernetes traffic for the node, such as requests and responses for the Kubernetes API, the kubelet, and workloads.
- When you specify the optional k8sIP address for a node, it's dedicated to handling data and Kubernetes traffic for the node, such as requests and responses for the Kubernetes API, the kubelet, and workloads.
- If your Prometheus instance uses a different authentication method, such as Transport Layer Security (TLS), it isn't supported for use with the vertical Pod autoscaling feature.

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- All the nodes are labeled with cp-node-pool-key=cp-node-pool-value and have the taint dedicated=experimental:PreferNoSchedule . --control-plane-node-configs='node-ip=192.0.2.1' \ --control-plane-node-configs='node-ip=192.0.2.2,labels=key2.1=value2.1' \ --control-planer-node-configs='node-ip=192.0.2.3,labels=key3.1=value3.1;key3.2=value3.2' \ --control-plane-node-labels=cp-node-pool-key=cp-node-pool-value \ --control-plane-node-taints=dedicated=experimental:PreferNoSchedule \ Virtual IPs CONTROL PLANE VIP : The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster.
- All the nodes are labeled with cp-node-pool-key=cp-node-pool-value and have the taint dedicated=experimental:PreferNoSchedule . --control-plane-node-configs='node-ip=192.0.2.1' \ --control-plane-node-configs='node-ip=192.0.2.2,labels=key2.1=value2.1' \ --control-planer-node-configs='node-ip=192.0.2.3,labels=key3.1=value3.1;key3.2=value3.2' \ --control-plane-node-labels=cp-node-pool-key=cp-node-pool-value \ --control-plane-node-taints=dedicated=experimental:PreferNoSchedule \ Virtual IPs CONTROL PLANE VIP : The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster.
- All the nodes are labeled with lb-pool-key=lb-pool-value and have the taint dedicated=experimental:PreferNoSchedule , --metal-lb-load-balancer-node-configs='node-ip=192.0.2.1' \ --metal-lb-load-balancer-node-configs='node-ip=192.0.2.2,labels=key2.1=value2.1' \ --metal-lb-load-balancer-node-configs='node-ip=192.0.2.3,labels=key3.1=value3.1;key3.2=value3.2' \ --metal-lb-load-balancer-node-labels=lb-pool-key=lb-pool-value \ --metal-lb-load-balancer-node-taints=dedicated=experimental:PreferNoSchedule \ Control plane nodes --control-plane-node-configs : The IPv4 address of a control plane node.
- All both nodes are labeled with node-pool-key=node-pool-value and have the taint dedicated=experimental:PreferNoSchedule , gcloud container bare-metal node-pools create default-pool \ --cluster=user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --node-configs='node-ip=10.200.0.10' \ --node-configs='node-ip=10.200.0.11,labels=key2.1=value2.1' \ --node-labels=node-pool-key=node-pool-value \ --node-taints=dedicated=experimental:PreferNoSchedule For more information, see the gcloud CLI reference .

