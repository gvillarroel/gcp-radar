---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.464Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine network ingress control for VPC and Cloud Load Balancing"
feature_slug: "app-engine-network-ingress-control-for-vpc-and-cloud-load-balancing"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "app"
  - "engine"
  - "network"
  - "ingress"
  - "control"
  - "vpc"
  - "load"
  - "balancing"
---

# App Engine network ingress control for VPC and Cloud Load Balancing

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine added ingress controls that can restrict incoming traffic to requests from a project's VPC or Cloud Load Balancing.

## Extended Definition

App Engine added ingress controls that can restrict incoming traffic to requests from a project's VPC or Cloud Load Balancing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)

## Supporting Pages

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For each service, the value in this column shows the ingress setting as one of All (default), Internal + Load Balancing , or Internal . gcloud To view the ingress setting for a service using the gcloud CLI: gcloud app services describe SERVICE Replace SERVICE with the name of your service.
- OK This section describes how to use ingress settings to restrict network access to your App Engine app.
- Internal and Cloud Load Balancing Allows requests from the following resources: Resources allowed by the more restrictive Internal setting External Application Load Balancer Use the Internal and Cloud Load Balancing setting to accept requests from an external Application Load Balancer but not directly from the internet.

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/java/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your ingress controls are set to receive internal-and-cloud-load-balancing traffic, leave the default App Engine firewall rule as is ( allow ), and use Google Cloud Armor web application firewall (WAF) rules .
- If your App Engine flexible app uses Shared VPC , the App Engine flexible environment does not automatically create firewall rules. if you need to control access and allow traffic on the VPC network, you can create firewall rules on the Shared VPC network.
- In cases where your app is configured to use other networking services or products, you might need to create rules for controlling incoming traffic in both the App Engine firewall and the firewall or security settings of other products.
- Interaction with other products or services Cloud Load Balancing If you use Cloud Load Balancing and serverless NEGs , note the following: The load balancer does not interfere or interact with App Engine firewall rules.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud , run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Inconsistent metrics when App Engine flexible environment uses Cloud Load Balancing The App Engine flexible environment dashboard displays all metrics only for requests routed through a flexible environment managed backend.
- If you use App Engine flexible environment with Cloud Load Balancing, then certain metrics in the App Engine metrics table are reported as metrics from the loadbalancing table instead.
- Note the following: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).

