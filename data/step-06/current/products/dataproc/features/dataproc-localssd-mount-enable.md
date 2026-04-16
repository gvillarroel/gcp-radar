---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:02.587Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "dataproc.localssd.mount.enable"
feature_slug: "dataproc-localssd-mount-enable"
latest_feature_date: "2016-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
keywords:
  - "dataproc"
  - "localssd"
  - "mount"
  - "enable"
  - "property"
  - "lets"
  - "users"
  - "prevent"
---

# dataproc.localssd.mount.enable

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The dataproc.localssd.mount.enable property lets users prevent Dataproc from mounting local SSDs for HDFS and temporary Hadoop directories.

## Extended Definition

The dataproc.localssd.mount.enable property lets users prevent Dataproc from mounting local SSDs for HDFS and temporary Hadoop directories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)

## Supporting Pages

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket Get the Kerberos ticket, before connecting to the Dataproc Metastore instance. sudo klist -kte /etc/security/keytab/metastore.service.keytab sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL NAME sudo klist # gets the ticket information. sudo hive Replace the following: PRINCIPAL NAME : the name of your principal.
- Create a Managed Service for Apache Spark cluster and enable Kerberos gcloud To set up a Managed Service for Apache Spark cluster with Kerberos, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --image-version=2.0 \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace the following: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Enable Kerberos for Dataproc Metastore The following instructions show you how to configure Kerberos for a Dataproc Metastore service that is attached to a Managed Service for Apache Spark cluster.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters Request JSON body: { "clusterName":" CLUSTER NAME ", "config": { "softwareConfig": { "imageVersion":"" }, "endpointConfig": { "enableHttpPortAccess": true }, "auxiliaryNodeGroups": [{ "nodeGroup":{ "roles":["DRIVER"], "nodeGroupConfig": { "numInstances": SIZE } }, "nodeGroupId": " NODE GROUP ID " }] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following gcloud CLI command to list the location of driver logs in Cloud Storage: gcloud dataproc jobs describe JOB ID \ --region= REGION The Cloud Storage location of driver logs is listed as the driverOutputResourceUri in the command output in the following format: driverOutputResourceUri: gs:// CLUSTER STAGING BUCKET /google-cloud-dataproc-metainfo/ CLUSTER UUID /jobs/ JOB ID Console To view node group cluster logs: Enable Logging .
- Driver node group metric Description yarn:ResourceManager:DriverPoolsQueueMetrics:AvailableMB The amount available memory in Mebibytes in dataproc-driverpool-driver-queue under the dataproc-driverpool partition. yarn:ResourceManager:DriverPoolsQueueMetrics:PendingContainers The number of pending (queued) containers in dataproc-driverpool-driver-queue under the dataproc-driverpool partition.
- Set the EndpointConfig.enableHttpPortAccess property to true to enable the Managed Service for Apache Spark Component Gateway , which provides access to the YARN web interface.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- When dataproc:yarn.docker.enable is set to true , Dataproc updates Hadoop and Spark configurations to enable the Docker on YARN feature in the cluster.
- RUN ${ CONDA HOME } /bin/conda install mamba -n base -c conda-forge \ && ${ CONDA HOME } /bin/mamba install \ conda \ cython \ fastavro \ fastparquet \ gcsfs \ google-cloud-bigquery-storage \ google-cloud-bigquery [ pandas ] \ google-cloud-bigtable \ google-cloud-container \ google-cloud-datacatalog \ google-cloud-dataproc \ google-cloud-datastore \ google-cloud-language \ google-cloud-logging \ google-cloud-monitoring \ google-cloud-pubsub \ google-cloud-redis \ google-cloud-spanner \ google-cloud-speech \ google-cloud-storage \ google-cloud-texttospeech \ google-cloud-translate \ google-cloud-vision \ koalas \ matplotlib \ nltk \ numba \ numpy \ openblas \ orc \ pandas \ pyarrow \ pysal \ pytables \ python \ regex \ requests \ rtree \ scikit-image \ scikit-learn \ scipy \ seaborn \ sqlalchemy \ sympy \ virtualenv Optional: Add extra Python modules.

