---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.244Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "OpenCensus libraries for Spanner"
feature_slug: "opencensus-libraries-for-spanner"
latest_feature_date: "2024-02-21"
deprecation_date: "2024-02-21"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/backup/manage-backups"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
keywords:
  - "opencensus"
  - "archived"
  - "have"
  - "related"
  - "been"
  - "libraries"
  - "users"
---

# OpenCensus libraries for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner-related OpenCensus libraries have been archived, and users are advised to migrate to OpenTelemetry; deprecated on 2024-02-21.

## Extended Definition

Spanner-related OpenCensus libraries have been archived, and users are advised to migrate to OpenTelemetry; deprecated on 2024-02-21.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)

## Supporting Pages

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- View principals with database access To view a list of principals who have been granted access to a particular database, run the following commands.
- Exception: To interact with Spanner resources in the Google Cloud console, all users must have the roles/spanner.viewer IAM role.
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.
- Valid values are 0, 1, and 3. if ( policy . getVersion () < 3 ) { // conditional role bindings work with policy version 3 policyVersion = 3 ; } Binding binding1 = Binding . newBuilder () . setRole ( "roles/spanner.fineGrainedAccessUser" ) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); Binding binding2 = Binding . newBuilder () . setRole ( "roles/spanner.databaseRoleUser" ) . setCondition ( Expr . newBuilder (). setDescription ( title ). setExpression ( String . format ( "resource.name.endsWith(\"/databaseRoles/%s\")" , role ) ). setTitle ( title ). build ()) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); ImmutableList<Binding> bindings = ImmutableList . < Binding>builder () . addAll ( policy . getBindingsList ()) . add ( binding1 ) . add ( binding2 ) . build (); Policy policyWithConditions = Policy . newBuilder () . setVersion ( policyVersion ) . setEtag ( policy . getEtag ()) . addAllBindings ( bindings ) . build (); final SetIamPolicyRequest setRequest = SetIamPolicyRequest . newBuilder () . setResource ( DatabaseName . of ( projectId , instanceId , databaseId ). toString ()) . setPolicy ( policyWithConditions ). build (); final Policy response = databaseAdminClient . setIamPolicy ( setRequest ); System . out . printf ( "Enabled fine-grained access in IAM with version %d%n" , response . getVersion ()); } } } Note: The old client library interface code samples for Java are archived in GitHub .

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.spanner (6.111.1) Stay organized with collections Save and categorize content based on your preferences.
- Missing Default Sequence Kind Exception Exception thrown by Spanner when a DDL statement failed because no default sequence kind has been configured for a database. com. google. cloud. spanner.
- Users of the Cloud Spanner client library never create a ValueBinder directly; instead this interface is returned from other parts of the library involved in Value construction.
- Admin Requests Per Minute Exceeded Exception Exception thrown by Cloud Spanner the number of administrative requests per minute has been exceeded. com. google. cloud. spanner.

### Manage backups \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups update-metadata BACKUP ID \ --instance = INSTANCE ID \ --expiration-date = EXPIRATION DATE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups update-metadata BACKUP ID --instance = INSTANCE ID --expiration-date = EXPIRATION DATE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups update-metadata BACKUP ID ^ --instance = INSTANCE ID ^ --expiration-date = EXPIRATION DATE You should receive a response similar to the following: createTime: '2020-02-04T02:05:43.920377Z' database: projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID expireTime: '2020-05-05T00:00:00Z' name: projects/ PROJECT ID /instances/ INSTANCE ID /backups/ BACKUP ID sizeBytes: '1000000000' state: READY Client libraries The following code sample retrieves the expiry time of a backup and extends it.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups describe BACKUP NAME --instance = INSTANCE ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups describe BACKUP NAME --instance = INSTANCE ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups describe BACKUP NAME --instance = INSTANCE ID You should receive a response similar to the following: createTime: '2020-02-04T02:05:43.920377Z' database: projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID expireTime: '2021-02-04T02:05:43.268327Z' name: projects/ PROJECT ID /instances/ INSTANCE ID /backups/ BACKUP NAME sizeBytes: '1000000000' state: READY Client libraries Client libraries don't support getting backup information for a single backup.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner operations cancel OPERATION ID --instance = INSTANCE NAME \ --database = DATABASE NAME --backup = BACKUP NAME Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner operations cancel OPERATION ID --instance = INSTANCE NAME --database = DATABASE NAME --backup = BACKUP NAME Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner operations cancel OPERATION ID --instance = INSTANCE NAME ^ --database = DATABASE NAME --backup = BACKUP NAME Client libraries The following code sample creates a backup, cancels the backup operation, and then waits until the backup operation is done .
- GetBackupRequest ( name = backup . name ) ) except NotFound : print ( "Backup {} has been deleted." . format ( backup . name )) return Note: The old client library interface code samples for Python are archived in GitHub .

