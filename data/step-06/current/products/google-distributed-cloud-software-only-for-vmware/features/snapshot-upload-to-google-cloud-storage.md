---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.205Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Snapshot upload to Google Cloud Storage"
feature_slug: "snapshot-upload-to-google-cloud-storage"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
keywords:
  - "snapshot"
  - "upload"
  - "storage"
  - "gkectl"
  - "diagnose"
  - "can"
  - "automatically"
  - "snapshots"
---

# Snapshot upload to Google Cloud Storage

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl diagnose snapshot can automatically upload snapshots to a Google Cloud Storage bucket.

## Extended Definition

`gkectl diagnose snapshot` is a troubleshooting command in Google Distributed Cloud (software only) for VMware used to create cluster diagnostic snapshots. The provided documentation describes these snapshots as helpful for diagnosing cluster issues (including diagnostics for Cloud Customer Care) and refers to commands that collect logs and system troubleshooting outputs. The available excerpts do not explicitly document the automatic upload destination or mechanism to Google Cloud Storage, so that detail cannot be confirmed from the provided text.

## Evidence Summary

These pages establish that `gkectl diagnose snapshot` exists as a supported troubleshooting command for creating diagnostic snapshots, but the excerpts do not explicitly confirm automatic upload of those snapshots to a Google Cloud Storage bucket.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.
- Microsoft registry URLs, needed by every Windows node if using GCR mcr.microsoft.com .data.mcr.microsoft.com go.microsoft.com winlayers.cdn.mscr.io Microsoft WSUS server URLs, needed by gkectl prepare windows on the Windows VM windowsupdate.microsoft.com .windowsupdate.microsoft.com .windowsupdate.microsoft.com .update.microsoft.com .windowsupdate.com download.windowsupdate.com download.microsoft.com .download.windowsupdate.com wustat.windows.com ntservicepack.microsoft.com go.microsoft.com dl.delivery.mp.microsoft.com Cloudbase-Init URL, needed by gkectl prepare windows on the Windows VM https://cloudbase.it Powershell Gallery URLs, needed by gkectl prepare windows on the Windows VM psg-prod-eastus.azureedge.net az818661.vo.msecnd.net devopsgallerystorage.blob.core.windows.net .powershellgallery.com Windows Update Service, needed by gkectl prepare windows on the Windows VM onegetcdn.azureedge.net sws.update.microsoft.com tsfe.trafficshaping.dsp.mp.microsoft.com fe3.delivery.mp.microsoft.com .prod.do.dsp.mp.microsoft.com emdl.ws.microsoft.com adl.windows.com activation-v2.sls.microsoft.com crl.microsoft.com ocsp.digicert.com ctldl.windowsupdate.com login.live.com licensing.mp.microsoft.com www.msftconnecttest.com settings-win.data.microsoft.com wdcp.microsoft.com smartscreen-prod.microsoft.com checkappexec.microsoft.com arc.msn.com ris.api.iris.microsoft.com .tlu.dl.delivery.mp.microsoft.com .au.windowsupdate.com www.microsoft.com fe3.delivery.dsp.mp.microsoft.com.nsatc.net cs9.wac.phicdn.net geo-prod.do.dsp.mp.microsoft.com slscr.update.microsoft.com v10.events.data.microsoft.com Access for Installing docker, needed by gkectl prepare windows on the Windows VM dockermsft.azureedge.net Note: See a full list of URLs used by Windows Server .
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .

### "Diagnose cluster issues \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Run gkectl diagnose cluster automatically in gkectl diagnose snapshot Public page https://cloud.google.com/anthos/clusters/docs/on-prem/latest/diagnose#overview diagnose snapshot Troubleshoot The following table outlines some possible resolutions for problems with running the gkectl diagnose cluster command: Issue Possible causes Resolution Kubernetes API server is not reachable, either for the admin cluster, or for user clusters.
- For more information how to use the gkectl diagnose snapshot command to create snapshots that can help Cloud Customer Care diagnose issues, see Create snapshots to diagnose clusters .
- The gkectl tool has two commands for troubleshooting issues with clusters: gkectl diagnose cluster and gkectl diagnose snapshot .
- Time of day (TOD) Node network policy for a cluster with Dataplane V2 enabled Overall healthiness of the Dataplane V2 node agent Diagnose an admin cluster To diagnose an admin cluster, specify the path to your admin cluster: gkectl diagnose cluster --kubeconfig= ADMIN CLUSTER KUBECONFIG Replace ADMIN CLUSTER KUBECONFIG with the path of your admin cluster kubeconfig file.

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- When the restore finishes, run the following command to verify that it was successful: gkectl diagnose cluster --cluster-name CLUSTER NAME \ --kubeconfig GENERATED KUBECONFIG Replace GENERATED KUBECONFIG with the generated kubeconfig file.
- To back up a cluster: Run the following command to check your cluster: gkectl diagnose cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you plan to back up.
- Backup to vSphere To configure backups so that the backup file for both admin and user clusters are uploaded to vSphere in addition to being saved on your admin workstation, do the following: Add the clusterBackup.datastore field to your admin cluster configuration file: clusterBackup : datastore : DATASTORE Replace DATASTORE with the datastore where you want to store the backup.
- Optionally, you can specify a different name and location for your backup file with the --backup-file flag, for example: gkectl backup cluster testuser \ --kubeconfig admin-cluster/kubeconfig \ --backup-file cluster-backups/testuser-backup-aug-23-2025.tar.gz The backup file expires after a year and the cluster restore process doesn't work with expired backup files.

