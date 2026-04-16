---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.143Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Password policies for local database users"
feature_slug: "password-policies-for-local-database-users"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
keywords:
  - "local"
  - "password"
  - "users"
  - "policies"
  - "database"
  - "lets"
---

# Password policies for local database users

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you enforce password policies for local database users.

## Extended Definition

AlloyDB lets you enforce password policies for local database users.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)

## Supporting Pages

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to use the AlloyDB for PostgreSQL MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the AlloyDB for PostgreSQL MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Create an AlloyDB instance: AlloyDB Admin ( roles/alloydb.admin ) Create an AlloyDB user: AlloyDB Admin ( roles/alloydb.admin ) Execute SQL queries in AlloyDB: AlloyDB Admin ( roles/alloydb.admin ) Studio Query User ( roles/databasesconsole.studioQueryUser ) Get a AlloyDB instance or list all AlloyDB instances in a project: AlloyDB Viewer ( roles/alloydb.viewer ) List AlloyDB users: AlloyDB Viewer ( roles/alloydb.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Inspection : For each instance identified, the agent calls get instance to fetch detailed configuration metadata, such as the database version, region, and machine type, and calls list users to check the database users on the instance.
- AlloyDB has the following MCP tool OAuth scopes: Scope URI for gcloud CLI Description https://www.googleapis.com/auth/cloud-platform Create, update, and list AlloyDB resources including clusters, instances, and database users.
- Sample prompt : List all the PostgreSQL instances in my project and show me their details to verify that they're using the same configuration and that the most recent list database users has been successfully updated.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : apps/v1 kind : Deployment metadata : name : < YOUR-DEPLOYMENT-NAME > spec : selector : matchLabels : app : < YOUR-APPLICATION-NAME > template : metadata : labels : app : < YOUR-APPLICATION-NAME > spec : serviceAccountName : < YOUR-KSA-NAME > containers : Your application container goes here. - name : < YOUR-APPLICATION-NAME > image : < YOUR-APPLICATION-IMAGE-URL > env : - name : DB HOST The port value here (5432) should match the --port flag below. value : "localhost:5342" - name : DB USER valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : username - name : DB PASS valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : password - name : DB NAME valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : database The Auth Proxy sidecar goes here. - name : alloydb-auth-proxy Make sure you have automation that upgrades this version regularly.
- Console In your open Cloud Shell, use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD gcloud Use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD Deploy and run the AlloyDB Proxy in a sidecar pattern We recommend that you run the AlloyDB Proxy in a sidecar pattern as an additional container sharing a Pod with your application for the following reasons: Prevents your SQL traffic from being exposed locally.
- You use this information in Create a Kubernetes secret . gcloud To create an AlloyDB database user, run the following command in the Cloud Shell: gcloud alloydb users create USERNAME \ --cluster = CLUSTER ID \ --region = REGION \ --password = DATABASE PASSWORD Replace the following: USERNAME : the name of the AlloyDB user, such as tutorial user .
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PUBLIC , # Optionally use IPTypes.PRIVATE ) Weaviate from langchain google alloydb pg import AlloyDBEngine alloydb engine = await AlloyDBEngine . afrom instance ( project id = project id , region = region , cluster = cluster , instance = instance , database = db name , user = db user , password = db pwd , ip type = IPTypes .
- PUBLIC , ) Chroma from langchain google alloydb pg import AlloyDBEngine alloydb engine = await AlloyDBEngine . afrom instance ( project id = project id , region = region , cluster = cluster , instance = instance , database = db name , user = db user , password = db pwd , ip type = IPTypes .
- PUBLIC , ) Qdrant from langchain google alloydb pg import AlloyDBEngine alloydb engine = await AlloyDBEngine . afrom instance ( project id = project id , region = region , cluster = cluster , instance = instance , database = db name , user = db user , password = db pwd , ip type = IPTypes .
- PUBLIC , ) Milvus from langchain google alloydb pg import AlloyDBEngine alloydb engine = await AlloyDBEngine . afrom instance ( project id = project id , region = region , cluster = cluster , instance = instance , database = db name , user = db user , password = db pwd , ip type = IPTypes .

