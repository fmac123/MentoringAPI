import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { ProductsTable } from '../../../stack/applicationConstants';
import { APIGatewayProxyEvent } from "aws-lambda";
import { randomUUID } from "crypto";
import { saleProcessedEvent } from "./models/saleEvent";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"
import { Product  } from '../../libs/models/product';



export async function main(event: APIGatewayProxyEvent) {
  const product = Product.validate(event.body)
  if(product.success)
    product.value.id
    
}


