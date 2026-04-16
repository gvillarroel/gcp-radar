---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.162Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Idempotent Windows startup script execution after node reboot"
feature_slug: "idempotent-windows-startup-script-execution-after-node-reboot"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "idempotent"
  - "windows"
  - "startup"
  - "script"
  - "execution"
  - "after"
  - "node"
  - "reboot"
---

# Idempotent Windows startup script execution after node reboot

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Windows startup scripts can be executed idempotently after a node reboot.

## Extended Definition

For Windows Server OS node pools in Google Distributed Cloud (software only) for VMware, startup script execution is configured as a first-boot action when creating the Windows node template, and not a recurring boot action. The documentation states that after a VM reboot, the startup script does not run again, and if `Cloudbase-Init` has already executed the `UserDataPlugin` (`UserDataPlugin: 1`), the subsequent bootstrap/startup script execution is skipped. Therefore, behavior after reboot is effectively skip-on-repeat unless custom script logic explicitly handles repeated runs idempotently.

## Evidence Summary

The cited Windows node-pool user guide documents that Windows startup scripts are intended for first boot only, and that rebooted nodes will skip script execution due to Cloudbase-Init’s one-time plugin marker.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Windows node becomes NotReady after rebooting the VM Currently, the node startup script only runs the first time the VM is powered on, so if you reboot the VM, the startup script does not run again.
- To check this, get an SSH connection to the Windows VM and run the following command: ls "HKLM:\\Software\Cloudbase Solutions\Cloudbase-Init\id-ovf\" If you find UserDataPlugin: 1 in the output, that means the cloudbase-init has already executed that plugin, which will cause the startup script execution to be skipped, and windows node won't be bootstrapped at all.
- The name has the following format: Successfully created Anthos Windows VM template "gke-on-prem-windows-server-2019- VERSION " Note: The created VM template will be used as the OS image for the Windows node pools and is prepared to trigger a script at first startup, which is required for the node to function correctly.
- It is recommended that you use a user account with the minimum permissions required for an Active Directory domain join, instead of using an Administrator user. (Optional) To avoid storing the password as cleartext in this script, place the password in a file on the VM template, let the script read from that password file, then delete the file after the domain join. $domain = "[DOMAIN NAME]" $password = "[PASSWORD]" ConvertTo-SecureString -asPlainText -Force $username = "$domain\[USERNAME]" $credential = New-Object System.Management.Automation.PSCredential($username,$password) Add-Computer -DomainName $domain -Credential $credential -restart –force Create a Windows VM template with a customized script: gkectl prepare windows --base-vm-template BASE WINDOWS VM TEMPLATE NAME --bundle-path BUNDLE PATH --kubeconfig ADMIN CLUSTER KUBECONFIG --customized-script CUSTOMIZED SCRIPT PATH Replace BUNDLE PATH with the path to the bundle.

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- In this example, the configuration being validated uses integrated load balancing mode and static IPs without an external Docker registry: - Validation Category: Config Check - [SUCCESS] Config - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: GCP - [SUCCESS] GCP Service - [SUCCESS] GCP Service Account - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access - Validation Category: vCenter - [SUCCESS] Credentials - [SUCCESS] Version - [SUCCESS] Datacenter - [SUCCESS] Datastore - [SUCCESS] Data Disk - [SUCCESS] Resource Pool - [SUCCESS] Network - [SUCCESS] VSphere CSI Driver - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster F5 (credentials, partition and user role) - [SUCCESS] User Cluster F5 (credentials, partition and user role) - Validation Category: Network Configuration - [SUCCESS] CIDR, VIP and static IP (availability and overlapping) - Validation Category: DNS - [SUCCESS] DNS (availability) - Validation Category: VIPs - [SUCCESS] ping (availability) - Validation Category: Node IPs - [SUCCESS] ping (availability) Now running slow validation checks. ...
- DONE - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster VIP and NodeIP - [SUCCESS] Admin Cluster F5 Access - [SUCCESS] User Cluster VIP and NodeIP - [SUCCESS] User Cluster F5 Access - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: vCenter on test VMs - [SUCCESS] Test VM: VCenter Access and Permission - Validation Category: DNS on test VMs - [SUCCESS] Test VM: DNS Availability - Validation Category: TOD on test VMs - [SUCCESS] Test VM: TOD Availability - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access Deleting test VMs with admin cluster configuration...
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.
- A test VM has a name like this: check-config-[dhcp static]-[random number] To delete the VM: Right-click the VM, and click Power > Power Off After the VM has powered off, right-click the VM again, and click Delete from Disk .

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- For more information about possible errors and how to fix them, see Troubleshoot user cluster creation in the Google Cloud console . gcloud CLI You use the following command to create a user cluster: gcloud container vmware clusters create After creating the cluster, you need to create at least one node pool using the following command: gcloud container vmware node-pools create Most of the flags for creating the cluster and the node pool correspond to the fields in the user cluster configuration file .
- Create a node pool After the cluster is created, you need to create at least one node pool before deploying workloads. gcloud container vmware node-pools create NODE POOL NAME \ --cluster= USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --image-type= IMAGE TYPE \ --boot-disk-size= BOOT DISK SIZE \ --cpus= vCPUS \ --memory= MEMORY \ --replicas= NODES \ --enable-load-balancer Replace the following: NODE POOL NAME : A name of your choice for the node pool.
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.

