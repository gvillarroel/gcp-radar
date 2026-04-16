---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.506Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Firestore integration"
feature_slug: "firestore-integration"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "firestore"
  - "database"
  - "integrations"
  - "integration"
  - "connect"
  - "lets"
---

# Firestore integration

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Firestore integration lets Cloud Run services connect to a Firestore database using integrations.

## Extended Definition

Firestore integration lets Cloud Run services connect to a Firestore database using integrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Essential integrations include: Data storage Cloud Run integrates with Cloud SQL (managed MySQL, PostgreSQL, and SQL Server), Memorystore (managed Redis and Memcached), Firestore, Spanner, Cloud Storage, and more.
- Google Cloud integrations Cloud Run integrates with the broader ecosystem of Google Cloud, which lets you to build full-featured applications.
- Example use cases include: Websites and web applications Build your web app using your favorite stack, access your SQL database, and render dynamic HTML pages.
- This is how your service can connect with Compute Engine virtual machines, or products based on Compute Engine such as Google Kubernetes Engine or Memorystore.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , # e.g. "my-database-user" password = db pass , # e.g. "my-database-password" database = db name , # e.g. "my-database-name" query = { "unix sock" : f " { db socket dir } / { cloud sql connection name } /.s.PGSQL.5432" e.g. "/cloudsql", "<PROJECT-NAME>:<INSTANCE-REGION>:<INSTANCE-NAME>" }, ), db config , ) pool . dialect . description encoding = None logger . info ( "Database engine initialized from unix connection" ) return pool Java Use the Spring Cloud Google Cloud PostgreSQL starter integration to interact with your PostgreSQL databases in Cloud SQL using Spring JDBC libraries.
- Deploying the service Follow the steps to complete infrastructure provisioning and deployment: Create a Cloud SQL instance with postgreSQL database using the console or CLI: gcloud sql instances create CLOUD SQL INSTANCE NAME \ --database-version = POSTGRES 16 \ --region = CLOUD SQL REGION \ --cpu = 2 \ --memory = 7680MB \ --root-password = DB PASSWORD Add your Cloud SQL credential values to postgres-secrets.json : Node.js { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Python { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Java { "spring.cloud.gcp.sql.instance-connection-name" : "PROJECT ID:REGION:INSTANCE" , "spring.cloud.gcp.sql.database-name" : "postgres" , "spring.datasource.username" : "postgres" , "spring.datasource.password" : "PASSWORD SECRET" } Create a versioned secret using the console or CLI: gcloud secrets create idp-sql-secrets \ --replication-policy = "automatic" \ --data-file = postgres-secrets.json Create a service account for the server using the console or CLI: gcloud iam service-accounts create idp-sql-identity Grant roles for Secret Manager and Cloud SQL access using the console or CLI: Allow the service account associated with the server to access the created secret: gcloud secrets add-iam-policy-binding idp-sql-secrets \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Allow the service account associated with the server to access Cloud SQL: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/cloudsql.client Create an Artifact Registry: gcloud artifacts repositories create REPOSITORY \ --repository-format docker \ --location REGION REPOSITORY is the name of the repository.
- Uncomment and add env vars for local development spring . datasource . username = $ { DB USER } spring . datasource . password = $ { DB PASSWORD } spring . cloud . gcp . sql . database - name = $ { DB NAME } spring . cloud . gcp . sql . instance - connection - name = $ { CLOUD SQL CONNECTION NAME } private final JdbcTemplate jdbcTemplate ; public VoteController ( JdbcTemplate jdbcTemplate ) { this . jdbcTemplate = jdbcTemplate ; } Handling sensitive configuration with Secret Manager Secret Manager provides centralized and secure storage of sensitive data such as Cloud SQL configuration.
- DB SOCKET PATH '/cloudsql' ; // Establish a connection to the database return Knex ({ client : 'pg' , connection : { user : credConfig .

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Prepare your network for Cloud SQL with a private IP address. gcloud compute addresses create google-managed-services-default \ --global \ --purpose=VPC PEERING \ --prefix-length=16 \ --description="peering range for CloudSQL Private Service Access" \ --network=default gcloud services vpc-peerings connect \ --service=servicenetworking.googleapis.com \ --ranges=google-managed-services-default \ --network=default \ --project= PROJECT ID Create an environment variable called CLOUDSQL DB NAME to hold the name of the database instance that you create in the next step: export CLOUDSQL DB NAME=tasks-db Create the database: gcloud sql instances create $CLOUDSQL DB NAME \ --cpu=1 \ --memory=4352Mib \ --database-version=POSTGRES 15 \ --region=us-central1 \ --network default \ --no-assign-ip The instance might take a few minutes to initialize.
- The connection information string has the following format: " dbname = DATABASE NAME host = FQDN port =5432 user = USER NAME password = PASSWORD STRING sslmode =require" You need the values shown in the connection string in the next step.
- How Cloud Run accesses the Cloud SQL database Just as the web app deployed to Heroku needs to connect to the managed instance of Heroku Postgres, Cloud Run requires access to Cloud SQL in order to be able to read and write data.

