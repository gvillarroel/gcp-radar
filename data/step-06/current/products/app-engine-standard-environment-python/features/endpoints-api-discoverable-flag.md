---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.290Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Endpoints @Api discoverable flag"
feature_slug: "endpoints-api-discoverable-flag"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
keywords:
  - "endpoints"
  - "discoverable"
  - "flag"
  - "now"
  - "supports"
  - "boolean"
  - "parameter"
  - "annotation"
---

# Endpoints @Api discoverable flag

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Endpoints API now supports a discoverable boolean parameter on the @Api annotation to disable API discovery.

## Extended Definition

The Endpoints API now supports a discoverable boolean parameter on the @Api annotation to disable API discovery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-required-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-required-2`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.
- For more information about the required and optional flags for creating firewall rules, refer to the documentation for gcloud compute firewall-rules create .

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the /tasks/hello service2 URL is defined in both of the following cron.yaml and dispatch.yaml files, the job requests are sent to service2 , even though target: service1 is specified: cron.yaml : cron : - description : "test dispatch vs target" url : /tasks/hello service2 schedule : every 1 mins target : service1 dispatch.yaml : dispatch : - url : ' /tasks/hello service2' service : service2 retry parameters Optional.
- Here is a sample cron.yaml file that contains a single cron job configured to retry up to five times with a starting backoff of 2.5 seconds that doubles each time. cron : - description : "retry demo" url : /retry schedule : every 10 mins retry parameters : job retry limit : 5 min backoff seconds : 2.5 max doublings : 5 Cron retries syntax The retry parameters are described in the table below.
- Uploading cron jobs To upload your cron jobs, you must specify the cron.yaml as a parameter to the following gcloud command: gcloud app deploy cron.yaml Deleting cron jobs To delete all cron jobs, change the cron.yaml file to just contain: cron : Cron support in the Google Cloud console You can check on scheduled cron jobs on the Google Cloud console Cron jobs page .
- You can cause failed jobs to be retried by including a retry parameters block in your configuration file.

