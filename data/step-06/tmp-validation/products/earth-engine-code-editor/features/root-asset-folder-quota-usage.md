---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.599Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Root asset folder quota usage"
feature_slug: "root-asset-folder-quota-usage"
latest_feature_date: "2016-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/access_control"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "folder"
  - "quota"
  - "view"
  - "usage"
  - "root"
  - "users"
  - "asset"
---

# Root asset folder quota usage

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Users can view quota usage for a root asset folder.

## Extended Definition

Users can view quota usage for a root asset folder.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Full access to the Earth Engine API To give users full access to the Earth Engine service, either through the REST API directly, through the Code Editor or through a client library, users will need permission to perform operations like: Executing Earth Engine expressions Running batch computations (exports) Getting interactive results (online maps, thumbnails, charts, etc.) Creating/deleting Earth Engine assets Using OAuth Authentication via a Client Library to connect to Earth Engine Permissions needed clientauthconfig.clients.listWithSecrets earthengine.assets.get earthengine.assets.getIamPolicy earthengine.assets.list earthengine.computations.create earthengine.operations.get earthengine.operations.list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list serviceusage.operations.get serviceusage.operations.list serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.services.use Suggested roles Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) AND one of: Earth Engine Resource Viewer ( roles/earthengine.viewer ) OR Earth Engine Resource Writer ( roles/earthengine.writer ) OR Earth Engine Resource Admin ( roles/earthengine.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) is additionally required for users who access Earth Engine through a notebook environment and use the Notebook Authenticator.
- Permissions needed resourcemanager.projects.get resourcemanager.folders.list resourcemanager.folders.get resourcemanager.organizations.get (uncommon) Suggested roles Viewer ( roles/viewer ) OR Earth Engine Resource Viewer ( roles/earthengine.viewer ) on relevant projects OR Browser ( roles/browser , recommended for advanced organization cases) Folder Viewer ( roles/resourcemanager.folderViewer ) on relevant folders Select a project for use in the Code Editor Permissions needed resourcemanager.projects.get serviceusage.services.get If project has not previously been set up On first selecting a project through the Code Editor, the project is initialized for use with Earth Engine.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-04 UTC."],[],["Earth Engine resources are shared at project or asset levels, requiring specific permissions like serviceusage.services.use and Earth Engine roles (Viewer, Writer, Admin, Apps Publisher).
- You can share the assets or compute quota of your Earth Engine enabled project with other Earth Engine users at the project level.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- You may specify --max items number (or -m for short) to limit the number of items from each folder or collection you list: earthengine ls -m 10 projects/my-project/assets/my large collection Running the ls command with no arguments will list the top-level folders that you own. model Tool with which to manipulate TensorFlow saved models. model prepare Prepare a saved model for serving in Earth Engine.
- Before using this command, be sure to set a project using set project . get To view a project configuration, use the get sub-command: earthengine alpha project config get If you have permission to view the project's batch task settings , the output contains: maxConcurrentExports : a number indicating the maximum number of batch tasks that can run in parallel across all users for the given project.
- Additionally, if you have permission to view the plan configuration , the output contains: planMaxConcurrentExports , a number indicating the maximum number of batch tasks that can run in parallel across all users and projects that use the billing account. set To update the project's configuration, use the set sub-command.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The repositories are arranged by access level, with your private scripts stored in a repository you own in the Owner folder: users/username/default .
- Caution: If your shared script includes private asset imports, be sure to share them with intended users or publicly.
- For example: Code Editor (JavaScript) var Foo = require ( 'users/username/default:Modules/FooModule.js' ); print ( Foo . doc ); print ( Foo . foo ( 'world' )); print ( 'Time now:' , Foo . bar ); The require function expects a string that describes the absolute path to the location of the module.
- For example, suppose you define the following module in a file named FooModule.js which is in a folder named Modules : Code Editor (JavaScript) / The Foo module is a demonstration of script modules.

