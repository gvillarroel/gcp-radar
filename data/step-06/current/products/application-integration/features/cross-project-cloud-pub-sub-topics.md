---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.474Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cross-project Cloud Pub/Sub topics"
feature_slug: "cross-project-cloud-pub-sub-topics"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
keywords:
  - "project"
  - "cross"
  - "topics"
  - "pub"
  - "sub"
  - "triggers"
  - "with"
  - "now"
---

# Cross-project Cloud Pub/Sub topics

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Cloud Pub/Sub triggers now support cross-project topics, with service account configuration required for new setups and when updating existing trigger topics.

## Extended Definition

Cloud Pub/Sub triggers now support cross-project topics, with service account configuration required for new setups and when updating existing trigger topics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)

## Supporting Pages

### "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specify the topic the trigger should listen to in the Pub/Sub topic field in the following format: projects/ PROJECT ID /topics/ TOPIC ID where: PROJECT ID is the Google Cloud project where your topic is created.
- Before you begin Assign the following Identity and Access Management (IAM) roles to the Application Integration Service Agent ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) in your Google Cloud project: Pub/Sub Editor Application Integration Invoker For more information about assigning IAM roles, see IAM roles and permissions .
- Overview In this quickstart, you will create an integration with a Cloud Pub/Sub trigger to listen to an existing Pub/Sub topic that receives temperature readings in degrees Kelvin from a IOT device.
- Add a Cloud Pub/Sub trigger To add a Cloud Pub/Sub trigger to the integration, follow the steps below: In the integration editor, select Triggers to display a list of available triggers.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- December 01, 2023 Feature Cloud Pub/Sub trigger supports cross-project topics You can now configure your Cloud Pub/Sub trigger for a Pub/Sub topic that isn't in the same Google Cloud project as your integration.
- February 02, 2026 Feature FIFO message processing with Pub/Sub ordering keys Application Integration now supports publishing messages to Google Cloud Pub/Sub topics using ordering keys, enabling First-In, First-Out (FIFO) message processing.
- Issue Known issues Integration fails to publish when duplicate Connector Event triggers are configured Event subscription error when an integration containing Connector Event triggers is uploaded For more information, see Application Integration known issues .
- Your existing Cloud Pub/Sub triggers, that don't have any service account associated with them, will continue to work as before.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- To create a BigQuery dataset with the name bq tutorial , enter the following command in your Cloud Shell terminal: bq --project id ${PROJECT ID} --location ${REGION} mk bq tutorial To create a BigQuery table with the name tutorial , enter the following command in your Cloud Shell terminal: bq --project id ${PROJECT ID} \ query \ --nouse legacy sql \ 'create table bq tutorial.tutorial ( unique key STRING NOT NULL, created date STRING, closed date STRING, agency STRING, agency name STRING, complaint type STRING, descriptor STRING, location type STRING, incident zip STRING, incident address STRING, street name STRING, cross street 1 STRING, cross street 2 STRING, intersection street 1 STRING, intersection street 2 STRING, address type STRING, city STRING, landmark STRING, facility type STRING, status STRING, due date STRING, resolution action updated date STRING, community board STRING, borough STRING, x coordinate state plane STRING, y coordinate state plane STRING, park facility name STRING, park borough STRING, school name STRING, school number STRING, school region STRING, school code STRING, school phone number STRING, school address STRING, school city STRING, school state STRING, school zip STRING, school not found STRING, school or citywide complaint STRING, vehicle type STRING, taxi company borough STRING, taxi pick up location STRING, bridge highway name STRING, bridge highway direction STRING, bridge highway segment STRING, road ramp STRING, garage lot name STRING, ferry direction STRING, ferry terminal name STRING, latitude STRING, longitude STRING, location STRING ) ' Verify that your BigQuery table is created.
- To select three random entries from the sample dataset and store them in a way that you can pass them to the integration, enter the following commands in your Cloud Shell terminal: AUTH=$(gcloud auth print-access-token) export SAMPLE DOCS=$(jq $(r=$((RANDOM % 1000)) ; echo ".[$r:$((r + 3))]") < bq-sample-dataset.json jq -Rs '.') generate post data() { cat <<EOF { "triggerId": "api trigger/process-records API 1", "inputParameters": { "records": { "jsonValue": $SAMPLE DOCS } } } EOF } To start the testing, enter the following command in your Cloud Shell terminal: curl -X POST \ https://integrations.googleapis.com/v1/projects/ project id /locations/ region /integrations/process-records:execute \ -H "Authorization: Bearer $AUTH" \ -H "Content-Type: application/json" \ -d "$(generate post data)" In this command, replace: project id with the project ID of your Google Cloud project. region with the region where you created your integration.
- To enable BigQuery APIs, enter the following commands in your Cloud Shell terminal: export PROJECT ID= project id export REGION= region gcloud services enable --project "${PROJECT ID}" \ bigquery.googleapis.com \ bigquerystorage.googleapis.com In this command, replace: project id with the project ID of your Google Cloud project. region with the region that you want to use to create your BigQuery dataset.
- If the variables aren't listed, refresh the page, as it takes some time for the variables to be visible after the sub-integration is published.

