---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.758Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "URL path passthrough for /form"
feature_slug: "url-path-passthrough-for-form"
latest_feature_date: "2016-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
keywords:
  - "url"
  - "path"
  - "passthrough"
  - "form"
  - "now"
  - "allowed"
  - "forwarded"
  - "applications"
---

# URL path passthrough for /form

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The URL path "/form" is now allowed and is forwarded to applications.

## Extended Definition

The URL path "/form" is now allowed and is forwarded to applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Everything after the end of the matched url pattern is appended to static dir to form the full path to the requested file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For more information about the possible MIME media types, see the IANA MIME Media Types website . redirect http response code Optional. redirect http response code is used with the secure setting to set the HTTP response code returned when performing a redirect required by how the secure setting is configured. redirect http response code element has the following possible values: 301 Moved Permanently response code.
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- Using SMTP To enable mail support with an SMTP server, invoke dev appserver.py as follows:: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --smtp host=smtp.example.com --smtp port=25 \ --smtp user=ajohnson --smtp password=k1tt3ns [PATH TO YOUR APP] where you set the --smtp host , --smtp port , --smtp user and --smtp password options with your own values.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- Using SMTP To enable mail support with an SMTP server, invoke dev appserver.py as follows:: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --smtp host=smtp.example.com --smtp port=25 \ --smtp user=ajohnson --smtp password=k1tt3ns [PATH TO YOUR APP] where you set the --smtp host , --smtp port , --smtp user and --smtp password options with your own values.

