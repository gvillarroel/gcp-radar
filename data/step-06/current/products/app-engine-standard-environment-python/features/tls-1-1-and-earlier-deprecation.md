---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.107Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "TLS 1.1 and earlier deprecation"
feature_slug: "tls-1-1-and-earlier-deprecation"
latest_feature_date: "2025-08-07"
deprecation_date: "2025-03-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
keywords:
  - "earlier"
  - "deprecation"
  - "tls"
  - "deprecated"
  - "with"
  - "and"
  - "is"
  - "for"
---

# TLS 1.1 and earlier deprecation

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Support for TLS 1.1 and earlier is deprecated, with guidance to use TLS 1.2+ and secure cipher suites instead; deprecated on 2025-03-01.

## Extended Definition

Support for TLS 1.1 and earlier is deprecated, with guidance to use TLS 1.2+ and secure cipher suites instead; deprecated on 2025-03-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)

## Supporting Pages

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- You can capture profiling data for the following runtimes: Go Java Python Node.js Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to modify your application to capture profiling data and have that data sent to your Google Cloud project.

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By default, if the of clause is excluded, the custom interval is run every month. [MONTH]: You must specify the months in a comma-separated list and can include a mix of the following long or abbreviated values: january or jan february or feb march or mar april or apr may june or jun july or jul august or aug september or sep october or oct november or nov december or dec Use month to specify all months in the year. [HH:MM]: You must specify the time values in the 24 hour format, HH:MM , where: HH are integers from 00 to 23 .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The following is an example cron.yaml file: cron : - description : "daily summary job" url : /tasks/summary schedule : every 24 hours - description : "monday morning mailout" url : /mail/weekly schedule : every monday 09:00 timezone : Australia/NSW - description : "new daily summary job" url : /tasks/summary schedule : every 24 hours target : beta The cron.yaml file uses the YAML syntax and consists of definitions for each of your cron jobs.
- For example, if the /tasks/hello service2 URL is defined in both of the following cron.yaml and dispatch.yaml files, the job requests are sent to service2 , even though target: service1 is specified: cron.yaml : cron : - description : "test dispatch vs target" url : /tasks/hello service2 schedule : every 1 mins target : service1 dispatch.yaml : dispatch : - url : ' /tasks/hello service2' service : service2 retry parameters Optional.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The kind of the entity for the query. properties A list of properties to include as columns of the index, in the order to be sorted: properties used in equality filters first, followed by the property used in inequality filters, then the sort orders and their directions.
- This is only required for properties used in sort orders of the query, and must match the direction used by the query.
- The following is an example of an index.yaml file: indexes : - kind : Cat ancestor : no properties : - name : name - name : age direction : desc - kind : Cat properties : - name : name direction : asc - name : whiskers direction : desc - kind : Store ancestor : yes properties : - name : business direction : asc - name : owner direction : asc The syntax of index.yaml is the YAML format.

