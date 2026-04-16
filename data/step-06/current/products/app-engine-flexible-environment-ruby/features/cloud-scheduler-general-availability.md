---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.503Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security"
keywords:
  - "scheduler"
  - "availability"
  - "became"
  - "generally"
  - "available"
  - "setting"
  - "up"
  - "scheduled"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler became generally available for setting up scheduled jobs, including cron-like workflows.

## Extended Definition

Cloud Scheduler became generally available for setting up scheduled jobs, including cron-like workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security](https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security)

## Supporting Pages

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available ingress settings The following settings are available: Setting Description Internal Most restrictive.
- Internal and Cloud Load Balancing Allows requests from the following resources: Resources allowed by the more restrictive Internal setting External Application Load Balancer Use the Internal and Cloud Load Balancing setting to accept requests from an external Application Load Balancer but not directly from the internet.
- For each service, the value in this column shows the ingress setting as one of All (default), Internal + Load Balancing , or Internal . gcloud To view the ingress setting for a service using the gcloud CLI: gcloud app services describe SERVICE Replace SERVICE with the name of your service.
- Select the ingress setting that you want from the menu and click Save . gcloud To update the ingress setting for a service using the gcloud CLI: gcloud app services update SERVICE --ingress = INGRESS Replace: SERVICE : The name of your service.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To modify the default settings, and edit and view the available settings, see Specify ingress settings .
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- To learn more about the Google Security Model and the available steps that you can take to secure your Google Cloud projects, see Google Cloud Platform Security .
- For more information on assigning roles, see Setting Up Access Control .

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security](https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security)
- Source ID: `site-docs-reference-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To modify the default settings, and edit and view the available settings, see Specify ingress settings .
- You can then create and modify your firewall rules to control the scope of access throughout your release process, allowing only certain organizations, either within your company or externally, to access your app as it makes its way to public availability.
- To learn more about the Google Security Model and the available steps that you can take to secure your Google Cloud projects, see Google Cloud Platform Security .
- For more information on assigning roles, see Setting Up Access Control .

