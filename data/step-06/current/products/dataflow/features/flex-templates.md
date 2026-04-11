---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.843Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Flex Templates"
feature_slug: "flex-templates"
latest_feature_date: "2020-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
keywords:
  - "flex"
  - "templates"
  - "let"
  - "you"
  - "package"
  - "and"
  - "launch"
  - "dataflow"
---

# Flex Templates

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Flex Templates let you package and launch Dataflow templates with containerized pipeline environments; Flex Templates let users package and launch Dataflow jobs using flexible container-based templates.

## Extended Definition

Flex Templates let you package and launch Dataflow templates with containerized pipeline environments; Flex Templates let users package and launch Dataflow jobs using flexible container-based templates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### "Build and run an example Flex Template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Use Flex Templates to package a Dataflow pipeline .
- Go Use the gcloud dataflow flex-template run command to run a Dataflow job that uses the Flex Template. gcloud dataflow flex-template run "wordcount-go-date +%Y%m%d-%H%M%S" \ --template-file-gcs-location "gs:// BUCKET NAME /samples/dataflow/templates/wordcount-go.json" \ --parameters output = "gs:// BUCKET NAME /samples/dataflow/templates/counts.txt" \ --region " REGION " Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier REGION : the region To view the status of the Dataflow job in the Google Cloud console, go to the Dataflow Jobs page.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace the following: PROJECT ID : your project ID PROJECT NUMBER your Google Cloud project number SERVICE ACCOUNT ROLE : each individual role Prepare your environment for Flex Templates Install the SDK and any requirements for your development environment.
- For Java and Python Flex Templates, the Docker image is built and pushed to your Artifact Registry repository when you run the gcloud dataflow flex-template build command.

### "Class FlexTemplatesServiceAsyncClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LaunchFlexTemplateRequest ( ) Make the request response = await client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict]] The request object.
- Home Documentation Developer tools Python Client libraries Send feedback Class FlexTemplatesServiceAsyncClient (0.13.0) Stay organized with collections Save and categorize content based on your preferences.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample launch flex template(): Create a client client = dataflow v1beta3 .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,FlexTemplatesServiceTransport,Callable[..., FlexTemplatesServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### "Class FlexTemplatesServiceClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient)
- Source ID: `site-python-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LaunchFlexTemplateRequest ( ) Make the request response = client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict] The request object.
- Home Documentation Developer tools Python Client libraries Send feedback Class FlexTemplatesServiceClient (0.13.0) Stay organized with collections Save and categorize content based on your preferences.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 def sample launch flex template(): Create a client client = dataflow v1beta3 .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,FlexTemplatesServiceTransport,Callable[..., FlexTemplatesServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.dataflow.v1beta3 (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- MetricsV1 Beta3 Grpc The Dataflow Metrics API lets you monitor the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- Launch Flex Template Request A request to launch a Cloud Dataflow job from a FlexTemplate. com. google. dataflow. v1beta3.
- Launch Flex Template Response Response to the request to launch a job from Flex Template. com. google. dataflow. v1beta3.

