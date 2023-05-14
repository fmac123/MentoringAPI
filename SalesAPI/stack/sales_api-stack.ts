import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import { createSaleLambda } from './lambdas';
import { createSalesApi } from './apiGateway'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SalesApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const createSaleHandler = createSaleLambda(this)

    const createSaleHandler = new NodejsFunction(this, 'createSaleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "./src/handlers/createSale.ts",
      handler: "createSale/main",
  })
    createSalesApi(this, createSaleHandler)

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'SalesApiQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
