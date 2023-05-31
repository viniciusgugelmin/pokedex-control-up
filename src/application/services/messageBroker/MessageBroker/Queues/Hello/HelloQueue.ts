import { QueueAbstract } from "../QueueAbstract";
import { QueueDTO } from "../QueueDTO";

class HelloQueue extends QueueAbstract implements QueueDTO.IQueue {
  constructor() {
    super("hello");
  }

  public async listen(messageBroker, channel) {
    await super.listen(messageBroker, channel, async (message) => {
      console.log("HelloQueue: ", this.fromMessage(message));
    });
  }
}

export { HelloQueue };
