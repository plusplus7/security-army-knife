export interface message {
    action: ActionType;
    data: any;
}

export type ActionType = 'CLIPBOARD_COPY';