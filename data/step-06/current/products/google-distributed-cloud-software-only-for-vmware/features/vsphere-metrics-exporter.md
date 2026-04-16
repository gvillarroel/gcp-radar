---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.040Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere metrics exporter"
feature_slug: "vsphere-metrics-exporter"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
keywords:
  - "vsphere"
  - "metrics"
  - "exporter"
  - "collects"
  - "key"
  - "performance"
  - "health"
  - "vmware"
---

# vSphere metrics exporter

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The vSphere metrics exporter collects key performance and health metrics from the VMware vSphere environment.

## Extended Definition

The provided Google Distributed Cloud for VMware excerpts do not explicitly define a distinct, named feature called “vSphere metrics exporter.” They do show that monitoring and performance validation in VMware clusters is supported through guidance on alerting for etcd I/O latency and vSphere datastore performance, and through cluster monitoring agents such as `gke-metrics-agent`/`gke-metrics-agent-windows`; therefore, only broad metric collection as part of cluster observability is evidenced. Evidence is insufficient to confirm a dedicated vSphere-only metrics exporter component or exact export behavior.

## Evidence Summary

These pages support that GDC for VMware includes monitoring/health-focused guidance and monitoring agents, but they do not explicitly document the specific “vSphere metrics exporter” feature.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)

## Supporting Pages

### "Scalability \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/scalability)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Monitor and set alert thresholds for the following etcd I/O latency metrics: etcd disk backend commit duration seconds etcd disk wal fsync duration seconds Optimize node boot disk I/O performance Pods use ephemeral storage for their internal operations, like saving temporary files.
- Optimize the I/O performance of the vSphere datastore used for the control-plane VMs by following these recommendations: Follow the etcd hardware requirements .
- Its performance and stability are critical to a cluster's health and are sensitive to disk and network I/O latency.
- The following table describes the maximum number of Services, nodes, and health checks for Bundled load balancing (Seesaw) and Integrated load balancing (F5): Bundled load balancing (Seesaw) Integrated load balancing (F5) Max Services 500 250 2 Max nodes 500 250 2 Max health checks N + (L N) <= 10K, where N is the number of nodes, and L is the number of traffic local services 1 N/A 2 1 For example, suppose you have 100 nodes and 99 traffic local Services.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Follow these steps: Create a VMware vSphere template for Windows Server 2019 .
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Advanced clusters Stay organized with collections Save and categorize content based on your preferences.

