---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.303Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine network ingress controls with Cloud Load Balancing"
feature_slug: "app-engine-network-ingress-controls-with-cloud-load-balancing"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed"
keywords:
  - "app"
  - "engine"
  - "network"
  - "ingress"
  - "controls"
  - "load"
  - "balancing"
  - "apps"
---

# App Engine network ingress controls with Cloud Load Balancing

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Apps using Cloud Load Balancing can use network ingress controls so App Engine only accepts traffic routed through the load balancer.

## Extended Definition

Apps using Cloud Load Balancing can use network ingress controls so App Engine only accepts traffic routed through the load balancer.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)

## Supporting Pages

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- For each service, the value in this column shows the ingress setting as one of All (default), Internal + Load Balancing , or Internal . gcloud To view the ingress setting for a service using the gcloud CLI: gcloud app services describe SERVICE Replace SERVICE with the name of your service.
- At a network level, by default, any resource on the internet is able to reach your App Engine app on its appspot URL or at a custom domain set up in App Engine.
- OK This section describes how to use ingress settings to restrict network access to your App Engine app.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- Requests can be routed in the following ways: Routing with URLs Routing with a dispatch file Routing with Cloud Load Balancing These options apply only to deployed apps.
- Note the following: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)
- Source ID: `site-docs-reference-4`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- Requests can be routed in the following ways: Routing with URLs Routing with a dispatch file Routing with Cloud Load Balancing These options apply only to deployed apps.
- Note the following: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).

