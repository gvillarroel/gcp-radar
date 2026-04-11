---
title: "Connect to a Compute Engine VM with SSHOperator \_|\_ Cloud Composer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/connect-gce-vm-sshoperator
  title: "Connect to a Compute Engine VM with SSHOperator \_|\_ Cloud Composer \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Connect to a Compute Engine VM with SSHOperator
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to connect to a Compute Engine VM from a DAG.
Create a DAG that connects to a Compute Engine VM instance
Note: This approach is available only in Airflow 2.
In the ssh_hook parameter of SSHOperator , use
ComputeEngineSSHHook with parameters that point to
the Compute Engine VM.
The following example demonstrates how to use
SSHOperator to run a command on a
Compute Engine VM instance.
Replace the values:
GCE_INSTANCE with the name of the VM instance.
GCE_ZONE with the Compute Engine zone where
the VM is located.
GCP_PROJECT_ID with the Project ID
of a project where the VM and the environment that runs the DAG is located.
import datetime
import airflow
from airflow.providers.ssh.operators.ssh import SSHOperator
from airflow.providers.google.cloud.hooks.compute_ssh import ComputeEngineSSHHook
GCE_INSTANCE = 'example-compute-instance'
GCE_ZONE = 'us-central1-a'
GCP_PROJECT_ID = 'example-project'
with airflow . DAG (
'composer_compute_ssh_dag' ,
start_date = datetime . datetime ( 2025 , 1 , 1 )
) as dag :
ssh_task = SSHOperator (
task_id = 'composer_compute_ssh_task' ,
ssh_hook = ComputeEngineSSHHook (
instance_name = GCE_INSTANCE ,
zone = GCE_ZONE ,
project_id = GCP_PROJECT_ID ,
use_oslogin = True ,
use_iap_tunnel = False ,
use_internal_ip = True ),
command = 'echo This command is executed from a DAG' ,
dag = dag )
What's next
Add and update DAGs
Schedule and trigger DAGs
Troubleshooting DAGs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
