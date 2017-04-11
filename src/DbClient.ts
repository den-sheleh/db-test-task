interface DbClient {
  getValue (): Promise<{ test: number }>
}
