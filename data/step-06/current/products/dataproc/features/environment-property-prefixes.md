---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.677Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Environment property prefixes"
feature_slug: "environment-property-prefixes"
latest_feature_date: "2018-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient"
keywords:
  - "environment"
  - "property"
  - "prefixes"
  - "let"
  - "users"
  - "set"
  - "hadoop"
  - "env"
---

# Environment property prefixes

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Environment property prefixes let users set hadoop-env, mapred-env, spark-env, and yarn-env properties through dedicated prefixes.

## Extended Definition

Environment property prefixes let users set hadoop-env, mapred-env, spark-env, and yarn-env properties through dedicated prefixes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)

## Supporting Pages

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- If the GOOGLE API USE CLIENT CERTIFICATE environment variable is "true", then the client cert source property can be used to provide a client certificate for mTLS transport.
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- The client cert source is determined in the following order: (1) if GOOGLE API USE CLIENT CERTIFICATE environment variable is not "true", the client cert source is None. (2) if client options.client cert source is provided, use the provided one; if the default client cert source exists, use the default one; otherwise the client cert source is None.

### "Class JobControllerClient (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- If the GOOGLE API USE CLIENT CERTIFICATE environment variable is "true", then the client cert source property can be used to provide a client certificate for mTLS transport.
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- The client cert source is determined in the following order: (1) if GOOGLE API USE CLIENT CERTIFICATE environment variable is not "true", the client cert source is None. (2) if client options.client cert source is provided, use the provided one; if the default client cert source exists, use the default one; otherwise the client cert source is None.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Since the PYTHONPATH environment variable defined in the Dockerfile is overridden by Spark, it must be set as a job property.
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Customize your Spark job runtime environment with Docker on YARN Stay organized with collections Save and categorize content based on your preferences.

