---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.477Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cross-project Cloud Pub/Sub topics"
feature_slug: "cross-project-cloud-pub-sub-topics"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/build-cicd"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
keywords:
  - "project"
  - "cross"
  - "account"
  - "topics"
  - "triggers"
---

# Cross-project Cloud Pub/Sub topics

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Cloud Pub/Sub triggers now support cross-project topics, with service account configuration required for new setups and when updating existing trigger topics.

## Extended Definition

Cloud Pub/Sub triggers now support cross-project topics, with service account configuration required for new setups and when updating existing trigger topics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger)
- [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)

## Supporting Pages

### Cloud Pub/Sub trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service account IAM role granted Application Integration's default service account: service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com Pub/Sub Editor ( roles/pubsub.editor ) Service Account User ( roles/iam.serviceAccountUser ) If the Pub/Sub topic's Google Cloud project is different from the integration's Google Cloud project, the default service account needs Pub/Sub Editor role in the topic's Google Cloud project.
- Configure a Cloud Pub/Sub trigger Click the Cloud Pub/Sub trigger element in the integration editor to view the trigger configuration pane, and then do the following tasks: Specify the topic the trigger should listen to in the Pub/Sub topic field in the following format: projects/ PROJECT ID /topics/ TOPIC ID To view all the available topics in your Google Cloud project, see the Topic name column in Topics .
- The value of the config variable must be a service account email address with the following format: SERVICE ACCOUNT NAME @ project-id .iam.gserviceaccount.com .
- However, if you want to modify any of the existing Pub/Sub triggers, you must configure a service account to continue using those triggers.

### "Build CICD for your integration \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the APIs Create a service account: Ensure that you have the Create Service Accounts IAM role ( roles/iam.serviceAccountCreator ) and the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ).
- Enable the APIs Create a service account: Ensure that you have the Create Service Accounts IAM role ( roles/iam.serviceAccountCreator ) and the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ).
- Note : The Role field affects which resources the service account can access in your project.
- Note : The Role field affects which resources the service account can access in your project.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a BigQuery dataset with the name bq tutorial , enter the following command in your Cloud Shell terminal: bq --project id ${PROJECT ID} --location ${REGION} mk bq tutorial To create a BigQuery table with the name tutorial , enter the following command in your Cloud Shell terminal: bq --project id ${PROJECT ID} \ query \ --nouse legacy sql \ 'create table bq tutorial.tutorial ( unique key STRING NOT NULL, created date STRING, closed date STRING, agency STRING, agency name STRING, complaint type STRING, descriptor STRING, location type STRING, incident zip STRING, incident address STRING, street name STRING, cross street 1 STRING, cross street 2 STRING, intersection street 1 STRING, intersection street 2 STRING, address type STRING, city STRING, landmark STRING, facility type STRING, status STRING, due date STRING, resolution action updated date STRING, community board STRING, borough STRING, x coordinate state plane STRING, y coordinate state plane STRING, park facility name STRING, park borough STRING, school name STRING, school number STRING, school region STRING, school code STRING, school phone number STRING, school address STRING, school city STRING, school state STRING, school zip STRING, school not found STRING, school or citywide complaint STRING, vehicle type STRING, taxi company borough STRING, taxi pick up location STRING, bridge highway name STRING, bridge highway direction STRING, bridge highway segment STRING, road ramp STRING, garage lot name STRING, ferry direction STRING, ferry terminal name STRING, latitude STRING, longitude STRING, location STRING ) ' Verify that your BigQuery table is created.
- Do the following in your Google Cloud project: Grant the following roles to the service account that you want to use to create the connection: roles/bigquery.dataEditor roles/bigquery.readSessionUser roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection in the Create Connection page.
- Enter the following sample JSON payload: [{ "unique key":"304271", "created date":"02/06/2007 12:00:00 AM", "closed date":"03/01/2007 12:00:00 AM", "agency":"TLC", "agency name":"Taxi and Limousine Commission", "complaint type":"Taxi Complaint", "descriptor":"Driver Complaint", "location type":"Street", "incident zip":"10001", "incident address":"", "street name":"", "cross street 1":"", "cross street 2":"", "intersection street 1":"WEST 29 STREET", "intersection street 2":"7 AVENUE", "address type":"INTERSECTION", "city":"NEW YORK", "landmark":"", "facility type":"N/A", "status":"Closed", "due date":"02/28/2007 12:00:00 AM", "resolution action updated date":"03/01/2007 12:00:00 AM", "community board":"05 MANHATTAN", "borough":"MANHATTAN", "x coordinate state plane":"986215", "y coordinate state plane":"211740", "park facility name":"", "park borough":"MANHATTAN", "school name":"", "school number":"", "school region":"", "school code":"", "school phone number":"", "school address":"", "school city":"", "school state":"", "school zip":"", "school not found":"", "school or citywide complaint":"", "vehicle type":"", "taxi company borough":"", "taxi pick up location":"Other", "bridge highway name":"", "bridge highway direction":"", "road ramp":"", "bridge highway segment":"", "garage lot name":"", "ferry direction":"", "ferry terminal name":"", "latitude":"40.74785373937869", "longitude":"-73.99290823133913", "location":"(40.74785373937869, -73.99290823133913)" }] Click Create .
- Enter the following sample JSON payload: { "unique key":"304271", "created date":"02/06/2007 12:00:00 AM", "closed date":"03/01/2007 12:00:00 AM", "agency":"TLC", "agency name":"Taxi and Limousine Commission", "complaint type":"Taxi Complaint", "descriptor":"Driver Complaint", "location type":"Street", "incident zip":"10001", "incident address":"", "street name":"", "cross street 1":"", "cross street 2":"", "intersection street 1":"WEST 29 STREET", "intersection street 2":"7 AVENUE", "address type":"INTERSECTION", "city":"NEW YORK", "landmark":"", "facility type":"N/A", "status":"Closed", "due date":"02/28/2007 12:00:00 AM", "resolution action updated date":"03/01/2007 12:00:00 AM", "community board":"05 MANHATTAN", "borough":"MANHATTAN", "x coordinate state plane":"986215", "y coordinate state plane":"211740", "park facility name":"", "park borough":"MANHATTAN", "school name":"", "school number":"", "school region":"", "school code":"", "school phone number":"", "school address":"", "school city":"", "school state":"", "school zip":"", "school not found":"", "school or citywide complaint":"", "vehicle type":"", "taxi company borough":"", "taxi pick up location":"Other", "bridge highway name":"", "bridge highway direction":"", "road ramp":"", "bridge highway segment":"", "garage lot name":"", "ferry direction":"", "ferry terminal name":"", "latitude":"40.74785373937869", "longitude":"-73.99290823133913", "location":"(40.74785373937869, -73.99290823133913)" } Click Create .

