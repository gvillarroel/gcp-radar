---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.875Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "External HTTPS Load Balancing support for App Engine via serverless NEGs"
feature_slug: "external-https-load-balancing-support-for-app-engine-via-serverless-negs"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "external"
  - "https"
  - "load"
  - "balancing"
  - "app"
  - "engine"
  - "via"
  - "serverless"
---

# External HTTPS Load Balancing support for App Engine via serverless NEGs

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine gained support for External HTTP(S) Load Balancing through serverless network endpoint groups, including Cloud CDN usage.

## Extended Definition

App Engine gained support for External HTTP(S) Load Balancing through serverless network endpoint groups, including Cloud CDN usage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- When routing requests that are mapped to an App Engine serverless NEG, the load balancer only consults dispatch rules if the serverless NEG doesn't specify a service or version.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- Internal and Cloud Load Balancing Allows requests from the following resources: Resources allowed by the more restrictive Internal setting External Application Load Balancer Use the Internal and Cloud Load Balancing setting to accept requests from an external Application Load Balancer but not directly from the internet.
- For each service, the value in this column shows the ingress setting as one of All (default), Internal + Load Balancing , or Internal . gcloud To view the ingress setting for a service using the gcloud CLI: gcloud app services describe SERVICE Replace SERVICE with the name of your service.
- Requests to the appspot.com URL bypass the external Application Load Balancer, so this setting prevents external requests from reaching the appspot.com URL.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Requests to external IP addresses are sent to the public internet. all-traffic All requests are sent through the Serverless VPC Access connector into the connected VPC network.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.

