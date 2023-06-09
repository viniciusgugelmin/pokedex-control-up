import { MessageBrokerDTO } from "../MessageBrokerDTO";
import { Channel } from "amqplib";

namespace QueueDTO {
  export type queueName = "hello" | "battle";

  export type exchangeName = "default";

  export interface IQueue {
    name: queueName;

    listen(
      messageBroker: MessageBrokerDTO.IMessageBroker,
      channel: Channel
    ): Promise<void>;
  }
}

export { QueueDTO };
