import { Construct } from "constructs"
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";


export function createSaleLambda(scope: Construct): NodejsFunction {
    const salesQueue = new sqs.Queue(scope, 'SalesApiQueue')

    return  new NodejsFunction(scope, 'createSaleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "./src/handlers/createSale.ts",
      handler: "main",
      // onSuccess: new destinations.SqsDestination(salesQueue),
  })

}