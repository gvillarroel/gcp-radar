---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.781Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Storage sync logs"
feature_slug: "cloud-storage-sync-logs"
latest_feature_date: "2020-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github"
  - "https://docs.cloud.google.com/composer/docs/latest/manage-dags"
keywords:
  - "sync"
  - "synchronization"
  - "publishes"
  - "storage"
  - "separate"
  - "under"
  - "logs"
---

# Cloud Storage sync logs

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer publishes Cloud Storage synchronization logs under a separate Composer log name with pod_id differentiation.

## Extended Definition

Cloud Composer publishes Cloud Storage synchronization logs under a separate Composer log name with pod_id differentiation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- [https://docs.cloud.google.com/composer/docs/latest/manage-dags](https://docs.cloud.google.com/composer/docs/latest/manage-dags)

## Supporting Pages

### Data stored in Cloud Storage \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage](https://docs.cloud.google.com/composer/docs/composer-1/cloud-storage)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logs folder The logs/ folder is synchronized from Airflow workers to the environment's bucket using the Cloud Storage API.
- During the synchronization, the worker runs out of local storage and synchronization can't be completed.
- Cloud Composer uses Cloud Storage FUSE for synchronization.
- What's next View logs Manage DAGs Write DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Test, synchronize, and deploy your DAGs from GitHub \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client () bucket = storage client . bucket ( bucket name ) for dag in dags : Remove path to temp dir dag = dag . replace ( f " { temp dir } /" , name replacement ) try : Upload to your bucket blob = bucket . blob ( dag ) blob . upload from filename ( dag ) print ( f "File { dag } uploaded to { bucket name } / { dag } ." ) except FileNotFoundError : current directory = os . listdir () print ( f " { name replacement } directory not found in { current directory } , you may need to override the default value of name replacement to point to a relative directory" ) raise else : print ( "No DAGs to upload." ) if name == " main " : parser = argparse .
- Caution: If you do not remove the dags/ suffix from the Cloud Storage bucket name in the DAGS BUCKET substitution variable, the DAG sync job fails with a NotFound error.
- The DAG synchronization utility and its requirements are located in the utils directory.
- The script then uses the Cloud Storage client library to upload all files from that temporary directory to the dags/ directory in your Cloud Composer environment's bucket. from future import annotations import argparse import glob import os from shutil import copytree , ignore patterns import tempfile Imports the Google Cloud client library from google.cloud import storage def create dags list ( dags directory : str ) - > tuple [ str , list [ str ]]: temp dir = tempfile . mkdtemp () ignore non-DAG Python files files to ignore = ignore patterns ( " init .py" , " test.py" ) Copy everything but the ignored files to a temp directory copytree ( dags directory , f " { temp dir } /" , ignore = files to ignore , dirs exist ok = True ) The only Python files left in our temp directory are DAG files so we can exclude all non Python files dags = glob . glob ( f " { temp dir } / .py" ) return ( temp dir , dags ) def upload dags to composer ( dags directory : str , bucket name : str , name replacement : str = "dags/" ) - > None : """ Given a directory, this function moves all DAG files from that directory to a temporary directory, then uploads all contents of the temporary directory to a given cloud storage bucket Args: dags directory (str): a fully qualified path to a directory that contains a "dags/" subdirectory bucket name (str): the GCS bucket of the Cloud Composer environment to upload DAGs to name replacement (str, optional): the name of the "dags/" subdirectory that will be used when constructing the temporary directory path name Defaults to "dags/". """ temp dir , dags = create dags list ( dags directory ) if len ( dags ) > 0 : Note - the GCS client library does not currently support batch requests on uploads if you have a large number of files, consider using the Python subprocess module to run gcloud storage cp --recursive on your dags See https://cloud.google.com/storage/docs/gsutil/commands/cp for more info storage client = storage .

### Add and update DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/manage-dags](https://docs.cloud.google.com/composer/docs/latest/manage-dags)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to Composer logs > Infrastructure > Cloud Storage sync item and inspect logs for every worker in your environment.
- What's next Write DAGs Test, synchronize, and deploy your DAGs from GitHub Troubleshooting DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In a healthy environment, waiting for about 20-30 seconds is enough for all workers to sync. (Optional) If you want to be completely sure that all workers have the new version of the DAG file, inspect logs for each individual worker.
- The synchronization and the following re-parsing of DAGs happen with a delay of approximately 1-2 minutes .

