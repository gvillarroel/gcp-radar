---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:18.769Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Per-folder roles registration"
feature_slug: "per-folder-roles-registration"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
keywords:
  - "per"
  - "folder"
  - "roles"
  - "registration"
  - "lets"
  - "airflow"
  - "environments"
  - "register"
---

# Per-folder roles registration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Per-folder roles registration lets Airflow 3 environments register roles at the folder level; Cloud Composer supports registering roles at the folder level across regions.

## Extended Definition

Per-folder roles registration lets Airflow 3 environments register roles at the folder level; Cloud Composer supports registering roles at the folder level across regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- Configure DAG-level permissions automatically The Per-folder Roles Registration feature automatically creates a custom Airflow role for each subfolder directly inside the /dags folder and grants this role DAG-level access to all DAGs that have their source file stored in that respective subfolder.
- Per-folder Roles Registration is available in Cloud Composer 1.18.12 and later versions in Airflow 2, and in Cloud Composer 1.13.4 and later versions in Airflow 1.
- Roles have a union of DAG access permissions registered through Per-folder Roles Registration and defined in the access control property of the DAG.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Cloud Composer helps you create managed Airflow environments quickly and use Airflow-native tools, such as the powerful Airflow web interface and command-line tools, so you can focus on your workflows and not your infrastructure.
- Access control in Cloud Composer You manage security at the Google Cloud project level and can assign IAM roles that allow individual users to modify or create environments.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Cloud Composer helps you create managed Airflow environments quickly and use Airflow-native tools, such as the powerful Airflow web interface and command-line tools, so you can focus on your workflows and not your infrastructure.
- Access control in Cloud Composer You manage security at the Google Cloud project level and can assign IAM roles that allow individual users to modify or create environments.

