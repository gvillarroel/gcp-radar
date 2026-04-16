---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.152Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Docker Optional Component"
feature_slug: "dataproc-docker-optional-component"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "docker"
  - "adds"
  - "optional"
  - "component"
  - "clusters"
---

# Dataproc Docker Optional Component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Docker Optional Component adds Docker as an optional component for Dataproc clusters.

## Extended Definition

The Dataproc Docker Optional Component adds Docker as an optional component for Dataproc clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- Limitations Feature availability or support is not available with: Managed Service for Apache Spark image versions prior to 2.0.49 (not available in 1.5 images) MapReduce jobs (only supported for Spark jobs ) Spark client mode (only supported with Spark cluster mode) Kerberos clusters : cluster creation fails if you create a cluster with Docker on YARN and Kerberos enabled.
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.YARN CONTAINER RUNTIME DOCKER IMAGE= ${ IMAGE } " JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.YARN CONTAINER RUNTIME DOCKER IMAGE= ${ IMAGE } " Optional: Add custom jars to Spark classpath.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- Confidential Instance Config for clusters using Confidential VMs . resourceManagerTags map (key: string, value: string) Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.
- Example: Google Cloud CLI cluster creation command: gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags For a listing of available optional flags, see Optional Arguments on GitHub.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- If your project is part of a shared VPC , you must specify the full subnetwork URL in the following format: projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNET . --optional-components : This flag is available only when using base image versions 2.3 and later.

