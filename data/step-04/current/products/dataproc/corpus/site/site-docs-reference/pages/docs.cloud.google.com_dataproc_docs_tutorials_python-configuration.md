---
title: "Configure the Python environment \_|\_ Managed Service for Apache Spark \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/tutorials/python-configuration
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/tutorials/python-configuration
  title: "Configure the Python environment \_|\_ Managed Service for Apache Spark\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Configure the Python environment
Stay organized with collections
Save and categorize content based on your preferences.
PySpark jobs on Managed Service for Apache Spark are run by a Python interpreter on the
cluster. Job code must be compatible at runtime with the Python interpreter version
and dependencies.
Check interpreter version and modules
The following check_python_env.py sample program checks the Linux user running
the job, the Python interpreter, and available modules.
import getpass
import sys
import imp
print ( 'This job is running as " {} ".' . format ( getpass . getuser ()))
print ( sys . executable , sys . version_info )
for package in sys . argv [ 1 :]:
print ( imp . find_module ( package ))
Run the program
REGION= region
gcloud dataproc jobs submit pyspark check_python_env.py \
--cluster=my-cluster \
--region=${REGION} \
-- pandas scipy
Sample output
This job is running as "root".
('/usr/bin/python', sys.version_info(major=2, minor=7, micro=13, releaselevel='final', serial=0))
(None, '/usr/local/lib/python2.7/dist-packages/pandas', ('', '', 5))
(None, '/usr/local/lib/python2.7/dist-packages/scipy', ('', '', 5))
Managed Service for Apache Spark image Python environments
The following sections describe the Python environments for different
Managed Service for Apache Spark image version clusters.
Managed Service for Apache Spark image version 1.5
Miniconda3 is installed on Managed Service for Apache Spark 1.5 clusters.
The default interpreter is Python 3.7 which is located on the VM instance at
/opt/conda/miniconda3/bin/python3.7 , respectively. Python 2.7 is also
available at /usr/bin/python2.7 .
You can install conda and pip packages in the base environment or
set up your own conda environment on the cluster using
conda-related cluster properties .
To use Python 2.7 as the default interpreter on 1.5 clusters,
don't use the
Anaconda optional component
when creating the cluster. Instead, use the
conda initialization action
to install Miniconda2 and use
conda-related cluster properties
to install conda and pip packages in the base environment or set up your
own conda environment on the cluster.
Example
REGION= region
gcloud dataproc clusters create my-cluster \
--image-version=1.5 \
--region=${REGION} \
--metadata='MINICONDA_VARIANT=2' \
--metadata='MINICONDA_VERSION=latest' \
--initialization-actions=gs://goog-dataproc-initialization-actions-${REGION}/conda/bootstrap-conda.sh \
--properties=^#^dataproc:conda.packages='pytorch==1.0.1,visions==0.7.1'#dataproc:pip.packages='tokenizers==0.10.1,datasets==1.5.0'
Managed Service for Apache Spark image version 2.x
conda is installed on
Managed Service for Apache Spark 2.x clusters. The default Python3 interpreter is located
on the VM instance under /opt/conda/default/bin . The following pages list
the Python version included in Managed Service for Apache Spark image versions:
2.0
2.1
2.2
The non-default Python interpreter from the OS is available under /usr/bin/ .
You can install conda and pip packages in the base environment or set up your
own conda environment on the cluster using
conda-related cluster properties .
Example
REGION= region
gcloud dataproc clusters create my-cluster \
--image-version=2.0 \
--region=${REGION} \
--properties=^#^dataproc:conda.packages='pytorch==1.7.1,coverage==5.5'#dataproc:pip.packages='tokenizers==0.10.1,datasets==1.5.0'
Note: Anaconda is not available for Managed Service for Apache Spark
2.0 clusters.
Avoid package download issues
Managed Service for Apache Spark cluster nodes download packages from external public
Python repositories when installing custom conda and pip packages (see
conda-related cluster properties ).
To avoid cluster creation failures due to the unavailability of public
Python repositories, consider creating a Managed Service for Apache Spark custom image
or uploading the dependencies to a Cloud Storage bucket (see
Download dependencies with internal-ip-only clusters ).
Choose a Python interpreter for a job
If multiple Python interpreters are installed on your cluster, the system
runs /etc/profile.d/effective-python.sh , which exports the PYSPARK_PYTHON
environment variable to choose the default Python interpreter for your PySpark
jobs. If you need a non-default Python interpreter for a PySpark job, when
you submit the job to your cluster, set the spark.pyspark.python and
spark.pyspark.driver.python properties to the required Python version number
(for example, "python2.7" or "python3.6").
Example
REGION= region
gcloud dataproc jobs submit pyspark check_python_env.py \
--cluster=my-cluster \
--region=${REGION} \
--properties="spark.pyspark.python=python2.7,spark.pyspark.driver.python=python2.7"
Python with sudo
If you connect to a cluster node that has Miniconda or Anaconda installed using SSH,
when you run sudo python --version , the displayed Python version can be
different from the version displayed by python --version .
This version difference can occur because sudo uses the default system Python
/usr/bin/python , and does not execute
/etc/profile.d/effective-python.sh to initialize the Python environment.
For a consistent experience when using sudo , locate the Python path set in
/etc/profile.d/effective-python.sh , then run the env command to set the PATH
to this Python path. Here is a 1.5 cluster example:
sudo env PATH=/opt/conda/default/bin:${PATH} python --version
Use conda-related cluster properties
You can customize the conda environment during cluster creation using conda-related
cluster properties .
There are two mutually exclusive ways to customize the conda environment when
you create a Managed Service for Apache Spark cluster:
Use the dataproc:conda.env.config.uri cluster property to create and activate
a new conda environment on the cluster. or
Use the dataproc:conda.packages and dataproc:pip.packages cluster
properties to add conda and pip packages, respectively, to the conda base
environment on the cluster.
Warning: Cluster creation can time out depending on the time required to
install the new packages or environment specified by the properties.
The timeout is set at 10 minutes.
conda-related cluster properties
dataproc:conda.env.config.uri : The absolute path to a
conda environment YAML config file located in Cloud Storage.
This file will be used to create and activate a new conda environment on the cluster.
Note: The dataproc:conda.env.config.uri cluster property cannot be used with
the dataproc:conda.packages or
dataproc:pip.packages cluster properties.
Example:
Get or create a conda environment.yaml config file. You can
manually create the
file ,
use an existing file, or
export an existing conda environment )
into an environment.yaml file using the following command:
conda env export --name= env-name > environment.yaml
Copy the config file to your Cloud Storage bucket.
gcloud storage cp environment.yaml gs:// bucket-name /environment.yaml
Create the cluster and point to your environment config file in Cloud Storage.
REGION= region
gcloud dataproc clusters create cluster-name \
--region=${REGION} \
--properties='dataproc:conda.env.config.uri=gs:// bucket-name /environment.yaml' \
... other flags ...
dataproc:conda.packages : A list of conda packages
with specific versions to be installed in the base environment, formatted as
pkg1==v1,pkg2==v2... . If conda fails to resolve
conflicts with existing packages in the base environment, the conflicting
packages won't be installed.
Notes:
The dataproc:conda.packages and dataproc:pip.packages
cluster properties cannot be used with the
dataproc:conda.env.config.uri cluster property.
When specifying multiple packages (separated by a comma), you must specify an
alternate delimiter character (see cluster property
Formatting ).
The following example specifies "#" as the delimiter character to pass
multiple, comma-separated, package names to the dataproc:conda.packages
property.
Example:
REGION= region
gcloud dataproc clusters create cluster-name \
--region=${REGION} \
--properties='^#^dataproc:conda.packages=pytorch==1.7.1,coverage==5.5' \
... other flags ...
dataproc:pip.packages : A list of pip packages with specific
versions to be installed in the base environment, formatted as
pkg1==v1,pkg2==v2... . `pip will upgrade existing dependencies only if
required. Conflicts can cause the environment to be inconsistent.
Notes:
The dataproc:pip.packages and
dataproc:conda.packages cluster properties
cannot be used with the
dataproc:conda.env.config.uri cluster property.
When specifying multiple packages (separated by a comma), you must specify an
alternate delimiter character (see cluster property
Formatting ).
The following example specifies "#" as the delimiter character to pass
multiple, comma-separated, package names to the dataproc:pip.packages
property.
Example:
REGION= region
gcloud dataproc clusters create cluster-name \
--region=${REGION} \
--properties='^#^dataproc:pip.packages=tokenizers==0.10.1,datasets==1.4.1' \
... other flags ...
You can use both dataproc:conda.packages and dataproc:pip.packages
when creating a cluster.
Example:
REGION= region
gcloud dataproc clusters create cluster-name \
--region=${REGION} \
--image-version=1.5 \
--metadata='MINICONDA_VARIANT=2' \
--metadata='MINICONDA_VERSION=latest' \
--properties=^#^dataproc:conda.packages='pytorch==1.7.1,coverage==5.5'#dataproc:pip.packages='tokenizers==0.10.1,datasets==1.4.1' \
... other flags ...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
