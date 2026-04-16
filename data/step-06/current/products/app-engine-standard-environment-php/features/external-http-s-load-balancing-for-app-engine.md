---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.304Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "External HTTP(S) load balancing for App Engine"
feature_slug: "external-http-s-load-balancing-for-app-engine"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref"
keywords:
  - "external"
  - "http"
  - "load"
  - "balancing"
  - "app"
  - "engine"
  - "now"
  - "supports"
---

# External HTTP(S) load balancing for App Engine

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine now supports External HTTP(S) Load Balancing via Serverless Network Endpoint Groups, enabling Cloud CDN usage.

## Extended Definition

App Engine now supports External HTTP(S) Load Balancing via Serverless Network Endpoint Groups, enabling Cloud CDN usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Tip: To allow everyone access to your assets, you can use the wildcard ' ' , instead of https://mygame.uc.r.appspot.com . login To use this element, app engine apis must be set to true .
- For example, cron scheduled tasks satisfy the admin restriction, because App Engine sets an HTTP header X-Appengine-Cron: true on the respective requests.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)
- Source ID: `site-docs-reference-4`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.

