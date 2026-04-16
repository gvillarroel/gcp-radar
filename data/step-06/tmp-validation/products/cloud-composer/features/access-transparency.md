---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.709Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Access Transparency"
feature_slug: "access-transparency"
latest_feature_date: "2021-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "administrative"
  - "transparency"
  - "logging"
  - "access"
  - "supports"
---

# Access Transparency

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports Access Transparency for administrative access logging.

## Extended Definition

Cloud Composer supports Access Transparency for administrative access logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- What's next Access control with IAM Manage Airflow connections Configure resource location restrictions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After you grant the required permissions and roles, you can access resources in a different project with the same default Airflow connections that you use to access resources in the project where your environment is located.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access resources in another project Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to access resources that are located in a different Google Cloud project than your Cloud Composer environment.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The webServerNetworkAccessControl element must be present, but must not contain an allowedIpRanges element. { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : " WS IP RANGE " , "description" : " WS RANGE DESCRIPTION " } ] } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- To specify several IP ranges, use this argument multiple times. --web-server-deny-all forbids access for all IP addresses. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-web-server-allow-ip ip range = WS IP RANGE ,description = WS RANGE DESCRIPTION Replace the following: ENVIRONMENT NAME : the name of your environment.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Airflow 2 dag = DAG ( access control = { 'DagGroup' : { 'can edit' , 'can read' }, }, ... ) Airflow 1 dag = DAG ( access control = { 'DagGroup' : { 'can dag edit' , 'can dag read' }, }, ... ) Map audit logs in Airflow UI to users Audit logs in Airflow UI are mapped to numeric IDs of Google user accounts .
- Configure DAG-level permissions automatically The Per-folder Roles Registration feature automatically creates a custom Airflow role for each subfolder directly inside the /dags folder and grants this role DAG-level access to all DAGs that have their source file stored in that respective subfolder.
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

