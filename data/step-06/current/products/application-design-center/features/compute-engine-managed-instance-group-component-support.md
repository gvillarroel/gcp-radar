---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.686Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Compute Engine managed instance group component support"
feature_slug: "compute-engine-managed-instance-group-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/overview"
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
  - "https://docs.cloud.google.com/iam/docs/pab-blocked-permissions"
keywords:
  - "managed"
  - "group"
  - "instance"
  - "compute"
  - "engine"
  - "component"
---

# Compute Engine managed instance group component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports the Compute Engine managed instance group component on the design canvas.

## Extended Definition

Application Design Center supports the Compute Engine managed instance group component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)

## Supporting Pages

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- VERB For example, the compute.instances.list permission allows a user to list the Compute Engine instances they own, and compute.instances.stop allows a user to stop a VM.
- For a list of permissions in the Writer role, see the role details in the Google Cloud console: Go to Writer role Admin ( roles/admin ) All of the permissions in the Writer role, plus permissions for actions like the following: Completing sensitive tasks, like managing tag bindings for Compute Engine resources Managing roles and permissions for a project and all resources within the project Setting up billing for a project The Admin role doesn't contain all permissions for all Google Cloud resources.
- For a list of permissions in the Editor role, see the role details in the Google Cloud console: Go to Editor role Owner ( roles/owner ) All Editor permissions, plus permissions for actions like the following: Completing sensitive tasks, like managing tag bindings for Compute Engine resources Managing roles and permissions for a project and all resources within the project Setting up billing for a project The Owner role doesn't contain all permissions for all Google Cloud resources.
- The following table summarizes the permissions that the Admin, Writer, and Reader give principals across all Google Cloud services: Note: Cloud Storage convenience values and BigQuery special group membership don't give permissions to principals with the Admin, Writer, or Reader roles.

### "Permissions that principal access boundary policies block \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)
- Source ID: `site-iam-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- None Compute Engine compute.googleapis.com/ addresses. compute.googleapis.com/ backendBuckets. compute.googleapis.com/ backendServices. compute.googleapis.com/ externalVpnGateways. compute.googleapis.com/ firewallPolicies. compute.googleapis.com/ firewalls. compute.googleapis.com/ forwardingRules. compute.googleapis.com/ globalAddresses. compute.googleapis.com/ globalForwardingRules. compute.googleapis.com/ healthChecks. compute.googleapis.com/ httpHealthChecks. compute.googleapis.com/ httpsHealthChecks. compute.googleapis.com/ interconnectAttachments. compute.googleapis.com/ interconnectLocations. compute.googleapis.com/ interconnectRemoteLocations. compute.googleapis.com/ interconnects. compute.googleapis.com/ networks. compute.googleapis.com/ packetMirrorings. compute.googleapis.com/ publicAdvertisedPrefixes. compute.googleapis.com/ publicDelegatedPrefixes. compute.googleapis.com/ regionBackendServices. compute.googleapis.com/ regionFirewallPolicies. compute.googleapis.com/ regionHealthChecks. compute.googleapis.com/ regionSslPolicies. compute.googleapis.com/ regionTargetHttpProxies. compute.googleapis.com/ regionTargetTcpProxies. compute.googleapis.com/ regionUrlMaps. compute.googleapis.com/ routes. compute.googleapis.com/ sslPolicies. compute.googleapis.com/ subnetworks. compute.googleapis.com/ targetGrpcProxies. compute.googleapis.com/ targetHttpProxies. compute.googleapis.com/ targetHttpsProxies. compute.googleapis.com/ targetInstances. compute.googleapis.com/ targetPools. compute.googleapis.com/ targetSslProxies. compute.googleapis.com/ targetTcpProxies. compute.googleapis.com/ targetVpnGateways. compute.googleapis.com/ urlMaps. compute.googleapis.com/ vpnGateways.
- None Service Management servicemanagement.googleapis.com/ consumers. getIamPolicy servicemanagement.googleapis.com/ consumers. setIamPolicy servicemanagement.googleapis.com/ services. create servicemanagement.googleapis.com/ services. delete servicemanagement.googleapis.com/ services. get servicemanagement.googleapis.com/ services. getIamPolicy servicemanagement.googleapis.com/ services. list servicemanagement.googleapis.com/ services. setIamPolicy servicemanagement.googleapis.com/ services. update None Backup and Disaster Recovery backupdr.googleapis.com/ backupPlanAssociations. create backupdr.googleapis.com/ backupPlanAssociations. createForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. createForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. createForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. createForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. deleteForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. deleteForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. deleteForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. deleteForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. fetchForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. fetchForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. fetchForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. fetchForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. getForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. getForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. getForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. getForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. list backupdr.googleapis.com/ backupPlanRevisions. backupdr.googleapis.com/ backupPlans. backupdr.googleapis.com/ backupVaults. backupdr.googleapis.com/ bvbackups. backupdr.googleapis.com/ bvdataSources. abandonBackup backupdr.googleapis.com/ bvdataSources. fetchAccessToken backupdr.googleapis.com/ bvdataSources. finalizeBackup backupdr.googleapis.com/ bvdataSources. get backupdr.googleapis.com/ bvdataSources. initiateBackup backupdr.googleapis.com/ bvdataSources. list backupdr.googleapis.com/ bvdataSources. remove backupdr.googleapis.com/ bvdataSources. setInternalStatus backupdr.googleapis.com/ bvdataSources. update backupdr.googleapis.com/ compute. backupdr.googleapis.com/ dataSourceReferences. fetchForAlloydbCluster backupdr.googleapis.com/ dataSourceReferences. fetchForCloudSqlInstance backupdr.googleapis.com/ dataSourceReferences. fetchForFilestoreInstance backupdr.googleapis.com/ dataSourceReferences. list backupdr.googleapis.com/ locations. backupdr.googleapis.com/ managementServers. create backupdr.googleapis.com/ managementServers. createConnection backupdr.googleapis.com/ managementServers. delete backupdr.googleapis.com/ managementServers. get backupdr.googleapis.com/ managementServers. getIamPolicy backupdr.googleapis.com/ managementServers. list backupdr.googleapis.com/ managementServers. setIamPolicy backupdr.googleapis.com/ managementServers. update backupdr.googleapis.com/ operations. backupdr.googleapis.com/ serviceConfig. backupdr.googleapis.com/ bvbackups. useReadOnlyForAlloydbCluster backupdr.googleapis.com/ bvbackups. useReadOnlyForCloudSqlInstance backupdr.googleapis.com/ bvbackups. useReadOnlyForFilestoreInstance Sensitive Data Protection dlp.googleapis.com/ charts. dlp.googleapis.com/ columnDataProfiles. dlp.googleapis.com/ connections. dlp.googleapis.com/ deidentifyTemplates. dlp.googleapis.com/ estimates. dlp.googleapis.com/ fileStoreProfiles. dlp.googleapis.com/ inspecttemplates. dlp.googleapis.com/ jobTriggers. dlp.googleapis.com/ jobs. dlp.googleapis.com/ projectDataProfiles. dlp.googleapis.com/ storedInfoTypes. dlp.googleapis.com/ subscriptions. dlp.googleapis.com/ tableDataProfiles.
- None Cloud Trace cloudtrace.googleapis.com/ None Compute Engine compute.googleapis.com/ networkAttachments. compute.googleapis.com/ networkEdgeSecurityServices. compute.googleapis.com/ regionSecurityPolicies. compute.googleapis.com/ securityPolicies. compute.googleapis.com/ serviceAttachments. compute.googleapis.com/routers.
- None Secure Source Manager securesourcemanager.googleapis.com/ branchRules. securesourcemanager.googleapis.com/ hooks. securesourcemanager.googleapis.com/ instances. access securesourcemanager.googleapis.com/ instances. create securesourcemanager.googleapis.com/ instances. delete securesourcemanager.googleapis.com/ instances. get securesourcemanager.googleapis.com/ instances. getIamPolicy securesourcemanager.googleapis.com/ instances. linkDeveloperConnect securesourcemanager.googleapis.com/ instances. list securesourcemanager.googleapis.com/ instances. setIamPolicy securesourcemanager.googleapis.com/ issuecomments. securesourcemanager.googleapis.com/ issues. securesourcemanager.googleapis.com/ locations. securesourcemanager.googleapis.com/ operations. securesourcemanager.googleapis.com/ prcomments. securesourcemanager.googleapis.com/ pullRequests. securesourcemanager.googleapis.com/ repositories. create securesourcemanager.googleapis.com/ repositories. delete securesourcemanager.googleapis.com/ repositories. fetch securesourcemanager.googleapis.com/ repositories. get securesourcemanager.googleapis.com/ repositories. getIamPolicy securesourcemanager.googleapis.com/ repositories. list securesourcemanager.googleapis.com/ repositories. setIamPolicy securesourcemanager.googleapis.com/ repositories. update None Connectors connectors.googleapis.com/ . connectors.googleapis.com/ connections. executeSqlQuery connectors.googleapis.com/ connections. generateOpenAPISpec connectors.googleapis.com/ connections. listenEvent Dataproc Metastore metastore.googleapis.com/ backups. metastore.googleapis.com/ databases. delete metastore.googleapis.com/ databases. getIamPolicy metastore.googleapis.com/ databases. setIamPolicy metastore.googleapis.com/ databases. update metastore.googleapis.com/ federations. metastore.googleapis.com/ imports. metastore.googleapis.com/ locations. metastore.googleapis.com/ operations. metastore.googleapis.com/ services. metastore.googleapis.com/ tables. delete metastore.googleapis.com/ tables. getIamPolicy metastore.googleapis.com/ tables. setIamPolicy metastore.googleapis.com/ tables. update metastore.googleapis.com/ federations. use metastore.googleapis.com/ services. use Enforcement version 3 Policies with enforcement version 3 can block all of the permissions listed in the following enforcement versions: Enforcement version 1 Enforcement version 2 Additionally, policies with the enforcement version 3 can also block all of the permissions listed in the following table.

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, Compute Engine has resources like instances, disks, and subnetworks.
- When someone tries to perform an action in Google Cloud—for example, create a VM instance or view a dataset—IAM first checks if they have the required permissions.
- Giving someone permissions in IAM involves the following three components: Principal : The identity of the person or system that you want to give permissions to.
- Principal types that represent human users include Google Accounts, Google groups, and federated identities in workforce identity pools.

