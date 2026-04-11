---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.828Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Artifact Registry support for Flex Template images"
feature_slug: "artifact-registry-support-for-flex-template-images"
latest_feature_date: "2021-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient"
  - "https://docs.cloud.google.com/dataflow/docs/guides/build-container-image"
keywords:
  - "artifact"
  - "registry"
  - "for"
  - "flex"
  - "template"
  - "images"
  - "lets"
  - "dataflow"
---

# Artifact Registry support for Flex Template images

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Artifact Registry support lets Dataflow store Flex Template images in Artifact Registry.

## Extended Definition

Artifact Registry support lets Dataflow store Flex Template images in Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient)
- [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)

## Supporting Pages

### "Build and run an example Flex Template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Use Flex Templates to package a Dataflow pipeline .
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace the following: PROJECT ID : your project ID PROJECT NUMBER your Google Cloud project number SERVICE ACCOUNT ROLE : each individual role Prepare your environment for Flex Templates Install the SDK and any requirements for your development environment.
- For Java and Python Flex Templates, the Docker image is built and pushed to your Artifact Registry repository when you run the gcloud dataflow flex-template build command.
- Java gcloud dataflow flex-template build gs:// BUCKET NAME /getting started-java.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /getting-started-java:latest" \ --sdk-language "JAVA" \ --flex-template-base-image JAVA17 \ --metadata-file "metadata.json" \ --jar "target/flex-template-getting-started-1.0.jar" \ --env FLEX TEMPLATE JAVA MAIN CLASS = "com.example.dataflow.FlexTemplateGettingStarted" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier LOCATION : the location PROJECT ID : the Google Cloud project ID REPOSITORY : the name of the Artifact Registry repository that you created earlier Python gcloud dataflow flex-template build gs:// BUCKET NAME /getting started-py.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /getting-started-python:latest" \ --sdk-language "PYTHON" \ --flex-template-base-image "PYTHON3" \ --metadata-file "metadata.json" \ --py-path "." \ --env "FLEX TEMPLATE PYTHON PY FILE=getting started.py" \ --env "FLEX TEMPLATE PYTHON REQUIREMENTS FILE=requirements.txt" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier LOCATION : the location PROJECT ID : the Google Cloud project ID REPOSITORY : the name of the Artifact Registry repository that you created earlier Go gcloud dataflow flex-template build gs:// BUCKET NAME /samples/dataflow/templates/wordcount-go.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/wordcount-go:latest" \ --sdk-language "GO" \ --flex-template-base-image "GO" \ --metadata-file "metadata.json" \ --go-binary-path = "." \ --env "FLEX TEMPLATE GO BINARY=wordcount" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier.

### "Class FlexTemplatesServiceAsyncClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample launch flex template(): Create a client client = dataflow v1beta3 .
- A request to launch a Cloud Dataflow job from a FlexTemplate. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- LaunchFlexTemplateRequest ( ) Make the request response = await client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict]] The request object.
- Returns Type Description google.cloud.dataflow v1beta3.types.LaunchFlexTemplateResponse Response to the request to launch a job from Flex Template. parse common billing account path parse common billing account path ( path : str ) - > typing .

### "Class FlexTemplatesServiceClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 def sample launch flex template(): Create a client client = dataflow v1beta3 .
- A request to launch a Cloud Dataflow job from a FlexTemplate. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- LaunchFlexTemplateRequest ( ) Make the request response = client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict] The request object.
- Returns Type Description google.cloud.dataflow v1beta3.types.LaunchFlexTemplateResponse Response to the request to launch a job from Flex Template. parse common billing account path parse common billing account path ( path : str ) - > typing .

### Build custom container images for Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The following example runs the wordcount example pipeline : python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --experiments = use runner v2 \ --sdk container image = IMAGE URI --sdk location = container Replace the following: INPUT FILE : an input file for the pipeline OUTPUT FILE : a path to write output to PROJECT ID : the Google Cloud project ID REGION : the region to deploy your Dataflow job in TEMP LOCATION : the Cloud Storage path for Dataflow to stage temporary job files IMAGE URI : the custom container image URI Pre-build a container image when submitting the job Pre-building a container image lets you to pre-install the pipeline dependencies before job startup.
- The following example uses Cloud Build to pre-build the image: python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --disk size gb = DISK SIZE GB \ --experiments = use runner v2 \ --requirements file = ./requirements.txt \ --prebuild sdk container engine = cloud build \ --docker registry push url = IMAGE PATH \ --sdk location = container The pre-build feature requires the Apache Beam SDK for Python version 2.25.0 or later.
- If the image is stored in Artifact Registry, use the artifacts docker images delete command: gcloud artifacts docker images delete IMAGE --delete-tags Common issues If your job has extra Python dependencies from a private PyPi mirror and can't be pulled by a remote Cloud Build job, try using the local docker option or try building your container using a Dockerfile.
- Cloud Build To build the file and push it to your Artifact Registry repository, run the gcloud builds submit command : gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG .

