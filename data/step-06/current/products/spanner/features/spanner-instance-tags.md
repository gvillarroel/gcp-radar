---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.284Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner instance tags"
feature_slug: "spanner-instance-tags"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "organize"
  - "scope"
  - "tags"
  - "instances"
  - "instance"
  - "supports"
---

# Spanner instance tags

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports using Google Cloud tags to organize instances and scope IAM policies by instance tags.

## Extended Definition

Spanner now supports using Google Cloud tags to organize instances and scope IAM policies by instance tags.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance](https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### Using Spanner in a virtual machine instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance](https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn more about service accounts on Compute Engine and how you can use them to grant Identity and Access Management (IAM) roles and API access scopes to the applications that run on your instances.
- Configure an instance with access to all Cloud APIs To quickly allow your instance to access the Cloud Spanner API, create a new instance to use the default service account and a scope with full access to all Cloud APIs.
- Home Documentation Databases Spanner Guides Send feedback Using Spanner in a virtual machine instance Stay organized with collections Save and categorize content based on your preferences.
- Go to the VM instances page Select your project and click Continue .

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- Click Save to upgrade your free trial instance. gcloud To upgrade your free trial instance to a paid Enterprise edition instance with the same instance configuration, run the following gcloud spanner instances update command: gcloud spanner instances update INSTANCE ID -- instance - type = provisioned Delete the instance Warning: Deleting an instance permanently removes the instance and all its databases.
- For more information, see Free trial instances overview . gcloud To create a free trial instance, use the gcloud spanner instances create command. gcloud spanner instances create INSTANCE ID \ -- instance - type = free - instance -- config = INSTANCE CONFIG \ -- description = INSTANCE DESCRIPTION Replace the following: INSTANCE ID : a permanent identifier that is unique within your Google Cloud project.
- Click Delete . gcloud To delete your free trial instance, use the following gcloud spanner instances delete command: gcloud spanner instances delete INSTANCE ID What's next Learn more about Spanner free trial instances .

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.
- To run the command, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.fineGrainedAccessUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS user:222larabrown@gmail.com user:baklavainthebalkans@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com serviceAccount:cs-fgac-sa-2@cloud-spanner-demo.google.com.iam.gserviceaccount.com For more information, see Enabling an API in your Google Cloud project .
- To perform this check, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles:roles/spanner.databaseRoleUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' --flatten = policy.bindings [] .members [] The output is similar to the following: ROLE MEMBERS EXPRESSION roles/spanner.databaseRoleUser serviceAccount:cs-fgac-sa-1@... roles/spanner.databaseRoleUser serviceAccount:cs-fgac-sa-2@... resource.type == "spanner…" Note that the first result is missing a condition and therefore the principals in this binding have access to all database roles.
- TODO(#4758) if ( ! metadata ) throw std :: move ( metadata ). status (); std :: cout << "Revoked privileges and dropped role " << role child << " \n " ; } C# using Google.Cloud.Spanner.Data ; using System.Threading.Tasks ; public class AddAndDropDatabaseRoleAsyncSample { public async Task AddDatabaseRoleAsync ( string projectId , string instanceId , string databaseId , string databaseRole ) { string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; string createRoleStatement = $"CREATE ROLE {databaseRole}" ; // Creates the given database role. using var connection = new SpannerConnection ( connectionString ); using var updateCmd = connection .

