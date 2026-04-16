---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.026Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Service Extensions plugins"
feature_slug: "service-extensions-plugins"
latest_feature_date: "2022-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes"
  - "https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/create-plugin"
keywords:
  - "extensions"
  - "plugins"
  - "media"
  - "cdn"
  - "can"
  - "run"
  - "in"
  - "the"
---

# Service Extensions plugins

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can run Service Extensions plugins in the request-response path for lightweight customization.

## Extended Definition

Media CDN can run Service Extensions plugins in the request-response path for lightweight customization.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes](https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes)
- [https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)

## Supporting Pages

### "Attach a plugin to a Media CDN route \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes](https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes)
- Source ID: `site-iam-reference`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Create a Media CDN origin Create a Media CDN service Create a plugin by using Service Extensions Note: Service Extensions plugins run after all other configurable features of Media CDN have run.
- Update the routes in the file to add the wasmAction header as shown in the following example: name : SERVICE NAME routing : hostRules : - hosts : - DOMAIN NAME pathMatcher : routes pathMatchers : - name : routes routeRules : - priority : '1' description : Route 1 matchRules : - prefixMatch : /plugins origin : projects/ PROJECT NUMBER /locations/global/edgeCacheOrigins/ ORIGIN NAME routeAction : wasmAction : projects/ PROJECT NUMBER /locations/global/wasmActions/ WASM ACTION Replace the following: SERVICE NAME : the name of the Media CDN service DOMAIN NAME : the domain of the Media CDN service PROJECT NUMBER : the project number ORIGIN NAME : the origin for the content WASM ACTION : the Service Extensions Wasm action Save the YAML file.
- You can use Media CDN with Service Extensions to add custom code to the request-response processing path.
- Attach a plugin to a route To attach a plugin in a Media CDN route, follow these steps: To export the current configuration of your service to a YAML file, run the gcloud edge-cache services export command : gcloud edge - cache services export SERVICE NAME \ -- destination = FILENAME . yaml Replace the following: SERVICE NAME : the name of the Media CDN service FILENAME : the name of the YAML file Use a text editor to edit the YAML file.

### "Media CDN extensions overview \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview)
- Source ID: `site-iam-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As Figure 1 shows, with Service Extensions, you can use plugins to place custom code that implements specific actions at the edge, in front of the cache in the Media CDN processing path.
- How Media CDN plugins work On the Media CDN request path, plugins run after route matching and Google Cloud Armor edge security policies but before cache key calculation and the addition of custom headers to the origin.
- What's next Create a plugin Attach a plugin to a Media CDN route See the Service Extensions overview .
- Service Extensions lets you use extensions to insert custom code in the Media CDN processing path.

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-iam-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- You can configure Application Load Balancers to use the following types of extensions: Edge extensions help you manipulate request headers to influence backend service selection and the content that Cloud CDN serves from cache.
- How edge extensions work Edge extensions run first on the request processing path and let you use request headers to influence backend service selection and the content that Cloud CDN serves from cache.
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.

### Create a plugin \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/create-plugin](https://docs.cloud.google.com/service-extensions/docs/create-plugin)
- Source ID: `site-iam-reference`
- Final score: 281
- Re-rank relevance: N/A

Evidence snippets:
- Specify a new image and version name: gcloud service-extensions wasm-plugins update my-plugin \ --image=...-docker.pkg.dev/my-project/repository/container:tag \ --main-version=v2 To run these plugins, you can configure Cloud Load Balancing extensions and Media CDN extensions .
- Click Create . gcloud Create a plugin by running the gcloud service-extensions wasm-plugins create command : gcloud service-extensions wasm-plugins create WASM PLUGIN \ --description= PLUGIN DESCRIPTION \ --location= LOCATION \ --labels= [LABELS,...] \ --log-config= [LOG CONFIG,...] \ --image= IMAGE \ --main-version= MAIN VERSION \ --plugin-config= PLUGIN CONFIG --plugin-config-file= PLUGIN CONFIG FILE --plugin-config-uri= PLUGIN CONFIG URI \ --kms-key-name= KEY NAME Replace the following: WASM PLUGIN : the ID or the fully qualified name of the plugin PLUGIN DESCRIPTION : a description of the plugin LOCATION : the location of the plugin as either global or a region LABELS : labels in the form of key-value pairs separated by commas LOG CONFIG : logging options for the plugin.
- Enable the Network Services API, if it's not already enabled. gcloud services enable networkservices.googleapis.com For Media CDN plugins, if you intend to enable logging, enable the Network Actions API. gcloud services enable networkactions.googleapis.com Create a plugin resource Creating a plugin resource entails specifying an image that contains the plugin code and specifying labels and logging options for the plugin.
- Access images in another project Before you can select images from another project, the Service Extensions service agent must have access to the project repository and, depending on how your Wasm module is packaged, one of the following permissions on the project: For generic artifacts: artifactregistry.files.download For container images: artifactregistry.repositories.downloadArtifacts The Service Extensions service agent is named as follows: service- PROJECT NUMBER @gcp-sa-networkactions.iam.gserviceaccount.com Replace PROJECT NUMBER with your project number .

