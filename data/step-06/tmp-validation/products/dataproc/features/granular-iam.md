---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.191Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Granular IAM"
feature_slug: "granular-iam"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/grant-access"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles"
keywords:
  - "granular"
  - "assign"
  - "roles"
  - "permissions"
  - "users"
  - "lets"
---

# Granular IAM

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Granular IAM lets users assign IAM roles and permissions on a per-cluster basis; Granular IAM provides job, operation, and workflow template permissions for Dataproc resources.

## Extended Definition

Granular IAM lets users assign IAM roles and permissions on a per-cluster basis; Granular IAM provides job, operation, and workflow template permissions for Dataproc resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- [https://docs.cloud.google.com/dataproc-metastore/docs/grant-access](https://docs.cloud.google.com/dataproc-metastore/docs/grant-access)
- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles](https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles)

## Supporting Pages

### Dataproc Metastore: Access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access control options for users To give users the ability to create and manage your Dataproc Metastore resources, you can add users as team members to your project or to specific resources and grant them permissions using IAM roles .
- For example, for a given resource, such as a project, you can assign the roles/metastore.admin role to a Google Account and that account can control Dataproc Metastore resources in the project, but cannot manage other resources.
- Google Cloud offers Identity and Access Management (IAM) , which lets you give more granular access to specific Google Cloud resources and prevents unwanted access to other resources.
- An IAM policy lets you manage IAM roles on those resources instead of, or in addition to, managing roles at the project level.

### Grant basic Dataproc Metastore IAM roles to users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/grant-access](https://docs.cloud.google.com/dataproc-metastore/docs/grant-access)
- Source ID: `site-docs-root-2`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the API Required Roles You must have the roles/owner (Owner) basic IAM role in the Google Cloud project you are using, or a role that grants these permissions: resourcemanager.projects.get resourcemanager.projects.getIamPolicy resourcemanager.projects.setIamPolicy To gain these permissions while following the principle of least privilege, ask your administrator to grant you the roles/resourcemanager.projectIamAdmin (Project IAM Admin) role.
- Depending on the scope of control you want the account to have, you grant it one of these predefined IAM roles: roles/metastore.editor to grant full control of Dataproc Metastore resources roles/metastore.admin to grant full control of Dataproc Metastore resources, including updating IAM permissions.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Grant basic Dataproc Metastore IAM roles to users Stay organized with collections Save and categorize content based on your preferences.
- For detailed information about the specific IAM permissions these roles provide, see Dataproc Metastore IAM roles .

### Dataproc Metastore IAM roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles](https://docs.cloud.google.com/dataproc-metastore/docs/iam-roles)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create custom IAM roles and assign the role one or more permissions.
- Role Permissions Dataproc Metastore Admin ( roles/ metastore.admin ) Full access to all Dataproc Metastore resources. metastore.backups. metastore.backups.create metastore.backups.delete metastore.backups.get metastore.backups.getIamPolicy metastore.backups.list metastore.backups.setIamPolicy metastore.backups.use metastore.federations. metastore.federations.create metastore. federations. createTagBinding metastore.federations.delete metastore. federations. deleteTagBinding metastore.federations.get metastore. federations. getIamPolicy metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore. federations. setIamPolicy metastore.federations.update metastore.federations.use metastore.imports. metastore.imports.create metastore.imports.get metastore.imports.list metastore.imports.update metastore.locations. metastore.locations.get metastore.locations.list metastore.migrations. metastore.migrations.cancel metastore.migrations.complete metastore.migrations.delete metastore.migrations.get metastore.migrations.list metastore.migrations.start metastore.operations. metastore.operations.cancel metastore.operations.delete metastore.operations.get metastore.operations.list metastore.services.create metastore. services. createTagBinding metastore.services.delete metastore. services. deleteTagBinding metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.restore metastore. services. setIamPolicy metastore.services.update resourcemanager.projects.get resourcemanager.projects.list Dataproc Metastore Editor ( roles/ metastore.editor ) Read and write access to all Dataproc Metastore resources. metastore.backups.create metastore.backups.delete metastore.backups.get metastore.backups.list metastore.backups.use metastore.federations.create metastore.federations.delete metastore.federations.get metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore.federations.update metastore.imports. metastore.imports.create metastore.imports.get metastore.imports.list metastore.imports.update metastore.locations. metastore.locations.get metastore.locations.list metastore.migrations. metastore.migrations.cancel metastore.migrations.complete metastore.migrations.delete metastore.migrations.get metastore.migrations.list metastore.migrations.start metastore.operations. metastore.operations.cancel metastore.operations.delete metastore.operations.get metastore.operations.list metastore.services.create metastore. services. createTagBinding metastore.services.delete metastore. services. deleteTagBinding metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.restore metastore.services.update resourcemanager.projects.get resourcemanager.projects.list Metastore Viewer ( roles/ metastore.viewer ) Viewer role for metastore metastore.backups.get metastore.backups.getIamPolicy metastore.backups.list metastore.backups.use metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore.federations.get metastore. federations. getIamPolicy metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore.imports.get metastore.imports.list metastore.locations. metastore.locations.get metastore.locations.list metastore.migrations.get metastore.migrations.list metastore.operations.get metastore.operations.list metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list resourcemanager.projects.get resourcemanager.projects.list Metastore Federation Accessor ( roles/ metastore.federationAccessor ) Access to the Metastore Federation resource. metastore.federations.use Dataproc Metastore Metadata Editor ( roles/ metastore.metadataEditor ) Access to read and modify the metadata of databases and tables under those databases. metastore.databases.create metastore.databases.delete metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore.databases.update metastore.services.get metastore.services.use metastore.tables.create metastore.tables.delete metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list metastore.tables.update Dataproc Metastore Metadata Mutate Admin ( roles/ metastore.metadataMutateAdmin ) Access to mutate metadata from a Dataproc Metastore service's underlying metadata store. metastore. services. mutateMetadata Dataproc Metastore Metadata Operator ( roles/ metastore.metadataOperator ) Read-only access to Dataproc Metastore resources with additional metadata operations permission. metastore.backups.create metastore.backups.delete metastore.backups.get metastore.backups.list metastore.backups.use metastore.imports. metastore.imports.create metastore.imports.get metastore.imports.list metastore.imports.update metastore.locations. metastore.locations.get metastore.locations.list metastore.operations.get metastore.operations.list metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.restore resourcemanager.projects.get resourcemanager.projects.list Dataproc Metastore Data Owner ( roles/ metastore.metadataOwner ) Full access to the metadata of databases and tables under those databases. metastore.databases. metastore.databases.create metastore.databases.delete metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore. databases. setIamPolicy metastore.databases.update metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings metastore.services.use metastore.tables. metastore.tables.create metastore.tables.delete metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list metastore.tables.setIamPolicy metastore.tables.update Dataproc Metastore Metadata Query Admin ( roles/ metastore.metadataQueryAdmin ) Access to query metadata from a Dataproc Metastore service's underlying metadata store. metastore. services. queryMetadata Dataproc Metastore Metadata User ( roles/ metastore.metadataUser ) Access to the Dataproc Metastore gRPC endpoint metastore.databases.get metastore.databases.list metastore.services.get metastore.services.use Dataproc Metastore Metadata Viewer ( roles/ metastore.metadataViewer ) Access to read the metadata of databases and tables under those databases metastore.databases.get metastore. databases. getIamPolicy metastore.databases.list metastore.services.get metastore.services.use metastore.tables.get metastore.tables.getIamPolicy metastore.tables.list Dataproc Metastore Managed Migration Admin ( roles/ metastore.migrationAdmin ) Access to Dataproc Metastore Managed Migration resources and workflow. cloudsql.instances.connect cloudsql.instances.get cloudsql.instances.login compute.autoscalers.create compute.autoscalers.delete compute.disks.create compute.disks.delete compute.forwardingRules.create compute.forwardingRules.delete compute.forwardingRules.use compute. instanceGroupManagers. create compute. instanceGroupManagers. delete compute. instanceGroupManagers. use compute.instanceGroups.delete compute.instanceGroups.use compute. instanceTemplates. create compute. instanceTemplates. delete compute.instanceTemplates.get compute. instanceTemplates. useReadOnly compute.instances.create compute.instances.delete compute.instances.get compute.instances.setMetadata compute.machineTypes.list compute. regionBackendServices. create compute. regionBackendServices. delete compute. regionBackendServices. use compute. regionHealthChecks. create compute. regionHealthChecks. delete compute.regionHealthChecks.use compute. regionHealthChecks. useReadOnly compute. serviceAttachments. create compute. serviceAttachments. delete compute.subnetworks.get compute.subnetworks.use compute.zones.list datastream. connectionProfiles. create datastream. connectionProfiles. delete datastream.objects. datastream.objects.get datastream.objects.list datastream. objects. startBackfillJob datastream. objects. stopBackfillJob datastream.operations.get datastream. privateConnections. create datastream. privateConnections. delete datastream.streams.create datastream.streams.delete datastream.streams.get datastream.streams.update Dataproc Metastore Viewer ( roles/ metastore.user ) Read-only access to all Dataproc Metastore resources. metastore.backups.get metastore.backups.list metastore.federations.get metastore. federations. getIamPolicy metastore.federations.list metastore. federations. listEffectiveTags metastore. federations. listTagBindings metastore.imports.get metastore.imports.list metastore.locations. metastore.locations.get metastore.locations.list metastore.operations.get metastore.operations.list metastore.services.export metastore.services.get metastore. services. getIamPolicy metastore.services.list metastore. services. listEffectiveTags metastore. services. listTagBindings resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- The following table lists all Dataproc Metastore roles and the permissions associated with each role: Note: The databases and tables permissions are used with gRPC-enabled Dataproc Metastore services.
- Role Permissions Dataproc Metastore Service Agent ( roles/ metastore.serviceAgent ) Gives the Dataproc Metastore service account access to managed resources.

