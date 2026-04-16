---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.433Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Go 1.24 runtime"
feature_slug: "go-1-24-runtime"
latest_feature_date: "2025-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
keywords:
  - "workloads"
  - "deployed"
  - "runtime"
  - "supports"
---

# Go 1.24 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Go 1.24 runtime for deployed workloads; Cloud Run supports the Go 1.24 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Go 1.24 runtime for deployed workloads; Cloud Run supports the Go 1.24 runtime for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)

## Supporting Pages

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service Test your CREMA service by creating a script that generates 100 messages and pushes them to the Pub/Sub queue: In your root directory, create a file named load-pubsub.sh , and add the following code: #!/bin/bash TOPIC ID = ${ TOPIC ID } PROJECT ID = ${ PROJECT ID } NUM MESSAGES = 100 echo "Publishing $NUM MESSAGES messages to topic $TOPIC ID ..." for i in $( seq 1 $NUM MESSAGES ) ; do gcloud pubsub topics publish $TOPIC ID --message = "job- $i " --project = $PROJECT ID & if (( $i % 10 == 0 )) ; then wait echo "Published $i messages..." fi done wait echo "Done.
- Clean up To avoid additional charges to your Google Cloud account, delete all the resources you deployed with this tutorial.
- Delete tutorial resources Delete the Cloud Run service you deployed in this tutorial.
- New customers also get $300 in free credits to run, test, and deploy workloads.

