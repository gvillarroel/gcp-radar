---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.431Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "and API resource views for Bare Metal Solution"
feature_slug: "and-api-resource-views-for-bare-metal-solution"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "views"
  - "resource"
  - "full"
  - "console"
  - "adds"
---

# and API resource views for Bare Metal Solution

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds full Console, gcloud, and API support when viewing Bare Metal Solution resources.

## Extended Definition

Adds full Console, gcloud, and API support when viewing Bare Metal Solution resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.
- Some Identity and Access Management (IAM) features, such as troubleshooting access issues and viewing the grantable roles on a resource , require you to provide a full resource name .
- Home Documentation Security IAM Reference Send feedback Full resource names Stay organized with collections Save and categorize content based on your preferences.
- To learn more about how full resource names are formatted, see the resource names section of the API design guide.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.
- Click the name to view additional information about the NFS storage volume, such as snapshots. at-2222222-nfs001-vol000 Labels Displays any labels you added to this NFS file storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view the status of your NFS file storage within the Bare Metal Solution environment, issue the gcloud bms nfs-shares list command: gcloud bms nfs-shares list --project= PROJECT ID --region= REGION Additional command options include: --limit: Limit the output to show a specific number of devices. --filter: Limit the output to show devices with a specific label or other filter parameter.
- If you don't want to enable the Pod column, you can view the pod of a storage volume by clicking the storage volume name. asia-southeast1-pod1 Type Hard drive or solid-state drive HDD - Hard drive Labels Displays any labels you added to this storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view all storage volumes in your Bare Metal Solution environment and see their status, enter your project ID and issue the gcloud bms volumes list command: gcloud bms volumes list --project= PROJECT ID The following output example shows three storage volumes, the project ID, region, volume size and storage type.
- If you don't want to enable the Pod column, you can view the pod of a server by clicking the server name. asia-southeast1-pod1 Server Type Server specifications o2-standard-32-metal Client IP Server IP address that connects to your Google Virtual Private Cloud 10.200.0.5 Private IP Server IP address that connects to other Bare Metal Solution environment resources 192.168.2.5 Labels Displays any labels that you added to this server You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test Server activity Informs about any Bare Metal Solution infrastructure issue that might impact your workload.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud owns and maintains management console resources.
- Please use b010502a8f383cae5a076d4ac9e868777657cebd0000000063abee83 (valid for 2 hrs) to register this host. -- A new secret key can be generated later by running: '/opt/act/bin/udsagent secret --reset --restart If you use the iptables command, open the ports for the backup agent firewall (TCP 5106) and Oracle services (TCP 1521): sudo iptables -A INPUT -p tcp --dport 5106 -j ACCEPT sudo iptables -A INPUT -p tcp --dport 1521 -j ACCEPT sudo firewall-cmd --permanent --add-port=5106/tcp sudo firewall-cmd --permanent --add-port=1521/tcp sudo firewall-cmd --reload Add hosts to Backup and DR In the Backup and DR management console, go to Manage > Hosts . https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#hosts Click +Add Host .
- Verify that block change tracking is now enabled: SQL> select status,filename from v$block change tracking; STATUS FILENAME ---------- ------------------------------------------------------------------ ENABLED +DATADG/ORCL/CHANGETRACKING/ctf.276.1124639617 Protect an Oracle database In the Backup and DR management console, go to the App Manager > Applications page. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#applications Right-click the Oracle database name you want to protect and select Manage Backup Plan from the menu.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.

