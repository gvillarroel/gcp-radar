---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.517Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Cross-project service account deployment"
feature_slug: "cross-project-service-account-deployment"
latest_feature_date: "2022-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/authentication"
  - "https://docs.cloud.google.com/workflows/docs/troubleshooting"
keywords:
  - "deploy"
  - "cross"
  - "deployment"
  - "project"
  - "account"
  - "console"
---

# Cross-project service account deployment

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console and Google Cloud CLI can deploy a workflow using a cross-project service account.

## Extended Definition

The Google Cloud console and Google Cloud CLI can deploy a workflow using a cross-project service account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/authentication](https://docs.cloud.google.com/workflows/docs/authentication)
- [https://docs.cloud.google.com/workflows/docs/troubleshooting](https://docs.cloud.google.com/workflows/docs/troubleshooting)

## Supporting Pages

### Grant a workflow permission to access Google Cloud resources | Workflows | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/authentication](https://docs.cloud.google.com/workflows/docs/authentication)
- Source ID: `feature-recovery-direct-http`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- If the service account and the workflow resources are in different projects, from the project where the service account is located, complete the following: In the Google Cloud console, go to the Organization policies page: Go to Organization policies Check the organization policy for the project and ensure that the iam.disableCrossProjectServiceAccountUsage boolean constraint is not enforced for the project.
- Deploy a workflow with a cross-project service account By default, you cannot create a service account in one project and attach it to a resource in another project.
- You can then use the service account across different projects to deploy a workflow.
- Deploy your workflow using the cross-project service account.

### "Grant a workflow permission to access Google Cloud resources \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/authentication](https://docs.cloud.google.com/workflows/docs/authentication)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the service account and the workflow resources are in different projects, from the project where the service account is located, complete the following: In the Google Cloud console, go to the Organization policies page: Go to Organization policies Check the organization policy for the project and ensure that the iam.disableCrossProjectServiceAccountUsage boolean constraint is not enforced for the project.
- Deploy a workflow with a cross-project service account By default, you cannot create a service account in one project and attach it to a resource in another project.
- You can then use the service account across different projects to deploy a workflow.
- Deploy your workflow using the cross-project service account.

### Troubleshoot issues \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/troubleshooting](https://docs.cloud.google.com/workflows/docs/troubleshooting)
- Source ID: `site-docs-reference-required-2`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cross-project service account permission errors If you receive a PERMISSION DENIED error when attempting to use a cross-project service account to deploy a workflow, ensure that the iam.disableCrossProjectServiceAccountUsage boolean constraint is not enforced for your project and that you have correctly set up the service account.
- For more information, see Deploy a workflow with a cross-project service account .
- Console When a deployment error occurs, Workflows displays the error message in a banner on the Edit workflow page: The error message flags the problem in the source code, specifying the origin of the error when possible: Could not deploy workflow: failed to build: error in step step2: error evaluating return value: symbol 'varC' is neither a variable nor a sub-workflow name (Code: 3) gcloud When you run the gcloud workflows deploy command, Workflows returns an error message to the command line if the deployment fails.
- The most common types of deployment errors are: Referencing an undefined variable, step, or subworkflow Incorrect syntax Incorrect indentation Missing or extraneous { , } , " , - , or : For example, the following source code throws a deployment error because the return statement references an undefined variable, varC : - step1 : assign : - varA : "Hello" - varB : "World" - step2 : return : ${varC + varB} This incorrect source code is used in the following Google Cloud console and gcloud CLI examples.

