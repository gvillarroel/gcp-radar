---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.113Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Environment property prefixes"
feature_slug: "environment-property-prefixes"
latest_feature_date: "2018-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
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
Coverage: LOW

## Step 02 Summary

Environment property prefixes let users set hadoop-env, mapred-env, spark-env, and yarn-env properties through dedicated prefixes.

## Extended Definition

Environment property prefixes let users set hadoop-env, mapred-env, spark-env, and yarn-env properties through dedicated prefixes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- June 06, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.107 1.2.51 2.2.51 2.3.2 Fixed Dataproc Serverless for Spark: Fixed a bug that prevented the spark.executorEnv property from correctly setting specific executor environment variables across all runtimes.
- This problem occurred when the gcloud core/universe domain property was not set in the build environment, resulting in a malformed /etc/boto.cfg .
- Feature Added support for setting hadoop-env, mapred-env, spark-env, and yarn-env dataproc properties through new prefixes.
- Change New sub-minor versions of Cloud Dataproc images: 1.2.86-debian9, 1.3.46-debian9, 1.4.17-debian9, 1.5.0-RC2-debian9, 1.3.46-ubuntu18, 1.4.17-ubuntu18, 1.5.0-RC2-ubuntu18 Change Added a warning when clusters are created with component gateway and kerberos as they are not currently supported together Change 1.3 image update - Upgraded Hive to version 2.3.6 Change 1.4 image update - Fixed a bug in the Jupyter component that prevented creating text files using the Jupyter and JupyterLab UIs Change 1.5 preview image update: Updated Anaconda to version 2019.10 Updated Miniconda to version 4.7.12.1 Upgrade Hue to version 4.5.0 Upgraded Scala to version 2.12.10 Upgrade Hadoop to version 2.10.0 Unset java.net.preferIPv4Stack=true property in Hadoop November 26, 2019 Issue 1.3 and 1.4 images: Cloud Dataproc images in the 1.3 and 1.4 minor version tracks are affected by an issue that causes the YARN Timeline Server to excessively log without proper rotation.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Since the PYTHONPATH environment variable defined in the Dockerfile is overridden by Spark, it must be set as a job property.
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- For example, spark.submit.deployMode is set to cluster , and spark.yarn.appMasterEnv.YARN CONTAINER RUNTIME DOCKER MOUNTS and spark.executorEnv.YARN CONTAINER RUNTIME DOCKER MOUNTS are set to mount directories from the host into the container.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Customize your Spark job runtime environment with Docker on YARN Stay organized with collections Save and categorize content based on your preferences.

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- If the GOOGLE API USE CLIENT CERTIFICATE environment variable is "true", then the client cert source property can be used to provide a client certificate for mTLS transport.
- Example filter: status.state = ACTIVE AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.

