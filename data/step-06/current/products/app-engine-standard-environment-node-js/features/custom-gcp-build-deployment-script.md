---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.082Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Custom `gcp-build` deployment script"
feature_slug: "custom-gcp-build-deployment-script"
latest_feature_date: "2018-08-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
keywords:
  - "deploy-time build hook"
  - "npm run gcp-build"
  - "`gcp-build` script"
  - "package.json gcp-build"
  - "App Engine deployment script"
  - "custom build step"
  - "custom build hook"
  - "gcp-build"
---

# Custom `gcp-build` deployment script

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine now executes a `gcp-build` script from `package.json` at deployment time as a custom build step.

## Extended Definition

App Engine now executes a `gcp-build` script from `package.json` at deployment time as a custom build step.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step](https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs](https://docs.cloud.google.com/appengine/docs/standard/nodejs)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)

## Supporting Pages

### "Running a custom build step \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step](https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Note the gcp-build script: { "name" : "appengine-typescript" , "description" : "An example TypeScript app running on Google App Engine." , "version" : "0.0.1" , "private" : true , "license" : "Apache Version 2.0" , "author" : "Google Inc." , "engines" : { "node" : "20.x" }, "scripts" : { "prepare" : "npm run gcp-build" , "pretest" : "npm run gcp-build" , "test" : "c8 mocha -p -j 2 test/ .test.js --exit" , "lint" : "gts lint" , "start" : "node ./index.js" , "deploy" : "gcloud app deploy" , "clean" : "gts clean" , "compile" : "tsc -p ." , "fix" : "gts fix" , "build" : "tsc -p ." , "gcp-build" : "tsc -p ." }, "dependencies" : { "@typescript-eslint/parser" : "^8.0.0" , "express" : "^4.16.3" }, "devDependencies" : { "@types/express" : "^4.17.17" , "@types/node" : "^20.0.0" , "c8" : "^10.0.0" , "chai" : "^4.5.0" , "gts" : "^5.0.0" , "mocha" : "^10.2.0" , "typescript" : "^5.0.0" , "wait-port" : "^1.0.0" } } Serving static files When you generate or copy files during the custom build step, App Engine does not serve these static files directly from your app using either the static dir or static files elements defined in the app.yaml file.
- To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .
- Custom build steps can be executed by adding gcp-build in your package.json file.
- After executing your custom build step, App Engine removes and regenerates the node modules folder by only installing the production dependencies declared in the dependencies field of your package.json file.

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- August 10, 2018 Feature Added support for a custom build step: If a script named gcp-build is present in package.json , this script will be executed at deployment time alongside dependencies declared in devDependencies .
- Important : To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs](https://docs.cloud.google.com/appengine/docs/standard/nodejs)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you require additional control over your build steps before starting your application, you can provide a custom build step by adding a gcp-build script to your package.json file.
- To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you require additional control over your build steps before starting your application, you can provide a custom build step by adding a gcp-build script to your package.json file.
- To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .

