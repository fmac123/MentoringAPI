import { APIGatewayProxyEvent } from "aws-lambda";
import { randomUUID } from "crypto";
import { saleProcessedEvent } from "./models/saleEvent";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"

export async function main(event: APIGatewayProxyEvent) {
    const newSale: saleProcessedEvent  = {
        saleAggregateID: randomUUID(),
        productAggregateID: randomUUID(),
        processedDate: new Date().toISOString()
    }

    const snsClient = new SNSClient({ region: "ap-southeast-2" })

try {
    await snsClient.send(new PublishCommand({
        TopicArn: process.env.SALES_TOPIC_ARN,
        Message: JSON.stringify(newSale)
    }))
} catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({
            message: `Failed to process sale ${error}`
        })}
}
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World"
        })
    }
}