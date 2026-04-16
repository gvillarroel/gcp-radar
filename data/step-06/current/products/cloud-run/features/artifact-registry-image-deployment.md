---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.610Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Artifact Registry image deployment"
feature_slug: "artifact-registry-image-deployment"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously"
  - "https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query"
  - "https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build"
keywords:
  - "registry"
  - "artifact"
  - "deploying"
  - "deployment"
  - "image"
  - "container"
  - "supports"
---

# Artifact Registry image deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports deploying container images from Artifact Registry.

## Extended Definition

Cloud Run supports deploying container images from Artifact Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)
- [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)

## Supporting Pages

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API If you select the Developer Connect option, enable the Developer Connect API: Enable the API Required roles To get the permissions that you need to deploy Cloud Run services from Git using Cloud Build or Developer Connect, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Developer ( roles/run.developer ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) The service account running the build must have the following roles: Cloud Build Service Account ( roles/cloudbuild.builds.builder ) Cloud Run Admin ( roles/run.admin ) Service Account User ( roles/iam.serviceAccountUser ) If you select the Developer Connect option: Developer Connect Read Token Accessor ( roles/developerconnect.readTokenAccessor ) If you are connecting to GitLab or Bitbucket repositories: Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor ) For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- When you are finished configuring your service, click Create to deploy the image to Cloud Run and wait for the deployment to finish.
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- Set up continuous deployment from the Cloud Run console The setup procedure varies slightly depending on whether you are setting up continuous deployment on a new service or on an existing service.

### "Quickstart: Deploy to Cloud Run from a Git repository \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, you might still be charged for storing the container image in Artifact Registry .
- What's next Quickstart: Build and deploy Continuous deployment with Cloud Build Building containers using Buildpacks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To delete Artifact Registry repositories, follow the steps in Delete repositories in the Artifact Registry documentation.
- Success: You deployed a container image from a Git repository to Cloud Run.

### "Create a Cloud Run function that uses BigQuery to submit a query and return\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The sample submits a query for words that occur at least 400 times in the specified dataset, and returns the result. // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); const functions = require ( '@google-cloud/functions-framework' ); / HTTP Cloud Function that returns BigQuery query results @param {Object} req Cloud Function request context. @param {Object} res Cloud Function response context. / functions . http ( 'helloBigQuery' , async ( req , res ) = > { // Define the SQL query // Queries the public Shakespeare dataset using named query parameter const sqlQuery = SELECT word, word count FROM \bigquery-public-data.samples.shakespeare\ WHERE corpus = @corpus AND word count >= @min word count ORDER BY word count DESC ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , params : { corpus : 'romeoandjuliet' , min word count : 400 }, }; // Execute the query try { const [ rows ] = await bigquery . query ( options ); // Send the results res . status ( 200 ). send ( rows ); } catch ( err ) { console . error ( err ); res . status ( 500 ). send ( Error querying BigQuery: ${ err } ); } }); Deploy the function To deploy the function with an HTTP trigger: Run the following command in the directory that contains the sample code: gcloud run deploy FUNCTION \ --source . \ --function FUNCTION ENTRYPOINT \ --base-image BASE IMAGE \ --region REGION \ --allow-unauthenticated Replace: FUNCTION with the name of the function you are deploying, for example my-bigquery-function .
- Costs In this document, you use the following billable components of Google Cloud: Artifact Registry Cloud Build Cloud Run To generate a cost estimate based on your projected usage, use the pricing calculator .
- Enable the Artifact Registry, Cloud Run Admin API, and Cloud Build APIs.
- For details about base images and the packages included in each image, see Runtimes base images .

