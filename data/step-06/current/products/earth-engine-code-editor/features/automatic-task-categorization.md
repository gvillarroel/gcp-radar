---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.525Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Automatic task categorization"
feature_slug: "automatic-task-categorization"
latest_feature_date: "2015-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/access_control"
keywords:
  - "automatic"
  - "task"
  - "categorization"
  - "tasks"
  - "older"
  - "than"
  - "one"
  - "day"
---

# Automatic task categorization

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Tasks older than one day are automatically categorized.

## Extended Definition

Tasks older than one day are automatically categorized.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Import tasks in the upload phase will show their progress in the Unsubmitted tasks section and automatically submit to the server once the file upload is complete.
- Tasks tab Earth Engine Tasks are operations that are capable of running much longer than the standard API request timeout.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- These long-running tasks are the only mechanism for creating persistent artifacts in Earth Engine and adjacent systems (Google Cloud Storage, Google Drive, etc.), and they fall into two categories: Import and Export .

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The earthengine tool manages Earth Engine assets and tasks via the command line.
- For safety when deleting multiple assets, you can use the --dry run flag to verify exactly what will be deleted without actually deleting anything. set project Sets the Google Cloud project through which computation requests are routed. earthengine set project foo-project This command is needed prior to running commands that require Cloud functionality, for example model . task Prints information about or manages long-running tasks.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- These roles are: Role Title Description roles/earthengine.viewer Earth Engine Resource Viewer Provides permission to view and list Assets and tasks. roles/earthengine.writer Earth Engine Resource Writer Provides permission to read, create, modify and delete assets, import images and tables, read and update tasks, perform interactive computations, and create long running export tasks. roles/earthengine.admin Earth Engine Admin Provides permission for all Earth Engine resources including changing access controls for Earth Engine assets. roles/earthengine.appsPublisher Earth Engine Apps Publisher Provides permission to create a service account for use with an Earth Engine app.
- App tasks such as app creation and deletion require specific permissions like iam.serviceAccounts.create and roles like Service Account Admin.\n"]]
- Permissions needed resourcemanager.projects.get resourcemanager.folders.list resourcemanager.folders.get resourcemanager.organizations.get (uncommon) Suggested roles Viewer ( roles/viewer ) OR Earth Engine Resource Viewer ( roles/earthengine.viewer ) on relevant projects OR Browser ( roles/browser , recommended for advanced organization cases) Folder Viewer ( roles/resourcemanager.folderViewer ) on relevant folders Select a project for use in the Code Editor Permissions needed resourcemanager.projects.get serviceusage.services.get If project has not previously been set up On first selecting a project through the Code Editor, the project is initialized for use with Earth Engine.
- Permissions needed on the billing account billing.subscriptions.create (to change an Earth Engine plan) billing.subscriptions.list (to view the current Earth Engine plan) Suggested roles on the billing account Billing Account Viewer ( roles/billing.viewer ), to view the current Earth Engine plan Billing Account Administrator ( roles/billing.admin ), to change an Earth Engine plan Batch task management The following permissions pertain to configuring per-project limits on batch task concurrency .

