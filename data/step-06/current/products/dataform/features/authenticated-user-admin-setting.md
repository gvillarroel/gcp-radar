---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.394Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Authenticated user admin setting"
feature_slug: "authenticated-user-admin-setting"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/dataform/docs/repositories"
keywords:
  - "authenticated"
  - "user"
  - "admin"
  - "setting"
  - "the"
  - "adds"
  - "set"
  - "field"
---

# Authenticated user admin setting

Product: Dataform
Coverage: LOW

## Step 02 Summary

The authenticated user admin setting adds the set_authenticated_user_admin field to the Dataform Repository resource.

## Extended Definition

The authenticated user admin setting adds the set_authenticated_user_admin field to the Dataform Repository resource.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Grant a specific role upon resource creation When you set the setAuthenticatedUserAdmin field to true in the projects.locations.repositories resource , Dataform automatically grants the user who creates the repository the Dataform Admin role ( roles/dataform.admin ) on that repository.
- If setAuthenticatedUserAdmin is true and you configure the creator role field with a custom role, Dataform grants the custom role instead of the default dataform.admin role.
- The dataform.repositories.create permission is included in the following IAM roles: BigQuery Admin ( roles/bigquery.admin ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Studio User ( roles/bigquery.studioUser ) BigQuery User ( roles/bigquery.user ) Code Creator ( roles/dataform.codeCreator ) Code Editor ( roles/dataform.codeEditor ) Code Owner ( roles/dataform.codeOwner ) Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) Dataform Admin ( roles/dataform.admin ) To restrict the data that a user, service agent, or service account can read or write in BigQuery, you can grant granular BigQuery IAM permissions to selected BigQuery datasets or tables.
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Viewer role on the sales repository to allAuthenticatedUsers : curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.viewer", "members": ["allAuthenticatedUsers"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Prevent public access to repositories To ensure that no access is granted to the public on any Dataform repository, you can restrict the allAuthenticatedUsers principal in your project.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- After you create and initialize a development workspace, you can edit your workflow settings file to configure the following Dataform settings of your repository: The default database (Google Cloud project ID).
- Repository settings When you create a Dataform repository, you need to set the following repository settings: Repository ID A unique ID of the repository.
- In the workflow settings.yaml file, you can set the processing region where Dataform processes your code and stores the output of executions.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- After you create and initialize a development workspace, you can edit your workflow settings file to configure the following Dataform settings of your repository: The default database (Google Cloud project ID).
- Repository settings When you create a Dataform repository, you need to set the following repository settings: Repository ID A unique ID of the repository.
- In the workflow settings.yaml file, you can set the processing region where Dataform processes your code and stores the output of executions.

