---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.227Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos Identity Service OIDC configuration updates"
feature_slug: "anthos-identity-service-oidc-configuration-updates"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
keywords:
  - "anthos"
  - "identity"
  - "oidc"
  - "configuration"
  - "updates"
  - "allows"
  - "openid"
  - "connect"
---

# Anthos Identity Service OIDC configuration updates

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Allows OpenID Connect configuration changes without recreating user clusters.

## Extended Definition

Anthos Identity Service OIDC configuration in Google Distributed Cloud (software only) for VMware is the setup that uses GKE Identity Service to authenticate to a cluster’s Kubernetes API server via OpenID Connect (OIDC). It supports OIDC and LDAP as authentication mechanisms and documents cluster-level and fleet-level (preview, version 1.8+) configuration flows, including registering GKE Identity Service as a client with an OIDC provider. The provided excerpts do not explicitly state that OIDC configuration updates can be done without recreating user clusters.

## Evidence Summary

These pages establish that OIDC is supported through GKE Identity Service in Google Distributed Cloud for VMware and describe how to configure/register an OIDC provider (including fleet-level preview support), but do not directly document update-on-existing-clusters behavior.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: It outlines OIDC setup and client registration but does not describe making OIDC configuration changes without recreating user clusters.

Evidence snippets:
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- Choose from the following cluster configuration options: Configure your clusters at fleet level following the instructions in Configuring clusters for fleet-level GKE Identity Service (preview, Google Distributed Cloud version 1.8 and higher).
- Setup process and options OIDC Register GKE Identity Service as a client with your OIDC provider following the instructions in Configuring providers for GKE Identity Service .
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: OIDC setup is discussed, yet the page does not cover whether configuration updates can be applied without recreating clusters.

Evidence snippets:
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- Choose from the following cluster configuration options: Configure your clusters at fleet level following the instructions in Configuring clusters for fleet-level GKE Identity Service (preview, Google Distributed Cloud version 1.8 and higher).
- Setup process and options OIDC Register GKE Identity Service as a client with your OIDC provider following the instructions in Configuring providers for GKE Identity Service .
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- A newly created user cluster must have at least one node pool to transition to a healthy state. module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 18.0" project id = var.project id activate apis = [ "cloudresourcemanager.googleapis.com" , "anthos.googleapis.com" , "anthosgke.googleapis.com" , "container.googleapis.com" , "gkeconnect.googleapis.com" , "gkehub.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" , "monitoring.googleapis.com" , "logging.googleapis.com" , "iam.googleapis.com" , "compute.googleapis.com" , "anthosaudit.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "file.googleapis.com" , "connectgateway.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } This module is used to update the platform controller on your admin cluster.
- If you include gkeConnect.location in your configuration file, the region that you specify must be the same as the region configured in cloudAuditLogging.clusterLocation , stackdriver.clusterLocation , and gkeOnPremAPI.location .
- The gkeOnPremAPI.location region must be the same as the region specified in cloudAuditLogging.clusterLocation , gkeConnect.location (if the field is included in your configuration file), and stackdriver.clusterLocation .

