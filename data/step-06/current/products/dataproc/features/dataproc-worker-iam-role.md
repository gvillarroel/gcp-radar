---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.118Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Worker IAM role"
feature_slug: "dataproc-worker-iam-role"
latest_feature_date: "2017-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/authentication"
keywords:
  - "dataproc"
  - "worker"
  - "iam"
  - "role"
  - "the"
  - "provides"
  - "dedicated"
  - "intended"
---

# Dataproc Worker IAM role

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Dataproc Worker IAM role provides a dedicated IAM role intended for service accounts used by Dataproc workers.

## Extended Definition

The Dataproc Worker IAM role provides a dedicated IAM role intended for service accounts used by Dataproc workers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles](https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)

## Supporting Pages

### Dataproc Metastore IAM roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles](https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Role Permissions Dataproc Metastore Admin ( roles/ metastore.admin ) Full access to all Dataproc Metastore resources. metastore.backups. metastore.backups.create metastore.backups.delete metastore.backups.get metastore.backups.getIamPolicy metastore.backups.list metastore.backups.setIamPolicy metastore.backups.use metastore.federations. metastore.federations.create metastore. federations. createTagBinding metastore.federations.delete metastore. federations. deleteTagBinding metastore.federations.get metastore. federations. getIamPolicy metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore. federations. setIamPolicy metastore.federations.update metastore.federations.use metastore.imports. metastore.imports.create metastore.imports.get metastore.imports.list metastore.imports.update metastore.locations. metastore.locations.get metastore.locations.list metastore.migrations. metastore.migrations.cancel metastore.migrations.complete metastore.migrations.delete metastore.migrations.get metastore.migrations.list metastore.migrations.start metastore.operations. metastore.operations.cancel metastore.operations.delete metastore.operations.get metastore.operations.list metastore.services.create metastore. services. createTagBinding metastore.services.delete metastore. services. deleteTagBinding metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.restore metastore. services. setIamPolicy metastore.services.update resourcemanager.projects.get resourcemanager.projects.list Dataproc Metastore Editor ( roles/ metastore.editor ) Read and write access to all Dataproc Metastore resources. metastore.backups.create metastore.backups.delete metastore.backups.get metastore.backups.list metastore.backups.use metastore.federations.create metastore.federations.delete metastore.federations.get metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore.federations.update metastore.imports. metastore.imports.create metastore.imports.get metastore.imports.list metastore.imports.update metastore.locations. metastore.locations.get metastore.locations.list metastore.migrations. metastore.migrations.cancel metastore.migrations.complete metastore.migrations.delete metastore.migrations.get metastore.migrations.list metastore.migrations.start metastore.operations. metastore.operations.cancel metastore.operations.delete metastore.operations.get metastore.operations.list metastore.services.create metastore. services. createTagBinding metastore.services.delete metastore. services. deleteTagBinding metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.restore metastore.services.update resourcemanager.projects.get resourcemanager.projects.list Metastore Viewer ( roles/ metastore.viewer ) Viewer role for metastore metastore.backups.get metastore.backups.getIamPolicy metastore.backups.list metastore.backups.use metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore.federations.get metastore. federations. getIamPolicy metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore.imports.get metastore.imports.list metastore.locations. metastore.locations.get metastore.locations.list metastore.migrations.get metastore.migrations.list metastore.operations.get metastore.operations.list metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list resourcemanager.projects.get resourcemanager.projects.list Metastore Federation Accessor ( roles/ metastore.federationAccessor ) Access to the Metastore Federation resource. metastore.federations.use Dataproc Metastore Metadata Editor ( roles/ metastore.metadataEditor ) Access to read and modify the metadata of databases and tables under those databases. metastore.databases.create metastore.databases.delete metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore.databases.update metastore.services.get metastore.services.use metastore.tables.create metastore.tables.delete metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list metastore.tables.update Dataproc Metastore Metadata Mutate Admin ( roles/ metastore.metadataMutateAdmin ) Access to mutate metadata from a Dataproc Metastore service's underlying metadata store. metastore. services. mutateMetadata Dataproc Metastore Metadata Operator ( roles/ metastore.metadataOperator ) Read-only access to Dataproc Metastore resources with additional metadata operations permission. metastore.backups.create metastore.backups.delete metastore.backups.get metastore.backups.list metastore.backups.use metastore.imports. metastore.imports.create metastore.imports.get metastore.imports.list metastore.imports.update metastore.locations. metastore.locations.get metastore.locations.list metastore.operations.get metastore.operations.list metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.restore resourcemanager.projects.get resourcemanager.projects.list Dataproc Metastore Data Owner ( roles/ metastore.metadataOwner ) Full access to the metadata of databases and tables under those databases. metastore.databases. metastore.databases.create metastore.databases.delete metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore. databases. setIamPolicy metastore.databases.update metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.use metastore.tables. metastore.tables.create metastore.tables.delete metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list metastore.tables.setIamPolicy metastore.tables.update Dataproc Metastore Metadata Query Admin ( roles/ metastore.metadataQueryAdmin ) Access to query metadata from a Dataproc Metastore service's underlying metadata store. metastore. services. queryMetadata Dataproc Metastore Metadata User ( roles/ metastore.metadataUser ) Access to the Dataproc Metastore gRPC endpoint metastore.databases.get metastore.databases.list metastore.services.get metastore.services.use Dataproc Metastore Metadata Viewer ( roles/ metastore.metadataViewer ) Access to read the metadata of databases and tables under those databases metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore.services.get metastore.services.use metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list Dataproc Metastore Managed Migration Admin ( roles/ metastore.migrationAdmin ) Access to Dataproc Metastore Managed Migration resources and workflow. cloudsql.instances.connect cloudsql.instances.get cloudsql.instances.login compute.autoscalers.create compute.autoscalers.delete compute.disks.create compute.disks.delete compute.forwardingRules.create compute.forwardingRules.delete compute.forwardingRules.use compute. instanceGroupManagers. create compute. instanceGroupManagers. delete compute. instanceGroupManagers. use compute.instanceGroups.delete compute.instanceGroups.use compute. instanceTemplates. create compute. instanceTemplates. delete compute.instanceTemplates.get compute. instanceTemplates. useReadOnly compute.instances.create compute.instances.delete compute.instances.get compute.instances.setMetadata compute.machineTypes.list compute. regionBackendServices. create compute. regionBackendServices. delete compute. regionBackendServices. use compute. regionHealthChecks. create compute. regionHealthChecks. delete compute.regionHealthChecks.use compute. regionHealthChecks. useReadOnly compute. serviceAttachments. create compute. serviceAttachments. delete compute.subnetworks.get compute.subnetworks.use compute.zones.list datastream. connectionProfiles. create datastream. connectionProfiles. delete datastream.objects. datastream.objects.get datastream.objects.list datastream. objects. startBackfillJob datastream. objects. stopBackfillJob datastream.operations.get datastream. privateConnections. create datastream. privateConnections. delete datastream.streams.create datastream.streams.delete datastream.streams.get datastream.streams.update Dataproc Metastore Viewer ( roles/ metastore.user ) Read-only access to all Dataproc Metastore resources. metastore.backups.get metastore.backups.list metastore.federations.get metastore. federations. getIamPolicy metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore.imports.get metastore.imports.list metastore.locations. metastore.locations.get metastore.locations.list metastore.operations.get metastore.operations.list metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- This page focuses on the IAM roles relevant to Dataproc Metastore.
- For example, the Dataproc Metastore User role contains the metastore. .get and metastore. .list permissions, which allow a user to get and list Dataproc Metastore services, metadata imports, backups, and operations in a project.
- The following table lists all Dataproc Metastore roles and the permissions associated with each role: Note: The databases and tables permissions are used with gRPC-enabled Dataproc Metastore services.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- In the meantime, you can re-enable the Conscrypt provider when creating a cluster by specifying this Cloud Dataproc property : --properties dataproc:dataproc.conscrypt.provider.enable=true Feature Cloud Dataproc worker IAM role – A new Cloud Dataproc IAM role called Dataproc/Dataproc Worker has been added.
- New logging and monitoring permissions have been added to the Dataproc/Dataproc Worker IAM role .
- Features and improvements: Regional and multi-zonal workloads are used by default to increase obtainability of compute resources Faster startup than previous runtimes Fast resource cleanup that allows faster release of VPC IPs after workload completion End-user credentials are used for all workloads by default New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery native table interactions New Spark Serverless-specific IAM roles New dataproc-rm.googleapis.com API enablement is required November 22, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8 2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8 2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9 2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9 Change Dataproc on Compute Engine : Updated Cloud Storage connector: Updated to 3.1.10 in image version 2.3.18 .
- October 18, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.123-debian10, 2.0.123-rocky8, 2.0.123-ubuntu18 2.1.71-debian11, 2.1.71-rocky8, 2.1.71-ubuntu20, 2.1.71-ubuntu20-arm 2.2.37-debian12, 2.2.37-rocky9, 2.2.37-ubuntu22 October 17, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.84 1.2.28 2.2.28 October 14, 2024 Change Dataproc Clusters created with image versions 2.0.57+, 2.1.5+, or 2.2+ : Secondary workers' control plane operations are made by the Dataproc Service Agent service account ( service-<project-number>@dataproc-accounts.iam.gserviceaccount.com ).

### Authenticate to Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the roles for Dataproc Metastore, see Access control with IAM .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- To provide access to your project and your resources, grant a role to the service account: gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" --role = ROLE Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account ROLE : the role to grant Note : The --role flag affects which resources the service account can access in your project.
- Set up authentication: Ensure that you have the Create Service Accounts IAM role ( roles/iam.serviceAccountCreator ) and the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ).

