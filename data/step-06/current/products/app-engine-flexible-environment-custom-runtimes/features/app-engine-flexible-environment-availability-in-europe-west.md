---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.563Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine flexible environment availability in europe-west"
feature_slug: "app-engine-flexible-environment-availability-in-europe-west"
latest_feature_date: "2017-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible"
  - "https://docs.cloud.google.com/appengine/docs/flexible/overview"
keywords:
  - "EU west flex availability"
  - "App Engine flex in europe-west"
  - "flex in europe-west"
  - "flex region rollout"
  - "europe-west region"
  - "App Engine flexible launch"
  - "flexible environment availability"
  - "App Engine flexible environment"
---

# App Engine flexible environment availability in europe-west

Product: App Engine flexible environment custom runtimes
Coverage: LOW

## Step 02 Summary

The App Engine flexible environment became available in the europe-west region.

## Extended Definition

The available evidence only confirms that App Engine flexible environment is selected by configuring `env: flex` in `app.yaml` (as shown in the Go quickstart), which deploys the app to Google’s App Engine flexible environment. This environment runs on Compute Engine virtual machines and supports flexible/custom runtime and container-based deployments, but the provided excerpts do not explicitly document a region-specific (europe-west) launch or availability date.

## Evidence Summary

The cited Google Cloud documentation pages define how to deploy to App Engine flexible (`env: flex`) and describe its VM-based, customizable runtime capabilities, but they do not provide region-specific rollout evidence for europe-west.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible](https://docs.cloud.google.com/appengine/docs/flexible)
- [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)

## Supporting Pages

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- See the License for the specific language governing permissions and limitations under the License. runtime : go env : flex runtime config : operating system : 'ubuntu22' runtime version : 1.25 This sample incurs costs to run on the App Engine flexible environment.
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the helloworld directory: gcloud app deploy Learn about the optional flags .
- Fprint ( w , "Hello world!" ) } app.yaml The app.yaml file describes the following configuration for your app: Sets env: flex , indicating your app uses the App Engine flexible environment .

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible](https://docs.cloud.google.com/appengine/docs/flexible)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- You can specify how much CPU and memory each instance of your application needs, and the App Engine flexible environment provisions the necessary infrastructure for you.
- Based on Compute Engine , the App Engine flexible environment automatically scales your app up and down while also balancing the load.

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- You can specify how much CPU and memory each instance of your application needs, and the App Engine flexible environment provisions the necessary infrastructure for you.
- Based on Compute Engine , the App Engine flexible environment automatically scales your app up and down while also balancing the load.

