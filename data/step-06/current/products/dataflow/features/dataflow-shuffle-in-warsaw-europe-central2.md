---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.834Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle in Warsaw (europe-central2)"
feature_slug: "dataflow-shuffle-in-warsaw-europe-central2"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
keywords:
  - "dataflow"
  - "shuffle"
  - "in"
  - "warsaw"
  - "europe"
  - "central2"
  - "this"
  - "makes"
---

# Dataflow Shuffle in Warsaw (europe-central2)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes Dataflow Shuffle available in zones in the Warsaw region europe-central2.

## Extended Definition

This feature makes Dataflow Shuffle available in zones in the Warsaw region europe-central2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.
- Create a streaming pipeline using a Dataflow template This quickstart shows you how to create a streaming pipeline using a Google-provided Dataflow template.

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexRSGoal = COST OPTIMIZED \ --region = europe-west1 \ --maxNumWorkers = 10 \ --workerMachineType = n1-highmem-16 If you omit region , maxNumWorkers , and workerMachineType , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2021 Feature Dataflow is now able to use workers, Dataflow Shuffle, Streaming Engine, FlexRS, and regional endpoints in zones in europe-central2 (Warsaw).
- The service is available in five additional regions: us-east1 (South Carolina) us-west1 (Oregon) asia-east1 (Taiwan) asia-northeast1 (Tokyo) europe-west4 (Netherlands) Feature You can now do the following in Cloud Dataflow SQL : Use Cloud Storage filesets as a data source Assign schemas to data sources in the Cloud Dataflow SQL UI Preview the content of Cloud Pub/Sub messages from the Cloud Dataflow SQL UI October 31, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in us-east1 (South Carolina).
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- CPU PRICE : CPU price, per vCPU per hour MEMORY PRICE : Memory price, per GB per hour SHUFFLE PRICE : Shuffle price, per GB STANDARD PD PRICE : Standard Persistent Disk price, per GB per hour SSD PD PRICE : SSD Persistent Disk price, per GB per hour Edit the dashboard If you didn't previously create a custom dashboard for Dataflow in this project, create one as follows: In the Google Cloud console, go to the Dataflow Monitoring page.
- To get the top 25 jobs, use a top K filter: topk(25, Sum the individual values. ) Write the complete query The following shows the complete query: topk(25, sum( max over time( dataflow googleapis com:job total vcpu time[1m]) / 3600 CPU PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total memory usage time[1m]) / 3600 MEMORY PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total streaming data processed[1m]) / 1000000000 SHUFFLE PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m]) / 3600 STANDARD PD PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m]) / 3600 SSD PD PRICE ) by (job id) ) Replace the following variables with values from the Dataflow pricing page for your region.
- Choose metrics The following metrics are needed to estimate the cost of a job, given the assumptions listed the previous section: Resource Relevant metric CPU (vCPU per hour) job/total vcpu time Memory (GB per hour) job/total memory usage time Data processed during shuffle (GB) job/total streaming data processed Persistent Disk usage (GB per hour, Standard and SSD) job/total pd usage time For more information, see Dataflow pricing .
- Multiply by memory price per GB per hour and group by job ID. #((Memory time)[Bucket 1m] / Seconds per hour) Memory Price sum( max over time(dataflow googleapis com:job total memory usage time[1m]) / 3600 MEMORY PRICE ) by (job id) To get the estimated shuffle cost, convert job/total streaming data processed from bytes to GB.

