// import { Construct } from "constructs"
// import * as lambda from "aws-cdk-lib/aws-lambda";
// import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

// export function createSaleLambda(scope: Construct): NodejsFunction {
//     return new NodejsFunction(this, 'createSaleLambda', {
//         runtime: lambda.Runtime.NODEJS_18_X,
//         entry: "./src/handlers/createSale.ts",
//         handler: "createSale/main",
//         environment: {}
//     })

// }