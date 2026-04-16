---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.325Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine flexible environment app.yaml configuration migration to env:true"
feature_slug: "app-engine-flexible-environment-app-yaml-configuration-migration-to-env-true"
latest_feature_date: "2016-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "yaml"
  - "configuration"
  - "migration"
  - "env"
---

# App Engine flexible environment app.yaml configuration migration to env:true

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

New App Engine flexible environment applications now use env: true in app.yaml instead of vm: true, with existing applications supported temporarily.

## Extended Definition

New App Engine flexible environment applications now use env: true in app.yaml instead of vm: true, with existing applications supported temporarily.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- For more information, see: https://cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 Depending on the complexity of your app's service, you might only need to define a few elements in the corresponding app.yaml file.
- See the License for the specific language governing permissions and limitations under the License. runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : ubuntu24 runtime version : 3.12 This sample incurs costs to run on the App Engine flexible environment.
- The following example demonstrates what a simple Python app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.flexible.yaml All configuration elements For a complete list of all the supported elements in this configuration file, see the app.yaml reference .
- The following example demonstrates what a simple Custom Runtime app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- The following example demonstrates what a simple .NET app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- For more information, see .NET runtime . runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.

