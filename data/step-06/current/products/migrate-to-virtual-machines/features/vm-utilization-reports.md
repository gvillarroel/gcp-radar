---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:55.001Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "VM utilization reports"
feature_slug: "vm-utilization-reports"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source"
keywords:
  - "vm"
  - "utilization"
  - "reports"
  - "provides"
  - "source"
  - "to"
  - "help"
  - "size"
---

# VM utilization reports

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Provides source VM utilization reports to help size Compute Engine targets.

## Extended Definition

Provides source VM utilization reports to help size Compute Engine targets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)

## Supporting Pages

### VM Migration API \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.groups REST Resource: v1.projects.locations.imageImports REST Resource: v1.projects.locations.imageImports.imageImportJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.sources REST Resource: v1.projects.locations.sources.datacenterConnectors REST Resource: v1.projects.locations.sources.migratingVms REST Resource: v1.projects.locations.sources.migratingVms.cloneJobs REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs REST Resource: v1.projects.locations.sources.migratingVms.replicationCycles REST Resource: v1.projects.locations.sources.utilizationReports REST Resource: v1.projects.locations.targetProjects Service: vmmigration.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.groups Methods addGroupMigration POST /v1/{group=projects/ /locations/ /groups/ }:addGroupMigration Adds a MigratingVm to a Group. create POST /v1/{parent=projects/ /locations/ }/groups Creates a new Group in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /groups/ } Deletes a single Group. get GET /v1/{name=projects/ /locations/ /groups/ } Gets details of a single Group. list GET /v1/{parent=projects/ /locations/ }/groups Lists Groups in a given project and location. patch PATCH /v1/{group.name=projects/ /locations/ /groups/ } Updates the parameters of a single Group. removeGroupMigration POST /v1/{group=projects/ /locations/ /groups/ }:removeGroupMigration Removes a MigratingVm from a Group.
- REST Resource: v1.projects.locations.sources Methods create POST /v1/{parent=projects/ /locations/ }/sources Creates a new Source in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /sources/ } Deletes a single Source. fetchInventory GET /v1/{source=projects/ /locations/ /sources/ }:fetchInventory List remote source's inventory of VMs. get GET /v1/{name=projects/ /locations/ /sources/ } Gets details of a single Source. list GET /v1/{parent=projects/ /locations/ }/sources Lists Sources in a given project and location. patch PATCH /v1/{source.name=projects/ /locations/ /sources/ } Updates the parameters of a single Source.
- REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs Methods cancel POST /v1/{name=projects/ /locations/ /sources/ /migratingVms/ /cutoverJobs/ }:cancel Initiates the cancellation of a running cutover job. create POST /v1/{parent=projects/ /locations/ /sources/ /migratingVms/ }/cutoverJobs Initiates a Cutover of a specific migrating VM. get GET /v1/{name=projects/ /locations/ /sources/ /migratingVms/ /cutoverJobs/ } Gets details of a single CutoverJob. list GET /v1/{parent=projects/ /locations/ /sources/ /migratingVms/ }/cutoverJobs Lists the CutoverJobs of a migrating VM.

### VM Migration API \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.groups REST Resource: v1.projects.locations.imageImports REST Resource: v1.projects.locations.imageImports.imageImportJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.sources REST Resource: v1.projects.locations.sources.datacenterConnectors REST Resource: v1.projects.locations.sources.migratingVms REST Resource: v1.projects.locations.sources.migratingVms.cloneJobs REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs REST Resource: v1.projects.locations.sources.migratingVms.replicationCycles REST Resource: v1.projects.locations.sources.utilizationReports REST Resource: v1.projects.locations.targetProjects Service: vmmigration.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.groups Methods addGroupMigration POST /v1/{group=projects/ /locations/ /groups/ }:addGroupMigration Adds a MigratingVm to a Group. create POST /v1/{parent=projects/ /locations/ }/groups Creates a new Group in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /groups/ } Deletes a single Group. get GET /v1/{name=projects/ /locations/ /groups/ } Gets details of a single Group. list GET /v1/{parent=projects/ /locations/ }/groups Lists Groups in a given project and location. patch PATCH /v1/{group.name=projects/ /locations/ /groups/ } Updates the parameters of a single Group. removeGroupMigration POST /v1/{group=projects/ /locations/ /groups/ }:removeGroupMigration Removes a MigratingVm from a Group.
- REST Resource: v1.projects.locations.sources Methods create POST /v1/{parent=projects/ /locations/ }/sources Creates a new Source in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /sources/ } Deletes a single Source. fetchInventory GET /v1/{source=projects/ /locations/ /sources/ }:fetchInventory List remote source's inventory of VMs. get GET /v1/{name=projects/ /locations/ /sources/ } Gets details of a single Source. list GET /v1/{parent=projects/ /locations/ }/sources Lists Sources in a given project and location. patch PATCH /v1/{source.name=projects/ /locations/ /sources/ } Updates the parameters of a single Source.
- REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs Methods cancel POST /v1/{name=projects/ /locations/ /sources/ /migratingVms/ /cutoverJobs/ }:cancel Initiates the cancellation of a running cutover job. create POST /v1/{parent=projects/ /locations/ /sources/ /migratingVms/ }/cutoverJobs Initiates a Cutover of a specific migrating VM. get GET /v1/{name=projects/ /locations/ /sources/ /migratingVms/ /cutoverJobs/ } Gets details of a single CutoverJob. list GET /v1/{parent=projects/ /locations/ /sources/ /migratingVms/ }/cutoverJobs Lists the CutoverJobs of a migrating VM.

### "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Grant the iam.serviceAccountCreator role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/iam.serviceAccountCreator Grant the vmmigration.admin role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/vmmigration.admin For more on assigning roles and permissions to a user account, see Granting, changing, and revoking access to resources .
- The following diagram shows the architecture of a typical Migrate to Virtual Machines deployment: Follow these steps to install and configure a Migrate Connector, and create a VMware source: On vSphere , you must create a vCenter user account with the permissions required by the Migrate Connector to access your vSphere environment.
- VirtualMachine.State.CreateSnapshot Virtual machine -> Snapshot management -> Create snapshot VirtualMachine.State.RemoveSnapshot Virtual machine -> Snapshot management -> Remove snapshot Cryptographer.Access Cryptographic operations -> Direct Access Only if the source VM is an encrypted VM (vCenter 6.5 and later).

### "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Grant the iam.serviceAccountCreator role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/iam.serviceAccountCreator Grant the vmmigration.admin role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/vmmigration.admin For more on assigning roles and permissions to a user account, see Granting, changing, and revoking access to resources .
- The following diagram shows the architecture of a typical Migrate to Virtual Machines deployment: Follow these steps to install and configure a Migrate Connector, and create a VMware source: On vSphere , you must create a vCenter user account with the permissions required by the Migrate Connector to access your vSphere environment.
- VirtualMachine.State.CreateSnapshot Virtual machine -> Snapshot management -> Create snapshot VirtualMachine.State.RemoveSnapshot Virtual machine -> Snapshot management -> Remove snapshot Cryptographer.Access Cryptographic operations -> Direct Access Only if the source VM is an encrypted VM (vCenter 6.5 and later).

