---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.843Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker support in asia-northeast3 region"
feature_slug: "worker-support-in-asia-northeast3-region"
latest_feature_date: "2020-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/build-container-image"
keywords:
  - "worker"
  - "asia"
  - "northeast3"
  - "region"
  - "dataflow"
  - "can"
  - "run"
  - "vms"
---

# Worker support in asia-northeast3 region

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can run worker VMs in zones within the asia-northeast3 region.

## Extended Definition

Dataflow can run worker VMs in zones within the asia-northeast3 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
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

### Build custom container images for Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)
- Source ID: `site-docs-reference-required-3`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example runs the wordcount example pipeline : python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --experiments = use runner v2 \ --sdk container image = IMAGE URI --sdk location = container Replace the following: INPUT FILE : an input file for the pipeline OUTPUT FILE : a path to write output to PROJECT ID : the Google Cloud project ID REGION : the region to deploy your Dataflow job in TEMP LOCATION : the Cloud Storage path for Dataflow to stage temporary job files IMAGE URI : the custom container image URI Pre-build a container image when submitting the job Pre-building a container image lets you to pre-install the pipeline dependencies before job startup.
- The following example uses Cloud Build to pre-build the image: python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --disk size gb = DISK SIZE GB \ --experiments = use runner v2 \ --requirements file = ./requirements.txt \ --prebuild sdk container engine = cloud build \ --docker registry push url = IMAGE PATH \ --sdk location = container The pre-build feature requires the Apache Beam SDK for Python version 2.25.0 or later.
- Docker docker build . --tag REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG docker push REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG Replace the following: REGION : the region to deploy your Dataflow job in.
- Cloud Build To build the file and push it to your Artifact Registry repository, run the gcloud builds submit command : gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG .

