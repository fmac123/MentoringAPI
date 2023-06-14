import { Construct } from "constructs"
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from 'aws-cdk-lib/core';
import { SalesTopicArnCfnOutput } from "../applicationConstants";
import * as iam from 'aws-cdk-lib/aws-iam';


export function createSaleLambda(scope: Construct, salesTopicArn: string): NodejsFunction {

    const salesLambda = new NodejsFunction(scope, 'createSaleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "./src/handlers/createSale.ts",
      handler: "main",
      environment: {
        SALES_TOPIC_ARN: salesTopicArn,
      },
  })

  return salesLambda

}