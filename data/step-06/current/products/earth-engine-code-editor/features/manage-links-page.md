---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.507Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Manage Links page"
feature_slug: "manage-links-page"
latest_feature_date: "2019-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/access"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "manage"
  - "links"
  - "page"
  - "lets"
  - "users"
  - "delete"
  - "download"
  - "saved"
---

# Manage Links page

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Manage Links page lets users delete and download saved links in bulk.

## Extended Definition

The Manage Links page lets users delete and download saved links in bulk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/access](https://developers.google.com/earth-engine/guides/access)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- Saved script links Saved scripts have an option to share a link that will always load the most recent saved version and is only accessible by you and others with current access to the repository containing the script.
- Selecting a script and pressing the download button will download a zipped folder ("code editor links.zip") to your system containing a .txt file representation for each selected script.
- To use this feature, load a saved script from the Script Manager tab, click the dropdown arrow to the right of the "Get Link" button and select "Copy Script Path".

### Earth Engine access \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access](https://developers.google.com/earth-engine/guides/access)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Earth Engine Apps To delete your Earth Engine Apps, use the "Apps" button in the Code Editor to manage your Apps . "Get Link" references Use the Manage Links page to view and delete your "Get Link" links from the Code Editor.
- This page can be found by navigating to the "Manage Links" option in the drop-down menu next to the "Get Link" button.
- For programmatic asset deletion of an asset with ID projects/{project-id}/assets/{asset-id} (e.g., projects/my-project/assets/my-asset ): Python client ee . data . deleteAsset ( 'projects/ my-project /assets/ my-asset ' ) JavaScript client Note that the Code Editor's security sandbox prevents this call from working in that environment. ee . data . deleteAsset ( 'projects/ my-project /assets/ my-asset ' ) Command-line tool Use the rm command: earthengine rm projects/ my-project /assets/ my-asset Note: for legacy user-owned assets, the path structure is users/{user-id}/{asset-id} .
- Terminating commercial access If you are a direct customer of Earth Engine and want to stop using Earth Engine in a paid context, there are several changes needed to stop incurring charges: Stop subscription charges To terminate the Earth Engine subscription on your billing account, you need to use the "Manage Plans" page (accessible from the user settings drop-down menu in the top right of the Code Editor when using a registered Cloud project linked to that billing account).

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- For safety when deleting multiple assets, you can use the --dry run flag to verify exactly what will be deleted without actually deleting anything. set project Sets the Google Cloud project through which computation requests are routed. earthengine set project foo-project This command is needed prior to running commands that require Cloud functionality, for example model . task Prints information about or manages long-running tasks.
- The earthengine tool is a utility program that lets you manage Earth Engine assets and tasks from the command line.
- For more information about batch task parallelism, see the Earth Engine quotas page. rm Deletes one or more assets.

