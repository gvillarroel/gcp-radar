---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.472Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Custom connector sharing across projects"
feature_slug: "custom-connector-sharing-across-projects"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-cicd"
  - "https://docs.cloud.google.com/application-integration/docs/setup-application-integration"
keywords:
  - "projects"
  - "sharing"
  - "across"
  - "connectors"
  - "connector"
  - "custom"
---

# Custom connector sharing across projects

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Custom connectors can now be shared between Google Cloud projects by exporting and importing connector specifications.

## Extended Definition

Custom connectors can now be shared between Google Cloud projects by exporting and importing connector specifications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Action: Execute custom SQL query To create a custom query, follow these steps: Follow the detailed instructions to add a connectors task .
- The following table shows a sample mapping between an integration variable and the filterClause(Connectors) variable: Input Output PRIMARY KEY ID = ' .CONCAT( INTEGRATION VARIABLE ) .CONCAT(') filterClause(Connectors) Where PRIMARY KEY ID = ' is entered as a Value in the input row.
- Configure task input and output variables The Connectors task configuration pane displays Task Input and Task Output variables that are automatically generated based on the Entity and Operation or Action selected in the Configure connector task dialog.
- Configure authentication override To enable the connection to accept different backend authentication dynamically during runtime, ensure that in Integration Connectors, you have selected the Enable Authentication Override option for your connection.

### "Build CICD for your integration \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Promote integration across environments To promote your integration across environments, you can use the integrationcli tool, which is an open-source tool that lets you interact with Application Integration APIs and Integration Connectors APIs .
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud Free cloud features and trial offer .
- Add another edge connection from the Data Mapping element to the Connectors element by hovering over a control point on the Data Mapping element, then clicking and dragging a line to a control point on the Connectors task element.
- Tip: To learn how to store integration and connector assets to a source code repository, promote changes across environments, and how such deployments can be automated, see the CICD for Application Integration blog.

### Set up Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to set up Application Integration, ask your administrator to grant you the following IAM roles on your project: Google Cloud Project Editor ( roles/editor ) Cloud KMS Admin ( roles/cloudkms.admin ) Application Integration Admin ( roles/integrations.integrationAdmin ) Connector Admin ( roles/connectors.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The default configurations include enabling APIs ( Application Integration API , Secret manager API , and Connectors API ), creating a default service account , and using Google-owned and Google-managed encryption keys as the encryption method for the selected region.
- Connectors API connectors.googleapis.com Enables users to create and manage connections to Google Cloud services and other business applications using the Integration Connectors interface.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.

