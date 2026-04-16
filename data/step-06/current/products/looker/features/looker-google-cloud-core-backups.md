---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.406Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker (Google Cloud core) backups"
feature_slug: "looker-google-cloud-core-backups"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
  - "https://docs.cloud.google.com/looker/docs/reference/rest"
keywords:
  - "looker"
  - "core"
  - "backups"
  - "instances"
  - "can"
  - "now"
  - "created"
  - "viewed"
---

# Looker (Google Cloud core) backups

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Backups for Looker (Google Cloud core) instances can now be created, viewed, restored, and deleted in the Google Cloud console.

## Extended Definition

Backups for Looker (Google Cloud core) instances can now be created, viewed, restored, and deleted in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest)

## Supporting Pages

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- Required role To get the permissions that you need to assign Looker (Google Cloud core) IAM roles, ask your administrator to grant you the Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) IAM role on the project in which the instance was created.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- For example, the looker.instances.login permission lets a principal log in to Looker (Google Cloud core) instances.

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If no Looker (Google Cloud core) instances have been created in this project, the Looker (Google Cloud core) product page will open.
- When you click the button, depending on what Looker instances already exist in this project, you'll see one of the following: If a Looker (Google Cloud core) instance already exists within this project, the Instances page will open.
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you can create an instance, you need to complete these steps for the Google Cloud project in which you want to create the Looker (Google Cloud core) instance: Work with Sales to ensure that your annual contract is completed and that you have quota allocated in your project.

### Looker (Google Cloud core) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.instances.backups Methods create POST /v1/{parent=projects/ /locations/ /instances/ }/backups Backup Looker instance. delete DELETE /v1/{name=projects/ /locations/ /instances/ /backups/ } Delete backup. get GET /v1/{name=projects/ /locations/ /instances/ /backups/ } list GET /v1/{parent=projects/ /locations/ /instances/ }/backups List backups of Looker instance.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.instances REST Resource: v1.projects.locations.instances.backups REST Resource: v1.projects.locations.operations Service: looker.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent=projects/ /locations/ }/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /instances/ } Delete instance. export POST /v1/{name=projects/ /locations/ /instances/ }:export Export instance. get GET /v1/{name=projects/ /locations/ /instances/ } Gets details of a single Instance. import POST /v1/{name=projects/ /locations/ /instances/ }:import Import instance. list GET /v1/{parent=projects/ /locations/ }/instances Lists Instances in a given project and location. patch PATCH /v1/{instance.name=projects/ /locations/ /instances/ } Update Instance. restart POST /v1/{name=projects/ /locations/ /instances/ }:restart Restart instance. restore POST /v1/{name=projects/ /locations/ /instances/ }:restore Restore Looker instance.
- Home Documentation Data analytics Looker API Reference Send feedback Looker (Google Cloud core) API Stay organized with collections Save and categorize content based on your preferences.

