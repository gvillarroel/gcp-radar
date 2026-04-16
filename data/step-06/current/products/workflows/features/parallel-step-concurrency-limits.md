---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.514Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Parallel step concurrency limits"
feature_slug: "parallel-step-concurrency-limits"
latest_feature_date: "2023-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/execute-parallel-steps"
  - "https://docs.cloud.google.com/workflows/docs/best-practice"
  - "https://docs.cloud.google.com/workflows/docs/migrate-function-to-parallel"
keywords:
  - "maximum"
  - "limits"
  - "limit"
  - "concurrency"
  - "parallel"
  - "step"
---

# Parallel step concurrency limits

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Workflows can limit the maximum number of concurrent branches or iterations in a parallel step.

## Extended Definition

Workflows can limit the maximum number of concurrent branches or iterations in a parallel step.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/execute-parallel-steps](https://docs.cloud.google.com/workflows/docs/execute-parallel-steps)
- [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- [https://docs.cloud.google.com/workflows/docs/migrate-function-to-parallel](https://docs.cloud.google.com/workflows/docs/migrate-function-to-parallel)

## Supporting Pages

### Execute workflow steps in parallel \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/execute-parallel-steps](https://docs.cloud.google.com/workflows/docs/execute-parallel-steps)
- Source ID: `site-api-reference-required-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- JSON [ { " PARALLEL STEP NAME " : { "parallel" : { "exception policy" : " POLICY " , "shared" : [ " VARIABLE A " , " VARIABLE B " , ... ], "concurrency limit" : " CONCURRENCY LIMIT " , " BRANCHES OR FOR " : ... } } } ] Replace the following: PARALLEL STEP NAME : the name of the parallel step.
- YAML - PARALLEL STEP NAME : parallel : exception policy : POLICY shared : [ VARIABLE A , VARIABLE B , ... ] concurrency limit : CONCURRENCY LIMIT BRANCHES OR FOR : ...
- CONCURRENCY LIMIT (optional): the maximum number of branches and iterations that can concurrently execute within a single workflow execution before further branches and iterations are queued to wait.
- When calling Cloud Run functions in a parallel for step, you can save costs by setting the concurrency so that multiple items are processed by the same Cloud Run function instance.

### Best practices for Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- Source ID: `site-api-reference-required-2`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following counts as one step: - type check : return : if(get type((int("6"))) == integer, 1, 2) Key operations that count and don't count toward the maximum steps limit are categorized in the following table: Category Operation Counts as a step Data operations: Assigning, returning values Controlling flow: Jumps ( next ), switches, starting a for loop, and each iteration of a for loop Calls: Invoking sys.get env or other standard library function, another workflow, or a connector Concurrency: Spawning threads and parallel execution Error handling: Each raise , try , retry , and except block counts as a separate step, even if other operations are part of the same larger step.
- General tips Avoid hardcoding URLs Use nested steps Wrap expressions Use declarative calls Store only what you need Use subworkflows and external workflows Best practices Use Workflows connectors Run workflow steps in parallel Apply retries and the saga pattern Use callbacks to wait Orchestrate long-running jobs Containerize long-running tasks Run command-line tools from Workflows Use Terraform to create your workflow Deploy a workflow from a Git repository Optimize usage What's next Security best practices Debugging overview Troubleshoot issues Known issues for Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example - runQuery : call : googleapis.bigquery.v2.jobs.query args : projectId : ${sys.get env("GOOGLE CLOUD PROJECT ID")} body : useLegacySql : false useQueryCache : false timeoutMs : 30000 Find top 100 titles with most views on Wikipedia query : ${ "SELECT TITLE, SUM(views) FROM bigquery-samples.wikipedia pageviews." + table + " WHERE LENGTH(TITLE) > 10 GROUP BY TITLE ORDER BY SUM(VIEWS) DESC LIMIT 100" } result : queryResult For the entire workflow definition, see Run multiple BigQuery jobs in parallel .
- Store only what you need Keep memory consumption under control so that you don't encounter resource limits or an error that indicates this such as ResourceLimitError , MemoryLimitExceededError , or ResultSizeLimitExceededError .

### "Replace experimental function with parallel\_step \_|\_ Workflows \_|\_\

- URL: [https://docs.cloud.google.com/workflows/docs/migrate-function-to-parallel](https://docs.cloud.google.com/workflows/docs/migrate-function-to-parallel)
- Source ID: `site-api-reference-required-2`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML main : params : [ args ] steps : - init : assign : - workflow id : "translate" - texts to translate : - text : "hello world!" source : "en" target : "fr" - text : "你好 世界！" source : "zh-CN" target : "en" - text : "No hablo español!" source : "es" target : "en" - translated : [ "" , "" , "" ] - parallel translate : parallel : shared : [ translated ] # to write to this variable, you must share it for : range : ${[0, len(texts to translate) - 1]} value : i steps : - basic translate : call : googleapis.translate.v2.translations.translate args : body : q : ${args.text} target : ${args.target} format : "text" source : ${args.source} result : r - set result : assign : - translated[i] : ${r} - return : return : ${translated} JSON { "main" : { "params" : [ "args" ], "steps" : [ { "init" : { "assign" : [ { "workflow id" : "translate" }, { "texts to translate" : [ { "text" : "hello world!" , "source" : "en" , "target" : "fr" }, { "text" : "你好 世界！" , "source" : "zh-CN" , "target" : "en" }, { "text" : "No hablo español!" , "source" : "es" , "target" : "en" } ] }, { "translated" : [ "" , "" , "" ] } ] } }, { "parallel translate" : { "parallel" : { "shared" : [ "translated" ], "for" : { "range" : "${[0, len(texts to translate) - 1]}" , "value" : "i" , "steps" : [ { "basic translate" : { "call" : "googleapis.translate.v2.translations.translate" , "args" : { "body" : { "q" : "${args.text}" , "target" : "${args.target}" , "format" : "text" , "source" : "${args.source}" } }, "result" : "r" } }, { "set result" : { "assign" : [ { "translated[i]" : "${r}" } ] } } ] } } } }, { "return" : { "return" : "${translated}" } } ] } } What's next Execute workflow steps in parallel Quotas and limits for parallel steps Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- YAML main : params : [] steps : - init : assign : - workflow id : "translate" - texts to translate : - text : "hello world!" source : "en" target : "fr" - text : "你好 世界！" source : "zh-CN" target : "en" - text : "No hablo español!" source : "es" target : "en" - translated : [ "" , "" , "" ] # to write to this variable, you must share it - parallel translate : parallel : shared : [ translated ] for : range : ${[0, len(texts to translate) - 1]} value : i steps : - translate : call : googleapis.workflowexecutions.v1.projects.locations.workflows.executions.run args : workflow id : ${workflow id} argument : ${texts to translate[i]} result : r - set result : assign : - translated[i] : ${r} - return : return : ${translated} JSON { "main" : { "params" : [], "steps" : [ { "init" : { "assign" : [ { "workflow id" : "translate" }, { "texts to translate" : [ { "text" : "hello world!" , "source" : "en" , "target" : "fr" }, { "text" : "你好 世界！" , "source" : "zh-CN" , "target" : "en" }, { "text" : "No hablo español!" , "source" : "es" , "target" : "en" } ] }, { "translated" : [ "" , "" , "" ] } ] } }, { "parallel translate" : { "parallel" : { "shared" : [ "translated" ], "for" : { "range" : "${[0, len(texts to translate) - 1]}" , "value" : "i" , "steps" : [ { "translate" : { "call" : "googleapis.workflowexecutions.v1.projects.locations.workflows.executions.run" , "args" : { "workflow id" : "${workflow id}" , "argument" : "${texts to translate[i]}" }, "result" : "r" } }, { "set result" : { "assign" : [ { "translated[i]" : "${r}" } ] } } ] } } } }, { "return" : { "return" : "${translated}" } } ] } } Inline the workflow source code If the secondary workflow is relatively brief, you might want to include it directly within the main workflow for easier readability.
- YAML main : params : [] steps : - init : assign : - workflow id : "translate" - texts to translate : - text : "hello world!" source : "en" target : "fr" - text : "你好 世界！" source : "zh-CN" target : "en" - text : "No hablo español!" source : "es" target : "en" - translated : [ "" , "" , "" ] # to write to this variable, you must share it - parallel translate : parallel : shared : [ translated ] for : in : ${texts to translate} index : i # optional, use if index is required value : arg steps : - translate : call : googleapis.workflowexecutions.v1.projects.locations.workflows.executions.run args : workflow id : ${workflow id} argument : ${arg} result : r - set result : assign : - translated[i] : ${r} - return : return : ${translated} JSON { "main" : { "params" : [], "steps" : [ { "init" : { "assign" : [ { "workflow id" : "translate" }, { "texts to translate" : [ { "text" : "hello world!" , "source" : "en" , "target" : "fr" }, { "text" : "你好 世界！" , "source" : "zh-CN" , "target" : "en" }, { "text" : "No hablo español!" , "source" : "es" , "target" : "en" } ] }, { "translated" : [ "" , "" , "" ] } ] } }, { "parallel translate" : { "parallel" : { "shared" : [ "translated" ], "for" : { "in" : "${texts to translate}" , "index" : "i" , "value" : "arg" , "steps" : [ { "translate" : { "call" : "googleapis.workflowexecutions.v1.projects.locations.workflows.executions.run" , "args" : { "workflow id" : "${workflow id}" , "argument" : "${arg}" }, "result" : "r" } }, { "set result" : { "assign" : [ { "translated[i]" : "${r}" } ] } } ] } } } }, { "return" : { "return" : "${translated}" } } ] } } Replace experimental.executions.map with a for:range loop Instead of using the experimental function, you can use a parallel for:range loop to translate the text.
- YAML main : steps : - init : assign : - workflow id : "translate" - texts to translate : - text : "hello world!" source : "en" target : "fr" - text : "你好 世界！" source : "zh-CN" target : "en" - text : "No hablo español!" source : "es" target : "en" - translate texts : call : experimental.executions.map args : workflow id : ${workflow id} arguments : ${texts to translate} result : translated - return : return : ${translated} JSON { "main" : { "steps" : [ { "init" : { "assign" : [ { "workflow id" : "translate" }, { "texts to translate" : [ { "text" : "hello world!" , "source" : "en" , "target" : "fr" }, { "text" : "你好 世界！" , "source" : "zh-CN" , "target" : "en" }, { "text" : "No hablo español!" , "source" : "es" , "target" : "en" } ] } ] } }, { "translate texts" : { "call" : "experimental.executions.map" , "args" : { "workflow id" : "${workflow id}" , "arguments" : "${texts to translate}" }, "result" : "translated" } }, { "return" : { "return" : "${translated}" } } ] } } The output should resemble the following: [ { "data" : { "translations" : [ { "translatedText" : "Bonjour le monde!" } ] } }, { "data" : { "translations" : [ { "translatedText" : "Hello world!" } ] } }, { "data" : { "translations" : [ { "translatedText" : "I don't speak Spanish!" } ] } } ] Replace experimental.executions.map with a for:in loop Instead of using the experimental function, you can use a parallel for:in loop to translate the text.

