import { Construct } from "constructs"
import * as lambda from "aws-cdk-lib/aws-lambda";

export function createSaleLambda(scope: Construct): lambda.Function {
    return new lambda.Function(scope, 'createSaleLambda', {
        runtime: lambda.Runtime.NODEJS_18_X,
        code: lambda.Code.fromAsset(""),
        handler: "createSale.ts",
        environment: {}
    })

}