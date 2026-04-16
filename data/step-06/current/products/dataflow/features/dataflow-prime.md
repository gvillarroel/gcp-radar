---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.786Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Prime"
feature_slug: "dataflow-prime"
latest_feature_date: "2022-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline"
keywords:
  - "dataflow"
  - "prime"
  - "enhanced"
  - "execution"
  - "offering"
  - "running"
  - "pipelines"
---

# Dataflow Prime

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Prime is an enhanced Dataflow execution offering for running pipelines; Dataflow Prime is an enhanced Dataflow execution offering for running pipelines.

## Extended Definition

Dataflow Prime is an enhanced Dataflow execution offering for running pipelines; Dataflow Prime is an enhanced Dataflow execution offering for running pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)

## Supporting Pages

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.
- Unsupported features Dataflow Prime doesn't support the following: Designating specific VM types by using the flag --worker machine type or --machine type for Python pipelines and --workerMachineType for Java pipelines.
- Dataflow Prime features The following is the list of supported Dataflow Prime features for different kinds of pipelines: Vertical Autoscaling (memory).

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Consistent long-running work items : Speculative execution might not significantly help with consistently long-running work items such as hot-keys, as the underlying issue causing the slowness would still persist.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.

### Stop a running Dataflow pipeline \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID You should receive a response similar to the following: Archived job [ JOB ID ]. createTime: ' 2025-06-29T11:00:02.432552Z ' currentState: JOB STATE DONE currentStateTime: ' 2025-06-29T11:04:25.125921Z ' id: JOB ID jobMetadata: userDisplayProperties: archived: 'true' projectId: PROJECT ID startTime: ' 2025-06-29T11:00:02.432552Z ' View and restore archived jobs Follow these steps to view archived jobs or to restore archived jobs to the main jobs list on the Dataflow Jobs page.
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "false" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "true" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

