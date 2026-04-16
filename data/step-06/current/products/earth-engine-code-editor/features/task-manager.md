---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.491Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Task Manager"
feature_slug: "task-manager"
latest_feature_date: "2021-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/python_install"
  - "https://developers.google.com/earth-engine/guides/access_control"
keywords:
  - "task"
  - "manager"
  - "standalone"
  - "tasks"
  - "tab"
  - "interface"
  - "were"
  - "launched"
---

# Task Manager

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

A standalone Task Manager and a new Tasks tab interface were launched for Earth Engine task management.

## Extended Definition

A standalone Task Manager and a new Tasks tab interface were launched for Earth Engine task management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- These long-running tasks are the only mechanism for creating persistent artifacts in Earth Engine and adjacent systems (Google Cloud Storage, Google Drive, etc.), and they fall into two categories: Import and Export .
- The Code Editor includes essential elements such as a JavaScript editor, map display, API reference, Script Manager, Console output, Task Manager, interactive map query, search tool, and geometry drawing tools.
- Import tasks in the upload phase will show their progress in the Unsubmitted tasks section and automatically submit to the server once the file upload is complete.

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These roles are: Role Title Description roles/earthengine.viewer Earth Engine Resource Viewer Provides permission to view and list Assets and tasks. roles/earthengine.writer Earth Engine Resource Writer Provides permission to read, create, modify and delete assets, import images and tables, read and update tasks, perform interactive computations, and create long running export tasks. roles/earthengine.admin Earth Engine Admin Provides permission for all Earth Engine resources including changing access controls for Earth Engine assets. roles/earthengine.appsPublisher Earth Engine Apps Publisher Provides permission to create a service account for use with an Earth Engine app.
- App tasks such as app creation and deletion require specific permissions like iam.serviceAccounts.create and roles like Service Account Admin.\n"]]
- Full access to the Earth Engine API To give users full access to the Earth Engine service, either through the REST API directly, through the Code Editor or through a client library, users will need permission to perform operations like: Executing Earth Engine expressions Running batch computations (exports) Getting interactive results (online maps, thumbnails, charts, etc.) Creating/deleting Earth Engine assets Using OAuth Authentication via a Client Library to connect to Earth Engine Permissions needed clientauthconfig.clients.listWithSecrets earthengine.assets.get earthengine.assets.getIamPolicy earthengine.assets.list earthengine.computations.create earthengine.operations.get earthengine.operations.list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list serviceusage.operations.get serviceusage.operations.list serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.services.use Suggested roles Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) AND one of: Earth Engine Resource Viewer ( roles/earthengine.viewer ) OR Earth Engine Resource Writer ( roles/earthengine.writer ) OR Earth Engine Resource Admin ( roles/earthengine.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) is additionally required for users who access Earth Engine through a notebook environment and use the Notebook Authenticator.
- If this hasn't been done before, you will need these roles for setup to succeed. resourcemanager.projects.update AND serviceusage.services.enable Suggested roles Viewer ( roles/viewer ) OR Earth Engine Resource Viewer ( roles/earthengine.viewer ) AND Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Additional roles (if project has not previously been set up) Editor ( roles/editor ) OR Project Mover ( roles/resourcemanager.projectMover ) AND Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) AND Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Create project through the Code Editor Permissions needed resourcemanager.projects.get resourcemanager.projects.create resourcemanager.projects.update serviceusage.services.get serviceusage.services.enable Suggested roles Editor ( roles/editor ) OR Project Mover ( roles/resourcemanager.projectMover ) AND Project Creator ( roles/resourcemanager.projectCreator ) AND Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Notes Your organization may not grant you the Editor role, so the finer-grained roles may be needed.

### Python Installation \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Tasks started from the Python API will also appear in the Tasks tab of the JavaScript Code Editor for the same Google account.
- Export tasks must be started by calling the start() method on a defined task.
- Export . image . toDrive ( image = my image , # an ee.Image object. region = my geometry , # an ee.Geometry object. description = 'mock export' , folder = 'gdrive folder' , fileNamePrefix = 'mock export' , scale = 1000 , crs = 'EPSG:4326' ) Start an export task: task . start () Check export task status: task . status () The result of task.status() is a dictionary containing information such as the state of the task and its ID. { 'state' : 'READY' , 'description' : 'my export task' , 'creation timestamp ms' : 1647567508236 , 'update timestamp ms' : 1647567508236 , 'start timestamp ms' : 0 , 'task type' : 'EXPORT IMAGE' , 'id' : '56TVJIZABUMTD5CJ5YHTMYK4' , 'name' : 'projects/earthengine-legacy/operations/56TVJIZABUMTX5CJ5HHTMYK4' } You can monitor task progress using the state field.
- Keep your client library up to date by running the command for the package manager you used to install earthengine-api : Conda Package Manager : conda update -c conda-forge earthengine-api Python Package Installer : pip install earthengine-api --upgrade Python support The Earth Engine Python client library is compatible with Python versions supported by Google Cloud .

