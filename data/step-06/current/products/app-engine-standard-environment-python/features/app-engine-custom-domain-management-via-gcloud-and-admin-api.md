---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.282Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine custom domain management via gcloud and Admin API"
feature_slug: "app-engine-custom-domain-management-via-gcloud-and-admin-api"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
keywords:
  - "app"
  - "engine"
  - "custom"
  - "domain"
  - "management"
  - "via"
  - "gcloud"
  - "admin"
---

# App Engine custom domain management via gcloud and Admin API

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Custom domain mapping operations are now generally available through gcloud commands and App Engine Admin API methods, including domains verify and authorizedDomains.list.

## Extended Definition

Custom domain mapping operations are now generally available through gcloud commands and App Engine Admin API methods, including domains verify and authorizedDomains.list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-required-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny egress traffic from your connector.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-required-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.
- Routing with a dispatch file You can create a dispatch file to override App Engine's URL-based routing rules and define your own custom routing rules.
- REGION ID .r.appspot.com https:// CUSTOM DOMAIN Requests are received by any version that is configured for traffic in the default service.

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To deploy or update schedules, your account requires one of the following Identity and Access Management roles: Owner Editor Cloud Scheduler Admin ( roles/cloudscheduler.admin ) You can set the permission on the IAM page in the Google Cloud console .
- Start-time interval examples Use the following examples to help you understand how to define job schedules that use a start-time interval: Runs every 5 minutes from 10:00 to 14:00, every day: schedule : every 5 minutes from 10:00 to 14:00 Runs once every hour from 08:00 to 16:00, every day: schedule : every 1 hours from 08:00 to 16:00 Runs once every two hours, every day starting at 00:00: schedule : every 2 hours synchronized Custom interval [TYPE]: Custom intervals can include the every prefix to define a repetitive interval, or you can define a specific list of days in a month: To define a repetitive interval you can use the every prefix.
- By default, if the of clause is excluded, the custom interval is run every month. [MONTH]: You must specify the months in a comma-separated list and can include a mix of the following long or abbreviated values: january or jan february or feb march or mar april or apr may june or jun july or jul august or aug september or sep october or oct november or nov december or dec Use month to specify all months in the year. [HH:MM]: You must specify the time values in the 24 hour format, HH:MM , where: HH are integers from 00 to 23 .
- Example: schedule : 1st monday of sep,oct,nov 09:00 schedule : 1 of jan,april,july,oct 00:00 Custom interval examples Use the following examples to help you understand how to define job schedules that use a custom interval: Runs every day at 00:00: schedule : every day 00:00 Runs every Monday at 09:00: schedule : every monday 09:00 Runs one time on the second Wednesday in March at 17:00: schedule : 2nd wednesday of march 17:00 Runs six times in May.

