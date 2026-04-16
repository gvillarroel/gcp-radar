---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.792Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Flex Template private registry images"
feature_slug: "flex-template-private-registry-images"
latest_feature_date: "2022-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient"
keywords:
  - "flex"
  - "template"
  - "private"
  - "registry"
  - "images"
  - "let"
  - "dataflow"
  - "use"
---

# Flex Template private registry images

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Flex Template private registry images let Dataflow use Flex Template container images from private registries.

## Extended Definition

Flex Template private registry images let Dataflow use Flex Template container images from private registries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)

## Supporting Pages

### "Use Flex Templates to package a Dataflow pipeline for deployment \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- Source ID: `site-docs-reference-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's an example Google Cloud CLI command that builds a Flex Template using an image in a private registry with a self-signed certificate. gcloud dataflow flex-template build gs://example-bucket/custom-pipeline-private-repo.json --sdk-language = JAVA --image = "gcp.repository.example.com:9082/registry/example/image:latest" --image-repository-username-secret-id = "projects/example-project/secrets/username-secret" --image-repository-password-secret-id = "projects/example-project/secrets/password-secret/versions/latest" --image-repository-cert-path = "gs://example-bucket/self-signed.crt" --metadata-file = metadata.json To build your own Flex Template, you need to replace the example values, and you might need to specify different or additional options.
- This command creates the following artifacts: The template specification file, stored in Cloud Storage The launcher container image, stored in Artifact Registry Use a Google-provided base image To run a Flex Template using a Google-provided base image, run the following command: Java gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE : TAG " \ --sdk-language "JAVA" \ --flex-template-base-image " BASE IMAGE " \ --metadata-file " METADATA FILE " \ --jar " JAR FILE " \ --env "FLEX TEMPLATE JAVA MAIN CLASS= JAVA MAIN CLASS " Replace the following: BUCKET NAME : the name of a Cloud Storage bucket to store the template specification file TEMPLATE FILE NAME : the name of the template specification file to create.
- Use a private Docker registry with Flex Templates You can build a Flex Template image stored in a private Docker registry , if the private registry uses HTTPS and has a valid certificate.
- When you run a Flex Template job, the Dataflow service downloads the container image from Artifact Registry and starts the container.

### "Build and run an example Flex Template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This command updates your Docker configuration, so that you can connect with Artifact Registry to push images. gcloud auth configure-docker LOCATION -docker.pkg.dev Flex Templates can also use images stored in private registries.
- Java gcloud dataflow flex-template build gs:// BUCKET NAME /getting started-java.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /getting-started-java:latest" \ --sdk-language "JAVA" \ --flex-template-base-image JAVA17 \ --metadata-file "metadata.json" \ --jar "target/flex-template-getting-started-1.0.jar" \ --env FLEX TEMPLATE JAVA MAIN CLASS = "com.example.dataflow.FlexTemplateGettingStarted" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier LOCATION : the location PROJECT ID : the Google Cloud project ID REPOSITORY : the name of the Artifact Registry repository that you created earlier Python gcloud dataflow flex-template build gs:// BUCKET NAME /getting started-py.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /getting-started-python:latest" \ --sdk-language "PYTHON" \ --flex-template-base-image "PYTHON3" \ --metadata-file "metadata.json" \ --py-path "." \ --env "FLEX TEMPLATE PYTHON PY FILE=getting started.py" \ --env "FLEX TEMPLATE PYTHON REQUIREMENTS FILE=requirements.txt" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier LOCATION : the location PROJECT ID : the Google Cloud project ID REPOSITORY : the name of the Artifact Registry repository that you created earlier Go gcloud dataflow flex-template build gs:// BUCKET NAME /samples/dataflow/templates/wordcount-go.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/wordcount-go:latest" \ --sdk-language "GO" \ --flex-template-base-image "GO" \ --metadata-file "metadata.json" \ --go-binary-path = "." \ --env "FLEX TEMPLATE GO BINARY=wordcount" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Use Flex Templates to package a Dataflow pipeline .
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace the following: PROJECT ID : your project ID PROJECT NUMBER your Google Cloud project number SERVICE ACCOUNT ROLE : each individual role Prepare your environment for Flex Templates Install the SDK and any requirements for your development environment.

### "Class FlexTemplatesServiceAsyncClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample launch flex template(): Create a client client = dataflow v1beta3 .
- A request to launch a Cloud Dataflow job from a FlexTemplate. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- LaunchFlexTemplateRequest ( ) Make the request response = await client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict]] The request object.
- Returns Type Description google.cloud.dataflow v1beta3.types.LaunchFlexTemplateResponse Response to the request to launch a job from Flex Template. parse common billing account path parse common billing account path ( path : str ) - > typing .

