---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.117Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Regional endpoints"
feature_slug: "regional-endpoints"
latest_feature_date: "2017-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.SessionTemplateControllerClient"
keywords:
  - "regional"
  - "endpoints"
  - "let"
  - "clients"
  - "access"
  - "dataproc"
  - "through"
  - "region"
---

# Regional endpoints

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Regional endpoints let clients access Dataproc through region-specific service endpoints.

## Extended Definition

Regional endpoints let clients access Dataproc through region-specific service endpoints.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.SessionTemplateControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.SessionTemplateControllerClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Features and improvements: Regional and multi-zonal workloads are used by default to increase obtainability of compute resources Faster startup than previous runtimes Fast resource cleanup that allows faster release of VPC IPs after workload completion End-user credentials are used for all workloads by default New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery native table interactions New Spark Serverless-specific IAM roles New dataproc-rm.googleapis.com API enablement is required November 22, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8 2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8 2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9 2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9 Change Dataproc on Compute Engine : Updated Cloud Storage connector: Updated to 3.1.10 in image version 2.3.18 .
- Fixed If a project's regional Dataproc staging bucket is manually deleted, it will be recreated automatically when a cluster is subsequently created in that region.
- June 28, 2017 Feature Regional endpoints generally available – Regional endpoints for Cloud Dataproc are now generally available.
- Example: gcloud dataproc clusters create --properties='yarn:yarn.resourcemanager.webapp.methods allowed=GET,POST,DELETE' Recommendation: If you set this property to allow non-default HTTP methods, make sure to configure firewall rules and other security settings to restrict access to port 8088 (see Cluster Web Interfaces→Avoid Security Vulnerabilities ).

### "Class SessionControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete session(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample terminate session(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create session(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample list sessions(): Create a client client = dataproc v1 .

### "Class SessionTemplateControllerClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.SessionTemplateControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.SessionTemplateControllerClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete session template(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create session template(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample update session template(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample list session templates(): Create a client client = dataproc v1 .

