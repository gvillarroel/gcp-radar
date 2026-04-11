---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.853Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml"
keywords:
  - "scheduled unit-of-work execution"
  - "App Engine cron integration"
  - "App Engine scheduled tasks"
  - "Cloud Scheduler GA"
  - "Cron jobs"
  - "Cloud Scheduler"
  - "cron.yaml"
  - "App Engine cron"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment Java
Coverage: LOW

## Step 02 Summary

Cloud Scheduler became generally available for scheduled unit-of-work execution (cron jobs).

## Extended Definition

App Engine flexible environments support scheduled unit-of-work execution by defining cron jobs in a `cron.yaml` file, where each job is configured with properties such as `description`, `url`, `schedule`, `timezone`, and optional `target`. These jobs are deployed with `gcloud app deploy cron.yaml`, after which the App Engine Cron Service automatically triggers them, and they are visible on the Google Cloud console Cron jobs page. The provided excerpt does not explicitly state the feature’s Cloud Scheduler general-availability announcement or its GA date.

## Evidence Summary

The cited App Engine documentation page confirms cron.yaml-based job definition, deployment, automatic triggering by App Engine Cron Service, and console visibility, but does not explicitly mention Cloud Scheduler GA details.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example cron.yaml file: cron : - description : "daily summary job" url : /tasks/summary schedule : every 24 hours - description : "monday morning mailout" url : /mail/weekly schedule : every monday 09:00 timezone : Australia/NSW - description : "new daily summary job" url : /tasks/summary schedule : every 24 hours target : beta The cron.yaml file uses the YAML syntax and consists of definitions for each of your cron jobs.
- Uploading cron jobs To upload your cron jobs, you must specify the cron.yaml as a parameter to the following gcloud command: gcloud app deploy cron.yaml Deleting cron jobs To delete all cron jobs, change the cron.yaml file to just contain: cron : Cron support in the Google Cloud console You can check on scheduled cron jobs on the Google Cloud console Cron jobs page .
- These cron jobs are automatically triggered by the App Engine Cron Service.
- For example, if the /tasks/hello service2 URL is defined in both of the following cron.yaml and dispatch.yaml files, the job requests are sent to service2 , even though target: service1 is specified: cron.yaml : cron : - description : "test dispatch vs target" url : /tasks/hello service2 schedule : every 1 mins target : service1 dispatch.yaml : dispatch : - url : ' /tasks/hello service2' service : service2 retry parameters Optional.

