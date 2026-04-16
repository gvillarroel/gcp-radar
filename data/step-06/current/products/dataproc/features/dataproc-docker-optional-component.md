---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.626Z"
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
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient"
keywords:
  - "dataproc"
  - "docker"
  - "optional"
  - "component"
  - "adds"
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

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient)

## Supporting Pages

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- RUN ${ CONDA HOME } /bin/conda install mamba -n base -c conda-forge \ && ${ CONDA HOME } /bin/mamba install \ conda \ cython \ fastavro \ fastparquet \ gcsfs \ google-cloud-bigquery-storage \ google-cloud-bigquery [ pandas ] \ google-cloud-bigtable \ google-cloud-container \ google-cloud-datacatalog \ google-cloud-dataproc \ google-cloud-datastore \ google-cloud-language \ google-cloud-logging \ google-cloud-monitoring \ google-cloud-pubsub \ google-cloud-redis \ google-cloud-spanner \ google-cloud-speech \ google-cloud-storage \ google-cloud-texttospeech \ google-cloud-translate \ google-cloud-vision \ koalas \ matplotlib \ nltk \ numba \ numpy \ openblas \ orc \ pandas \ pyarrow \ pysal \ pytables \ python \ regex \ requests \ rtree \ scikit-image \ scikit-learn \ scipy \ seaborn \ sqlalchemy \ sympy \ virtualenv Optional: Add extra Python modules.
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.PYTHONPATH=/opt/python/packages" JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.PYTHONPATH=/opt/python/packages" Notes: See Launching Applications Using Docker Containers information on related properties. gcloud Submit the job to the cluster. gcloud dataproc jobs submit pyspark PYFILE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties=${JOB PROPERTIES} Replace the following; PYFILE : The file path to your PySpark job file.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget ): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi encryptionConfig object ( EncryptionConfig ) Optional.
- SINGLE NODE https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.

### "Class NodeGroupControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional [ google . cloud . dataproc v1 . types . clusters .
- CreateNodeGroupRequest ( parent="parent value", node group=node group, ) Make the request operation = client. create node group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.CreateNodeGroupRequest , dict]] The request object.
- ResizeNodeGroupRequest ( name="name value", size=443, ) Make the request operation = client. resize node group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.ResizeNodeGroupRequest , dict]] The request object.
- GetNodeGroupRequest ( name="name value", ) Make the request response = await client. get node group (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.GetNodeGroupRequest , dict]] The request object.

