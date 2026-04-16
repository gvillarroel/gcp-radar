---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.455Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Service account descriptions"
feature_slug: "service-account-descriptions"
latest_feature_date: "2019-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
  - "https://docs.cloud.google.com/iam/docs/service-accounts-create"
keywords:
  - "account"
  - "descriptions"
  - "lets"
  - "you"
  - "add"
  - "description"
  - "when"
  - "creating"
---

# Service account descriptions

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets you add a description when creating or updating a service account.

## Extended Definition

Lets you add a description when creating or updating a service account.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)

## Supporting Pages

### "Best practices for managing service account keys \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Provide alternatives to creating service account keys Make sure that users in your organization are aware of alternatives and can justify the additional risk and management overhead of using a service account key: Educate your developers on more secure alternatives to service account keys Establish a process to help developers decide on the appropriate authentication method for their use case before creating a new service account key.
- For example, use expiry times when you're doing the following: Developing code in a non-production environment for an application that can only authenticate with service account keys Using a third-party tool that can only authenticate with service account keys Avoid using expiry times for these scenarios: Production workloads.
- You can reduce the risk of accidentally leaving copies of service account keys in temporary locations by using the Google Cloud CLI : The gcloud iam service-accounts keys create command lets you write the service account key file straight to the location where you need it.
- Use metrics to identify unused service account keys To minimize the number of valid service account keys in circulation, it's best to disable keys as soon as they aren't needed anymore, then delete the keys when you're certain that they are no longer needed.

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- To record all impersonation events, you must also enable data access logs for the following APIs: Identity and Access Management (IAM) API in all Google Cloud projects that contain service accounts Security Token Service API in all Google Cloud projects that contain workload identity pools By enabling these logs, you make sure that an entry is added to the Cloud Audit Logs whenever a user requests an access token or an ID token for a service account.
- Follow a naming and documentation convention To help track the association between a service and an application or resource, follow a naming convention when creating new service accounts: Add a prefix to the service account email address that identifies how the account is used.
- Don't run code from less protected sources on compute resources that have a privileged service account attached When you attach a service account to a compute resource, such as a VM instance, processes running on that resource can use the metadata server to request access tokens and ID tokens .
- If you grant a service account access to resources in a Google Cloud project that has less tightly controlled access (such as a sandbox or a development Google Cloud project), make sure that the service account's email address doesn't disclose any information.

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creation When you're creating a custom role, choose an ID, title, and description that help you identify the role: Role ID : The role ID is a unique identifier for the role.
- Additionally, you can only grant the Owner role to the following types of principals: Google Accounts Service accounts in your organization Google groups in your organization To learn how to grant roles, see Granting, changing, and revoking access .
- Role description : The role description is an optional field where you can provide additional information about a role.
- For example, you might notice that a predefined role was updated with permissions to use a new Preview feature, and might decide to add those permissions to your custom role as well.

### "Create service accounts \_|\_ Identity and Access Management (IAM) \_|\_\

- URL: [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create the service account, run the gcloud iam service-accounts create command: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --description = " DESCRIPTION " \ --display-name = " DISPLAY NAME " Replace the following values: SERVICE ACCOUNT NAME : the name of the service account DESCRIPTION : an optional description of the service account DISPLAY NAME : a service account name to display in the Google Cloud console Optional: To grant your service account an IAM role on your project, run the gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" \ --role = " ROLE NAME " Replace the following values: PROJECT ID : the project ID SERVICE ACCOUNT NAME : the name of the service account ROLE NAME : a role name, such as roles/compute.osLogin Optional: To allow users to attach the service account to other resources , run the gcloud iam service-accounts add-iam-policy-binding command to grant a user the Service Account User role ( roles/iam.serviceAccountUser ) on the service account: gcloud iam service-accounts add-iam-policy-binding \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = "user: USER EMAIL " \ --role = "roles/iam.serviceAccountUser" Replace the following values: PROJECT ID : the project ID SERVICE ACCOUNT NAME : the name of the service account USER EMAIL : the email address for the user C++ To learn how to install and use the client library for IAM, see IAM client libraries .
- You also provide the following information when you create a service account: DESCRIPTION is an optional description for the service account.
- You should receive a JSON response similar to the following: { "name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com", "projectId": "my-project", "uniqueId": "123456789012345678901", "email": "my-service-account@my-project.iam.gserviceaccount.com", "displayName": "My service account", "etag": "BwUp3rVlzes=", "description": "A service account for running jobs in my project", "oauth2ClientId": "987654321098765432109" } After you create a service account, grant one or more roles to the service account so that it can act on your behalf.
- HTTP method and URL: POST https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts Request JSON body: { "accountId": " SA NAME ", "serviceAccount": { "description": " SA DESCRIPTION ", "displayName": " SA DISPLAY NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

