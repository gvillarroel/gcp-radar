---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.539Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker (Google Cloud core) regional availability"
feature_slug: "looker-google-cloud-core-regional-availability"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
keywords:
  - "looker"
  - "core"
  - "regional"
  - "availability"
  - "now"
  - "supports"
  - "additional"
  - "deployment"
---

# Looker (Google Cloud core) regional availability

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) now supports additional deployment regions; Looker (Google Cloud core) now supports additional deployment regions.

## Extended Definition

Looker (Google Cloud core) now supports additional deployment regions; Looker (Google Cloud core) now supports additional deployment regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)

## Supporting Pages

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- The Looker Action Hub must be able to send and receive API requests in the following ways: From the Looker instance to the Looker Action Hub network From the Looker user's browser to the Looker Action Hub network From the Looker Action Hub network to the Looker instance If your Looker deployment cannot accommodate these requests or if the IP Allowlist feature is enabled on your Looker instance, consider setting up a local action hub server to serve private Looker integrations or custom actions .
- If you're using a Looker (Google Cloud core) instance that has an IP allowlist configured, the Link Google services with this instance checkbox must be selected on the Details tab of the instance's Instance page in the Google Cloud console in order to connect to Looker Action Hub.
- For example: Authorization: Token token="abcdefg123456789" Set your action hub secret using the secret key: heroku config:set ACTION HUB SECRET="abcdefg123456789" Customer-hosted deployments may require configuration of additional environment variables not documented here.

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- What's next This Quickstart covered how to create a Standard Looker (Google Cloud core) instance that uses a public secure network connection and Google-managed encryption and that requires no deferred or denied maintenance windows and no additional users beyond the default number that is provided for a Standard edition.
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you can create an instance, you need to complete these steps for the Google Cloud project in which you want to create the Looker (Google Cloud core) instance: Work with Sales to ensure that your annual contract is completed and that you have quota allocated in your project.
- Create the Looker (Google Cloud core) instance To create a Looker (Google Cloud core) instance that uses default configuration settings, follow these steps: Click Go to Looker (Google Cloud core) and select the Google Cloud project in which you want to create the Looker (Google Cloud core) instance, if it is not already pre-selected.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- What's next Use Google OAuth for Looker (Google Cloud core) user authentication Manage users within Looker (Google Cloud core) Configure a Looker (Google Cloud core) instance Looker (Google Cloud core) admin settings Administer a Looker (Google Cloud core) instance from the Google Cloud console Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Looker IAM roles: These kinds of roles govern the following abilities: Users' capabilities within the Google Cloud console with regard to Looker (Google Cloud core) When used together with OAuth , they also govern the following abilities: Users' abilities to sign in to a Looker (Google Cloud core) instance Whether or not users are automatically assigned the Admin via IAM Looker role once they sign in to a Looker (Google Cloud core) instance.
- Required role To get the permissions that you need to assign Looker (Google Cloud core) IAM roles, ask your administrator to grant you the Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) IAM role on the project in which the instance was created.

