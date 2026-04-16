---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.471Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy regional availability in asia-southeast3"
feature_slug: "cloud-deploy-regional-availability-in-asia-southeast3"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-analysis"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager"
keywords:
  - "deploy"
  - "regional"
  - "availability"
  - "in"
  - "asia"
  - "southeast3"
  - "is"
  - "now"
---

# Cloud Deploy regional availability in asia-southeast3

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy is now available in the asia-southeast3 (Bangkok) region.

## Extended Definition

Cloud Deploy is now available in the asia-southeast3 (Bangkok) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager)

## Supporting Pages

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to grant roles . gcloud services enable clouddeploy.googleapis.com compute.googleapis.com Required roles To get the permissions that you need to create and use analysis jobs, ask your administrator to grant you the following IAM roles on the account for your project: Cloud Deploy Runner ( roles/clouddeploy.jobRunner ) Monitoring Alert Viewer ( roles/monitoring.alertPolicyViewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Apply your delivery pipeline configuration file To create a delivery pipeline with your analysis job, apply the configuration file using the following command: gcloud deploy apply FILE \ --region = REGION \ --project = PROJECT ID Replace the following: FILE With the name of your delivery pipeline configuration file , clouddeploy.yaml or whatever name you gave it.
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.
- To ensure that the Cloud Deploy service account has the necessary permissions to create and use automations, ask your administrator to grant the following IAM roles to the Cloud Deploy service account on your project: Important: You must grant these roles to the Cloud Deploy service account, not to your user account.

### "Quickstart: Run analysis on your application after deploying it \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register your pipeline and target with the Cloud Deploy service: gcloud deploy apply --file = clouddeploy.yaml --region = us-central1 --project = PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application.
- In the deploy-analysis-run-quickstart directory, create a new file, clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : deploy-analysis-demo-app-run description : main application pipeline serialPipeline : stages : - targetId : analysis-staging profiles : [] strategy : standard : analysis : duration : 300s googleCloud : alertPolicyChecks : - id : check-1 alertPolicies : - ALERT POLICY ID --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : analysis-staging description : staging Run service run : location : projects/ PROJECT ID /locations/us-central1 In this YAML, replace ALERT POLICY ID with the output from the gcloud monitoring policies list command you ran previously , and replace PROJECT ID with the ID of the project you're using.
- In the deploy-analysis-run-quickstart directory, create a file called policy.yaml , with the following contents: displayName : Cloud Run service uptime check userLabels : policy-for : analysis-run-pipeline combiner : OR conditions : - displayName : Failure of uptime check UPTIME ID conditionThreshold : filter : metric.type="monitoring.googleapis.com/uptime check/check passed" AND metric.label.check id=" UPTIME ID " AND resource.type="cloud run revision" aggregations : - alignmentPeriod : 60s crossSeriesReducer : REDUCE COUNT FALSE groupByFields : - resource.label. perSeriesAligner : ALIGN NEXT OLDER comparison : COMPARISON GT duration : 60s thresholdValue : 1.0 Replace UPTIME ID with the ID of the uptime check you created before .
- Run the following command from the deploy-analysis-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test-release-001 \ --project = PROJECT ID \ --region = us-central1 \ --delivery-pipeline = deploy-analysis-demo-app-run \ --images = my-app-image = us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.

### "Class ListDeliveryPipelinesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

### "Class ListDeliveryPipelinesPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeliveryPipelinesPager)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeliveryPipelinesRequest The initial request object. response google.cloud.deploy v1.types.ListDeliveryPipelinesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListDeliveryPipelinesResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesResponse ], request : google . cloud . deploy v1 . types . cloud deploy .
- ListDeliveryPipelinesRequest , response : google . cloud . deploy v1 . types . cloud deploy .

