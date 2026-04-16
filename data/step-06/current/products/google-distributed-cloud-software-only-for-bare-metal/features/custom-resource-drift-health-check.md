---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.349Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Custom resource drift health check"
feature_slug: "custom-resource-drift-health-check"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support"
keywords:
  - "custom"
  - "resource"
  - "drift"
  - "health"
  - "check"
  - "adds"
  - "detects"
  - "unsupported"
---

# Custom resource drift health check

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Adds a health check that detects unsupported drift in custom resources managed by the platform.

## Extended Definition

Adds a health check that detects unsupported drift in custom resources managed by the platform.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Cluster resource Optional Mutable periodicHealthCheck This section holds configuration information for periodic health checks.
- For more information, see Disable periodic health checks Cluster resource Optional Mutable profile Optional.
- In the Cluster resource, the only setting available for periodic health checks is the enable field.
- Cluster resource Optional Mutable periodicHealthCheck.enable Optional.

### "Back up and restore clusters with bmctl \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Kubernetes resources and custom objects that define the cluster's configuration and chosen state (for example, Pod specifications, Deployments, and ConfigMaps, Secrets).
- When the restore finishes, use the following steps to verify that it was successful: Run the following commands to verify the node readiness and system pods running with the generated kubeconfig file: There are two types of etcd pods: etcd- HOST NAME , which corresponds to the main etcd Pod etcd-events- HOST NAME , which corresponds to the etcd-events Pod kubectl get pods -n kube-system --kubeconfig GENERATED KUBECONFIG kubectl get nodes --kubeconfig GENERATED KUBECONFIG For each etcd pod, run following to verify etcd healthiness: kubectl exec ETCD POD NAME -n kube-system \ --kubeconfig GENERATED KUBECONFIG \ -- /bin/sh -c 'ETCDCTL API=3 etcdctl --endpoints=https://127.0.0.1:2379 \ --cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \ --cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health' For a healthy etcd member, the response should look like the following: https://127.0.0.1:2379 is healthy: successfully committed proposal: took = 11.514177ms For each etcd-events Pod, run following command to verify etcd-events healthiness: kubectl exec ETCD EVENTS POD NAME -n kube-system \ --kubeconfig GENERATED KUBECONFIG \ -- /bin/sh -c 'ETCDCTL API=3 etcdctl --endpoints=https://127.0.0.1:2382 \ --cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \ --cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health' For a healthy etcd-events member, the response should look like the following: https://127.0.0.1:2382 is healthy: successfully committed proposal: took = 14.308148ms Troubleshoot If you have problems with the backup or restore process, the following sections might help you to troubleshoot the issue.
- Use the following command to check your cluster: bmctl check cluster -c CLUSTER NAME --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you plan to back up.
- Back up a cluster The bmctl backup cluster command adds the cluster information from the etcd store and the PKI certificates for the specified cluster the cluster to a tar file.

### "Get support \_|\_ Google Distributed Cloud (software only) for bare metal\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is sample content for a cluster named user1 in the cluster-user1 namespace: apiVersion : baremetal.cluster.gke.io/v1 kind : HealthCheck metadata : generateName : healthcheck- namespace : cluster-user1 spec : clusterName : user1 After you create the YAML file, apply the custom resource in the admin cluster that's managing the user cluster by using the kubectl command.
- The following is a sample test that uses the kubectl command, and it waits 30 minutes for the health check job to complete: kubectl --kubeconfig ADMIN KUBECONFIG wait healthcheck healthcheck-7c4qf \ -n cluster-user1 --for = condition = Reconciling = False --timeout = 30m When the health check job is complete, the preceding kubectl command returns: healthcheck.baremetal.cluster.gke.io/healthcheck-7c4qf condition met You can see the health check job results with the following command: kubectl --kubeconfig ADMIN KUBECONFIG get healthcheck healthcheck-7c4qf \ -n cluster-user1 The command returns the following result: NAME PASS AGE healthcheck-7c4qf true 17m Gather all the logs for the health check job Pod into a local file by using the kubectl command.
- Support tools To troubleshoot a Google Distributed Cloud incident, Cloud Customer Care relies on three pieces of information: Your environment configuration Logs from your clusters Metrics from your clusters Your environment configuration When you open a support case, provide key information about your cluster setup by running the following commands: For all your cluster types, capture information about Kubernetes and your nodes by running the bmctl check cluster --snapshot command.
- The following is an example that uses the previous sample health check job: kubectl --kubeconfig ADMIN KUBECONFIG logs -n cluster-user1 \ -l baremetal.cluster.gke.io/check-name = healthcheck-7c4qf --tail = -1 > \ healthcheck-7c4qf.log Cluster logs When you create a new Google Distributed Cloud cluster, Cloud Logging agents are enabled by default and scoped only to system-level components.

