import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import {Error, Ok, Result} from "./shared/result"

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

async function getByKey<T>(id: string) : Promise<Result<T>> {
  const command = await dynamo.send(
    new GetCommand({
      TableName: "ProductsTable",
      Key: {
        id,
      },
    })
  );

  if(!command.Item)
    return {message: "Item not found"} as Error

  return {
    data: unmarshall(command.Item!)
  } as Ok<T>
}

function addItem<T>(item: T) {
  return dynamo.send(
    new PutCommand({
      TableName: "ProductsTable",
      Item: marshall(item),
    })
  );
}
