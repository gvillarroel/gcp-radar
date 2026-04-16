---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.895Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore custom IAM roles"
feature_slug: "firestore-custom-iam-roles"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam"
  - "https://docs.cloud.google.com/firestore/docs/custom-constraints"
  - "https://docs.cloud.google.com/firestore/native/docs/custom-constraints"
keywords:
  - "firestore"
  - "custom"
  - "iam"
  - "roles"
  - "supports"
  - "identity"
  - "access"
  - "management"
---

# Firestore custom IAM roles

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports custom Identity and Access Management roles.

## Extended Definition

Firestore supports custom Identity and Access Management roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/native/docs/custom-constraints](https://docs.cloud.google.com/firestore/native/docs/custom-constraints)

## Supporting Pages

### "Identity and Access Management (IAM) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read access to all Firestore resources. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.list datastore.operations.get resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Firestore database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Firestore database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Firestore location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Firestore location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Firestore backup into a new database.
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans. roles/datastore.userCredsViewer datastore.userCreds.get datastore.userCreds.list Read access to user credentials in a Firestore database. roles/datastore.userCredsAdmin datastore.userCreds.get datastore.userCreds.list datastore.userCreds.create datastore.userCreds.update datastore.userCreds.delete datastore.databases.list datastore.databases.getMetadata Full access to user credentials in a Firestore database.
- Role Permissions Description roles/datastore.owner appengine.applications.get datastore. resourcemanager.projects.get resourcemanager.projects.list Full access to Firestore. roles/datastore.user appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities. datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read/write access to data in a Firestore database.
- Identity and Access Management (IAM) Manage access to your resources with Identity and Access Management (IAM).

### "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must be of the specified type . name : organizations/ ORGANIZATION ID /customConstraints/custom.typeFirestore resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.type==" FIRESTORE NATIVE"" actionType : ALLOW displayName : Firestore database type Firestore Native description : Only allow creation and updating of databases if the type is Firestore in native mode.
- Set up the custom constraint at the organization level: gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml Test the policy Try to create a database without setting the --delete-protection flag in a project in the organization: gcloud firestore database create \ --project = PROJECT ID \ --database = DATABASE ID \ The output is the following: Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"] Test and analyze organization policy changes We recommend that you test and dry-run all changes to your organization policies, to better understand the state of your environment and how changes affect it.
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Don't allow creation of databases unless delete protection is enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == " DELETE PROTECTION ENABLED"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.

### "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/native/docs/custom-constraints](https://docs.cloud.google.com/firestore/native/docs/custom-constraints)
- Source ID: `site-docs-reference-required-4`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must be of the specified type . name : organizations/ ORGANIZATION ID /customConstraints/custom.typeFirestore resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.type==" FIRESTORE NATIVE"" actionType : ALLOW displayName : Firestore database type Firestore Native description : Only allow creation and updating of databases if the type is Firestore in native mode.
- Set up the custom constraint at the organization level: gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml Test the policy Try to create a database without setting the --delete-protection flag in a project in the organization: gcloud firestore database create \ --project = PROJECT ID \ --database = DATABASE ID \ The output is the following: Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"] Test and analyze organization policy changes We recommend that you test and dry-run all changes to your organization policies, to better understand the state of your environment and how changes affect it.
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Don't allow creation of databases unless delete protection is enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == " DELETE PROTECTION ENABLED"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.

