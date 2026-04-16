---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.065Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "direct server return load balancing mode"
feature_slug: "direct-server-return-load-balancing-mode"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "direct"
  - "server"
  - "return"
  - "load"
  - "balancing"
  - "mode"
  - "dsr"
  - "including"
---

# direct server return load balancing mode

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Direct server return (DSR) load balancing mode is supported, including migration from SNAT mode to DSR mode; Direct server return (DSR) load balancing mode is supported for clusters with Dataplane V2 enabled.

## Extended Definition

In the provided Google Distributed Cloud (software only) for VMware documentation excerpts, direct server return (DSR) mode is referenced indirectly as part of the manual load-balancing options for clusters. The snippets show clusters are configured with `loadBalancer` settings (including VIPs and MetalLB fields) and link to load-balancing mode guidance, but they do not include explicit in-scope details of DSR mechanics, SNAT-to-DSR migration, or explicit DSR-specific settings.

## Evidence Summary

The excerpts mainly provide cluster configuration context and cross-references for load-balancing documentation, with no explicit text confirming DSR mode behavior in the captured snippets.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- See Enabling manual load balancing mode for more information.
- See Enabling manual load balancing mode for more information.
- For more information about load balancing options, see Overview of load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Decide whether you want to configure multiple network interfaces for Pods, and set multipleNetworkInterfaces accordingly. storage If you want to disable the deployment of vSphere CSI components, set storage.vSphereCSIDisabled to true . masterNode In the masterNode section, you can specify how many control-plane nodes you want for your user cluster: specify 3 for a highly-available (HA) cluster or 1 for a non-HA cluster.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- Microsoft registry URLs, needed by every Windows node if using GCR mcr.microsoft.com .data.mcr.microsoft.com go.microsoft.com winlayers.cdn.mscr.io Microsoft WSUS server URLs, needed by gkectl prepare windows on the Windows VM windowsupdate.microsoft.com .windowsupdate.microsoft.com .windowsupdate.microsoft.com .update.microsoft.com .windowsupdate.com download.windowsupdate.com download.microsoft.com .download.windowsupdate.com wustat.windows.com ntservicepack.microsoft.com go.microsoft.com dl.delivery.mp.microsoft.com Cloudbase-Init URL, needed by gkectl prepare windows on the Windows VM https://cloudbase.it Powershell Gallery URLs, needed by gkectl prepare windows on the Windows VM psg-prod-eastus.azureedge.net az818661.vo.msecnd.net devopsgallerystorage.blob.core.windows.net .powershellgallery.com Windows Update Service, needed by gkectl prepare windows on the Windows VM onegetcdn.azureedge.net sws.update.microsoft.com tsfe.trafficshaping.dsp.mp.microsoft.com fe3.delivery.mp.microsoft.com .prod.do.dsp.mp.microsoft.com emdl.ws.microsoft.com adl.windows.com activation-v2.sls.microsoft.com crl.microsoft.com ocsp.digicert.com ctldl.windowsupdate.com login.live.com licensing.mp.microsoft.com www.msftconnecttest.com settings-win.data.microsoft.com wdcp.microsoft.com smartscreen-prod.microsoft.com checkappexec.microsoft.com arc.msn.com ris.api.iris.microsoft.com .tlu.dl.delivery.mp.microsoft.com .au.windowsupdate.com www.microsoft.com fe3.delivery.dsp.mp.microsoft.com.nsatc.net cs9.wac.phicdn.net geo-prod.do.dsp.mp.microsoft.com slscr.update.microsoft.com v10.events.data.microsoft.com Access for Installing docker, needed by gkectl prepare windows on the Windows VM dockermsft.azureedge.net Note: See a full list of URLs used by Windows Server .
- To schedule Windows Server containers on Windows Server nodes, your manifest file must include this nodeSelector section: nodeSelector: kubernetes.io/os: windows With nodeSelector configured, an admission webhook running in the cluster checks new workloads for the presence of this Windows node selector and when found, applies the following toleration to the workload which allows it to run on the tainted Windows Server nodes: tolerations: - key: "node.kubernetes.io/os" operator: "Equal" value: "windows" effect: "NoSchedule" Step 1: Create an Internet Information Services (IIS) deployment file Here is a sample configuration, which deploys Microsoft's official IIS image to a single Pod.
- You can verify whether the Windows VMs in the current network can contact the AD domain DNS server by running this command: PS C:\> nslookup DOMAIN NAME DOMAIN SERVER IP Server: example-1-2-3-4.anthos Address: 1.2.3.4 Name: example.org Address: 1.2.3.4 Step 1: Create Windows VM template with a customized script Execute a customized script before the Windows node joins the user cluster for Active Directory domain join.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- For more information about using a private registry, including differences between normal clusters and advanced clusters, see Configure a private container registry . componentAccessServiceAccountKeyPath Google Distributed Cloud uses your component access service account to download cluster components from Artifact Registry.
- Example: url : "http://my-proxy.example.local:80" no proxy : "192.0.2.0/24,my-host.example.local,198.51.100.0" When Google Distributed Cloud sends a request to one of these addresses, hosts, or domains, the request bypasses the proxy server and is sent directly to the destination.

