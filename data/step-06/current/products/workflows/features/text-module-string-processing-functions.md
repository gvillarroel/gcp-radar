---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.529Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Text module string processing functions"
feature_slug: "text-module-string-processing-functions"
latest_feature_date: "2021-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview"
  - "https://docs.cloud.google.com/workflows/docs/best-practice"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run"
keywords:
  - "processing"
  - "module"
  - "functions"
  - "string"
  - "text"
  - "standard"
  - "library"
---

# Text module string processing functions

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The Workflows standard library text module provides string processing functions.

## Extended Definition

The Workflows standard library text module provides string processing functions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run)

## Supporting Pages

### Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- Source ID: `site-api-reference-required-2`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Functions decode Decodes given data to string, assuming the specified character set. encode Encodes given text to bytes, using the specified character set. find all Finds the index of all instances of a substring in a string. find all regex Finds all matches of a regular expression in a string. match regex Reports whether a string contains a match of a regular expression. replace all Replaces all instances of a substring with a new string. replace all regex Replaces all matches of a regular expression with a new string. split Splits the source string into a list of all substrings between each instance of the separator. substring Extracts the substring between two zero-based indexes of a source string. to lower Returns a string with all Unicode letters mapped to their lowercase. to upper Returns a string with all Unicode letters mapped to their uppercase. url decode Returns a string with pluses and percent-escaped characters converted to UTF-8. url encode Returns a string with percent-encoded reserved characters, including spaces. url encode plus Returns a string with percent-encoded reserved characters, and spaces replaced by pluses ( + ).
- The Workflows standard library modules allow you to easily construct arguments for services and process responses.
- Functions decode Decodes given Base64-encoded string to bytes. encode Encodes given bytes to Base64 text.
- Functions get env Retrieves the value of the specified environment variable. log Writes one of data , text , or json to the log at specified severity. now Returns Unix time, as a floating-point number. sleep Suspends execution for the given number of seconds. sleep until Suspends execution until the given time.

### Best practices for Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- Source ID: `site-api-reference-required-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following counts as one step: - type check : return : if(get type((int("6"))) == integer, 1, 2) Key operations that count and don't count toward the maximum steps limit are categorized in the following table: Category Operation Counts as a step Data operations: Assigning, returning values Controlling flow: Jumps ( next ), switches, starting a for loop, and each iteration of a for loop Calls: Invoking sys.get env or other standard library function, another workflow, or a connector Concurrency: Spawning threads and parallel execution Error handling: Each raise , try , retry , and except block counts as a separate step, even if other operations are part of the same larger step.
- Example variable "project id" { type = string } variable "url1" { type = string } variable "url2" { type = string } locals { env = [ "staging", "prod" ] } Define and deploy staging and production workflows resource "google workflows workflow" "multi-env-workflows" { for each = toset ( local.env ) name = "multi-env-${each.key}" project = var.project id region = "us-central1" source contents = templatefile ( "${path.module}/workflow.yaml", { url1 : "${var.url1}-${each.key}", url2 : "${var.url2}-${each.key}" }) } When variables are declared in the root module of your configuration, they can be assigned values in a number of ways.
- Specific built-in expression helper functions : len() , int() , and get type() Comparison and arithmetic operations String concatenation Boolean operations Summary of best practices The following table summarizes the general tips and best practices recommended in this document.
- However, you should create services to do any work that is too complex for Workflows; for example, implementing reusable business logic, complex computations, or transformations that are not supported by Workflows expressions and its standard library .

### "Use Workflows with Cloud Run and Cloud Run functions tutorial \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Navigate back to your home directory: cd Create a directory called multiply and change to it: mkdir /multiply cd /multiply Create a text file with the filename main.py that contains the following Python code: import functions framework from flask import jsonify @functions framework . http def multiply ( request ): request json = request . get json () output = { "multiplied" : 2 request json [ 'input' ]} return jsonify ( output ) To support a dependency on Flask for HTTP processing, create a text file for the pip package manager.
- Create a directory called randomgen and change to it: mkdir /randomgen cd /randomgen Create a text file with the filename main.py that contains the following Python code: import functions framework import random from flask import jsonify @functions framework . http def randomgen ( request ): randomNum = random . randint ( 1 , 100 ) output = { "random" : randomNum } return jsonify ( output ) To support a dependency on Flask for HTTP processing, create a text file for the pip package manager.
- To create more complex workflows using expressions, conditional jumps, Base64 encoding or decoding, subworkflows, and more, refer to the Workflows syntax reference and the Standard library overview .
- Create a directory called floor and change to it: mkdir /floor cd /floor Create a text file with the filename app.py that contains the following Python code: import json import logging import os import math from flask import Flask , request app = Flask ( name ) @app . route ( '/' , methods = [ 'POST' ]) def handle post (): content = json . loads ( request . data ) input = float ( content [ 'input' ]) return f " { math . floor ( input ) } " , 200 if name != ' main ' : Redirect Flask logs to Gunicorn logs gunicorn logger = logging . getLogger ( 'gunicorn.error' ) app . logger . handlers = gunicorn logger . handlers app . logger . setLevel ( gunicorn logger . level ) app . logger . info ( 'Service started...' ) else : app . run ( debug = True , host = '0.0.0.0' , port = int ( os . environ . get ( 'PORT' , 8080 ))) In the same directory, create a Dockerfile with the following content: Use an official lightweight Python image. https://hub.docker.com/ /python FROM python:3.7-slim Install production dependencies.

