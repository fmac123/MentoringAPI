import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs"

export function createGetAllProductsLambda(scope: Construct) {
  new NodejsFunction(scope, 'getAllProducts', {
    runtime: lambda.Runtime.NODEJS_18_X,
    entry: "./src/handlers/endpoints/getAllProducts.ts",
    handler: "main",
  })
}

export function createSalesEventConsumerLambda(scope: Construct)  {
  new NodejsFunction(scope, 'salesEventConsumer', {
    runtime: lambda.Runtime.NODEJS_18_X,
    entry: "./src/handlers/consumers/salesEventConsumer.ts",
    handler: "main",
  })
}