import { MessageBrokerAbstract } from "./MessageBrokerAbstract";
import { MessageBrokerDTO } from "./MessageBrokerDTO";
import { QueueDTO } from "./Queues/QueueDTO";

export class MessageBroker
  extends MessageBrokerAbstract
  implements MessageBrokerDTO.IMessageBroker
{
  constructor() {
    super();
  }

  public async init() {
    await super.init();
  }

  public async getQueues(queues: QueueDTO.IQueue[]) {
    for (const queue of queues) {
      if (!queue) continue;

      this.queues.push({ queue, name: queue.name });
    }

    await this.listenQueues(this);
  }

  public async sendToQueue({
    queue,
    body,
  }: MessageBrokerDTO.SendToQueueDTO): MessageBrokerDTO.SendToQueueResponseDTO {
    return this.channel.sendToQueue(queue, MessageBroker.toMessage(body));
  }

  public async consume({
    queue,
    channel,
    callback,
  }: MessageBrokerDTO.ConsumeDTO): MessageBrokerDTO.ConsumeResponseDTO {
    await channel.consume(queue, (message) => {
      callback(message);
      channel.ack(message);
    });
  }
}
