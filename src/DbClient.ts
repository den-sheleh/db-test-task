interface DbClient {
  getValue (): Promise<{ test: number }>
}

export default DbClient;
