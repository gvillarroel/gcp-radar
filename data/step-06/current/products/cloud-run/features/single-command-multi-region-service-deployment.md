---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.425Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Single-command multi-region service deployment"
feature_slug: "single-command-multi-region-service-deployment"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
  - "https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously"
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
keywords:
  - "single"
  - "region"
  - "multi"
  - "deploying"
  - "command"
  - "deployment"
  - "supports"
---

# Single-command multi-region service deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports deploying and configuring a multi-region service from one gcloud command or from YAML or Terraform.

## Extended Definition

Cloud Run supports deploying and configuring a multi-region service from one gcloud command or from YAML or Terraform.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)
- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)

## Supporting Pages

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Learn more about multi-region configurations in other Google Cloud products: Firestore Spanner Cloud Storage Cloud SQL Learn how to configure health checks for Cloud Run services Set up a global external Application Load Balancer with Cloud Run Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To deploy your services from source in two different regions with readiness probes, run the following commands: Deploy your service health-example in us-west1 and europe-west1 from the source directory.
- This designates the healthy region and the instance serving traffic: Success: You deployed a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- This guide shows you how to deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.

### "Quickstart: Deploy to Cloud Run from a Git repository \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This deletes all revisions of the service. gcloud To delete a service, run the following command: gcloud run services delete SERVICE --region REGION Replace the following: SERVICE : name of your service.
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- What's next Quickstart: Build and deploy Continuous deployment with Cloud Build Building containers using Buildpacks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Run locations Cloud Run is regional, which means the infrastructure that runs your Cloud Run services is located in a specific region and is managed by Google to be redundantly available across all the zones within that region .

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Review the error message and act accordingly: if no actionable guidance is present, review the troubleshooting guide and possibly retry the deployment command.
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- Check whether the service works locally with the NAME environment available in place: Run the container locally with the environment variable added: PORT = 8080 && docker run --rm -e PORT = $PORT -p 9000 : $PORT \ -e NAME = "Local World!" \ gcr.io/ PROJECT ID /hello-service Navigate your browser to http://localhost:9000 See "Hello Local World!" appear on the page Modify the running Cloud Run service environment to include this variable: Run the services update command to add an environment variable: gcloud run services update hello - service \ -- set - env - vars NAME = Override Wait a few seconds while Cloud Run creates a new revision based on the previous revision with the new environment variable added.
- System . err . println ( "Environment validation failed." ); String msg = "Missing required server parameter" ; logger . error ( msg , new Exception ( msg )); res . status ( 500 ); return "Internal Server Error" ; } Examining this code, the following actions are taken when the NAME environment variable is not set: An error is logged to Google Cloud Observability An HTTP error response is sent The problem is caused by a missing variable, but the root cause is more specific: the code change adding the hard dependency on an environment variable did not include related changes to deployment scripts and runtime requirements documentation.

