---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.740Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "Cloud Scheduler integration for App Engine flexible environment Go"
feature_slug: "cloud-scheduler-integration-for-app-engine-flexible-environment-go"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
keywords:
  - "cron jobs"
  - "Cloud Scheduler with App Engine"
  - "cron.yaml"
  - "App Engine flexible cron"
  - "Cloud Scheduler"
  - "App Engine jobs"
  - "App Engine Cron"
  - "scheduled tasks"
---

# Cloud Scheduler integration for App Engine flexible environment Go

Product: App Engine flexible environment Go
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler is generally available for setting up scheduled tasks and cron-style work in App Engine flexible environment Go applications.

## Extended Definition

In App Engine flexible environment, recurring work is configured through an app-level cron.yaml file that defines one or more scheduled jobs with fields such as description, URL, schedule, and optional timezone/target values. The feature is managed by deploying the cron.yaml (for example with gcloud app deploy cron.yaml), and docs describe it as an app-wide optional configuration for regularly scheduled tasks/cron jobs that can also be monitored from the Google Cloud console.

## Evidence Summary

These pages provide official App Engine flexible guidance that cron.yaml defines scheduled tasks/cron jobs, is optional app-wide configuration, and is uploaded/managed through gcloud app deploy and Cloud Console views.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example cron.yaml file: cron : - description : "daily summary job" url : /tasks/summary schedule : every 24 hours - description : "monday morning mailout" url : /mail/weekly schedule : every monday 09:00 timezone : Australia/NSW - description : "new daily summary job" url : /tasks/summary schedule : every 24 hours target : beta The cron.yaml file uses the YAML syntax and consists of definitions for each of your cron jobs.
- Uploading cron jobs To upload your cron jobs, you must specify the cron.yaml as a parameter to the following gcloud command: gcloud app deploy cron.yaml Deleting cron jobs To delete all cron jobs, change the cron.yaml file to just contain: cron : Cron support in the Google Cloud console You can check on scheduled cron jobs on the Google Cloud console Cron jobs page .
- About the cron configuration file For all runtimes except for Java, a cron.yaml file in the root directory of your application (alongside app.yaml ) configures scheduled tasks for your app.
- For the Java, a cron.yaml file in the WEB-INF directory of your application (alongside apppengine-web.xml ) configures scheduled tasks for your app.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- See the following topics for details about each of the optional features: cron.yaml configures regularly scheduled tasks that operate at defined times or regular intervals. dispatch.yaml overrides routing default rules by sending incoming requests to a specific service based on the path or hostname in the URL. index.yaml specifies which indexes your app needs if using Datastore queries.
- These optional configuration files apply app-wide settings that are not specific to a particular service, including the dispatch.yaml , index.yaml , and cron.yaml files.

