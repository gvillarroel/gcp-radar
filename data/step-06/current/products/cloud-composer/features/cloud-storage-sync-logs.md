---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.787Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Storage sync logs"
feature_slug: "cloud-storage-sync-logs"
latest_feature_date: "2020-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage"
  - "https://docs.cloud.google.com/composer/docs/latest/manage-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github"
keywords:
  - "storage"
  - "sync"
  - "logs"
  - "composer"
  - "publishes"
  - "synchronization"
  - "under"
  - "separate"
---

# Cloud Storage sync logs

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer publishes Cloud Storage synchronization logs under a separate Composer log name with pod_id differentiation.

## Extended Definition

Cloud Composer publishes Cloud Storage synchronization logs under a separate Composer log name with pod_id differentiation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- [https://docs.cloud.google.com/composer/docs/latest/manage-dags](https://docs.cloud.google.com/composer/docs/latest/manage-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)

## Supporting Pages

### Data stored in Cloud Storage \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer uses Cloud Storage FUSE for synchronization.
- Logs folder The logs/ folder is synchronized from Airflow workers to the environment's bucket using the Cloud Storage API.
- During the synchronization, the worker runs out of local storage and synchronization can't be completed.
- What's next View logs Manage DAGs Write DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Test, synchronize, and deploy your DAGs from GitHub \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The script then uses the Cloud Storage client library to upload all files from that temporary directory to the dags/ directory in your Cloud Composer environment's bucket. from future import annotations import argparse import glob import os from shutil import copytree , ignore patterns import tempfile Imports the Google Cloud client library from google.cloud import storage def create dags list ( dags directory : str ) - > tuple [ str , list [ str ]]: temp dir = tempfile . mkdtemp () ignore non-DAG Python files files to ignore = ignore patterns ( " init .py" , " test.py" ) Copy everything but the ignored files to a temp directory copytree ( dags directory , f " { temp dir } /" , ignore = files to ignore , dirs exist ok = True ) The only Python files left in our temp directory are DAG files so we can exclude all non Python files dags = glob . glob ( f " { temp dir } / .py" ) return ( temp dir , dags ) def upload dags to composer ( dags directory : str , bucket name : str , name replacement : str = "dags/" ) - > None : """ Given a directory, this function moves all DAG files from that directory to a temporary directory, then uploads all contents of the temporary directory to a given cloud storage bucket Args: dags directory (str): a fully qualified path to a directory that contains a "dags/" subdirectory bucket name (str): the GCS bucket of the Cloud Composer environment to upload DAGs to name replacement (str, optional): the name of the "dags/" subdirectory that will be used when constructing the temporary directory path name Defaults to "dags/". """ temp dir , dags = create dags list ( dags directory ) if len ( dags ) > 0 : Note - the GCS client library does not currently support batch requests on uploads if you have a large number of files, consider using the Python subprocess module to run gcloud storage cp --recursive on your dags See https://cloud.google.com/storage/docs/gsutil/commands/cp for more info storage client = storage .
- Client () bucket = storage client . bucket ( bucket name ) for dag in dags : Remove path to temp dir dag = dag . replace ( f " { temp dir } /" , name replacement ) try : Upload to your bucket blob = bucket . blob ( dag ) blob . upload from filename ( dag ) print ( f "File { dag } uploaded to { bucket name } / { dag } ." ) except FileNotFoundError : current directory = os . listdir () print ( f " { name replacement } directory not found in { current directory } , you may need to override the default value of name replacement to point to a relative directory" ) raise else : print ( "No DAGs to upload." ) if name == " main " : parser = argparse .
- RawDescriptionHelpFormatter ) parser . add argument ( "--dags directory" , help = "Relative path to the source directory containing your DAGs" , ) parser . add argument ( "--dags bucket" , help = "Name of the DAGs bucket of your Composer environment without the gs:// prefix" , ) args = parser . parse args () upload dags to composer ( args . dags directory , args . dags bucket ) Create Cloud Build YAML configuration for synchronizing DAGs In your repository, create a YAML file named add-dags-to-composer.cloudbuild.yaml that configures your Cloud Build job for synchronizing DAGs.
- Run the utility script to synchronize the DAGs in your repository with your Cloud Composer environment. steps : install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "utils/requirements.txt" , "--user" ] run - name : python entrypoint : python args : [ "utils/add dags to composer.py" , "--dags directory=$ { DAGS DIRECTORY} " , "--dags bucket=$ { DAGS BUCKET} " ] Note: Cloud Build pulls the Python image from Docker Hub and you can specify the tag in the name field of each step.

### Add and update DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/manage-dags](https://docs.cloud.google.com/composer/docs/latest/manage-dags)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Composer logs > Infrastructure > Cloud Storage sync item and inspect logs for every worker in your environment.
- Example: gcloud composer environments storage dags import \ --environment example-environment \ --location us-central1 \ --source = "example dag.py" Update a DAG that has active DAG runs If you update a DAG that has active DAG runs: All currently executing tasks finish using the original DAG file.
- Then select the Python .py file for the DAG using the browser's dialog and confirm. gcloud gcloud composer environments storage dags import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source = " LOCAL FILE TO UPLOAD " Replace: ENVIRONMENT NAME with the name of the environment.
- What's next Write DAGs Test, synchronize, and deploy your DAGs from GitHub Troubleshooting DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

