---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.135Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Persistent admin password secret"
feature_slug: "persistent-admin-password-secret"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
keywords:
  - "persistent"
  - "secret"
  - "longer"
  - "password"
  - "admin"
  - "omni"
---

# Persistent admin password secret

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni no longer deletes the admin password secret after cluster creation when you specify it.

## Extended Definition

AlloyDB Omni no longer deletes the admin password secret after cluster creation when you specify it.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : apps/v1 kind : Deployment metadata : name : < YOUR-DEPLOYMENT-NAME > spec : selector : matchLabels : app : < YOUR-APPLICATION-NAME > template : metadata : labels : app : < YOUR-APPLICATION-NAME > spec : serviceAccountName : < YOUR-KSA-NAME > containers : Your application container goes here. - name : < YOUR-APPLICATION-NAME > image : < YOUR-APPLICATION-IMAGE-URL > env : - name : DB HOST The port value here (5432) should match the --port flag below. value : "localhost:5342" - name : DB USER valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : username - name : DB PASS valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : password - name : DB NAME valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : database The Auth Proxy sidecar goes here. - name : alloydb-auth-proxy Make sure you have automation that upgrades this version regularly.
- Console In your open Cloud Shell, use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD gcloud Use a Kubernetes SECRET , such as gke-alloydb-secret to store the connection information: kubectl create secret generic SECRET \ --from-literal = database = DATABASE NAME \ --from-literal = username = USERNAME \ --from-literal = password = DATABASE PASSWORD Deploy and run the AlloyDB Proxy in a sidecar pattern We recommend that you run the AlloyDB Proxy in a sidecar pattern as an additional container sharing a Pod with your application for the following reasons: Prevents your SQL traffic from being exposed locally.

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- DB PWD : the database secret password.
- DB PWD : the database secret password.
- DB PWD : the database secret password.
- DB PWD : the database secret password.

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to use the AlloyDB for PostgreSQL MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the AlloyDB for PostgreSQL MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Create an AlloyDB instance: AlloyDB Admin ( roles/alloydb.admin ) Create an AlloyDB user: AlloyDB Admin ( roles/alloydb.admin ) Execute SQL queries in AlloyDB: AlloyDB Admin ( roles/alloydb.admin ) Studio Query User ( roles/databasesconsole.studioQueryUser ) Get a AlloyDB instance or list all AlloyDB instances in a project: AlloyDB Viewer ( roles/alloydb.viewer ) List AlloyDB users: AlloyDB Viewer ( roles/alloydb.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- REGION .rep.googleapis.com/mcp Transport : HTTP Authentication details : Depending on how you want to authenticate, you can enter your Google Cloud credentials, your OAuth Client ID and secret, or an agent identity and credentials.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

