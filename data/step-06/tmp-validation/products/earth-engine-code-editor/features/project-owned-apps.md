---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.573Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Project-owned Apps"
feature_slug: "project-owned-apps"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/apps"
  - "https://developers.google.com/earth-engine/guides/access_control"
  - "https://developers.google.com/earth-engine/guides/access"
keywords:
  - "collaborators"
  - "project"
  - "owned"
  - "work"
  - "apps"
  - "lets"
---

# Project-owned Apps

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Project-owned Apps lets collaborators work on Earth Engine apps under a project ID namespace.

## Extended Definition

Project-owned Apps lets collaborators work on Earth Engine apps under a project ID namespace.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/access](https://developers.google.com/earth-engine/guides/access)

## Supporting Pages

### Earth Engine Apps \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable Project-owned Apps, choose the Cloud Project option on the "Choose editing access" step and select the Cloud Project you would like to use, then finish the App publishing flow as normal.
- Project-owned Apps are apps that are owned and published under a Cloud Project; anyone with the Earth Engine Apps Publisher IAM role can edit and delete apps published under the Cloud Project.
- Important: Deleting a Cloud Project will also result in the deletion of any Project-owned Apps under the Cloud Project, as per Google Cloud's data deletion and retention policies .
- Project-owned Apps, published under a Cloud Project, enable collaboration as anyone with the Earth Engine Apps Publisher IAM role can edit and delete them.

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Also grants permission to edit and delete Project-owned apps under the Cloud Project.
- Permissions needed on the billing account billing.subscriptions.list Apps management Display app info Permissions needed iam.serviceAccounts.get iam.serviceAccounts.getIamPolicy , if app is restricted (less common) Suggested roles Viewer ( roles/viewer ) OR Earth Engine Apps Publisher ( roles/earthengine.appsPublisher ) Publish/Update app Permissions needed iam.serviceAccounts.get iam.serviceAccounts.create iam.serviceAccounts.enable iam.serviceAccounts.getIamPolicy iam.serviceAccounts.setIamPolicy iam.serviceAccounts.disable , if app is moved from one project to another (uncommon) Suggested roles Earth Engine Apps Publisher ( roles/earthengine.appsPublisher ) OR Service Account Admin ( roles/iam.serviceAccountAdmin ) Notes In addition, Earth Engine App service accounts identify themselves to the Earth Engine servers by presenting an OAuth access token.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-04 UTC."],[],["Earth Engine resources are shared at project or asset levels, requiring specific permissions like serviceusage.services.use and Earth Engine roles (Viewer, Writer, Admin, Apps Publisher).
- Full access to the Earth Engine API To give users full access to the Earth Engine service, either through the REST API directly, through the Code Editor or through a client library, users will need permission to perform operations like: Executing Earth Engine expressions Running batch computations (exports) Getting interactive results (online maps, thumbnails, charts, etc.) Creating/deleting Earth Engine assets Using OAuth Authentication via a Client Library to connect to Earth Engine Permissions needed clientauthconfig.clients.listWithSecrets earthengine.assets.get earthengine.assets.getIamPolicy earthengine.assets.list earthengine.computations.create earthengine.operations.get earthengine.operations.list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list serviceusage.operations.get serviceusage.operations.list serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.services.use Suggested roles Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) AND one of: Earth Engine Resource Viewer ( roles/earthengine.viewer ) OR Earth Engine Resource Writer ( roles/earthengine.writer ) OR Earth Engine Resource Admin ( roles/earthengine.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) is additionally required for users who access Earth Engine through a notebook environment and use the Notebook Authenticator.

### Earth Engine access \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access](https://developers.google.com/earth-engine/guides/access)
- Source ID: `site-docs-root-2`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For programmatic asset deletion of an asset with ID projects/{project-id}/assets/{asset-id} (e.g., projects/my-project/assets/my-asset ): Python client ee . data . deleteAsset ( 'projects/ my-project /assets/ my-asset ' ) JavaScript client Note that the Code Editor's security sandbox prevents this call from working in that environment. ee . data . deleteAsset ( 'projects/ my-project /assets/ my-asset ' ) Command-line tool Use the rm command: earthengine rm projects/ my-project /assets/ my-asset Note: for legacy user-owned assets, the path structure is users/{user-id}/{asset-id} .
- In the configuration of the web application: Specify authorized JavaScript origins, for example: http://localhost:8080 https://foo-ee-project.appspot.com Specify authorized redirect URIs, for example: http://localhost:8080/oauth2callback https://foo-ee-project.appspot.com/oauth2callback Learn more about authenticating users with OAuth .
- Cloud projects When a Cloud project is deleted , it triggers the deletion of Earth Engine data associated with that project (including, for example, any assets stored in the project root, any project-level EE Apps, Monitoring data, etc.).
- All Earth Engine calls (whether from the Code Editor, client libraries, Apps, or REST API) are routed through a Cloud project, enabling access control, resource management, and usage monitoring in the Cloud Console.

