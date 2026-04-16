---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.135Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer DAG serialization default setting"
feature_slug: "cloud-composer-dag-serialization-default-setting"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github"
keywords:
  - "composer"
  - "dag"
  - "serialization"
  - "default"
  - "setting"
  - "for"
  - "new"
  - "environments"
---

# Cloud Composer DAG serialization default setting

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

For new Cloud Composer environments at version 1.15.0 and later, DAG serialization is enabled by default while existing environments are not changed automatically.

## Extended Definition

For new Cloud Composer environments at version 1.15.0 and later, DAG serialization is enabled by default while existing environments are not changed automatically.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)

## Supporting Pages

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Note: Starting from Cloud Composer version 1.15.0 , DAG serialization is enabled by default.
- You can enable and disable DAG serialization in new and existing environments by overriding Airflow configuration options , as described in the following sections.
- Disabling DAG serialization You can enable DAG serialization for an existing environment or when creating a new environment.
- Enabling DAG serialization You can enable DAG serialization for an existing environment or when creating a new environment.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- This field is supported for Cloud Composer environments in versions composer-3-airflow- . . -build. and newer. privateClusterConfig object ( PrivateClusterConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow- . . and newer. dataRetentionConfig object ( DataRetentionConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer. cloudComposerNetworkIpv4ReservedRange string Output only.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Displaying a rendered template with functions in the web UI with DAG serialization enabled is supported for environments running Cloud Composer version 1.12.0 or later and Airflow version 1.10.9 or later.
- In addition to other log messages, you can check logs for information about cloud-airflow-prod@system.gserviceaccount.com and service- PROJECT ID @cloudcomposer-accounts.iam.gserviceaccount.com service accounts that configure components of your environments.
- Create environments in a perimeter The following steps are required to deploy Cloud Composer inside a perimeter: Enable Access Context Manager API and Cloud Composer API for your project.
- Enabling DAG serialization disables all Airflow web server plugins, as they could risk the security of the VPC network where Cloud Composer is deployed.

### "Test, synchronize, and deploy your DAGs from GitHub \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The script then uses the Cloud Storage client library to upload all files from that temporary directory to the dags/ directory in your Cloud Composer environment's bucket. from future import annotations import argparse import glob import os from shutil import copytree , ignore patterns import tempfile Imports the Google Cloud client library from google.cloud import storage def create dags list ( dags directory : str ) - > tuple [ str , list [ str ]]: temp dir = tempfile . mkdtemp () ignore non-DAG Python files files to ignore = ignore patterns ( " init .py" , " test.py" ) Copy everything but the ignored files to a temp directory copytree ( dags directory , f " { temp dir } /" , ignore = files to ignore , dirs exist ok = True ) The only Python files left in our temp directory are DAG files so we can exclude all non Python files dags = glob . glob ( f " { temp dir } / .py" ) return ( temp dir , dags ) def upload dags to composer ( dags directory : str , bucket name : str , name replacement : str = "dags/" ) - > None : """ Given a directory, this function moves all DAG files from that directory to a temporary directory, then uploads all contents of the temporary directory to a given cloud storage bucket Args: dags directory (str): a fully qualified path to a directory that contains a "dags/" subdirectory bucket name (str): the GCS bucket of the Cloud Composer environment to upload DAGs to name replacement (str, optional): the name of the "dags/" subdirectory that will be used when constructing the temporary directory path name Defaults to "dags/". """ temp dir , dags = create dags list ( dags directory ) if len ( dags ) > 0 : Note - the GCS client library does not currently support batch requests on uploads if you have a large number of files, consider using the Python subprocess module to run gcloud storage cp --recursive on your dags See https://cloud.google.com/storage/docs/gsutil/commands/cp for more info storage client = storage .
- Client () bucket = storage client . bucket ( bucket name ) for dag in dags : Remove path to temp dir dag = dag . replace ( f " { temp dir } /" , name replacement ) try : Upload to your bucket blob = bucket . blob ( dag ) blob . upload from filename ( dag ) print ( f "File { dag } uploaded to { bucket name } / { dag } ." ) except FileNotFoundError : current directory = os . listdir () print ( f " { name replacement } directory not found in { current directory } , you may need to override the default value of name replacement to point to a relative directory" ) raise else : print ( "No DAGs to upload." ) if name == " main " : parser = argparse .
- RawDescriptionHelpFormatter ) parser . add argument ( "--dags directory" , help = "Relative path to the source directory containing your DAGs" , ) parser . add argument ( "--dags bucket" , help = "Name of the DAGs bucket of your Composer environment without the gs:// prefix" , ) args = parser . parse args () upload dags to composer ( args . dags directory , args . dags bucket ) Create Cloud Build YAML configuration for synchronizing DAGs In your repository, create a YAML file named add-dags-to-composer.cloudbuild.yaml that configures your Cloud Build job for synchronizing DAGs.
- Create the Cloud Build trigger for the presubmit check Follow the Building repositories from GitHub guide to create a GitHub app based trigger with the following configurations: Name : test-dags Event : Pull Request Source - Repository: choose your repository Source - Base branch: ^main$ (change main to the name of your repository's base branch, if required) Source - Comment Control: not required Caution: Setting Comment Control to be not required means that any user can submit a Pull Request that triggers the build.

