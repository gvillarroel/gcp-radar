---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.246Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Expanded cluster scale limits"
feature_slug: "expanded-cluster-scale-limits"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler"
keywords:
  - "expanded"
  - "cluster"
  - "scale"
  - "limits"
  - "increases"
  - "node"
  - "pod"
  - "load"
---

# Expanded cluster scale limits

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The product increases supported cluster, node, pod, and load-balancer scale limits.

## Extended Definition

This feature defines documented scalability limits and scaling behavior for Google Distributed Cloud (software only) for VMware, including maximum supported Services by Service CIDR size and node-related resource/replica scaling as clusters grow. It also describes that node pool sizing is automatically adjusted by cluster autoscaling based on Pod scheduling demand and pod resource requests, with node/cluster control components scaling their CPU, memory, and replica counts according to workload size. The evidence supports the cluster, node, pod, and service scale-handling mechanics, but does not explicitly frame these as a specific feature-change event of “expanded” limits.

## Evidence Summary

The scalability and autoscaler documentation contributes numeric service and control-plane scaling constraints plus autoscaling logic tied to pod demand, but it does not explicitly state a dated expansion announcement.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler)

## Supporting Pages

### "Scalability \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: STRONG
- Re-rank rationale: The page is primarily about scalability and explicitly defines user/admin cluster limits for nodes, Pods, and services, including mode-dependent constraints.

Evidence snippets:
- Admin cluster nodes when advanced clusters is enabled The CPU and memory usage of the lifecycle components deployed in an admin cluster scale according to the number of total numbers of all nodes (The total number of nodes which includes admin cluster control plane nodes + all user cluster control plane nodes + worker nodes) The following table describes the amount of admin cluster node CPU and memory required to run a large number of all nodes it manages: Number of total nodes Admin cluster node CPU Admin cluster node memory 0 to 20 4 CPUs 16GB 21 to 100 8 CPUs 16GB 101 to 500 16 CPUs 32GB For example, if there are 3 admin cluster nodes and each has 4 CPUs and 16GB memory, you can run one HA user cluster with 14 worker nodes.
- The following table describes the maximum number of Services supported by different Service CIDR block sizes: Service CIDR block size Max number of Services supported /21 2,048 /20 4,096 /19 8,192 /18 16,384 User cluster control plane nodes The memory usage of the user cluster control-plane components scales according to the number of nodes in the user cluster.
- The following table describes the resource requests/limits set by the system, given the number of nodes in a cluster: Number of nodes Approximate 1 CPU request/limit (milli) Approximate 1 memory request/limit (Mi) 3 to 5 105 110 6 to 500 100 + num nodes 100 + (2 num nodes) 1 There is a margin of +-5% to reduce the number of component restarts during scaling.
- Google Distributed Cloud automatically scales the number of calico-typha replicas based on the number of nodes in the cluster: Number of nodes (N) Number of calico-typha replicas N = 1 1 1 < N < 200 2 N >= 200 3 or more Istio ingress-gateway is the component for supporting cluster ingress, and it runs as a Deployment on user cluster worker nodes.

### "Scalability \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- Source ID: `site-docs-reference-3`
- Final score: 151
- Re-rank relevance: STRONG
- Re-rank rationale: This page is explicitly a scalability guide that defines key cluster, node, pod, and service limit thresholds and related scaling constraints.

Evidence snippets:
- Admin cluster nodes when advanced clusters is enabled The CPU and memory usage of the lifecycle components deployed in an admin cluster scale according to the number of total numbers of all nodes (The total number of nodes which includes admin cluster control plane nodes + all user cluster control plane nodes + worker nodes) The following table describes the amount of admin cluster node CPU and memory required to run a large number of all nodes it manages: Number of total nodes Admin cluster node CPU Admin cluster node memory 0 to 20 4 CPUs 16GB 21 to 100 8 CPUs 16GB 101 to 500 16 CPUs 32GB For example, if there are 3 admin cluster nodes and each has 4 CPUs and 16GB memory, you can run one HA user cluster with 14 worker nodes.
- The following table describes the maximum number of Services supported by different Service CIDR block sizes: Service CIDR block size Max number of Services supported /21 2,048 /20 4,096 /19 8,192 /18 16,384 User cluster control plane nodes The memory usage of the user cluster control-plane components scales according to the number of nodes in the user cluster.
- The following table describes the resource requests/limits set by the system, given the number of nodes in a cluster: Number of nodes Approximate 1 CPU request/limit (milli) Approximate 1 memory request/limit (Mi) 3 to 5 105 110 6 to 500 100 + num nodes 100 + (2 num nodes) 1 There is a margin of +-5% to reduce the number of component restarts during scaling.
- Google Distributed Cloud automatically scales the number of calico-typha replicas based on the number of nodes in the cluster: Number of nodes (N) Number of calico-typha replicas N = 1 1 1 < N < 200 2 N >= 200 3 or more Istio ingress-gateway is the component for supporting cluster ingress, and it runs as a Deployment on user cluster worker nodes.

### "Enable cluster autoscaling \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cluster-autoscaler)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions a minimum user-cluster node-sum requirement, but does not describe expanded platform scale limits for clusters, nodes, pods, or load balancers.

Evidence snippets:
- The cluster autoscaler increases or decreases the number of nodes in the pool automatically, based on the resource requests (rather than actual resource utilization) of Pods running on the nodes.
- Cluster autoscaling increases or decreases the number of nodes in a node pool based on the demands of your workloads.
- It periodically checks the status of Pods and nodes, and takes action: If Pods are unschedulable because there are not enough nodes in the pool, the cluster autoscaler adds nodes, up to the specified maximum.
- If your Pods have requested too few resources (or haven't changed the defaults, which might be insufficient) and your nodes are experiencing shortages, the cluster autoscaler does not correct that situation.

