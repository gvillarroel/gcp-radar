---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.658Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "External NFS datastores"
feature_slug: "external-nfs-datastores"
latest_feature_date: "2026-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
keywords:
  - "external"
  - "nfs"
  - "datastores"
  - "lets"
  - "you"
  - "use"
  - "such"
  - "filestore"
---

# External NFS datastores

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Lets you use external NFS datastores such as Filestore or Google Cloud NetApp Volumes to scale storage independently of compute resources.

## Extended Definition

Lets you use external NFS datastores such as Filestore or Google Cloud NetApp Volumes to scale storage independently of compute resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)

## Supporting Pages

### "Back up Filestore instances to a backup vault \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can back up your data using either of the following methods: Configure a scheduled backup : automatically back up Filestore instances at specific intervals, such as daily, weekly, monthly, or yearly.
- The following table lists the dynamic permissions required for each API call: Resource Action to be Performed on the Resource Permissions required for each API call Project where it needs to be assigned Backup vault Create BackupVault backupdr.backupVaults.create Admin project Delete BackupVault backupdr.backupVaults.delete Admin project Update BackupVault backupdr.backupVaults.update Admin project List BackupVaults backupdr.backupVaults.list Admin project Get BackupVault backupdr.backupVaults.get Admin project Backup plan Create BackupPlan backupdr.backupPlans.create Admin project Delete BackupPlan backupdr.backupPlans.delete Admin project Get BackupPlan backupdr.backupPlans.get Admin project List Backup Plans backupdr.backupPlans.list Admin project Backup Plan Associations Create Backup Plan Association file.instances.updateBackupDrConfig Workload project backupdr.backupPlanAssociations.createForFilestoreInstance Workload project backupdr.backupPlans.useForFilestoreInstance Admin project Delete Backup Plan Association backupdr.backupPlanAssociations.deleteForFilestoreInstance Workload project file.instances.updateBackupDrConfig Workload project Trigger an on-demand backup on Backup Plan Association backupdr.backupPlanAssociations.triggerBackupForFilestoreInstance Workload project Get Backup Plan Association backupdr.backupPlanAssociations.getForFilestoreInstance Workload project List Backup Plan Associations backupdr.backupPlanAssociations.list Workload project Fetch Backup Plan Associations backupdr.backupPlanAssociations.fetchForFilestoreInstance Workload project Data Source Get DataSource backupdr.bvdataSources.get Admin project List DataSources backupdr.backupPlanAssociations.list Admin project Backups Get Backup backupdr.bvbackups.get Admin project List Backups backupdr.bvbackups.list Admin project Delete Backup backupdr.bvbackups.delete Admin project Restore Backup backupdr.bvbackups.useReadOnlyForFilestoreInstance Admin project Data Source References Get DataSource Reference backupdr.dataSourceReferences.getForFilestoreInstance Workload project Fetch DataSource References backupdr.dataSourceReferences.fetchForFilestoreInstance Workload project Operations List Operations backupdr.operations.list Respective project Get Operations backupdr.operations.get Respective project Grant backup vault access in the Filestore project To back up a Filestore instance in a project different from where the backup vault is created, you must grant the Backup and DR Filestore Operator (Beta) ( roles/backupdr.filestoreOperator ) IAM role for the backup vault service agent of the vault in the target project where the Filestore backup is to be performed.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to configure scheduled backups or run on-demand backups: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForFilestoreInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.get backupdr.backupPlanAssociations.triggerBackupForFilestoreInstance backupdr.backupPlanAssociations.deleteForFilestoreInstance backupdr.backupPlans.useForFilestoreInstance backupdr.locations.list backupdr.operations.get cloudasset.assets.searchAllResources You might also be able to get these permissions with custom roles or other predefined roles .
- Configure a scheduled backup Use the following instructions to configure a scheduled backup for Filestore instances. gcloud Configure a scheduled backup. gcloud backup-dr backup-plan-associations create BACKUP PLAN ASSOCIATION NAME \ --location = LOCATION \ --backup-plan = BACKUP PLAN \ --resource = projects/ PROJECT ID /locations/ RESOURCE LOCATION /instances/ INSTANCE NAME \ --resource-type = 'file.googleapis.com/Instance' Replace the following: BACKUP PLAN ASSOCIATION NAME : The name of the backup plan association.

### "Manage external access rules \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to External access rules Click the More more vert icon at the end of a row and select Edit . gcloud To edit an external access rule using the Google Cloud CLI, use the gcloud vmware network-policies update command : gcloud vmware network-policies external-access-rules update RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION \ --action= ACTION \ --ip-protocol UDP \ --priority 999 Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To edit an external access rule using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME ?update mask=action,ip protocol,priority" '{ "action": " ACTION ", "ip protocol": "udp", "priority": 999 }' Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .
- API To create an external access rule using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME -network-policy/externalAccessRules?external access rule id= RULE NAME " '{ "priority": 1000, "action": " ACTION ", "ip protocol": "tcp", "destination ip ranges": [{"ip address range": "0.0.0.0/0"}], "destination ports": ["22"], "source ip ranges": [{"ip address range": "34.148.30.114/32"}], "source ports": ["22", "10000-11000"] }' Replace the following: PROJECT ID : the project for this request REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .
- Click Create to add the new firewall rule to the list of firewall rules in your project. gcloud Create an external access rule using the Google Cloud CLI by entering the gcloud vmware network-policies create command : gcloud vmware network-policies external-access-rules create RULE NAME \ --location= REGION \ --network-policy= NETWORK POLICY NAME \ --priority=1000 \ --ip-protocol=TCP \ --destination-ranges=0.0.0.0/0 \ --source-ports=22,10000-11000 \ --destination-ports=22 \ --action= ACTION Replace the following: RULE NAME : the name for this rule REGION : the region for this request NETWORK POLICY NAME : the network policy for this request ACTION : the action to take, such as ACCESS or DENY .
- Go to External access rules Click the Delete delete icon at the end of a row and select Delete . gcloud To delete an external access rule using the Google Cloud CLI, use˜ the gcloud vmware network-policies external-access-rules delete command : gcloud vmware network-policies external-access-rules delete RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To delete an external access rule using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME " Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule Firewall rule properties Firewall rules have the following properties: Rule name A name that uniquely identifies the firewall rule and its purpose.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Follow the documentation on how VMware Engine workloads can be added to Hybrid NEGs in either one of the following setups: Regional external HTTP(S) load balancing with hybrid connectivity Global external HTTP(S) load balancer with hybrid connectivity Connect to Google Cloud Services privately without internet access VMware Engine private cloud workloads can access Google Cloud APIs such as the Cloud Storage API using Private Google Access.
- VMware Engine vCenter LDAP Hosts and clusters, VMs and folders, datastores in the vCenter UI VM creation, VM folder creation, datastore object creation and deletion, for example NSX LDAP "Users and Roles" in the NSX Manager UI NSX segment creation, firewall configuration, load balancer configuration, for example. vCenter VM Guest Operating System Active Directory, LDAP, Local Users, for example Guest Operating System SSH or RDP Login, file operations, for example In Google Cloud IAM, there are two predefined roles with permissions to the VMware Engine portal: VMware Engine Service Admin - gives full access to the VMware Engine service on Google Cloud.
- Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks If you route inbound traffic to workloads on VMware Engine through the customer VPC, then we recommend placing VMware Engine workloads in hybrid network endpoint groups behind Cloud Service Mesh and leveraging the external HTTP(S) load balancer.
- For a deep-dive in VMware Engine architectures with centralized appliances, which can be used for a variety of advanced security use cases, such as IPS/IDS, DDoS, SSL offloading and more, consult the document network security using centralized appliances in the Cloud Architecture Center .

