import { Session } from "inspector/promises";
import { writeFile } from "fs/promises";

export class InspectCPUProfiling {

    #session : Session;

    #eventsClosed = ["SIGINT", "SIGTERM", "SIGQUIT"];

    constructor(){
        this.#session = new Session();
    }


    async start(options : any) {
        this.#session.connect();

        await this.#session.post('Profiler.enable');
        await this.#session.post('Profiler.start');

        this.#eventsClosed.forEach(event => {
            process.once(event, async () => {
                await this.#stop({ path: options?.path });
            });
        });
    }

    async #stop(options : any) {
        const { profile } = await this.#session.post('Profiler.stop');

        await writeFile(`${options?.path}.cpuprofile`, JSON.stringify(profile), { flag: "w" });

        this.#session.disconnect();
    }
}


export function setupProfiling(options?: any) {
    const inspectCPUProfiling = new InspectCPUProfiling();
    inspectCPUProfiling.start({
        path: `profiling`,
    })
}