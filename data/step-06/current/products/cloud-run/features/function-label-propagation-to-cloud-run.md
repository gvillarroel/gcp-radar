---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.900Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Function label propagation to Cloud Run"
feature_slug: "function-label-propagation-to-cloud-run"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build"
keywords:
  - "function"
  - "label"
  - "propagation"
  - "to"
  - "run"
  - "labels"
  - "set"
  - "for"
---

# Function label propagation to Cloud Run

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Labels set for Cloud Run functions through gcloud functions commands or the Cloud Functions v2 API propagate to Cloud Run deployments.

## Extended Definition

Labels set for Cloud Run functions through gcloud functions commands or the Cloud Functions v2 API propagate to Cloud Run deployments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)

## Supporting Pages

### "Create a Cloud Run function that uses BigQuery to submit a query and return\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The sample submits a query for words that occur at least 400 times in the specified dataset, and returns the result. // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); const functions = require ( '@google-cloud/functions-framework' ); / HTTP Cloud Function that returns BigQuery query results @param {Object} req Cloud Function request context. @param {Object} res Cloud Function response context. / functions . http ( 'helloBigQuery' , async ( req , res ) = > { // Define the SQL query // Queries the public Shakespeare dataset using named query parameter const sqlQuery = SELECT word, word count FROM \bigquery-public-data.samples.shakespeare\ WHERE corpus = @corpus AND word count >= @min word count ORDER BY word count DESC ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , params : { corpus : 'romeoandjuliet' , min word count : 400 }, }; // Execute the query try { const [ rows ] = await bigquery . query ( options ); // Send the results res . status ( 200 ). send ( rows ); } catch ( err ) { console . error ( err ); res . status ( 500 ). send ( Error querying BigQuery: ${ err } ); } }); Deploy the function To deploy the function with an HTTP trigger: Run the following command in the directory that contains the sample code: gcloud run deploy FUNCTION \ --source . \ --function FUNCTION ENTRYPOINT \ --base-image BASE IMAGE \ --region REGION \ --allow-unauthenticated Replace: FUNCTION with the name of the function you are deploying, for example my-bigquery-function .
- Required roles To get the permissions that you need to deploy Cloud Run services from source, ask your administrator to grant you the following IAM roles: Cloud Run Source Developer ( roles/run.sourceDeveloper ) on your project Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) on the Cloud Run service Service Account User ( roles/iam.serviceAccountUser ) on the service identity BigQuery Job User ( roles/bigquery.jobUser ) on the service identity For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- For Cloud Build to build your sources, ask your administrator to grant Cloud Run Builder ( roles/run.builder ) to the Compute Engine default service account on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/run.builder Replace PROJECT NUMBER with your Google Cloud project number, and PROJECT ID with your Google Cloud project ID.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The server extracts the Identity Platform uid for that user. """ @wraps ( func ) def decorated function ( args : a , kwargs : a ) - > a : header = request . headers . get ( "Authorization" , None ) if header : token = header . split ( " " )[ 1 ] try : decoded token = firebase admin . auth . verify id token ( token ) except Exception as e : logger . exception ( e ) return Response ( status = 403 , response = f "Error with authentication: { e } " ) else : return Response ( status = 401 ) request . uid = decoded token [ "uid" ] return func ( args , kwargs ) return decorated function Java / Extract and verify Id Token from header / private String authenticateJwt ( Map<String , String > headers ) { String authHeader = ( headers . get ( "authorization" ) != null ) ? headers . get ( "authorization" ) : headers . get ( "Authorization" ); if ( authHeader != null ) { String idToken = authHeader . split ( " " ) [ 1 ] ; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token try { FirebaseToken decodedToken = FirebaseAuth . getInstance (). verifyIdToken ( idToken ); String uid = decodedToken . getUid (); return uid ; } catch ( FirebaseAuthException e ) { logger . error ( "Error with authentication: " + e . toString ()); throw new ResponseStatusException ( HttpStatus .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Setting up gcloud defaults To configure gcloud with defaults for your Cloud Run service: Set your default project: gcloud config set project PROJECT ID Replace PROJECT ID with the name of the project you created for this tutorial.
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- For the service selected, click Labels at the top of the page to open the Labels pane.
- See Set or modify labels for setting up the label.
- Enable the API If you select the Developer Connect option, enable the Developer Connect API: Enable the API Required roles To get the permissions that you need to deploy Cloud Run services from Git using Cloud Build or Developer Connect, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Developer ( roles/run.developer ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) The service account running the build must have the following roles: Cloud Build Service Account ( roles/cloudbuild.builds.builder ) Cloud Run Admin ( roles/run.admin ) Service Account User ( roles/iam.serviceAccountUser ) If you select the Developer Connect option: Developer Connect Read Token Accessor ( roles/developerconnect.readTokenAccessor ) If you are connecting to GitLab or Bitbucket repositories: Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor ) For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .

