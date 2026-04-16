---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.320Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "NodePoolClaim taint mutability"
feature_slug: "nodepoolclaim-taint-mutability"
latest_feature_date: "2026-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config"
keywords:
  - "nodepoolclaim"
  - "taint"
  - "mutability"
  - "spec"
  - "taints"
  - "field"
  - "mutable"
  - "so"
---

# NodePoolClaim taint mutability

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The spec.taints field in NodePoolClaim is mutable, so you can add or remove taints on existing node pools without recreating the claim.

## Extended Definition

The spec.taints field in NodePoolClaim is mutable, so you can add or remove taints on existing node pools without recreating the claim.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config)

## Supporting Pages

### Manage node pools in a cluster | Google Distributed Cloud (software only) for bare metal | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- Source ID: `feature-recovery-http`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The new node pool consists of two nodes with IP addresses 10.200.0.7 and 10.200.0.8 : apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : machine-learning-pool namespace : cluster-abm-cluster spec : clusterName : abm-cluster nodes : - address : 10.200.0.7 - address : 10.200.0.8 taints : - key : TAINT_KEY value : TAINT_VALUE effect : NoSchedule labels : key1 : LABEL_1 key2 : LABEL_2 Store the configuration in a file named machine-learning-pool.yaml and apply the configuration to the cluster with the following command: kubectl apply -f machine-learning-pool.yaml The following facts should be considered when adding a node pool to a cluster: NodePool.spec.taints and NodePool.spec.labels configurations are reconciled to nodes.
- For example: nodeConfigs : - nodeIP : 10.200.0.10 labels : key1 : value1 key2 : value2 - nodeIP : 10.200.0.11 labels : key3 : value3 key4 : value4 Optionally, you can specify the following: --node-labels= KEY = VALUE ,... : A comma-separated list of Kubernetes labels (key-value pairs) applied to each node in the pool. --node-taints= KEY = VALUE : EFFECT ,...
- For example: nodeConfigs : - nodeIP : 10.200.0.10 labels : key1 : value1 - nodeIP : 10.200.0.11 Optionally, you can specify the following: --node-labels= KEY = VALUE ,... : A comma-separated list of Kubernetes labels (key-value pairs) applied to each node in the pool. --node-taints= KEY = VALUE : EFFECT ,...
- For example: gcloud container bare-metal node-pools create default-pool \ --cluster=user-cluster-1 \ --location=us-west1 \ --node-configs-from-file=node-pool-config.yaml \ --node-taints=key1=val1:NoSchedule,key2=val2:NoExecute Remove a node pool kubectl You remove node pools with kubectl delete .

### File konfigurasi cluster yang dibuat | Google Distributed Cloud (software only) for bare metal | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config)
- Source ID: `feature-recovery-http`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Kolom spec.taints dan spec.labels dalam spesifikasi NodePool digunakan untuk penjadwalan Pod.
- Untuk mengetahui informasi selengkapnya tentang kolom ini, lihat Menambahkan node pool baru . ... # Taints and labels are reconciled to the nodes of the node pool unless the node has # “baremetal.cluster.gke.io/label-taint-no-sync” annotated. taints : - key : < key1 > value : < value1 > # The effect can be either 'NoSchedule', 'PreferNoSchedule', or 'NoExecute'. # 'NoSchedule' means no pod will be able to schedule onto the node unless it has a matching toleration. # 'PreferNoSchedule' means the system avoids placing a pod that does not tolerate the taint on the node, but it is # not required. # `NoExecute` means pods that do not tolerate the taint will be evicted immediately, and pods that do tolerate the # taint will never be evicted. effect : NoSchedule labels : key1 : < value1 > key2 : < value2 > Kirim masukan Kecuali dinyatakan lain, konten di halaman ini dilisensikan berdasarkan Lisensi Creative Commons Attribution 4.0 , sedangkan contoh kode dilisensikan berdasarkan Lisensi Apache 2.0 .
- If left blank, this field defaults to false. # deployCloudConsoleProxy: <Whether to deploy a reverse proxy for Google Cloud console authentication; optional> # # certificateAuthorityData specifies a Base64 PEM-encoded certificate authority certificate of your identity # # provider.
- Typically, this is either a single machine # or 3 machines if using a high availability deployment. - address : < Machine 1 IP > # Cluster networking configuration clusterNetwork : # Pods specify the IP ranges from which pod networks are allocated. pods : cidrBlocks : - 192.168.0.0/16 # Services specify the network ranges from which service virtual IPs are allocated. # This can be any RFC1918 range that does not conflict with any other IP range # in the cluster and node pool resources. services : cidrBlocks : - 10.96.0.0/20 # Load balancer configuration loadBalancer : # Load balancer mode can be either 'bundled' or 'manual'. # In 'bundled' mode a load balancer will be installed on load balancer nodes during cluster creation. # In 'manual' mode the cluster relies on a manually-configured external load balancer. mode : bundled # Load balancer port configuration ports : # Specifies the port the load balancer serves the Kubernetes control plane on. # In 'manual' mode the external load balancer must be listening on this port. controlPlaneLBPort : 443 # There are two load balancer virtual IP (VIP) addresses: one for the control plane # and one for the L7 Ingress service. # If you use Layer2 load balancing, the VIPs must be in the same subnet as the load balancer nodes. # If you use bundled BGP-based load balancing (mode: 'bundled' and type: 'bgp'), the VIPs # must not come from the same subnet as any of the nodes in the cluster. # These IP addresses do not correspond to physical network interfaces. vips : # ControlPlaneVIP specifies the VIP to connect to the Kubernetes API server. # This address must not be in the address pools below. controlPlaneVIP : 10.0.0.8 # IngressVIP specifies the VIP shared by all services for ingress traffic. # Allowed only in non-admin clusters. # This address must be in the address pools below. # ingressVIP: 10.0.0.2 # AddressPools is a list of non-overlapping IP ranges for the data plane load balancer. # All addresses must be in the same subnet as the load balancer nodes. # Address pool configuration is only valid for 'bundled' LB mode in non-admin clusters. # addressPools: # - name: pool1 # addresses: # # Each address must be either in the CIDR form (1.2.3.0/24) # # or range form (1.2.3.1-1.2.3.5). # - 10.0.0.1-10.0.0.4 # A load balancer node pool can be configured to specify nodes used for load balancing. # These nodes are part of the Kubernetes cluster and run regular workloads as well as load balancers. # If the node pool config is absent then the control plane nodes are used. # Node pool configuration is only valid for 'bundled' LB mode. # nodePoolSpec: # nodes: # - address: <Machine 1 IP> # Proxy configuration # proxy: # url: http://[username:password@]domain # # A list of IPs, hostnames or domains that should not be proxied. # noProxy: # - 127.0.0.1 # - localhost # Logging and Monitoring clusterOperations : # Cloud project for logs and metrics. projectID : < GCP project ID > # Cloud location for logs and metrics. location : us-central1 # Storage configuration storage : # lvpNodeMounts specifies the config for local PersistentVolumes backed by mounted disks. # These disks need to be formatted and mounted by the user, which can be done before or after # cluster creation. lvpNodeMounts : # path specifies the host machine path where mounted disks will be discovered and a local PV # will be created for each mount. path : /mnt/localpv-disk # storageClassName specifies the StorageClass that PVs will be created with.

### "Configure bundled load balancing with MetalLB \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)
- Source ID: `site-iam-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This field is mutable. addresses A list of one or more nonoverlapping IP address ranges. ip-range can be specified in either CIDR notation (like 198.51.100.0/24 ) or range notation (like 198.51.100.0-198.51.100.10 , with no spaces around the dash).
- Configuration fields Edit the cluster.spec.loadBalancer section of the cluster configuration file to configure bundled load balancing.
- Load balancer nodes can run regular workloads by default; there is no special taint on those nodes.
- This field is immutable. avoidBuggyIPs : (Optional) true or false .

