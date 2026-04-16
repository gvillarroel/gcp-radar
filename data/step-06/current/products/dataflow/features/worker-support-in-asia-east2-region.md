---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.855Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker support in asia-east2 region"
feature_slug: "worker-support-in-asia-east2-region"
latest_feature_date: "2018-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline"
keywords:
  - "worker"
  - "asia"
  - "east2"
  - "region"
  - "dataflow"
  - "can"
  - "run"
  - "vms"
---

# Worker support in asia-east2 region

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can run worker VMs in zones within the asia-east2 region.

## Extended Definition

Dataflow can run worker VMs in zones within the asia-east2 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Although user data is strictly handled by Dataflow workers in their assigned geographic region, pipeline log messages are stored in Cloud Logging , which has a single global presence in Google Cloud.
- Note: Starting with Beam SDK version 2.44.0, Dataflow does not support running jobs with workers in a region that is different from the job region.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.

### Stop a running Dataflow pipeline \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID You should receive a response similar to the following: Archived job [ JOB ID ]. createTime: ' 2025-06-29T11:00:02.432552Z ' currentState: JOB STATE DONE currentStateTime: ' 2025-06-29T11:04:25.125921Z ' id: JOB ID jobMetadata: userDisplayProperties: archived: 'true' projectId: PROJECT ID startTime: ' 2025-06-29T11:00:02.432552Z ' View and restore archived jobs Follow these steps to view archived jobs or to restore archived jobs to the main jobs list on the Dataflow Jobs page.
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "false" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "true" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived" Select-Object -Expand Content You should receive a JSON response similar to the following: { "id": " JOB ID ", "projectId": " PROJECT ID ", "currentState": "JOB STATE DONE", "currentStateTime": " 2025-05-20T20:54:41.651442Z ", "createTime": " 2025-05-20T20:51:06.031248Z ", "jobMetadata": { "userDisplayProperties": { "archived": "false" } }, "startTime": " 2025-05-20T20:51:06.031248Z " } What's next Explore the Dataflow REST API .

