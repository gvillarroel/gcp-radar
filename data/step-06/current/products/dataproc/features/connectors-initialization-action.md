---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.112Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Connectors initialization action"
feature_slug: "connectors-initialization-action"
latest_feature_date: "2018-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
keywords:
  - "connectors"
  - "initialization"
  - "action"
  - "the"
  - "lets"
  - "users"
  - "update"
  - "installed"
---

# Connectors initialization action

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Connectors initialization action lets users update the installed Cloud Storage and BigQuery connectors in Dataproc clusters.

## Extended Definition

The Connectors initialization action lets users update the installed Cloud Storage and BigQuery connectors in Dataproc clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Added Connectors initialization action that allows users to update the installed Cloud Storage and BigQuery connectors in Cloud Dataproc clusters.
- Fixed Forced distcp settings to match mapred-site.xml settings to provide additional fixes for the distcp command (see this related JIRA ) Ensured that workers created during an update do not join the cluster until after custom initialization actions are complete Ensured that workers always disconnect from a cluster when the Cloud Dataproc agent is shutdown Fixed a race condition in the API frontend that occurred when validating a request and marking cluster as updating Enhanced validation checks for quota, Cloud Dataproc image, and initialization actions when updating clusters Improved handling of jobs when the Cloud Dataproc agent is restarted GCP Console Allowed duplicate arguments when submitting a job Replaced generic Failed to load message with details about the cause of an error when an error occurs that is not related to Cloud Dataproc When a single jar file for a job is submitted, allowed it to be listed only in the Main class or jar field on the Submit a Job form, and no longer required it to also be listed in the Jar files field November 18, 2015 Change Core service improvements If set, a project's default zone setting is now used as the default value for the zone in the create-cluster form in the GCP Console.
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- June 22, 2018 Change New sub-minor versions of Cloud Dataproc images - 1.0.85, 1.1.76, 1.2.40 Upgraded the Cloud Storage and BigQuery connectors in 1.0.85, 1.1.76, 1.2.40 (for more information, review the change notes in the GitHub repository): Cloud Storage connector has been upgraded to version 1.6.7 BigQuery connector has been upgraded to version 0.10.8 June 15, 2018 Fixed Fixed ZooKeeper initialization action issue .

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use a different Managed Service for Apache Spark image base, modify the repository setup and package names. #!/bin/bash Initialization action for installing MS SQL ODBC driver on the cluster. set -e -x Install dependencies for the driver. apt-get update apt-get install -y --no-install-recommends curl gnupg unixodbc-dev Add Microsoft's official repository. curl https://packages.microsoft.com/keys/microsoft.asc apt-key add - curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list Install the driver. apt-get update ACCEPT EULA = Y apt-get install -y msodbcsql18 Install the pyodbc library for Python. pip install pyodbc shell gsutil cp install-odbc-mssql.sh gs:// YOUR BUCKET NAME /init-actions/ ``` Create a Managed Service for Apache Spark cluster that runs the initialization action.
- Create an initialization action script. #!/bin/bash set -e -x gsutil cp gs:// YOUR BUCKET NAME /drivers/postgresql-42.7.3.jar /usr/lib/spark/jars/ Create the cluster and reference the script. gcloud dataproc clusters create my-jdbc-cluster \ --region = REGION \ --image-version = 2 .2-debian11 \ --initialization-actions = gs:// YOUR BUCKET NAME /init-actions/install-jdbc-driver.sh Read from a PostgreSQL database This example uses the per-job method to connect to a PostgreSQL database.
- When you create your cluster, point to the initialization action script in Cloud Storage. gcloud dataproc clusters create my-odbc-cluster \ --region = REGION \ --image-version = 2 .2-debian11 \ --initialization-actions = gs:// BUCKET NAME /init-actions/install-odbc-mssql.sh Connect and query using PySpark After the cluster is running, the ODBC driver and pyodbc library are available.
- Cluster-wide If all jobs on a cluster require a specific driver, use an initialization action when you create the cluster to copy the driver JAR from Cloud Storage into the Spark jars directory on every node.

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you installed the gcloud CLI previously, make sure you have the latest version by running gcloud components update .
- Note: If you installed the gcloud CLI previously, make sure you have the latest version by running gcloud components update .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.

