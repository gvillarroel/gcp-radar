---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.304Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Google Cloud Spanner regional instances in us-east5 (Columbus)"
feature_slug: "google-cloud-spanner-regional-instances-in-us-east5-columbus"
latest_feature_date: "2022-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
keywords:
  - "east5"
  - "columbus"
  - "create"
  - "instances"
  - "regional"
---

# Google Cloud Spanner regional instances in us-east5 (Columbus)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner can create regional instances in the us-east5 (Columbus) region.

## Extended Definition

Cloud Spanner can create regional instances in the us-east5 (Columbus) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)

## Supporting Pages

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- For more information, see Free trial instances overview . gcloud To create a free trial instance, use the gcloud spanner instances create command. gcloud spanner instances create INSTANCE ID \ -- instance - type = free - instance -- config = INSTANCE CONFIG \ -- description = INSTANCE DESCRIPTION Replace the following: INSTANCE ID : a permanent identifier that is unique within your Google Cloud project.
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- Note: You can only create one free trial instance per project lifecycle, and a maximum of five free trial instances per Cloud Billing account.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- If not, enable it manually: Enable Spanner API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin (roles/spanner.admin) IAM role on your project.
- Go to Spanner instances Click the instance you created, for example Test Instance .
- Create a database In the Google Cloud console, go to the Spanner Instances page.
- Enter: GoogleSQL CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); PostgreSQL CREATE TABLE Singers ( BirthDate TIMESTAMPTZ , SingerId BIGINT PRIMARY KEY , FirstName VARCHAR ( 1024 ), LastName VARCHAR ( 1024 ), SingerInfo BYTEA ); Click play circle Run .

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.
- What's next Learn how to Create and manage instances .
- As detailed in Quotas & limits , to provide high availability and low latency when accessing a database, Spanner uses the compute capacity of an instance as a basis for determining storage limits, using the following guidelines: For instances smaller than 1 node (1000 PUs), Spanner allots 1024.0 GiB of data for every 100 PUs in the database.

