---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.672Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions Go-compiled WebAssembly plugin support"
feature_slug: "service-extensions-go-compiled-webassembly-plugin-support"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/plugins-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/manage-plugins"
  - "https://docs.cloud.google.com/service-extensions/docs/create-plugin"
  - "https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview"
keywords:
  - "extensions"
  - "go"
  - "compiled"
  - "webassembly"
  - "plugin"
  - "plugins"
  - "can"
  - "now"
---

# Service Extensions Go-compiled WebAssembly plugin support

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions plugins can now be authored as WebAssembly modules compiled from Go, in addition to Rust and C++.

## Extended Definition

Service Extensions plugins can now be authored as WebAssembly modules compiled from Go, in addition to Rust and C++.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- [https://docs.cloud.google.com/service-extensions/docs/manage-plugins](https://docs.cloud.google.com/service-extensions/docs/manage-plugins)
- [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- [https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview)

## Supporting Pages

### Plugins overview \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- Source ID: `site-docs-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How plugins work You can use Service Extensions with Application Load Balancers and Media CDN as follows: Prepare plugin code as follows: Create custom code by using one of the Proxy-Wasm SDKs: Rust Go C++ Compile your code into a Wasm module.
- Home Documentation Networking Service Extensions Guides Send feedback Plugins overview Stay organized with collections Save and categorize content based on your preferences.
- Plugin resources Service Extensions helps you create the following key resources that help you add custom code in the processing path: Plugins , which contain the custom code that you want to deploy.
- Limitations on resources Plugins are strictly constrained in how many resources they can use: A plugin can use up to 1 msec of normalized vCPU per invocation.

### Manage plugins \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/manage-plugins](https://docs.cloud.google.com/service-extensions/docs/manage-plugins)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can click the image URL to view its details. gcloud To view the details of a plugin, run the gcloud service-extensions wasm-plugins describe command : gcloud service-extensions wasm-plugins describe WASM PLUGIN \ --location= LOCATION Replace the following: WASM PLUGIN : the name of the plugin LOCATION : the location of the plugin as either global or a region The following details about the plugin are shown: The plugin name The creation and modification timestamps for the plugin The labels The log sampling rate (if logging is enabled) To list the versions for a plugin, use the gcloud service-extensions wasm-plugin-versions list command : gcloud service-extensions wasm-plugin-versions list WASM PLUGIN \ --location= LOCATION Replace the following: WASM PLUGIN : the name of the plugin LOCATION : the location of the plugin as either global or a region The versions of the specified plugin are listed in a table with the name of the plugin.
- To view the details of a plugin version, use the gcloud service-extensions wasm-plugin-versions describe command : gcloud service-extensions wasm-plugin-versions describe WASM PLUGIN VERSION \ --location= LOCATION Replace the following: WASM PLUGIN VERSION : the main version of the plugin LOCATION : the location of the plugin as either global or a region The following details about the plugin version are shown: The version name The creation timestamp A description, if it was entered The URI and digests for the image The plugin configuration file or image and related digests Edit plugins This section describes how you can edit plugins created using Service Extensions.
- Click Update plugin . gcloud Run the gcloud service-extensions wasm-plugins update command : gcloud service-extensions wasm-plugins update WASM PLUGIN \ --location= LOCATION \ --description= PLUGIN DESCRIPTION \ --labels= [LABELS,...] Replace the following: WASM PLUGIN : the name of the plugin LOCATION : the location of the plugin as either global or a region PLUGIN DESCRIPTION : the description of the plugin LABELS : labels in the form of key-value pairs separated by commas Add a new version of a plugin You can create a new version of the plugin code and then add it as a new version of the plugin.
- The plugins in your project are listed in a table that has the following information: Name : the name of the plugin Description : the description of the plugin Main version : the active version of the plugin Update time : the time when the plugin was last modified View the details of a plugin To view the details of a plugin, use one of the following methods: Console In the Google Cloud console, go to the Service Extensions page.

### Create a plugin \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to create Service Extensions plugins that you can use to implement extensibility with Google Cloud services.
- Specify a new image and version name: gcloud service-extensions wasm-plugins update my-plugin \ --image=...-docker.pkg.dev/my-project/repository/container:tag \ --main-version=v2 To run these plugins, you can configure Cloud Load Balancing extensions and Media CDN extensions .
- Go to Service Extensions Click the Plugins tab.
- Click Create . gcloud Create a plugin by running the gcloud service-extensions wasm-plugins create command : gcloud service-extensions wasm-plugins create WASM PLUGIN \ --description= PLUGIN DESCRIPTION \ --location= LOCATION \ --labels= [LABELS,...] \ --log-config= [LOG CONFIG,...] \ --image= IMAGE \ --main-version= MAIN VERSION \ --plugin-config= PLUGIN CONFIG --plugin-config-file= PLUGIN CONFIG FILE --plugin-config-uri= PLUGIN CONFIG URI \ --kms-key-name= KEY NAME Replace the following: WASM PLUGIN : the ID or the fully qualified name of the plugin PLUGIN DESCRIPTION : a description of the plugin LOCATION : the location of the plugin as either global or a region LABELS : labels in the form of key-value pairs separated by commas LOG CONFIG : logging options for the plugin.

### "Media CDN extensions overview \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview)
- Source ID: `site-iam-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As Figure 1 shows, with Service Extensions, you can use plugins to place custom code that implements specific actions at the edge, in front of the cache in the Media CDN processing path.
- How Media CDN plugins work On the Media CDN request path, plugins run after route matching and Google Cloud Armor edge security policies but before cache key calculation and the addition of custom headers to the origin.
- Service Extensions helps you add custom code for lightweight compute use cases in the request and response processing paths by using plugins .
- Plugins can access and manipulate HTTP request and response headers and then serve synthetic responses.

