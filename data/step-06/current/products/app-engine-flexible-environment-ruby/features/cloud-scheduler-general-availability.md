---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.792Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml"
keywords:
  - "cron-like workflows"
  - "Cloud Scheduler GA"
  - "job scheduling"
  - "cron scheduler"
  - "cron jobs"
  - "Cloud Scheduler API"
  - "scheduled jobs"
  - "Cloud Scheduler"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment Ruby
Coverage: LOW

## Step 02 Summary

Cloud Scheduler became generally available for setting up scheduled jobs, including cron-like workflows.

## Extended Definition

In the App Engine flexible environment, scheduled work is defined in a `cron.yaml` file that lists cron job entries (such as schedule, URL/target, and description), then uploaded with `gcloud app deploy cron.yaml`; jobs can also be managed from the Cloud console Cron jobs page. The documentation indicates this scheduling path relies on Cloud Scheduler (including support for unix-cron syntax through Cloud Scheduler) and requires the Cloud Scheduler API to be enabled (with a sufficiently recent Cloud SDK version). The provided excerpt does not explicitly confirm general availability status or a rollout date.

## Evidence Summary

This page details App Engine flexible cron-job configuration via `cron.yaml`, deploy/delete operations, and the requirement to use Cloud Scheduler (with API enabled) for scheduled and unix-cron style jobs.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this, make sure the Cloud Scheduler API is enabled in your project and your gcloud CLI is updated to at least version 322.0.0. .
- The following is an example cron.yaml file: cron : - description : "daily summary job" url : /tasks/summary schedule : every 24 hours - description : "monday morning mailout" url : /mail/weekly schedule : every monday 09:00 timezone : Australia/NSW - description : "new daily summary job" url : /tasks/summary schedule : every 24 hours target : beta The cron.yaml file uses the YAML syntax and consists of definitions for each of your cron jobs.
- Uploading cron jobs To upload your cron jobs, you must specify the cron.yaml as a parameter to the following gcloud command: gcloud app deploy cron.yaml Deleting cron jobs To delete all cron jobs, change the cron.yaml file to just contain: cron : Cron support in the Google Cloud console You can check on scheduled cron jobs on the Google Cloud console Cron jobs page .
- Formatting the schedule To specify when your job runs, you must define the schedule element using the following syntax: schedule : [ TYPE ] [ INTERVAL VALUE ] [ INTERVAL SCOPE ] Note: If you prefer to specify your jobs with unix-cron syntax , use Cloud Scheduler .

