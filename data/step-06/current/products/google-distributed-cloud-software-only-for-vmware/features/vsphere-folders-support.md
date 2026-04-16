---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.224Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere folders support"
feature_slug: "vsphere-folders-support"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "vsphere"
  - "folders"
  - "anthos"
  - "clusters"
  - "vmware"
  - "can"
  - "installed"
  - "reduce"
---

# vSphere folders support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on VMware can be installed in vSphere folders to reduce the permissions required for the vSphere user.

## Extended Definition

The vSphere folders support feature in Google Distributed Cloud (software only) for VMware refers to using vSphere folder objects within the vCenter hierarchy when planning Anthos cluster deployments, with vCenter roles/permissions configured to propagate across that hierarchy. The documented role and permission model allows privileges to be granted at broader hierarchy levels, which can reduce the need to assign permissions on many individual objects.

## Evidence Summary

These pages confirm that vSphere hierarchies include folders and that vCenter permissions can be created and propagated across vSphere objects, but they do not directly state a dedicated, explicit step for installing user clusters specifically within folders.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- The output of the gcloud container vmware clusters query-version-config command is similar to the following: versions: - isInstalled: true version: 1.28.800-gke.109 - version: 1.29.0-gke.1456 - version: 1.29.100-gke.248 - version: 1.29.200-gke.245 - version: 1.29.300-gke.184 The command also outputs an explanation of the versions that you can use for user cluster creation or upgrade.
- You could then use your local instance of vCenter Server to create a vSphere object hierarchy, including data centers, clusters, resource pools, datastores, and folders.
- If you rerun the gcloud container vmware clusters query-version-config , the version that you specified is annotated with isInstalled: true .

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To upgrade a user cluster: Update the Google Cloud CLI components: gcloud components update Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION The output of the command is similar to the following: versions: - version: 1.16.3-gke.45 - version: 1.16.2-gke.28 - version: 1.16.1-gke.45 - version: 1.16.0-gke.669 - version: 1.15.6-gke.25 - version: 1.15.5-gke.41 An Anthos version must be made available on the admin cluster ahead of the user cluster creation or upgrade.
- To install the version in the admin cluster, run: $ gcloud container vmware admin-clusters update my-admin-cluster --required-platform-version=VERSION Download the new version of the components and deploy them in the admin cluster: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --project= PROJECT ID \ --location= REGION \ --required-platform-version= VERSION This command downloads the version of the components that you specify in --required-platform-version to the admin cluster, and then deploys the the components.
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET VERSION /gke-onprem-vsphere- TARGET VERSION .tgz ./ Upgrade the admin cluster The steps for upgrading the admin cluster vary slightly depending on the minor version you're upgrading to (the target version): 1.31 and higher If the target version is 1.31 or higher, before you upgrade your user clusters to the next minor version, you need to upgrade your admin cluster.
- What's next gcloud CLI reference documentation gcloud container vmware clusters gcloud container vmware node-pools gcloud container vmware admin-clusters Terraform reference documentation google gkeonprem vmware cluster google gkeonprem vmware node pool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "vSphere requirements \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Enable Network File Copy (NFC) traffic among ESXi hosts to allow OS template sharing, if you plan to deploy Anthos clusters on VMware on different vSphere clusters or resource pools within the same vSphere datacenter.
- For example: export GOVC URL=vc-01.example export GOVC USERNAME=alice@vsphere.local export GOVC PASSWORD=8ODQYHo2Yl@ Create custom roles Create the ClusterEditor, SessionValidator, and ReadOnly custom roles: govc role.create ClusterEditor System.Read System.View System.Anonymous Host.Inventory.EditCluster govc role.create SessionValidator System.Read System.View System.Anonymous Sessions.ValidateSession Cns.Searchable StorageProfile.View govc role.create ReadOnly System.Read System.View System.Anonymous View the command to create the Anthos custom role. govc role.create anthos Cns.Searchable Cryptographer.Access Datastore.AllocateSpace Datastore.Browse Datastore.Config Datastore.FileManagement Datastore.DeleteFile Datastore.UpdateVirtualMachineFiles Datastore.UpdateVirtualMachineMetadata Folder.Create Folder.Delete Folder.Move Folder.Rename Host.Inventory.EditCluster InventoryService.Tagging.CreateTag InventoryService.Tagging.DeleteTag InventoryService.Tagging.AttachTag InventoryService.Tagging.ObjectAttachable Sessions.ValidateSession Network.Assign Resource.ApplyRecommendation Resource.AssignVMToPool Resource.ColdMigrate Resource.HotMigrate Resource.QueryVMotion StorageViews.View System.Anonymous System.Read System.View Task.Create Task.Update VApp.Import VApp.ApplicationConfig VApp.InstanceConfig VirtualMachine.Config.AddExistingDisk VirtualMachine.Config.AddNewDisk VirtualMachine.Config.AddRemoveDevice VirtualMachine.Config.AdvancedConfig VirtualMachine.Config.Annotation VirtualMachine.Config.CPUCount VirtualMachine.Config.Resource VirtualMachine.Config.ManagedBy VirtualMachine.Config.ChangeTracking VirtualMachine.Config.DiskLease VirtualMachine.Config.MksControl VirtualMachine.Config.DiskExtend VirtualMachine.Config.HostUSBDevice VirtualMachine.Config.Memory VirtualMachine.Config.EditDevice VirtualMachine.Config.QueryFTCompatibility VirtualMachine.Config.QueryUnownedFiles VirtualMachine.Config.RawDevice VirtualMachine.Config.ReloadFromPath VirtualMachine.Config.RemoveDisk VirtualMachine.Config.Rename VirtualMachine.Config.ResetGuestInfo VirtualMachine.Config.Settings VirtualMachine.Config.SwapPlacement VirtualMachine.Config.ToggleForkParent VirtualMachine.Config.UpgradeVirtualHardware VirtualMachine.GuestOperations.ModifyAliases VirtualMachine.GuestOperations.QueryAliases VirtualMachine.GuestOperations.Modify VirtualMachine.GuestOperations.Execute VirtualMachine.GuestOperations.Query VirtualMachine.Interact.AnswerQuestion VirtualMachine.Interact.Backup VirtualMachine.Interact.SetCDMedia VirtualMachine.Interact.SetFloppyMedia VirtualMachine.Interact.ConsoleInteract VirtualMachine.Interact.CreateScreenshot VirtualMachine.Interact.DefragmentAllDisks VirtualMachine.Interact.DeviceConnection VirtualMachine.Interact.DnD VirtualMachine.Interact.GuestControl VirtualMachine.Interact.PutUsbScanCodes VirtualMachine.Interact.Pause VirtualMachine.Interact.SESparseMaintenance VirtualMachine.Interact.PowerOff VirtualMachine.Interact.PowerOn VirtualMachine.Interact.Record VirtualMachine.Interact.Replay VirtualMachine.Interact.Reset VirtualMachine.Interact.EnableSecondary VirtualMachine.Interact.Suspend VirtualMachine.Interact.DisableSecondary VirtualMachine.Interact.MakePrimary VirtualMachine.Interact.TerminateFaultTolerantVM VirtualMachine.Interact.TurnOffFaultTolerance VirtualMachine.Interact.CreateSecondary VirtualMachine.Interact.ToolsInstall VirtualMachine.Inventory.CreateFromExisting VirtualMachine.Inventory.Create VirtualMachine.Inventory.Move VirtualMachine.Inventory.Register VirtualMachine.Inventory.Delete VirtualMachine.Inventory.Unregister VirtualMachine.Provisioning.DiskRandomAccess VirtualMachine.Provisioning.FileRandomAccess VirtualMachine.Provisioning.DiskRandomRead VirtualMachine.Provisioning.GetVmFiles VirtualMachine.Provisioning.PutVmFiles VirtualMachine.Provisioning.CloneTemplate VirtualMachine.Provisioning.Clone VirtualMachine.Provisioning.CreateTemplateFromVM VirtualMachine.Provisioning.Customize VirtualMachine.Provisioning.DeployTemplate VirtualMachine.Provisioning.MarkAsTemplate VirtualMachine.Provisioning.MarkAsVM VirtualMachine.Provisioning.ModifyCustSpecs VirtualMachine.Provisioning.PromoteDisks VirtualMachine.Provisioning.ReadCustSpecs VirtualMachine.Namespace.Event VirtualMachine.Namespace.EventNotify VirtualMachine.Namespace.Management VirtualMachine.Namespace.ModifyContent VirtualMachine.Namespace.Query VirtualMachine.Namespace.ReadContent VirtualMachine.State.CreateSnapshot VirtualMachine.State.RemoveSnapshot VirtualMachine.State.RenameSnapshot VirtualMachine.State.RevertToSnapshot VirtualMachine.Hbr.ConfigureReplication VirtualMachine.Hbr.ReplicaManagement VirtualMachine.Hbr.MonitorReplication Create a permission that grants the ClusterEditor role A permissions takes a (user, role) pair and associates it with an object.
- Create one global permission: govc permissions.set -principal ACCOUNT \ -role Anthos -propagate=true Replace the following: Replace ACCOUNT with the vCenter Server user account that is being granted the role For example, the following command creates a global permission that grants the Anthos role to bob@vsphere.local.
- The permission propagates to all objects in your vSphere hierarchies: govc permissions.set -principal bob@vsphere.local -role Anthos -propagate=true Known issues See Installer fails when creating vSphere datadisk .

