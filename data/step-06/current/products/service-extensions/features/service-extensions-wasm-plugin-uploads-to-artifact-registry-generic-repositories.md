---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.670Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions Wasm plugin uploads to Artifact Registry generic repositories"
feature_slug: "service-extensions-wasm-plugin-uploads-to-artifact-registry-generic-repositories"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/create-plugin"
  - "https://docs.cloud.google.com/service-extensions/docs/manage-plugins"
  - "https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes"
  - "https://docs.cloud.google.com/service-extensions/docs/plugins-overview"
keywords:
  - "extensions"
  - "wasm"
  - "plugin"
  - "uploads"
  - "to"
  - "artifact"
  - "registry"
  - "generic"
---

# Service Extensions Wasm plugin uploads to Artifact Registry generic repositories

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions allows uploading Wasm plugin code to Artifact Registry using generic format repositories in addition to Docker repositories.

## Extended Definition

Service Extensions allows uploading Wasm plugin code to Artifact Registry using generic format repositories in addition to Docker repositories.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- [https://docs.cloud.google.com/service-extensions/docs/manage-plugins](https://docs.cloud.google.com/service-extensions/docs/manage-plugins)
- [https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes](https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes)
- [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)

## Supporting Pages

### Create a plugin \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access images in another project Before you can select images from another project, the Service Extensions service agent must have access to the project repository and, depending on how your Wasm module is packaged, one of the following permissions on the project: For generic artifacts: artifactregistry.files.download For container images: artifactregistry.repositories.downloadArtifacts The Service Extensions service agent is named as follows: service- PROJECT NUMBER @gcp-sa-networkactions.iam.gserviceaccount.com Replace PROJECT NUMBER with your project number .
- For example: gcloud service-extensions wasm-plugins create my-plugin \ --description="This is my plugin." \ --log-config=enable=true,sample-rate=0.5,min-log-level=INFO \ --labels=key1=value1,key2=value2 \ --image=...-docker.pkg.dev/my-project/repository/container:tag \ --main-version=v1 \ --plugin-config-file=config.txt To deploy a new version, use the gcloud service-extensions wasm-plugins update command .
- Specify a new image and version name: gcloud service-extensions wasm-plugins update my-plugin \ --image=...-docker.pkg.dev/my-project/repository/container:tag \ --main-version=v2 To run these plugins, you can configure Cloud Load Balancing extensions and Media CDN extensions .
- For Image URL , enter the URL for the generic artifact or container image that has the Wasm module from the Artifact Registry pane.

### Manage plugins \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/manage-plugins](https://docs.cloud.google.com/service-extensions/docs/manage-plugins)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Update plugin . gcloud Run the gcloud service-extensions wasm-plugins update command : gcloud service-extensions wasm-plugins update WASM PLUGIN \ --location= LOCATION \ --image= IMAGE \ --main-version= MAIN VERSION \ --plugin-config= PLUGIN CONFIG --plugin-config-file= PLUGIN CONFIG FILE --plugin-config-uri= PLUGIN CONFIG URI Replace the following: WASM PLUGIN : the ID or the fully qualified name of the plugin LOCATION : the location of the plugin as either global or a region IMAGE : the URI of the new Wasm module stored in the Artifact Registry repository MAIN VERSION : the ID of the plugin version to create and set as the main (or serving) version.
- You can click the image URL to view its details. gcloud To view the details of a plugin, run the gcloud service-extensions wasm-plugins describe command : gcloud service-extensions wasm-plugins describe WASM PLUGIN \ --location= LOCATION Replace the following: WASM PLUGIN : the name of the plugin LOCATION : the location of the plugin as either global or a region The following details about the plugin are shown: The plugin name The creation and modification timestamps for the plugin The labels The log sampling rate (if logging is enabled) To list the versions for a plugin, use the gcloud service-extensions wasm-plugin-versions list command : gcloud service-extensions wasm-plugin-versions list WASM PLUGIN \ --location= LOCATION Replace the following: WASM PLUGIN : the name of the plugin LOCATION : the location of the plugin as either global or a region The versions of the specified plugin are listed in a table with the name of the plugin.
- To view the details of a plugin version, use the gcloud service-extensions wasm-plugin-versions describe command : gcloud service-extensions wasm-plugin-versions describe WASM PLUGIN VERSION \ --location= LOCATION Replace the following: WASM PLUGIN VERSION : the main version of the plugin LOCATION : the location of the plugin as either global or a region The following details about the plugin version are shown: The version name The creation timestamp A description, if it was entered The URI and digests for the image The plugin configuration file or image and related digests Edit plugins This section describes how you can edit plugins created using Service Extensions.
- Click Update plugin . gcloud Run the gcloud service-extensions wasm-plugins update command : gcloud service-extensions wasm-plugins update \ --location= LOCATION \ --main-version= WASM PLUGIN VERSION Replace the following: LOCATION : the location of the plugin as either global or a region WASM PLUGIN VERSION : the name of the main version of the plugin It might take a few minutes for the new plugin version to be distributed across all locations.

### "Attach a plugin to a Media CDN route \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes](https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update the routes in the file to add the wasmAction header as shown in the following example: name : SERVICE NAME routing : hostRules : - hosts : - DOMAIN NAME pathMatcher : routes pathMatchers : - name : routes routeRules : - priority : '1' description : Route 1 matchRules : - prefixMatch : /plugins origin : projects/ PROJECT NUMBER /locations/global/edgeCacheOrigins/ ORIGIN NAME routeAction : wasmAction : projects/ PROJECT NUMBER /locations/global/wasmActions/ WASM ACTION Replace the following: SERVICE NAME : the name of the Media CDN service DOMAIN NAME : the domain of the Media CDN service PROJECT NUMBER : the project number ORIGIN NAME : the origin for the content WASM ACTION : the Service Extensions Wasm action Save the YAML file.
- Create a Wasm action for your Service Extensions plugin by running the gcloud alpha service-extensions wasm-actions create command : gcloud alpha service-extensions wasm-actions create WASM ACTION \ --wasm-plugin= WASM PLUGIN \ --supported-events=[ EVENT,... ] Replace the following: WASM ACTION : the ID or the fully qualified name of the Wasm action WASM PLUGIN : the name of the plugin to which you want to attach the action EVENT : the portion of the payload to be processed by the plugin as indicated by either or both of these values: request-headers or response-headers .
- Home Documentation Networking Service Extensions Guides Send feedback Attach a plugin to a Media CDN route Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure Service Extensions plugins in Media CDN routes.

### Plugins overview \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How plugins work You can use Service Extensions with Application Load Balancers and Media CDN as follows: Prepare plugin code as follows: Create custom code by using one of the Proxy-Wasm SDKs: Rust Go C++ Compile your code into a Wasm module.
- Upload your compiled plugin code to an Artifact Registry repository.
- Plugin resources Service Extensions helps you create the following key resources that help you add custom code in the processing path: Plugins , which contain the custom code that you want to deploy.
- You can indicate which version of your Wasm module that a plugin is to use as its main (active) one.

