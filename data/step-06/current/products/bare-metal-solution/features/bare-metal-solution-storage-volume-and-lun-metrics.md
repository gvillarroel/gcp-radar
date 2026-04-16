---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.418Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution storage volume and LUN metrics"
feature_slug: "bare-metal-solution-storage-volume-and-lun-metrics"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/view-infrastructure-metrics"
  - "https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/disk-snapshot-backup-recovery"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide"
keywords:
  - "metrics"
  - "volume"
  - "storage"
---

# Bare Metal Solution storage volume and LUN metrics

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Bare Metal Solution now exposes storage volume and LUN metrics in the Google Cloud console.

## Extended Definition

Bare Metal Solution now exposes storage volume and LUN metrics in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/view-infrastructure-metrics](https://docs.cloud.google.com/bare-metal/docs/view-infrastructure-metrics)
- [https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/disk-snapshot-backup-recovery](https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/disk-snapshot-backup-recovery)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)

## Supporting Pages

### View Bare Metal Solution metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/view-infrastructure-metrics](https://docs.cloud.google.com/bare-metal/docs/view-infrastructure-metrics)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view metrics for your storage volume or LUNs, follow these steps: In the Google Cloud console, go to the Compute Engine > Bare Metal Solution > Volumes page.
- View storage volume and LUN metrics The metrics for a storage volume and its LUNs are collected only when the storage volume is attached to a server.
- If you don't toggle Show LUN details , the Observability tab displays the storage volume metrics.
- To view metrics for the LUNs of the storage volume, click the Show LUN details toggle.

### "Backup and recovery for SAP HANA by using disk snapshots \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/disk-snapshot-backup-recovery](https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/disk-snapshot-backup-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scale-up with /hana/data on multiple disks The following flowchart shows the steps that the agent performs to create a disk snapshot based backup for your SAP HANA scale-up system when the /hana/data volume is hosted on more than one disk: How the agent's disk snapshot feature creates a backup for your SAP HANA scale-up system that uses striped disks to host the /hana/data volume: After you run the hanadiskbackup command, the agent does the following: Validates all input arguments provided to the hanadiskbackup command.
- Scale-up with /hana/data on one disk The following flowchart shows the steps that the agent performs to create a disk snapshot based backup for your SAP HANA scale-up system when the /hana/data volume is hosted on a single disk: How the agent's disk snapshot feature creates a backup for your SAP HANA scale-up system that uses a single disk to host the /hana/data volume: After you run the hanadiskbackup command, the agent does the following: Validates all input arguments provided to the hanadiskbackup command.
- The value true means success and false means failure. workload.googleapis.com/sap/agent/hanadiskbackup/totaltime Int Informs the time, in seconds, that the backup operation takes to create the disk snapshots, including the time to upload them to the specified Cloud Storage bucket. workload.googleapis.com/sap/agent/hanadiskbackup/dbfreezetime Int Informs the time, in seconds, that your SAP HANA file system was freezed during the disk snapshot based backup operation.
- Scale-up with striped data disks If your /hana/data volume is hosted on more than one disk, then the following flowchart shows how you use the agent's disk snapshot feature to recover an SAP HANA database: How you recover an SAP HANA database by using agent's disk snapshot feature To recover your SAP HANA database by using a disk snapshot, do the following: Recover the disk hosting your /hana/data volume by running the agent's hanadiskrestore command.

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana ha ilb/sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com Create the instances: $ gcloud deployment-manager deployments create deployment-name --config template-name .yaml The above command invokes the Deployment Manager, which sets up the Google Cloud infrastructure and then hands control over to a script that installs and configures SAP HANA and the HA cluster.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates /sap hana ha ilb /sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/rhel-8-1-sap-ha linuxImageProject: rhel-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com SLES resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- INFO - Running command: select from dummy DUMMY "X" 1 row selected (overall time 4124 usec; server time 130 usec) INFO - Running command: ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM') SET ('persistence', 'basepath persistent memory volumes') = '/hana/tmpfs0/TST;/hana/tmpfs1/TST;' 0 rows affected (overall time 3570 usec; server time 2239 usec) INFO - Running command: ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM') SET ('persistent memory', 'table unload action') = 'retain'; 0 rows affected (overall time 4308 usec; server time 2441 usec) INFO - Running command: ALTER SYSTEM ALTER CONFIGURATION ('indexserver.ini', 'SYSTEM') SET ('persistent memory', 'table default') = 'ON'; 0 rows affected (overall time 3422 usec; server time 2152 usec) Connect to SAP HANA Note that because these instructions don't use an external IP address for SAP HANA, you can only connect to the SAP HANA instances through the bastion instance using SSH or through the Windows server through SAP HANA Studio.
- Go to the Cloud Shell Download the template.yaml configuration file template for the SAP HANA high-availability cluster to your working directory by entering the following command in the Cloud Shell or gcloud CLI: $ wget https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/template.yaml Optionally, rename the template.yaml file to identify the configuration it defines.

