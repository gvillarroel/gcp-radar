---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.770Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Engine resource-based billing"
feature_slug: "streaming-engine-resource-based-billing"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
  - "https://docs.cloud.google.com/dataflow/docs/cuds"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
keywords:
  - "streaming"
  - "engine"
  - "resource"
  - "based"
  - "billing"
  - "dataflow"
  - "supports"
  - "total"
---

# Streaming Engine resource-based billing

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Streaming Engine supports resource-based billing based on the total resources consumed by a job.

## Extended Definition

Dataflow Streaming Engine supports resource-based billing based on the total resources consumed by a job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)

## Supporting Pages

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you set the streaming mode at least once option, Dataflow automatically enables Streaming Engine with resource-based billing .
- Limitations At-least-once streaming mode requires Streaming Engine with resource-based billing .
- Pricing At-least-once mode always uses resource-based billing , where you're billed for the total resources that are consumed by your job.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Set the pipeline streaming mode Stay organized with collections Save and categorize content based on your preferences.

### Committed use discounts \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- Source ID: `site-docs-reference-required-4`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow CUDs apply to your spending on the following resources: Worker CPU and memory for streaming jobs Streaming Engine data processed Streaming Engine compute units Data Compute Units (DCUs) for Dataflow Prime streaming jobs Dataflow CUDs don't apply to your spending on the following resources: Worker CPU and memory for batch and FlexRS jobs Dataflow Shuffle data processed Data Compute Units (DCUs) for Dataflow Prime batch jobs Persistent Disk storage GPUs and TPUs Snapshots Confidential VMs For a list of applicable SKUs, see Dataflow CUD Eligible SKUs .
- Resources eligible for Dataflow CUDs Note: While Dataflow Committed Use Discounts (CUDs) don't apply to GPUs and TPUs, you can apply resource-based CUDs for these accelerators by purchasing Compute Engine resource-based commitments with specifically targeted reservations, and using these reservations with Dataflow.
- From the pricing page , see the price in the column labeled 1-year commitment to calculate the approximate hourly commitment cost: Total expenditure in us-central1 = $2.08271 per hour 10 nodes 1 streaming vCPU per node $0.0552 per streaming vCPU per hour = $0.552 per hour 10 nodes 3.75GB per node $0.0028456 per GB per hour = $0.10671 per hour 20 Streaming Engine Compute Units $0.0712 per compute unit per hour = $1.424 per hour Total expenditure in us-west2 = $2.5024 per hour 10 nodes 1 streaming vCPU per node $0.06624 per streaming vCPU per hour = $0.6624 per hour 10 nodes 3.75GB per node $0.00341472 per GB per hour = $0.128 per hour 20 Streaming Engine Compute Units $0.0856 per compute unit per hour = $1.712 per hour Total expenditure across all regions = $4.585 per hour If you expect to spend that minimum of $4.585 per hour continuously for the next year or more, then you can make a commitment for that amount.
- From here, you can calculate the monthly costs and savings that you would see under a one-year commitment with a 20% discount compared to a year of paying the full rates: Monthly cost of a one-year, $4.585/hour commitment 730 hours = $3,346.32 per month Total savings per month: $4,182.90 - $3,346.32 = $836.58 Total savings with a one-year, $5.73/hour commitment: $836.58 per month 12 months = $10,038.96 You can apply similar math to calculating the costs and savings of a three-year CUD, with its 40% discount compared to on-demand rates: Monthly cost of a three-year commitment: $3.438 per hour 730 hours = $2,509.74 per month Total savings per month: $4,182.90 - $2,509.74 = $1,673.16 Total savings with a three-year, $5.73/hour CUD: $1,673.16 per month 36 months = $60,233.76 A commitment that covers your expected minimum Dataflow streaming usage over the years to come can lead to significant savings.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setting Value Worker machine type e2-standard-2 Worker machine vCPUs 2 Worker machine RAM 8 GB Worker machine Persistent Disk Standard Persistent Disk (HDD), 30 GB Maximum workers 120 Streaming Engine Yes Horizontal autoscaling Yes Billing model Resource-based billing Storage Write API enabled?
- Based on the benchmark results for a 1 GiB/s pipeline, you can estimate the resource requirements as follows: Scaling Factor: (100 MiB/s) / (1 GiB/s) = 0.1 Projected worker nodes: 63 workers × 0.1 = 6.3 workers Projected number of Streaming Engine Compute Units per hour: 58 × 0.1 = 5.8 units per hour This value should only be used as an initial estimate.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- Exactly-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .

