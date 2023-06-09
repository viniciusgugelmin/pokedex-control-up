import { Channel, connect, Connection } from "amqplib";
import { MessageBrokerDTO } from "./MessageBrokerDTO";
import { environment } from "../../../config/environment";
import { QueueDTO } from "./Queues/QueueDTO";

const { MESSAGE_BROKER_URI } = environment;

class MessageBrokerAbstract {
  private conn: Connection;
  protected channel: Channel;
  protected queues: Array<{ queue: QueueDTO.IQueue; name: string }> = [];

  constructor() {}

  protected async init() {
    this.conn = await connect(MESSAGE_BROKER_URI);
    this.channel = await this.conn.createChannel();
  }

  protected async listenQueues(messageBroker: MessageBrokerDTO.IMessageBroker) {
    const defaultExchange = "default";

    await this.channel.assertExchange(defaultExchange, "direct", {
      durable: true,
    });

    for (const { queue, name } of this.queues) {
      await this.channel.assertQueue(name);
      await this.channel.bindQueue(name, defaultExchange, name);
      await queue.listen(messageBroker, this.channel);
    }
  }

  protected static toMessage(body: any): Buffer {
    return Buffer.from(JSON.stringify(body));
  }
}

export { MessageBrokerAbstract };
