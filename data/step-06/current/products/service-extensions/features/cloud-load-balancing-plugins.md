---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.670Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Cloud Load Balancing plugins"
feature_slug: "cloud-load-balancing-plugins"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/plugins-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/create-plugin"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions"
keywords:
  - "load"
  - "balancing"
  - "plugins"
  - "extensions"
  - "now"
  - "supports"
  - "webassembly"
  - "wasm"
---

# Cloud Load Balancing plugins

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions now supports WebAssembly (Wasm) plugins in a fully managed serverless model, allowing execution directly in the data path of most Cloud Load Balancing application load balancers.

## Extended Definition

Service Extensions now supports WebAssembly (Wasm) plugins in a fully managed serverless model, allowing execution directly in the data path of most Cloud Load Balancing application load balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)

## Supporting Pages

### Plugins overview \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How plugins work You can use Service Extensions with Application Load Balancers and Media CDN as follows: Prepare plugin code as follows: Create custom code by using one of the Proxy-Wasm SDKs: Rust Go C++ Compile your code into a Wasm module.
- For Cloud Load Balancing plugins, the following are not supported: Headers: connection , keep-alive , proxy-authenticate , proxy-authorization , proxy-connection , sec-user-ip , te , trailer , transfer-encoding , upgrade , x-dont-count-ads , x-dont-show-ads , x-gr , x-proxyuser-ip , or x-user-ip .
- This page provides overview information about the integration of plugins with Cloud Load Balancing Application Load Balancers and Media CDN.
- Configure the plugin in Cloud Load Balancing extensions or Media CDN extensions .

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.
- Service Extensions lets you use extensions to instruct supported Application Load Balancers to use plugins or send callouts from the load balancing data path to callout backend services or Google services.
- Extensibility points in the load balancing data path Service Extensions supports extensions in different stages of the load balancing data path.
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .

### Create a plugin \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify a new image and version name: gcloud service-extensions wasm-plugins update my-plugin \ --image=...-docker.pkg.dev/my-project/repository/container:tag \ --main-version=v2 To run these plugins, you can configure Cloud Load Balancing extensions and Media CDN extensions .
- Learn how to configure Cloud Load Balancing edge extensions , route extensions , and traffic extensions by using plugins.
- Click Create . gcloud Create a plugin by running the gcloud service-extensions wasm-plugins create command : gcloud service-extensions wasm-plugins create WASM PLUGIN \ --description= PLUGIN DESCRIPTION \ --location= LOCATION \ --labels= [LABELS,...] \ --log-config= [LOG CONFIG,...] \ --image= IMAGE \ --main-version= MAIN VERSION \ --plugin-config= PLUGIN CONFIG --plugin-config-file= PLUGIN CONFIG FILE --plugin-config-uri= PLUGIN CONFIG URI \ --kms-key-name= KEY NAME Replace the following: WASM PLUGIN : the ID or the fully qualified name of the plugin PLUGIN DESCRIPTION : a description of the plugin LOCATION : the location of the plugin as either global or a region LABELS : labels in the form of key-value pairs separated by commas LOG CONFIG : logging options for the plugin.
- Access images in another project Before you can select images from another project, the Service Extensions service agent must have access to the project repository and, depending on how your Wasm module is packaged, one of the following permissions on the project: For generic artifacts: artifactregistry.files.download For container images: artifactregistry.repositories.downloadArtifacts The Service Extensions service agent is named as follows: service- PROJECT NUMBER @gcp-sa-networkactions.iam.gserviceaccount.com Replace PROJECT NUMBER with your project number .

### "Configure an edge extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a global forwarding rule—for example, cr-xlb-forwarding-rule . cat >edge-plugin.yaml <<EOF name: edge-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/global/forwardingRules/cr-xlb-forwarding-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/global/wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - REQUEST HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID WASM PLUGIN : the ID or the fully qualified name of the plugin Edge extensions let you use only one regular expression per CEL expression.
- You can't configure Cloud Load Balancing extensions with plugins that are already used in Media CDN extensions.
- Service Extensions enables supported Application Load Balancers to use plugins to insert custom processing in the processing path.
- For an overview about Application Load Balancer extensions, see Cloud Load Balancing extensions overview .

