---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.488Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "In-place major version upgrade"
feature_slug: "in-place-major-version-upgrade"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "place"
  - "major"
  - "version"
  - "upgrade"
  - "alloydb"
  - "supports"
  - "upgrades"
  - "clusters"
---

# In-place major version upgrade

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports in-place major version upgrades of clusters to higher supported PostgreSQL versions; AlloyDB supports in-place major version upgrades to PostgreSQL 16 from PostgreSQL 14 or 15.

## Extended Definition

AlloyDB supports in-place major version upgrades of clusters to higher supported PostgreSQL versions; AlloyDB supports in-place major version upgrades to PostgreSQL 16 from PostgreSQL 14 or 15.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- We plan to support AlloyDB for PostgreSQL compatibility with any one major PostgreSQL major version for at least as long as the PostgreSQL community supports that same major version—that is, no less than five years.
- We plan to support AlloyDB Omni compatibility with any one major PostgreSQL version for at least as long as the PostgreSQL community supports that same major version—that is, no less than five years.
- Any AlloyDB cluster still running the deprecated major database version at the end of the 12-month period is automatically upgraded.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : apps/v1 kind : Deployment metadata : name : < YOUR-DEPLOYMENT-NAME > spec : selector : matchLabels : app : < YOUR-APPLICATION-NAME > template : metadata : labels : app : < YOUR-APPLICATION-NAME > spec : serviceAccountName : < YOUR-KSA-NAME > containers : Your application container goes here. - name : < YOUR-APPLICATION-NAME > image : < YOUR-APPLICATION-IMAGE-URL > env : - name : DB HOST The port value here (5432) should match the --port flag below. value : "localhost:5342" - name : DB USER valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : username - name : DB PASS valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : password - name : DB NAME valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : database The Auth Proxy sidecar goes here. - name : alloydb-auth-proxy Make sure you have automation that upgrades this version regularly.
- To configure service access using the allocated IP range, run the following command: gcloud services vpc-peerings connect \ --service = servicenetworking.googleapis.com \ --ranges = IP RANGE NAME \ --network = default To deploy the AlloyDB cluster, run the following command: gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = CLUSTER PASSWORD \ --network = default \ --region = REGION \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- To send your request, save the request body in a file named cluster request.json : { "databaseVersion" : "<var>DATABASE VERSION</var>" , "initialUser" : { "user" : "<var>INITIAL USERNAME</var>" , "password" : "<var>INITIAL USER PASSWORD</var>" }, "labels" : { "test" : "alloydb-cluster-full" } } Make the following replacements: DATABASE VERSION : enum string of the database version—for example, POSTGRES 17 .
- Use the following HTTP method and URL: POST https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID Make the following replacements: PROJECT ID : the ID of the project where you want the cluster located.
- Use the following HTTP method and URL: POST https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID Make the following replacements: PROJECT ID : the ID of the project where you want the cluster located.

