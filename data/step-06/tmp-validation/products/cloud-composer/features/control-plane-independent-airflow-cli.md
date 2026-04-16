---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.233Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Control-plane-independent Airflow CLI"
feature_slug: "control-plane-independent-airflow-cli"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-control"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
keywords:
  - "independent"
  - "plane"
  - "commands"
  - "control"
  - "airflow"
---

# Control-plane-independent Airflow CLI

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Airflow CLI commands in Cloud Composer no longer require access to the environment cluster control plane.

## Extended Definition

Airflow CLI commands in Cloud Composer no longer require access to the environment cluster control plane.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-control](https://docs.cloud.google.com/composer/docs/composer-1/access-control)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It does not control other Airflow permissions such as access to connections, variables, and so on; it does not control access to gcloud CLI commands; it does not control access to the environment's bucket.
- Airflow UI Access Control does not apply to other interfaces that are available to users, such as Airflow CLI commands executed through gcloud CLI.
- Airflow 2 dag = DAG ( access control = { 'DagGroup' : { 'can edit' , 'can read' }, }, ... ) Airflow 1 dag = DAG ( access control = { 'DagGroup' : { 'can dag edit' , 'can dag read' }, }, ... ) Map audit logs in Airflow UI to users Audit logs in Airflow UI are mapped to numeric IDs of Google user accounts .
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Access control with IAM \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-control](https://docs.cloud.google.com/composer/docs/composer-1/access-control)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Method Permission environments.create composer.environments.create , and iam.serviceAccounts.actAs on the environment's service account. environments.delete composer.environments.delete environments.get composer.environments.get environments.list composer.environments.list environments.update composer.environments.update environments.executeAirflowCommand composer.environments.executeairflowcommand environments.stopAirflowCommand composer.environments.executeairflowcommand environments.pollAirflowCommand composer.environments.executeairflowcommand operations.delete composer.operations.delete operations.get composer.operations.get operations.list composer.operations.list Permissions for using gcloud CLI with environments To use gcloud with Cloud Composer environments, you need the following permissions: composer.environments.get container.clusters.get container.clusters.list container.clusters.getCredentials If you want to manage environments or environment buckets with gcloud composer commands, you also must have a role that has enough permissions to do so.
- If you want to run Airflow CLI commands, you need the following, additional permissions: container.namespaces.list container.pods.get container.pods.list container.pods.exec Permissions for working with DAGs from Google Cloud console The following permissions cover working with DAGs from Google Cloud console, through the DAG UI : Permission Description composer.dags.list View the list of DAGs on the Environment details page. composer.dags.get Get detailed information about DAGs, DAG runs, and tasks on the DAG details page. composer.dags.getSourceCode Get source code of DAGs on the DAG details page. composer.dags.execute Pause, unpause and trigger DAGs from the DAG details page.
- Manage environments and environment buckets For a user that can view, create, update, upgrade, and delete environments, manage objects (such as DAG files) in the environment buckets, access the Airflow web interface, run Airflow CLI commands, view and trigger DAGs from the DAG UI : Grant the Environment and Storage Object Administrator ( composer.environmentAndStorageObjectAdmin ) role.
- Manage environments For a user that can view, create, update, upgrade, and delete environments, access the Airflow web interface, run Airflow CLI commands, view and trigger DAGs from the DAG UI : Grant the Composer Administrator ( composer.admin ) role.

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, in Cloud Composer 1, such access to your environment's cluster is required in Private IP environments to run Airflow CLI commands ( gcloud composer environments run ).
- In Public IP environments, you can configure authorized networks to restrict the range of IP addresses that can access the control plane of your environment's cluster.
- About authorized networks in Cloud Composer Authorized networks allow you to specify CIDR ranges that can access your environment's cluster control plane using HTTPS.
- In Private IP environments you can configure authorized networks to allow a certain range of IP addresses to access the control plane of your environment's cluster.

