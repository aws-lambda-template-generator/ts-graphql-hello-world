# TypeScript Lambda GraphQL Hello World Example


## Installation

```bash
yarn add apollo-server-lambda graphql

# build error not found these modules, so manually installed them.
yarn add bufferutil utf-8-validate
```

## Testing lambda locally

Use Serverless Offline.

```bash
# Install
yarn add --dev serverless-offline

# Start local lambda by using sls offline command
sls offline start -r ap-southeast-1 --stage test

# Test with curl
curl -X POST http://localhost:3000/test/graphql/profile --data '{"query": "{hello}"}'
```

Playground is available.

Go to `http://localhost:3000/test/graphql`. You may need to change the actual query url within the query tab to `http://localhost:3000/test/graphql/profile`

# Deploy

Rename the folder: `config_template` --> `config` and fill all the necessary information (account number and AWS regions). Make sure your AWS CLI is configured correctly. Then, use sls command to deploy.

```bash
sls deplly --stage test
```

# Troubleshooting

### How to fix the error: "Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm."

Add Webpack node modules externals (https://www.npmjs.com/package/webpack-node-externals). When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack.

Error message

```
Failure: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
Error: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
```

