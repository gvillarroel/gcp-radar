---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.546Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Eventarc console UI"
feature_slug: "eventarc-console-ui"
latest_feature_date: "2021-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/roles-permissions"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1"
keywords:
  - "eventarc"
  - "console"
  - "ui"
  - "dedicated"
  - "user"
  - "interface"
  - "is"
  - "available"
---

# Eventarc console UI

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

A dedicated Eventarc user interface is available in preview.

## Extended Definition

A dedicated Eventarc user interface is available in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced](https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/roles-permissions](https://docs.cloud.google.com/eventarc/standard/docs/gke/roles-permissions)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1)

## Supporting Pages

### "Disable Eventarc Advanced resources \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced](https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create a custom constraint using the following Eventarc Advanced resource types: Enrollment GoogleApiSource MessageBus Pipeline Set up a custom constraint Console To create a custom constraint, do the following: In the Google Cloud console, go to the Organization policies page.
- Home Documentation Application development Eventarc Standard Guides Send feedback Disable Eventarc Advanced resources Stay organized with collections Save and categorize content based on your preferences.
- Before you begin Before you disable Eventarc Advanced resources, make sure that the following prerequisites are met: You know your Google Cloud organization ID .
- If your organization requires compliance with these standards, you can disable the creation or updating of Eventarc Advanced resources.

### "Roles and permissions for Google Kubernetes Engine (GKE) targets \_|\_ Eventarc\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/roles-permissions](https://docs.cloud.google.com/eventarc/standard/docs/gke/roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DESCRIPTION : an optional description of the service account DISPLAY NAME : a service account name to display in the Google Cloud console Grant the Eventarc Event Receiver role ( roles/eventarc.eventReceiver ) on the project to the service account associated with your Eventarc trigger so that it can receive events from event providers.
- Home Documentation Application development Eventarc Standard Guides Send feedback Roles and permissions for Google Kubernetes Engine (GKE) targets Stay organized with collections Save and categorize content based on your preferences.
- When creating an Eventarc trigger, you need this role so that you can associate a user-managed service account with the trigger and which represents its identity.
- Grant the Monitoring Metric Writer role ( roles/monitoring.metricWriter ) on the project to the service account associated with your Eventarc trigger so that Eventarc's event forwarder can write metrics using Cloud Monitoring and other systems that provide metrics. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/monitoring.metricWriter Grant permissions to Google service agents Some Google Cloud services have service agents that allow the services to access your resources.

### "Route Apigee Registry events to GKE \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry)
- Source ID: `site-iam-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Eventarc Standard Guides Send feedback Route Apigee Registry events to GKE Stay organized with collections Save and categorize content based on your preferences.
- If you don't already have one, create a user-managed service account, then grant it the roles and permissions necessary so that Eventarc can manage events for your target GKE destination.
- If you don't already have one, create a user-managed service account, then grant it the roles and permissions necessary so that Eventarc can manage events for your target service.
- This specifies the Identity and Access Management (IAM) service account email associated with the trigger and to which you previously granted specific roles required by Eventarc.

### "Package com.google.cloud.eventarc.publishing.v1 (0.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1)
- Source ID: `site-java-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder The following abstract data types are available for use in attributes. com. google. cloud. eventarc. publishing. v1.
- Builder CloudEvent represents a vendor-neutral specification for defining the format of event data. com. google. cloud. eventarc. publishing. v1.
- Cloud Event Attribute Value The following abstract data types are available for use in attributes. com. google. cloud. eventarc. publishing. v1.
- Builder The response message for the PublishChannelConnectionEvents method. com. google. cloud. eventarc. publishing. v1.

