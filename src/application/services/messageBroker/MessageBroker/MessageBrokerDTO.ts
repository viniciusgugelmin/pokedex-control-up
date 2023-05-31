import { Channel, Message } from "amqplib";
import { QueueDTO } from "./Queues/QueueDTO";

namespace MessageBrokerDTO {
  export interface IMessageBroker {
    init(): InitResponseDTO;

    sendToQueue(data: SendToQueueDTO): SendToQueueResponseDTO;

    consume(data: ConsumeDTO): ConsumeResponseDTO;
  }

  export type InitResponseDTO = Promise<void>;

  export type SendToQueueDTO = {
    queue: QueueDTO.queueName;
    body: any;
  };

  export type SendToQueueResponseDTO = Promise<boolean>;

  export type ConsumeDTO = {
    queue: QueueDTO.queueName;
    channel: Channel;
    callback: (message: Message) => void;
  };

  export type ConsumeResponseDTO = Promise<void>;
}

export { MessageBrokerDTO };
