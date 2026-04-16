---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.143Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "IPAM Docker IP range validation"
feature_slug: "ipam-docker-ip-range-validation"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
keywords:
  - "ipam"
  - "docker"
  - "ip"
  - "range"
  - "validation"
  - "adds"
  - "preflight"
  - "check"
---

# IPAM Docker IP range validation

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Adds a preflight check that verifies IP addresses are not in the Docker IP range when IPAM mode is used.

## Extended Definition

Google Distributed Cloud (software only) for VMware introduces a preflight check in IPAM mode that validates node IP addresses to ensure they are not in the Docker IP range. This check is part of the broader preflight-check framework, which also validates networking inputs (CIDR ranges, VIPs, and static IPs) and detects overlapping addresses.

## Evidence Summary

The release notes page explicitly records the feature as a new preflight check (IP addresses not in Docker range in IPAM mode), while the preflight checks page documents the networking preflight validation scope and overlap checks.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- In this example, the configuration being validated uses integrated load balancing mode and static IPs without an external Docker registry: - Validation Category: Config Check - [SUCCESS] Config - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: GCP - [SUCCESS] GCP Service - [SUCCESS] GCP Service Account - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access - Validation Category: vCenter - [SUCCESS] Credentials - [SUCCESS] Version - [SUCCESS] Datacenter - [SUCCESS] Datastore - [SUCCESS] Data Disk - [SUCCESS] Resource Pool - [SUCCESS] Network - [SUCCESS] VSphere CSI Driver - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster F5 (credentials, partition and user role) - [SUCCESS] User Cluster F5 (credentials, partition and user role) - Validation Category: Network Configuration - [SUCCESS] CIDR, VIP and static IP (availability and overlapping) - Validation Category: DNS - [SUCCESS] DNS (availability) - Validation Category: VIPs - [SUCCESS] ping (availability) - Validation Category: Node IPs - [SUCCESS] ping (availability) Now running slow validation checks. ...
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.
- To learn about the available skip flags, run the following command: gkectl check-config --help For example, to skip the load balancer validations: gkectl check-config --config my-config.yaml --skip-validation-load-balancer Cancelling preflight checks If you started running preflight checks and want to cancel, press CTRL + C twice.
- Skipped with the --skip-validation-docker flag. vCenter Checks that all vcenter fields are present, and also checks the following: Credentials vcenter.credentials.[ ] Validates authentication to vCenter Server using the provided user credentials. vSphere version Validates that the versions of vCenter and ESXi are supported.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- If the preflight checks pass, you see something like the following: [2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK [2023-03-22 23:15:47+0000] Writing kubeconfig file [2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig [2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster. [2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK [2023-03-22 23:20:17+0000] Please run [2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes [2023-03-22 23:20:17+0000] to get cluster nodes status. [2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK [2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK [2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK [2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster [2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK [2023-03-22 23:27:41+0000] Flushing logs...
- After gkectl successfully creates the bootstrap cluster, you see output similar to the following, which is truncated for readability: Running workstation validations - Validation Category: Workstation - [SUCCESS] Workstation OS - [SUCCESS] Workstation Hardware - [SUCCESS] Workstation Package - [SUCCESS] Workstation NTP - [SUCCESS] Workstation Docker ...
- After gkectl successfully creates the bootstrap cluster, you see output similar to the following, which is truncated for readability: Running workstation validations - Validation Category: Workstation - [SUCCESS] Workstation OS - [SUCCESS] Workstation Hardware - [SUCCESS] Workstation Package - [SUCCESS] Workstation NTP - [SUCCESS] Workstation Docker ...
- When you create the admin cluster, the controllers on the bootstrap cluster will provision nodes, run preflight checks, and register the admin cluster to the fleet.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about the check-config command, see Running preflight checks . (Optional) Import OS images to vSphere, and push container images to a private registry Run gkectl prepare if any of the following are true: Your user cluster is in a different vSphere data center from your admin cluster.
- With server-side preflight checks, when you create a user cluster using gkectl , the preflight checks are run on the admin cluster instead of locally on the admin workstation.
- Server-side preflight checks are also run if you use the Google Cloud console, the Google Cloud CLI, or Terraform to create a user cluster.
- In Firewall rules for admin clusters , search for "Preflight checks" and make sure all required firewall rules are configured.

