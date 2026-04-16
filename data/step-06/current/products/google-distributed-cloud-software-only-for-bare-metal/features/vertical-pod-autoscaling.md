---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.329Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Vertical Pod autoscaling"
feature_slug: "vertical-pod-autoscaling"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
keywords:
  - "vertical"
  - "pod"
  - "autoscaling"
  - "can"
  - "recommend"
  - "optionally"
  - "apply"
  - "cpu"
---

# Vertical Pod autoscaling

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Vertical Pod autoscaling can recommend and optionally apply CPU and memory requests and limits for pods.

## Extended Definition

Vertical Pod autoscaling can recommend and optionally apply CPU and memory requests and limits for pods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Specify the mode for applying the Pod resource recommendations: In recommendation mode ( enableUpdater: false ), vertical Pod autoscaling analyzes resource usage and publishes recommended values for CPU and memory requests and limits in the status section of the VerticalPodAutoscaler custom resources you create.
- For example: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable spec : ... other cluster spec fields verticalPodAutoscaling : Set to true for automated updates enableUpdater : true Set to true to reduce recommender memory usage enableMemorySaver : true You can update your cluster at any time to enable, disable, or configure vertical Pod autoscaling.
- In automated update mode ( enableUpdater: true ), vertical Pod autoscaling analyzes resource usage and publishes recommended values for CPU and memory requests and limits in the status section of the VerticalPodAutoscaler custom resources you create.
- Memory saver mode reduces the memory footprint of the vertical Pod autoscaling recommender component.

### "Configure logging and monitoring \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Here are some examples of replacements you might use: Disabled metric Replacements kube pod start time container/uptime kube pod container resource requests container/cpu/request cores container/memory/request bytes kube pod container resource limits container/cpu/limit cores container/memory/limit bytes To disable the optimized metrics default setting (not recommended), do the following: Open your Stackdriver custom resource in a command-line editor: kubectl -n kube-system edit stackdriver stackdriver Set the optimizedMetrics field to false : apiVersion: addons.gke.io/v1alpha1 kind: Stackdriver metadata: name: stackdriver namespace: kube-system spec: projectID: my-project clusterName: my-cluster clusterLocation: us-west-1a optimizedMetrics: false Save changes, and quit your command-line editor.
- We recommend that you use Google Cloud Managed Service for Prometheus, which is based in Cloud Monitoring, for all your monitoring needs.
- If you require additional metrics, we recommend that you find a replacement from the list of Google Distributed Cloud metrics .
- To disable optimized metrics (not recommended), override the default setting in your Stackdriver custom resource.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- To roll back a node pool upgrade, use the following steps: bmctl When you use bmctl to roll back a node pool upgrade, you edit the cluster configuration file and apply your changes with the bmctl update command: Edit the NodePool specs in the cluster configuration file for the worker node pools that you want to roll back to the previous version.
- You might use selective node pool upgrades in the following situations: To pick up security fixes without disrupting workloads: You can upgrade just your control plane nodes (and load balancer nodes) to apply Kubernetes vulnerability fixes without disrupting your worker node pools.
- Note: When upgrading Google Distributed Cloud from a version with a security patch to the next minor release, we recommend you upgrade to the highest patch version available to ensure you have the latest security patches.
- If you then attempt to make changes to the cluster using the cluster configuration with the kubectl apply -f command, the spec.nodeConfig.registryMirrors populated by the reconciler on the cluster is removed.

