---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.774Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "External HTTP(S) Load Balancing via Serverless NEG"
feature_slug: "external-http-s-load-balancing-via-serverless-neg"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "http"
  - "balancing"
  - "external"
  - "load"
  - "serverless"
---

# External HTTP(S) Load Balancing via Serverless NEG

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine supports External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling integrations such as Cloud CDN.

## Extended Definition

App Engine supports External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling integrations such as Cloud CDN.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- When routing requests that are mapped to an App Engine serverless NEG, the load balancer only consults dispatch rules if the serverless NEG doesn't specify a service or version.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-3`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- When routing requests that are mapped to an App Engine serverless NEG, the load balancer only consults dispatch rules if the serverless NEG doesn't specify a service or version.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Internal and Cloud Load Balancing Allows requests from the following resources: Resources allowed by the more restrictive Internal setting External Application Load Balancer Use the Internal and Cloud Load Balancing setting to accept requests from an external Application Load Balancer but not directly from the internet.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- For each service, the value in this column shows the ingress setting as one of All (default), Internal + Load Balancing , or Internal . gcloud To view the ingress setting for a service using the gcloud CLI: gcloud app services describe SERVICE Replace SERVICE with the name of your service.
- Requests to the appspot.com URL bypass the external Application Load Balancer, so this setting prevents external requests from reaching the appspot.com URL.

