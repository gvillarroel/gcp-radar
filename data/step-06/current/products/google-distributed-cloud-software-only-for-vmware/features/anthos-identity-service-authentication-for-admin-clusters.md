---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.198Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos Identity Service authentication for admin clusters"
feature_slug: "anthos-identity-service-authentication-for-admin-clusters"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
keywords:
  - "anthos"
  - "identity"
  - "authentication"
  - "admin"
  - "clusters"
  - "oidc"
  - "can"
  - "used"
---

# Anthos Identity Service authentication for admin clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos Identity Service and OIDC can be used to authenticate admin clusters as well as user clusters.

## Extended Definition

Anthos Identity Service authentication in Google Distributed Cloud (software only) for VMware configures how users access a cluster’s Kubernetes API using identity providers managed through GKE Identity Service. It supports Google identity, OIDC, and LDAP-based authentication methods and can be configured on a cluster-by-cluster basis (for example, via OIDC setup guides), with OIDC also enabling Cloud console login. The evidence indicates this applies across clusters (including registered/fleet clusters), but it does not explicitly call out separate behavior for admin clusters versus user clusters.

## Evidence Summary

These pages document GKE Identity Service authentication options and configuration for clusters in Google Distributed Cloud, but they do not provide a direct, explicit statement that admin-cluster authentication is separately defined from user-cluster authentication.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)

## Supporting Pages

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Authentication is referenced in general for cluster access, but no Anthos Identity Service or OIDC-specific setup is described.

Evidence snippets:
- You can find out how to set up third-party OIDC authentication for your clusters in the following guides: Configure clusters for GKE Identity Service with OIDC : This guide shows you how to set up OIDC authentication on a cluster by cluster basis.
- Set up Google identity authentication To let users log in to the cluster using their Google identity, you need to configure the following: Users need specific Identity and Access Management (IAM) roles to be able to see and interact with clusters in the console on the GKE Clusters list .
- To do this, your registered clusters must be set up with one of the following authentication methods: Google identity : This option lets users log in using their Google Cloud identity, which is the email address associated with your Google Cloud account.
- To do this, you need to: Set up an authentication method Grant users specific Identity and Access Management roles Set up authentication As described previously, all fleet clusters appear in the GKE clusters lists in the console.

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: It describes authentication for clusters in general, but does not specifically differentiate admin clusters from user clusters.

Evidence snippets:
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.
- Users can log in to and use your clusters from the command line (all providers) or from the Google Cloud console (OIDC only), all using your existing identity provider.
- Configure your clusters individually following the instructions in Configuring clusters for GKE Identity Service with OIDC .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- DHCP is used only to provide IP addresses in the following cases: If enableControlplaneV2 isn't enabled in user clusters, then you can use DHCP for the user cluster's control-plane nodes, which are in the admin cluster.
- It is not used in an admin cluster. loadBalancer.f5BigIP 1.30 and higher In version 1.30 and higher, the value "F5BigIP" isn't allowed for loadbalancer.kind for new admin clusters.
- The proxy server you specify here is used by the user clusters that this admin cluster manages.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).

