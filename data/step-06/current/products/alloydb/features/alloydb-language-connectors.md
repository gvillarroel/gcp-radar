---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.516Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Language Connectors"
feature_slug: "alloydb-language-connectors"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/connect-iam"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "alloydb"
  - "language"
  - "connectors"
  - "provide"
  - "mutual"
  - "tls"
  - "iam"
  - "based"
---

# AlloyDB Language Connectors

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Language Connectors provide mutual TLS, IAM-based authorization, and automatic IAM authentication for connections; AlloyDB Language Connectors are client libraries that provide mutual TLS, IAM-based authorization, and automatic IAM authentication.

## Extended Definition

AlloyDB Language Connectors provide mutual TLS, IAM-based authorization, and automatic IAM authentication for connections; AlloyDB Language Connectors are client libraries that provide mutual TLS, IAM-based authorization, and automatic IAM authentication.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authenticate automatically To automatically authenticate an IAM-based AlloyDB user without the need for an OAuth 2.0 token, you have two options: AlloyDB Auth Proxy and AlloyDB Language Connectors .
- There is a corresponding option for each language on Configure the AlloyDB Language Connectors .
- For example, if you run your workload using the IAM user account kai@altostrat.com , then you can use the proxy client or Language Connectors to automatically authenticate the kai@altostrat.com database user without specifying an OAuth 2.0 token.
- Troubleshoot IAM authentication To determine the cause of a failed IAM-based authentication attempt, follow these steps: In the Google Cloud console, go to the Logs Explorer page: Go to Logs Explorer Under Resource type , click AlloyDB instance .

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-reference-required-8`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To associate a column with a concept type, run the following query: SELECT alloydb ai nl . associate concept type ( column names in = > 'my schema.country.country name' , concept type in = > 'country name' , nl config id in = > 'my app config' ); To create a value index based on all the columns that are part of a natural language config and are associated with a concept type, run the following statement: SELECT alloydb ai nl . create value index ( nl config id in = > 'my app config' ); When you associate concept types to new columns, refresh the value index to reflect the changes.
- To add general context for application-specific rules and application or domain-specific terminology, follow these steps: To add a general context item for the specified configuration, run the following query: SELECT alloydb ai nl . g manage configuration ( 'add general context' , 'my app config' , general context in = > '{"If the user asks for a good seat, assume that means a window or aisle seat."}' ); The preceding statement helps AlloyDB AI natural language provide higher quality responses to users' natural language questions.
- To autogenerate, review, and apply templates, follow these steps: Request AlloyDB to generate templates based on your query history: SELECT alloydb ai nl . generate templates ( 'my app config' , ); Use the provided view, alloydb ai nl.generated templates view , to review the generated templates .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Generate SQL queries using natural language questions Stay organized with collections Save and categorize content based on your preferences.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : apps/v1 kind : Deployment metadata : name : < YOUR-DEPLOYMENT-NAME > spec : selector : matchLabels : app : < YOUR-APPLICATION-NAME > template : metadata : labels : app : < YOUR-APPLICATION-NAME > spec : serviceAccountName : < YOUR-KSA-NAME > containers : Your application container goes here. - name : < YOUR-APPLICATION-NAME > image : < YOUR-APPLICATION-IMAGE-URL > env : - name : DB HOST The port value here (5432) should match the --port flag below. value : "localhost:5342" - name : DB USER valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : username - name : DB PASS valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : password - name : DB NAME valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : database The Auth Proxy sidecar goes here. - name : alloydb-auth-proxy Make sure you have automation that upgrades this version regularly.
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- To grant alloydb.client and serviceusage.serviceUsageConsumer roles to your application GSA, use the following commands: gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com --role = "roles/alloydb.client" gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com --role = "roles/serviceusage.serviceUsageConsumer" Configure Workload Identity Federation for GKE for the sample application You need to configure GKE to provide the service account to the AlloyDB Auth Proxy using the Workload Identity Federation for GKE feature.

