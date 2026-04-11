---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.722Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "Cloud Scheduler generally available"
feature_slug: "cloud-scheduler-generally-available"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml"
keywords:
  - "recurring job schedule"
  - "Cron-style scheduling"
  - "Cloud Scheduler jobs"
  - "scheduled jobs"
  - "Cloud Scheduler API"
  - "Cloud Scheduler"
  - "Cloud Cron"
---

# Cloud Scheduler generally available

Product: App Engine flexible environment PHP
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler became generally available for scheduling recurring units of work (cron jobs).

## Extended Definition

In App Engine flexible environment, recurring background work is configured via `cron.yaml` schedules that are executed through Cloud Scheduler (including support for unix-cron style scheduling syntax). The feature requires the Cloud Scheduler API to be enabled and specific IAM permissions (`Owner`, `Editor`, or `roles/cloudscheduler.admin`) to deploy or update schedules, though the provided excerpt does not explicitly confirm the availability stage wording (e.g., GA) itself.

## Evidence Summary

The cited App Engine flexible cron.yaml documentation defines how recurring jobs are scheduled with Cloud Scheduler and lists the required API, CLI, and IAM prerequisites to deploy/update those schedules.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this, make sure the Cloud Scheduler API is enabled in your project and your gcloud CLI is updated to at least version 322.0.0. .
- Formatting the schedule To specify when your job runs, you must define the schedule element using the following syntax: schedule : [ TYPE ] [ INTERVAL VALUE ] [ INTERVAL SCOPE ] Note: If you prefer to specify your jobs with unix-cron syntax , use Cloud Scheduler .
- To deploy or update schedules, your account requires one of the following Identity and Access Management roles: Owner Editor Cloud Scheduler Admin ( roles/cloudscheduler.admin ) You can set the permission on the IAM page in the Google Cloud console .

