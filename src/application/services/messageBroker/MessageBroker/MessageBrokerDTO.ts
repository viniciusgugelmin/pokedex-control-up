import { Channel, Message } from "amqplib";
import { QueueDTO } from "./Queues/QueueDTO";

namespace MessageBrokerDTO {
  export interface IMessageBroker {
    init(): InitResponseDTO;

    sendToQueue(data: SendToQueueDTO): SendToQueueResponseDTO;

    sendToExchange(data: SendToExchangeDTO): SendToExchangeResponseDTO;

    consume(data: ConsumeDTO): ConsumeResponseDTO;
  }

  export type InitResponseDTO = Promise<void>;

  export type SendToQueueDTO = {
    queue: QueueDTO.queueName;
    body: any;
  };

  export type SendToQueueResponseDTO = Promise<boolean>;

  export type SendToExchangeDTO = {
    exchange: QueueDTO.exchangeName;
    routingKey: string;
    body: any;
  };

  export type SendToExchangeResponseDTO = Promise<boolean>;

  export type ConsumeDTO = {
    queue: QueueDTO.queueName;
    channel: Channel;
    callback: (message: Message) => void;
  };

  export type ConsumeResponseDTO = Promise<void>;
}

export { MessageBrokerDTO };
