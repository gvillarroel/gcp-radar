---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.291Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere 6.7 Update 3 support"
feature_slug: "vsphere-6-7-update-3-support"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "vsphere"
  - "update"
  - "gke"
  - "prem"
  - "supports"
---

# vSphere 6.7 Update 3 support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

GKE on-prem supports vSphere 6.7 Update 3.

## Extended Definition

For Google Distributed Cloud (software only) for VMware, this feature means the platform can be operated on a vSphere environment at version 6.7 Update 3 or later in contexts such as Windows Server OS node pool deployment. A separate support section also states support for ESXi/vCenter Server 7.0 Update 2+ and 8.0+, with a recommendation to use 8.0 or 7.0 Update 3+, which indicates version requirements differ by documentation section/version context.

## Evidence Summary

The cited docs provide vSphere minimum-version requirements, including an explicit 6.7 Update 3+ statement and a separate ESXi/vCenter requirement on 7.0 Update 2+ / 8.0+, so the feature is supported by evidence but with inconsistent version scope.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "vSphere requirements \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For example: export GOVC URL=vc-01.example export GOVC USERNAME=alice@vsphere.local export GOVC PASSWORD=8ODQYHo2Yl@ Create custom roles Create the ClusterEditor, SessionValidator, and ReadOnly custom roles: govc role.create ClusterEditor System.Read System.View System.Anonymous Host.Inventory.EditCluster govc role.create SessionValidator System.Read System.View System.Anonymous Sessions.ValidateSession Cns.Searchable StorageProfile.View govc role.create ReadOnly System.Read System.View System.Anonymous View the command to create the Anthos custom role. govc role.create anthos Cns.Searchable Cryptographer.Access Datastore.AllocateSpace Datastore.Browse Datastore.Config Datastore.FileManagement Datastore.DeleteFile Datastore.UpdateVirtualMachineFiles Datastore.UpdateVirtualMachineMetadata Folder.Create Folder.Delete Folder.Move Folder.Rename Host.Inventory.EditCluster InventoryService.Tagging.CreateTag InventoryService.Tagging.DeleteTag InventoryService.Tagging.AttachTag InventoryService.Tagging.ObjectAttachable Sessions.ValidateSession Network.Assign Resource.ApplyRecommendation Resource.AssignVMToPool Resource.ColdMigrate Resource.HotMigrate Resource.QueryVMotion StorageViews.View System.Anonymous System.Read System.View Task.Create Task.Update VApp.Import VApp.ApplicationConfig VApp.InstanceConfig VirtualMachine.Config.AddExistingDisk VirtualMachine.Config.AddNewDisk VirtualMachine.Config.AddRemoveDevice VirtualMachine.Config.AdvancedConfig VirtualMachine.Config.Annotation VirtualMachine.Config.CPUCount VirtualMachine.Config.Resource VirtualMachine.Config.ManagedBy VirtualMachine.Config.ChangeTracking VirtualMachine.Config.DiskLease VirtualMachine.Config.MksControl VirtualMachine.Config.DiskExtend VirtualMachine.Config.HostUSBDevice VirtualMachine.Config.Memory VirtualMachine.Config.EditDevice VirtualMachine.Config.QueryFTCompatibility VirtualMachine.Config.QueryUnownedFiles VirtualMachine.Config.RawDevice VirtualMachine.Config.ReloadFromPath VirtualMachine.Config.RemoveDisk VirtualMachine.Config.Rename VirtualMachine.Config.ResetGuestInfo VirtualMachine.Config.Settings VirtualMachine.Config.SwapPlacement VirtualMachine.Config.ToggleForkParent VirtualMachine.Config.UpgradeVirtualHardware VirtualMachine.GuestOperations.ModifyAliases VirtualMachine.GuestOperations.QueryAliases VirtualMachine.GuestOperations.Modify VirtualMachine.GuestOperations.Execute VirtualMachine.GuestOperations.Query VirtualMachine.Interact.AnswerQuestion VirtualMachine.Interact.Backup VirtualMachine.Interact.SetCDMedia VirtualMachine.Interact.SetFloppyMedia VirtualMachine.Interact.ConsoleInteract VirtualMachine.Interact.CreateScreenshot VirtualMachine.Interact.DefragmentAllDisks VirtualMachine.Interact.DeviceConnection VirtualMachine.Interact.DnD VirtualMachine.Interact.GuestControl VirtualMachine.Interact.PutUsbScanCodes VirtualMachine.Interact.Pause VirtualMachine.Interact.SESparseMaintenance VirtualMachine.Interact.PowerOff VirtualMachine.Interact.PowerOn VirtualMachine.Interact.Record VirtualMachine.Interact.Replay VirtualMachine.Interact.Reset VirtualMachine.Interact.EnableSecondary VirtualMachine.Interact.Suspend VirtualMachine.Interact.DisableSecondary VirtualMachine.Interact.MakePrimary VirtualMachine.Interact.TerminateFaultTolerantVM VirtualMachine.Interact.TurnOffFaultTolerance VirtualMachine.Interact.CreateSecondary VirtualMachine.Interact.ToolsInstall VirtualMachine.Inventory.CreateFromExisting VirtualMachine.Inventory.Create VirtualMachine.Inventory.Move VirtualMachine.Inventory.Register VirtualMachine.Inventory.Delete VirtualMachine.Inventory.Unregister VirtualMachine.Provisioning.DiskRandomAccess VirtualMachine.Provisioning.FileRandomAccess VirtualMachine.Provisioning.DiskRandomRead VirtualMachine.Provisioning.GetVmFiles VirtualMachine.Provisioning.PutVmFiles VirtualMachine.Provisioning.CloneTemplate VirtualMachine.Provisioning.Clone VirtualMachine.Provisioning.CreateTemplateFromVM VirtualMachine.Provisioning.Customize VirtualMachine.Provisioning.DeployTemplate VirtualMachine.Provisioning.MarkAsTemplate VirtualMachine.Provisioning.MarkAsVM VirtualMachine.Provisioning.ModifyCustSpecs VirtualMachine.Provisioning.PromoteDisks VirtualMachine.Provisioning.ReadCustSpecs VirtualMachine.Namespace.Event VirtualMachine.Namespace.EventNotify VirtualMachine.Namespace.Management VirtualMachine.Namespace.ModifyContent VirtualMachine.Namespace.Query VirtualMachine.Namespace.ReadContent VirtualMachine.State.CreateSnapshot VirtualMachine.State.RemoveSnapshot VirtualMachine.State.RenameSnapshot VirtualMachine.State.RevertToSnapshot VirtualMachine.Hbr.ConfigureReplication VirtualMachine.Hbr.ReplicaManagement VirtualMachine.Hbr.MonitorReplication Create a permission that grants the ClusterEditor role A permissions takes a (user, role) pair and associates it with an object.
- Category Privileges Cloud Native Store Searchable Datastore Allocate space Browse datastore Configure datastore Low level file operations Remove file Update virtual machine files Update virtual machine metadata Cryptographic operations Direct Access Folder Create folder Delete folder Move folder Rename folder Host Inventory Modify cluster vSphere Tagging Create vSphere Tag Delete vSphere Tag Assign or Unassign vSphere Tag Assign or Unassign vSphere Tag on Object (vSphere 7) Sessions Validate session Network Assign network Resource Apply recommendation Assign virtual machine to resource pool Migrate powered off virtual machine Migrate powered on virtual machine Query vMotion Storage Views View System Anonymous Read View Tasks Create task Update task vApp Import vApp application configuration vApp instance configuration Virtual Machine Configuration Add existing disk Add new disk Add or remove device Advanced configuration Change CPU count Change resource Configure managedBy Toggle disk change tracking Acquire disk lease Display connection settings Extend virtual disk Configure Host USB device.
- If you want to create CSI volume snapshots, then you must have one of the following versions: 7.0 Update 3 or a later update of version 7.0 8.0 or a later update of version 8.0 License requirements You need one of the following licenses: vSphere Enterprise Plus license.
- Google Distributed Cloud supports these versions of ESXi and vCenter Server 7.0 Update 2 and later updates of version 7.0 8.0 and later updates of version 8.0 We recommend that you use 8.0, or 7.0 Update 3, or a later update of version 7.0.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Your vSphere environment must be vSphere 6.7, Update 3 or later.
- Microsoft registry URLs, needed by every Windows node if using GCR mcr.microsoft.com .data.mcr.microsoft.com go.microsoft.com winlayers.cdn.mscr.io Microsoft WSUS server URLs, needed by gkectl prepare windows on the Windows VM windowsupdate.microsoft.com .windowsupdate.microsoft.com .windowsupdate.microsoft.com .update.microsoft.com .windowsupdate.com download.windowsupdate.com download.microsoft.com .download.windowsupdate.com wustat.windows.com ntservicepack.microsoft.com go.microsoft.com dl.delivery.mp.microsoft.com Cloudbase-Init URL, needed by gkectl prepare windows on the Windows VM https://cloudbase.it Powershell Gallery URLs, needed by gkectl prepare windows on the Windows VM psg-prod-eastus.azureedge.net az818661.vo.msecnd.net devopsgallerystorage.blob.core.windows.net .powershellgallery.com Windows Update Service, needed by gkectl prepare windows on the Windows VM onegetcdn.azureedge.net sws.update.microsoft.com tsfe.trafficshaping.dsp.mp.microsoft.com fe3.delivery.mp.microsoft.com .prod.do.dsp.mp.microsoft.com emdl.ws.microsoft.com adl.windows.com activation-v2.sls.microsoft.com crl.microsoft.com ocsp.digicert.com ctldl.windowsupdate.com login.live.com licensing.mp.microsoft.com www.msftconnecttest.com settings-win.data.microsoft.com wdcp.microsoft.com smartscreen-prod.microsoft.com checkappexec.microsoft.com arc.msn.com ris.api.iris.microsoft.com .tlu.dl.delivery.mp.microsoft.com .au.windowsupdate.com www.microsoft.com fe3.delivery.dsp.mp.microsoft.com.nsatc.net cs9.wac.phicdn.net geo-prod.do.dsp.mp.microsoft.com slscr.update.microsoft.com v10.events.data.microsoft.com Access for Installing docker, needed by gkectl prepare windows on the Windows VM dockermsft.azureedge.net Note: See a full list of URLs used by Windows Server .
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- When you create an admin workstation, it comes with a full bundle at: /var/lib/gke/bundles/gke-onprem-vsphere- VERSION -full.tgz Example: bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.10.0-gke.8.full.tgz" preparedSecrets.enabled Preview Optional Immutable Boolean Prepopulated: false Default: false Set this to true if you want to use prepared credentials in the admin cluster.
- After the cluster is enrolled in the GKE On-Prem API, if you need to unenroll the cluster, make the following change and then update the cluster: gkeOnPremAPI: enabled: false gkeOnPremAPI.location Immutable String Default: stackdriver.clusterLocation The Google Cloud region where the GKE On-Prem API runs and stores cluster metadata.
- After you add this section and create or update the admin cluster, if subsequently you remove the section and update the cluster, the update will fail. gkeOnPremAPI.enabled Required if the gkeOnPremAPI section is included.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.

