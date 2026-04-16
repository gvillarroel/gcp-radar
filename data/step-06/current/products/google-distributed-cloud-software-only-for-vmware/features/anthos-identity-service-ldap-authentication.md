---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.199Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos Identity Service LDAP authentication"
feature_slug: "anthos-identity-service-ldap-authentication"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
keywords:
  - "anthos"
  - "identity"
  - "ldap"
  - "authentication"
  - "supports"
  - "including"
  - "use"
  - "microsoft"
---

# Anthos Identity Service LDAP authentication

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Anthos Identity Service supports LDAP authentication, including use with Microsoft Active Directory without ADFS.

## Extended Definition

Anthos Identity Service LDAP authentication in Google Distributed Cloud (software only) for VMware is a supported way to authenticate access to a cluster’s Kubernetes API server using LDAP through GKE Identity Service. During cluster lifecycle phases, the API server is configured to use the in-cluster GKE Identity Service as the authentication webhook for all incoming requests, and Google’s feature matrix includes "AIS with LDAP authentication support" for this product.

## Evidence Summary

The authentication documentation verifies LDAP as an identity mechanism and webhook-based API-server integration, while the support matrix confirms LDAP support as an officially listed AIS feature.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states that GKE Identity Service supports LDAP authentication for cluster Kubernetes API access, directly defining LDAP-based authentication.

Evidence snippets:
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- During cluster lifecycle phases, the API Server is dynamically configured to use the in-cluster GKE Identity Service as the authentication webhook for all incoming requests.
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.
- Set up user access to your clusters, including role-based access control (RBAC), following the instructions in Setting up user access for GKE Identity Service .

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly states that GKE Identity Service supports LDAP authentication for cluster API access, which is directly relevant to LDAP-based identity support.

Evidence snippets:
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- During cluster lifecycle phases, the API Server is dynamically configured to use the in-cluster GKE Identity Service as the authentication webhook for all incoming requests.
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.
- Set up user access to your clusters, including role-based access control (RBAC), following the instructions in Setting up user access for GKE Identity Service .

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- In the Select your product field, enter the following: Google Distributed Cloud Virtual - vSphere (Anthos on VMWare) Click the item in the Matching products list, and then click Select .
- Generally, Cloud Customer Care supports all software components shipped as part of Google Distributed Cloud (software only) for VMware.

