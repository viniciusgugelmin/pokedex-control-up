import { QueueDTO } from "./QueueDTO";
import { Channel, Message } from "amqplib";
import { MessageBrokerDTO } from "../MessageBrokerDTO";

class QueueAbstract {
  constructor(public readonly name: QueueDTO.queueName) {}

  protected fromMessage(message: Message): any {
    return JSON.parse(message.content.toString());
  }

  protected async listen(
    messageBroker: MessageBrokerDTO.IMessageBroker,
    channel: Channel,
    callback: (message) => Promise<void> | void
  ) {
    await messageBroker.consume({
      channel,
      queue: this.name,
      callback: async (message) => {
        await callback(message);
      },
    });
  }
}

export { QueueAbstract };
