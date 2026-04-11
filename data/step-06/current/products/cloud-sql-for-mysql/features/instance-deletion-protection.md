---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.899Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Instance deletion protection"
feature_slug: "instance-deletion-protection"
latest_feature_date: "2022-08-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "instance"
  - "deletion"
  - "protection"
  - "became"
  - "generally"
  - "available"
  - "to"
  - "help"
---

# Instance deletion protection

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Instance deletion protection became generally available to help prevent accidental removal of Cloud SQL instances.

## Extended Definition

Instance deletion protection became generally available to help prevent accidental removal of Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2023 Cloud SQL for PostgreSQL Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- April 28, 2022 Cloud SQL for MySQL Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for PostgreSQL Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for SQL Server Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- March 16, 2020 Feature Cloud SQL now supports read replicas in a different region than that of the primary instance, providing additional protection against regional outages and improving read performance by making replicas available closer to your application.
- October 01, 2018 Feature Upgrade to Second Generation generally available for eligible First Generation MySQL instances.
- Custom SAN configuration for instances is generally available (GA).

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Set the password for the "root@%" MySQL user: gcloud sql users set-password root \ --host = % \ --instance INSTANCE NAME \ --password PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "mysql pvp instance name" { name = "mysql-pvp-instance-name" region = "asia-northeast1" database version = "MYSQL 8 0" root password = "abcABC123!" settings { tier = "db-f1-micro" password validation policy { min length = 6 complexity = "COMPLEXITY DEFAULT" reuse interval = 2 disallow username substring = true enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Create the instance This example creates an instance.
- Enable deletion protection Determines whether to protect an instance against accidental deletion.
- This flag isn't available for MySQL 8.0.34 and earlier versions. gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --enable-auto-upgrade-minor-version For detailed information, see the documentation on creating an instance by using gcloud .

