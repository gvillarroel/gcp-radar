---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.227Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "dags list-import-errors Airflow CLI command"
feature_slug: "dags-list-import-errors-airflow-cli-command"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github"
  - "https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags"
keywords:
  - "dags"
  - "list"
  - "import"
  - "errors"
  - "airflow"
  - "cli"
  - "command"
  - "composer"
---

# dags list-import-errors Airflow CLI command

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports the Airflow CLI command dags list-import-errors.

## Extended Definition

Cloud Composer supports the Airflow CLI command dags list-import-errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)

## Supporting Pages

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud composer environments run example-environment \ dags list -- --output = json Airflow 1 Specify CLI commands as a sub-command.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.
- Example: gcloud composer environments run example-environment \ list dags -- --report Default location Most gcloud composer commands require a location.
- For a full list of supported Airflow CLI commands, see the reference for the gcloud composer environments run command.

### "Test, synchronize, and deploy your DAGs from GitHub \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- Source ID: `site-iam-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The script then uses the Cloud Storage client library to upload all files from that temporary directory to the dags/ directory in your Cloud Composer environment's bucket. from future import annotations import argparse import glob import os from shutil import copytree , ignore patterns import tempfile Imports the Google Cloud client library from google.cloud import storage def create dags list ( dags directory : str ) - > tuple [ str , list [ str ]]: temp dir = tempfile . mkdtemp () ignore non-DAG Python files files to ignore = ignore patterns ( " init .py" , " test.py" ) Copy everything but the ignored files to a temp directory copytree ( dags directory , f " { temp dir } /" , ignore = files to ignore , dirs exist ok = True ) The only Python files left in our temp directory are DAG files so we can exclude all non Python files dags = glob . glob ( f " { temp dir } / .py" ) return ( temp dir , dags ) def upload dags to composer ( dags directory : str , bucket name : str , name replacement : str = "dags/" ) - > None : """ Given a directory, this function moves all DAG files from that directory to a temporary directory, then uploads all contents of the temporary directory to a given cloud storage bucket Args: dags directory (str): a fully qualified path to a directory that contains a "dags/" subdirectory bucket name (str): the GCS bucket of the Cloud Composer environment to upload DAGs to name replacement (str, optional): the name of the "dags/" subdirectory that will be used when constructing the temporary directory path name Defaults to "dags/". """ temp dir , dags = create dags list ( dags directory ) if len ( dags ) > 0 : Note - the GCS client library does not currently support batch requests on uploads if you have a large number of files, consider using the Python subprocess module to run gcloud storage cp --recursive on your dags See https://cloud.google.com/storage/docs/gsutil/commands/cp for more info storage client = storage .
- Create the Cloud Build trigger Follow the Building repositories from GitHub guide to create a GitHub app based trigger with the following configurations: Name : add-dags-to-composer Event : Push to a branch Source - Repository: choose your repository Source - Base branch: ^main$ (change main to the name of your repository's base branch, if required) Source - Included files filter (glob): dags/ Build Configuration - Cloud build configuration file: /add-dags-to-composer.cloudbuild.yaml (the path to your build file) In the Advanced configuration, add two substitution variables : DAGS DIRECTORY - the directory where dags are located in your repository.
- Client () bucket = storage client . bucket ( bucket name ) for dag in dags : Remove path to temp dir dag = dag . replace ( f " { temp dir } /" , name replacement ) try : Upload to your bucket blob = bucket . blob ( dag ) blob . upload from filename ( dag ) print ( f "File { dag } uploaded to { bucket name } / { dag } ." ) except FileNotFoundError : current directory = os . listdir () print ( f " { name replacement } directory not found in { current directory } , you may need to override the default value of name replacement to point to a relative directory" ) raise else : print ( "No DAGs to upload." ) if name == " main " : parser = argparse .
- RawDescriptionHelpFormatter ) parser . add argument ( "--dags directory" , help = "Relative path to the source directory containing your DAGs" , ) parser . add argument ( "--dags bucket" , help = "Name of the DAGs bucket of your Composer environment without the gs:// prefix" , ) args = parser . parse args () upload dags to composer ( args . dags directory , args . dags bucket ) Create Cloud Build YAML configuration for synchronizing DAGs In your repository, create a YAML file named add-dags-to-composer.cloudbuild.yaml that configures your Cloud Build job for synchronizing DAGs.

### "Schedule and trigger Airflow DAGs \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- In the Airflow web interface, on the DAGs page, click the toggle next to the DAG's name. gcloud Run the dags pause Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags pause -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.
- Run the dags trigger Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags trigger -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.
- Note: To backfill DAG runs for a certain date instead of catching up, run the dags backfill Airflow CLI command using Google Cloud CLI . (Optional) In the retries parameter, define how many times Airflow must retry tasks that failed (each DAG consists of one or more individual tasks).
- Note: The Orchestration page in BigQuery combines scheduling information for all Airflow DAGs from all Cloud Composer 3 environments in your project, as well as other types of assets available in BigQuery.

