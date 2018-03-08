interface QueenDecimSettings {
    token: string,
    prefix: string,
    ownerId?: string,
    commands?: string[],
    commandsAutoRegister?: boolean,
    commandsAutoLoad?: boolean,
    throwErrorPM?: boolean
}

interface CommandRequest {
    command: string,
    arguments: string[]
}

interface CommandEntry {
    name: string,
    description: string,
    instance: any
}

interface CommandSettings {
    name: string,
    description: string
}