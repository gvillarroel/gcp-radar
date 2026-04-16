---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.537Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni 2 GB memory requirement"
feature_slug: "alloydb-omni-2-gb-memory-requirement"
latest_feature_date: "2023-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
keywords:
  - "alloydb"
  - "omni"
  - "gb"
  - "memory"
  - "requirement"
  - "version"
  - "preview"
  - "postgresql"
---

# AlloyDB Omni 2 GB memory requirement

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni version alloydb-omni-0.2.0-preview-postgresql-14.4 reduces the memory requirement to 2 GB of RAM.

## Extended Definition

AlloyDB Omni version alloydb-omni-0.2.0-preview-postgresql-14.4 reduces the memory requirement to 2 GB of RAM.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)

## Supporting Pages

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- AlloyDB and AlloyDB Omni version policies AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni , which you install and run on your own computing environment, have related but distinct versioning policies as described in this section.
- We plan to support AlloyDB Omni compatibility with any one major PostgreSQL version for at least as long as the PostgreSQL community supports that same major version—that is, no less than five years.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : apps/v1 kind : Deployment metadata : name : < YOUR-DEPLOYMENT-NAME > spec : selector : matchLabels : app : < YOUR-APPLICATION-NAME > template : metadata : labels : app : < YOUR-APPLICATION-NAME > spec : serviceAccountName : < YOUR-KSA-NAME > containers : Your application container goes here. - name : < YOUR-APPLICATION-NAME > image : < YOUR-APPLICATION-IMAGE-URL > env : - name : DB HOST The port value here (5432) should match the --port flag below. value : "localhost:5342" - name : DB USER valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : username - name : DB PASS valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : password - name : DB NAME valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : database The Auth Proxy sidecar goes here. - name : alloydb-auth-proxy Make sure you have automation that upgrades this version regularly.
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CALL google ml . create model ( model id = > 'gemini-2.5-flash-lite-global' , model type = > 'llm' , model provider = > 'google' , model qualified name = > 'gemini-2.5-flash-lite' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-2.5-flash-lite:generateContent' , model auth type = > 'alloydb service agent iam' ); Use Gemini 3.0 models Some Gemini models, such as gemini-3.0-pro-preview , are available only through the global endpoint.
- You must register such models as follows: CALL google ml . create model ( model id = > 'gemini-3-preview-model' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-3-pro-preview:generateContent' , model qualified name = > 'gemini-3-pro-preview' , model provider = > 'google' , model type = > 'llm' , model auth type = > 'alloydb service agent iam' ); Replace PROJECT ID with the ID of the project where the Vertex AI model is available.
- For more information, see Configure an instance's database flags . gcloud alloydb instances update INSTANCE ID \ --database-flags google ml integration.enable ai query engine=on \ --region= REGION ID \ --cluster= CLUSTER ID \ --project= PROJECT ID Use a Gemini model that's supported in your region If your AlloyDB for PostgreSQL cluster is in a region where gemini-2.5-flash-lite isn't supported, you can use one of the other available Gemini models in your region using the model id parameter .
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.

