import { MessageBrokerDTO } from "../MessageBrokerDTO";
import { Channel } from "amqplib";

namespace QueueDTO {
  export type queueName = "hello";

  export interface IQueue {
    name: queueName;

    listen(
      messageBroker: MessageBrokerDTO.IMessageBroker,
      channel: Channel
    ): Promise<void>;
  }
}

export { QueueDTO };
