---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.119Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin cluster CA certificate validation"
feature_slug: "admin-cluster-ca-certificate-validation"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "admin"
  - "cluster"
  - "ca"
  - "certificate"
  - "validation"
  - "upgrade"
  - "preflight"
  - "checks"
---

# Admin cluster CA certificate validation

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Admin cluster upgrade preflight checks now validate the admin cluster CA certificate.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, preflight checks for cluster operations can be run on the admin cluster, including user-cluster upgrades initiated with `gkectl upgrade cluster ... --dry-run` and through console/CLI/Terraform flows. The provided excerpts confirm server-side preflight execution on the admin cluster, but they do not explicitly document that this process validates the admin cluster CA certificate.

## Evidence Summary

The cited docs define the location and invocation of preflight checks for user-cluster workflows, but the supplied excerpts do not explicitly mention CA certificate validation during admin-cluster upgrade preflight checks.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about the check-config command, see Running preflight checks . (Optional) Import OS images to vSphere, and push container images to a private registry Run gkectl prepare if any of the following are true: Your user cluster is in a different vSphere data center from your admin cluster.
- With server-side preflight checks, when you create a user cluster using gkectl , the preflight checks are run on the admin cluster instead of locally on the admin workstation.
- In Firewall rules for admin clusters , search for "Preflight checks" and make sure all required firewall rules are configured.
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Run preflight checks When upgrading to version 1.29 and higher, you can run the preflight checks before upgrading a user cluster: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --dry-run Replace USER CLUSTER CONFIG with the path to the user cluster configuration file.
- With server-side preflight checks, when you upgrade a user cluster using gkectl , the preflight checks are run on the admin cluster instead of locally on the admin workstation.
- Server-side preflight checks are also run on the admin cluster when you use the Google Cloud console, the Google Cloud CLI, or Terraform to upgrade a cluster.
- Server-side preflight checks are run on the bootstrap cluster when you upgrade an admin cluster.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Enrolling your admin cluster in the GKE On-Prem API lets you use standard tools—the Google Cloud console, the Google Cloud CLI, or Terraform —to upgrade user clusters that the admin cluster manages.
- Uncomment the corresponding field below to provide the detailed spec kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 # (Required when using "F5BigIP" kind) Specify the already-existing partition and # credentials f5BigIP: address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" partition: "" # # (Optional) Specify a pool name if using SNAT # snatPoolName: "" # (Only used in 1.16 and older versions for using "Seesaw" kind) Specify the Seesaw # configs seesaw: # (Required) The absolute or relative path to the yaml file to use for IP allocation # for LB VMs.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.

