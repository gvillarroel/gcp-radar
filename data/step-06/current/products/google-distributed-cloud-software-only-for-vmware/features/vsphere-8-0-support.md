---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.089Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere 8.0 support"
feature_slug: "vsphere-8-0-support"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
keywords:
  - "vsphere"
  - "supports"
  - "anthos"
  - "clusters"
  - "vmware"
  - "adds"
  - "preview"
---

# vSphere 8.0 support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The product supports vSphere 8.0; Anthos clusters on VMware adds preview support for vSphere 8.0.

## Extended Definition

The provided pages show that Google Distributed Cloud (software only) for VMware includes Anthos cluster operations that depend on vSphere environments (for example, vSphere role/permission setup and vSphere-integrated features such as vSphere tags, VM tracking, and vSphere host groups). However, within the supplied excerpts, there is no explicit statement that vSphere 8.0 itself is supported or that support was added in preview.

## Evidence Summary

The cited pages confirm VMware-vSphere integration points and vSphere-related feature availability in Advanced clusters, but they do not directly corroborate a vSphere 8.0 support claim.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)

## Supporting Pages

### "vSphere requirements \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states support for ESXi and vCenter Server 8.0 and later versions.

Evidence snippets:
- Enable Network File Copy (NFC) traffic among ESXi hosts to allow OS template sharing, if you plan to deploy Anthos clusters on VMware on different vSphere clusters or resource pools within the same vSphere datacenter.
- For example: export GOVC URL=vc-01.example export GOVC USERNAME=alice@vsphere.local export GOVC PASSWORD=8ODQYHo2Yl@ Create custom roles Create the ClusterEditor, SessionValidator, and ReadOnly custom roles: govc role.create ClusterEditor System.Read System.View System.Anonymous Host.Inventory.EditCluster govc role.create SessionValidator System.Read System.View System.Anonymous Sessions.ValidateSession Cns.Searchable StorageProfile.View govc role.create ReadOnly System.Read System.View System.Anonymous View the command to create the Anthos custom role. govc role.create anthos Cns.Searchable Cryptographer.Access Datastore.AllocateSpace Datastore.Browse Datastore.Config Datastore.FileManagement Datastore.DeleteFile Datastore.UpdateVirtualMachineFiles Datastore.UpdateVirtualMachineMetadata Folder.Create Folder.Delete Folder.Move Folder.Rename Host.Inventory.EditCluster InventoryService.Tagging.CreateTag InventoryService.Tagging.DeleteTag InventoryService.Tagging.AttachTag InventoryService.Tagging.ObjectAttachable Sessions.ValidateSession Network.Assign Resource.ApplyRecommendation Resource.AssignVMToPool Resource.ColdMigrate Resource.HotMigrate Resource.QueryVMotion StorageViews.View System.Anonymous System.Read System.View Task.Create Task.Update VApp.Import VApp.ApplicationConfig VApp.InstanceConfig VirtualMachine.Config.AddExistingDisk VirtualMachine.Config.AddNewDisk VirtualMachine.Config.AddRemoveDevice VirtualMachine.Config.AdvancedConfig VirtualMachine.Config.Annotation VirtualMachine.Config.CPUCount VirtualMachine.Config.Resource VirtualMachine.Config.ManagedBy VirtualMachine.Config.ChangeTracking VirtualMachine.Config.DiskLease VirtualMachine.Config.MksControl VirtualMachine.Config.DiskExtend VirtualMachine.Config.HostUSBDevice VirtualMachine.Config.Memory VirtualMachine.Config.EditDevice VirtualMachine.Config.QueryFTCompatibility VirtualMachine.Config.QueryUnownedFiles VirtualMachine.Config.RawDevice VirtualMachine.Config.ReloadFromPath VirtualMachine.Config.RemoveDisk VirtualMachine.Config.Rename VirtualMachine.Config.ResetGuestInfo VirtualMachine.Config.Settings VirtualMachine.Config.SwapPlacement VirtualMachine.Config.ToggleForkParent VirtualMachine.Config.UpgradeVirtualHardware VirtualMachine.GuestOperations.ModifyAliases VirtualMachine.GuestOperations.QueryAliases VirtualMachine.GuestOperations.Modify VirtualMachine.GuestOperations.Execute VirtualMachine.GuestOperations.Query VirtualMachine.Interact.AnswerQuestion VirtualMachine.Interact.Backup VirtualMachine.Interact.SetCDMedia VirtualMachine.Interact.SetFloppyMedia VirtualMachine.Interact.ConsoleInteract VirtualMachine.Interact.CreateScreenshot VirtualMachine.Interact.DefragmentAllDisks VirtualMachine.Interact.DeviceConnection VirtualMachine.Interact.DnD VirtualMachine.Interact.GuestControl VirtualMachine.Interact.PutUsbScanCodes VirtualMachine.Interact.Pause VirtualMachine.Interact.SESparseMaintenance VirtualMachine.Interact.PowerOff VirtualMachine.Interact.PowerOn VirtualMachine.Interact.Record VirtualMachine.Interact.Replay VirtualMachine.Interact.Reset VirtualMachine.Interact.EnableSecondary VirtualMachine.Interact.Suspend VirtualMachine.Interact.DisableSecondary VirtualMachine.Interact.MakePrimary VirtualMachine.Interact.TerminateFaultTolerantVM VirtualMachine.Interact.TurnOffFaultTolerance VirtualMachine.Interact.CreateSecondary VirtualMachine.Interact.ToolsInstall VirtualMachine.Inventory.CreateFromExisting VirtualMachine.Inventory.Create VirtualMachine.Inventory.Move VirtualMachine.Inventory.Register VirtualMachine.Inventory.Delete VirtualMachine.Inventory.Unregister VirtualMachine.Provisioning.DiskRandomAccess VirtualMachine.Provisioning.FileRandomAccess VirtualMachine.Provisioning.DiskRandomRead VirtualMachine.Provisioning.GetVmFiles VirtualMachine.Provisioning.PutVmFiles VirtualMachine.Provisioning.CloneTemplate VirtualMachine.Provisioning.Clone VirtualMachine.Provisioning.CreateTemplateFromVM VirtualMachine.Provisioning.Customize VirtualMachine.Provisioning.DeployTemplate VirtualMachine.Provisioning.MarkAsTemplate VirtualMachine.Provisioning.MarkAsVM VirtualMachine.Provisioning.ModifyCustSpecs VirtualMachine.Provisioning.PromoteDisks VirtualMachine.Provisioning.ReadCustSpecs VirtualMachine.Namespace.Event VirtualMachine.Namespace.EventNotify VirtualMachine.Namespace.Management VirtualMachine.Namespace.ModifyContent VirtualMachine.Namespace.Query VirtualMachine.Namespace.ReadContent VirtualMachine.State.CreateSnapshot VirtualMachine.State.RemoveSnapshot VirtualMachine.State.RenameSnapshot VirtualMachine.State.RevertToSnapshot VirtualMachine.Hbr.ConfigureReplication VirtualMachine.Hbr.ReplicaManagement VirtualMachine.Hbr.MonitorReplication Create a permission that grants the ClusterEditor role A permissions takes a (user, role) pair and associates it with an object.
- Create one global permission: govc permissions.set -principal ACCOUNT \ -role Anthos -propagate=true Replace the following: Replace ACCOUNT with the vCenter Server user account that is being granted the role For example, the following command creates a global permission that grants the Anthos role to bob@vsphere.local.
- The permission propagates to all objects in your vSphere hierarchies: govc permissions.set -principal bob@vsphere.local -role Anthos -propagate=true Known issues See Installer fails when creating vSphere datadisk .

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Advanced clusters Stay organized with collections Save and categorize content based on your preferences.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.
- For version 1.32 advanced clusters, the gkectl diagnose cluster command runs health checks for the specified cluster. vSphere tags and VM tracking GA GA No differences. vSphere host group GA GA No differences.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Advanced clusters Stay organized with collections Save and categorize content based on your preferences.

