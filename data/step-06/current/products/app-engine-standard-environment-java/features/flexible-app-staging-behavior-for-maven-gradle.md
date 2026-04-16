---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.899Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Flexible app staging behavior for Maven/Gradle"
feature_slug: "flexible-app-staging-behavior-for-maven-gradle"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml"
keywords:
  - "flexible"
  - "app"
  - "staging"
  - "behavior"
  - "maven"
  - "gradle"
  - "apps"
  - "now"
---

# Flexible app staging behavior for Maven/Gradle

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Staging flexible apps with Maven/Gradle now copies only app.yaml into build/target, with deployment config files expected from src/main/appengine.

## Extended Definition

Staging flexible apps with Maven/Gradle now copies only app.yaml into build/target, with deployment config files expected from src/main/appengine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .
- Here is how you would make your static file handler return that required response header value: handlers : - url : /images static dir : static/images http headers : Access-Control-Allow-Origin : https://mygame.uc.r.appspot.com ...
- The following table lists the subelements of the handlers element that control the behavior for static files, static directories, scripts in runtimes other than Node.js, and other settings.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .
- Here is how you would make your static file handler return that required response header value: handlers : - url : /images static dir : static/images http headers : Access-Control-Allow-Origin : https://mygame.uc.r.appspot.com ...
- The following table lists the subelements of the handlers element that control the behavior for static files, static directories, scripts in runtimes other than Node.js, and other settings.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The App Engine Maven plugin will create a correct target/appengine-staging directory containing your JAR artifacts and this app.yaml file, ready for deployment.
- The following is a sample Maven project structure: MyDir/ pom.xml [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml java/com.example.mycode/ MyCode.java If you have more than one JAR file in your project directory or want to specify a custom entrypoint, you must specify it in the entrypoint element of your app.yaml file.
- For a Maven project, the standard location for app.yaml file is under the src/main/appengine directory.

